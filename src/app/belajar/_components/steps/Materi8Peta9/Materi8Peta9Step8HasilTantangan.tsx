import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import BackLink from "@/app/belajar/_components/BackLink";
import FileSubmission from "@/components/FileSubmission";
import Peta9ScoreCheck from "../Peta9/Peta9ScoreCheck";
import { HiddenStepFields, SectionTitle, StepTitle, SUBTITLE, cardClass } from "./Materi8Peta9Parts";

const STEP = 8;

export default function Materi8Peta9Step8HasilTantangan({ materi, peta, initialAnswers }: StepComponentProps) {
  const savedScoreRaw = Number(initialAnswers?.ai_score);
  const savedScore =
    initialAnswers?.ai_score !== undefined && initialAnswers.ai_score !== "" && Number.isFinite(savedScoreRaw)
      ? savedScoreRaw
      : undefined;

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle={SUBTITLE} />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="F" title="Hasil Tantangan Terbuka" color="purple" />
        <div className={`${cardClass} flex flex-col gap-3`}>
          <p className="m-0 text-sm leading-[1.7] text-[#374151]">
            Kamu sudah menyelesaikan seluruh Tantangan Terbuka. Klik tombol di bawah untuk melihat skor dari tantangan terbukamu. Nilai minimal untuk melanjutkan ke Quiz adalah 71.
          </p>
          <p className="m-0 text-sm font-semibold text-[#92400E] leading-[1.6]">
            <strong>Ingat!</strong> Tidak ada satu strategi tunggal pada soal terbuka. Yang terpenting adalah hasil volume yang benar untuk faktor skala pilihanmu dan alasan matematis yang jelas.
          </p>
        </div>
      </div>

      <FileSubmission
        materi={materi}
        peta={peta}
        defaultValue={typeof initialAnswers?.file_hasil_kerja === "string" ? initialAnswers.file_hasil_kerja : undefined}
      />

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/7`} />
        <Peta9ScoreCheck savedScore={savedScore} materi={materi} peta={peta} />
      </div>
    </form>
  );
}
