import FileSubmission from "@/components/FileSubmission";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi2Peta3Step7KotakMotivasi({
  materi,
  peta,
  step = "7",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const [motivasiImage, bintangImage, roketImage] = await Promise.all([
    getPageImage("M2-P3-L7-1"),
    getPageImage("M2-P3-L7-2"),
    getPageImage("M2-P3-L7-3"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="7" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={7} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            M
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Kotak Motivasi
          </div>
        </div>
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 sm:p-6 flex flex-col md:flex-row md:items-center gap-5">
          <div className="flex items-start gap-4 md:flex-1">
            <EditablePageImage
              imageKey="M2-P3-L7-2"
              materi={materi}
              peta={peta}
              step={step}
              urutan="2"
              src={bintangImage}
              alt="Bintang"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-10 h-10 flex-shrink-0"
            />
            <p className="m-0 text-sm leading-[1.6] text-[#374151]">
              Perbedaan pendapat bukan berarti salah. Melalui diskusi, kita dapat menemukan berbagai
              kemungkinan jawaban yang akan dibuktikan pada tahap eksplorasi!
            </p>
          </div>
          <EditablePageImage
            imageKey="M2-P3-L7-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={motivasiImage}
            alt="Empat siswa dengan simbol tanda tanya, ide, centang, dan percakapan"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full md:w-72 aspect-[3/2] flex-shrink-0"
          />
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] px-7 py-8 sm:px-10 sm:py-9">
        <div className="absolute -right-10 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <div className="relative flex items-center gap-3 mb-3">
          <EditablePageImage
            imageKey="M2-P3-L7-3"
            materi={materi}
            peta={peta}
            step={step}
            urutan="3"
            src={roketImage}
            alt="Roket"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-10 h-10 flex-shrink-0"
          />
          <div className="bg-white/15 border border-white/25 rounded-full py-2 px-5 text-sm font-bold text-white">
            Menuju Tahap 3
          </div>
        </div>
        <p className="relative m-0 max-w-xl text-[15px] leading-[1.6] text-white/90">
          Pada tahap berikutnya, gunakan GeoGebra 3D dan Augmented Reality (AR) untuk menguji dugaan
          kelompokmu!
        </p>
      </div>

      <FileSubmission
        materi={materi}
        peta={peta}
        defaultValue={typeof initialAnswers?.file_hasil_kerja === "string" ? initialAnswers.file_hasil_kerja : undefined}
      />

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/6`} />
        <NextStepButton variant="green" icon="check">Lanjutkan ke Tahap Ayo Bereksplorasi</NextStepButton>
      </div>
    </form>
  );
}
