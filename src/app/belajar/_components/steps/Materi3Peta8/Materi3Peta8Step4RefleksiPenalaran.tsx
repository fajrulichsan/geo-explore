import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";

const fields = [
  {
    key: "cara_mengetahui_jawaban_tepat",
    label: "Bagaimana kamu mengetahui bahwa jawaban dan strategi yang kamu gunakan sudah tepat?",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#166534" strokeWidth="2.2">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12.5l3 3 5-6" />
      </svg>
    ),
  },
  {
    key: "alasan_pentingnya_alasan_matematis",
    label: "Mengapa memberikan alasan matematis lebih penting daripada sekadar menuliskan hasil akhir?",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" strokeLinejoin="round">
        <path d="M4 4h6v3a2 2 0 104 0V4h6v6h-3a2 2 0 100 4h3v6h-6v-3a2 2 0 10-4 0v3H4v-6h3a2 2 0 100-4H4z" />
      </svg>
    ),
  },
];

export default function Materi3Peta8Step4RefleksiPenalaran({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-3">
        <StepHeader materi={materi} currentStep={4} totalSteps={5} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="#F59E0B" stroke="#D97706" strokeWidth="1.2" strokeLinejoin="round">
            <path d="M12 2l2.6 6.5L21 9l-5 4.4L17.4 21 12 17.3 6.6 21 8 13.4 3 9l6.4-.5z" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Refleksi Diri</h1>
        </div>
        <p className="m-0 text-[15px] font-semibold text-[#2563EB]">Apa yang Sudah Kamu Pelajari Hari Ini?</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#F59E0B] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#B45309]">
            Refleksi Penalaran
          </div>
        </div>

        <div className="relative flex flex-col gap-5 pl-6 border-l-2 border-[#FDE68A] ml-4">
          {fields.map((f, i) => (
            <div key={f.key} className="relative bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <div className="absolute -left-[42px] top-5 w-7 h-7 rounded-full bg-[#F59E0B] text-white text-xs font-bold flex items-center justify-center">
                {i + 1}
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-1 flex flex-col gap-2.5">
                  <label htmlFor={f.key} className="text-sm font-bold text-[#1D4ED8] leading-[1.5]">
                    {f.label}
                  </label>
                  <textarea
                    id={f.key}
                    name={`answers.${f.key}`}
                    defaultValue={getValue(f.key)}
                    rows={3}
                    placeholder="Tulis jawabanmu di sini..."
                    required
                    className="w-full resize-none rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] placeholder-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
                  />
                </div>
                <div className="hidden sm:flex w-12 h-12 rounded-full bg-[#F3F6FD] items-center justify-center flex-shrink-0">
                  {f.icon}
                </div>
              </div>
            </div>
          ))}
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
