import type { ReactNode } from "react";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import type { PageImageKey } from "@/lib/pageImages";

export const TOTAL_STEPS = 5;

export type Ctx = { materi: string; peta: string; step: string; editFoto?: boolean };

export const cardCls =
  "bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]";

export function Foto({
  k,
  src,
  ctx,
  alt,
  className,
  urutan,
  editable = true,
}: {
  k: PageImageKey;
  src: string;
  ctx: Ctx;
  alt: string;
  className: string;
  urutan: string;
  editable?: boolean;
}) {
  return (
    <EditablePageImage
      imageKey={k}
      materi={ctx.materi}
      peta={ctx.peta}
      step={ctx.step}
      urutan={urutan}
      src={src}
      alt={alt}
      editable={editable && ctx.editFoto}
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

export function RangkumanHeader({ materi, step }: { materi: string; step: number }) {
  return (
    <div className="flex flex-col gap-4">
      <StepHeader materi={materi} currentStep={step} totalSteps={TOTAL_STEPS} />
      <div className="inline-flex items-center bg-[#DBEAFE] text-[#1E3A8A] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
        Rangkuman
      </div>
      <div className="flex items-center gap-3.5">
        <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
            <path d="M12 2l2.6 6.5L21 9l-5 4.4L17.4 21 12 17.3 6.6 21 8 13.4 3 9l6.4-.5z" />
          </svg>
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Rangkuman</h1>
      </div>
      <p className="m-0 text-sm font-semibold text-[#2563EB]">Merangkum Konsep Volume Kubus, Balok, dan Prisma</p>
    </div>
  );
}

export function SectionTitle({ huruf, judul, warna = "#2563EB" }: { huruf: string; judul: string; warna?: string }) {
  return (
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
  );
}

export function Rumus({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border-2 border-dashed border-[#93A3C4] bg-[#FEF9E7] px-4 py-2.5 text-center text-lg font-bold italic text-[#1E3A8A]">
      {children}
    </div>
  );
}

export function Tip({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-[#FEF9E7] border border-[#F5E3A0] px-4 py-3 text-sm text-[#374151] leading-[1.6]">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.8" className="flex-shrink-0">
        <path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0012 3z" />
      </svg>
      <div>{children}</div>
    </div>
  );
}

export function Kubus({ warna = "#2563EB", className = "w-14 h-14" }: { warna?: string; className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Kubus">
      <path d="M32 6l22 11v26L32 54 10 43V17z" fill={warna} stroke="#111827" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M10 17l22 11 22-11M32 28v26" fill="none" stroke="#111827" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function Balok({ warna = "#16A34A", className = "w-16 h-14" }: { warna?: string; className?: string }) {
  return (
    <svg viewBox="0 0 80 56" className={className} role="img" aria-label="Balok">
      <path d="M4 20l14-12h58l-14 12z" fill={warna} fillOpacity="0.7" stroke="#111827" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M4 20h58v30H4z" fill={warna} stroke="#111827" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M62 20l14-12v30L62 50z" fill={warna} fillOpacity="0.85" stroke="#111827" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
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
