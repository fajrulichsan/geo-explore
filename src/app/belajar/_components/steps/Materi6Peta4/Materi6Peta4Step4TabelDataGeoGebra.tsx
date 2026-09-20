import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { HiddenFields, Nav, SectionTitle, TabelData, TahapHeader, answerText } from "./Materi6Peta4Parts";

export default async function Materi6Peta4Step4TabelDataGeoGebra({ materi, peta, step = "4", editFoto, initialAnswers }: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };
  const getValue = (key: string) => answerText(initialAnswers, key);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={4} />
      <TahapHeader materi={materi} step={4} subtitle="Ayo Bereksplorasi 1 — Eksplorasi Menggunakan GeoGebra 3D" />

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="D" judul="Tabel Data – Hasil Eksplorasi GeoGebra 3D" hint="Isilah tabel berikut sesuai hasil pengamatanmu di GeoGebra 3D." />
        <TabelData prefix="gg" img={img} ctx={ctx} dataPrisma="Panjang prisma dan volume" getValue={getValue} />
      </div>

      <Nav materi={materi} peta={peta} step={4} />
    </form>
  );
}
