import Link from "next/link";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const langkah = [
  "Buka aplikasi GeoGebra 3D Calculator di browser atau smartphone-mu.",
  "Gunakan tool Cube untuk membuat sebuah kubus berukuran 4x4x4.",
  "Pilih tool Net dan klik pada kubus untuk melihat jaring-jaringnya.",
  "Geser slider yang muncul untuk melihat animasi melipat dan membuka jaring-jaring.",
  "Amati setiap sisi kubus dan catat jumlah sisi, rusuk, dan titik sudutnya di buku catatanmu.",
];

const tips = [
  "Gunakan mouse/jari untuk memutar tampilan 3D dari berbagai sudut.",
  "Ubah warna setiap sisi pada jaring-jaring untuk membedakannya.",
  "Zoom in untuk melihat perpotongan rusuk lebih detail.",
];

export default function Peta4Step3EksplorasiGeoGebra({ materi, peta }: StepComponentProps) {
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={10} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4l3 2" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Eksplorasi GeoGebra 3D
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <div className="w-full aspect-video rounded-2xl bg-[#EFF4FF] flex items-center justify-center text-xs text-[#9CA3AF]">
              Ilustrasi GeoGebra 3D
            </div>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <h3 className="m-0 mb-4 flex items-center gap-2 text-lg font-bold text-[#111827]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
              </svg>
              Langkah-Langkah
            </h3>
            <ul className="m-0 p-0 flex flex-col gap-4 list-none">
              {langkah.map((l, i) => (
                <li key={l} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="m-0 text-[15px] leading-[1.6] text-[#374151]">{l}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-6">
            <h3 className="m-0 mb-4 flex items-center gap-2 text-base font-bold text-[#92400E]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
                <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
              </svg>
              Tips Eksplorasi
            </h3>
            <ul className="m-0 p-0 flex flex-col gap-3 list-none">
              {tips.map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="3" className="mt-0.5 flex-shrink-0">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm leading-[1.6] text-[#374151]">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col items-center text-center gap-3">
            <h4 className="m-0 text-sm font-bold text-[#374151]">Akses Langsung</h4>
            <div className="w-32 h-32 rounded-xl bg-[#F3F4F6] flex items-center justify-center text-xs text-[#9CA3AF]">
              QR Code
            </div>
            <p className="m-0 text-xs text-[#6B7280]">
              Scan QR Code ini dengan HP-mu untuk membuka GeoGebra 3D secara langsung.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/2`}
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
