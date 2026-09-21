import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";

const fields = [
  {
    key: "pemahaman_hari_ini",
    label: "Hari ini saya memahami bahwa ...",
    placeholder: "Tulis pemahamanmu di sini...",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" strokeWidth="2.2">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    key: "strategi_paling_membantu",
    label: "Strategi yang paling membantu saya adalah ...",
    placeholder: "Ceritakan strategi tersebut...",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.2">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="1" fill="#DC2626" />
      </svg>
    ),
  },
  {
    key: "hal_ingin_dipelajari",
    label: "Hal yang masih ingin saya pelajari adalah ...",
    placeholder: "Apa yang ingin kamu pelajari lebih lanjut?",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" strokeWidth="2.2">
        <path d="M4 5.5A2.5 2.5 0 016.5 3H20v15H6.5A2.5 2.5 0 004 20.5v-15z" />
        <path d="M4 20.5A2.5 2.5 0 016.5 18H20" />
      </svg>
    ),
  },
];

export default function Materi3Peta8Step2RefleksiPengalaman({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-3">
        <StepHeader materi={materi} currentStep={2} totalSteps={5} />
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
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Refleksi Pengalaman Belajar
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {fields.map((f) => (
            <div
              key={f.key}
              className="flex items-start gap-4 bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <div className="w-12 h-12 rounded-full bg-[#EFF4FF] flex items-center justify-center flex-shrink-0">{f.icon}</div>
              <div className="flex-1 flex flex-col gap-2.5">
                <label htmlFor={f.key} className="text-sm font-bold text-[#1D4ED8]">
                  {f.label}
                </label>
                <textarea
                  id={f.key}
                  name={`answers.${f.key}`}
                  defaultValue={getValue(f.key)}
                  rows={3}
                  placeholder={f.placeholder}
                  required
                  className="w-full resize-none rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] placeholder-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
                />
              </div>
            </div>
          ))}
        </div>
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
