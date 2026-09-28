import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const questions = [
  {
    n: 1,
    label: "Apakah semua benda tersebut memiliki bentuk yang sama? Jelaskan pengamatan awalmu.",
    placeholder: "Ketik jawabanmu di sini...",
  },
  {
    n: 2,
    label: "Benda mana saja yang menurutmu dapat dimasukkan ke dalam satu kelompok?",
    placeholder: "Contoh: Kotak susu dan lemari (karena sama-sama berbentuk balok)...",
  },
  {
    n: 3,
    label: "Ciri apa yang kamu gunakan untuk mengelompokkan benda-benda tersebut?",
    placeholder: "Sebutkan ciri-cirinya...",
  },
];

export default async function Peta2Step2AmatiBerpikir({
  materi,
  peta,
  step = "2",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const maskot = await getPageImage("M1-P2-L2-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={7} />
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

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Langkah 1 – Amati
          </div>
        </div>
        <div className="bg-[#EFF4FF] border border-[#DBE5FB] rounded-[20px] p-6 flex items-center gap-5">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" strokeWidth="2.2" className="flex-shrink-0 hidden sm:block">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <p className="m-0 flex-1 text-[15px] leading-[1.7] text-[#1E3A8A]">
            Amatilah setiap benda pada halaman sebelumnya dengan saksama. Perhatikan bentuk umum setiap benda{" "}
            <em>tanpa menghitung</em> banyak sisi, rusuk, ataupun titik sudutnya.
          </p>
          <EditablePageImage
            imageKey="M1-P2-L2-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={maskot}
            alt="Siswa laki-laki mengamati dengan kaca pembesar"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-24 h-32 sm:w-32 sm:h-40 flex-shrink-0 bg-white rounded-2xl"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Langkah 2 – Berpikir
          </div>
        </div>
        <p className="m-0 text-sm font-semibold text-[#374151]">Pikirkan jawaban dari pertanyaan berikut secara mandiri.</p>
        <div className="flex flex-col gap-4">
          {questions.map((q) => (
            <div
              key={q.n}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] focus-within:border-[#2563EB] transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-[34px] h-[34px] rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
                  {q.n}
                </div>
                <label htmlFor={`q${q.n}`} className="flex-1 text-base font-bold text-[#111827] pt-1 cursor-pointer">
                  {q.label}
                </label>
              </div>
              <div className="sm:pl-[50px]">
                <textarea
                  id={`q${q.n}`}
                  name={`answers.jawaban_${q.n}`}
                  defaultValue={getValue(`jawaban_${q.n}`)}
                  rows={3}
                  placeholder={q.placeholder}
                  required
                  className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
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
