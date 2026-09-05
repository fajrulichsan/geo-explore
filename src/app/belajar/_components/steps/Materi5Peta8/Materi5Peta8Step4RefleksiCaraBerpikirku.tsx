import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const fields = [
  {
    key: "cara_tahu_hubungan_sesuai",
    label:
      "Bagaimana kamu mengetahui bahwa hubungan yang kamu temukan sudah sesuai? Jelaskan berdasarkan hasil verifikasi dan alasan matematis yang mendukung jawabanmu.",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#92400E" strokeWidth="2.2">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    key: "alasan_matematis_lebih_penting",
    label: "Mengapa memberikan alasan matematis lebih penting daripada hanya menuliskan hasil akhir?",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#92400E" strokeWidth="2.6">
        <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
      </svg>
    ),
  },
  {
    key: "cara_putuskan_strategi_lebih_efektif",
    label: "Bagaimana kamu memutuskan bahwa suatu strategi lebih efektif daripada strategi lainnya?",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#92400E" strokeWidth="2.2">
        <path d="M12 3v3M12 3l-5 2.5M12 3l5 2.5M7 5.5l-3 6a3 3 0 006 0l-3-6zM17 5.5l-3 6a3 3 0 006 0l-3-6zM12 18v3m-4 0h8" />
      </svg>
    ),
  },
];

export default function Materi5Peta8Step4RefleksiCaraBerpikirku({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={5} />
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
              <path d="M12 2l2.6 6.5L21 9l-5 4.4L17.4 21 12 17.3 6.6 21 8 13.4 3 9l6.4-.5z" />
            </svg>
          </div>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Refleksi Diri</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#F59E0B] text-white flex items-center justify-center flex-shrink-0">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2">
              <path d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2M20 8V6a2 2 0 00-2-2h-2M20 16v2a2 2 0 01-2 2h-2" />
              <rect x="9" y="9" width="6" height="6" rx="1" />
            </svg>
          </div>
          <h2 className="m-0 text-lg font-extrabold text-[#111827]">D. Refleksi Cara Berpikirku</h2>
        </div>
        <p className="m-0 text-sm text-[#6B7280]">Jawablah pertanyaan berikut.</p>
      </div>

      <div className="flex flex-col gap-4">
        {fields.map((f) => (
          <div
            key={f.key}
            className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#FDF3C7] text-[#92400E] flex items-center justify-center flex-shrink-0">
                {f.icon}
              </div>
              <label className="text-sm font-bold text-[#111827]">{f.label}</label>
            </div>
            <textarea
              name={`answers.${f.key}`}
              defaultValue={getValue(f.key)}
              rows={3}
              placeholder="Tuliskan jawabanmu di sini..."
              required
              className="w-full resize-none rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] placeholder-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
            />
          </div>
        ))}

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <PhotoUpload
            name="answers.foto_bukti"
            label="Unggah foto jurnal refleksimu (opsional)"
            defaultValue={getValue("foto_bukti")}
          />
        </div>
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
