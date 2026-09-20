import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import {
  HiddenStepFields,
  SectionTitle,
  StepFooter,
  StepTitle,
  TipBox,
  cardClass,
} from "./Materi7Peta4Parts";

const STEP = 2;

const petunjuk = [
  "Buka GeoGebra 3D (melalui tautan di e-module).",
  "Pilih objek prisma dan limas.",
  "Gunakan slider “Luas Alas (L)” dan “Tinggi (t)” untuk mengubah ukuran.",
  "Amati perubahan bentuk dan nilai volume pada panel.",
  "Catat hasil pengamatan pada tabel.",
  "Ulangi dengan beberapa ukuran.",
];

export default async function Materi7Peta4Step2LangkahGeogebra({
  materi,
  peta,
  editFoto,
}: StepComponentProps) {
  const [gambarBagian1, gambarBagian2] = await Promise.all([
    getPageImage("M7-P4-L2-1"),
    getPageImage("M7-P4-L2-2"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Eksplorasi Menggunakan GeoGebra 3D" />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="C" title="Petunjuk GeoGebra 3D" />
        <div className={`${cardClass} flex flex-col gap-3`}>
          {petunjuk.map((t, i) => (
            <div key={t} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
              <p className="m-0 text-sm text-[#374151] leading-[1.6]">{t}</p>
            </div>
          ))}
          <TipBox>Scan QR pada lembar worksheet, atau gunakan tautan GeoGebra 3D di e-module, untuk membuka model.</TipBox>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="D" title="Langkah Eksplorasi" color="amber" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className={`${cardClass} !p-4 flex flex-col gap-3`}>
            <div className="rounded-xl bg-[#1E3A8A] text-white px-4 py-2.5 text-sm font-bold">
              Bagian 1 · Ubah Luas Alas <span className="font-medium text-white/80">(tinggi tetap)</span>
            </div>
            <ol className="m-0 pl-5 list-decimal flex flex-col gap-1 text-sm text-[#374151] leading-[1.5]">
              <li>Tetapkan tinggi tetap, misal t = 3.</li>
              <li>Ubah luas alas (L) dengan slider.</li>
              <li>Amati perubahan volume.</li>
            </ol>
            <EditablePageImage
              imageKey="M7-P4-L2-1"
              materi={materi}
              peta={peta}
              step="2"
              urutan="1"
              src={gambarBagian1}
              alt="Prisma dan limas dengan tinggi tetap (t = 3) dan luas alas berubah (L)"
              editable={editFoto}
              natural
              containerClassName="relative w-full min-h-24 overflow-hidden"
            />
            <TipBox>Apa yang kamu amati? Tuliskan pola yang kamu temukan.</TipBox>
            <ul className="m-0 pl-5 list-disc flex flex-col gap-1 text-sm text-[#4B5563]">
              <li>Volume prisma bertambah/berkurang</li>
              <li>Volume limas bertambah/berkurang</li>
              <li>Catat data pada tabel</li>
            </ul>
          </div>
          <div className={`${cardClass} !p-4 flex flex-col gap-3`}>
            <div className="rounded-xl bg-[#1E3A8A] text-white px-4 py-2.5 text-sm font-bold">
              Bagian 2 · Ubah Tinggi <span className="font-medium text-white/80">(luas alas tetap)</span>
            </div>
            <ol className="m-0 pl-5 list-decimal flex flex-col gap-1 text-sm text-[#374151] leading-[1.5]">
              <li>Tetapkan luas alas tetap, misal L = 6.</li>
              <li>Ubah tinggi (t) dengan slider.</li>
              <li>Amati perubahan volume.</li>
            </ol>
            <EditablePageImage
              imageKey="M7-P4-L2-2"
              materi={materi}
              peta={peta}
              step="2"
              urutan="2"
              src={gambarBagian2}
              alt="Prisma dan limas dengan luas alas tetap (L = 6) dan tinggi berubah (t)"
              editable={editFoto}
              natural
              containerClassName="relative w-full min-h-24 overflow-hidden"
            />
            <TipBox>Apa yang kamu amati? Tuliskan pola yang kamu temukan.</TipBox>
            <ul className="m-0 pl-5 list-disc flex flex-col gap-1 text-sm text-[#4B5563]">
              <li>Volume prisma bertambah/berkurang</li>
              <li>Volume limas bertambah/berkurang</li>
              <li>Catat data pada tabel</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="E" title="Contoh di GeoGebra 3D" color="green" />
        <div className={`${cardClass} flex flex-col gap-3`}>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">Contoh tampilan panel GeoGebra 3D saat luas alas dan tinggi diubah:</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { k: "Luas alas (L)", v: "6" },
              { k: "Tinggi (t)", v: "4" },
              { k: "Volume prisma (Vₚ)", v: "32" },
              { k: "Volume limas (Vₗ)", v: "10,67" },
            ].map((c) => (
              <div key={c.k} className="rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] px-3 py-2.5 text-center">
                <div className="text-xs font-semibold text-[#4B5563]">{c.k}</div>
                <div className="text-lg font-extrabold text-[#166534]">{c.v}</div>
              </div>
            ))}
          </div>
          <TipBox>Gunakan data hasil eksplorasimu sendiri. Amati nilai L, t, Vₚ, dan Vₗ pada panel tersebut.</TipBox>
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
