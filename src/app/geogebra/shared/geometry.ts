import type { Solid } from "./solids";

export type Vec3 = [number, number, number];

export type Face = {
  key: string;
  label: string;
  shape: string;
  corners: number;
  edgeLengths: number[];
  edgeNames: string[];
};

export type Polyhedron = {
  vertices: Vec3[];
  faces: { key: string; label: string; verts: number[] }[];
};

export type Arrangement = {
  parent: number[];
  hinge: ([number, number] | null)[];
  order: number[];
};

const sub = (a: Vec3, b: Vec3): Vec3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add = (a: Vec3, b: Vec3): Vec3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const scale = (a: Vec3, k: number): Vec3 => [a[0] * k, a[1] * k, a[2] * k];
const dot = (a: Vec3, b: Vec3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const len = (a: Vec3) => Math.hypot(a[0], a[1], a[2]);
const norm = (a: Vec3): Vec3 => scale(a, 1 / len(a));
const cross = (a: Vec3, b: Vec3): Vec3 => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
];
const centroid = (pts: Vec3[]): Vec3 =>
  scale(pts.reduce(add, [0, 0, 0] as Vec3), 1 / pts.length);

const solidKey = (solid: Solid) =>
  `${solid.id}:${solid.height}:${solid.base.map((p) => p.join(",")).join(";")}`;

export function polyhedron(solid: Solid): Polyhedron {
  const n = solid.base.length;
  const bottom: Vec3[] = solid.base.map(([x, y]) => [x, y, 0]);
  const cycle = Array.from({ length: n }, (_, i) => i);
  const sideLabel = "Sisi tegak";

  if (solid.kind === "limas") {
    const c = centroid(bottom);
    return {
      vertices: [...bottom, [c[0], c[1], solid.height]],
      faces: [
        { key: "bottom", label: "Alas", verts: cycle },
        ...cycle.map((i) => ({
          key: `side${i + 1}`,
          label: `${sideLabel} ${i + 1}`,
          verts: [i, (i + 1) % n, n],
        })),
      ],
    };
  }

  return {
    vertices: [...bottom, ...bottom.map((p): Vec3 => [p[0], p[1], solid.height])],
    faces: [
      { key: "bottom", label: "Alas", verts: cycle },
      ...cycle.map((i) => ({
        key: `side${i + 1}`,
        label: `${sideLabel} ${i + 1}`,
        verts: [i, (i + 1) % n, n + ((i + 1) % n), n + i],
      })),
      { key: "top", label: "Tutup", verts: cycle.map((i) => n + i) },
    ],
  };
}

export const edgeKey = (a: number, b: number) =>
  a < b ? `${a}-${b}` : `${b}-${a}`;

export const faceEdgeKey = (verts: number[], edge: number) =>
  edgeKey(verts[edge], verts[(edge + 1) % verts.length]);

function inwardNormals(poly: Polyhedron) {
  const mid = centroid(poly.vertices);
  return poly.faces.map((f) => {
    const p = f.verts.map((v) => poly.vertices[v]);
    let normal = norm(cross(sub(p[1], p[0]), sub(p[2], p[0])));
    if (dot(normal, sub(mid, centroid(p))) < 0) normal = scale(normal, -1);
    return normal;
  });
}

function adjacency(poly: Polyhedron) {
  const byEdge = new Map<string, { face: number; a: number; b: number }[]>();
  poly.faces.forEach((f, fi) =>
    f.verts.forEach((a, i) => {
      const b = f.verts[(i + 1) % f.verts.length];
      const key = edgeKey(a, b);
      byEdge.set(key, [...(byEdge.get(key) ?? []), { face: fi, a, b }]);
    }),
  );
  return poly.faces.map((_, fi) =>
    [...byEdge.values()]
      .filter((pair) => pair.some((x) => x.face === fi))
      .map((pair) => {
        const mine = pair.find((x) => x.face === fi)!;
        const other = pair.find((x) => x.face !== fi)!;
        return { nb: other.face, a: mine.a, b: mine.b };
      }),
  );
}

