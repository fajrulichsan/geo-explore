import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const prompt = [
  { key: "kami_menemukan", label: "Kami menemukan bahwa..." },
  { key: "sisi_sama", label: "Sisi-sisi yang memiliki ukuran sama adalah..." },
  { key: "info_penting", label: "Informasi penting lainnya yang kami temukan..." },
  { key: "perlu_diolah", label: "Informasi yang masih perlu kami olah pada Tahap 4:" },
];

export default async function Materi3Peta4Step7TemuanKelompok({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="7" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={7} totalSteps={8} />
        <div className="flex items-center gap-3.5 flex-wrap">
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
          <span className="rounded-full bg-[#EFF4FF] text-[#2563EB] text-xs font-bold py-1 px-3">Tahap 3 dari 6</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#D97706] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#D97706]">
            Temuan Sementara (Kelompok)
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Berdasarkan hasil eksplorasi kelompokmu, catatlah temuan penting yang kalian peroleh.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {prompt.map((p, i) => (
            <div
              key={p.key}
              className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 flex flex-col gap-3 focus-within:border-[#D97706] transition-colors"
            >
              <div className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.2" className="mt-0.5 flex-shrink-0">
                  <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
                </svg>
                <label htmlFor={`temuan_sementara_${i}`} className="flex-1 text-[15px] font-bold text-[#92400E]">
                  {p.label}
                </label>
              </div>
              <textarea
                id={`temuan_sementara_${i}`}
                name={`answers.${p.key}`}
                defaultValue={getValue(p.key)}
                rows={3}
                placeholder="Ketik jawabanmu di sini..."
                required
                className="w-full rounded-2xl border border-[#F5E3A0] bg-white p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#D97706] focus:outline-none focus:ring-0 transition-colors resize-y"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/6`}
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
