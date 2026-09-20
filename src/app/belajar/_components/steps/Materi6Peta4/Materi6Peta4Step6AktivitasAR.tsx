import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { BANGUN, Foto, HiddenFields, Nav, SectionTitle, TahapHeader, cardCls } from "./Materi6Peta4Parts";

const kegiatan = {
  kubus: [
    "Arahkan kamera ke marker kubus.",
    "Putar model ke berbagai arah.",
    "Amati banyak kubus satuan pada setiap lapisan.",
    "Ubah tinggi model.",
    "Hitung banyak kubus seluruhnya.",
  ],
  balok: [
    "Arahkan kamera ke marker balok.",
    "Putar model ke berbagai arah.",
    "Amati banyak kubus satuan setiap lapisan.",
    "Ubah tinggi model.",
    "Hitung banyak kubus seluruhnya.",
  ],
  prisma: [
    "Arahkan kamera ke marker prisma.",
    "Putar model ke berbagai arah.",
    "Amati penampang segitiga.",
    "Geser panjang prisma.",
    "Amati perubahan volume prisma secara visual.",
  ],
};

export default async function Materi6Peta4Step6AktivitasAR({ materi, peta, step = "6" }: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto: false };

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={6} />
      <TahapHeader materi={materi} step={6} subtitle="Ayo Bereksplorasi 2 — Eksplorasi Menggunakan Augmented Reality (AR)" />

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="F" judul="Aktivitas di AR" hint="Lakukan kegiatan berikut pada marker setiap bangun ruang." />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {BANGUN.map((b) => (
            <div key={b.nama} className={`${cardCls} flex flex-col gap-4 overflow-hidden`}>
              <span className="w-fit rounded-full text-white text-xs font-bold px-4 py-1" style={{ backgroundColor: b.warna }}>
                {b.judul}
              </span>
              <ul className="m-0 p-0 list-none flex flex-col gap-2">
                {kegiatan[b.nama].map((k) => (
                  <li key={k} className="flex items-start gap-2 text-sm text-[#374151] leading-[1.5]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={b.warna} strokeWidth="3" className="mt-0.5 flex-shrink-0">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {k}
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl bg-[#1F2937] p-3 flex items-center justify-center">
                <Foto k={b.icon} img={img} ctx={ctx} alt={`Tampilan AR ${b.iconAlt}`} className="relative w-full h-28 rounded-xl bg-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Nav materi={materi} peta={peta} step={6} />
    </form>
  );
}
