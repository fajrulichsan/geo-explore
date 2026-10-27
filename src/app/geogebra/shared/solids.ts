export type SolidId =
  | "kubus"
  | "balok"
  | "prisma-segitiga"
  | "prisma-segiempat"
  | "prisma-segilima"
  | "prisma-segi-n"
  | "limas-segitiga"
  | "limas-segiempat"
  | "limas-segilima"
  | "limas-segi-n";

export type Vec2 = readonly [number, number];

export type Solid = {
  id: SolidId;
  label: string;
  group: "utama" | "prisma" | "limas";
  kind: "prisma" | "limas";
  base: readonly Vec2[];
  height: number;
};

export const POLYGON_N_DEFAULT = 6;

function regularPolygon(n: number, side: number): Vec2[] {
  const radius = side / (2 * Math.sin(Math.PI / n));
  return Array.from({ length: n }, (_, i) => {
    const angle = (2 * Math.PI * i) / n - Math.PI / 2 - Math.PI / n;
    return [radius * Math.cos(angle), radius * Math.sin(angle)] as const;
  });
}

export function solidFor(id: SolidId, n = POLYGON_N_DEFAULT): Solid {
  switch (id) {
    case "kubus":
      return { id, label: "Kubus", group: "utama", kind: "prisma", base: [[0, 0], [5, 0], [5, 5], [0, 5]], height: 5 };
    case "balok":
      return { id, label: "Balok", group: "utama", kind: "prisma", base: [[0, 0], [8, 0], [8, 5], [0, 5]], height: 4 };
    case "prisma-segitiga":
      return { id, label: "Prisma Segitiga", group: "prisma", kind: "prisma", base: [[0, 0], [6, 0], [3, 4]], height: 8 };
    case "prisma-segiempat":
      return { id, label: "Prisma Segiempat", group: "prisma", kind: "prisma", base: [[0, 0], [10, 0], [7, 4], [3, 4]], height: 6 };
    case "prisma-segilima":
      return { id, label: "Prisma Segilima", group: "prisma", kind: "prisma", base: regularPolygon(5, 3), height: 6 };
    case "prisma-segi-n":
      return { id, label: `Prisma Segi-${n}`, group: "prisma", kind: "prisma", base: regularPolygon(n, 3), height: 6 };
    case "limas-segitiga":
      return { id, label: "Limas Segitiga", group: "limas", kind: "limas", base: [[0, 0], [6, 0], [3, 4]], height: 6 };
    case "limas-segiempat":
      return { id, label: "Limas Segiempat", group: "limas", kind: "limas", base: [[0, 0], [6, 0], [6, 4], [0, 4]], height: 5 };
    case "limas-segilima":
      return { id, label: "Limas Segilima", group: "limas", kind: "limas", base: regularPolygon(5, 3), height: 3 };
    case "limas-segi-n":
      return { id, label: `Limas Segi-${n}`, group: "limas", kind: "limas", base: regularPolygon(n, 3), height: 5 };
  }
}

export const PRISM_IDS: SolidId[] = [
  "kubus",
  "balok",
  "prisma-segitiga",
  "prisma-segiempat",
  "prisma-segilima",
  "prisma-segi-n",
];

export const ALL_SOLID_IDS: SolidId[] = [
  ...PRISM_IDS,
  "limas-segitiga",
  "limas-segiempat",
  "limas-segilima",
  "limas-segi-n",
];
