import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const temuanQuestions = [
  "Bangun ruang mana yang menurutmu memiliki bentuk hampir sama? Mengapa?",
  "Bangun ruang mana yang paling berbeda? Mengapa?",
  "Apakah menurutmu satu bangun dapat dimasukkan ke lebih dari satu kelompok? Jelaskan!",
];

const penuntunQuestions = [
  "Menurutmu, apakah semua bangun ruang dapat dikelompokkan hanya dengan satu cara?",
  "Informasi apa yang perlu diketahui agar pengelompokan menjadi lebih tepat?",
  "Apakah cukup jika kita hanya melihat bentuk luarnya saja?",
  "Informasi apa lagi yang ingin kamu ketahui agar alasan pengelompokkanmu semakin kuat?",
];

export default function Step6TemukanPenuntun({ materi, peta, initialAnswers }: StepComponentProps) {
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
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              G
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Apa yang Kamu Temukan?
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
            <p className="m-0 text-sm italic text-[#6B7280]">
              Jawablah pertanyaan berikut berdasarkan pengamatanmu.
            </p>
            {temuanQuestions.map((q, i) => (
              <div key={q} className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FDF3C7] text-[#92400E] flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <p className="m-0 mb-2 text-sm font-semibold text-[#111827]">{q}</p>
                  <input
                    type="text"
                    name={`answers.temuan_${i + 1}`}
                    defaultValue={getValue(`temuan_${i + 1}`)}
                    placeholder="Tulis jawabanmu di sini..."
                    required
                    className="w-full border-b-2 border-[#E5E7EB] bg-transparent px-1 py-1.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              H
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Pertanyaan Penuntun
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            <p className="m-0 text-sm italic text-[#6B7280]">
              Pikirkan dan tuliskan jawabanmu.
            </p>
            {penuntunQuestions.map((q, i) => (
              <div key={q} className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-4 flex gap-3">
                <div className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-1">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <p className="m-0 mb-2 text-sm font-semibold text-[#111827]">{q}</p>
                  <textarea
                    rows={2}
                    name={`answers.penuntun_${i + 1}`}
                    defaultValue={getValue(`penuntun_${i + 1}`)}
                    placeholder="Jawaban..."
                    required
                    className="w-full rounded-xl border border-[#E5E7EB] bg-white p-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </div>
              </div>
            ))}

            <div className="pt-4 border-t border-[#E5E7EB]">
              <PhotoUpload
                name="answers.foto_bukti"
                label="Unggah foto hasil kerja (opsional)"
                defaultValue={getValue("foto_bukti")}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/5`}
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
