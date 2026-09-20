import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { Foto, HiddenFields, Nav, SectionTitle, TabelData, TahapHeader, answerText, cardCls } from "./Materi6Peta4Parts";

const pernyataan = [
  { key: "banding_1", label: "Hasil AR sama dengan GeoGebra 3D." },
  { key: "banding_2", label: "Bentuk dan luas alas/penampang tetap, meskipun tinggi/panjang berubah." },
  { key: "banding_3", label: "Banyak kubus pada kubus dan balok bertambah sesuai bertambahnya tinggi." },
  { key: "banding_4", label: "Volume prisma segitiga bergantung pada panjang prismanya." },
  { key: "banding_5", label: "Data dari AR membantu menentukan pola dan dugaan awal." },
];

export default async function Materi6Peta4Step8TabelDataAR({ materi, peta, step = "8", editFoto, initialAnswers }: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };
  const getValue = (key: string) => answerText(initialAnswers, key);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={8} />
      <TahapHeader materi={materi} step={8} subtitle="Ayo Bereksplorasi 2 — Eksplorasi Menggunakan Augmented Reality (AR)" />

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="H" judul="Tabel Data – Hasil Eksplorasi AR" hint="Isilah tabel berikut sesuai hasil pengamatanmu di AR." />
        <TabelData prefix="ar" img={img} ctx={ctx} dataPrisma="Volume (perubahan saat panjang prisma diubah)" getValue={getValue} />
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="I" judul="Bandingkan GeoGebra dan AR" hint="Berilah tanda centang (✓) pada pernyataan yang sesuai." />
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5 items-end">
          <div className={`${cardCls} flex flex-col gap-3.5`}>
            {pernyataan.map((p) => (
              <label key={p.key} className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  name={`answers.${p.key}`}
                  defaultChecked={Boolean(initialAnswers?.[p.key])}
                  className="mt-0.5 w-4 h-4 flex-shrink-0 accent-[#2563EB]"
                />
                <span className="text-sm text-[#374151] leading-[1.5]">{p.label}</span>
              </label>
            ))}
          </div>
          <Foto
            k="M6-P4-L8-1"
            img={img}
            ctx={ctx}
            urutan="1"
            natural
            alt="Siswa menunjuk dengan balon: Ayo gunakan hasil pengamatanmu untuk menjawab pertanyaan di halaman 3"
            className="relative w-full max-w-sm mx-auto min-h-16 rounded-[20px] overflow-hidden bg-white"
          />
        </div>
      </div>

      <Nav materi={materi} peta={peta} step={8} />
    </form>
  );
}
