"use client";

import Script from "next/script";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import DoneStage from "../shared/DoneStage";
import IntroStage from "../shared/IntroStage";
import { polygonArea } from "../shared/parts";
import ShapeStage from "../shared/ShapeStage";
import SufficiencyStage from "../shared/SufficiencyStage";
import { POLYGON_N_DEFAULT, PRISM_IDS, solidFor, type Solid, type SolidId } from "../shared/solids";
import { Btn, BtnRow, Note, Prompt, StageTitle } from "../shared/ui";
import { useGeoGebra, type Overlay, type SceneClick } from "../shared/useGeoGebra";
import Panel, { PRISM_ASPECTS, STACK_ASPECTS, type Aspect6, type Ctx6, type Record6 } from "./Panels";
import { buildStacks, LAYER_GAP, paintStacks, type StackFace } from "./stack";

type Stage = "intro" | "shape" | "observe" | "aspects" | "aspect" | "sufficiency" | "done";

const STACK_DIMS: Record<string, { nx: number; ny: number }> = { kubus: { nx: 3, ny: 3 }, balok: { nx: 4, ny: 3 } };
const STACK_SIZES = [1, 2, 3] as const;
const PRISM_SIZES = [1, 2, 3, 4] as const;
const UNIT = 2;

function prismSolid(id: SolidId, n: number, length: number): Solid {
  const base = solidFor(id, n);
  const s = Math.sqrt(6 / polygonArea(base.base));
  return { ...base, base: base.base.map(([x, y]) => [x * s, y * s] as const), height: length * UNIT };
}

