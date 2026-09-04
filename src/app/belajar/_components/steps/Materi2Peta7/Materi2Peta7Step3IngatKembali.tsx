import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const konsep = [
  {
    label: "Satu bangun ruang dapat mempunyai lebih dari satu jaring-jaring.",
    bg: "bg-[#EFFDF4]",
    border: "border-[#BBF0D3]",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2">
        <rect x="3" y="9" width="6" height="6" rx="1" />
        <rect x="15" y="9" width="6" height="6" rx="1" />
        <path d="M9 12h6" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    label: "Tidak semua susunan bidang datar merupakan jaring-jaring.",
    bg: "bg-[#FEF2F2]",
    border: "border-[#FBCACA]",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2">
        <rect x="4" y="4" width="7" height="7" rx="1" />
        <rect x="13" y="4" width="7" height="7" rx="1" />
        <rect x="4" y="13" width="7" height="7" rx="1" />
        <rect x="13" y="13" width="7" height="7" rx="1" />
        <path d="M5 5l14 14M19 5L5 19" />
      </svg>
    ),
  },
  {
    label: "Seluruh sisi harus saling terhubung dengan benar.",
    bg: "bg-[#EFF4FF]",
    border: "border-[#B3C5FF]",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="11" width="7" height="7" rx="1" />
        <rect x="11" y="11" width="7" height="7" rx="1" />
        <rect x="11" y="3" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    label: "Saat dilipat, tidak boleh ada sisi yang bertumpuk.",
    bg: "bg-[#FFF7ED]",
    border: "border-[#FDDCB0]",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
        <path d="M4 12h8M12 12l4-4M12 12l4 4" />
        <rect x="15" y="4" width="6" height="16" rx="1" />
      </svg>
    ),
  },
  {
    label: "Seluruh sisi harus menutup bangun ruang dengan tepat.",
    bg: "bg-[#F5F3FF]",
    border: "border-[#DDD6FE]",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2">
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
        <path d="M12 3v18M4 7.5l8 4.5 8-4.5" />
      </svg>
    ),
  },
];

export default function Materi2Peta7Step3IngatKembali({ materi, peta }: StepComponentProps) {
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={5} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Ayo Menyimpulkan (Generalisasi)
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Ingat Kembali – Konsep Penting
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {konsep.map((k) => (
            <div
              key={k.label}
              className={`${k.bg} border ${k.border} rounded-2xl p-4 flex flex-col items-center text-center gap-2.5`}
            >
              {k.icon}
              <p className="m-0 text-xs font-semibold text-[#374151] leading-[1.5]">{k.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
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
