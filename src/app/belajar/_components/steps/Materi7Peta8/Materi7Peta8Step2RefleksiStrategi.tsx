import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import {
  CheckItem,
  HiddenStepFields,
  NumberedQuestion,
  SectionTitle,
  StepFooter,
  StepTitle,
  TextAreaField,
  TipBox,
  cardClass,
  readAnswers,
} from "./Materi7Peta8Parts";

const STEP = 2;

const bagian = [
  { key: "bagian_pengamatan", label: "Pengamatan" },
  { key: "bagian_diskusi", label: "Diskusi" },
  { key: "bagian_geogebra", label: "GeoGebra 3D" },
  { key: "bagian_ar", label: "Augmented Reality" },
  { key: "bagian_verifikasi", label: "Verifikasi" },
  { key: "bagian_menyimpulkan", label: "Menyimpulkan" },
  { key: "bagian_contoh_soal", label: "Menyelesaikan contoh soal" },
];

export default async function Materi7Peta8Step2RefleksiStrategi({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const { getValue, getChecked } = readAnswers(initialAnswers);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="B" title="Refleksi Strategi" color="amber" />
        <TipBox>Jawablah dengan bahasamu sendiri.</TipBox>

        <div className={`${cardClass} flex flex-col gap-6`}>
          <TextAreaField
            name="strategi_belajar"
            label={
              <span className="flex items-start gap-2.5">
                <span className="w-6 h-6 rounded-full bg-[#D97706] text-white flex items-center justify-center text-xs flex-shrink-0">1</span>
                <span>Strategi belajar apa yang paling membantumu menemukan sendiri rumus volume limas? Jelaskan alasannya.</span>
              </span>
            }
            value={getValue("strategi_belajar")}
            rows={4}
          />

          <div className="flex flex-col gap-3">
            <NumberedQuestion n={2} color="amber">
              Bagian mana yang menurutmu paling membantu memahami konsep volume limas? (Boleh memilih lebih dari satu jawaban.)
            </NumberedQuestion>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {bagian.map((b) => (
                <CheckItem key={b.key} name={b.key} label={b.label} checked={getChecked(b.key)} />
              ))}
            </div>
          </div>

          <TextAreaField name="alasan_bagian" label="Mengapa?" value={getValue("alasan_bagian")} rows={3} />
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
