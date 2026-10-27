import type { Face } from "../shared/geometry";
import type { Solid, SolidId } from "../shared/solids";

export type AspectId =
  | "banyak-sisi"
  | "bentuk-sisi"
  | "ukuran-sisi"
  | "sisi-sama"
  | "luas-sisi"
  | "hubungan-3d"
  | "hubungan-ukuran"
  | "pola-lain";

export type Stage =
  | "intro"
  | "shape"
  | "observe"
  | "aspects"
  | "aspect"
  | "sufficiency"
  | "more-data"
  | "compare-pick"
  | "compare"
  | "done";

export type Finding = {
  solidId: SolidId;
  aspect: AspectId;
  details: string[];
};

export type MeasuredEdges = ReadonlyMap<string, ReadonlySet<number>>;

export type AspectContext = {
  solid: Solid;
  faces: Face[];
  picks: string[];
  counted: string[];
  measured: MeasuredEdges;
  folded: boolean;
  canCompare: boolean;
  revealEdges: (face: string, edges: number[]) => void;
  clearEdges: (face: string) => void;
  animateFold: (target: 0 | 1) => void;
  clearPicks: () => void;
  record: (details: string[]) => void;
  toMenu: () => void;
  toSufficiency: () => void;
  toCompare: () => void;
};
