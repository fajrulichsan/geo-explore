import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

export default async function Materi4Peta7Step7BandingkanKelompokLain({
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
      <input type="hidden" name="step" value="7" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={7} totalSteps={9} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Luas Permukaan Limas</p>
      </div>

<div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            H
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#7C3AED]">
            Bandingkan dengan Kelompok Lain
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">Bandingkan kesimpulan kelompokmu dengan kelompok lain.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-2xl p-5 flex flex-col gap-2">
            <p className="m-0 text-sm font-bold text-[#047857]">Sama</p>
            <p className="m-0 text-xs text-[#6B7280]">(Apa yang sama?)</p>
            <textarea
            name="answers.banding_sama"
            defaultValue={getValue("banding_sama")}
            rows={5}
            required
            placeholder="Tuliskan..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
          />
          </div>
          <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-5 flex flex-col gap-2">
            <p className="m-0 text-sm font-bold text-[#B45309]">Hampir Sama</p>
            <p className="m-0 text-xs text-[#6B7280]">(Apa yang mirip?)</p>
            <textarea
            name="answers.banding_hampir_sama"
            defaultValue={getValue("banding_hampir_sama")}
            rows={5}
            required
            placeholder="Tuliskan..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
          />
          </div>
          <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-2xl p-5 flex flex-col gap-2">
            <p className="m-0 text-sm font-bold text-[#B91C1C]">Berbeda</p>
            <p className="m-0 text-xs text-[#6B7280]">(Apa yang berbeda?)</p>
            <textarea
            name="answers.banding_berbeda"
            defaultValue={getValue("banding_berbeda")}
            rows={5}
            required
            placeholder="Tuliskan..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
          />
          </div>
        </div>
        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-5 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2"><circle cx="12" cy="12" r="9" /><path d="M12 16v.01M12 8a2.5 2.5 0 012.5 2.5c0 1.5-2.5 1.8-2.5 3.5" /></svg>
            <p className="m-0 text-sm font-bold text-[#2563EB]">Jika berbeda, bagian mana yang berbeda dan apa penyebabnya?</p>
          </div>
          <textarea
            name="answers.banding_penyebab"
            defaultValue={getValue("banding_penyebab")}
            rows={3}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/6`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
