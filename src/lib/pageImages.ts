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
  | "materi-8-cover"
  | "M1-P1-L1-1"
  | "M1-P1-L1-2"
  | "M1-P1-L1-3"
  | "M1-P2-L1-1"
  | "M1-P2-L1-2"
  | "M1-P2-L1-3"
  | "M1-P2-L1-4"
  | "M1-P2-L1-5"
  | "M1-P2-L1-6"
  | "M1-P2-L1-7"
  | "M1-P2-L1-8"
  | "M1-P2-L1-9"
  | "M1-P2-L1-10"
  | "M1-P2-L1-11"
  | "M1-P2-L2-1"
  | "M1-P2-L3-1"
  | "M1-P2-L4-1"
  | "M1-P2-L4-2"
  | "M1-P2-L4-3"
  | "M1-P2-L4-4"
  | "M1-P2-L4-5"
  | "M1-P2-L4-6"
  | "M1-P2-L4-7"
  | "M1-P2-L4-8"
  | "M1-P2-L4-9"
  | "M1-P2-L4-10"
  | "M1-P2-L5-1"
  | "M1-P2-L5-2"
  | "M1-P2-L5-3"
  | "M1-P2-L7-1"
  | "M1-P3-L1-1"
  | "M1-P3-L2-1"
  | "M1-P3-L2-2"
  | "M1-P3-L2-3"
  | "M1-P4-L1-1"
  | "M1-P4-L3-1"
  | "M1-P4-L4-1"
  | "M1-P4-L5-1"
  | "M1-P4-L6-1"
  | "M1-P4-L6-2"
  | "M1-P4-L6-3"
  | "M1-P4-L6-4"
  | "M1-P4-L10-1"
  | "M1-P5-L5-1"
  | "M1-P5-L7-1"
  | "M1-P6-L1-1"
  | "M1-P6-L2-1"
  | "M1-P6-L4-1"
  | "M1-P6-L5-1"
  | "M1-P6-L6-1"
  | "M1-P8-L4-1"
  | "M1-P9-L1-1"
  | "M1-P9-L1-2"
  | "M1-P9-L1-3"
  | "M1-P9-L1-4"
  | "M1-P9-L1-5"
  | "M1-P9-L1-6"
  | "M1-P9-L2-1"
  | "M1-P9-L2-2";

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
  "M1-P1-L1-1": "https://placehold.co/600x400?text=M1-P1-L1-1",
  "M1-P1-L1-2": "https://placehold.co/300x180?text=GeoGebra+3D",
  "M1-P1-L1-3": "https://placehold.co/300x180?text=Augmented+Reality",
  "M1-P2-L1-1": "https://placehold.co/300x225?text=Rumah",
  "M1-P2-L1-2": "https://placehold.co/300x225?text=Tenda+Limas+Segiempat",
  "M1-P2-L1-3": "https://placehold.co/300x225?text=Akuarium",
  "M1-P2-L1-4": "https://placehold.co/300x225?text=Rubik",
  "M1-P2-L1-5": "https://placehold.co/300x225?text=Tenda+Prisma+Segitiga",
  "M1-P2-L1-6": "https://placehold.co/300x225?text=Kotak+Susu",
  "M1-P2-L1-7": "https://placehold.co/300x225?text=Kotak+Sepatu",
  "M1-P2-L1-8": "https://placehold.co/300x225?text=Lemari",
  "M1-P2-L1-9": "https://placehold.co/300x225?text=Gazebo",
  "M1-P2-L1-10": "https://placehold.co/300x225?text=Piramida",
  "M1-P2-L1-11": "https://placehold.co/360x240?text=Ilustrasi+Amati",
  "M1-P2-L2-1": "https://placehold.co/400x256?text=Ilustrasi+Berpikir+Kritis",
  "M1-P2-L3-1": "https://placehold.co/400x256?text=Ilustrasi+Ingat",
  "M1-P2-L4-1": "https://placehold.co/300x300?text=Blok+Kayu+%28Kubus%29",
  "M1-P2-L4-2": "https://placehold.co/300x300?text=Tenda+%28Prisma+Segitiga%29",
  "M1-P2-L4-3": "https://placehold.co/300x300?text=Akuarium",
  "M1-P2-L4-4": "https://placehold.co/300x300?text=Rubik+%28Kubus%29",
  "M1-P2-L4-5": "https://placehold.co/300x300?text=Kotak+Tisu",
  "M1-P2-L4-6": "https://placehold.co/300x300?text=Kardus+%28Balok%29",
  "M1-P2-L4-7": "https://placehold.co/300x300?text=Cokelat+%28Prisma+Segitiga%29",
  "M1-P2-L4-8": "https://placehold.co/300x300?text=Piramida+%28Limas+Segiempat%29",
  "M1-P2-L4-9": "https://placehold.co/300x300?text=Mainan+Limas+Segitiga",
  "M1-P2-L4-10": "https://placehold.co/300x300?text=Tumpukan+Ubin",
  "M1-P2-L5-1": "https://placehold.co/300x180?text=GeoGebra+3D",
  "M1-P2-L5-2": "https://placehold.co/300x180?text=Augmented+Reality",
  "M1-P2-L5-3": "https://placehold.co/300x180?text=Gambar+2D",
  "M1-P2-L7-1": "https://placehold.co/320x320?text=Ilustrasi+Diskusi",
  "M1-P3-L1-1": "https://placehold.co/500x400?text=Ilustrasi+Kolaborasi",
  "M1-P3-L2-1": "https://placehold.co/400x280?text=Kelompok+A",
  "M1-P3-L2-2": "https://placehold.co/400x280?text=Kelompok+B",
  "M1-P3-L2-3": "https://placehold.co/400x280?text=Kelompok+C",
  "M1-P4-L1-1": "https://placehold.co/400x400?text=Referensi+Visual",
  "M1-P4-L3-1": "https://placehold.co/560x315?text=Ilustrasi+GeoGebra+3D",
  "M1-P4-L4-1": "https://placehold.co/400x400?text=Gambar+Referensi",
  "M1-P4-L5-1": "https://placehold.co/300x300?text=Ilustrasi+AR",
  "M1-P4-L6-1": "https://placehold.co/150x150?text=Scan+QR",
  "M1-P4-L6-2": "https://placehold.co/150x150?text=Arahkan+Kamera",
  "M1-P4-L6-3": "https://placehold.co/150x150?text=Putar+Model",
  "M1-P4-L6-4": "https://placehold.co/150x150?text=Lengkapi+Pengamatan",
  "M1-P4-L10-1": "https://placehold.co/400x400?text=Ilustrasi+Catatan",
  "M1-P5-L5-1": "https://placehold.co/200x200?text=Ilustrasi",
  "M1-P5-L7-1": "https://placehold.co/560x315?text=Ilustrasi",
  "M1-P6-L1-1": "https://placehold.co/320x160?text=Ilustrasi+Balok",
  "M1-P6-L2-1": "https://placehold.co/260x394?text=Ilustrasi",
  "M1-P6-L4-1": "https://placehold.co/64x64?text=Ilustrasi",
  "M1-P6-L5-1": "https://placehold.co/300x180?text=Ilustrasi",
  "M1-P6-L6-1": "https://placehold.co/400x220?text=Ilustrasi",
  "M1-P8-L4-1": "https://placehold.co/120x120?text=Ilustrasi",
  "M1-P9-L1-1": "https://placehold.co/200x200?text=Kubus",
  "M1-P9-L1-2": "https://placehold.co/200x200?text=Balok",
  "M1-P9-L1-3": "https://placehold.co/200x200?text=Prisma+Segitiga",
  "M1-P9-L1-4": "https://placehold.co/200x200?text=Prisma+Segi+Lima",
  "M1-P9-L1-5": "https://placehold.co/200x200?text=Limas+Segitiga",
  "M1-P9-L1-6": "https://placehold.co/200x200?text=Limas+Segiempat",
  "M1-P9-L2-1": "https://placehold.co/96x96?text=Kubus",
  "M1-P9-L2-2": "https://placehold.co/80x80?text=Ilustrasi",
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
