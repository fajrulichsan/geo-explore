import Link from "next/link";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

export default function Peta4Step9BersiapTahapBerikutnya({ materi, peta }: StepComponentProps) {
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="9" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={9} totalSteps={10} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4l3 2" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            I
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bersiap ke Tahap Berikutnya
          </div>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-8">
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Kamu telah mengumpulkan berbagai informasi menggunakan GeoGebra 3D dan Augmented Reality (AR).
          Pada tahap berikutnya, informasi tersebut akan dibandingkan, diolah, dan dicari polanya untuk
          menyelidiki dugaan kelompokmu.
        </p>

        <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex flex-col items-center text-center gap-2 w-28">
            <div className="w-16 h-16 rounded-xl bg-white border border-[#E5E7EB] shadow-sm flex items-center justify-center">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
            </div>
            <span className="text-xs font-bold text-[#2563EB]">GeoGebra 3D</span>
          </div>

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M12 5v14M5 12h14" />
          </svg>

          <div className="flex flex-col items-center text-center gap-2 w-28">
            <div className="w-16 h-16 rounded-xl bg-white border border-[#E5E7EB] shadow-sm flex items-center justify-center">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                <path d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4 9-4V7" />
              </svg>
            </div>
            <span className="text-xs font-bold text-[#2563EB]">Augmented Reality (AR)</span>
          </div>

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>

          <div className="flex flex-col items-center text-center gap-2 w-28">
            <div className="w-16 h-16 rounded-full bg-[#EFF4FF] border-2 border-[#DBEAFE] flex items-center justify-center relative">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
              <div className="absolute -bottom-1 -right-1 bg-[#FDC003] rounded-full w-6 h-6 flex items-center justify-center shadow-sm">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="3">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <span className="text-xs font-bold text-[#2563EB]">Informasi Siap Diolah</span>
          </div>
        </div>

        <div className="flex justify-center">
          <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
            Lanjut ke Tahap 4 – Ayo Mengolah Informasi
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </SubmitStepButton>
        </div>
      </div>

      <div className="flex justify-start items-center">
        <Link
          href={`/belajar/${materi}/${peta}/8`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
      </div>
    </form>
  );
}
