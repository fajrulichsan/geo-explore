import type { Part } from "../shared/parts";
import type { Solid, SolidId } from "../shared/solids";
import type { Result, SkalaMode } from "./data";

export type AspectId =
  | "ukuran-awal"
  | "faktor-skala"
  | "ukuran-skala"
  | "target"
  | "info-lain";

export type SkalaContext = {
  mode: SkalaMode;
  solid: Solid;
  solidId: SolidId;
  parts: Part[];
  k: number;
  revealed: (k: number) => Part[];
  results: Result[];
  setK: (k: number) => void;
  reveal: (partId: string) => void;
  clearMeasured: () => void;
  setMeasureOn: (on: boolean) => void;
  addResult: (kind: Result["kind"]) => void;
  openPair: (a: number, b: number) => void;
  closePair: () => void;
  pairActive: boolean;
  toMenu: () => void;
  toSufficiency: () => void;
};
