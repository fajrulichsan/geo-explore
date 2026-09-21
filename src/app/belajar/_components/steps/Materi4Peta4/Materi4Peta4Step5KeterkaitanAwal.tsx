import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const pertanyaan = [
  { key: "temuan_jaring", text: "Apa yang kamu temukan setelah limas dibuka menjadi jaring-jaring?" },
  { key: "bagian_luas", text: "Bagian mana yang membentuk luas permukaan limas?" },
  { key: "mengapa_semua_sisi", text: "Mengapa luas semua sisi yang membatasi limas perlu diperhitungkan?" },
  {
    key: "cara_menentukan",
    text: "Berdasarkan hasil pengamatanmu, bagaimana kemungkinan cara menentukan luas permukaan limas?",
  },
];

export default async function Materi4Peta4Step5KeterkaitanAwal({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={6} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#EA580C] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          D
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-[#EA580C]">Temukan Keterkaitan Awal</span>
          <span className="text-xs text-[#6B7280]">Jawablah pertanyaan berikut berdasarkan hasil pengamatanmu.</span>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        {pertanyaan.map((p, i) => (
          <div
            key={p.key}
            className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 flex flex-col gap-3 focus-within:border-[#EA580C] transition-colors"
          >
            <label htmlFor={p.key} className="flex items-start gap-3 text-sm font-bold text-[#111827] leading-[1.5]">
              <span className="w-6 h-6 rounded-full bg-[#EA580C] text-white flex items-center justify-center text-xs flex-shrink-0">
                {i + 1}
              </span>
              {p.text}
            </label>
            <textarea
              id={p.key}
              name={`answers.${p.key}`}
              defaultValue={getValue(p.key)}
              rows={3}
              placeholder="Tulis jawabanmu di sini..."
              required
              className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#EA580C] focus:outline-none transition-colors resize-y"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
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
