import type { ReactNode } from "react";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";

export const TOTAL_STEPS = 4;

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

export function StepTitle({ materi, step }: { materi: string; step: number }) {
  return (
    <div className="flex flex-col gap-4">
      <StepHeader materi={materi} currentStep={step} totalSteps={TOTAL_STEPS} />
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14l-4-3H6a2 2 0 0 1-2-2z" />
            <path d="M9 9h6M9 12h4" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Refleksi Diri</h1>
        </div>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">
          Merefleksikan Pemahaman, Strategi, Keyakinan, dan Target Belajar Setelah Menemukan Rumus Volume Limas
        </p>
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
  rows = 3,
}: {
  name: string;
  label: ReactNode;
  value: string;
  rows?: number;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <label htmlFor={name} className="text-sm font-bold text-[#111827] leading-[1.5]">
        {label}
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
    <label className="flex items-center gap-2.5 cursor-pointer rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF]">
      <input type="checkbox" name={`answers.${name}`} defaultChecked={checked} className="w-4 h-4 flex-shrink-0 accent-[#2563EB]" />
      <span className="text-sm text-[#374151] leading-[1.5]">{label}</span>
    </label>
  );
}

export function ChoiceTable({
  prefix,
  rows,
  options,
  getValue,
}: {
  prefix: string;
  rows: string[];
  options: { v: string; l: string }[];
  getValue: (key: string) => string;
}) {
  return (
    <div className={`${cardClass} !p-3 sm:!p-4 overflow-x-auto`}>
      <table className="w-full min-w-[560px] border-separate border-spacing-y-2 text-sm">
        <thead>
          <tr className="text-xs font-bold text-white">
            <th className="bg-[#1E3A8A] rounded-l-xl px-3 py-2.5 text-left">Pernyataan</th>
            {options.map((o, i) => (
              <th key={o.v} className={`bg-[#1E3A8A] px-3 py-2.5 w-28 text-center ${i === options.length - 1 ? "rounded-r-xl" : ""}`}>
                {o.l}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((label, i) => {
            const key = `${prefix}_${i + 1}`;
            return (
              <tr key={key} className="bg-[#F8FAFF]">
                <td className="rounded-l-xl px-3 py-3 text-[#374151] leading-[1.5]">
                  <span className="font-extrabold text-[#2563EB] mr-2">{i + 1}.</span>
                  {label}
                </td>
                {options.map((o, oi) => (
                  <td key={o.v} className={`px-3 py-3 text-center ${oi === options.length - 1 ? "rounded-r-xl" : ""}`}>
                    <input
                      type="radio"
                      name={`answers.${key}`}
                      value={o.v}
                      defaultChecked={getValue(key) === o.v}
                      required
                      aria-label={`${i + 1}. ${o.l}`}
                      className="w-5 h-5 accent-[#2563EB] cursor-pointer"
                    />
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
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
