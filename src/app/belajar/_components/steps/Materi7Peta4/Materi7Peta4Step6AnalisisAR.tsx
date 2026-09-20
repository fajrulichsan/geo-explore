import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import {
  HiddenStepFields,
  SectionTitle,
  StepFooter,
  StepTitle,
  TextAreaField,
  cardClass,
  readAnswers,
} from "./Materi7Peta4Parts";

const STEP = 6;

export default async function Materi7Peta4Step6AnalisisAR({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const { getValue } = readAnswers(initialAnswers);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Eksplorasi Menggunakan Augmented Reality (AR)" />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="K" title="Analisis dan Kesimpulan (Tahap 3)" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className={`${cardClass} !p-4`}>
            <TextAreaField n={1} name="analisis_rasio" label="Apakah nilai Vₗ / Vₚ yang kamu peroleh selalu sama? Tuliskan kesimpulan berdasarkan data pada tabel." value={getValue("analisis_rasio")} />
          </div>
          <div className={`${cardClass} !p-4`}>
            <TextAreaField n={2} color="amber" name="analisis_perubahan" label="Apa yang terjadi pada volume satu limas ketika luas alas diperbesar atau diperkecil? Apa yang terjadi ketika tinggi diperbesar?" value={getValue("analisis_perubahan")} />
          </div>
          <div className={`${cardClass} !p-4`}>
            <TextAreaField n={3} color="green" name="analisis_faktor" label="Sebutkan faktor yang memengaruhi volume limas." value={getValue("analisis_faktor")} />
          </div>
          <div className={`${cardClass} !p-4`}>
            <TextAreaField n={4} color="purple" name="analisis_sesuai_geogebra" label="Apakah hasil pengamatan AR sesuai dengan GeoGebra 3D? Jelaskan." value={getValue("analisis_sesuai_geogebra")} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="L" title="Refleksi Singkat" color="amber" />
        <div className={`${cardClass} flex flex-col gap-5`}>
          <TextAreaField n={1} name="refleksi_ar_manfaat" label="Apa manfaat penggunaan AR dalam memahami volume limas dan volume prisma?" value={getValue("refleksi_ar_manfaat")} />
          <TextAreaField n={2} color="amber" name="refleksi_ar_baru" label="Hal baru apa yang kamu pelajari dari eksplorasi ini?" value={getValue("refleksi_ar_baru")} />
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
