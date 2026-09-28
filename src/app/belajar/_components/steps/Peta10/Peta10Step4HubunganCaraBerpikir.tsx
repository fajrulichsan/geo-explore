import Link from "next/link";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const alur = [
  { label: "Mengamati", color: "#0EA5E9", bg: "#F0F9FF", desc: "Mengamati bangun ruang sisi datar dan sifat-sifatnya." },
  {
    label: "Menemukan Sifat",
    color: "#16A34A",
    bg: "#F0FDF4",
    desc: "Mencatat berbagai sifat seperti bentuk sisi, pasangan bidang sisi sejajar, jumlah sisi, rusuk, titik sudut, dan lainnya.",
  },
  {
    label: "Mengelompokkan",
    color: "#D97706",
    bg: "#FFFBEB",
    desc: "Membuat beberapa klasifikasi berdasarkan dasar yang dipilih.",
  },
  {
    label: "Membandingkan",
    color: "#2563EB",
    bg: "#EFF6FF",
    desc: "Membandingkan hasil klasifikasi yang berbeda dan memilih strategi yang paling sesuai.",
  },
  {
    label: "Memberi Alasan",
    color: "#16A34A",
    bg: "#F0FDF4",
    desc: "Memberikan alasan matematis untuk mendukung klasifikasi yang dibuat.",
  },
  {
    label: "Menarik Kesimpulan",
    color: "#DC2626",
    bg: "#FEF2F2",
    desc: "Menemukan prinsip umum tentang cara mengklasifikasikan bangun ruang sisi datar.",
  },
];

const caraBerpikir = [
  "memilih dasar klasifikasi yang sesuai tujuan.",
  "membandingkan beberapa hasil klasifikasi.",
  "memberikan alasan matematis yang logis.",
  "mengevaluasi kelebihan dan kekurangan setiap strategi.",
  "memperbaiki strategi jika diperlukan.",
  "menarik kesimpulan dari berbagai strategi yang telah digunakan.",
];

export default function Peta10Step4HubunganCaraBerpikir({ materi, peta }: StepComponentProps) {
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={6} />
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
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              D
            </div>
            <h2 className="m-0 text-base font-bold text-[#2563EB]">Hubungan Antar Konsep</h2>
          </div>

          <div className="flex flex-col">
            {alur.map((a, i) => (
              <div key={a.label} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-extrabold flex-shrink-0"
                    style={{ backgroundColor: a.bg, color: a.color, border: `1.5px solid ${a.color}` }}
                  >
                    {i + 1}
                  </div>
                  {i < alur.length - 1 && <div className="w-px flex-1 bg-[#E5E7EB] my-1" />}
                </div>
                <div className="pb-4">
                  <div className="text-sm font-bold" style={{ color: a.color }}>
                    {a.label}
                  </div>
                  <p className="m-0 mt-1 text-[13px] leading-[1.5] text-[#4B5563]">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              E
            </div>
            <h2 className="m-0 text-base font-bold text-[#15803D]">Cara Berpikir yang Telah Dipelajari</h2>
          </div>
          <p className="m-0 text-sm leading-[1.6] text-[#166534]">
            Setelah melalui Tahap 1–6 dan Tantangan Open-Ended, saya mampu:
          </p>
          <ul className="m-0 p-0 flex flex-col gap-2.5 list-none">
            {caraBerpikir.map((c) => (
              <li key={c} className="flex items-start gap-2.5 text-sm text-[#374151]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4" className="flex-shrink-0 mt-0.5">
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                </svg>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/3`}
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
