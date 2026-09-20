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
  TextAreaField,
  cardClass,
  readAnswers,
} from "./Materi7Peta5Parts";

const STEP = 3;

const faktor = [
  { key: "faktor_luas", label: "luas alas" },
  { key: "faktor_tinggi", label: "tinggi" },
  { key: "faktor_keduanya", label: "keduanya (luas alas dan tinggi)" },
];

export default async function Materi7Peta5Step3PolaKesimpulan({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getValue, getChecked } = readAnswers(initialAnswers);
  const maskot = await getPageImage("M7-P5-L3-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Mengolah Data Hasil GeoGebra 3D dan Augmented Reality" />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="C" title="Pola yang Ditemukan" />
        <p className="m-0 text-sm text-[#4B5563]">Berdasarkan data pada Bagian A dan B, tuliskan pola yang kamu temukan.</p>
        <div className={`${cardClass} flex flex-col gap-5`}>
          <TextAreaField n={1} name="pola_luas" label="Ketika luas alas berubah (tinggi tetap), saya menemukan bahwa:" value={getValue("pola_luas")} />
          <TextAreaField n={2} name="pola_tinggi" label="Ketika tinggi berubah (luas alas tetap), saya menemukan bahwa:" value={getValue("pola_tinggi")} />
          <TextAreaField n={3} name="pola_rasio" label="Perbandingan Vₗ : Vₚ pada beberapa percobaan menunjukkan:" value={getValue("pola_rasio")} />
        </div>
        <div className="bg-[#EEF2FF] border border-[#C7D2FE] rounded-xl px-4 py-3 text-sm text-[#3730A3] leading-[1.6]">
          <span className="font-extrabold">Catatan: </span>
          Kesimpulan ini masih berupa pola dan akan digunakan untuk menyusun dugaan pada Halaman 2.
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="D" title="Kesimpulan Sementara" color="green" />
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_190px] gap-5 items-end">
          <div className={`${cardClass} flex flex-col gap-4`}>
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">
              Berdasarkan seluruh data yang telah dianalisis, dugaan sementara saya adalah volume satu limas dipengaruhi oleh:
            </p>
            <div className="flex flex-col gap-2.5">
              {faktor.map((f) => (
                <CheckItem key={f.key} name={f.key} label={f.label} checked={getChecked(f.key)} />
              ))}
            </div>
            <TextAreaField name="alasan_sementara" label="Alasannya (berdasarkan datamu):" value={getValue("alasan_sementara")} />
          </div>
          <EditablePageImage
            imageKey="M7-P5-L3-1"
            materi={materi}
            peta={peta}
            step="3"
            urutan="1"
            src={maskot}
            alt="Maskot laki-laki: Gunakan data untuk mendukung kesimpulanmu!"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-40 sm:w-full aspect-[373/612] mx-auto"
          />
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
