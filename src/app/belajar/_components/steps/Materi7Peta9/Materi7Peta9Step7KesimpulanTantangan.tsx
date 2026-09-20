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
} from "./Materi7Peta9Parts";

const STEP = 7;

const pernyataan = [
  { key: "cek_pasangan", label: "Saya dapat menemukan lebih dari satu pasangan ukuran alas dan tinggi yang menghasilkan volume 120 cm³." },
  { key: "cek_strategi", label: "Saya dapat menggunakan lebih dari satu strategi penyelesaian." },
  { key: "cek_alasan", label: "Saya dapat menjelaskan alasan setiap strategi." },
  { key: "cek_hargai", label: "Saya dapat menghargai berbagai jawaban yang benar." },
  { key: "cek_jelaskan", label: "Saya dapat menjelaskan mengapa beberapa bentuk limas yang berbeda dapat memiliki volume yang sama." },
];

export default async function Materi7Peta9Step7KesimpulanTantangan({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getValue, getChecked } = readAnswers(initialAnswers);
  const maskot = await getPageImage("M7-P9-L7-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Saatnya Menunjukkan Berbagai Strategimu!" />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="G" title="Kesimpulan Tantangan" color="amber" />
        <p className="m-0 text-sm text-[#4B5563]">Lengkapilah pernyataan berikut.</p>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_140px] gap-4 items-end">
          <div className={`${cardClass} flex flex-col gap-3`}>
            {pernyataan.map((p) => (
              <CheckItem key={p.key} name={p.key} label={p.label} checked={getChecked(p.key)} />
            ))}
          </div>
          <div className={cardClass}>
            <TextAreaField name="kesimpulanku" label="Tuliskan kesimpulanmu." value={getValue("kesimpulanku")} rows={8} />
          </div>
          <EditablePageImage
            imageKey="M7-P9-L7-1"
            materi={materi}
            peta={peta}
            step="7"
            urutan="1"
            src={maskot}
            alt="Maskot laki-laki mengepalkan tangan dengan semangat"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-36 md:w-full aspect-[417/601] mx-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-xl px-4 py-3 text-sm text-[#92400E] leading-[1.6]">
          <span className="font-extrabold text-lg">Hebat! </span>
          Kamu telah menggunakan rumus volume limas, menjelajahi berbagai strategi, dan memberikan alasan yang logis. Teruslah berpikir kreatif!
        </div>
        <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-xl px-4 py-3 text-sm text-[#92400E] leading-[1.6]">
          <span className="font-extrabold text-lg">Selanjutnya </span>
          Pada bagian berikutnya, kamu akan mengerjakan Latihan Open-Ended untuk memperdalam pemahamanmu tentang volume limas.
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} final />
    </form>
  );
}
