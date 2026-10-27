"use client";

import Script from "next/script";
import { useCallback, useEffect, useMemo, useState } from "react";
import DoneStage from "../shared/DoneStage";
import IntroStage from "../shared/IntroStage";
import { partForEdge, partsOf } from "../shared/parts";
import ShapeStage from "../shared/ShapeStage";
import SufficiencyStage from "../shared/SufficiencyStage";
import { ALL_SOLID_IDS, POLYGON_N_DEFAULT, type SolidId } from "../shared/solids";
import { Btn, BtnRow, Note, Prompt, StageTitle } from "../shared/ui";
import { useGeoGebra, type SceneClick } from "../shared/useGeoGebra";
import { edgeCaptions, partOverlays, skalaSolid, type Result, type SkalaMode } from "./data";
import KChips from "./KChips";
import SkalaAspect from "./SkalaAspects";
import type { AspectId, SkalaContext } from "./types";
import { useScaleAnimation } from "./useScaleAnimation";

type Stage = "intro" | "shape" | "observe" | "aspects" | "aspect" | "sufficiency" | "done";

const COPY: Record<SkalaMode, { target: string; targetLabel: string; question: string; done: string; next: string }> = {
  luas: {
    target: "luas permukaan",
    targetLabel: "Luas Permukaan",
    question:
      "Apakah informasi yang kamu peroleh sudah cukup untuk menyelidiki perubahan ukuran dan luas permukaan ketika faktor skala berubah?",
    done: "Pastikan data ukuran dan luas permukaan yang kamu peroleh telah dicatat pada Catatan Hasil Eksplorasi di e-module.",
    next: "Gunakan data tersebut pada tahap berikutnya untuk mengolah informasi tentang perubahan skala dan luas permukaan.",
  },
  volume: {
    target: "volume",
    targetLabel: "Volume Bangun",
    question:
      "Apakah informasi yang kamu peroleh sudah cukup untuk menyelidiki perubahan ukuran dan volume ketika faktor skala berubah?",
    done: "Pastikan data ukuran dan volume yang kamu peroleh telah dicatat pada Catatan Hasil Eksplorasi di e-module.",
    next: "Gunakan data tersebut pada tahap berikutnya untuk mengolah informasi tentang perubahan skala dan volume.",
  },
};

