export type ShapeId =
  | "kubus"
  | "balok"
  | "prisma-segitiga"
  | "prisma-segilima"
  | "limas-segitiga"
  | "limas-segilima";

export const SHAPES: { id: ShapeId; label: string; commands: string[] }[] = [
  {
    id: "kubus",
    label: "Kubus",
    commands: ["Cube((0,0,0),(4,0,0))"],
  },
  {
    id: "balok",
    label: "Balok",
    commands: [
      "poly1=Polygon((0,0,0),(4,0,0),(4,3,0),(0,3,0))",
      "Prism(poly1,2)",
    ],
  },
  {
    id: "prisma-segitiga",
    label: "Prisma Segitiga",
    commands: [
      "poly1=Polygon((0,0,0),(4,0,0),(2,3,0))",
      "Prism(poly1,4)",
    ],
  },
  {
    id: "prisma-segilima",
    label: "Prisma Segilima",
    commands: [
      "poly1=Polygon((0,0,0),(2,0,0),5)",
      "Prism(poly1,4)",
    ],
  },
  {
    id: "limas-segitiga",
    label: "Limas Segitiga",
    commands: [
      "poly1=Polygon((0,0,0),(4,0,0),(2,3,0))",
      "Pyramid(poly1,5)",
    ],
  },
  {
    id: "limas-segilima",
    label: "Limas Segilima",
    commands: [
      "poly1=Polygon((0,0,0),(2,0,0),5)",
      "Pyramid(poly1,5)",
    ],
  },
];
