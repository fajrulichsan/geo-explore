import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const textArea =
  "w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none";

export default async function Materi5Peta6Step2Bandingkan({
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
        <StepHeader materi={materi} currentStep={2} totalSteps={4} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 5
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Periksa Kembali Hubungan Skala dan Luas</p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bandingkan dengan Kelompok Lain
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">Diskusikan hasil verifikasimu dengan kelompok lain.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-5 flex flex-col gap-2">
          <label htmlFor="persamaan" className="text-sm font-bold text-[#15803D]">Persamaan</label>
          <textarea
            id="persamaan"
            name="answers.persamaan"
            defaultValue={getValue("persamaan")}
            rows={4}
            required
            placeholder="Apa persamaan hasil verifikasimu dengan kelompok lain?"
            className={textArea}
          />
        </div>
        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-5 flex flex-col gap-2">
          <label htmlFor="perbedaan" className="text-sm font-bold text-[#1D4ED8]">Perbedaan</label>
          <textarea
            id="perbedaan"
            name="answers.perbedaan"
            defaultValue={getValue("perbedaan")}
            rows={4}
            required
            placeholder="Apa perbedaan hasil verifikasimu dengan kelompok lain?"
            className={textArea}
          />
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold">?</div>
          <p className="m-0 text-sm font-bold text-[#1D4ED8]">Pertanyaan</p>
        </div>
        <label htmlFor="mengapa_berbeda" className="text-sm font-semibold text-[#374151]">
          Mengapa hasil verifikasi antarkelompok dapat berbeda?
        </label>
        <textarea
          id="mengapa_berbeda"
          name="answers.mengapa_berbeda"
          defaultValue={getValue("mengapa_berbeda")}
          rows={3}
          required
          placeholder="Jawabanmu..."
          className={textArea}
        />
      </div>

      <div className="bg-gradient-to-br from-[#FDF3C7] to-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-5 flex items-start gap-3">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
          <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z" />
        </svg>
        <p className="m-0 text-xs text-[#92400E] leading-[1.6]">
          <span className="font-bold">Ingat!</span> Jika terdapat perbedaan hasil, telusuri kembali data,
          proses perhitungan, dan alasan yang digunakan. Perbedaan merupakan kesempatan untuk memperbaiki
          pemahaman.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
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
