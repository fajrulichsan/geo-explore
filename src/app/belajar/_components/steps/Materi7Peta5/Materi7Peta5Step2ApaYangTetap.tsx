import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";
import {
  HiddenStepFields,
  RadioPair,
  SectionTitle,
  StepFooter,
  StepTitle,
  TipBox,
  cardClass,
  readAnswers,
} from "./Materi7Peta5Parts";

const STEP = 2;

type Contoh = { key: PageImageKey; urutan: string; label: string };

const luasAlas: Contoh[] = [
  { key: "M7-P5-L2-1", urutan: "1", label: "Luas alas kecil" },
  { key: "M7-P5-L2-2", urutan: "2", label: "Luas alas sedang" },
  { key: "M7-P5-L2-3", urutan: "3", label: "Luas alas besar" },
];

const tinggi: Contoh[] = [
  { key: "M7-P5-L2-4", urutan: "4", label: "Tinggi rendah" },
  { key: "M7-P5-L2-5", urutan: "5", label: "Tinggi sedang" },
  { key: "M7-P5-L2-6", urutan: "6", label: "Tinggi tinggi" },
];

const besaran = [
  { key: "luas", label: "Luas alas" },
  { key: "tinggi", label: "Tinggi" },
  { key: "vprisma", label: "Volume prisma" },
  { key: "vlimas", label: "Volume satu limas" },
];

const penuangan = [
  { key: "banyak", label: "Banyak penuangan isi satu limas untuk memenuhi prisma" },
  { key: "rasio", label: "Rasio volume satu limas terhadap volume prisma" },
];

export default async function Materi7Peta5Step2ApaYangTetap({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getValue } = readAnswers(initialAnswers);
  const semua: { key: PageImageKey }[] = [...luasAlas, ...tinggi, { key: "M7-P5-L2-7" }];
  const urls = await Promise.all(semua.map((c) => getPageImage(c.key)));
  const srcOf = (k: PageImageKey) => urls[semua.findIndex((c) => c.key === k)];

  const renderRow = (items: Contoh[], ratio: string) => (
    <div className="grid grid-cols-3 gap-3">
      {items.map((c) => (
        <div key={c.key} className="flex flex-col items-center gap-1.5">
          <EditablePageImage
            imageKey={c.key}
            materi={materi}
            peta={peta}
            step="2"
            urutan={c.urutan}
            src={srcOf(c.key)}
            alt={c.label}
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName={`relative w-full ${ratio}`}
          />
          <span className="text-xs font-semibold text-[#4B5563] text-center">{c.label}</span>
        </div>
      ))}
    </div>
  );

  const renderTabel = (prefix: string) => (
    <div className="flex flex-col">
      {besaran.map((b) => (
        <RadioPair key={b.key} name={`${prefix}_${b.key}`} label={b.label} value={getValue(`${prefix}_${b.key}`)} />
      ))}
    </div>
  );

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Mengolah Data Hasil GeoGebra 3D dan Augmented Reality" />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="B" title="Apa yang Tetap? Apa yang Berubah?" color="amber" />
        <p className="m-0 text-sm text-[#4B5563]">Beri tanda centang pada kolom yang sesuai untuk setiap besaran.</p>

        <div className={`${cardClass} flex flex-col gap-4`}>
          <h3 className="m-0 text-sm font-extrabold text-[#166534]">Eksplorasi Luas Alas (tinggi tetap)</h3>
          {renderRow(luasAlas, "aspect-[2/1]")}
          <p className="m-0 text-xs font-bold text-[#92400E] bg-[#FEF9E7] rounded-lg px-3 py-2 w-fit">Tinggi tetap (sama)</p>
          {renderTabel("luas_alas")}
        </div>

        <div className={`${cardClass} flex flex-col gap-4`}>
          <h3 className="m-0 text-sm font-extrabold text-[#991B1B]">Eksplorasi Tinggi (luas alas tetap)</h3>
          {renderRow(tinggi, "aspect-[3/2]")}
          <p className="m-0 text-xs font-bold text-[#92400E] bg-[#FEF9E7] rounded-lg px-3 py-2 w-fit">Luas alas tetap (sama)</p>
          {renderTabel("tinggi")}
        </div>

        <div className={`${cardClass} flex flex-col gap-4`}>
          <h3 className="m-0 text-sm font-extrabold text-[#1E3A8A]">Visualisasi Penuangan Berulang (isi satu limas dituangkan berulang)</h3>
          <EditablePageImage
            imageKey="M7-P5-L2-7"
            materi={materi}
            peta={peta}
            step="2"
            urutan="7"
            src={srcOf("M7-P5-L2-7")}
            alt="Isi satu limas dituangkan berulang ke prisma"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full max-w-xl mx-auto aspect-[1606/334]"
          />
          <TipBox>Gunakan satu limas yang sama. Tuangkan isinya berulang hingga prisma terisi penuh.</TipBox>
          <div className="flex flex-col">
            {penuangan.map((p) => (
              <RadioPair key={p.key} name={`tuang_${p.key}`} label={p.label} value={getValue(`tuang_${p.key}`)} />
            ))}
          </div>
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
