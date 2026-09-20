import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { BANGUN, Foto, HiddenFields, Nav, SectionTitle, TahapHeader, answerText, cardCls, inputCls } from "./Materi6Peta4Parts";

const contoh = [
  { key: "M6-P4-L11-1", urutan: "1", alt: "Contoh kubus" },
  { key: "M6-P4-L11-2", urutan: "2", alt: "Contoh balok" },
  { key: "M6-P4-L11-3", urutan: "3", alt: "Contoh prisma segitiga" },
] as const;

export default async function Materi6Peta4Step11DugaanAwalKelompok({ materi, peta, step = "11", editFoto, initialAnswers }: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };
  const getValue = (key: string) => answerText(initialAnswers, key);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={11} />
      <TahapHeader materi={materi} step={11} subtitle="Ayo Bereksplorasi 3 — Bandingkan Hasil dan Susun Dugaan Awal" />

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="L" judul="Dugaan Awal Kelompok" hint="Gunakan hasil perbandinganmu untuk menentukan pola dan dugaan awal pada tiap bangun." />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {BANGUN.map((b, i) => (
            <div key={b.nama} className={`${cardCls} flex flex-col gap-3`} style={{ backgroundColor: b.bg, borderColor: b.border }}>
              <span className="text-base font-extrabold" style={{ color: b.warna }}>
                {b.judul}
              </span>
              <label className="text-sm font-bold text-[#374151]">Volume dipengaruhi oleh:</label>
              <textarea
                name={`answers.dugaan_${b.nama}`}
                defaultValue={getValue(`dugaan_${b.nama}`)}
                rows={3}
                placeholder="Ketik jawabanmu di sini..."
                required
                className={`${inputCls} resize-y`}
              />
              <span className="text-sm font-bold text-[#374151]">Contoh:</span>
              <Foto
                k={contoh[i].key}
                img={img}
                ctx={ctx}
                urutan={contoh[i].urutan}
                alt={contoh[i].alt}
                className="relative w-full h-28 rounded-xl bg-white"
              />
            </div>
          ))}
        </div>

        <div className={`${cardCls} flex flex-col gap-4`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-[#2563EB]">Apa yang tetap?</label>
              <input name="answers.yang_tetap" defaultValue={getValue("yang_tetap")} placeholder="Ketik jawabanmu di sini..." required className={inputCls} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-[#2563EB]">Apa yang berubah?</label>
              <input name="answers.yang_berubah" defaultValue={getValue("yang_berubah")} placeholder="Ketik jawabanmu di sini..." required className={inputCls} />
            </div>
          </div>
          <div className="rounded-2xl bg-[#F5F3FF] border border-[#DDD6FE] p-4 flex flex-col gap-2.5">
            <span className="text-sm font-bold text-[#5B21B6]">Dugaan Awal Kelompok</span>
            <span className="text-sm text-[#374151]">Tampaknya volume dipengaruhi oleh:</span>
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-2.5 items-center">
              <input name="answers.dugaan_kelompok_1" defaultValue={getValue("dugaan_kelompok_1")} placeholder="..." required className={inputCls} />
              <span className="text-sm font-bold text-[#374151] text-center">dan</span>
              <input name="answers.dugaan_kelompok_2" defaultValue={getValue("dugaan_kelompok_2")} placeholder="..." required className={inputCls} />
            </div>
          </div>
        </div>
      </div>

      <Nav materi={materi} peta={peta} step={11} />
    </form>
  );
}
