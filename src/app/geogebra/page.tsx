import type { Metadata } from "next";
import GeoGebraExplorer from "./GeoGebraExplorer";

export const metadata: Metadata = {
  title: "GeoGebra 3D - Kubus | E-Modul Geometri",
  description: "Eksplorasi interaktif bangun ruang kubus menggunakan GeoGebra 3D Calculator.",
};

export default function GeogebraPage() {
  return (
    <div className="fixed inset-0 bg-[#F9FAFB]">
      <GeoGebraExplorer />
    </div>
  );
}
