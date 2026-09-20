import type { ReactNode } from "react";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";

export const TOTAL_STEPS = 7;

export const SUBTITLE = "Saatnya Menunjukkan Berbagai Strategimu!";

export const cardClass =
  "bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]";

const inputClass =
  "w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors";

export function readAnswers(initialAnswers?: Record<string, unknown>) {
  const answers = initialAnswers ?? {};
  return {
    getValue: (key: string) =>
      typeof answers[key] === "string" ? (answers[key] as string) : "",
    getChecked: (key: string) => Boolean(answers[key]),
  };
}

export function StepTitle({
  materi,
  step,
  subtitle,
}: {
  materi: string;
  step: number;
  subtitle: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <StepHeader materi={materi} currentStep={step} totalSteps={TOTAL_STEPS} />
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="1.2" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Tantangan Open-Ended
          </h1>
        </div>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">{subtitle}</p>
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

export function NumberedQuestion({
  n,
  color = "blue",
  children,
}: {
  n: number;
  color?: keyof typeof badgeColors;
  children: ReactNode;
}) {
  return (
    <p className="m-0 flex items-start gap-2.5 text-sm font-bold text-[#111827] leading-[1.5]">
      <span className={`w-6 h-6 rounded-full ${badgeColors[color].bg} text-white flex items-center justify-center text-xs flex-shrink-0`}>
        {n}
      </span>
      <span>{children}</span>
    </p>
  );
}

export function TextAreaField({
  name,
  label,
  value,
  n,
  color = "blue",
  rows = 3,
  required = true,
}: {
  name: string;
  label: ReactNode;
  value: string;
  n?: number;
  color?: keyof typeof badgeColors;
  rows?: number;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <label htmlFor={name} className="flex items-start gap-2.5 text-sm font-bold text-[#111827] leading-[1.5]">
        {n !== undefined && (
          <span className={`w-6 h-6 rounded-full ${badgeColors[color].bg} text-white flex items-center justify-center text-xs flex-shrink-0`}>
            {n}
          </span>
        )}
        <span>{label}</span>
      </label>
      <textarea
        id={name}
        name={`answers.${name}`}
        defaultValue={value}
        rows={rows}
        placeholder="Ketik jawabanmu di sini..."
        required={required}
        className={`${inputClass} resize-y`}
      />
    </div>
  );
}

export function CellInput({
  name,
  label,
  value,
  required = true,
}: {
  name: string;
  label: string;
  value: string;
  required?: boolean;
}) {
  return (
    <input
      type="text"
      name={`answers.${name}`}
      defaultValue={value}
      aria-label={label}
      placeholder="..."
      required={required}
      className={`${inputClass} !px-2.5 !py-2 min-w-[84px]`}
    />
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


export function CheckItem({
  name,
  label,
  checked,
}: {
  name: string;
  label: string;
  checked: boolean;
}) {
  return (
    <label className="flex items-start gap-2.5 cursor-pointer">
      <input type="checkbox" name={`answers.${name}`} defaultChecked={checked} className="mt-0.5 w-4 h-4 flex-shrink-0 accent-[#2563EB]" />
      <span className="text-sm text-[#374151] leading-[1.5]">{label}</span>
    </label>
  );
}


export function RevealImage({
  label,
  hint,
  children,
}: {
  label: string;
  hint: string;
  children: ReactNode;
}) {
  return (
    <details className="group bg-[#F8FAFC] border border-[#E5E7EB] rounded-[20px] p-4">
      <summary className="list-none cursor-pointer flex flex-col items-center gap-1 [&::-webkit-details-marker]:hidden">
        <span className="rounded-full bg-[#2563EB] text-white px-5 py-2 text-sm font-bold group-open:bg-[#6B7280]">
          {label}
        </span>
        <span className="text-xs text-[#6B7280]">{hint}</span>
      </summary>
      <div className="mt-4">{children}</div>
    </details>
  );
}
