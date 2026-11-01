import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import BangunDaftarTabel from "@/app/belajar/_components/BangunDaftarTabel";
import {
  HiddenStepFields,
  SectionTitle,
  StepFooter,
  StepTitle,
  TextAreaField,
  cardClass,
  readAnswers,
} from "./Materi7Peta4Parts";

const STEP = 3;

const kolom = [
  { key: "l", label: "Luas Alas (L) (satuan)" },
  { key: "t", label: "Tinggi (t) (satuan)" },
  { key: "vp", label: "Volume Prisma (Vₚ)" },
  { key: "vl", label: "Volume Satu Limas (Vₗ)" },
  { key: "rasio", label: "Rasio Vₗ / Vₚ" },
  { key: "ket", label: "Keterangan (pola yang kamu temukan)" },
];

export default async function Materi7Peta4Step3DataGeogebra({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const { getValue } = readAnswers(initialAnswers);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Eksplorasi Menggunakan GeoGebra 3D" />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="F" title="Tabel Data Hasil Eksplorasi GeoGebra 3D" />
        <p className="m-0 text-sm text-[#4B5563]">Isilah data numerik dari hasil eksplorasi pada GeoGebra 3D.</p>
        <BangunDaftarTabel
          answerKey="data_geogebra"
          initialValue={initialAnswers?.data_geogebra}
          selectLabel="Limas yang diamati:"
          rows={[1, 2, 3, 4, 5].map((r) => ({ key: `p${r}`, label: String(r) }))}
          columns={kolom}
          entryTitle="Data yang Sudah Ditambahkan"
          bangunList={["Limas Segiempat", "Limas Segitiga"]}
          rowHeader="Percobaan"
        />
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="G" title="Refleksi Singkat" color="amber" />
        <div className={`${cardClass} flex flex-col gap-5`}>
          <TextAreaField n={1} name="refleksi_geogebra_manfaat" label="Apa manfaat menggunakan GeoGebra 3D dalam memahami hubungan volume limas dan volume prisma?" value={getValue("refleksi_geogebra_manfaat")} />
          <TextAreaField n={2} color="amber" name="refleksi_geogebra_baru" label="Hal baru apa yang kamu pelajari dari eksplorasi ini?" value={getValue("refleksi_geogebra_baru")} />
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
