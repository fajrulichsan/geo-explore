import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const badges = [
  { text: "Saya mampu memberi alasan matematis yang logis." },
  { text: "Saya percaya diri dengan strategi dan pemahaman saya." },
  { text: "Saya terbuka pada berbagai kemungkinan jawaban." },
  { text: "Saya menggunakan data dan informasi sebagai bukti." },
];

export default function Peta7Step4KotakMotivasi({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={4} />
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            4
          </div>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Bekalku untuk Tantangan Open-Ended</h1>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {badges.map((b, i) => (
          <div
            key={i}
            className="flex items-start gap-3 bg-white border border-[#E5E7EB] rounded-[16px] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4" className="mt-0.5 flex-shrink-0">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12.5l2.5 2.5L16 9.5" />
            </svg>
            <p className="m-0 text-sm font-semibold text-[#374151]">{b.text}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            ?
          </div>
          <label className="text-sm font-bold text-[#111827]">
            Hal apa yang paling membuat cara berpikirmu berubah selama pembelajaran ini?
          </label>
        </div>
        <textarea
          name="answers.perubahan_cara_berpikir"
          defaultValue={getValue("perubahan_cara_berpikir")}
          rows={3}
          placeholder="Tuliskan refleksimu di sini..."
          required
          className="w-full resize-none rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] placeholder-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
        />

        <div className="pt-2 border-t border-[#E5E7EB]">
          <PhotoUpload
            name="answers.foto_bukti"
            label="Unggah foto jurnal refleksimu (opsional)"
            defaultValue={getValue("foto_bukti")}
          />
        </div>
      </div>

      <div className="relative bg-gradient-to-br from-[#EFF4FF] to-[#DCE6FB] border border-[#DBE4FF] rounded-[20px] p-7 flex items-center justify-between gap-6 overflow-hidden">
        <div className="relative z-[1]">
          <div className="inline-flex items-center gap-2 bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-4 text-xs font-bold mb-3">
            Kotak Motivasi
          </div>
          <h2 className="m-0 mb-2 text-2xl font-extrabold text-[#111827]">Hebat!</h2>
          <p className="m-0 text-sm leading-[1.6] text-[#4B5563] max-w-lg">
            Setiap alasan yang kamu berikan menunjukkan bahwa kemampuan berpikir matematikmu terus
            berkembang. Teruslah percaya pada dirimu dan jangan ragu memberikan alasan matematis yang
            logis.
          </p>
        </div>
        <div className="w-[120px] h-[120px] flex-shrink-0 rounded-[14px] bg-white/60 flex items-center justify-center text-xs text-[#9CA3AF] relative z-[1]">
          Ilustrasi
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/3`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          Selesai
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
