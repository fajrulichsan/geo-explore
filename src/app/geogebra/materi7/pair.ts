import { polygonArea } from "../shared/parts";
import { solidFor, type Solid } from "../shared/solids";

export type BaseType = "segitiga" | "segiempat" | "segilima" | "segi-n";
export const BASE_TYPES: { id: BaseType; label: string }[] = [
  { id: "segitiga", label: "Segitiga" },
  { id: "segiempat", label: "Segiempat" },
  { id: "segilima", label: "Segilima" },
  { id: "segi-n", label: "Segi-n" },
];

export const AREA_OPTIONS = [2, 4, 6, 8, 10] as const;
export const HEIGHT_OPTIONS = [2, 3, 4, 5, 6] as const;

export function pairSolids(type: BaseType, n: number, area: number, height: number): [Solid, Solid] {
  const prism = solidFor(`prisma-${type}`, n);
  const limas = solidFor(`limas-${type}`, n);
  const s = Math.sqrt(area / polygonArea(prism.base));
  const base = prism.base.map(([x, y]) => [x * s, y * s] as const);
  return [
    { ...prism, base, height },
    { ...limas, base, height },
  ];
}

export const volumes = (area: number, height: number) => ({
  prisma: Math.round(area * height * 100) / 100,
  limas: Math.round(((area * height) / 3) * 100) / 100,
});
