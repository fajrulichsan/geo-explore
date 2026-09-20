import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { Foto, HiddenFields, Nav, SectionTitle, TahapHeader, cardCls } from "./Materi6Peta4Parts";

export default async function Materi6Peta4Step2LangkahEksplorasi({ materi, peta, step = "2", editFoto }: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={2} />
      <TahapHeader materi={materi} step={2} subtitle="Ayo Bereksplorasi 1 — Eksplorasi Menggunakan GeoGebra 3D" />

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="B" judul="Langkah Eksplorasi" hint="Ikuti langkah berikut untuk setiap bangun ruang." />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className={`${cardCls} flex flex-col gap-4`}>
            <span className="w-fit rounded-full bg-[#2563EB] text-white text-xs font-bold px-4 py-1">
              Kubus dan Balok (menggunakan kubus satuan)
            </span>
            <p className="m-0 text-sm font-semibold text-[#111827]">1. Amati banyaknya kubus pada satu lapisan.</p>
            <Foto k="M6-P4-L2-1" img={img} ctx={ctx} urutan="1" natural alt="Satu lapisan kubus dengan tinggi 1" className="relative w-full min-h-16" />
            <p className="m-0 text-sm font-semibold text-[#111827]">2. Amati banyaknya lapisan.</p>
            <Foto k="M6-P4-L2-2" img={img} ctx={ctx} urutan="2" natural alt="Kubus dengan lapisan pertama, kedua, dan ketiga" className="relative w-full min-h-16" />
            <div className="flex items-center gap-3">
              <p className="m-0 text-sm font-semibold text-[#111827]">3. Hitunglah seluruh kubus satuan.</p>
              <Foto k="M6-P4-L2-3" img={img} ctx={ctx} urutan="3" alt="Kubus satuan" className="relative w-10 h-10 flex-shrink-0" />
            </div>
          </div>
          <div className={`${cardCls} flex flex-col gap-4`}>
            <span className="w-fit rounded-full bg-[#1E3A8A] text-white text-xs font-bold px-4 py-1">
              Prisma Segitiga (mengamati penampang)
            </span>
            <p className="m-0 text-sm font-semibold text-[#111827]">1. Amati penampang segitiga yang digeser sepanjang panjang prisma.</p>
            <Foto
              k="M6-P4-L2-4"
              img={img}
              ctx={ctx}
              urutan="4"
              natural
              alt="Penampang segitiga pada posisi 1, 2, dan 3, lalu prisma yang terbentuk"
              className="relative w-full min-h-16"
            />
            <p className="m-0 text-xs text-[#374151] bg-[#EFF4FF] border border-[#BFDBFE] rounded-xl px-3.5 py-2.5 leading-[1.5]">
              Penampang segitiga yang digunakan pada setiap posisi sejajar dan sama bentuk serta luasnya.
            </p>
          </div>
        </div>
      </div>

      <Nav materi={materi} peta={peta} step={2} />
    </form>
  );
}
