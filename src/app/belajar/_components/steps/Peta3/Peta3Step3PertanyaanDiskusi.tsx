import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const pertanyaan = [
  {
    n: 1,
    label: "Apa persamaan dan perbedaan dasar pengelompokan yang digunakan oleh Kelompok A, B, dan C?",
    placeholder: "Tuliskan jawabanmu di sini...",
  },
  {
    n: 2,
    label: "Apakah semua bangun telah dikelompokkan secara konsisten sesuai dasar pengelompokan masing-masing? Jelaskan.",
    placeholder: "Berikan penjelasanmu...",
  },
  {
    n: 3,
    label: "Menurutmu, apakah lebih dari satu cara pengelompokan dapat dianggap benar? Mengapa?",
    placeholder: "Sampaikan pendapat dan alasanmu...",
  },
  {
    n: 4,
    label: "Informasi apa yang masih perlu diketahui agar kamu yakin bahwa suatu pengelompokan benar?",
    placeholder: "Sebutkan informasi yang dibutuhkan...",
  },
];

export default function Peta3Step3PertanyaanDiskusi({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={8} />
        <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Jawablah pertanyaan-pertanyaan berikut berdasarkan hasil pengamatan dan diskusi kelompokmu mengenai
          pengelompokan bangun datar.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          C
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Pertanyaan Diskusi
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {pertanyaan.map((q) => (
          <div
            key={q.n}
            className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4"
          >
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                {q.n}
              </div>
              <label className="text-sm font-bold text-[#374151] leading-[1.6] pt-1">{q.label}</label>
            </div>
            <textarea
              rows={4}
              name={`answers.jawaban_${q.n}`}
              defaultValue={getValue(`jawaban_${q.n}`)}
              placeholder={q.placeholder}
              required
              className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
            />
          </div>
        ))}
      </div>

      <div className="pt-2">
        <PhotoUpload
          name="answers.foto_bukti"
          label="Unggah foto hasil diskusi (opsional)"
          defaultValue={getValue("foto_bukti")}
        />
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/2`}
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
