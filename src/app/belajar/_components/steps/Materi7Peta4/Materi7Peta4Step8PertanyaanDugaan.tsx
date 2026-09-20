import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import {
  HiddenStepFields,
  NumberedQuestion,
  SectionTitle,
  StepFooter,
  StepTitle,
  TextAreaField,
  TipBox,
  cardClass,
  readAnswers,
} from "./Materi7Peta4Parts";

const STEP = 8;

const pertanyaan = [
  "Apa yang terjadi ketika luas alas diperbesar atau diperkecil?",
  "Apa yang terjadi ketika tinggi diperbesar atau diperkecil?",
  "Berapa kali isi satu limas diperlukan untuk memenuhi prisma ketika luas alas dan tingginya sama?",
  "Bagaimana hubungan volume satu limas dengan volume prisma?",
  "Faktor apa yang memengaruhi volume satu limas?",
  "Apakah hubungan tersebut berlaku untuk semua ukuran prisma dan limas yang sebangun? Jelaskan.",
];

const faktor = [
  { key: "faktor_luas_alas", label: "luas alas" },
  { key: "faktor_tinggi", label: "tinggi" },
  { key: "faktor_keduanya", label: "keduanya" },
];

export default async function Materi7Peta4Step8PertanyaanDugaan({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getValue, getChecked } = readAnswers(initialAnswers);
  const gambarMaskot = await getPageImage("M7-P4-L8-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Membandingkan Hasil dan Susun Dugaan Awal" />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="N" title="Pertanyaan Eksplorasi" />
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_180px] gap-5 items-end">
          <div className={`${cardClass} flex flex-col gap-4`}>
            {pertanyaan.map((q, i) => (
              <NumberedQuestion key={q} n={i + 1}>
                <span className="font-semibold">{q}</span>
              </NumberedQuestion>
            ))}
          </div>
          <EditablePageImage
            imageKey="M7-P4-L8-1"
            materi={materi}
            peta={peta}
            step="8"
            urutan="1"
            src={gambarMaskot}
            alt="Maskot siswa laki-laki berpikir dengan tanda tanya"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-32 h-40 sm:w-full sm:h-48 mx-auto"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="O" title="Dugaan Awal Kelompok" color="amber" />
        <p className="m-0 text-sm text-[#4B5563]">Berdasarkan hasil eksplorasi, lengkapi dugaan awal kelompokmu.</p>
        <div className={`${cardClass} flex flex-col gap-5`}>
          <div className="flex flex-col gap-3">
            <p className="m-0 text-sm font-bold text-[#111827]">Volume satu limas dipengaruhi oleh:</p>
            <div className="flex flex-wrap gap-2">
              {faktor.map((f) => (
                <label key={f.key} className="cursor-pointer">
                  <input type="checkbox" name={`answers.${f.key}`} defaultChecked={getChecked(f.key)} className="peer sr-only" />
                  <span className="inline-block rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#4B5563] peer-checked:border-[#2563EB] peer-checked:bg-[#EFF4FF] peer-checked:text-[#2563EB] peer-focus-visible:ring-2 peer-focus-visible:ring-[#2563EB]/40 transition-colors">
                    {f.label}
                  </span>
                </label>
              ))}
              <input type="text" name="answers.faktor_lainnya" defaultValue={getValue("faktor_lainnya")} aria-label="Faktor lainnya" placeholder="lainnya..." className="rounded-full border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white w-40" />
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] px-4 py-3">
            <label htmlFor="dugaan_rumus" className="text-sm font-bold text-[#92400E]">Kami menduga bahwa:</label>
            <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-[#111827]">
              Volume satu limas =
              <input id="dugaan_rumus" type="text" name="answers.dugaan_rumus" defaultValue={getValue("dugaan_rumus")} placeholder="..." required className="w-32 rounded-lg border border-[#E5E7EB] bg-white px-3 py-1.5 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none" />
              × volume prisma
            </div>
          </div>
          <TextAreaField name="dugaan_alasan" label="Alasannya:" value={getValue("dugaan_alasan")} />
          <TipBox>Gunakan data pada tabel untuk mendukung dugaanmu!</TipBox>
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
