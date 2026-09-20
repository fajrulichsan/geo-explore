import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { Foto, HiddenFields, LangkahList, Nav, Pengantar, SectionTitle, TahapHeader, cardCls } from "./Materi6Peta4Parts";

const langkah = ["Scan marker.", "Pilih bangun.", "Amati model dari berbagai arah.", "Ubah ukuran (tinggi atau panjang prisma).", "Catat hasil pengamatan."];

export default async function Materi6Peta4Step5PetunjukAR({ materi, peta, step = "5", editFoto }: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={5} />
      <TahapHeader materi={materi} step={5} subtitle="Ayo Bereksplorasi 2 — Eksplorasi Menggunakan Augmented Reality (AR)" />

      <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-5 items-stretch">
        <Pengantar>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">Sekarang, lakukan kembali pengamatan menggunakan Augmented Reality (AR).</p>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">Pastikan hasil pengamatanmu sesuai dengan GeoGebra 3D.</p>
          <p className="m-0 text-sm font-semibold leading-[1.6] text-[#111827]">Catat seluruh hasil pengamatanmu.</p>
        </Pengantar>
        <Foto
          k="M6-P4-L5-1"
          img={img}
          ctx={ctx}
          urutan="1"
          natural
          alt="Tiga siswa mengamati kubus, balok, dan prisma menggunakan tablet AR"
          className="relative w-full min-h-24 rounded-[20px] overflow-hidden"
        />
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="E" judul="Petunjuk AR" hint="Pindai QR code atau buka tautan https://ar.bangundatar.id untuk membuka fitur AR." />
        <div className={`${cardCls} grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-6 items-center`}>
          <div className="flex flex-col items-center gap-2">
            <Foto k="M6-P4-L5-2" img={img} ctx={ctx} urutan="2" alt="Kode QR fitur AR" className="relative w-36 h-36" />
            <span className="text-xs font-semibold text-center text-[#2563EB]">https://ar.bangundatar.id</span>
          </div>
          <LangkahList items={langkah} />
        </div>
      </div>

      <Nav materi={materi} peta={peta} step={5} />
    </form>
  );
}
