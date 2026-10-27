"use client";

import Script from "next/script";
import { useCallback, useEffect, useMemo, useState } from "react";
import DoneStage from "../shared/DoneStage";
import FoldControls from "../shared/FoldControls";
import { describeFaces } from "../shared/geometry";
import IntroStage from "../shared/IntroStage";
import ShapeStage from "../shared/ShapeStage";
import SufficiencyStage from "../shared/SufficiencyStage";
import { PRISM_IDS, POLYGON_N_DEFAULT, solidFor, type SolidId } from "../shared/solids";
import { useFoldAnimation } from "../shared/useFoldAnimation";
import { useGeoGebra, type FacePaint, type SceneClick } from "../shared/useGeoGebra";
import FindingsSummary from "./FindingsSummary";
import AspectMenuStage from "./stages/AspectMenuStage";
import AspectStage from "./stages/AspectStage";
import {
  CompareStage,
  ComparePickStage,
  comparablePairs,
  type ComparePair,
} from "./stages/CompareStage";
import ObserveStage from "./stages/ObserveStage";
import type { AspectContext, AspectId, Finding, Stage } from "./types";

const MEASURE_ASPECTS: AspectId[] = ["ukuran-sisi", "luas-sisi", "hubungan-ukuran"];
const PAIR_ASPECTS: AspectId[] = ["sisi-sama", "hubungan-ukuran"];
const DIM_FREE_ASPECTS: AspectId[] = ["banyak-sisi"];

const faceKeyOf = (solidId: SolidId, face: string) => `${solidId}:${face}`;

