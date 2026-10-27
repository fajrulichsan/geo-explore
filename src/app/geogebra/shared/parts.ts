import { polyhedron, edgeKey, type Vec3 } from "./geometry";
import type { Solid } from "./solids";

export type Part = {
  id: string;
  label: string;
  edgeKeys: string[];
  value: number;
  overlay?: [Vec3, Vec3];
};

const dist = (a: Vec3, b: Vec3) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
const round = (v: number) => Math.round(v * 100) / 100;

export function polygonArea(points: readonly (readonly [number, number])[]) {
  let sum = 0;
  points.forEach((p, i) => {
    const q = points[(i + 1) % points.length];
    sum += p[0] * q[1] - q[0] * p[1];
  });
  return Math.abs(sum) / 2;
}

function footOnLine(p: Vec3, a: Vec3, b: Vec3): Vec3 {
  const ab: Vec3 = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
  const ap: Vec3 = [p[0] - a[0], p[1] - a[1], p[2] - a[2]];
  const t = (ab[0] * ap[0] + ab[1] * ap[1] + ab[2] * ap[2]) / (ab[0] ** 2 + ab[1] ** 2 + ab[2] ** 2);
  return [a[0] + ab[0] * t, a[1] + ab[1] * t, a[2] + ab[2] * t];
}

const LETTERS = "ABCDEFGHIJKL";

function groupBy<T>(items: T[], key: (item: T) => string) {
  const groups = new Map<string, T[]>();
  items.forEach((item) => groups.set(key(item), [...(groups.get(key(item)) ?? []), item]));
  return [...groups.values()];
}

export function partsOf(solid: Solid): Part[] {
  const poly = polyhedron(solid);
  const n = solid.base.length;
  const v = poly.vertices;
  const baseEdges = Array.from({ length: n }, (_, i) => ({
    i,
    a: i,
    b: (i + 1) % n,
    len: dist(v[i], v[(i + 1) % n]),
  }));

  if (solid.id === "kubus") {
    const keys: string[] = [];
    poly.faces.forEach((f) =>
      f.verts.forEach((a, i) => {
        const key = edgeKey(a, f.verts[(i + 1) % f.verts.length]);
        if (!keys.includes(key)) keys.push(key);
      }),
    );
    return [{ id: "rusuk", label: "Rusuk", edgeKeys: keys, value: round(baseEdges[0].len) }];
  }

  if (solid.id === "balok") {
    return [
      { id: "panjang", label: "Panjang", edgeKeys: [edgeKey(0, 1), edgeKey(3, 2), edgeKey(4, 5), edgeKey(7, 6)], value: round(baseEdges[0].len) },
      { id: "lebar", label: "Lebar", edgeKeys: [edgeKey(1, 2), edgeKey(0, 3), edgeKey(5, 6), edgeKey(4, 7)], value: round(baseEdges[1].len) },
      { id: "tinggi", label: "Tinggi", edgeKeys: [0, 1, 2, 3].map((i) => edgeKey(i, i + 4)), value: round(solid.height) },
    ];
  }

  const groups = groupBy(baseEdges, (e) => e.len.toFixed(4));
  const parts: Part[] = groups.map((g, gi) => ({
    id: `alas-${gi}`,
    label: groups.length === 1 ? "Rusuk alas" : `Rusuk alas ${LETTERS[gi]}`,
    edgeKeys: g.flatMap((e) =>
      solid.kind === "prisma"
        ? [edgeKey(e.a, e.b), edgeKey(e.a + n, e.b + n)]
        : [edgeKey(e.a, e.b)],
    ),
    value: round(g[0].len),
  }));

  const mid = (a: Vec3, b: Vec3): Vec3 => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2];

  if (solid.kind === "prisma") {
    parts.push({
      id: "tinggi",
      label: "Tinggi prisma",
      edgeKeys: baseEdges.map((e) => edgeKey(e.a, e.a + n)),
      value: round(solid.height),
    });
    if (n === 3 || n === 4) {
      const apex = v[n === 3 ? 2 : 3];
      const foot = footOnLine(apex, v[0], v[1]);
      parts.push({
        id: "tinggi-alas",
        label: n === 3 ? "Tinggi segitiga alas" : "Tinggi trapesium alas",
        edgeKeys: [],
        value: round(dist(apex, foot)),
        overlay: [apex, foot],
      });
    } else {
      const c = v.slice(0, n).reduce<Vec3>((s, p) => [s[0] + p[0] / n, s[1] + p[1] / n, 0], [0, 0, 0]);
      const m = mid(v[0], v[1]);
      parts.push({ id: "apotema-alas", label: "Apotema alas", edgeKeys: [], value: round(dist(c, m)), overlay: [c, m] });
    }
    return parts;
  }

  const apex = v[n];
  const centre = v.slice(0, n).reduce<Vec3>((s, p) => [s[0] + p[0] / n, s[1] + p[1] / n, 0], [0, 0, 0]);
  parts.push({
    id: "tinggi",
    label: "Tinggi limas",
    edgeKeys: [],
    value: round(solid.height),
    overlay: [apex, centre],
  });
  const slants = baseEdges.map((e) => {
    const foot = footOnLine(apex, v[e.a], v[e.b]);
    return { e, foot, len: dist(apex, foot) };
  });
  groupBy(slants, (s) => s.len.toFixed(4)).forEach((g, gi, all) => {
    parts.push({
      id: `tinggi-sisi-${gi}`,
      label: all.length === 1 ? "Tinggi sisi tegak" : `Tinggi sisi tegak ${LETTERS[gi]}`,
      edgeKeys: [],
      value: round(g[0].len),
      overlay: [apex, g[0].foot],
    });
  });
  return parts;
}

export function partForEdge(parts: Part[], key: string) {
  return parts.find((p) => p.edgeKeys.includes(key));
}
