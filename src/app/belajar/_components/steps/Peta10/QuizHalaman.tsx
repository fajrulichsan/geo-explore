import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImages, type PageImageKey } from "@/lib/pageImages";
import { acak } from "@/lib/acak";
import Peta10QuizBoard, { type QuizQuestion } from "./Peta10QuizBoard";

export type QuizSoal = QuizQuestion & { gambarKey?: PageImageKey };

type QuizHalamanProps = StepComponentProps & {
  soal: QuizSoal[];
  bannerKey: PageImageKey;
  bannerAlt: string;
  submateriBerikutnya: number;
};

export default async function QuizHalaman({
  materi,
  peta,
  initialAnswers,
  editFoto,
  soal,
  bannerKey,
  bannerAlt,
  submateriBerikutnya,
}: QuizHalamanProps) {
  const images = await getPageImages();
  const answers = initialAnswers ?? {};
  const tersimpan: Record<string, number> = {};
  soal.forEach((_, i) => {
    const v = answers[`quiz_${i + 1}`];
    const idx = typeof v === "string" ? ["A", "B", "C", "D"].indexOf(v) : -1;
    if (idx >= 0) tersimpan[String(i)] = idx;
  });

  const gambar = Object.fromEntries(
    soal.flatMap((q, i) =>
      q.gambarKey
        ? [
            [
              i,
              <EditablePageImage
                key={q.gambarKey}
                imageKey={q.gambarKey}
                materi={materi}
                peta={peta}
                step="1"
                urutan={String(i + 2)}
                src={images[q.gambarKey]}
                alt={`Gambar soal ${i + 1}`}
                editable={editFoto}
                natural
                containerClassName="relative w-full max-w-md mx-auto rounded-xl overflow-hidden"
              />,
            ],
          ]
        : []
    )
  );

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={1} />
        <EditablePageImage
          imageKey={bannerKey}
          materi={materi}
          peta={peta}
          step="1"
          urutan="1"
          src={images[bannerKey]}
          alt={bannerAlt}
          editable={editFoto}
          natural
          containerClassName="relative w-full rounded-[20px] overflow-hidden"
        />
      </div>

      <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-[20px] p-4 flex flex-col sm:flex-row sm:items-center gap-3">
        <EditablePageImage
          imageKey="M1-PQ-4"
          materi={materi}
          peta={peta}
          step="1"
          urutan="4"
          src={images["M1-PQ-4"]}
          alt="Petunjuk"
          editable={false}
          imageClassName="object-contain"
          containerClassName="relative w-40 h-12 flex-shrink-0"
        />
        <ol className="m-0 pl-5 text-sm text-[#78350F] leading-[1.7]">
          <li>Baca setiap soal dengan teliti.</li>
          <li>Klik salah satu jawaban (A, B, C, atau D) yang menurutmu paling tepat.</li>
          <li>Setelah semua soal terjawab, kamu dapat melihat hasil Quiz-mu.</li>
        </ol>
      </div>

      <Peta10QuizBoard
        questions={soal}
        initialAnswers={tersimpan}
        rangkumanHref={`/belajar/${materi}/11/1?from=quiz`}
        urutanAwal={acak(soal.length)}
        submateriBerikutnya={submateriBerikutnya}
        gambar={gambar}
      />
    </form>
  );
}
