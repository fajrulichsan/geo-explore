import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { HiddenStepFields, SectionTitle, StepFooter, StepTitle, SUBTITLE, TextAreaField, readAnswers } from "./Materi8Peta9Parts";

const STEP = 3;

const strategi = [
  { key: "strategi1", n: 1, judul: "Strategi 1", color: "blue", box: "bg-[#EFF6FF] border-[#BFDBFE]", required: true },
  { key: "strategi2", n: 2, judul: "Strategi 2", color: "green", box: "bg-[#F0FDF4] border-[#BBF7D0]", required: true },
  { key: "strategi3", n: 3, judul: "Strategi Lain (Jika Ada)", color: "purple", box: "bg-[#F5F3FF] border-[#DDD6FE]", required: false },
] as const;

const bidang = [
  { suffix: "cara", label: "Cara yang saya gunakan:" },
  { suffix: "hitung", label: "Perhitungan:" },
  { suffix: "alasan", label: "Alasan mengapa strategi ini benar:" },
];

export default async function Materi8Peta9Step3TampilkanStrategi({ materi, peta, initialAnswers }: StepComponentProps) {
  const { getValue } = readAnswers(initialAnswers);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle={SUBTITLE} />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="B" title="Tampilkan Strategimu" />
        <p className="m-0 text-sm text-[#4B5563] leading-[1.7]">
          Tuliskan minimal <u>dua</u> strategi berbeda untuk faktor skala yang kamu pilih pada Panel A.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {strategi.map((s) => (
            <div key={s.key} className={`${s.box} border rounded-[20px] p-5 flex flex-col gap-4`}>
              <h3 className="m-0 text-base font-extrabold text-[#1E3A8A]">{s.judul}</h3>
              {bidang.map((b) => (
                <TextAreaField
                  key={b.suffix}
                  name={`${s.key}_${b.suffix}`}
                  label={b.label}
                  value={getValue(`${s.key}_${b.suffix}`)}
                  color={s.color}
                  rows={3}
                  required={s.required}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
