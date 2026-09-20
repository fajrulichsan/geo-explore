import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import {
  HiddenStepFields,
  SectionTitle,
  StepFooter,
  StepTitle,
  TextAreaField,
  cardClass,
  readAnswers,
} from "./Materi7Peta9Parts";

const STEP = 5;

const pertanyaan = [
  { key: "strategi_efisien", label: "Strategi mana yang menurutmu paling efisien? Jelaskan alasanmu." },
  { key: "bagian_berbeda", label: "Bagian mana yang berbeda dari kedua strategi tersebut? Jelaskan." },
  { key: "strategi_mudah", label: "Strategi mana yang paling mudah kamu jelaskan kepada teman? Mengapa?" },
];

export default async function Materi7Peta9Step5AnalisisStrategi({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getValue } = readAnswers(initialAnswers);
  const scene = await getPageImage("M7-P9-L5-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Saatnya Menunjukkan Berbagai Strategimu!" />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="E" title="Analisis Strategi" color="purple" />
        <EditablePageImage
          imageKey="M7-P9-L5-1"
          materi={materi}
          peta={peta}
          step="5"
          urutan="1"
          src={scene}
          alt="Tiga siswa: strateginya berbeda, tetapi semuanya bisa menghasilkan volume yang sama"
          editable={editFoto}
          natural
          containerClassName="relative w-full overflow-hidden rounded-[20px]"
        />
        <div className={`${cardClass} flex flex-col gap-5`}>
          {pertanyaan.map((q, i) => (
            <TextAreaField key={q.key} name={q.key} n={i + 1} color="purple" label={q.label} value={getValue(q.key)} rows={3} />
          ))}
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
