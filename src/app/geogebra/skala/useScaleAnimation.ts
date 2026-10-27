"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const MS = 900;

export function useScaleAnimation(apply: (k: number) => void) {
  const [k, setK] = useState(1);
  const valueRef = useRef(1);
  const frame = useRef<number | null>(null);

  const stop = useCallback(() => {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = null;
  }, []);

  const animateTo = useCallback(
    (target: number) => {
      stop();
      const from = valueRef.current;
      const startedAt = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - startedAt) / MS);
        const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
        const value = from + (target - from) * eased;
        valueRef.current = value;
        setK(value);
        apply(value);
        frame.current = p < 1 ? requestAnimationFrame(step) : null;
      };
      frame.current = requestAnimationFrame(step);
    },
    [apply, stop],
  );

  const jump = useCallback((value: number) => {
    stop();
    valueRef.current = value;
    setK(value);
  }, [stop]);

  useEffect(() => stop, [stop]);

  return { k, animateTo, jump };
}
