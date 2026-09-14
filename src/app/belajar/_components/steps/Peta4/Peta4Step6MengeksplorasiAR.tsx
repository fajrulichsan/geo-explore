import Link from "next/link";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

const langkah = [
  { n: 1, label: "Scan QR Code.", imageKey: "M1-P4-L6-1" },
  { n: 2, label: "Arahkan kamera ke marker.", imageKey: "M1-P4-L6-2" },
  { n: 3, label: "Putar, perbesar, atau geser model.", imageKey: "M1-P4-L6-3" },
  { n: 4, label: "Lengkapi hasil pengamatan.", imageKey: "M1-P4-L6-4" },
] satisfies { n: number; label: string; imageKey: PageImageKey }[];

const tipsAR = [
  "Putar model untuk melihat setiap sisi.",
  "Perhatikan sisi yang sebelumnya belum terlihat.",
  "Geser perangkat jika ada bagian yang terhalang.",
  "Perbesar bagian yang diperlukan untuk melihat detail.",
  "Amati sisi, rusuk, titik sudut, dan pasangan bidang sejajar.",
  "Pastikan bagian yang belum terlihat pada GeoGebra dapat diamati melalui AR.",
];

const halDiamati = [
  "Bentuk sisi",
  "Susunan sisi",
  "Pasangan bidang sejajar",
  "Bentuk alas",
  "Jumlah sisi",
  "Jumlah rusuk",
  "Jumlah titik sudut",
  "Informasi tambahan",
];

export default async function Peta4Step6MengeksplorasiAR({ materi, peta, step = "6", editFoto }: StepComponentProps) {
  const langkahImages = await Promise.all(langkah.map((l) => getPageImage(l.imageKey)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={10} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4l3 2" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Ayo Mengeksplorasi dengan Augmented Reality (AR)</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Melengkapi Hasil Pengamatan
          </div>
        </div>
        <div className="bg-[#EFF4FF] border border-[#DBEAFE] rounded-2xl p-4 flex items-start gap-3 max-w-xl">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
          </svg>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            <span className="font-bold text-[#2563EB]">Ingat! </span>
            Gunakan bangun ruang yang sama seperti yang kamu amati menggunakan GeoGebra 3D pada halaman
            sebelumnya.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <h2 className="m-0 text-lg font-bold text-[#111827]">Melengkapi Hasil Pengamatan</h2>
        </div>
        <p className="m-0 text-sm leading-[1.6] text-[#374151] max-w-2xl">
          Gunakan Augmented Reality (AR) untuk melengkapi informasi tentang bangun ruang yang telah kamu
          amati menggunakan GeoGebra 3D.
        </p>
        <h3 className="m-0 text-xs font-bold text-[#9CA3AF] uppercase tracking-wider">Langkah-Langkah</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {langkah.map((l, i) => (
            <div
              key={l.n}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-3 text-center flex flex-col items-center gap-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <div className="relative w-full">
                <div className="absolute top-1.5 left-1.5 w-5 h-5 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[10px] z-10">
                  {l.n}
                </div>
                <EditablePageImage
                  imageKey={l.imageKey}
                  materi={materi}
                  peta={peta}
                  step={step}
                  urutan={String(i + 1)}
                  src={langkahImages[i]}
                  alt={l.label}
                  editable={editFoto}
                  containerClassName="relative w-full aspect-square rounded-xl overflow-hidden bg-[#F3F4F6]"
                />
              </div>
              <p className="m-0 text-sm font-semibold text-[#374151]">{l.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-6">
            <h3 className="m-0 mb-4 flex items-center gap-2 text-base font-bold text-[#92400E]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
                <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
              </svg>
              Tips Eksplorasi AR
            </h3>
            <ul className="m-0 p-0 flex flex-col gap-3 list-none">
              {tipsAR.map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="3" className="mt-0.5 flex-shrink-0">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm leading-[1.6] text-[#374151]">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <h3 className="m-0 mb-4 flex items-center gap-2 text-base font-bold text-[#111827]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
              Hal yang Diamati
            </h3>
            <ul className="m-0 p-0 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 list-none">
              {halDiamati.map((h, i) => (
                <li key={h} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#EFF4FF] text-[#2563EB] flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-sm text-[#374151]">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/5`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
