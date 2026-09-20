import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import {
  ChoiceTable,
  HiddenStepFields,
  SectionTitle,
  StepFooter,
  StepTitle,
  readAnswers,
} from "./Materi7Peta8Parts";

const STEP = 3;

const pernyataan = [
  "Saya yakin dapat menghitung volume limas dengan tepat.",
  "Saya yakin dapat menentukan luas alas dan tinggi limas yang diperlukan sebelum menghitung volumenya.",
  "Saya yakin dapat menjelaskan mengapa terdapat faktor 1/3 pada rumus volume limas.",
  "Saya yakin dapat menggunakan rumus volume limas dalam masalah kehidupan sehari-hari.",
];

const pilihan = [
  { v: "ya", l: "Ya" },
  { v: "perlu_latihan", l: "Masih Perlu Latihan" },
  { v: "belum_yakin", l: "Belum Yakin" },
];

export default async function Materi7Peta8Step3RefleksiKeyakinan({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const { getValue } = readAnswers(initialAnswers);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="C" title="Refleksi Keyakinan Diri" color="green" />
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Berilah tanda centang (✓) pada jawaban yang paling sesuai.</p>
        <ChoiceTable prefix="keyakinan" rows={pernyataan} options={pilihan} getValue={getValue} />
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
