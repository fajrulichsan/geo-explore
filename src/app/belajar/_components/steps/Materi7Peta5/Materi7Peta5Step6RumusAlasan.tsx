import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import {
  CellInput,
  HiddenStepFields,
  SectionTitle,
  StepFooter,
  StepTitle,
  TextAreaField,
  cardClass,
  readAnswers,
} from "./Materi7Peta5Parts";

const STEP = 6;

export default async function Materi7Peta5Step6RumusAlasan({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getValue } = readAnswers(initialAnswers);
  const maskot = await getPageImage("M7-P5-L6-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Menyusun Dugaan Hubungan Volume Limas" />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="I" title="Dugaan Rumus Volume Limas" />
        <div className={`${cardClass} flex flex-col gap-4`}>
          <p className="m-0 text-sm text-[#374151] leading-[1.7]">
            Karena dalam setiap percobaan, volume satu limas merupakan bagian dari volume prisma dengan alas dan tinggi yang sama, dan berdasarkan rasio yang kamu temukan pada Bagian H,
          </p>
          <div className="flex flex-wrap items-center gap-2.5 text-sm font-semibold text-[#92400E] bg-[#FEF9E7] rounded-xl px-4 py-3">
            <span>Volume satu limas =</span>
            <span className="w-28"><CellInput name="rumus_pengali" label="Volume satu limas = ... × volume prisma" value={getValue("rumus_pengali")} /></span>
            <span>× volume prisma</span>
          </div>
          <p className="m-0 text-sm text-[#374151]">maka dugaan rumus volume limas adalah</p>
          <div className="flex items-center gap-3 bg-[#F0FDF4] rounded-xl px-4 py-3">
            <span className="text-lg font-extrabold text-[#166534] whitespace-nowrap">V<sub>limas</sub> =</span>
            <CellInput name="rumus_limas" label="Dugaan rumus V limas" value={getValue("rumus_limas")} />
          </div>
          <div className="bg-[#EEF2FF] border border-[#C7D2FE] rounded-xl px-4 py-3 text-sm text-[#3730A3] leading-[1.6]">
            <span className="font-extrabold">Catatan: </span>
            Ini masih berupa dugaan dan akan dibuktikan pada Tahap 5.
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="J" title="Alasan Dugaan" color="amber" />
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_190px] gap-5 items-end">
          <div className={`${cardClass} flex flex-col gap-4`}>
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">
              Tuliskan alasan atau argumen kelompokmu. Mengapa kamu menduga rumus tersebut benar? Gunakan data, pola, dan hasil analisis yang telah kamu temukan.
            </p>
            <TextAreaField name="alasan_dugaan" label="Alasan dugaanku:" value={getValue("alasan_dugaan")} rows={6} />
          </div>
          <EditablePageImage
            imageKey="M7-P5-L6-1"
            materi={materi}
            peta={peta}
            step="6"
            urutan="1"
            src={maskot}
            alt="Maskot laki-laki: Gunakan data, pola, dan hasil analisis untuk mendukung alasanmu!"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-40 sm:w-full aspect-[354/601] mx-auto"
          />
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
