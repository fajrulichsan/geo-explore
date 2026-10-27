"use client";

import Script from "next/script";
import { useCallback, useEffect, useMemo, useState } from "react";
import DoneStage from "../shared/DoneStage";
import FoldControls from "../shared/FoldControls";
import { describeFaces, foldFaces, type Vec3 } from "../shared/geometry";
import IntroStage from "../shared/IntroStage";
import ShapeStage from "../shared/ShapeStage";
import SufficiencyStage from "../shared/SufficiencyStage";
import { POLYGON_N_DEFAULT, solidFor, type SolidId } from "../shared/solids";
import { Btn, BtnRow, Hint, Note, Prompt, StageTitle } from "../shared/ui";
import { useFoldAnimation } from "../shared/useFoldAnimation";
import { useGeoGebra, type FacePaint, type Overlay, type SceneClick } from "../shared/useGeoGebra";
import AspectPanel, { ASPECTS, type AspectId, type Ctx, type SideData } from "./AspectPanel";
import Recorder from "../shared/Recorder";

type Stage = "intro" | "shape" | "observe" | "aspects" | "aspect" | "sufficiency" | "compare-pick" | "compare" | "done";

const LIMAS_IDS: SolidId[] = ["limas-segitiga", "limas-segiempat", "limas-segilima", "limas-segi-n"];
const SIDE_SINGLE: AspectId[] = ["ukuran-sisi", "luas-sisi"];
const BASE_ONLY: AspectId[] = ["bentuk-alas", "ukuran-alas", "luas-alas"];

