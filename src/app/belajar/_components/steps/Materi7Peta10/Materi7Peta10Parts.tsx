import type { ReactNode } from "react";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";

export const TOTAL_STEPS = 2;

export const cardClass =
  "bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]";

export function StepTitle({ materi, step }: { materi: string; step: number }) {
  return (
    <div className="flex flex-col gap-4">
      <StepHeader materi={materi} currentStep={step} totalSteps={TOTAL_STEPS} />
      <div className="flex flex-col gap-1.5">
        <div className="flex flex-wrap items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14l-4-3H6a2 2 0 0 1-2-2z" />
            <path d="M9 9h6M9 12h4" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Rangkuman</h1>
          <span className="rounded-full bg-[#1E3A8A] px-3.5 py-1 text-xs font-bold text-white">
            Halaman {step} dari {TOTAL_STEPS}
          </span>
        </div>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Merangkum Konsep Volume Limas</p>
      </div>
    </div>
  );
}

const badgeColors = {
  blue: { bg: "bg-[#2563EB]", text: "text-[#2563EB]" },
  amber: { bg: "bg-[#D97706]", text: "text-[#D97706]" },
  green: { bg: "bg-[#16A34A]", text: "text-[#16A34A]" },
  purple: { bg: "bg-[#7C3AED]", text: "text-[#7C3AED]" },
} as const;

export function SectionTitle({
  letter,
  title,
  color = "blue",
}: {
  letter: string;
  title: string;
  color?: keyof typeof badgeColors;
}) {
  const c = badgeColors[color];
  return (
    <div className="flex items-center gap-3">
      <div className={`w-[34px] h-[34px] rounded-full ${c.bg} text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0`}>
        {letter}
      </div>
      <div className={`bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold ${c.text}`}>
        {title}
      </div>
    </div>
  );
}

export function TipBox({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-xl px-4 py-3 text-sm font-semibold text-[#92400E] leading-[1.6]">
      {children}
    </div>
  );
}

export function Frac({ n, d }: { n: string; d: string }) {
  return (
    <span className="mx-0.5 inline-flex flex-col items-center align-middle text-[0.8em] leading-none">
      <span className="border-b border-current px-0.5 pb-0.5">{n}</span>
      <span className="pt-0.5">{d}</span>
    </span>
  );
}

export function Sub({ children }: { children: ReactNode }) {
  return <sub className="text-[0.7em]">{children}</sub>;
}

export function PyramidIcon({ color, size = 36 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden className="flex-shrink-0">
      <path d="M18 3 4 29l14 4 14-4z" fill={color} stroke="#1F2937" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M18 3v30" stroke="#1F2937" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );
}

export function FlowBox({
  color,
  children,
}: {
  color: "yellow" | "green" | "blue" | "purple" | "red";
  children: ReactNode;
}) {
  const map = {
    yellow: "bg-[#FEF9E7] border-[#FDE68A] text-[#92400E]",
    green: "bg-[#ECFDF5] border-[#A7F3D0] text-[#065F46]",
    blue: "bg-[#EFF4FF] border-[#BFDBFE] text-[#1E3A8A]",
    purple: "bg-[#F5F3FF] border-[#DDD6FE] text-[#5B21B6]",
    red: "bg-[#FEF2F2] border-[#FECACA] text-[#991B1B]",
  } as const;
  return (
    <div className={`rounded-xl border px-4 py-2.5 text-center text-sm font-bold leading-[1.5] ${map[color]}`}>
      {children}
    </div>
  );
}

export function ArrowDown() {
  return (
    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto" aria-hidden>
      <path d="M9 2v16M3 13l6 6 6-6" />
    </svg>
  );
}

export function HebatBanner({ children, nextTitle }: { children: ReactNode; nextTitle: ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-[20px] px-5 py-4 flex items-start gap-4">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0" aria-hidden>
          <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z" />
          <path d="M7 6H4a3 3 0 0 0 3 5M17 6h3a3 3 0 0 1-3 5" />
        </svg>
        <div className="text-sm text-[#92400E] leading-[1.6]">
          <span className="block font-extrabold text-xl mb-1">Hebat!</span>
          {children}
        </div>
      </div>
      <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] px-5 py-4 text-sm text-[#1E3A8A] leading-[1.6]">
        <span className="block font-extrabold text-xl mb-1 text-[#2563EB]">Selanjutnya</span>
        {nextTitle}
      </div>
    </div>
  );
}

export function StepFooter({
  materi,
  peta,
  step,
  final,
}: {
  materi: string;
  peta: string;
  step: number;
  final?: boolean;
}) {
  return (
    <div className="flex justify-between items-center">
      {step > 1 ? (
        <BackLink
          href={`/belajar/${materi}/${peta}/${step - 1}`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
      ) : (
        <span />
      )}
      {final ? (
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      ) : (
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </SubmitStepButton>
      )}
    </div>
  );
}

export function HiddenStepFields({
  materi,
  peta,
  step,
}: {
  materi: string;
  peta: string;
  step: number;
}) {
  return (
    <>
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value={String(step)} />
    </>
  );
}
