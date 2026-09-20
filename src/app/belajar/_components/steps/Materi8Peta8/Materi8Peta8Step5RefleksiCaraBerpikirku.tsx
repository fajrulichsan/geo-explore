import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";

export default async function Materi8Peta8Step5RefleksiCaraBerpikirku({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Setelah Tahap 6 – Ayo Menyimpulkan
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" strokeLinejoin="round">
            <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Refleksi Diri
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Refleksi Cara Berpikirku
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col gap-5">
            <p className="m-0 text-sm text-[#4B5563]">Jawablah pertanyaan berikut.</p>
            <label className="flex flex-col gap-2 text-sm font-semibold text-[#111827]">
              <span className="flex items-start gap-2.5"><span className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>Bagaimana kamu mengetahui bahwa hubungan antara faktor skala dan volume yang kamu temukan sudah benar?</span>
              <textarea
                name="answers.berpikir_mengetahui_benar"
                required
                rows={3}
                defaultValue={answers.berpikir_mengetahui_benar ?? ""}
                className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#111827] outline-none focus:border-[#2563EB]"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-[#111827]">
              <span className="flex items-start gap-2.5"><span className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>Mengapa memberikan alasan matematis lebih penting daripada hanya menuliskan hasil akhir?</span>
              <textarea
                name="answers.berpikir_alasan_matematis"
                required
                rows={3}
                defaultValue={answers.berpikir_alasan_matematis ?? ""}
                className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#111827] outline-none focus:border-[#2563EB]"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-[#111827]">
              <span className="flex items-start gap-2.5"><span className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>Bagaimana kamu menentukan bahwa suatu strategi lebih sesuai atau lebih efisien daripada strategi lainnya?</span>
              <textarea
                name="answers.berpikir_strategi_efisien"
                required
                rows={3}
                defaultValue={answers.berpikir_strategi_efisien ?? ""}
                className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#111827] outline-none focus:border-[#2563EB]"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit cursor-pointer bg-[#2563EB] shadow-[0_4px_10px_rgba(37,99,235,0.3)]">
          LANJUTKAN
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 12h14 M13 6l6 6-6 6" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
