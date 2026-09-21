import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

export default function Materi2Peta7Step5Rangkuman({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const rangkuman = typeof answers.rangkuman === "string" ? answers.rangkuman : "";

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={5} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan (Generalisasi)</h1>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] p-6 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">H</div>
          <h2 className="m-0 text-lg font-bold text-[#1E3A8A]">Rangkuman Singkat</h2>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" className="ml-auto flex-shrink-0" aria-hidden="true">
            <rect x="5" y="4" width="14" height="17" rx="2" fill="#EFF4FF" />
            <path d="M9 4V3h6v1M8.5 10l1.2 1.2 2-2M8.5 15l1.2 1.2 2-2M14 10.5h2.5M14 15.5h2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <label className="flex flex-col gap-2">
          <span className="text-sm text-[#4B5563]">
            Tuliskan rangkuman singkat tentang apa yang telah kamu pelajari pada submateri ini.
          </span>
          <textarea
            name="answers.rangkuman"
            defaultValue={rangkuman}
            required
            rows={5}
            className="w-full rounded-xl border border-[#E5E7EB] px-3.5 py-2.5 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none resize-y"
          />
        </label>
      </div>

      <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-6 flex items-center gap-5">
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#4338CA] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">I</div>
            <h2 className="m-0 text-lg font-bold text-[#3730A3]">Menuju Tahap Berikutnya</h2>
          </div>
          <p className="m-0 text-sm leading-[1.7] text-[#1E40AF]">
            Selanjutnya, lakukan Refleksi Diri untuk melihat perkembangan pemahaman dan keyakinanmu selama mempelajari
            materi jaring-jaring bangun ruang.
          </p>
        </div>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="flex-shrink-0" aria-hidden="true">
          <path d="M32 6c10 6 14 18 12 32H20C18 24 22 12 32 6z" fill="#E0E7FF" stroke="#4338CA" strokeWidth="2.5" strokeLinejoin="round" />
          <circle cx="32" cy="24" r="5" fill="#93C5FD" stroke="#4338CA" strokeWidth="2" />
          <path d="M20 38l-8 10 10-2M44 38l8 10-10-2M28 42l4 12 4-12" stroke="#EC4899" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
