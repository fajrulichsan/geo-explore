import Link from "next/link";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const kataKunci = [
  "Bangun ruang sisi datar",
  "Bentuk sisi yang dipilih sebagai alas",
  "Kubus",
  "Pasangan bidang sisi sejajar",
  "Balok",
  "Jumlah sisi",
  "Prisma",
  "Jumlah rusuk",
  "Limas",
  "Jumlah titik sudut",
  "Klasifikasi",
  "Sifat-sifat lain",
  "Bentuk dan susunan sisi",
  "Alasan matematis",
];

const ingat = [
  "Suatu kumpulan bangun ruang dapat diklasifikasikan dengan lebih dari satu cara yang benar.",
  "Cara klasifikasi yang baik adalah cara yang menggunakan dasar yang jelas, diterapkan secara konsisten, dan didukung oleh alasan matematis yang logis.",
  "Kelompok bangun yang terbentuk bergantung pada dasar klasifikasi yang digunakan.",
];

export default function Peta10Step5KataKunciIngat({ materi, peta }: StepComponentProps) {
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={6} />
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

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 flex flex-col gap-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              F
            </div>
            <h2 className="m-0 text-base font-bold text-[#6D28D9]">Kata Kunci</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {kataKunci.map((k) => (
              <div
                key={k}
                className="flex items-center gap-2 bg-[#F5F3FF] border border-[#DDD6FE] rounded-lg py-2 px-3 text-[13px] font-semibold text-[#5B21B6]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] flex-shrink-0" />
                {k}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-[20px] p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#D97706] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              G
            </div>
            <h2 className="m-0 text-base font-bold text-[#92400E]">Ingat!</h2>
          </div>
          <ul className="m-0 p-0 flex flex-col gap-3 list-none">
            {ingat.map((i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm leading-[1.6] text-[#78350F]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FACC15" stroke="#D97706" strokeWidth="1" className="flex-shrink-0 mt-0.5">
                  <path d="M12 2l2.6 6.9L22 10l-5.7 4.9L18 22l-6-3.6L6 22l1.7-7.1L2 10l7.4-1.1L12 2z" />
                </svg>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/4`}
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