export default function Materi3Flow() {
  const [stage, setStage] = useState<Stage>("intro");
  const [solidId, setSolidId] = useState<SolidId | null>(null);
  const [polygonN, setPolygonN] = useState(POLYGON_N_DEFAULT);
  const [opened, setOpened] = useState(false);
  const [aspect, setAspect] = useState<AspectId | null>(null);
  const [picks, setPicks] = useState<string[]>([]);
  const [counted, setCounted] = useState<string[]>([]);
  const [measured, setMeasured] = useState<ReadonlyMap<string, ReadonlySet<number>>>(
    new Map(),
  );
  const [findings, setFindings] = useState<Finding[]>([]);
  const [sufficiencyStep, setSufficiencyStep] = useState<"check" | "more">("check");
  const [pair, setPair] = useState<ComparePair | null>(null);
  const [finished, setFinished] = useState(false);

  const activeSolid = solidFor(solidId ?? "kubus", polygonN);
  const sceneSolids = useMemo(
    () =>
      stage === "compare" && pair
        ? [solidFor(pair.a, polygonN), solidFor(pair.b, polygonN)]
        : [activeSolid],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [stage === "compare" ? `${pair?.a}:${pair?.b}` : "", activeSolid.id, activeSolid.label, stage === "compare"],
  );
  const sceneKey = sceneSolids.map((s) => s.label).join("|");
  const faces = useMemo(() => describeFaces(activeSolid), [activeSolid]);

  const handleClick = useCallback(
    (click: SceneClick) => {
      if (stage !== "aspect" || !aspect || !solidId) return;
      if (click.kind === "vertex" || click.kind === "custom") return;
      if (click.kind === "edge") {
        if (MEASURE_ASPECTS.includes(aspect) && picks.includes(click.face)) {
          reveal(click.face, [click.edge]);
        }
        return;
      }
      const face = click.face;
      if (DIM_FREE_ASPECTS.includes(aspect)) {
        setCounted((prev) => (prev.includes(face) ? prev : [...prev, face]));
      } else if (PAIR_ASPECTS.includes(aspect)) {
        setPicks((prev) =>
          prev.length === 1 && prev[0] !== face ? [prev[0], face] : [face],
        );
      } else if (aspect === "pola-lain") {
        setPicks((prev) =>
          prev.includes(face) ? prev.filter((p) => p !== face) : [...prev, face].slice(-2),
        );
      } else {
        setPicks([face]);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [stage, aspect, solidId, picks],
  );

  const { apiReady, containerRef, loadScene, markScriptReady, paint, setFold } = useGeoGebra(handleClick);
  const fold = useFoldAnimation(setFold);

  useEffect(() => {
    if (!apiReady) return;
    fold.reset();
    loadScene(sceneSolids);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiReady, sceneKey]);

  const measuredFor = useCallback(
    (id: SolidId) => {
      const result = new Map<string, ReadonlySet<number>>();
      measured.forEach((edges, key) => {
        if (key.startsWith(`${id}:`)) result.set(key.slice(id.length + 1), edges);
      });
      return result;
    },
    [measured],
  );

  useEffect(() => {
    if (!apiReady) return;
    const paints = new Map<string, FacePaint>();
    if (stage === "aspect" && aspect) {
      if (aspect === "banyak-sisi") {
        counted.forEach((face, i) =>
          paints.set(`0:${face}`, { tone: "counted", label: `Sisi ${i + 1}` }),
        );
      } else if (picks.length > 0) {
        faces.forEach((f) => paints.set(`0:${f.key}`, { tone: "dim" }));
        picks.forEach((face, i) => {
          const tone = picks.length === 1 ? "focus" : i === 0 ? "a" : "b";
          paints.set(`0:${face}`, { tone });
        });
      }
    }
    const captions = new Map<string, string>();
    sceneSolids.forEach((s, idx) => {
      const lookup = describeFaces(s);
      measuredFor(s.id).forEach((edges, face) => {
        const info = lookup.find((f) => f.key === face);
        edges.forEach((e) => {
          if (info) captions.set(`${idx}:${face}:${e}`, `${info.edgeLengths[e]} cm`);
        });
      });
    });
    paint({ faces: paints, edgeCaptions: captions });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiReady, sceneKey, stage, aspect, picks, counted, measured, faces]);

  function reveal(face: string, edges: number[]) {
    if (!solidId) return;
    const key = faceKeyOf(solidId, face);
    setMeasured((prev) => {
      const next = new Map(prev);
      next.set(key, new Set([...(prev.get(key) ?? []), ...edges]));
      return next;
    });
  }

  function clearEdges(face: string) {
    if (!solidId) return;
    setMeasured((prev) => {
      const next = new Map(prev);
      next.delete(faceKeyOf(solidId, face));
      return next;
    });
  }

  function record(details: string[]) {
    if (!solidId || !aspect) return;
    setFindings((prev) => [
      ...prev.filter((f) => !(f.solidId === solidId && f.aspect === aspect)),
      { solidId, aspect, details },
    ]);
  }

  function toMenu() {
    setPicks([]);
    setCounted([]);
    setStage("aspects");
  }

  function selectSolid(id: SolidId) {
    setSolidId(id);
    setOpened(false);
    setPicks([]);
    setCounted([]);
    setStage("observe");
  }

  function selectAspect(id: AspectId) {
    setAspect(id);
    setPicks([]);
    setCounted([]);
    setStage("aspect");
  }

  const pairs = comparablePairs(findings);
  const doneAspects = new Set(
    findings.filter((f) => f.solidId === solidId).map((f) => f.aspect),
  );

  const ctx: AspectContext = {
    solid: activeSolid,
    faces,
    picks,
    counted,
    measured: measuredFor(activeSolid.id),
    folded: fold.values[0] < 0.5,
    canCompare: pairs.length > 0,
    revealEdges: reveal,
    clearEdges,
    animateFold: (target) => fold.animate(0, target),
    clearPicks: () => setPicks([]),
    record,
    toMenu,
    toSufficiency: () => {
      setSufficiencyStep("check");
      setStage("sufficiency");
    },
    toCompare: () => setStage("compare-pick"),
  };

  const showFold =
    (stage === "observe" && opened) || stage === "aspect" || stage === "compare";

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
            prompt="Pilih bangun ruang yang perlu kamu amati. Putar model, buka menjadi jaring-jaring, lalu amati bentuk dan ukuran sisi-sisinya untuk memperoleh informasi yang kamu perlukan."
            startLabel="Mulai Eksplorasi"
            onStart={() => setStage("shape")}
          />
        )}
        {stage === "shape" && (
          <ShapeStage
            ids={PRISM_IDS}
            title="Pilih Bangun Ruang yang Ingin Kamu Amati"
            note="Pilih bangun yang kamu perlukan untuk menyelidiki dugaan kelompokmu. Kamu dapat mengamati bangun lain jika diperlukan."
            current={solidId}
            polygonN={polygonN}
            onPolygonN={setPolygonN}
            onSelect={selectSolid}
          />
        )}
        {stage === "observe" && (
          <ObserveStage
            label={activeSolid.label}
            opened={opened}
            onOpen={() => {
              setOpened(true);
              fold.animate(0, 1);
            }}
            onNext={toMenu}
          />
        )}
        {stage === "aspects" && (
          <AspectMenuStage
            done={doneAspects}
            onSelect={selectAspect}
            onCheck={ctx.toSufficiency}
          />
        )}
        {stage === "aspect" && aspect && (
          <AspectStage key={`${activeSolid.label}:${aspect}`} aspect={aspect} ctx={ctx} />
        )}
        {stage === "sufficiency" && (
          <SufficiencyStage
            step={sufficiencyStep}
            question="Apakah informasi yang kamu peroleh sudah cukup untuk menyelidiki bagaimana sisi-sisi bangun dan jaring-jaringnya berkaitan dengan luas permukaan?"
            onEnough={() => setStage("done")}
            onNeedMore={() => setSufficiencyStep("more")}
            onMoreAspect={toMenu}
            onOtherSolid={() => setStage("shape")}
          />
        )}
        {stage === "compare-pick" && (
          <ComparePickStage
            pairs={pairs}
            onBack={toMenu}
            onPick={(p) => {
              setPair(p);
              setStage("compare");
            }}
          />
        )}
        {stage === "compare" && pair && (
          <CompareStage
            key={`${pair.aspect}:${pair.a}:${pair.b}`}
            pair={pair}
            findings={findings}
            onNext={() => setStage("compare-pick")}
            onMenu={toMenu}
            onSufficiency={ctx.toSufficiency}
          />
        )}
        {stage === "done" && (
          <DoneStage
            body="Kamu telah mengumpulkan informasi tentang sisi-sisi dan jaring-jaring bangun ruang. Pastikan informasi penting telah kamu catat pada e-module."
            next="Selanjutnya, gunakan Augmented Reality (AR) untuk mengamati sisi-sisi bangun dan ukurannya dari perspektif spasial yang berbeda serta melengkapi informasi yang masih kamu perlukan."
            summary={<FindingsSummary findings={findings} />}
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
              key={s.label}
              title={s.label}
              value={fold.values[i]}
              playing={fold.playing[i]}
              onSlider={(v) => fold.set(i, v)}
              onAnimate={(target) => fold.animate(i, target)}
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
