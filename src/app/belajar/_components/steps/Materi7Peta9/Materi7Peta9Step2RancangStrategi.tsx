import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import {
  HiddenStepFields,
  SectionTitle,
  StepFooter,
  StepTitle,
  TextAreaField,
  NumberedQuestion,
  cardClass,
  readAnswers,
} from "./Materi7Peta9Parts";

const STEP = 2;

const pertimbangan = [
  "Bangun limas yang akan dipilih",
  "Ukuran alas yang digunakan (misalnya: panjang sisi, alas segitiga, jari-jari, dll.)",
  "Cara menghitung luas alas",
  "Tinggi limas yang akan digunakan",
  "Langkah perhitungan volume",
  "Alasan memilih ukuran tersebut",
];

export default async function Materi7Peta9Step2RancangStrategi({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const { getValue } = readAnswers(initialAnswers);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Saatnya Menunjukkan Berbagai Strategimu!" />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="B" title="Rancang Strategi Penyelesaianmu" color="amber" />
        <p className="m-0 text-sm font-bold text-[#111827]">Tuliskan rencana strategimu. Pertimbangkan hal-hal berikut.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={`${cardClass} flex flex-col gap-3`}>
            {pertimbangan.map((t, i) => (
              <NumberedQuestion key={t} n={i + 1} color="amber">
                <span className="font-semibold">{t}</span>
              </NumberedQuestion>
            ))}
          </div>
          <div className={cardClass}>
            <TextAreaField name="rencana_strategi" label="Tuliskan rencana strategimu di sini." value={getValue("rencana_strategi")} rows={10} />
          </div>
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
