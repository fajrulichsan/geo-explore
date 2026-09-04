import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

export default function Materi2Peta7Step5Rangkuman({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={5} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Ayo Menyimpulkan (Generalisasi)
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            H
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Rangkuman Singkat
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
              <path d="M9 3h6l1 3H8zM5 6h14l-1 15H6z" />
              <path d="M9 11h6M9 15h6" />
            </svg>
            <p className="m-0 text-sm font-bold text-[#111827]">
              Tuliskan rangkuman singkat tentang apa yang telah kamu pelajari pada submateri ini.
            </p>
          </div>
          <textarea
            name="answers.rangkuman"
            defaultValue={getValue("rangkuman")}
            rows={5}
            required
            placeholder="Tuliskan rangkumanmu..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
          />
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[20px] bg-[#1E3A8A] p-6 flex items-center gap-4">
        <div className="absolute -right-6 -bottom-10 w-32 h-32 rounded-full bg-white/10" />
        <div className="relative w-11 h-11 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 text-xl">
          🚀
        </div>
        <div className="relative">
          <p className="m-0 text-sm font-bold text-white mb-1">Menuju Tahap Berikutnya</p>
          <p className="m-0 text-xs text-white/80 leading-[1.5]">
            Selanjutnya, lakukan Refleksi Diri untuk melihat perkembangan pemahaman dan
            keyakinanmu selama mempelajari materi jaring-jaring bangun ruang.
          </p>
        </div>
      </div>

      <div className="bg-[#FDF3C7] rounded-[20px] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-xl">
            <span>⭐</span>
            <span>✨</span>
          </div>
          <h2 className="m-0 mb-1.5 text-2xl font-extrabold text-[#92400E]">Hebat!</h2>
          <p className="m-0 text-sm text-[#785900] font-medium">
            Kamu telah menyelesaikan seluruh Tahap Discovery Learning submateri ini dengan sangat
            baik!
          </p>
        </div>
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-4 px-7 text-sm font-bold shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer flex-shrink-0">
          SELESAI
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>

      <div className="flex justify-start items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
      </div>
    </form>
  );
}
