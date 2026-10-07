import type { Metadata } from "next";
import JaringJaringExplorer from "./JaringJaringExplorer";

export const metadata: Metadata = {
  title: "GeoGebra 3D - Jaring-Jaring | E-Modul Geometri",
  description:
    "Eksplorasi interaktif membuka bangun ruang menjadi jaring-jaring dan melipatnya kembali menggunakan GeoGebra 3D Calculator.",
};

export default function JaringJaringPage() {
  return (
    <div className="fixed inset-0 bg-[#F9FAFB]">
      <JaringJaringExplorer />
    </div>
  );
}
