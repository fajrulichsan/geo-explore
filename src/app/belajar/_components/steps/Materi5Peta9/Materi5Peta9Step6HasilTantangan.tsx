import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import FileSubmission from "@/components/FileSubmission";
import Peta9ScoreCheck from "../Peta9/Peta9ScoreCheck";

export default function Materi5Peta9Step6HasilTantangan({ materi, peta, initialAnswers }: StepComponentProps) {
  const savedScoreRaw = Number(initialAnswers?.ai_score);
  const savedScore =
    initialAnswers?.ai_score !== undefined && initialAnswers.ai_score !== "" && Number.isFinite(savedScoreRaw)
      ? savedScoreRaw
      : undefined;

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={6} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Tantangan Terbuka</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            G
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#7C3AED]">
            Hasil Tantangan Terbuka
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <p className="m-0 text-sm leading-[1.7] text-[#374151]">
            Kamu sudah menyelesaikan seluruh Tantangan Terbuka. Klik tombol di bawah untuk melihat skor dari tantangan terbukamu. Nilai minimal untuk melanjutkan ke Quiz adalah 71.
          </p>
          <p className="m-0 text-sm font-semibold text-[#92400E] leading-[1.6]">
            <strong>Ingat!</strong> Ada lebih dari satu strategi yang dapat digunakan untuk menentukan luas permukaan setelah diskalakan.
            Yang terpenting adalah alasan matematis yang jelas.
          </p>
        </div>
      </div>

      <FileSubmission
        materi={materi}
        peta={peta}
        defaultValue={typeof initialAnswers?.file_hasil_kerja === "string" ? initialAnswers.file_hasil_kerja : undefined}
      />

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/5`} />
        <Peta9ScoreCheck savedScore={savedScore} materi={materi} peta={peta} />
      </div>
    </form>
  );
}
