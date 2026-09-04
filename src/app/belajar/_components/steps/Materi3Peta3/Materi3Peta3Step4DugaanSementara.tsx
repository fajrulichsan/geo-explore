import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const pertanyaan = [
  { n: 1, label: "Mengapa ada kelompok yang memiliki cara berpikir berbeda?" },
  { n: 2, label: "Apakah semua pendapat dapat diterima? Mengapa?" },
  { n: 3, label: "Bagaimana menentukan dugaan yang paling tepat?" },
  { n: 4, label: "Informasi apa yang masih perlu kita periksa atau uji?" },
];

export default async function Materi3Peta3Step4DugaanSementara({
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
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={6} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 items-start">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              E
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Pertanyaan Diskusi
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            {pertanyaan.map((p) => (
              <div key={p.n} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#EFF4FF] text-[#2563EB] flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {p.n}
                </div>
                <p className="m-0 text-sm font-semibold text-[#374151] leading-[1.5]">{p.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              F
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#16A34A]">
              Dugaan Sementara
            </div>
          </div>
          <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-6 flex flex-col gap-3">
            <div className="inline-flex items-center bg-white border border-[#BBF7D0] text-[#16A34A] rounded-full py-1 px-3 text-xs font-bold w-fit">
              Langkah 1
            </div>
            <label htmlFor="dugaan_sementara" className="text-sm text-[#374151]">
              Setelah membandingkan berbagai pendapat, tuliskan dugaan sementara kelompokmu yang menurutmu
              paling masuk akal.
            </label>
            <textarea
              id="dugaan_sementara"
              name="answers.dugaan_sementara"
              defaultValue={getValue("dugaan_sementara")}
              rows={6}
              placeholder="Ketik jawabanmu di sini..."
              required
              className="w-full rounded-2xl border border-[#BBF7D0] bg-white p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none focus:ring-0 transition-colors resize-y"
            />
          </div>
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
