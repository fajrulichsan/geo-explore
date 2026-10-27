import type { AspectId } from "./types";

export const ASPECTS: { id: AspectId; label: string }[] = [
  { id: "banyak-sisi", label: "Banyak sisi" },
  { id: "bentuk-sisi", label: "Bentuk setiap sisi" },
  { id: "ukuran-sisi", label: "Ukuran setiap sisi" },
  { id: "sisi-sama", label: "Sisi-sisi yang sama bentuk dan ukurannya" },
  { id: "luas-sisi", label: "Luas setiap sisi" },
  { id: "hubungan-3d", label: "Hubungan sisi 3D dengan jaring-jaring" },
  { id: "hubungan-ukuran", label: "Hubungan ukuran antar sisi" },
  { id: "pola-lain", label: "Pola/sifat lainnya" },
];

export const aspectLabel = (id: AspectId) =>
  ASPECTS.find((a) => a.id === id)?.label ?? id;

export const COMPARE_HINTS: Record<AspectId, string> = {
  "banyak-sisi": "Perhatikan kembali banyak sisi yang kamu peroleh pada masing-masing bangun.",
  "bentuk-sisi": "Perhatikan bentuk sisi-sisi yang terdapat pada kedua bangun.",
  "ukuran-sisi": "Perhatikan ukuran sisi yang telah kamu peroleh pada masing-masing bangun.",
  "sisi-sama": "Perhatikan sisi-sisi yang telah kamu bandingkan pada masing-masing bangun.",
  "luas-sisi": "Perhatikan bentuk, ukuran, dan luas yang telah kamu peroleh.",
  "hubungan-3d": "Perhatikan sisi yang sama sebelum dan setelah bangun dibuka menjadi jaring-jaring.",
  "hubungan-ukuran": "Perhatikan ukuran bagian-bagian yang bersesuaian pada sisi yang telah kamu bandingkan.",
  "pola-lain": "Coba perhatikan kembali bentuk, ukuran, posisi, atau hubungan antara sisi-sisi pada kedua bangun.",
};
