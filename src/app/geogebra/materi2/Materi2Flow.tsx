"use client";

import Script from "next/script";
import { useCallback, useEffect, useMemo, useState } from "react";
import DoneStage from "../shared/DoneStage";
import FoldControls from "../shared/FoldControls";
import { arrangementCount, describeFaces } from "../shared/geometry";
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
import { useFoldAnimation } from "../shared/useFoldAnimation";
import {
  useGeoGebra,
  type FacePaint,
  type SceneClick,
} from "../shared/useGeoGebra";
import AspectPanel, { type PanelContext } from "./AspectPanel";
import { ASPECTS, type AspectId } from "./content";
import RecordBlock from "./RecordBlock";

type Stage =
  | "intro"
  | "shape"
  | "observe"
  | "aspects"
  | "aspect"
  | "sufficiency"
  | "compare-arr"
  | "done";

const SINGLE_PICK: AspectId[] = ["posisi"];
const DOUBLE_PICK: AspectId[] = ["hubungan"];

export default function Materi2Flow() {
  const [stage, setStage] = useState<Stage>("intro");
  const [solidId, setSolidId] = useState<SolidId | null>(null);
  const [polygonN, setPolygonN] = useState(POLYGON_N_DEFAULT);
  const [opened, setOpened] = useState(false);
  const [aspect, setAspect] = useState<AspectId | null>(null);
  const [picks, setPicks] = useState<string[]>([]);
  const [arrangement, setArrangement] = useState(0);
  const [tested, setTested] = useState<number[]>([]);
  const [compare, setCompare] = useState<[number, number] | null>(null);
  const [sufficiencyStep, setSufficiencyStep] = useState<"check" | "more">("check");
  const [finished, setFinished] = useState(false);

  const solid = solidFor(solidId ?? "kubus", polygonN);
  const faces = useMemo(() => describeFaces(solid), [solid]);
  const total = arrangementCount(solid);
  const comparing = stage === "compare-arr" && compare !== null;
  const sceneSolids = useMemo(
    () => (comparing ? [solid, solid] : [solid]),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [solid.label, comparing],
  );
  const sceneKey = `${sceneSolids.map((s) => s.label).join("|")}:${compare?.join(",") ?? ""}:${stage === "compare-arr"}`;

  const handleClick = useCallback(
    (click: SceneClick) => {
      if (stage !== "aspect" || !aspect || click.kind !== "face") return;
      const face = click.face;
      if (SINGLE_PICK.includes(aspect)) setPicks([face]);
      else if (DOUBLE_PICK.includes(aspect))
        setPicks((prev) =>
          prev.length === 1 && prev[0] !== face ? [prev[0], face] : [face],
        );
      else if (aspect === "pola-lain")
        setPicks((prev) =>
          prev.includes(face) ? prev.filter((p) => p !== face) : [...prev, face].slice(-2),
        );
    },
    [stage, aspect],
  );

  const { apiReady, containerRef, loadScene, markScriptReady, paint, setArrangement: applyArrangement, setFold } = useGeoGebra(handleClick);
  const fold = useFoldAnimation(setFold);

  useEffect(() => {
    if (!apiReady) return;
    fold.reset();
    loadScene(
      sceneSolids,
      stage === "compare-arr" && compare
        ? { arrangements: compare }
        : { allArrangements: true },
    );
    if (stage === "compare-arr" || opened) {
      sceneSolids.forEach((_, i) => fold.set(i, 1));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiReady, sceneKey]);

  useEffect(() => {
    if (!apiReady || stage === "compare-arr") return;
    applyArrangement(0, arrangement);
  }, [apiReady, applyArrangement, arrangement, stage]);

  useEffect(() => {
    if (!apiReady) return;
    const paints = new Map<string, FacePaint>();
    if (stage === "aspect") {
      picks.forEach((face, i) =>
        paints.set(`0:${face}`, {
          tone: picks.length === 1 ? "focus" : i === 0 ? "a" : "b",
        }),
      );
    }
    paint({ faces: paints });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiReady, sceneKey, stage, picks]);

  function selectSolid(id: SolidId) {
    setSolidId(id);
    setOpened(false);
    setPicks([]);
    setArrangement(0);
    setTested([]);
    setStage("observe");
  }

  function toMenu() {
    setPicks([]);
    setStage("aspects");
  }

  function selectAspect(id: AspectId) {
    setAspect(id);
    setPicks([]);
    fold.animate(0, 1);
    setStage("aspect");
  }

  function chooseArrangement(index: number) {
    fold.set(0, 1);
    setArrangement(index);
  }

  function markTested() {
    setTested((prev) => (prev.includes(arrangement) ? prev : [...prev, arrangement]));
  }

  const toSufficiency = () => {
    setSufficiencyStep("check");
    setStage("sufficiency");
  };

  const ctx: PanelContext = {
    solidLabel: solid.label,
    picks,
    faceLabel: (key) => faces.find((f) => f.key === key)?.label ?? key,
    folded: fold.values[0] < 0.05,
    flat: fold.values[0] > 0.95,
    moving: fold.playing[0],
    animate: (target) => fold.animate(0, target),
    clearPicks: () => setPicks([]),
    arrangement,
    arrangementTotal: total,
    tested,
    chooseArrangement,
    markTested,
    toMenu,
    toSufficiency,
    toCompareArrangements: () => {
      const last = tested.slice(-2) as [number, number];
      setCompare(last);
      setStage("compare-arr");
    },
  };

  const showFold = (stage === "observe" && opened) || stage === "aspect" || stage === "compare-arr";
  const foldMode = stage === "aspect" && (aspect === "hasil" || aspect === "susunan") ? "lipat" : "buka";

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
            prompt="Pilih bangun ruang yang perlu kamu amati. Putar model dari berbagai arah, buka bangun hingga membentuk jaring-jaring, kemudian kumpulkan informasi yang diperlukan untuk menyelidiki dugaan kelompokmu."
            startLabel="Menu Eksplorasi"
            onStart={() => setStage("shape")}
          />
        )}
        {stage === "shape" && (
          <ShapeStage
            ids={ALL_SOLID_IDS}
            title="Pilih Bangun Ruang yang Ingin Kamu Selidiki"
            note="Pilih bangun yang kamu perlukan untuk menyelidiki dugaan kelompokmu. Kamu tidak harus mengamati semua bangun."
            current={solidId}
            polygonN={polygonN}
            onPolygonN={setPolygonN}
            onSelect={selectSolid}
          />
        )}
        {stage === "observe" && (
          <>
            <StageTitle>Eksplorasi Model {solid.label}</StageTitle>
            <Note>↻ Putar model · 🔍 Perbesar/perkecil · 👁 Lihat dari berbagai arah</Note>
            {opened ? (
              <>
                <Prompt>
                  Amati perubahan posisi setiap sisi ketika bangun dibuka.
                  Perhatikan bagaimana sisi-sisi bangun ruang tersusun menjadi
                  jaring-jaring.
                </Prompt>
                <div>
                  <Btn variant="primary" onClick={toMenu}>
                    Mulai Menyelidiki
                  </Btn>
                </div>
              </>
            ) : (
              <>
                <Prompt>Putar model dan amati sisi-sisinya dari berbagai arah.</Prompt>
                <div>
                  <Btn
                    variant="primary"
                    onClick={() => {
                      setOpened(true);
                      fold.animate(0, 1);
                    }}
                  >
                    Buka Bangun
                  </Btn>
                </div>
              </>
            )}
          </>
        )}
        {stage === "aspects" && (
          <>
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
          <AspectPanel key={`${solid.label}:${aspect}`} aspect={aspect} ctx={ctx} />
        )}
        {stage === "compare-arr" && compare && (
          <>
            <StageTitle>Bandingkan Susunan Jaring-Jaring</StageTitle>
            <Note>
              Susunan {compare[0] + 1} ↔ Susunan {compare[1] + 1}
            </Note>
            {tested.length > 2 && (
              <div className="flex flex-wrap gap-2">
                {tested.flatMap((a, i) =>
                  tested.slice(i + 1).map((b) => (
                    <button
                      key={`${a}:${b}`}
                      type="button"
                      onClick={() => setCompare([a, b])}
                      className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs font-semibold text-gray-700"
                    >
                      {a + 1} ↔ {b + 1}
                    </button>
                  )),
                )}
              </div>
            )}
            <Prompt>
              Bandingkan hasil lipatan kedua susunan tersebut. Apa persamaan dan
              perbedaan yang kamu temukan?
            </Prompt>
            <CompareHint />
            <RecordBlock
              prompt="Apa persamaan dan perbedaan yang kamu temukan?"
              extra={[
                {
                  label: "Coba Susunan Lain",
                  onClick: () => {
                    setStage("aspect");
                    chooseArrangement((arrangement + 1) % total);
                  },
                },
              ]}
              onMenu={toMenu}
              onSufficiency={toSufficiency}
            />
          </>
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
        {stage === "done" && (
          <DoneStage
            body="Kamu telah mengumpulkan informasi yang diperlukan untuk menyelidiki dugaan kelompokmu. Pastikan hasil pengamatanmu telah dicatat pada Tabel Hasil Pengamatan di e-module."
            next="Selanjutnya, gunakan Augmented Reality (AR) untuk mengamati jaring-jaring dan proses pembentukan bangun dari perspektif spasial yang berbeda serta melengkapi informasi yang masih diperlukan."
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
        {showFold &&
          sceneSolids.map((s, i) => (
            <FoldControls
              key={`${s.label}:${i}`}
              title={
                stage === "compare-arr" && compare
                  ? `${s.label} (Susunan ${compare[i] + 1})`
                  : s.label
              }
              mode={foldMode}
              value={fold.values[i]}
              playing={fold.playing[i]}
              onSlider={(v) => fold.set(i, v)}
              onAnimate={(target) => fold.animate(i, target)}
              onPause={() => fold.pause(i)}
              onRepeat={() => {
                fold.set(i, foldMode === "lipat" ? 1 : 0);
                fold.animate(i, foldMode === "lipat" ? 0 : 1);
              }}
            />
          ))}
      </div>
    </div>
  );
}

function CompareHint() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <Btn onClick={() => setOpen(true)}>Butuh Petunjuk?</Btn>
      </div>
      {open && (
        <Hint>
          Perhatikan susunan sisi sebelum dilipat dan posisi setiap sisi setelah
          dilipat.
        </Hint>
      )}
    </>
  );
}
