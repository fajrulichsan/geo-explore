import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import { HiddenStepFields, RevealImage, SectionTitle, StepFooter, StepTitle, SUBTITLE, TextAreaField, cardClass, readAnswers } from "./Materi8Peta9Parts";

const STEP = 5;

export default async function Materi8Peta9Step5JelaskanAlasanMatematis({ materi, peta, editFoto, initialAnswers }: StepComponentProps) {
  const { getValue } = readAnswers(initialAnswers);
  const [maskot, penjelasan] = await Promise.all([getPageImage("M8-P9-L5-1"), getPageImage("M8-P9-L5-2")]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle={SUBTITLE} />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="D" title="Jelaskan Alasan Matematis" />
        <div className="grid grid-cols-1 md:grid-cols-[1fr_180px] gap-4 items-start">
          <div className="flex flex-col gap-4">
            <div className={cardClass}>
              <TextAreaField
                name="alasan_hasil_sama"
                n={1}
                label={<>Mengapa kedua strategi yang kamu gunakan menghasilkan jawaban yang sama? Jelaskan dengan alasan matematis.</>}
                value={getValue("alasan_hasil_sama")}
                rows={4}
              />
            </div>
            <div className={cardClass}>
              <TextAreaField
                name="alasan_k_pangkat_tiga"
                n={2}
                label={<>Jelaskan bagaimana setiap ukuran panjang yang bersesuaian pada bangun ruang yang diskala dengan faktor <em>k</em>, menyebabkan volume berubah sebesar faktor <em>k</em>³.</>}
                value={getValue("alasan_k_pangkat_tiga")}
                rows={5}
              />
            </div>
          </div>
          <EditablePageImage
            imageKey="M8-P9-L5-1"
            materi={materi}
            peta={peta}
            step="5"
            urutan="1"
            src={maskot}
            alt="Siswa menunjuk ke atas dengan lampu ide: bandingkan, jelaskan, dan temukan strategi terbaikmu"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-40 md:w-full aspect-[411/592] mx-auto rounded-xl bg-white overflow-hidden"
          />
        </div>

        <RevealImage label="Lihat Penjelasan" hint="Ingin melihat pembahasan setelah kamu mencoba? Klik untuk melihat penjelasan hubungan faktor skala dan volume.">
          <EditablePageImage
            imageKey="M8-P9-L5-2"
            materi={materi}
            peta={peta}
            step="5"
            urutan="2"
            src={penjelasan}
            alt="Penjelasan: mengapa volume berubah menjadi k pangkat tiga"
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
