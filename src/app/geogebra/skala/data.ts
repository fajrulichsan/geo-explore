import { polyhedron, faceEdgeKey } from "../shared/geometry";
import type { Part } from "../shared/parts";
import { solidFor, type Solid, type SolidId } from "../shared/solids";
import type { Overlay } from "../shared/useGeoGebra";
import { SOLID_GAP } from "../shared/useGeoGebra";

export type SkalaMode = "luas" | "volume";
export const K_OPTIONS = [0.5, 1, 2, 3] as const;
export const kLabel = (k: number) => (k === 0.5 ? "½" : String(k));

export type Result = {
  solidId: SolidId;
  k: number;
  kind: "ukuran" | "target";
  parts: string[];
};

export function skalaSolid(id: SolidId, n: number, mode: SkalaMode): Solid {
  const base = solidFor(id, n);
  if (id !== "kubus") return base;
  const f = (mode === "luas" ? 8 : 2) / 5;
  return { ...base, base: base.base.map(([x, y]) => [x * f, y * f] as const), height: base.height * f };
}

export const fmt = (v: number) => String(Math.round(v * 100) / 100);

export function edgeCaptions(
  solid: Solid,
  solidIndex: number,
  parts: Part[],
  k: number,
) {
  const poly = polyhedron(solid);
  const map = new Map<string, string>();
  parts.forEach((part) => {
    let placed = false;
    poly.faces.forEach((face) =>
      face.verts.forEach((_, e) => {
        if (!placed && part.edgeKeys.includes(faceEdgeKey(face.verts, e))) {
          map.set(`${solidIndex}:${face.key}:${e}`, `${fmt(part.value * k)} cm`);
          placed = true;
        }
      }),
    );
  });
  return map;
}

export function partOverlays(
  parts: Part[],
  solidIndex: number,
  k: number,
): Overlay[] {
  return parts.flatMap((part, i) =>
    part.overlay
      ? [
          {
            points: part.overlay.map((p) => [
              p[0] * k + solidIndex * SOLID_GAP,
              p[1] * k,
              p[2] * k,
            ]) as Overlay["points"],
            color: i % 2 ? "#2563EB" : "#DC2626",
            dashed: true,
            caption: `${fmt(part.value * k)} cm`,
          },
        ]
      : [],
  );
}
