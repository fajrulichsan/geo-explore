import type { GgbApi } from "../shared/useGeoGebra";

export type StackSpec = { nx: number; ny: number; layers: number; explode: boolean };
export type StackFace = { name: string; stack: number; cube: string; layer: number; top: number };

export const LAYER_GAP = 2.8;

const rgb = (hex: string): [number, number, number] => {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

export function buildStacks(
  api: GgbApi,
  register: (name: string, tag: string) => void,
  specs: StackSpec[],
): StackFace[] {
  const faces: StackFace[] = [];
  let xOffset = 0;
  specs.forEach((spec, s) => {
    const step = spec.explode ? LAYER_GAP : 1;
    for (let z = 0; z < spec.layers; z++) {
      for (let x = 0; x < spec.nx; x++) {
        for (let y = 0; y < spec.ny; y++) {
          const x0 = x + xOffset;
          const z0 = z * step;
          const x1 = x0 + 1;
          const y1 = y + 1;
          const z1 = z0 + 1;
          const solidBelow = !spec.explode && z > 0;
          const solidAbove = !spec.explode && z < spec.layers - 1;
          const quads: [string, number[][]][] = [];
          if (!solidBelow) quads.push(["b", [[x0, y, z0], [x1, y, z0], [x1, y1, z0], [x0, y1, z0]]]);
          if (!solidAbove) quads.push(["t", [[x0, y, z1], [x1, y, z1], [x1, y1, z1], [x0, y1, z1]]]);
          if (x === 0) quads.push(["l", [[x0, y, z0], [x0, y1, z0], [x0, y1, z1], [x0, y, z1]]]);
          if (x === spec.nx - 1) quads.push(["r", [[x1, y, z0], [x1, y1, z0], [x1, y1, z1], [x1, y, z1]]]);
          if (y === 0) quads.push(["f", [[x0, y, z0], [x1, y, z0], [x1, y, z1], [x0, y, z1]]]);
          if (y === spec.ny - 1) quads.push(["k", [[x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]]]);
          quads.forEach(([dir, pts]) => {
            const name = `C${s}_${x}_${y}_${z}${dir}`;
            api.evalCommand(`${name}=Polygon(${pts.map((p) => `(${p.join(",")})`).join(",")})`);
            api.setFixed(name, true, true);
            api.setLabelVisible(name, false);
            register(name, `cube:${s}:${x}:${y}:${z}`);
            faces.push({ name, stack: s, cube: `${s}:${x}:${y}:${z}`, layer: z, top: spec.layers - 1 });
          });
        }
      }
    }
    xOffset += spec.nx + 3;
  });
  api.getAllObjectNames().forEach((name) => {
    if (api.getObjectType(name).toLowerCase() === "segment") {
      api.setLabelVisible(name, false);
      api.setColor(name, 31, 41, 55);
      api.setLineThickness(name, 3);
    }
  });
  return faces;
}

export function paintStacks(
  api: GgbApi,
  faces: StackFace[],
  opts: { highlightTop: boolean; counted: ReadonlySet<string> },
) {
  faces.forEach((f) => {
    let color = "#60A5FA";
    let filling = 0.35;
    if (opts.highlightTop) {
      if (f.layer === f.top) {
        color = "#FBBF24";
        filling = 0.6;
      } else {
        color = "#94A3B8";
        filling = 0.08;
      }
    }
    if (opts.counted.has(f.cube)) {
      color = "#16A34A";
      filling = 0.7;
    }
    const [r, g, b] = rgb(color);
    api.setColor(f.name, r, g, b);
    api.setFilling(f.name, filling);
  });
}
