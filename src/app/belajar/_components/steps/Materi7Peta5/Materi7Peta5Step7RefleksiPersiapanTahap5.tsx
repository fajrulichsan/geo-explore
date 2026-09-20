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

const STEP = 7;

const refleksi = [
  { key: "refleksi_pola", label: "Saya berhasil menggunakan pola dari data yang telah saya analisis." },
  { key: "refleksi_faktor", label: "Saya mengetahui faktor yang memengaruhi volume satu limas." },
  { key: "refleksi_rasio", label: "Saya dapat menentukan rasio volume satu limas dan volume prisma." },
  { key: "refleksi_dugaan", label: "Saya dapat menyusun dugaan rumus volume limas." },
  { key: "refleksi_alasan", label: "Saya dapat memberikan alasan berdasarkan data dan pola." },
  { key: "refleksi_siap", label: "Saya siap melanjutkan ke Tahap 5 untuk membuktikan dugaan tersebut." },
];

const persiapan = [
  { key: "siap_geogebra", label: "Data hasil GeoGebra 3D" },
  { key: "siap_ar", label: "Data hasil Augmented Reality" },
  { key: "siap_tabel", label: "Tabel hasil pengamatan" },
  { key: "siap_dugaan", label: "Dugaan hubungan volume satu limas dan prisma" },
  { key: "siap_rumus", label: "Dugaan rumus volume limas dan alasan/catatan hasil analisis" },
];

export default async function Materi7Peta5Step7RefleksiPersiapanTahap5({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getChecked } = readAnswers(initialAnswers);
  const maskot = await getPageImage("M7-P5-L7-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Menyusun Dugaan Hubungan Volume Limas" />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="K" title="Refleksi Singkat" color="amber" />
        <p className="m-0 text-sm text-[#4B5563]">Beri tanda centang pada pernyataan yang sesuai.</p>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_190px] gap-5 items-end">
          <div className={`${cardClass} flex flex-col gap-3`}>
            {refleksi.map((r) => (
              <CheckItem key={r.key} name={r.key} label={r.label} checked={getChecked(r.key)} />
            ))}
          </div>
          <EditablePageImage
            imageKey="M7-P5-L7-1"
            materi={materi}
            peta={peta}
            step="7"
            urutan="1"
            src={maskot}
            alt="Maskot perempuan: Setiap langkah membuatmu lebih dekat pada pemahaman yang lebih baik!"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-40 sm:w-full aspect-[370/616] mx-auto"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="L" title="Persiapan Tahap 5 – Ayo Membuktikan" color="green" />
        <p className="m-0 text-sm text-[#4B5563]">Pastikan kamu sudah menyiapkan hal-hal berikut:</p>
        <div className={`${cardClass} flex flex-col gap-3`}>
          {persiapan.map((p) => (
            <CheckItem key={p.key} name={p.key} label={p.label} checked={getChecked(p.key)} />
          ))}
        </div>
        <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-xl px-4 py-3 text-sm text-[#92400E] leading-[1.6]">
          <span className="font-extrabold text-lg">Hebat! </span>
          Kamu telah menyusun dugaan dengan sangat baik. Sekarang, kita lanjut ke Tahap 5 untuk membuktikannya!
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} final />
    </form>
  );
}
