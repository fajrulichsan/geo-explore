import Link from "next/link";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const dasar = [
  {
    title: "Bentuk dan susunan sisi",
    desc: "Bentuk dan susunan semua sisinya.",
    color: "#2563EB",
    bg: "#EFF6FF",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
        <rect x="3" y="3" width="8" height="8" rx="1" />
        <rect x="13" y="13" width="8" height="8" rx="1" />
      </svg>
    ),
  },
  {
    title: "Bentuk sisi yang dipilih sebagai alas",
    desc: "Bentuk sisi yang dipilih sebagai alas ditentukan sesuai posisi bangun yang diamati.",
    color: "#16A34A",
    bg: "#F0FDF4",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2">
        <path d="M3 8l9-4 9 4-9 4-9-4z" />
        <path d="M3 8v8l9 4 9-4V8" />
      </svg>
    ),
  },
  {
    title: "Pasangan bidang sisi sejajar",
    desc: "Pasangan sisi yang sejajar dan kongruen.",
    color: "#0EA5E9",
    bg: "#F0F9FF",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2">
        <path d="M4 6h16M4 12h16M4 18h10" />
      </svg>
    ),
  },
  {
    title: "Jumlah sisi",
    desc: "Banyak bidang sisi yang membatasi bangun.",
    color: "#7C3AED",
    bg: "#F5F3FF",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2">
        <rect x="4" y="4" width="4" height="4" rx="1" />
        <rect x="10" y="4" width="4" height="4" rx="1" />
        <rect x="16" y="4" width="4" height="4" rx="1" />
        <rect x="4" y="10" width="4" height="4" rx="1" />
        <rect x="10" y="10" width="4" height="4" rx="1" />
        <rect x="16" y="10" width="4" height="4" rx="1" />
      </svg>
    ),
  },
  {
    title: "Jumlah rusuk",
    desc: "Banyak rusuk yang dimiliki bangun.",
    color: "#DC2626",
    bg: "#FEF2F2",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2">
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="6" r="2" />
        <path d="M7.5 16.5L16.5 7.5" />
      </svg>
    ),
  },
  {
    title: "Jumlah titik sudut",
    desc: "Banyak titik sudut yang dimiliki bangun.",
    color: "#D97706",
    bg: "#FFFBEB",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: "Sifat-sifat lain yang relevan",
    desc: "Sifat atau hal lain yang dapat membantu pengelompokan.",
    color: "#4B5563",
    bg: "#F9FAFB",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#4B5563">
        <circle cx="5" cy="12" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="19" cy="12" r="2" />
      </svg>
    ),
  },
];

export default function Peta10Step2DasarKlasifikasi({ materi, peta }: StepComponentProps) {
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={6} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
            <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Rangkuman: Bangun Ruang Sisi Datar</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
          Submateri 1 – Bangun Ruang Sisi Datar
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Dasar Klasifikasi yang Dapat Digunakan
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {dasar.map((d) => (
            <div
              key={d.title}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 flex flex-col gap-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: d.bg }}
              >
                {d.icon}
              </div>
              <h3 className="m-0 text-sm font-bold" style={{ color: d.color }}>
                {d.title}
              </h3>
              <p className="m-0 text-[13px] leading-[1.5] text-[#4B5563]">{d.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-xl py-3 px-4 flex items-center gap-2.5 text-[#92400E] text-[13px] font-semibold">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#FACC15" stroke="#D97706" strokeWidth="1">
            <path d="M9 21h6M12 3a6 6 0 00-3.5 10.9c.4.3.5.7.5 1.1v.5h6v-.5c0-.4.1-.8.5-1.1A6 6 0 0012 3z" />
          </svg>
          Dasar klasifikasi dapat dipilih sesuai tujuan pengelompokan.
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/1`}
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
