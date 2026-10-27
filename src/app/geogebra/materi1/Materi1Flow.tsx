"use client";

import Script from "next/script";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import DoneStage from "../shared/DoneStage";
import IntroStage from "../shared/IntroStage";
import ShapeStage from "../shared/ShapeStage";
import SufficiencyStage from "../shared/SufficiencyStage";
import {
  ALL_SOLID_IDS,
  POLYGON_N_DEFAULT,
  solidFor,
  type SolidId,
} from "../shared/solids";
import { Btn, BtnRow, Hint, Note, Prompt, StageTitle } from "../shared/ui";
import {
  useGeoGebra,
  type FacePaint,
  type SceneClick,
} from "../shared/useGeoGebra";
import AspectPanel from "./AspectPanel";
import { ASPECTS, type AspectId } from "./content";

type Stage =
  | "intro"
  | "shape"
  | "aspects"
  | "aspect"
  | "sufficiency"
  | "compare-pick"
  | "compare"
  | "done";

const FLASH_MS = 1400;
const FLASH_ASPECTS: AspectId[] = ["bentuk-sisi", "bidang-sejajar"];

const toggled = (list: string[], item: string) =>
  list.includes(item) ? list.filter((x) => x !== item) : [...list, item];

export default function Materi1Flow() {
  const [stage, setStage] = useState<Stage>("intro");
  const [solidId, setSolidId] = useState<SolidId | null>(null);
  const [polygonN, setPolygonN] = useState(POLYGON_N_DEFAULT);
  const [aspect, setAspect] = useState<AspectId | null>(null);
  const [picks, setPicks] = useState<string[]>([]);
  const [countedFaces, setCountedFaces] = useState<string[]>([]);
  const [countedEdges, setCountedEdges] = useState<string[]>([]);
  const [countedVertices, setCountedVertices] = useState<string[]>([]);
  const [verticesOn, setVerticesOn] = useState(true);
  const [sufficiencyStep, setSufficiencyStep] = useState<"check" | "more">("check");
  const [visited, setVisited] = useState<SolidId[]>([]);
  const [pair, setPair] = useState<[SolidId, SolidId] | null>(null);
  const [compareDone, setCompareDone] = useState(false);
  const [finished, setFinished] = useState(false);
  const flashTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const solid = solidFor(solidId ?? "kubus", polygonN);
  const comparing = stage === "compare" && pair !== null;
  const comparedKey = comparing ? pair.join("|") : "";
  const sceneSolids = useMemo(
    () =>
      comparing
        ? [solidFor(pair[0], polygonN), solidFor(pair[1], polygonN)]
        : [solid],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [comparing, comparedKey, solid.label],
  );
  const sceneKey = sceneSolids.map((s) => s.label).join("|");

  const handleClick = useCallback(
    (click: SceneClick) => {
      if (stage !== "aspect" || !aspect) return;
      if (click.kind === "face") {
        const face = click.face;
        if (FLASH_ASPECTS.includes(aspect)) {
          if (flashTimer.current) clearTimeout(flashTimer.current);
          setPicks([face]);
          flashTimer.current = setTimeout(() => setPicks([]), FLASH_MS);
        } else if (aspect === "susunan-sisi" || aspect === "pola-lain") {
          setPicks((prev) => toggled(prev, face));
        } else if (aspect === "alas") {
          setPicks([face]);
        } else if (aspect === "jumlah-sisi") {
          setCountedFaces((prev) => (prev.includes(face) ? prev : [...prev, face]));
        }
      } else if (click.kind === "edge" && aspect === "jumlah-rusuk") {
        setCountedEdges((prev) =>
          prev.includes(click.edgeKey) ? prev : [...prev, click.edgeKey],
        );
      } else if (click.kind === "vertex" && aspect === "jumlah-titik") {
        const key = String(click.index);
        setCountedVertices((prev) => (prev.includes(key) ? prev : [...prev, key]));
      }
    },
    [stage, aspect],
  );

  const { apiReady, containerRef, loadScene, markScriptReady, paint } = useGeoGebra(handleClick);

  useEffect(() => {
    if (!apiReady) return;
    loadScene(sceneSolids, { vertices: true, compact: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiReady, sceneKey]);

  useEffect(() => {
    if (!apiReady) return;
    const faces = new Map<string, FacePaint>();
    if (stage === "aspect" && aspect) {
      if (aspect === "jumlah-sisi") {
        countedFaces.forEach((f, i) =>
          faces.set(`0:${f}`, { tone: "orange", label: `Sisi ${i + 1}` }),
        );
      } else {
        const tone =
          aspect === "alas" ? "alas" : aspect === "susunan-sisi" ? "b" : "focus";
        picks.forEach((f) => faces.set(`0:${f}`, { tone }));
      }
    }
    paint({
      faces,
      countedEdges: new Set(countedEdges.map((k) => `0:${k}`)),
      countedVertices: new Set(countedVertices.map((k) => `0:${k}`)),
      verticesVisible: stage === "aspect" && aspect === "jumlah-titik" && verticesOn,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiReady, sceneKey, stage, aspect, picks, countedFaces, countedEdges, countedVertices, verticesOn]);

  useEffect(
    () => () => {
      if (flashTimer.current) clearTimeout(flashTimer.current);
    },
    [],
  );

  function clearProgress() {
    if (flashTimer.current) clearTimeout(flashTimer.current);
    setPicks([]);
    setCountedFaces([]);
    setCountedEdges([]);
    setCountedVertices([]);
    setVerticesOn(true);
  }

  function selectSolid(id: SolidId) {
    clearProgress();
    setSolidId(id);
    setVisited((prev) => (prev.includes(id) ? prev : [...prev, id]));
    setStage("aspects");
  }

  function toMenu() {
    clearProgress();
    setStage("aspects");
  }

  function selectAspect(id: AspectId) {
    clearProgress();
    setAspect(id);
    setStage("aspect");
  }

  const pairs = visited.flatMap((a, i) =>
    visited.slice(i + 1).map((b): [SolidId, SolidId] => [a, b]),
  );
  const toSufficiency = () => {
    setSufficiencyStep("check");
    setStage("sufficiency");
  };

  return (
    <div className="flex h-full w-full flex-col gap-4 overflow-y-auto p-4 lg:flex-row lg:overflow-hidden">
      <Script
        src="https://www.geogebra.org/apps/deployggb.js"
        strategy="afterInteractive"
        onReady={markScriptReady}
      />

      <aside className="order-2 flex w-full shrink-0 flex-col gap-3 lg:order-1 lg:w-96 lg:overflow-y-auto lg:pr-1">
        {stage === "intro" && (
          <IntroStage
            prompt="Pilih bangun ruang yang perlu kamu amati. Putar dan amati model dari berbagai arah, kemudian cari informasi yang diperlukan untuk menyelidiki dugaan kelompokmu."
            startLabel="Menu Eksplorasi"
            onStart={() => setStage("shape")}
          />
        )}
        {stage === "shape" && (
          <ShapeStage
            ids={ALL_SOLID_IDS}
            title="Pilih Bangun Ruang"
            note="Saat salah satu dipilih, hanya model tersebut yang menjadi fokus pada tampilan 3D."
            current={solidId}
            polygonN={polygonN}
            onPolygonN={setPolygonN}
            onSelect={selectSolid}
          />
        )}
        {stage === "aspects" && (
          <>
            <StageTitle>Eksplorasi Model {solid.label}</StageTitle>
            <Note>↻ Putar model · 🔍 Perbesar/perkecil · 👁 Lihat dari berbagai arah</Note>
            <StageTitle>Apa yang ingin kamu selidiki?</StageTitle>
            <ul className="flex flex-col gap-2">
              {ASPECTS.map((a) => (
                <li key={a.id}>
                  <button
                    type="button"
                    onClick={() => selectAspect(a.id)}
                    className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-left text-sm font-medium text-gray-800 hover:bg-gray-50"
                  >
                    ☐ {a.label}
                  </button>
                </li>
              ))}
            </ul>
            <Note>
              Pilih informasi yang kamu perlukan untuk menyelidiki dugaan
              kelompokmu. Kamu tidak harus mengamati semuanya.
            </Note>
            <BtnRow>
              <Btn onClick={toSufficiency}>Periksa Kecukupan Data</Btn>
              <Btn onClick={() => setStage("shape")}>Pilih Bangun Lain</Btn>
            </BtnRow>
          </>
        )}
        {stage === "aspect" && aspect && (
          <AspectPanel
            key={`${solid.label}:${aspect}`}
            aspect={aspect}
            solidLabel={solid.label}
            counts={{
              sisi: countedFaces.length,
              rusuk: countedEdges.length,
              titik: countedVertices.length,
            }}
            verticesVisible={verticesOn}
            canCompare={pairs.length > 0}
            onToggleVertices={() => setVerticesOn((v) => !v)}
            onToMenu={toMenu}
            onToSufficiency={toSufficiency}
            onToCompare={() => setStage("compare-pick")}
          />
        )}
        {stage === "sufficiency" && (
          <SufficiencyStage
            step={sufficiencyStep}
            question="Apakah informasi yang kamu peroleh sudah cukup untuk menyelidiki dugaan kelompokmu?"
            onEnough={() => setStage("done")}
            onNeedMore={() => setSufficiencyStep("more")}
            onMoreAspect={toMenu}
            onOtherSolid={() => setStage("shape")}
          />
        )}
        {stage === "compare-pick" && (
          <>
            <StageTitle>Bandingkan Temuanmu</StageTitle>
            {pairs.length === 0 ? (
              <Hint>Amati minimal dua bangun terlebih dahulu.</Hint>
            ) : (
              <ul className="flex flex-col gap-2">
                {pairs.map(([a, b]) => (
                  <li key={`${a}:${b}`}>
                    <button
                      type="button"
                      onClick={() => {
                        setPair([a, b]);
                        setCompareDone(false);
                        setStage("compare");
                      }}
                      className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-left text-sm font-semibold hover:bg-gray-50"
                    >
                      {solidFor(a, polygonN).label} ↔ {solidFor(b, polygonN).label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <div>
              <Btn onClick={toMenu}>Kembali ke Aspek Pengamatan</Btn>
            </div>
          </>
        )}
        {stage === "compare" && pair && (
          <>
            <StageTitle>Bandingkan Bangun</StageTitle>
            <Note>
              {solidFor(pair[0], polygonN).label} ↔ {solidFor(pair[1], polygonN).label}
            </Note>
            <Prompt>
              Apa persamaan dan perbedaan yang kamu temukan berdasarkan aspek
              yang sedang kamu selidiki?
            </Prompt>
            {compareDone ? (
              <BtnRow>
                <Btn onClick={() => setStage("compare-pick")}>Bandingkan Bangun Lain</Btn>
                <Btn onClick={toMenu}>Kembali ke Aspek Pengamatan</Btn>
                <Btn variant="primary" onClick={toSufficiency}>
                  Periksa Kecukupan Data
                </Btn>
              </BtnRow>
            ) : (
              <div>
                <Btn variant="primary" onClick={() => setCompareDone(true)}>
                  Catat Hasil Perbandingan
                </Btn>
              </div>
            )}
          </>
        )}
        {stage === "done" && (
          <DoneStage
            body="Gunakan hasil pengamatanmu untuk melengkapi Tabel Hasil Pengamatan GeoGebra pada e-module. Ingat, data yang kamu kumpulkan akan digunakan untuk menyelidiki dugaan kelompokmu."
            finished={finished}
            onFinish={() => setFinished(true)}
          />
        )}
      </aside>

      <div className="order-1 flex min-h-[70vh] w-full flex-1 flex-col gap-3 lg:order-2 lg:min-h-0">
        <div
          ref={containerRef}
          className="min-h-[360px] w-full flex-1 overflow-hidden rounded-lg border border-gray-200 bg-white"
        />
      </div>
    </div>
  );
}