export default function Materi6Flow() {
  const [stage, setStage] = useState<Stage>("intro");
  const [solidId, setSolidId] = useState<SolidId | null>(null);
  const [polygonN, setPolygonN] = useState(POLYGON_N_DEFAULT);
  const [shapeIds, setShapeIds] = useState<SolidId[]>(PRISM_IDS);
  const [aspect, setAspect] = useState<Aspect6 | null>(null);
  const [size, setSizeState] = useState(3);
  const [exploded, setExploded] = useState(false);
  const [highlightTop, setHighlightTop] = useState(false);
  const [countOn, setCountOn] = useState(false);
  const [counted, setCounted] = useState<ReadonlySet<string>>(new Set());
  const [pair, setPair] = useState<[number, number] | null>(null);
  const [layerData, setLayerData] = useState<ReadonlyMap<string, number>>(new Map());
  const [records, setRecords] = useState<ReadonlyMap<string, Record6>>(new Map());
  const [seenSizes, setSeenSizes] = useState<ReadonlyMap<string, readonly number[]>>(new Map());
  const [seenArea, setSeenArea] = useState<ReadonlySet<string>>(new Set());
  const [pos, setPos] = useState(0.5);
  const [sections, setSections] = useState<"none" | "single" | "multi">("none");
  const [sufficiencyStep, setSufficiencyStep] = useState<"check" | "more">("check");
  const [finished, setFinished] = useState(false);
  const [nonce, setNonce] = useState(0);
  const [lastAspect, setLastAspect] = useState<Aspect6 | null>(null);
  const facesRef = useRef<StackFace[]>([]);

  const id = solidId ?? "kubus";
  const isStack = id === "kubus" || id === "balok";
  const baseSolid = useMemo(() => solidFor(id, polygonN), [id, polygonN]);
  const label = baseSolid.label;
  const sizes = isStack ? STACK_SIZES : PRISM_SIZES;
  const prism = useMemo(() => prismSolid(id, polygonN, size), [id, polygonN, size]);
  const prismPair = useMemo(
    () => (pair ? ([prismSolid(id, polygonN, pair[0]), prismSolid(id, polygonN, pair[1])] as const) : null),
    [id, polygonN, pair],
  );
  const area = Math.round(polygonArea(prism.base) * 100) / 100;

  const handleClick = useCallback(
    (click: SceneClick) => {
      if (click.kind !== "custom" || !countOn) return;
      const key = click.tag.slice(5);
      setCounted((prev) => (prev.has(key) ? prev : new Set(prev).add(key)));
    },
    [countOn],
  );

  const { containerRef, apiReady, markScriptReady, loadScene, loadCustom, withApi, setOverlays, paint } = useGeoGebra(handleClick);

  const stackSpecs = useMemo(() => {
    const dims = STACK_DIMS[id] ?? STACK_DIMS.kubus;
    return pair
      ? pair.map((layers) => ({ ...dims, layers, explode: false }))
      : [{ ...dims, layers: size, explode: exploded }];
  }, [id, pair, size, exploded]);
  const sceneKey = isStack
    ? `stack|${id}|${stackSpecs.map((s) => `${s.layers}${s.explode ? "e" : ""}`).join(",")}`
    : `prism|${prism.label}|${size}|${pair?.join(",") ?? ""}`;

  useEffect(() => {
    if (!apiReady || stage === "intro" || stage === "shape") return;
    if (isStack) {
      loadCustom((api, register) => {
        facesRef.current = buildStacks(api, register, stackSpecs);
        const width = stackSpecs.reduce((w, s) => w + s.nx + 3, 0) - 3;
        const top = Math.max(...stackSpecs.map((s) => s.layers * (s.explode ? LAYER_GAP : 1)));
        const half = Math.max(width * 0.55, top * 0.6, 3.5);
        api.setCoordSystem(width / 2 - half, width / 2 + half, 1.5 - half, 1.5 + half, -0.5, 2 * half - 0.5);
      });
    } else {
      loadScene(prismPair ? [...prismPair] : [prism], { compact: true, gap: 14 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiReady, sceneKey, stage === "intro" || stage === "shape"]);

  useEffect(() => {
    if (!apiReady || !isStack) return;
    withApi((api) => paintStacks(api, facesRef.current, { highlightTop, counted }));
  }, [apiReady, isStack, sceneKey, highlightTop, counted, withApi]);

  useEffect(() => {
    if (!apiReady || isStack) return;
    const items: Overlay[] = [];
    if (!prismPair && stage === "aspect") {
      const at = (z: number, color: string, filling: number): Overlay => ({
        points: prism.base.map(([x, y]) => [x, y, z] as [number, number, number]),
        color,
        filling,
      });
      if (sections === "single") items.push(at(pos * prism.height, "#F97316", 0.6));
      if (sections === "multi") for (let i = 0; i < size; i++) items.push(at((i + 0.5) * UNIT, "#F97316", 0.4));
    }
    setOverlays(items);
    paint({});
  }, [apiReady, isStack, sceneKey, sections, pos, stage, prism, prismPair, size, setOverlays, paint]);

  const key = label;
  const setSize = (n: number) => {
    setSizeState(n);
    setCounted(new Set());
  };
  const markSize = () =>
    setSeenSizes((prev) => {
      const next = new Map(prev);
      const list = prev.get(key) ?? [];
      next.set(key, list.includes(size) ? list : [...list, size]);
      return next;
    });

  function resetWork() {
    setCounted(new Set());
    setCountOn(false);
    setExploded(false);
    setHighlightTop(false);
    setPair(null);
    setSections("none");
  }

  function selectSolid(sid: SolidId) {
    resetWork();
    setSolidId(sid);
    setSizeState(sid === "kubus" || sid === "balok" ? 3 : 2);
    setStage("observe");
  }

  const toMenu = () => {
    resetWork();
    setStage("aspects");
  };
  const toSufficiency = () => {
    resetWork();
    setSufficiencyStep("check");
    setStage("sufficiency");
  };
  const selectAspect = (a: Aspect6) => {
    resetWork();
    setAspect(a);
    setLastAspect(a);
    if (a === "penampang") setSections("single");
    setNonce((x) => x + 1);
    setStage("aspect");
  };

  const myRecords = [...records.entries()].filter(([k]) => k.startsWith(`${label}|`)).map(([, r]) => r);
  const ctx: Ctx6 = {
    label,
    cubesCounted: counted.size,
    size,
    setSize,
    sizes,
    highlightTop,
    setHighlightTop,
    exploded,
    setExploded,
    setCountOn,
    clearCounted: () => setCounted(new Set()),
    layerData: layerData.get(key) ?? null,
    setLayerData: (n) => setLayerData((prev) => new Map(prev).set(key, n)),
    records: myRecords,
    addRecord: (value) => setRecords((prev) => new Map(prev).set(`${label}|${size}`, { size, value })),
    pair,
    openPair: (a, b) => setPair([a, b]),
    closePair: () => setPair(null),
    pos,
    setPos,
    sections,
    setSections,
    area,
    seenArea: seenArea.has(label),
    markArea: () => setSeenArea((prev) => new Set(prev).add(label)),
    seenSizes: seenSizes.get(key) ?? [],
    markSize,
    toMenu,
    toSufficiency,
  };

  const aspectList = isStack ? STACK_ASPECTS : PRISM_ASPECTS;
  const sufficiencyQuestion = isStack
    ? "Apakah informasi yang kamu peroleh sudah cukup untuk menyelidiki hubungan susunan kubus satuan dan jumlah lapisan dengan volume bangun?"
    : "Apakah informasi yang kamu peroleh sudah cukup untuk menyelidiki hubungan penampang sejajar alas dan panjang prisma dengan volumenya?";
  const retry = lastAspect === "jumlah-lapisan" || lastAspect === "volume" ? "Coba Jumlah Lapisan Lain" : "Coba Panjang Prisma Lain";
  const relevantRetry = lastAspect === "jumlah-lapisan" || lastAspect === "volume" || lastAspect === "panjang" || lastAspect === "volume-prisma";
  const moreOptions = [
    ...(relevantRetry ? [{ label: retry, onClick: () => lastAspect && selectAspect(lastAspect) }] : []),
    ...(!isStack ? [{ label: "Amati Prisma Lain", onClick: () => { setShapeIds(PRISM_IDS.filter((p) => p !== "kubus" && p !== "balok")); setStage("shape"); } }] : []),
    { label: "Amati Bangun Lain", onClick: () => { setShapeIds(PRISM_IDS); setStage("shape"); } },
    { label: "Kembali ke Aspek Pengamatan", onClick: toMenu },
  ];

  return (
    <div className="flex h-full w-full flex-col gap-4 overflow-y-auto p-4 lg:flex-row lg:overflow-hidden">
      <Script src="https://www.geogebra.org/apps/deployggb.js" strategy="afterInteractive" onReady={markScriptReady} />
      <aside className="order-2 flex w-full shrink-0 flex-col gap-3 lg:order-1 lg:w-96 lg:overflow-y-auto lg:pr-1">
        {stage === "intro" && (
          <IntroStage
            prompt="Pilih bangun ruang, amati susunan atau penampangnya, ubah ukuran yang diperlukan, lalu kumpulkan data tentang perubahan volumenya."
            startLabel="Mulai Eksplorasi"
            onStart={() => setStage("shape")}
          />
        )}
        {stage === "shape" && (
          <ShapeStage
            ids={shapeIds}
            title="Pilih Bangun Ruang yang Ingin Kamu Amati"
            note="Pilih bangun ruang yang ingin kamu selidiki. Kamu dapat mengamati bangun lain jika memerlukan data tambahan."
            current={solidId}
            polygonN={polygonN}
            onPolygonN={setPolygonN}
            onSelect={selectSolid}
          />
        )}
        {stage === "observe" && (
          <>
            <StageTitle>Eksplorasi Awal Model {label}</StageTitle>
            <Note>↻ Putar · +/− Zoom · ⌂ Reset Tampilan</Note>
            <Prompt>
              {isStack
                ? "Amati susunan kubus satuan yang membentuk bangun tersebut dari berbagai arah."
                : "Amati bentuk penampang yang sejajar dengan alas dan bagaimana penampang tersebut tersusun sepanjang prisma."}
            </Prompt>
            <div>
              <Btn variant="primary" onClick={toMenu}>Lanjutkan Eksplorasi</Btn>
            </div>
          </>
        )}
        {stage === "aspects" && (
          <>
            <StageTitle>Apa yang Ingin Kamu Selidiki?</StageTitle>
            <ul className="flex flex-col gap-2">
              {aspectList.map((a) => (
                <li key={a.id}>
                  <button type="button" onClick={() => selectAspect(a.id)} className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-left text-sm font-medium text-gray-800 hover:bg-gray-50">
                    ☐ {a.label}
                  </button>
                </li>
              ))}
            </ul>
            <Note>
              {isStack
                ? "Pilih informasi yang kamu perlukan untuk menyelidiki hubungan susunan kubus satuan dan banyak lapisan dengan volume bangun. Kamu tidak harus mengamati semuanya."
                : "Pilih informasi yang kamu perlukan untuk menyelidiki hubungan penampang sejajar alas dan panjang prisma dengan volumenya. Kamu tidak harus mengamati semuanya."}
            </Note>
            <BtnRow>
              <Btn onClick={toSufficiency}>Periksa Kecukupan Data</Btn>
              <Btn onClick={() => { setShapeIds(PRISM_IDS); setStage("shape"); }}>Amati Bangun Lain</Btn>
            </BtnRow>
          </>
        )}
        {stage === "aspect" && aspect && (
          <div key={`${aspect}:${nonce}`} className="flex flex-col gap-3">
            <Panel aspect={aspect} ctx={ctx} />
          </div>
        )}
        {stage === "sufficiency" && (
          <SufficiencyStage
            step={sufficiencyStep}
            question={sufficiencyQuestion}
            onEnough={() => setStage("done")}
            onNeedMore={() => setSufficiencyStep("more")}
            onMoreAspect={toMenu}
            onOtherSolid={() => setStage("shape")}
            moreOptions={moreOptions}
          />
        )}
        {stage === "done" && (
          <DoneStage
            body="Pastikan data susunan kubus satuan atau penampang, ukuran yang diubah, dan volume yang kamu perlukan telah dicatat pada Catatan Hasil Eksplorasi di e-module."
            next="Gunakan data tersebut pada tahap berikutnya untuk mengolah informasi tentang hubungan ukuran bangun dan volumenya."
            finished={finished}
            onFinish={() => setFinished(true)}
          />
        )}
      </aside>
      <div className="order-1 flex min-h-[70vh] w-full flex-1 flex-col gap-3 lg:order-2 lg:min-h-0">
        <div ref={containerRef} className="min-h-[360px] w-full flex-1 overflow-hidden rounded-lg border border-gray-200 bg-white" />
      </div>
    </div>
  );
}
