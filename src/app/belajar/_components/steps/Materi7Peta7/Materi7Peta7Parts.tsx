import type { ReactNode } from "react";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";

export const TOTAL_STEPS = 6;

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
      <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
        Tahap 6 dari 6
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3" />
            <path d="M7.5 15h9" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Menyimpulkan
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
}: {
  name: string;
  label: ReactNode;
  value: string;
  n?: number;
  color?: keyof typeof badgeColors;
  rows?: number;
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
        required
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

export function RememberList({ items, title = "Ingat!" }: { items: string[]; title?: string }) {
  return (
    <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-[20px] p-5 flex flex-col gap-2.5">
      <h3 className="m-0 text-sm font-extrabold text-[#92400E]">{title}</h3>
      <ul className="m-0 p-0 list-none flex flex-col gap-2">
        {items.map((t) => (
          <li key={t} className="flex items-start gap-2 text-sm text-[#374151] leading-[1.5]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.6" className="flex-shrink-0 mt-0.5">
              <path d="M5 13l4 4L19 7" />
            </svg>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function RadioPair({
  name,
  label,
  value,
  options = [
    { v: "tetap", l: "Tetap" },
    { v: "berubah", l: "Berubah" },
  ],
}: {
  name: string;
  label: string;
  value: string;
  options?: { v: string; l: string }[];
}) {
  return (
    <div className="flex items-center justify-between gap-3 py-2 border-b border-[#F1F5F9] last:border-b-0">
      <span className="text-sm text-[#374151] leading-[1.4]">{label}</span>
      <div className="flex gap-2 flex-shrink-0">
        {options.map((o) => (
          <label key={o.v} className="cursor-pointer">
            <input type="radio" name={`answers.${name}`} value={o.v} defaultChecked={value === o.v} required className="peer sr-only" />
            <span className="block rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1.5 text-xs font-bold text-[#6B7280] peer-checked:bg-[#2563EB] peer-checked:border-[#2563EB] peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-[#93C5FD]">
              {o.l}
            </span>
          </label>
        ))}
      </div>
    </div>
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

export function PengantarPanel({ intro, items }: { intro: string; items: string[] }) {
  return (
    <div className={`${cardClass} flex flex-col gap-3`}>
      <h2 className="m-0 text-base font-extrabold text-[#1E3A8A]">Pengantar</h2>
      <p className="m-0 text-sm text-[#374151] leading-[1.7]">{intro}</p>
      <ul className="m-0 p-0 list-none flex flex-col gap-2">
        {items.map((t) => (
          <li key={t} className="flex items-start gap-2 text-sm text-[#374151] leading-[1.5]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.6" className="flex-shrink-0 mt-0.5">
              <path d="M5 13l4 4L19 7" />
            </svg>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
