import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const questions = [
  { n: 1, label: "Apa persamaan dan perbedaan kriteria pengelompokan bangun ruang yang digunakan oleh Kelompok A, B, dan C? Jelaskan berdasarkan ciri atau sifat bangun ruang yang diamati!" },
  { n: 2, label: "Apakah setiap kelompok telah mengelompokkan bangun ruang secara konsisten berdasarkan kriteria yang digunakan? Berikan contoh dan jelaskan alasanmu!" },
  { n: 3, label: "Menurutmu, mungkinkah beberapa cara pengelompokan bangun ruang sama-sama tepat meskipun menggunakan kriteria yang berbeda? Jelaskan alasanmu!" },
  { n: 4, label: "Hal apa yang perlu kamu selidiki lebih lanjut untuk memastikan kesesuaian pengelompokan bangun ruang dengan kriteria yang digunakan?" },
];

export default async function Peta3Step3PertanyaanDiskusi({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={8} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="flex-shrink-0">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
            <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Pertanyaan Diskusi
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {questions.map((q) => (
            <div
              key={q.n}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] focus-within:border-[#2563EB] transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-[34px] h-[34px] rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
                  {q.n}
                </div>
                <label htmlFor={`q${q.n}`} className="flex-1 text-base font-bold text-[#111827] pt-1 cursor-pointer">
                  {q.label}
                </label>
              </div>
              <div className="sm:pl-[50px]">
                <textarea
                  id={`q${q.n}`}
                  name={`answers.diskusi_${q.n}`}
                  defaultValue={getValue(`diskusi_${q.n}`)}
                  rows={3}
                  placeholder="Ketik jawabanmu di sini..."
                  required
                  className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/2`} />
        <NextStepButton />
      </div>
    </form>
  );
}
