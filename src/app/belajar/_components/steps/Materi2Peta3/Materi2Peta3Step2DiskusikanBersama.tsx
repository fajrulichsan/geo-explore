import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const pertanyaan = [
  "Mengapa ada susunan bidang datar yang dapat dilipat menjadi bangun ruang, tetapi tidak oleh yang lain?",
  "Bagian mana yang paling menentukan apakah suatu susunan dapat menjadi jaring-jaring?",
  "Apakah jumlah sisi saja sudah cukup untuk menentukan jaring-jaring?",
  "Apakah posisi setiap bidang datar memengaruhi hasil lipatan?",
];

export default async function Materi2Peta3Step2DiskusikanBersama({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Diskusikan Bersama
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">Jawablah pertanyaan berikut bersama kelompokmu.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pertanyaan.map((q, i) => (
            <div key={i} className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#F97316] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {i + 1}
                </div>
                <label htmlFor={`diskusi_${i + 1}`} className="text-sm font-semibold leading-[1.5] text-[#1F2937]">
                  {q}
                </label>
              </div>
              <textarea
                id={`diskusi_${i + 1}`}
                name={`answers.diskusi_${i + 1}`}
                defaultValue={getValue(`diskusi_${i + 1}`)}
                placeholder="Tuliskan jawaban kelompokmu..."
                required
                rows={3}
                className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/1`} />
        <NextStepButton />
      </div>
    </form>
  );
}
