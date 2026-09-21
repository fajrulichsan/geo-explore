import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const konsep = [
  {
    text: "Satu bangun ruang dapat mempunyai lebih dari satu jaring-jaring.",
    box: "bg-[#F0FDF4] border-[#BBF7D0]",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
        <rect x="20" y="4" width="24" height="16" fill="#86EFAC" stroke="#16A34A" strokeWidth="2" />
        <rect x="4" y="22" width="24" height="24" fill="#4ADE80" stroke="#16A34A" strokeWidth="2" />
        <rect x="36" y="22" width="24" height="24" fill="#4ADE80" stroke="#16A34A" strokeWidth="2" />
        <rect x="20" y="46" width="24" height="14" fill="#86EFAC" stroke="#16A34A" strokeWidth="2" />
      </svg>
    ),
  },
  {
    text: "Tidak semua susunan bidang datar merupakan jaring-jaring.",
    box: "bg-[#FDF2F8] border-[#FBCFE8]",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
        <rect x="8" y="8" width="20" height="20" fill="#FBCFE8" stroke="#DB2777" strokeWidth="2" />
        <rect x="28" y="28" width="20" height="20" fill="#F9A8D4" stroke="#DB2777" strokeWidth="2" />
        <rect x="8" y="28" width="20" height="20" fill="#F9A8D4" stroke="#DB2777" strokeWidth="2" />
        <path d="M4 4l56 56M60 4L4 60" stroke="#BE185D" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    text: "Seluruh sisi harus saling terhubung dengan benar.",
    box: "bg-[#EFF6FF] border-[#BFDBFE]",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
        <rect x="6" y="10" width="16" height="16" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2" />
        <rect x="6" y="26" width="16" height="16" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2" />
        <rect x="22" y="26" width="16" height="16" fill="#60A5FA" stroke="#1D4ED8" strokeWidth="2" />
        <rect x="38" y="26" width="16" height="16" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2" />
      </svg>
    ),
  },
  {
    text: "Saat dilipat tidak boleh ada sisi yang bertumpuk.",
    box: "bg-[#FFFBEB] border-[#FDE68A]",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect x="6" y="28" width="20" height="20" fill="#FDBA74" stroke="#EA580C" strokeWidth="2" />
        <rect x="38" y="30" width="20" height="20" fill="#FED7AA" stroke="#EA580C" strokeWidth="2" />
        <path d="M20 22c8-14 26-14 32 4" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
        <path d="M46 20l6 6-8 2" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    text: "Seluruh sisi harus menutup bangun ruang dengan tepat.",
    box: "bg-[#F5F3FF] border-[#DDD6FE]",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 6l22 12v26L32 58 10 44V18z" fill="#A78BFA" stroke="#6D28D9" strokeWidth="2" strokeLinejoin="round" />
        <path d="M10 18l22 12 22-12M32 30v28" stroke="#6D28D9" strokeWidth="2" fill="none" />
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
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan (Generalisasi)</h1>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] p-6 flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#D97706] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">E</div>
          <h2 className="m-0 text-lg font-bold text-[#92400E]">Ingat Kembali – Konsep Penting</h2>
        </div>
        <ul className="m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {konsep.map((k) => (
            <li key={k.text} className={`border rounded-2xl p-4 flex flex-col items-center gap-3 text-center ${k.box}`}>
              {k.icon}
              <p className="m-0 text-xs font-semibold leading-[1.5] text-[#374151]">{k.text}</p>
            </li>
          ))}
        </ul>
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
