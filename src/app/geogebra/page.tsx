import type { Metadata } from "next";
import GeogebraCube from "./GeogebraCube";

export const metadata: Metadata = {
  title: "GeoGebra 3D - Kubus | E-Modul Geometri",
  description: "Eksplorasi interaktif bangun ruang kubus menggunakan GeoGebra 3D Calculator.",
};

export default function GeogebraPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center gap-6 p-6 md:p-10">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="m-0 text-2xl md:text-3xl font-extrabold text-[#111827]">
          Eksplorasi Kubus - GeoGebra 3D
        </h1>
        <p className="m-0 text-sm text-[#6B7280] max-w-xl">
          Putar, perbesar, dan amati kubus secara interaktif langsung di bawah ini.
        </p>
      </div>

      <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] bg-white">
        <GeogebraCube />
      </div>
    </div>
  );
}
