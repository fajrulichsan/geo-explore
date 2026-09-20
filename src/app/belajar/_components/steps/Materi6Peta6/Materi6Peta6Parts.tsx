import type { ReactNode } from "react";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import type { PageImageKey } from "@/lib/pageImages";

export const TOTAL_STEPS = 6;

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
  urutan,
  alt,
  className,
  natural,
}: {
  k: PageImageKey;
  src: string;
  ctx: Ctx;
  urutan?: string;
  alt: string;
  className: string;
  natural?: boolean;
}) {
  return (
    <EditablePageImage
      imageKey={k}
      materi={ctx.materi}
      peta={ctx.peta}
      step={ctx.step}
      urutan={urutan ?? "1"}
      src={src}
      alt={alt}
      editable={ctx.editFoto && urutan !== undefined}
      natural={natural}
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

export function TahapHeader({ materi, step }: { materi: string; step: number }) {
  return (
    <div className="flex flex-col gap-4">
      <StepHeader materi={materi} currentStep={step} totalSteps={TOTAL_STEPS} />
      <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
        Tahap 5
      </div>
      <div className="flex items-center gap-3.5">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4">
          <path d="M9 3h6M10 3v6l-5 9a2 2 0 001.7 3h10.6a2 2 0 001.7-3l-5-9V3" />
        </svg>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
      </div>
      <p className="m-0 text-sm font-semibold text-[#2563EB]">Memverifikasi Dugaan Hubungan Volume</p>
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

export function Pengantar({ children, kutipan, hero }: { children: ReactNode; kutipan?: string; hero: ReactNode }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-5 items-stretch">
      <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 flex flex-col gap-3">
        <span className="w-fit rounded-full bg-[#F59E0B] text-white text-xs font-bold px-4 py-1">Pengantar</span>
        {children}
        {kutipan && (
          <p className="m-0 mt-auto rounded-2xl bg-white/70 border border-[#F5E3A0] px-4 py-3 text-sm italic text-[#374151]">
            “{kutipan}”
          </p>
        )}
      </div>
      {hero}
    </div>
  );
}

export function Hebat({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-4 bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.8" className="flex-shrink-0">
        <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0V4zM7 6H4v1a3 3 0 003 3M17 6h3v1a3 3 0 01-3 3" />
      </svg>
      <div className="flex flex-col gap-1">
        <span className="text-lg font-extrabold text-[#92400E]">Hebat!</span>
        <p className="m-0 text-sm text-[#374151] leading-[1.6]">{children}</p>
      </div>
    </div>
  );
}

export function YaTidak({ name, value, label }: { name: string; value: string; label?: string }) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {label && <span className="text-sm font-semibold text-[#374151]">{label}</span>}
      {(["ya", "tidak"] as const).map((v) => (
        <label
          key={v}
          className="cursor-pointer rounded-full border border-[#D1D5DB] bg-white px-4 py-1.5 text-sm font-semibold text-[#4B5563] has-[:checked]:bg-[#2563EB] has-[:checked]:border-[#2563EB] has-[:checked]:text-white"
        >
          <input type="radio" name={name} value={v} defaultChecked={value === v} required className="sr-only" />
          {v === "ya" ? "Ya" : "Tidak"}
        </label>
      ))}
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

export type Bangun = {
  nama: "kubus" | "balok" | "prisma";
  judul: string;
  warna: string;
  bg: string;
  border: string;
  icon: PageImageKey;
  urutan: string;
};

export const BANGUN: Bangun[] = [
  { nama: "kubus", judul: "Kubus", warna: "#2563EB", bg: "#EFF4FF", border: "#BFDBFE", icon: "M6-P6-L1-2", urutan: "2" },
  { nama: "balok", judul: "Balok", warna: "#16A34A", bg: "#F0FDF4", border: "#BBF7D0", icon: "M6-P6-L1-3", urutan: "3" },
  { nama: "prisma", judul: "Prisma Segitiga", warna: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE", icon: "M6-P6-L3-2", urutan: "2" },
];

export function BangunLabel({ b, icons, ctx }: { b: Bangun; icons: Record<string, string>; ctx: Ctx }) {
  return (
    <div className="flex items-center gap-2.5">
      <Foto k={b.icon} src={icons[b.icon]} ctx={{ ...ctx, editFoto: false }} alt={b.judul} className="relative w-10 h-8 flex-shrink-0" />
      <span className="text-sm font-extrabold" style={{ color: b.warna }}>
        {b.judul}
      </span>
    </div>
  );
}

export function ModelPanel({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="rounded-2xl border border-[#BFDBFE] bg-[#EFF4FF] p-3 flex flex-col gap-1.5 text-center">
        <span className="mx-auto rounded-full bg-[#1E3A8A] text-white text-xs font-bold px-3 py-1">GeoGebra 3D</span>
        <span className="text-xs text-[#374151] leading-[1.4]">{children}</span>
      </div>
      <div className="rounded-2xl border border-[#D1D5DB] bg-[#F9FAFB] p-3 flex flex-col gap-1.5 text-center">
        <span className="mx-auto rounded-full bg-[#16A34A] text-white text-xs font-bold px-3 py-1">AR</span>
        <span className="text-xs text-[#374151] leading-[1.4]">Lihat model AR dan bandingkan.</span>
      </div>
    </div>
  );
}

export function Petunjuk({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-2.5 bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl px-4 py-3">
      <span className="text-sm font-bold text-[#92400E]">Petunjuk:</span>
      <p className="m-0 text-sm text-[#374151] leading-[1.5]">{children}</p>
    </div>
  );
}
