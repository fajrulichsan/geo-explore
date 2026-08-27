import Link from "next/link";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const items = [
  { n: 1, label: "Blok Kayu (Kubus)" },
  { n: 2, label: "Tenda (Prisma Segitiga)" },
  { n: 3, label: "Akuarium" },
  { n: 4, label: "Rubik (Kubus)" },
  { n: 5, label: "Kotak Tisu" },
  { n: 6, label: "Kardus (Balok)" },
  { n: 7, label: "Cokelat (Prisma Segitiga)" },
  { n: 8, label: "Piramida (Limas Segiempat)" },
  { n: 9, label: "Mainan Limas Segitiga" },
  { n: 10, label: "Tumpukan Ubin" },
];

export default function Step4AmatiMedia({ materi, peta }: StepComponentProps) {
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={7} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          E
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Amati Media
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {items.map((item) => (
            <div key={item.n} className="flex flex-col items-center gap-2">
              <div className="relative w-full aspect-square rounded-2xl bg-[#F3F4F6] flex items-center justify-center p-4 text-center text-xs text-[#9CA3AF]">
                {item.label}
                <div className="absolute top-2 left-2 bg-[#2563EB] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-sm">
                  {item.n}
                </div>
              </div>
              <span className="text-xs font-semibold text-[#374151] text-center">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#EFF4FF] rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#2563EB] shadow-sm shrink-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
            <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
          </svg>
        </div>
        <p className="m-0 text-sm text-[#1D4ED8]">
          <span className="font-bold">Pikirkan:</span> Manakah dari benda-benda tersebut yang
          memiliki bentuk yang mirip? Coba kelompokkan dalam pikiranmu.
        </p>
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
