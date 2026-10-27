import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import QrLink from "@/app/belajar/_components/QrLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { Fragment } from "react";
import FlowConnector from "@/app/belajar/_components/FlowConnector";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

const langkah = [
  "Pindai QR Code GeoGebra 3D.",
  "Pilih model limas segiempat.",
  "Putar model dari berbagai arah.",
  "Buka model menjadi jaring-jaring.",
  "Amati bentuk alas dan sisi-sisi tegaknya.",
  "Amati ukuran yang diperlukan untuk menentukan luas alas dan setiap sisi tegak.",
  "Catat hasil pengamatanmu.",
];

const yangDiamati = [
  "Bentuk alas.",
  "Bentuk setiap sisi tegak.",
  "Banyak sisi tegak.",
  "Ukuran alas.",
  "Ukuran yang diperlukan pada sisi tegak.",
  "Luas alas.",
  "Luas alas dan tiap sisi tegak.",
];

const tips = [
  "Gunakan fitur putar (drag) untuk melihat setiap sisi dengan jelas.",
  "Gunakan fitur jaring-jaring untuk memastikan seluruh sisi telah terbuka.",
  "Perhatikan perbedaan antara tinggi limas dan tinggi sisi tegak (segitiga).",
];

const tahapTransisi = ["Limas segiempat", "Sedikit terbuka", "Lebih terbuka", "Jaring-jaring limas"];

export default async function Materi4Peta4Step2GeoGebra3D({ materi, peta, step = "2", editFoto }: StepComponentProps) {
  const [gambarTransisi, gambarQr] = await Promise.all([
    Promise.all(tahapTransisi.map((_, i) => getPageImage(`M4-P4-L2-${i + 1}` as PageImageKey))),
    getPageImage("qr-geogebra"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={6} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          A
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Eksplorasi Menggunakan GeoGebra 3D
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 flex flex-col gap-3">
        <span className="text-sm font-bold text-[#1D4ED8]">Transisi Limas &rarr; Jaring-Jaring</span>
        <div className="flex flex-col sm:flex-row sm:items-start gap-3">
          {tahapTransisi.map((t, i) => (
            <Fragment key={t}>
              <div className="flex-1 flex flex-col items-center gap-2">
                <EditablePageImage
                  imageKey={`M4-P4-L2-${i + 1}` as PageImageKey}
                  materi={materi}
                  peta={peta}
                  step={step}
                  urutan={String(i + 1)}
                  src={gambarTransisi[i]}
                  alt={t}
                  editable={editFoto}
                  imageClassName="object-contain"
                  containerClassName="relative w-full aspect-[4/3]"
                />
                <span className="text-center text-[11px] sm:text-xs font-semibold text-[#6B7280]">
                  {i + 1}. {t}
                </span>
              </div>
              {i < tahapTransisi.length - 1 && <FlowConnector kind="arrow" panahGambar />}
            </Fragment>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 flex flex-col gap-4">
          <span className="text-sm font-bold text-[#111827]">Langkah Kegiatan</span>
          <div className="flex flex-col gap-3">
            {langkah.map((l, i) => (
              <div key={l} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {i + 1}
                </div>
                <span className="text-sm text-[#374151] leading-[1.5]">{l}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 pt-4 border-t border-[#E5E7EB]">
            <QrLink href="/geogebra" src={gambarQr} alt="QR code menuju model GeoGebra 3D limas" label="Scan atau klik: GeoGebra 3D" />
            <span className="text-sm font-bold text-[#2563EB]">QR Code GeoGebra 3D</span>
          </div>
        </div>

        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-5 sm:p-6 flex flex-col gap-3">
          <span className="text-sm font-bold text-[#1D4ED8]">Yang Diamati (GeoGebra 3D)</span>
          {yangDiamati.map((y) => (
            <div key={y} className="flex items-center gap-2.5 text-sm text-[#374151]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0">
                <rect x="3" y="3" width="18" height="18" rx="4" />
              </svg>
              {y}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-xl py-3.5 px-[18px] flex flex-col gap-1.5">
        <p className="m-0 text-sm font-bold text-[#DC2626]">Tips!</p>
        <ul className="m-0 pl-4 flex flex-col gap-1 text-sm text-[#78350F] leading-[1.5] list-disc">
          {tips.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/1`} />
        <NextStepButton />
      </div>
    </form>
  );
}
