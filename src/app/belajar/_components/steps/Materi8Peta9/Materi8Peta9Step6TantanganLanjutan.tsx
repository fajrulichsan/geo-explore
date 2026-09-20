import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import { HiddenStepFields, RevealImage, SectionTitle, StepFooter, StepTitle, SUBTITLE, TextAreaField, cardClass, readAnswers } from "./Materi8Peta9Parts";

const STEP = 6;

export default async function Materi8Peta9Step6TantanganLanjutan({ materi, peta, editFoto, initialAnswers }: StepComponentProps) {
  const { getValue } = readAnswers(initialAnswers);
  const [bangun, petunjuk] = await Promise.all([getPageImage("M8-P9-L6-1"), getPageImage("M8-P9-L6-2")]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle={SUBTITLE} />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="E" title="Tantangan Lanjutan (Transfer Konsep)" />
        <EditablePageImage
          imageKey="M8-P9-L6-1"
          materi={materi}
          peta={peta}
          step="6"
          urutan="1"
          src={bangun}
          alt="Kubus, balok, prisma segitiga, dan limas segiempat dengan lampu ide"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-full aspect-[1192/496] max-h-56 rounded-[20px] bg-white overflow-hidden"
        />
        <div className={`${cardClass} flex flex-col gap-3`}>
          <p className="m-0 text-sm text-[#374151] leading-[1.7]">Perhatikan situasi berikut.</p>
          <p className="m-0 text-sm text-[#374151] leading-[1.7]">
            Sebuah kubus, balok, prisma segitiga, dan limas segiempat masing-masing diperbesar dengan faktor skala <strong>4</strong>.
          </p>
          <p className="m-0 text-sm text-[#374151] leading-[1.7]">
            Tanpa menghitung volume masing-masing satu per satu, jelaskan bagaimana kamu dapat menentukan volume hasil skala setiap bangun berdasarkan volume awalnya. Apakah strategi yang kamu gunakan tetap sama? Jelaskan alasanmu.
          </p>
          <TextAreaField name="transfer_konsep" label="Jawabanmu" value={getValue("transfer_konsep")} rows={6} />
        </div>

        <RevealImage label="Lihat Petunjuk" hint="Butuh petunjuk setelah kamu mencoba? Klik untuk melihat petunjuk tambahan tentang pengaruh faktor skala 4 terhadap volume.">
          <EditablePageImage
            imageKey="M8-P9-L6-2"
            materi={materi}
            peta={peta}
            step="6"
            urutan="2"
            src={petunjuk}
            alt="Petunjuk: pengaruh faktor skala 4 terhadap volume"
            editable={editFoto}
            natural
            containerClassName="relative w-full overflow-hidden rounded-xl"
          />
        </RevealImage>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
