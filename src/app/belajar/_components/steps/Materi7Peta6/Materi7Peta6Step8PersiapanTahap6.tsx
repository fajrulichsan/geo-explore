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
} from "./Materi7Peta6Parts";

const STEP = 8;

const persiapan = [
  { key: "siap_isi", label: "Mengisi semua bagian pada halaman ini." },
  { key: "siap_periksa", label: "Memeriksa kembali jawaban dan alasan." },
  { key: "siap_paham", label: "Memahami hubungan volume limas dan prisma." },
  { key: "siap_lanjut", label: "Siap melanjutkan ke tahap berikutnya." },
];

export default async function Materi7Peta6Step8PersiapanTahap6({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getValue, getChecked } = readAnswers(initialAnswers);
  const maskot = await getPageImage("M7-P6-L8-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Menarik Kesimpulan Verifikasi" />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="K" title="Kesimpulan Hasil Verifikasi" />
        <div className={cardClass}>
          <TextAreaField
            name="kesimpulan_hasil"
            label="Tuliskan kesimpulan hasil verifikasi tentang hubungan volume satu limas dan volume prisma berdasarkan seluruh hasil verifikasi pada Tahap 5."
            value={getValue("kesimpulan_hasil")}
            rows={5}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="L" title="Persiapan Tahap 6 – Ayo Menyimpulkan" color="green" />
        <p className="m-0 text-sm text-[#4B5563]">Sebelum melanjutkan, pastikan kamu sudah melakukan hal berikut:</p>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_170px] gap-5 items-end">
          <div className={`${cardClass} flex flex-col gap-3`}>
            {persiapan.map((p) => (
              <CheckItem key={p.key} name={p.key} label={p.label} checked={getChecked(p.key)} />
            ))}
          </div>
          <EditablePageImage
            imageKey="M7-P6-L8-1"
            materi={materi}
            peta={peta}
            step="8"
            urutan="1"
            src={maskot}
            alt="Maskot laki-laki: Kamu sudah hebat! Lanjut ke tahap berikutnya!"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-40 sm:w-full aspect-[382/583] mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-xl px-4 py-3 text-sm text-[#92400E] leading-[1.6]">
            <span className="font-extrabold text-lg">Hebat! </span>
            Kamu telah memverifikasi dan menarik kesimpulan hubungan volume limas dan volume prisma dengan sangat baik!
          </div>
          <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-xl px-4 py-3 text-sm text-[#92400E] leading-[1.6]">
            <span className="font-extrabold text-lg">Langkah Selanjutnya </span>
            Pada Tahap 6 (Ayo Menyimpulkan), kamu akan menyusun rumus umum volume limas.
          </div>
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} final />
    </form>
  );
}
