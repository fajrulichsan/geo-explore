import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const pertanyaan = [
  { n: 1, label: "Bangun ruang mana yang memiliki beberapa ciri yang sama?" },
  { n: 2, label: "Bangun ruang mana yang memiliki ciri paling berbeda?" },
  { n: 3, label: "Ciri apa yang dapat digunakan untuk membedakan prisma dengan limas?" },
  { n: 4, label: "Apakah satu bangun dapat memiliki kesamaan dengan bangun lain lebih dari satu ciri? Jelaskan." },
];

export default function Peta5Step2TemuanEksplorasi({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={7} />
        <div className="inline-flex items-center gap-1.5 bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#92400E" strokeWidth="2.4">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="4.5" />
            <circle cx="12" cy="12" r="1" fill="#92400E" />
          </svg>
          Tahap 4 dari 6 – Discovery Learning
        </div>
        <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          B
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Apa yang Kamu Temukan?
        </div>
      </div>
      <p className="m-0 -mt-6 text-sm text-[#4B5563]">
        Bandingkan data pada tabel. Tuliskan persamaan dan perbedaan yang kamu temukan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {pertanyaan.map((p) => (
          <div
            key={p.n}
            className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3"
          >
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                {p.n}
              </div>
              <label className="text-sm font-semibold text-[#111827] pt-1.5">{p.label}</label>
            </div>
            <textarea
              rows={3}
              name={`answers.jawaban_${p.n}`}
              defaultValue={getValue(`jawaban_${p.n}`)}
              required
              placeholder="Tuliskan jawabanmu di sini..."
              className="w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </div>
        ))}
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <PhotoUpload
          name="answers.foto_bukti"
          label="Unggah foto hasil temuan eksplorasi (opsional)"
          defaultValue={getValue("foto_bukti")}
        />
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
