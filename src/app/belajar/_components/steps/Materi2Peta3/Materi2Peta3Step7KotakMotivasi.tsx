import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

export default async function Materi2Peta3Step7KotakMotivasi({ materi, peta }: StepComponentProps) {
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="7" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={7} totalSteps={7} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            M
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Kotak Motivasi
          </div>
        </div>
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-6 flex items-start gap-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0">
            <path d="M12 2l2.9 6.2 6.8.7-5 4.7 1.4 6.7L12 17l-6.1 3.3 1.4-6.7-5-4.7 6.8-.7z" />
          </svg>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Perbedaan pendapat bukan berarti salah. Melalui diskusi, kita dapat menemukan berbagai
            kemungkinan jawaban yang akan dibuktikan pada tahap eksplorasi.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] px-7 py-8 sm:px-10 sm:py-9">
        <div className="absolute -right-10 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <div className="relative flex items-center gap-3 mb-3">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" className="flex-shrink-0">
            <path d="M12 2c3 3 5 6.5 5 10.5A5 5 0 0112 18a5 5 0 01-5-5.5C7 8.5 9 5 12 2z" />
            <path d="M9 18l-2 3M15 18l2 3" />
          </svg>
          <div className="bg-white/15 border border-white/25 rounded-full py-2 px-5 text-sm font-bold text-white">
            Menuju Tahap 3
          </div>
        </div>
        <p className="relative m-0 max-w-xl text-[15px] leading-[1.6] text-white/90">
          Pada tahap berikutnya, gunakan GeoGebra 3D dan Augmented Reality (AR) untuk menguji dugaan
          kelompokmu!
        </p>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/6`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
