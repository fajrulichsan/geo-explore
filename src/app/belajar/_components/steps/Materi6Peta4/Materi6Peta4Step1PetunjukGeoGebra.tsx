import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { Foto, HiddenFields, LangkahList, Nav, Pengantar, SectionTitle, TahapHeader, cardCls } from "./Materi6Peta4Parts";

const langkah = [
  "Buka GeoGebra 3D.",
  "Pilih bangun ruang (kubus, balok, atau prisma segitiga).",
  "Ubah ukuran panjang, lebar, dan tinggi (atau panjang prisma).",
  "Amati perubahan banyak kubus satuan atau penampang.",
  "Catat hasil pengamatan.",
];

export default async function Materi6Peta4Step1PetunjukGeoGebra({ materi, peta, step = "1", editFoto }: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={1} />
      <TahapHeader materi={materi} step={1} subtitle="Ayo Bereksplorasi 1 — Eksplorasi Menggunakan GeoGebra 3D" />

      <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-5 items-stretch">
        <Pengantar>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">Pada tahap ini kamu akan mengumpulkan data menggunakan GeoGebra 3D.</p>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">Untuk kubus dan balok, amati banyaknya kubus satuan pada setiap lapisan.</p>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Untuk prisma segitiga, amati satu penampang segitiga yang sama yang digeser sepanjang panjang prisma.
          </p>
          <p className="m-0 text-sm font-semibold leading-[1.6] text-[#111827]">Catat seluruh hasil pengamatanmu.</p>
        </Pengantar>
        <Foto
          k="M6-P4-L1-1"
          img={img}
          ctx={ctx}
          urutan="1"
          natural
          alt="Tiga siswa mengamati GeoGebra 3D dengan kubus, balok, dan prisma di atas meja"
          className="relative w-full min-h-24 rounded-[20px] overflow-hidden"
        />
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="A" judul="Petunjuk GeoGebra 3D" hint="Scan kode QR, lalu ikuti langkah-langkah berikut." />
        <div className={`${cardCls} grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-6 items-center`}>
          <div className="flex flex-col items-center gap-2">
            <Foto k="M6-P4-L1-2" img={img} ctx={ctx} urutan="2" alt="Kode QR GeoGebra 3D" className="relative w-36 h-36" />
            <span className="text-xs font-semibold text-center text-[#2563EB]">Scan untuk membuka GeoGebra 3D</span>
          </div>
          <LangkahList items={langkah} />
        </div>
      </div>

      <Nav materi={materi} peta={peta} step={1} />
    </form>
  );
}
