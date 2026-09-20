import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import {
  CheckItem,
  HiddenStepFields,
  SectionTitle,
  StepFooter,
  StepTitle,
  cardClass,
  readAnswers,
} from "./Materi7Peta5Parts";

const STEP = 4;

const refleksi = [
  { key: "refleksi_data", label: "Saya berhasil mengolah data dan menemukan pola." },
  { key: "refleksi_faktor", label: "Saya mengetahui faktor yang memengaruhi volume satu limas." },
  { key: "refleksi_tetap", label: "Saya dapat menjelaskan apa yang tetap dan apa yang berubah." },
  { key: "refleksi_siap", label: "Saya merasa siap menyusun dugaan rumus pada Halaman 2." },
];

const persiapan = [
  { key: "siap_geogebra", label: "Data hasil GeoGebra 3D" },
  { key: "siap_ar", label: "Data hasil Augmented Reality" },
  { key: "siap_tabel", label: "Tabel hasil pengamatan" },
  { key: "siap_pola", label: "Pola yang kamu temukan dari data eksplorasi" },
  { key: "siap_catatan", label: "Catatan hasil analisis" },
];

export default async function Materi7Peta5Step4RefleksiPersiapan({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getChecked } = readAnswers(initialAnswers);
  const maskot = await getPageImage("M7-P5-L4-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Mengolah Data Hasil GeoGebra 3D dan Augmented Reality" />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="E" title="Refleksi Singkat" color="amber" />
        <p className="m-0 text-sm text-[#4B5563]">Beri tanda centang pada pernyataan yang sesuai dengan dirimu.</p>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_190px] gap-5 items-end">
          <div className={`${cardClass} flex flex-col gap-3`}>
            {refleksi.map((r) => (
              <CheckItem key={r.key} name={r.key} label={r.label} checked={getChecked(r.key)} />
            ))}
          </div>
          <EditablePageImage
            imageKey="M7-P5-L4-1"
            materi={materi}
            peta={peta}
            step="4"
            urutan="1"
            src={maskot}
            alt="Maskot perempuan: Setiap data dapat membawamu lebih dekat ke kesimpulan!"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-40 sm:w-full aspect-[403/616] mx-auto"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="F" title="Persiapan Halaman 2" color="green" />
        <p className="m-0 text-sm text-[#4B5563]">Pastikan kamu sudah menyiapkan hal-hal berikut:</p>
        <div className={`${cardClass} flex flex-col gap-3`}>
          {persiapan.map((p) => (
            <CheckItem key={p.key} name={p.key} label={p.label} checked={getChecked(p.key)} />
          ))}
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
