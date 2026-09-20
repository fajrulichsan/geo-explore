import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import {
  CheckItem,
  HiddenStepFields,
  NumberedQuestion,
  SectionTitle,
  StepFooter,
  StepTitle,
  TipBox,
  cardClass,
  readAnswers,
} from "./Materi7Peta6Parts";

const STEP = 4;

const refleksi = [
  { key: "ref_data", label: "Saya berhasil menguji dugaan menggunakan beberapa data." },
  { key: "ref_model", label: "Saya dapat membandingkan hasil perhitungan dengan model GeoGebra 3D/AR." },
  { key: "ref_pola", label: "Saya dapat menemukan pola dari data yang diperoleh." },
  { key: "ref_alasan", label: "Saya dapat memberikan alasan berdasarkan data." },
  { key: "ref_siap", label: "Saya siap melanjutkan ke Tahap 6 untuk menyusun rumus umum volume limas." },
];

const persiapan = [
  "menyimpulkan apakah dugaanmu benar atau perlu diperbaiki,",
  "menjelaskan hubungan volume satu limas dan volume prisma,",
  "memberikan alasan yang lebih lengkap berdasarkan data.",
];

export default async function Materi7Peta6Step4RefleksiHalaman2({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getChecked } = readAnswers(initialAnswers);
  const [perempuan, laki] = await Promise.all([getPageImage("M7-P6-L4-1"), getPageImage("M7-P6-L4-2")]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Memverifikasi Hubungan Volume Satu Limas dan Volume Prisma" />

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
            imageKey="M7-P6-L4-1"
            materi={materi}
            peta={peta}
            step="4"
            urutan="1"
            src={perempuan}
            alt="Maskot perempuan: Setiap data membantu kita menuju kesimpulan yang lebih kuat!"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-40 sm:w-full aspect-[379/601] mx-auto"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="F" title="Persiapan Halaman 2" color="green" />
        <p className="m-0 text-sm text-[#4B5563]">Pada halaman berikutnya, kamu akan:</p>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_170px] gap-5 items-end">
          <div className="flex flex-col gap-4">
            <div className={`${cardClass} flex flex-col gap-3`}>
              {persiapan.map((p, i) => (
                <NumberedQuestion key={p} n={i + 1} color="green">
                  <span className="font-normal text-[#374151]">{p}</span>
                </NumberedQuestion>
              ))}
            </div>
            <TipBox>Pastikan kamu sudah mengisi semua bagian di halaman ini sebelum melanjutkan.</TipBox>
          </div>
          <EditablePageImage
            imageKey="M7-P6-L4-2"
            materi={materi}
            peta={peta}
            step="4"
            urutan="2"
            src={laki}
            alt="Maskot laki-laki dengan tangan terkepal semangat"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-36 sm:w-full aspect-[592/610] mx-auto"
          />
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
