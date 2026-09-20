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
  cardClass,
  readAnswers,
} from "./Materi7Peta7Parts";

const STEP = 2;

const Arrow = () => (
  <svg width="16" height="20" viewBox="0 0 16 20" fill="none" stroke="#1E3A8A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="ml-24">
    <path d="M8 2v14M3 11l5 6 5-6" />
  </svg>
);

const Lalas = () => (
  <span className="font-bold text-[#16A34A]">
    L<sub className="text-[10px]">alas</sub>
  </span>
);

export default async function Materi7Peta7Step2MenyusunRumus({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getValue } = readAnswers(initialAnswers);
  const strip = await getPageImage("M7-P7-L2-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Menyusun Rumus Volume Limas Berdasarkan Hasil Verifikasi" />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="B" title="Menyusun Rumus Volume" />
        <p className="m-0 text-sm text-[#4B5563]">Lengkapilah langkah-langkah berikut untuk memperoleh rumus volume limas.</p>

        <div className={`${cardClass} !bg-[#FFFBEB] !border-[#FDE68A] flex flex-col gap-3`}>
          <div className="flex items-center gap-3 text-sm font-semibold text-[#111827] flex-wrap">
            <span className="w-24 text-right">Volume prisma</span>
            <span>=</span>
            <Lalas />
            <span>×</span>
            <span className="font-bold text-[#2563EB]">t</span>
          </div>
          <Arrow />
          <div className="flex items-center gap-3 text-sm font-semibold text-[#111827] flex-wrap">
            <span className="w-24 rounded-full bg-[#FBCFE8] px-3 py-1 text-center text-xs font-bold text-[#9D174D]">Karena</span>
            <span>Volume satu limas =</span>
            <div className="w-28"><CellInput name="rumus_karena" label="Pengali volume satu limas" value={getValue("rumus_karena")} /></div>
            <span>× volume prisma</span>
          </div>
          <Arrow />
          <div className="flex items-center gap-3 text-sm font-semibold text-[#111827] flex-wrap">
            <span className="w-24 rounded-full bg-[#FBCFE8] px-3 py-1 text-center text-xs font-bold text-[#9D174D]">Maka</span>
            <span>Volume satu limas =</span>
            <div className="w-28"><CellInput name="rumus_maka" label="Pengali luas alas dan tinggi" value={getValue("rumus_maka")} /></div>
            <span>× ( <Lalas /> × <span className="font-bold text-[#2563EB]">t</span> )</span>
          </div>
          <Arrow />
          <div className="flex items-center gap-3 text-sm font-semibold text-[#111827] flex-wrap">
            <span className="w-24 rounded-full bg-[#FBCFE8] px-3 py-1 text-center text-xs font-bold text-[#9D174D]">Sehingga</span>
            <span>
              V<sub className="text-[10px]">limas</sub> =
            </span>
            <div className="flex-1"><CellInput name="rumus_akhir" label="Rumus volume limas" value={getValue("rumus_akhir")} /></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[1.6fr_1fr] gap-4 items-center">
          <div className="flex flex-col gap-2">
            <EditablePageImage
              imageKey="M7-P7-L2-1"
              materi={materi}
              peta={peta}
              step="2"
              urutan="1"
              src={strip}
              alt="Tiga limas ditambahkan hingga memenuhi satu prisma"
              editable={editFoto}
              natural
              containerClassName="relative w-full overflow-hidden"
            />
            <p className="m-0 text-xs text-center font-semibold text-[#92400E] bg-[#FEF9E7] rounded-xl px-3 py-2">
              Tiga kali isi satu limas dapat memenuhi satu prisma.
            </p>
          </div>
          <p className="m-0 text-xs text-center font-semibold text-[#374151] leading-[1.5]">
            Prisma memiliki luas alas dan tinggi yang sama dengan limas.
          </p>
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
