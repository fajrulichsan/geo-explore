export const MATERI_META: Record<string, { title: string; description: string }> = {
  "1": { title: "Kubus & Balok", description: "Mengenal sifat, jaring-jaring, dan volume kubus serta balok." },
  "2": { title: "Prisma", description: "Pelajari sifat dan jaring-jaring bangun ruang prisma." },
  "3": { title: "Limas", description: "Eksplorasi sifat, jaring-jaring, dan volume bangun ruang limas." },
  "4": { title: "Tabung", description: "Pelajari sifat dan volume bangun ruang sisi lengkung tabung." },
  "5": { title: "Kerucut", description: "Eksplorasi sifat dan volume bangun ruang sisi lengkung kerucut." },
  "6": { title: "Bola", description: "Pelajari sifat dan volume bangun ruang sisi lengkung bola." },
  "7": { title: "Gabungan Bangun Ruang Sisi Datar", description: "Menghitung volume gabungan kubus, balok, prisma, dan limas." },
  "8": { title: "Gabungan Bangun Ruang Sisi Lengkung", description: "Menghitung volume gabungan tabung, kerucut, dan bola." },
};

export function getMateriTitle(materi: string): string {
  return MATERI_META[materi]?.title ?? `Materi ${materi}`;
}
