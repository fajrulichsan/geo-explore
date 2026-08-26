import { supabase } from "@/lib/supabase";

/** Keys match the `nama` column in the `page_images` table (supabase/migrations_manual/0002_page_images.sql). */
export type PageImageKey =
  | "logo-kampus"
  | "home-hero"
  | "shape-kubus"
  | "shape-balok"
  | "shape-prisma"
  | "shape-limas"
  | "qr-geogebra"
  | "qr-ar"
  | "materi-1-cover"
  | "materi-2-cover"
  | "materi-3-cover"
  | "materi-4-cover"
  | "materi-5-cover"
  | "materi-6-cover"
  | "materi-7-cover"
  | "materi-8-cover";

const DEFAULT_IMAGES: Record<PageImageKey, string> = {
  "logo-kampus": "https://is3.cloudhost.id/assets-geo/logo-kampus.png",
  "home-hero": "https://is3.cloudhost.id/assets-geo/home-1.webp",
  "shape-kubus": "https://is3.cloudhost.id/assets-geo/kubus.png",
  "shape-balok": "https://is3.cloudhost.id/assets-geo/balok.png",
  "shape-prisma": "https://is3.cloudhost.id/assets-geo/prima.png",
  "shape-limas": "https://is3.cloudhost.id/assets-geo/limas-segitiga.png",
  "qr-geogebra": "https://is3.cloudhost.id/assets-geo/qr-geogebra.png",
  "qr-ar": "https://is3.cloudhost.id/assets-geo/qr-ar.png",
  "materi-1-cover": "https://placehold.co/400x300?text=Kubus+%26+Balok",
  "materi-2-cover": "https://placehold.co/400x300?text=Prisma",
  "materi-3-cover": "https://placehold.co/400x300?text=Limas",
  "materi-4-cover": "https://placehold.co/400x300?text=Tabung",
  "materi-5-cover": "https://placehold.co/400x300?text=Kerucut",
  "materi-6-cover": "https://placehold.co/400x300?text=Bola",
  "materi-7-cover": "https://placehold.co/400x300?text=Gabungan+Datar",
  "materi-8-cover": "https://placehold.co/400x300?text=Gabungan+Lengkung",
};

/** Falls back to DEFAULT_IMAGES for any key missing from the table (e.g. before the migration is seeded). */
export async function getPageImages(): Promise<Record<PageImageKey, string>> {
  const { data } = await supabase.from("page_images").select("nama, url");
  const images = { ...DEFAULT_IMAGES };
  for (const row of data ?? []) {
    if (row.nama in images) images[row.nama as PageImageKey] = row.url;
  }
  return images;
}

export async function getPageImage(key: PageImageKey): Promise<string> {
  const images = await getPageImages();
  return images[key];
}
