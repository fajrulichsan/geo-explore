import type { Metadata } from "next";
import GeoGebraApp from "./GeoGebraApp";

export const metadata: Metadata = {
  title: "GeoGebra 3D - Eksplorasi Bangun Ruang | E-Modul Geometri",
  description:
    "Eksplorasi interaktif bangun ruang sisi datar menggunakan GeoGebra 3D Calculator, per submateri.",
};

export default async function GeogebraPage({
  searchParams,
}: {
  searchParams: Promise<{ materi?: string }>;
}) {
  const { materi } = await searchParams;
  return (
    <div className="fixed inset-0 bg-[#F9FAFB]">
      <GeoGebraApp initial={materi} />
    </div>
  );
}
