import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const questions = [
  {
    n: 1,
    label: "Apakah semua benda tersebut memiliki bentuk yang sama? Jelaskan pengamatan awalmu.",
    placeholder: "Ketik jawabanmu di sini...",
    rows: 4,
  },
  {
    n: 2,
    label: "Benda mana saja yang menurutmu dapat dimasukkan ke dalam satu kelompok?",
    placeholder: "Contoh: Bola basket dan kelereng (karena bentuknya bulat)...",
    rows: 3,
  },
  {
    n: 3,
    label: "Ciri apa yang kamu gunakan untuk mengelompokkan benda-benda tersebut?",
    placeholder: "Sebutkan ciri-cirinya, misalnya: memiliki sudut, permukaan melengkung...",
    rows: 3,
  },
];

export default function Step2Berpikir({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={7} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              C
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Langkah 2 – Berpikir
            </div>
          </div>

          <div className="relative bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] pt-8 px-7 pb-6 mt-2 flex flex-col flex-1">
            <div className="absolute -top-[18px] left-6 w-10 h-10 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.08)] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
                <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
              </svg>
            </div>
            <h3 className="m-0 mb-3 text-xl font-bold text-[#111827]">Mari Berpikir Kritis</h3>
            <p className="m-0 text-[15px] leading-[1.6] text-[#374151]">
              Perhatikan benda-benda yang telah kamu amati pada Langkah 1. Gunakan hasil
              pengamatanmu untuk menjawab pertanyaan di samping.
            </p>
            <p className="m-0 mt-4 text-[15px] leading-[1.6] text-[#374151]">
              Tidak ada jawaban yang salah, tuliskan saja apa yang kamu pikirkan!
            </p>
            <div className="mt-auto pt-8">
              <div className="w-full h-32 rounded-2xl bg-white/50 border-2 border-dashed border-[#F5E3A0] flex items-center justify-center">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.6" opacity="0.5">
                  <path d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-4">
          {questions.map((q) => (
            <div
              key={q.n}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] focus-within:border-[#2563EB] transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
                  {q.n}
                </div>
                <label
                  htmlFor={`q${q.n}`}
                  className="flex-1 text-base font-bold text-[#111827] pt-1 cursor-pointer"
                >
                  {q.label}
                </label>
              </div>
              <div className="pl-[50px]">
                <textarea
                  id={`q${q.n}`}
                  name={`answers.jawaban_${q.n}`}
                  defaultValue={getValue(`jawaban_${q.n}`)}
                  rows={q.rows}
                  placeholder={q.placeholder}
                  required
                  className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
                />
              </div>
            </div>
          ))}

          <div className="mt-2 pt-6 border-t border-[#E5E7EB]">
            <PhotoUpload
              name="answers.foto_bukti"
              label="Unggah foto hasil pengamatan (opsional)"
              defaultValue={getValue("foto_bukti")}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/1`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
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
