import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import {
  HiddenStepFields,
  SectionTitle,
  StepFooter,
  StepTitle,
  TextAreaField,
  cardClass,
  readAnswers,
} from "./Materi7Peta8Parts";

const STEP = 4;

export default async function Materi7Peta8Step4TargetBelajar({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getValue } = readAnswers(initialAnswers);
  const maskot = await getPageImage("M7-P8-L4-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="D" title="Target Belajarku" color="purple" />
        <div className={`${cardClass} flex flex-col gap-4`}>
          <TextAreaField
            name="target_belajar"
            label="Tuliskan satu hal yang masih ingin kamu pelajari atau tingkatkan tentang volume limas, serta bagaimana cara yang akan kamu lakukan untuk mencapainya."
            value={getValue("target_belajar")}
            rows={5}
          />
          <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-xl px-4 py-3 text-sm text-[#1E3A8A] leading-[1.6]">
            <span className="font-extrabold">Contoh Target: </span>
            Saya akan berlatih menyelesaikan berbagai soal volume limas dalam konteks kehidupan sehari-hari agar semakin percaya diri
            menggunakan rumus volume limas.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-[20px] px-5 py-4 flex items-start gap-4">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0" aria-hidden>
            <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z" />
            <path d="M7 6H4a3 3 0 0 0 3 5M17 6h3a3 3 0 0 1-3 5" />
          </svg>
          <div className="text-sm text-[#92400E] leading-[1.6]">
            <span className="block font-extrabold text-xl mb-1">Hebat!</span>
            Kamu telah berhasil menemukan sendiri rumus volume limas melalui proses penemuan dan siap menerapkannya dalam masalah
            terbaru. Terus gunakan cara berpikir ini ketika menyelesaikan masalah baru!
          </div>
        </div>

        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] px-5 py-4 flex items-end gap-3">
          <div className="text-sm text-[#1E3A8A] leading-[1.6]">
            <span className="block font-extrabold text-xl mb-1 text-[#2563EB]">Selanjutnya</span>
            Pada bagian berikutnya, kamu akan mengerjakan Latihan Open-Ended untuk menerapkan rumus volume limas dalam situasi nyata
            dan menemukan lebih dari satu strategi penyelesaian untuk masalah Open-Ended.
          </div>
          <EditablePageImage
            imageKey="M7-P8-L4-1"
            materi={materi}
            peta={peta}
            step="4"
            urutan="1"
            src={maskot}
            alt="Maskot laki-laki mengepalkan tangan semangat"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-24 sm:w-28 aspect-[568/594] flex-shrink-0"
          />
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} final />
    </form>
  );
}
