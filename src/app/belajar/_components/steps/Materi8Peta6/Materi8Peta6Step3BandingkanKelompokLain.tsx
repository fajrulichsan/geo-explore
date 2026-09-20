import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";

export default async function Materi8Peta6Step3BandingkanKelompokLain({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 5 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12.5l3 3 5-6" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Verifikasi
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bandingkan dengan Kelompok Lain
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">Diskusikan hasil verifikasimu dengan kelompok lain.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-5 flex flex-col gap-2">
            <h3 className="m-0 text-sm font-extrabold text-[#166534]">Persamaan</h3>
            <textarea
            name="answers.persamaan"
            defaultValue={getValue("persamaan")}
            rows={4} required
            aria-label="Persamaan hasil verifikasi"
            className="w-full rounded-xl border border-[#E5E7EB] bg-white p-3 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
          />
          </div>
          <div className="bg-[#EFF4FF] border border-[#DBEAFE] rounded-[20px] p-5 flex flex-col gap-2">
            <h3 className="m-0 text-sm font-extrabold text-[#1E3A8A]">Perbedaan</h3>
            <textarea
            name="answers.perbedaan"
            defaultValue={getValue("perbedaan")}
            rows={4} required
            aria-label="Perbedaan hasil verifikasi"
            className="w-full rounded-xl border border-[#E5E7EB] bg-white p-3 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
          />
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <h3 className="m-0 flex items-center gap-2 text-sm font-extrabold text-[#2563EB]">
            <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs">?</span>
            Pertanyaan
          </h3>
          <p className="m-0 text-sm font-semibold text-[#111827] leading-[1.5]">Mengapa hasil verifikasi antarkelompok dapat berbeda?</p>
          <textarea
            name="answers.mengapa_berbeda"
            defaultValue={getValue("mengapa_berbeda")}
            rows={3} required
            aria-label="Mengapa hasil verifikasi antarkelompok dapat berbeda"
            className="w-full rounded-xl border border-[#E5E7EB] bg-white p-3 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
          />
        </div>

        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 sm:p-6 flex items-center gap-4">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
            <path d="M9 18h6 M10 21h4 M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
          </svg>
          <div className="flex flex-col gap-1.5">
            <h3 className="m-0 text-base font-extrabold text-[#92400E]">Ingat!</h3>
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">Jika terdapat perbedaan hasil, telusuri kembali:</p>
            <ul className="m-0 pl-0 list-none flex flex-col gap-1 text-sm text-[#374151]">
              <li className="flex items-center gap-2"><span className="text-[#16A34A] font-bold">✓</span>data,</li>
              <li className="flex items-center gap-2"><span className="text-[#16A34A] font-bold">✓</span>proses perhitungan,</li>
              <li className="flex items-center gap-2"><span className="text-[#16A34A] font-bold">✓</span>dan alasan yang digunakan.</li>
            </ul>
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">Perbedaan merupakan kesempatan untuk memperbaiki pemahaman.</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
