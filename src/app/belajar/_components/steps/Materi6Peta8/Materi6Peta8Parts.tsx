import type { ReactNode } from "react";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import type { PageImageKey } from "@/lib/pageImages";

export const TOTAL_STEPS = 2;

export type Ctx = { materi: string; peta: string; step: string; editFoto?: boolean };

export function answerText(answers: Record<string, unknown> | undefined, key: string): string {
  const v = answers?.[key];
  return typeof v === "string" ? v : "";
}

export const inputCls =
  "w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors";

export const cardCls =
  "bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]";

export function Foto({
  k,
  src,
  ctx,
  alt,
  className,
}: {
  k: PageImageKey;
  src: string;
  ctx: Ctx;
  alt: string;
  className: string;
}) {
  return (
    <EditablePageImage
      imageKey={k}
      materi={ctx.materi}
      peta={ctx.peta}
      step={ctx.step}
      urutan="1"
      src={src}
      alt={alt}
      editable={ctx.editFoto}
      natural
      imageClassName="object-contain"
      containerClassName={className}
    />
  );
}

export function HiddenFields({ materi, peta, step }: { materi: string; peta: string; step: number }) {
  return (
    <>
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value={String(step)} />
    </>
  );
}

export function RefleksiHeader({ materi, step }: { materi: string; step: number }) {
  return (
    <div className="flex flex-col gap-4">
      <StepHeader materi={materi} currentStep={step} totalSteps={TOTAL_STEPS} />
      <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
        Refleksi
      </div>
      <div className="flex items-center gap-3.5">
        <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
            <path d="M12 2l2.6 6.5L21 9l-5 4.4L17.4 21 12 17.3 6.6 21 8 13.4 3 9l6.4-.5z" />
          </svg>
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Refleksi Diri</h1>
      </div>
      <p className="m-0 text-sm font-semibold text-[#2563EB]">
        Merefleksikan Pemahaman dan Keyakinan Setelah Menemukan Rumus Volume
      </p>
    </div>
  );
}

export function SectionTitle({ huruf, judul, hint, warna = "#2563EB" }: { huruf: string; judul: string; hint?: string; warna?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <div
          className="w-[34px] h-[34px] rounded-full text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0"
          style={{ backgroundColor: warna }}
        >
          {huruf}
        </div>
        <div
          className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold"
          style={{ color: warna }}
        >
          {judul}
        </div>
      </div>
      {hint && <p className="m-0 text-sm text-[#4B5563]">{hint}</p>}
    </div>
  );
}

export type Opsi = { value: string; label: string };

export function TabelCentang({
  prefix,
  pernyataan,
  opsi,
  answers,
  judulKolom = "Pernyataan",
}: {
  prefix: string;
  pernyataan: string[];
  opsi: Opsi[];
  answers: Record<string, unknown> | undefined;
  judulKolom?: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div
        className="hidden sm:grid gap-2 rounded-xl bg-[#1E3A8A] text-white text-xs font-bold text-center px-4 py-2.5"
        style={{ gridTemplateColumns: `1fr repeat(${opsi.length}, 84px)` }}
      >
        <span>{judulKolom}</span>
        {opsi.map((o) => (
          <span key={o.value}>{o.label}</span>
        ))}
      </div>
      {pernyataan.map((teks, i) => {
        const name = `${prefix}_${i + 1}`;
        const nilai = answerText(answers, name);
        return (
          <fieldset
            key={name}
            className="m-0 border border-[#E5E7EB] rounded-2xl px-4 py-3 sm:grid sm:items-center gap-2 flex flex-col"
            style={{ gridTemplateColumns: `1fr repeat(${opsi.length}, 84px)` }}
          >
            <legend className="sr-only">{teks}</legend>
            <p className="m-0 flex items-start gap-2.5 text-sm text-[#374151] leading-[1.5]">
              <span className="font-bold text-[#1E3A8A]">{i + 1}.</span>
              {teks}
            </p>
            {opsi.map((o) => (
              <label
                key={o.value}
                className="flex items-center justify-center gap-2 cursor-pointer text-xs font-semibold text-[#4B5563] sm:justify-center"
              >
                <input
                  type="radio"
                  name={`answers.${name}`}
                  value={o.value}
                  defaultChecked={nilai === o.value}
                  required
                  className="peer sr-only"
                />
                <span className="w-6 h-6 rounded-md border-2 border-[#93A3C4] flex items-center justify-center peer-checked:bg-[#2563EB] peer-checked:border-[#2563EB] peer-focus-visible:ring-2 peer-focus-visible:ring-[#2563EB]/40 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="sm:sr-only">{o.label}</span>
              </label>
            ))}
          </fieldset>
        );
      })}
    </div>
  );
}

export function Nav({ materi, peta, step, last }: { materi: string; peta: string; step: number; last?: boolean }) {
  return (
    <div className={`flex items-center ${step > 1 ? "justify-between" : "justify-end"}`}>
      {step > 1 && (
        <BackLink
          href={`/belajar/${materi}/${peta}/${step - 1}`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
      )}
      {last ? (
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      ) : (
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      )}
    </div>
  );
}

export function Tip({ children }: { children: ReactNode }) {
  return (
    <p className="m-0 rounded-2xl bg-white/70 border border-[#F5E3A0] px-4 py-3 text-sm italic text-[#374151]">{children}</p>
  );
}
