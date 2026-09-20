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
  TipBox,
  cardClass,
  readAnswers,
} from "./Materi7Peta9Parts";

const STEP = 4;

const kolom = [
  { key: "bentuk", label: "Bentuk Limas" },
  { key: "alas", label: "Ukuran Alas (ukuran/bentuk)" },
  { key: "luas", label: "Luas Alas (cm²)" },
  { key: "tinggi", label: "Tinggi (cm)" },
  { key: "volume", label: "Volume (cm³)" },
  { key: "alasan", label: "Alasan" },
];

const baris = [1, 2, 3, 4, 5];

export default async function Materi7Peta9Step4AlternatifPenyelesaian({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getValue } = readAnswers(initialAnswers);
  const strip = await getPageImage("M7-P9-L4-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Saatnya Menunjukkan Berbagai Strategimu!" />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="D" title="Alternatif Penyelesaian" />
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <p className="m-0 flex-1 text-sm text-[#4B5563] leading-[1.7]">
            Tuliskan beberapa alternatif jawaban lain yang kamu temukan untuk menghasilkan volume 120 cm³.
          </p>
          <EditablePageImage
            imageKey="M7-P9-L4-1"
            materi={materi}
            peta={peta}
            step="4"
            urutan="1"
            src={strip}
            alt="Tiga limas: persegi, segitiga, dan segilima"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full sm:w-64 aspect-[591/196]"
          />
        </div>
        <TipBox>Ada banyak cara untuk memperoleh volume 120 cm³!</TipBox>
        <div className={`${cardClass} !p-3 sm:!p-4 overflow-x-auto`}>
          <table className="w-full min-w-[820px] border-separate border-spacing-y-2 text-sm">
            <thead>
              <tr className="text-left text-xs font-bold text-[#1E3A8A]">
                <th className="px-2 py-1 w-12">No.</th>
                {kolom.map((k) => (
                  <th key={k.key} className="px-2 py-1">{k.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {baris.map((r) => (
                <tr key={r}>
                  <td className="px-2 font-extrabold text-[#2563EB] text-center">{r}</td>
                  {kolom.map((k) => (
                    <td key={k.key} className="px-1">
                      <CellInput
                        name={`alt_${r}_${k.key}`}
                        label={`Alternatif ${r} - ${k.label}`}
                        value={getValue(`alt_${r}_${k.key}`)}
                        required={r === 1}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-[#FCE7F3] border border-[#FBCFE8] rounded-xl px-4 py-3 text-sm text-[#831843] leading-[1.6]">
          <strong>Catatan:</strong> Kamu tidak harus mengisi semua baris. Isi sesuai jumlah alternatif yang kamu temukan.
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
