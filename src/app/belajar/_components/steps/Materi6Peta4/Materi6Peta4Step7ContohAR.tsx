import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { ContohHasil, HiddenFields, Nav, PerhatikanKeterangan, SectionTitle, TahapHeader } from "./Materi6Peta4Parts";

export default async function Materi6Peta4Step7ContohAR({ materi, peta, step = "7", editFoto }: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={7} />
      <TahapHeader materi={materi} step={7} subtitle="Ayo Bereksplorasi 2 — Eksplorasi Menggunakan Augmented Reality (AR)" />

      <div className="flex flex-col gap-4">
        <SectionTitle
          huruf="G"
          judul="Contoh Hasil Pengamatan Menggunakan AR"
          hint="Amati banyaknya kubus satuan pada setiap lapisan untuk kubus dan balok, serta penampang segitiga yang sama pada prisma segitiga."
        />
        <ContohHasil mode="ar" img={img} ctx={ctx} />
        <PerhatikanKeterangan />
      </div>

      <Nav materi={materi} peta={peta} step={7} />
    </form>
  );
}