const sub = (a: Vec3, b: Vec3): Vec3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot = (a: Vec3, b: Vec3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const len = (a: Vec3) => Math.hypot(a[0], a[1], a[2]);
const unit = (a: Vec3): Vec3 => [a[0] / len(a), a[1] / len(a), a[2] / len(a)];
const along = (a: Vec3, d: Vec3, t: number): Vec3 => [a[0] + d[0] * t, a[1] + d[1] * t, a[2] + d[2] * t];

function slantGeometry(corners: Vec3[]) {
  const [a, b, apex] = corners;
  const edge = unit(sub(b, a));
  const foot = along(a, edge, dot(sub(apex, a), edge));
  return { a, b, apex, foot, edge, length: len(sub(apex, foot)) };
}

export default function Materi4Flow() {
  const [stage, setStage] = useState<Stage>("intro");
  const [solidId, setSolidId] = useState<SolidId | null>(null);
  const [polygonN, setPolygonN] = useState(POLYGON_N_DEFAULT);
  const [opened, setOpened] = useState(false);
  const [aspect, setAspect] = useState<AspectId | null>(null);
  const [picks, setPicks] = useState<string[]>([]);
  const [counted, setCounted] = useState<string[]>([]);
  const [hub, setHub] = useState<"none" | "alas" | "sisi">("none");
  const [overlay, setOverlay] = useState<"none" | "base" | "height" | "compare">("none");
  const [baseSeen, setBaseSeen] = useState<ReadonlyMap<string, ReadonlySet<number>>>(new Map());
  const [sideSeen, setSideSeen] = useState<ReadonlyMap<string, SideData>>(new Map());
  const [visited, setVisited] = useState<SolidId[]>([]);
  const [pair, setPair] = useState<[SolidId, SolidId] | null>(null);
  const [sufficiencyStep, setSufficiencyStep] = useState<"check" | "more">("check");
  const [finished, setFinished] = useState(false);

  const solid = solidFor(solidId ?? "limas-segiempat", polygonN);
  const faces = useMemo(() => describeFaces(solid), [solid]);
  const comparing = stage === "compare" && pair !== null;
  const pairKey = comparing ? pair.join("|") : "";
  const sceneSolids = useMemo(
    () => (comparing ? [solidFor(pair[0], polygonN), solidFor(pair[1], polygonN)] : [solid]),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [comparing, pairKey, solid.label],
  );
  const sceneKey = sceneSolids.map((s) => s.label).join("|");

  const handleClick = useCallback(
    (click: SceneClick) => {
      if (stage !== "aspect" || !aspect || click.kind !== "face") return;
      const face = click.face;
      const isBase = face === "bottom";
      if (BASE_ONLY.includes(aspect)) {
        if (isBase) setPicks(["bottom"]);
      } else if (aspect === "bentuk-sisi") {
        if (!isBase) setPicks((p) => (p.includes(face) ? p.filter((x) => x !== face) : [...p, face]));
      } else if (aspect === "banyak-sisi") {
        if (!isBase) setCounted((c) => (c.includes(face) ? c : [...c, face]));
      } else if (SIDE_SINGLE.includes(aspect)) {
        if (!isBase) {
          setPicks([face]);
          setOverlay("none");
        }
      } else if (aspect === "hubungan") {
        setHub(isBase ? "alas" : "sisi");
      } else if (aspect === "pola-lain") {
        setPicks((p) => (p.includes(face) ? p.filter((x) => x !== face) : [...p, face].slice(-2)));
      }
    },
    [stage, aspect],
  );

  const { containerRef, apiReady, markScriptReady, loadScene, setFold, paint, setOverlays } =
    useGeoGebra(handleClick);
  const fold = useFoldAnimation(setFold);
  const foldT = fold.values[0];
  const moving = fold.playing[0];

  useEffect(() => {
    if (!apiReady) return;
    fold.reset();
    loadScene(sceneSolids, { allArrangements: false });
    if (comparing || opened) sceneSolids.forEach((_, i) => fold.set(i, 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiReady, sceneKey]);

  const baseKey = solid.label;
  const baseRevealed = baseSeen.get(baseKey);
  const sideData = useCallback(
    (face: string): SideData => sideSeen.get(`${solid.label}|${face}`) ?? { base: false, height: false },
    [sideSeen, solid.label],
  );
  const slantOf = useCallback(
    (face: string) => {
      const idx = faces.findIndex((f) => f.key === face);
      return idx < 0 ? 0 : slantGeometry(foldFaces(solid, 0, 0)[idx]).length;
    },
    [faces, solid],
  );

  useEffect(() => {
    if (!apiReady) return;
    const paints = new Map<string, FacePaint>();
    if (stage === "aspect" && aspect && !comparing) {
      if (aspect === "banyak-sisi") {
        counted.forEach((f, i) => paints.set(`0:${f}`, { tone: "counted", label: `Sisi tegak ${i + 1}` }));
      } else if (aspect === "hubungan") {
        faces.forEach((f) => {
          if (hub === "alas" && f.key === "bottom") paints.set(`0:${f.key}`, { tone: "alas" });
          if (hub === "sisi" && f.key !== "bottom") paints.set(`0:${f.key}`, { tone: "b" });
        });
      } else if (picks.length > 0) {
        if (SIDE_SINGLE.includes(aspect)) faces.forEach((f) => paints.set(`0:${f.key}`, { tone: "dim" }));
        picks.forEach((f, i) =>
          paints.set(`0:${f}`, {
            tone: f === "bottom" ? "alas" : picks.length === 1 ? "focus" : i === 0 ? "a" : "b",
          }),
        );
      }
    }
    const captions = new Map<string, string>();
    if (stage === "aspect" && (aspect === "ukuran-alas" || aspect === "luas-alas")) {
      const bottom = faces.find((f) => f.key === "bottom");
      baseRevealed?.forEach((e) => bottom && captions.set(`0:bottom:${e}`, `${bottom.edgeLengths[e]} cm`));
    }
    paint({ faces: paints, edgeCaptions: captions });
  }, [apiReady, sceneKey, stage, aspect, picks, counted, hub, faces, baseRevealed, comparing, paint]);

  useEffect(() => {
    if (!apiReady) return;
    const items: Overlay[] = [];
    const face = picks[0];
    const idx = faces.findIndex((f) => f.key === face);
    if (stage === "aspect" && idx > 0 && overlay !== "none" && !moving) {
      const corners = foldFaces(solid, foldT, 0);
      const g = slantGeometry(corners[idx]);
      const round = (v: number) => Math.round(v * 10) / 10;
      if (overlay === "base") {
        items.push({ points: [g.a, g.b], color: "#DC2626", thickness: 10, caption: `${round(len(sub(g.b, g.a)))} cm` });
      } else {
        items.push({ points: [g.apex, g.foot], color: "#2563EB", thickness: 8, caption: `${round(g.length)} cm` });
        const toApex = unit(sub(g.apex, g.foot));
        const s = 0.5;
        const p1 = along(g.foot, g.edge, s);
        const p2 = along(p1, toApex, s);
        const p3 = along(g.foot, toApex, s);
        items.push({ points: [p1, p2], color: "#2563EB", thickness: 4 }, { points: [p2, p3], color: "#2563EB", thickness: 4 });
        if (overlay === "compare") {
          const bottom = corners[0];
          const centre = bottom.reduce<Vec3>((c, p) => [c[0] + p[0] / bottom.length, c[1] + p[1] / bottom.length, c[2] + p[2] / bottom.length], [0, 0, 0]);
          items.push({ points: [g.apex, centre], color: "#DC2626", thickness: 8, dashed: true, caption: `${round(solid.height)} cm` });
        }
      }
    }
    setOverlays(items);
  }, [apiReady, stage, picks, overlay, foldT, moving, faces, solid, setOverlays]);

  function resetWork() {
    setPicks([]);
    setCounted([]);
    setHub("none");
    setOverlay("none");
  }

  function selectSolid(id: SolidId) {
    resetWork();
    setSolidId(id);
    setOpened(false);
    setVisited((v) => (v.includes(id) ? v : [...v, id]));
    setStage("observe");
  }

  function selectAspect(id: AspectId) {
    resetWork();
    setAspect(id);
    if (id === "hubungan") fold.animate(0, 1);
    setStage("aspect");
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

  const pairs = visited.flatMap((a, i) => visited.slice(i + 1).map((b): [SolidId, SolidId] => [a, b]));

  const ctx: Ctx = {
    solidLabel: solid.label,
    faces,
    picks,
    counted,
    folded: foldT < 0.05,
    flat: foldT > 0.95,
    moving,
    animate: (t) => fold.animate(0, t),
    setPicks,
    hub,
    setHub,
    baseRevealed,
    revealBase: (edges) =>
      setBaseSeen((prev) => {
        const next = new Map(prev);
        next.set(baseKey, new Set([...(prev.get(baseKey) ?? []), ...edges]));
        return next;
      }),
    sideData,
    markSide: (face, key) =>
      setSideSeen((prev) => {
        const next = new Map(prev);
        next.set(`${solid.label}|${face}`, { ...sideData(face), [key]: true });
        return next;
      }),
    clearSide: (face) =>
      setSideSeen((prev) => {
        const next = new Map(prev);
        next.delete(`${solid.label}|${face}`);
        return next;
      }),
    slantOf,
    overlay,
    setOverlay,
    comparePair: () => {},
    toMenu,
    toSufficiency,
    toCompareLimas: () => setStage("compare-pick"),
    canCompareLimas: pairs.length > 0,
  };

  const showFold = (stage === "observe" && opened) || stage === "aspect" || stage === "compare";

  return (
    <div className="flex h-full w-full flex-col gap-4 overflow-y-auto p-4 lg:flex-row lg:overflow-hidden">
      <Script src="https://www.geogebra.org/apps/deployggb.js" strategy="afterInteractive" onReady={markScriptReady} />

      <aside className="order-2 flex w-full shrink-0 flex-col gap-3 lg:order-1 lg:w-96 lg:overflow-y-auto lg:pr-1">
        {stage === "intro" && (
          <IntroStage
            prompt="Pilih bangun ruang yang perlu kamu amati. Putar model, buka limas menjadi jaring-jaring, kemudian amati alas dan sisi-sisi tegaknya untuk mengumpulkan informasi yang diperlukan dalam menyelidiki dugaan kelompokmu."
            startLabel="Mulai Eksplorasi"
            onStart={() => setStage("shape")}
          />
        )}
        {stage === "shape" && (
          <ShapeStage
            ids={LIMAS_IDS}
            title="Pilih Limas yang Ingin Kamu Amati"
            note="Pilih limas yang kamu perlukan untuk menyelidiki dugaan kelompokmu. Kamu dapat mengamati jenis limas lain jika memerlukan data tambahan."
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
                <Prompt>Amati bagaimana sisi-sisi tegak membuka dari alas hingga membentuk jaring-jaring limas.</Prompt>
                <div>
                  <Btn variant="primary" onClick={toMenu}>
                    Apa yang Ingin Kamu Selidiki?
                  </Btn>
                </div>
              </>
            ) : (
              <>
                <Prompt>Putar model dan amati seluruh sisinya. Perhatikan alas dan sisi-sisi tegaknya.</Prompt>
                <div>
                  <Btn
                    variant="primary"
                    onClick={() => {
                      setOpened(true);
                      fold.animate(0, 1);
                    }}
                  >
                    Buka Limas
                  </Btn>
                </div>
              </>
            )}
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
            <Note>Pilih informasi yang kamu perlukan untuk menyelidiki dugaan kelompokmu. Kamu tidak harus mengamati semuanya.</Note>
            <BtnRow>
              <Btn onClick={toSufficiency}>Periksa Kecukupan Data</Btn>
              <Btn onClick={() => setStage("shape")}>Pilih Limas Lain</Btn>
            </BtnRow>
          </>
        )}
        {stage === "aspect" && aspect && <AspectPanel key={`${solid.label}:${aspect}`} aspect={aspect} ctx={ctx} />}
        {stage === "sufficiency" && (
          <SufficiencyStage
            step={sufficiencyStep}
            question="Apakah informasi yang kamu peroleh sudah cukup untuk menyelidiki bagaimana alas dan sisi-sisi tegak berkaitan dengan luas seluruh permukaan limas?"
            onEnough={() => setStage("done")}
            onNeedMore={() => setSufficiencyStep("more")}
            onMoreAspect={toMenu}
            onOtherSolid={() => setStage("shape")}
            moreOptions={[
              { label: "Amati Aspek Lain dari Limas Ini", onClick: toMenu },
              { label: "Bandingkan dengan Limas Lain", onClick: () => setStage("shape") },
            ]}
          />
        )}
        {stage === "compare-pick" && (
          <>
            <StageTitle>Bandingkan Limas</StageTitle>
            {pairs.length === 0 ? (
              <Hint>Amati minimal dua jenis limas terlebih dahulu.</Hint>
            ) : (
              <ul className="flex flex-col gap-2">
                {pairs.map(([a, b]) => (
                  <li key={`${a}:${b}`}>
                    <button
                      type="button"
                      onClick={() => {
                        setPair([a, b]);
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
            <StageTitle>Bandingkan Limas</StageTitle>
            <Note>
              {solidFor(pair[0], polygonN).label} ↔ {solidFor(pair[1], polygonN).label}
            </Note>
            <Prompt>Apa persamaan dan perbedaan jaring-jaring kedua limas tersebut?</Prompt>
            <Prompt>Bagian-bagian apa yang sama-sama ditemukan pada kedua limas dan perlu diperhatikan ketika menyelidiki luas permukaannya?</Prompt>
            <Recorder
              prompt="Apa yang kamu temukan dari perbandingan kedua limas?"
              nav={[
                { label: "Bandingkan Limas Lain", onClick: () => setStage("compare-pick") },
                { label: "Kembali ke Aspek Pengamatan", onClick: toMenu },
                { label: "Periksa Kecukupan Data", onClick: toSufficiency, primary: true },
              ]}
            />
          </>
        )}
        {stage === "done" && (
          <DoneStage
            body="Kamu telah mengumpulkan informasi tentang alas, sisi-sisi tegak, ukuran dan jaring-jaring limas. Pastikan informasi penting telah kamu catat pada e-module."
            next="Selanjutnya, gunakan Augmented Reality (AR) untuk mengamati model limas dari perspektif spasial yang berbeda dan melengkapi informasi yang masih diperlukan."
            finished={finished}
            onFinish={() => setFinished(true)}
          />
        )}
      </aside>

      <div className="order-1 flex min-h-[70vh] w-full flex-1 flex-col gap-3 lg:order-2 lg:min-h-0">
        <div ref={containerRef} className="min-h-[360px] w-full flex-1 overflow-hidden rounded-lg border border-gray-200 bg-white" />
        {showFold &&
          sceneSolids.map((s, i) => (
            <FoldControls
              key={`${s.label}:${i}`}
              title={s.label}
              value={fold.values[i]}
              playing={fold.playing[i]}
              onSlider={(v) => fold.set(i, v)}
              onAnimate={(t) => fold.animate(i, t)}
              onPause={() => fold.pause(i)}
              onRepeat={() => {
                fold.set(i, 0);
                fold.animate(i, 1);
              }}
            />
          ))}
      </div>
    </div>
  );
}
