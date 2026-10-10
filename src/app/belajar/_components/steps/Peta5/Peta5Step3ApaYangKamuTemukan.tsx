import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const pertanyaan = [
  { name: "c_ciri_sama", teks: "Bangun ruang mana yang memiliki beberapa ciri yang sama? Ciri apa yang sama?", warna: "#15803D" },
  { name: "c_paling_berbeda", teks: "Bangun ruang mana yang memiliki ciri paling berbeda? Jelaskan berdasarkan datamu.", warna: "#6D28D9" },
  { name: "c_prisma_limas", teks: "Ciri apa yang dapat digunakan untuk membedakan prisma dengan limas?", warna: "#EA580C" },
  { name: "c_kesamaan_lebih_satu", teks: "Apakah satu bangun dapat memiliki kesamaan dengan bangun lain berdasarkan lebih dari satu ciri? Jelaskan.", warna: "#1E3A8A" },
];

export default async function Peta5Step3ApaYangKamuTemukan({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={9} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" className="flex-shrink-0">
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="M15.5 15.5L21 21" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Apa yang Kamu Temukan?
          </div>
        </div>
        <p className="m-0 text-sm font-semibold text-[#374151]">Bandingkan data pada tabel. Tuliskan persamaan dan perbedaan yang kamu temukan.</p>

        <div className="flex flex-col gap-4">
          {pertanyaan.map((p, i) => (
            <div key={p.name} className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <span
                  className="w-8 h-8 rounded-full text-white flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: p.warna }}
                >
                  {i + 1}
                </span>
                <label htmlFor={p.name} className="text-[15px] leading-[1.6] font-bold text-[#111827] cursor-pointer pt-0.5">
                  {p.teks}
                </label>
              </div>
              <textarea
                id={p.name}
                name={`answers.${p.name}`}
                defaultValue={getValue(p.name)}
                rows={3}
                placeholder="Ketik jawabanmu di sini..."
                required
                className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/2`} />
        <NextStepButton />
      </div>
    </form>
  );
}
