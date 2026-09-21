import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

export default async function Materi4Peta6Step4HasilVerifikasi({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={5} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold w-fit">
          Submateri 4 &middot; Tahap 5
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          D
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-[#16A34A]">Hasil Verifikasi</span>
          <span className="text-xs text-[#6B7280]">Catat hasil verifikasi kelompokmu.</span>
        </div>
      </div>

      <div className="grid sm:grid-cols-5 gap-5 items-center bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-5 sm:p-6">
        <div className="sm:col-span-3 flex flex-col gap-2 focus-within:[&_textarea]:border-[#16A34A]">
          <label htmlFor="hasil_verifikasi" className="text-sm font-bold text-[#166534] leading-[1.5]">
            Berdasarkan hasil verifikasi, hasil yang kami peroleh adalah ...
          </label>
          <textarea
            id="hasil_verifikasi"
            name="answers.hasil_verifikasi"
            defaultValue={getValue("hasil_verifikasi")}
            rows={6}
            placeholder="Tulis hasil verifikasi kelompokmu di sini..."
            required
            className="w-full rounded-2xl border border-[#BBF7D0] bg-white p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:outline-none transition-colors resize-y"
          />
        </div>
        <div className="sm:col-span-2 flex flex-col items-center gap-3">
          <svg viewBox="0 0 160 150" className="w-36 h-auto" role="img" aria-label="Ilustrasi limas segiempat">
            <polygon points="20,115 80,140 140,115 80,100" fill="#DCFCE7" stroke="#86EFAC" />
            <polygon points="80,10 32,112 80,132" fill="#4D7C0F" />
            <polygon points="80,10 80,132 128,112" fill="#65A30D" />
            <polygon points="80,10 32,112 20,115 80,100" fill="none" stroke="#3F6212" strokeWidth="1" />
          </svg>
          <p className="m-0 text-xs text-[#374151] bg-white border border-[#BBF7D0] rounded-2xl px-3 py-2 leading-[1.5]">
            Ingat hubungan antara luas alas, luas seluruh sisi tegak, dan luas permukaan limas.
          </p>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 flex flex-col gap-3 focus-within:border-[#16A34A] transition-colors">
        <label htmlFor="mengapa_dijumlahkan" className="flex items-start gap-3 text-sm font-bold text-[#111827] leading-[1.5]">
          <span className="w-6 h-6 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-xs flex-shrink-0">
            ?
          </span>
          Mengapa pada limas luas alas dihitung satu kali, sedangkan luas seluruh sisi tegaknya perlu dijumlahkan?
        </label>
        <textarea
          id="mengapa_dijumlahkan"
          name="answers.mengapa_dijumlahkan"
          defaultValue={getValue("mengapa_dijumlahkan")}
          rows={3}
          placeholder="Tulis jawabanmu di sini..."
          required
          className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors resize-y"
        />
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
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