export default function SkalaFlow({ mode }: { mode: SkalaMode }) {
  const copy = COPY[mode];
  const [stage, setStage] = useState<Stage>("intro");
  const [solidId, setSolidId] = useState<SolidId | null>(null);
  const [polygonN, setPolygonN] = useState(POLYGON_N_DEFAULT);
  const [aspect, setAspect] = useState<AspectId | null>(null);
  const [k, setKTarget] = useState(1);
  const [measured, setMeasured] = useState<ReadonlyMap<string, ReadonlySet<string>>>(new Map());
  const [measureOn, setMeasureOn] = useState(false);
  const [results, setResults] = useState<Result[]>([]);
  const [pairK, setPairK] = useState<[number, number] | null>(null);
  const [sufficiencyStep, setSufficiencyStep] = useState<"check" | "more">("check");
  const [finished, setFinished] = useState(false);
  const [nonce, setNonce] = useState(0);

  const solid = useMemo(
    () => skalaSolid(solidId ?? "kubus", polygonN, mode),
    [solidId, polygonN, mode],
  );
  const parts = useMemo(() => partsOf(solid), [solid]);
  const sceneKey = `${solid.label}|${pairK?.join(",") ?? ""}`;

  const revealed = useCallback(
    (factor: number) => {
      const ids = measured.get(`${solid.label}|${factor}`);
      return parts.filter((p) => ids?.has(p.id));
    },
    [measured, parts, solid.label],
  );

  const reveal = useCallback(
    (partId: string) => {
      const key = `${solid.label}|${k}`;
      setMeasured((prev) => {
        const next = new Map(prev);
        next.set(key, new Set([...(prev.get(key) ?? []), partId]));
        return next;
      });
    },
    [solid.label, k],
  );

  const handleClick = useCallback(
    (click: SceneClick) => {
      if (!measureOn || click.kind !== "edge") return;
      const part = partForEdge(parts, click.edgeKey);
      if (part) reveal(part.id);
    },
    [measureOn, parts, reveal],
  );

  const { containerRef, apiReady, markScriptReady, loadScene, setScale, setOverlays, paint } =
    useGeoGebra(handleClick);
  const scale = useScaleAnimation(useCallback((value: number) => setScale(0, value), [setScale]));
  const { animateTo, jump } = scale;

  useEffect(() => {
    if (!apiReady) return;
    loadScene(pairK ? [solid, solid] : [solid], {
      scales: pairK ? [pairK[0], pairK[1]] : [k],
      fitScale: pairK ? Math.max(...pairK) : 3,
      gap: pairK ? 12 * pairK[0] + 8 : undefined,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiReady, sceneKey]);

  useEffect(() => {
    if (!apiReady) return;
    const shown = pairK ? [] : revealed(k);
    paint({ edgeCaptions: edgeCaptions(solid, 0, shown, k) });
    setOverlays(partOverlays(shown, 0, k));
  }, [apiReady, sceneKey, k, revealed, solid, pairK, paint, setOverlays]);

  function setK(value: number) {
    setKTarget(value);
    animateTo(value);
  }

  function toMenu() {
    setMeasureOn(false);
    setPairK(null);
    setStage("aspects");
  }

  function toSufficiency() {
    setMeasureOn(false);
    setPairK(null);
    setSufficiencyStep("check");
    setStage("sufficiency");
  }

  function selectSolid(id: SolidId) {
    setSolidId(id);
    setKTarget(1);
    jump(1);
    setPairK(null);
    setStage("observe");
  }

  function selectAspect(id: AspectId) {
    setAspect(id);
    if (id === "ukuran-awal" || id === "faktor-skala") setK(1);
    setNonce((n) => n + 1);
    setStage("aspect");
  }

  const ctx: SkalaContext = {
    mode,
    solid,
    solidId: solid.id,
    parts,
    k,
    revealed,
    results: results.map((r) => ({ ...r, solidId: r.solidId })),
    setK,
    reveal,
    clearMeasured: () =>
      setMeasured((prev) => {
        const next = new Map(prev);
        next.delete(`${solid.label}|${k}`);
        return next;
      }),
    setMeasureOn,
    addResult: (kind) =>
      setResults((prev) => [
        ...prev,
        { solidId: solid.id, k, kind, parts: revealed(k).map((p) => p.id) },
      ]),
    openPair: (a, b) => setPairK([a, b]),
    closePair: () => setPairK(null),
    pairActive: pairK !== null,
    toMenu,
    toSufficiency,
  };

  const ASPECTS: { id: AspectId; label: string }[] = [
    { id: "ukuran-awal", label: "Ukuran Awal Bangun" },
    { id: "faktor-skala", label: "Perubahan Faktor Skala" },
    { id: "ukuran-skala", label: "Ukuran Setelah Diskalakan" },
    { id: "target", label: copy.targetLabel },
    { id: "info-lain", label: "Informasi Lainnya" },
  ];
  const scaleRelevant = aspect === "faktor-skala" || aspect === "ukuran-skala" || aspect === "target";

  return (
    <div className="flex h-full w-full flex-col gap-4 overflow-y-auto p-4 lg:flex-row lg:overflow-hidden">
      <Script src="https://www.geogebra.org/apps/deployggb.js" strategy="afterInteractive" onReady={markScriptReady} />

      <aside className="order-2 flex w-full shrink-0 flex-col gap-3 lg:order-1 lg:w-96 lg:overflow-y-auto lg:pr-1">
        {stage === "intro" && (
          <IntroStage
            prompt="Pilih bangun ruang, ubah faktor skalanya, lalu amati dan ukur perubahan yang terjadi pada bangun."
            startLabel="Mulai Eksplorasi"
            onStart={() => setStage("shape")}
          />
        )}
        {stage === "shape" && (
          <ShapeStage
            ids={ALL_SOLID_IDS}
            title="Pilih Bangun Ruang"
            note="Pilih bangun ruang yang ingin kamu selidiki. Kamu dapat mengamati bangun lain jika memerlukan data tambahan."
            current={solidId}
            polygonN={polygonN}
            onPolygonN={setPolygonN}
            onSelect={selectSolid}
          />
        )}
        {stage === "observe" && (
          <>
            <StageTitle>Eksplorasi Awal Model 3D</StageTitle>
            <Note>↻ Putar · +/− Zoom · ⌂ Reset Tampilan</Note>
            <p className="rounded-xl border border-gray-200 bg-white p-3 text-sm font-semibold">
              Faktor Skala Awal: k = 1
            </p>
            <Prompt>Amati bentuk dan ukuran awal bangun sebelum faktor skalanya diubah.</Prompt>
            <div>
              <Btn variant="primary" onClick={toMenu}>
                Lanjutkan Eksplorasi
              </Btn>
            </div>
          </>
        )}
        {stage === "aspects" && (
          <>
            <StageTitle>Apa yang Ingin Kamu Selidiki?</StageTitle>
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
              Pilih informasi yang kamu perlukan untuk menyelidiki perubahan
              ukuran dan {copy.target} ketika faktor skala berubah. Kamu tidak
              harus mengamati semua aspek.
            </Note>
            <BtnRow>
              <Btn onClick={toSufficiency}>Periksa Kecukupan Data</Btn>
              <Btn onClick={() => setStage("shape")}>Amati Bangun Lain</Btn>
            </BtnRow>
          </>
        )}
        {stage === "aspect" && aspect && (
          <SkalaAspect key={`${solid.label}:${aspect}:${nonce}`} aspect={aspect} ctx={ctx} />
        )}
        {stage === "sufficiency" && (
          <SufficiencyStage
            step={sufficiencyStep}
            question={copy.question}
            onEnough={() => setStage("done")}
            onNeedMore={() => setSufficiencyStep("more")}
            onMoreAspect={toMenu}
            onOtherSolid={() => setStage("shape")}
            moreOptions={[
              ...(scaleRelevant
                ? [{ label: "Coba Faktor Skala Lain", onClick: () => { setNonce((n) => n + 1); setStage("aspect"); } }]
                : []),
              { label: "Amati Bangun Lain", onClick: () => setStage("shape") },
              { label: "Kembali ke Aspek Pengamatan", onClick: toMenu },
            ]}
          />
        )}
        {stage === "done" && (
          <DoneStage body={copy.done} next={copy.next} finished={finished} onFinish={() => setFinished(true)} />
        )}
      </aside>

      <div className="order-1 flex min-h-[70vh] w-full flex-1 flex-col gap-3 lg:order-2 lg:min-h-0">
        <div ref={containerRef} className="min-h-[360px] w-full flex-1 overflow-hidden rounded-lg border border-gray-200 bg-white" />
        {(stage === "aspect" || stage === "observe") && !pairK && (
          <div className="rounded-lg border border-gray-200 bg-white p-3">
            <KChips value={k} onPick={setK} />
          </div>
        )}
        {pairK && (
          <p className="rounded-lg border border-gray-200 bg-white p-3 text-sm font-semibold">
            Model kiri: k = {pairK[0] === 1 ? "1 (Model Awal)" : pairK[0]} ↔ Model kanan: k = {pairK[1]}
          </p>
        )}
      </div>
    </div>
  );
}
