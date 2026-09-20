import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import {
  HiddenStepFields,
  SectionTitle,
  StepFooter,
  StepTitle,
  TextAreaField,
  cardClass,
  readAnswers,
} from "./Materi7Peta9Parts";

const STEP = 3;

const pertanyaan = [
  { key: "alas_tinggi_lain", label: "Apakah masih ada pasangan ukuran alas dan tinggi lain yang menghasilkan volume 120 cm³? Jelaskan." },
  { key: "bentuk_lain", label: "Apakah bentuk limas lain juga dapat mempunyai volume 120 cm³? Berikan contoh dan jelaskan." },
  { key: "beda_volume_sama", label: "Mengapa jawabanmu berbeda tetapi volumenya tetap sama? Jelaskan alasanmu dengan menggunakan hubungan antara luas alas, tinggi, dan volume." },
];

export default async function Materi7Peta9Step3BandingkanStrategi({
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
        <SectionTitle letter="C" title="Bandingkan Strategimu" color="green" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pertanyaan.map((q, i) => (
            <div key={q.key} className={cardClass}>
              <TextAreaField name={q.key} n={i + 1} color="green" label={q.label} value={getValue(q.key)} rows={5} />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-xl px-4 py-3 text-sm text-[#92400E] leading-[1.6]">
          <span className="font-extrabold text-lg">Hebat! </span>
          Kamu telah berani berpikir kreatif, mencari berbagai kemungkinan, dan menjelaskan alasannya. Terus gunakan strategi terbaikmu!
        </div>
        <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-xl px-4 py-3 text-sm text-[#92400E] leading-[1.6]">
          <span className="font-extrabold text-lg">Selanjutnya </span>
          Lanjut ke halaman berikutnya untuk membandingkan berbagai solusi, menganalisis strategi bersama teman, dan menarik kesimpulan.
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
