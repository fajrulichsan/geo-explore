"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const FULL_MS = 2600;
const MAX_SOLIDS = 2;

const ease = (x: number) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2);

export function useFoldAnimation(apply: (solid: number, t: number) => void) {
  const [values, setValues] = useState<number[]>(() => Array(MAX_SOLIDS).fill(0));
  const [playing, setPlaying] = useState<boolean[]>(() => Array(MAX_SOLIDS).fill(false));
  const valuesRef = useRef<number[]>(Array(MAX_SOLIDS).fill(0));
  const frames = useRef<(number | null)[]>(Array(MAX_SOLIDS).fill(null));

  const setPlayingAt = useCallback((solid: number, value: boolean) => {
    setPlaying((prev) => prev.map((p, i) => (i === solid ? value : p)));
  }, []);

  const commit = useCallback(
    (solid: number, t: number) => {
      valuesRef.current[solid] = t;
      setValues((prev) => prev.map((v, i) => (i === solid ? t : v)));
      apply(solid, t);
    },
    [apply],
  );

  const pause = useCallback(
    (solid: number) => {
      const id = frames.current[solid];
      if (id !== null) cancelAnimationFrame(id);
      frames.current[solid] = null;
      setPlayingAt(solid, false);
    },
    [setPlayingAt],
  );

  const set = useCallback(
    (solid: number, t: number) => {
      pause(solid);
      commit(solid, t);
    },
    [pause, commit],
  );

  const animate = useCallback(
    (solid: number, target: number) => {
      pause(solid);
      const from = valuesRef.current[solid];
      const distance = Math.abs(target - from);
      if (distance < 0.001) return;
      const duration = FULL_MS * distance;
      const startedAt = performance.now();
      setPlayingAt(solid, true);

      const step = (now: number) => {
        const progress = Math.min(1, (now - startedAt) / duration);
        commit(solid, from + (target - from) * ease(progress));
        if (progress < 1) {
          frames.current[solid] = requestAnimationFrame(step);
        } else {
          frames.current[solid] = null;
          setPlayingAt(solid, false);
        }
      };
      frames.current[solid] = requestAnimationFrame(step);
    },
    [pause, commit, setPlayingAt],
  );

  const reset = useCallback(() => {
    for (let i = 0; i < MAX_SOLIDS; i++) pause(i);
    valuesRef.current = Array(MAX_SOLIDS).fill(0);
    setValues(Array(MAX_SOLIDS).fill(0));
  }, [pause]);

  useEffect(() => {
    const ids = frames.current;
    return () => ids.forEach((id) => id !== null && cancelAnimationFrame(id));
  }, []);

  return { values, playing, animate, pause, set, reset };
}
