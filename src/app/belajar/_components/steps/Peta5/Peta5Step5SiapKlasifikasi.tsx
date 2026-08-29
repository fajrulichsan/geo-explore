import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const catatan = [
  "Perhatikan ciri-ciri sudut dan sisi.",
  "Apakah ada bangun yang memiliki sifat yang sama namun ukuran berbeda?",
  "Kelompokkan berdasarkan kesamaan sifat dominan yang telah diamati.",
];

export default function Peta5Step5SiapKlasifikasi({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={8} />
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            E
          </div>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Siap Membuat Klasifikasi?</h1>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Dari pola yang telah kamu temukan, manakah yang menurutmu dapat digunakan sebagai dasar
          pengelompokan? Berikan alasanmu.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            <label htmlFor="justification" className="text-sm font-bold text-[#2563EB]">
              Jawaban dan Alasanmu:
            </label>
            <textarea
              id="justification"
              rows={8}
              name="answers.alasan_klasifikasi"
              defaultValue={getValue("alasan_klasifikasi")}
              required
              placeholder="Tuliskan alasanmu di sini..."
              className="w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
            <div className="mt-2 pt-4 border-t border-[#E5E7EB]">
              <PhotoUpload
                name="answers.foto_bukti"
                label="Unggah foto hasil kerja (opsional)"
                defaultValue={getValue("foto_bukti")}
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
              </svg>
              <h3 className="m-0 text-sm font-bold text-[#92400E]">Ingat!</h3>
            </div>
            <ul className="m-0 p-0 flex flex-col gap-2.5 list-none">
              {catatan.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D97706] mt-2 flex-shrink-0" />
                  <span className="text-sm leading-[1.6] text-[#92400E]">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col items-center text-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-[#F9FAFB] flex items-center justify-center text-xs text-[#9CA3AF]">
              Ilustrasi
            </div>
            <p className="m-0 text-sm text-[#6B7280]">
              Klasifikasi yang baik membantu kita memahami hubungan antar bangun geometri.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/4`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
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
