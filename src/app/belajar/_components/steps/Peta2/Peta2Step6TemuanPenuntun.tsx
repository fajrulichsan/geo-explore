import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const temuan = [
  "Bangun ruang mana yang menurutmu memiliki bentuk hampir sama? Mengapa?",
  "Bangun ruang mana yang paling berbeda? Mengapa?",
  "Apakah menurutmu satu bangun dapat dimasukkan ke lebih dari satu kelompok? Jelaskan!",
];

const penuntun = [
  "Menurutmu, apakah semua bangun ruang dapat dikelompokkan hanya dengan satu cara?",
  "Informasi apa yang perlu diketahui agar pengelompokan menjadi lebih tepat?",
  "Apakah cukup jika kita hanya melihat bentuk luarnya saja?",
  "Informasi apa lagi yang ingin kamu ketahui agar alasan pengelompokkanmu semakin kuat?",
];

const textareaClass =
  "w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-3.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y";

export default async function Peta2Step6TemuanPenuntun({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={7} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 1 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              H
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Apa yang Kamu Temukan?
            </div>
          </div>
          <p className="m-0 text-sm font-semibold text-[#374151]">Jawablah pertanyaan berikut berdasarkan pengamatanmu.</p>
          <div className="flex flex-col gap-4">
            {temuan.map((q, i) => (
              <div
                key={q}
                className="bg-white border border-[#CDEBD5] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] focus-within:border-[#16A34A] transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <label htmlFor={`temuan_${i + 1}`} className="flex-1 text-[15px] font-bold text-[#111827] pt-1 cursor-pointer">
                    {q}
                  </label>
                </div>
                <textarea
                  id={`temuan_${i + 1}`}
                  name={`answers.temuan_${i + 1}`}
                  defaultValue={getValue(`temuan_${i + 1}`)}
                  rows={3}
                  placeholder="Ketik jawabanmu di sini..."
                  required
                  className={textareaClass}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              I
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Pertanyaan Penuntun
            </div>
          </div>
          <p className="m-0 text-sm font-semibold text-[#374151]">Pikirkan dan tuliskan jawabanmu.</p>
          <div className="flex flex-col gap-4">
            {penuntun.map((q, i) => (
              <div
                key={q}
                className="bg-white border border-[#DBE5FB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] focus-within:border-[#2563EB] transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <label htmlFor={`penuntun_${i + 1}`} className="flex-1 text-[15px] font-bold text-[#111827] pt-1 cursor-pointer">
                    {q}
                  </label>
                </div>
                <textarea
                  id={`penuntun_${i + 1}`}
                  name={`answers.penuntun_${i + 1}`}
                  defaultValue={getValue(`penuntun_${i + 1}`)}
                  rows={3}
                  placeholder="Ketik jawabanmu di sini..."
                  required
                  className={textareaClass}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
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
