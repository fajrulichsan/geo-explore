import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { ContohHasil, HiddenFields, Nav, PerhatikanKeterangan, SectionTitle, TahapHeader } from "./Materi6Peta4Parts";

export default async function Materi6Peta4Step3ContohGeoGebra({ materi, peta, step = "3", editFoto }: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={3} />
      <TahapHeader materi={materi} step={3} subtitle="Ayo Bereksplorasi 1 — Eksplorasi Menggunakan GeoGebra 3D" />

      <div className="flex flex-col gap-4">
        <SectionTitle
          huruf="C"
          judul="Contoh Hasil Pengamatan GeoGebra 3D"
          hint="Amati banyaknya kubus satuan pada setiap lapisan untuk kubus dan balok, serta penampang segitiga yang sama yang digeser sepanjang panjang prisma."
        />
        <ContohHasil mode="geogebra" img={img} ctx={ctx} />
        <PerhatikanKeterangan />
      </div>

      <Nav materi={materi} peta={peta} step={3} />
    </form>
  );
}