type FoldCache = {
  poly: Polyhedron;
  inward: Vec3[];
  arrangements: Arrangement[];
};

const cache = new Map<string, FoldCache>();

function mulberry(seed: number) {
  let a = seed + 0x6d2b79f5;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function growTree(
  adj: ReturnType<typeof adjacency>,
  pick: (size: number) => number,
): Arrangement {
  const count = adj.length;
  const parent = Array<number>(count).fill(-1);
  const hinge: ([number, number] | null)[] = Array(count).fill(null);
  const inTree = new Set<number>([0]);
  const order = [0];
  const frontier: { from: number; to: number; a: number; b: number }[] = [];
  const expand = (f: number) =>
    adj[f].forEach((x) => frontier.push({ from: f, to: x.nb, a: x.a, b: x.b }));
  expand(0);
  while (inTree.size < count) {
    const candidates = frontier.filter((c) => !inTree.has(c.to));
    const chosen = candidates[pick(candidates.length)];
    parent[chosen.to] = chosen.from;
    hinge[chosen.to] = [chosen.a, chosen.b];
    inTree.add(chosen.to);
    order.push(chosen.to);
    expand(chosen.to);
  }
  return { parent, hinge, order };
}

function flatOverlaps(faces: Vec3[][]) {
  const axes = (poly: Vec3[]) =>
    poly.map((p, i) => {
      const q = poly[(i + 1) % poly.length];
      return norm([-(q[1] - p[1]), q[0] - p[0], 0]);
    });
  const span = (poly: Vec3[], axis: Vec3) => {
    const values = poly.map((p) => dot(p, axis));
    return [Math.min(...values), Math.max(...values)];
  };
  for (let i = 0; i < faces.length; i++) {
    for (let j = i + 1; j < faces.length; j++) {
      const separated = [...axes(faces[i]), ...axes(faces[j])].some((axis) => {
        const [a0, a1] = span(faces[i], axis);
        const [b0, b1] = span(faces[j], axis);
        return a1 <= b0 + 1e-6 || b1 <= a0 + 1e-6;
      });
      if (!separated) return true;
    }
  }
  return false;
}

const pending = new Map<string, () => void>();

function load(solid: Solid, full = false): FoldCache {
  const key = solidKey(solid);
  const hit = cache.get(key);
  if (hit) {
    if (full) {
      pending.get(key)?.();
      pending.delete(key);
    }
    return hit;
  }
  const poly = polyhedron(solid);
  const inward = inwardNormals(poly);
  const adj = adjacency(poly);
  const entry: FoldCache = { poly, inward, arrangements: [] };
  cache.set(key, entry);

  const seen = new Set<string>();
  const signatureOf = (tree: Arrangement) =>
    tree.order
      .slice(1)
      .map((f) => `${tree.parent[f]}>${f}`)
      .sort()
      .join(",");
  const accept = (tree: Arrangement) => {
    const signature = signatureOf(tree);
    if (seen.has(signature)) return;
    if (flatOverlaps(foldFaces(solid, 1, tree))) return;
    seen.add(signature);
    entry.arrangements.push(tree);
  };

  const breadth = growTree(adj, () => 0);
  accept(breadth);
  const complete = () => {
    for (let seed = 1; seed < 400 && entry.arrangements.length < 6; seed++) {
      const rand = mulberry(seed);
      accept(growTree(adj, (size) => Math.floor(rand() * size)));
    }
    if (entry.arrangements.length === 0) entry.arrangements.push(breadth);
  };
  if (full || entry.arrangements.length === 0) complete();
  else pending.set(key, complete);
  return entry;
}

export const arrangementCount = (solid: Solid) => load(solid, true).arrangements.length;

export function foldFaces(
  solid: Solid,
  t: number,
  arrangement: number | Arrangement = 0,
): Vec3[][] {
  const { poly, inward, arrangements } = load(solid, typeof arrangement === "number" && arrangement > 0);
  const tree =
    typeof arrangement === "number"
      ? (arrangements[arrangement] ?? arrangements[0])
      : arrangement;
  const original = poly.faces.map((f) => f.verts.map((v) => poly.vertices[v]));
  const pos: Vec3[][] = [];
  const normal: Vec3[] = [];

  tree.order.forEach((f) => {
    const p = tree.parent[f];
    if (p < 0) {
      pos[f] = original[f];
      normal[f] = [0, 0, 1];
      return;
    }
    const [a, b] = tree.hinge[f]!;
    const pIndex = (v: number) => poly.faces[p].verts.indexOf(v);
    const A = pos[p][pIndex(a)];
    const B = pos[p][pIndex(b)];
    const e = norm(sub(B, A));
    const rel = sub(centroid(pos[p]), A);
    const o = scale(norm(sub(rel, scale(e, dot(rel, e)))), -1);
    const phi0 = Math.acos(Math.max(-1, Math.min(1, dot(inward[p], inward[f]))));
    const phi = (1 - t) * phi0;
    const u = add(scale(o, Math.cos(phi)), scale(normal[p], Math.sin(phi)));
    normal[f] = add(scale(o, -Math.sin(phi)), scale(normal[p], Math.cos(phi)));

    const a0 = poly.vertices[a];
    const e0 = norm(sub(poly.vertices[b], a0));
    pos[f] = original[f].map((w) => {
      const rel0 = sub(w, a0);
      const s = dot(rel0, e0);
      const d = len(sub(rel0, scale(e0, s)));
      return add(add(A, scale(e, s)), scale(u, d));
    });
  });
  return pos;
}

function shapeName(points: Vec3[], lengths: number[]) {
  const n = points.length;
  if (n === 3) return "Segitiga";
  if (n === 4) {
    const right = [0, 1, 2, 3].every((i) => {
      const p = points[i];
      const q = points[(i + 1) % 4];
      const r = points[(i + 2) % 4];
      return Math.abs(dot(sub(q, p), sub(r, q))) < 1e-6;
    });
    if (right) return Math.abs(lengths[0] - lengths[1]) < 1e-6 ? "Persegi" : "Persegi panjang";
    const parallel = (i: number) =>
      len(cross(sub(points[(i + 1) % 4], points[i]), sub(points[(i + 3) % 4], points[(i + 2) % 4]))) < 1e-6;
    return parallel(0) || parallel(1) ? "Trapesium" : "Segiempat";
  }
  const regular = lengths.every((l) => Math.abs(l - lengths[0]) < 1e-6);
  const base = n === 5 ? "Segilima" : `Segi-${n}`;
  return regular ? `${base} beraturan` : base;
}

export function describeFaces(solid: Solid): Face[] {
  const { poly } = load(solid);
  const round = (v: number) => Math.round(v * 100) / 100;
  return poly.faces.map((f) => {
    const pts = f.verts.map((v) => poly.vertices[v]);
    const lengths = pts.map((p, i) => len(sub(pts[(i + 1) % pts.length], p)));
    const rectangularSide = solid.kind === "prisma" && f.key.startsWith("side");
    const squareSide =
      rectangularSide && Math.abs(lengths[0] - lengths[1]) < 1e-6;
    return {
      key: f.key,
      label: f.label,
      shape: rectangularSide
        ? squareSide
          ? "Persegi"
          : "Persegi panjang"
        : shapeName(pts, lengths),
      corners: pts.length,
      edgeLengths: lengths.map(round),
      edgeNames: rectangularSide
        ? ["panjang", "tinggi", "panjang", "tinggi"]
        : lengths.map((_, i) => `rusuk ${i + 1}`),
    };
  });
}
