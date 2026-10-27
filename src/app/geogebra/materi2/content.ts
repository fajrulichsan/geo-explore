export type AspectId =
  | "susunan"
  | "hubungan"
  | "posisi"
  | "proses"
  | "bertumpuk"
  | "hasil"
  | "pola-lain";

export const ASPECTS: { id: AspectId; label: string }[] = [
  { id: "susunan", label: "Bentuk jaring-jaring yang dapat dibuat" },
  { id: "hubungan", label: "Hubungan antar sisi" },
  { id: "posisi", label: "Posisi sisi" },
  { id: "proses", label: "Proses lipatan" },
  { id: "bertumpuk", label: "Sisi bertumpuk atau tidak" },
  { id: "hasil", label: "Hasil ketika jaring-jaring dilipat" },
  { id: "pola-lain", label: "Pola/sifat lainnya" },
];

export const aspectLabel = (id: AspectId) =>
  ASPECTS.find((a) => a.id === id)?.label ?? id;

export const FOLD_HINT =
  "Perhatikan posisi akhir setiap sisi. Apakah ada sisi yang saling bertumpuk, bagian yang belum tertutup, atau hal lain yang kamu temukan?";
