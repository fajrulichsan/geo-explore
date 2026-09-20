import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import {
  CellInput,
  HiddenStepFields,
  PengantarPanel,
  RadioPair,
  RememberList,
  SectionTitle,
  StepFooter,
  StepTitle,
  TextAreaField,
  TipBox,
  cardClass,
  readAnswers,
} from "./Materi7Peta5Parts";

const STEP = 5;

export default async function Materi7Peta5Step5DugaanVolumeRasio({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getValue } = readAnswers(initialAnswers);
  const [hero, diagram] = await Promise.all([getPageImage("M7-P5-L5-1"), getPageImage("M7-P5-L5-2")]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Menyusun Dugaan Hubungan Volume Limas" />

      <EditablePageImage
        imageKey="M7-P5-L5-1"
        materi={materi}
        peta={peta}
        step="5"
        urutan="1"
        src={hero}
        alt="Tiga siswa menyusun dugaan hubungan volume limas"
        editable={editFoto}
        natural
        containerClassName="relative w-full overflow-hidden rounded-[20px]"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <PengantarPanel
          intro="Pada halaman ini, kita akan melanjutkan analisis data yang telah kamu lakukan pada Halaman 1 untuk menyusun dugaan hubungan volume satu limas. Kamu akan:"
          items={[
            "menggunakan pola yang telah kamu temukan,",
            "menentukan rasio antara volume satu limas dan volume prisma,",
            "menuliskan dugaan rumus,",
            "memberikan alasan berdasarkan data dan pola.",
          ]}
        />
        <RememberList
          items={[
            "Gunakan data hasil analisis pada Halaman 1.",
            "Tulis jawaban berdasarkan datamu, bukan hanya perkiraan.",
            "Semua jawaban perlu didukung oleh data dan alasan yang jelas.",
          ]}
        />
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="G" title="Dugaan Hubungan Volume" />
        <p className="m-0 text-sm text-[#4B5563]">Berdasarkan hasil analisis data pada Halaman 1, volume satu limas dipengaruhi oleh:</p>
        <div className={`${cardClass} grid grid-cols-1 sm:grid-cols-[1fr_260px] gap-5 items-center`}>
          <div className="flex flex-col gap-3">
            <p className="m-0 text-xs font-bold text-[#92400E] bg-[#FEF9E7] rounded-lg px-3 py-2 w-fit">Pilih satu jawaban yang paling tepat.</p>
            <RadioPair
              name="dugaan_faktor"
              label="Volume satu limas dipengaruhi oleh"
              value={getValue("dugaan_faktor")}
              options={[
                { v: "luas_alas", l: "luas alas" },
                { v: "tinggi", l: "tinggi" },
                { v: "keduanya", l: "luas alas dan tinggi" },
              ]}
            />
          </div>
          <EditablePageImage
            imageKey="M7-P5-L5-2"
            materi={materi}
            peta={peta}
            step="5"
            urutan="2"
            src={diagram}
            alt="Prisma dan limas dengan luas alas L dan tinggi t yang sama"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full max-w-[280px] mx-auto aspect-[1050/556]"
          />
        </div>
        <TipBox>Kedua bangun memiliki luas alas yang sama (L) dan tinggi yang sama (t) pada setiap percobaan.</TipBox>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="H" title="Dugaan Rasio" color="amber" />
        <p className="m-0 text-sm text-[#4B5563]">Gunakan rasio yang sama yang kamu temukan dari data hasil eksplorasi pada Halaman 1.</p>
        <div className={`${cardClass} flex flex-col gap-4`}>
          <div className="flex flex-wrap items-center gap-2.5 text-sm font-semibold text-[#1E3A8A] bg-[#EFF6FF] rounded-xl px-4 py-3">
            <span>Volume prisma (Vₚ) =</span>
            <span className="w-24"><CellInput name="rasio_vp" label="Vₚ = ... × Vₗ" value={getValue("rasio_vp")} /></span>
            <span>× volume satu limas (Vₗ)</span>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 text-sm font-semibold text-[#166534] bg-[#F0FDF4] rounded-xl px-4 py-3">
            <span>Volume satu limas (Vₗ) =</span>
            <span className="w-24"><CellInput name="rasio_vl" label="Vₗ = ... × Vₚ" value={getValue("rasio_vl")} /></span>
            <span>× volume prisma (Vₚ)</span>
          </div>
          <TextAreaField
            name="rasio_periksa"
            label="Periksa apakah rasio tersebut muncul pada setiap percobaan yang kamu lakukan. Jika ada perbedaan, jelaskan kemungkinan penyebabnya."
            value={getValue("rasio_periksa")}
          />
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
