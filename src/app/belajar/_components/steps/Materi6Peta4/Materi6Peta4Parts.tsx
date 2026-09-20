import type { ReactNode } from "react";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import type { PageImageKey } from "@/lib/pageImages";

export const TOTAL_STEPS = 12;

export type Ctx = { materi: string; peta: string; step: string; editFoto?: boolean };
export type Images = Record<PageImageKey, string>;

export function answerText(answers: Record<string, unknown> | undefined, key: string): string {
  const v = answers?.[key];
  return typeof v === "string" ? v : "";
}

export const inputCls =
  "w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors";

export const cardCls =
  "bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]";

export const BANGUN = [
  { nama: "kubus", judul: "Kubus", warna: "#2563EB", bg: "#EFF4FF", border: "#BFDBFE", icon: "M6-P4-L3-1", iconAlt: "Kubus" },
  { nama: "balok", judul: "Balok", warna: "#16A34A", bg: "#F0FDF4", border: "#BBF7D0", icon: "M6-P4-L3-6", iconAlt: "Balok" },
  { nama: "prisma", judul: "Prisma Segitiga", warna: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE", icon: "M6-P4-L3-11", iconAlt: "Prisma segitiga" },
] as const satisfies readonly { nama: string; judul: string; warna: string; bg: string; border: string; icon: PageImageKey; iconAlt: string }[];

export function Foto({
  k,
  img,
  ctx,
  urutan,
  alt,
  className,
  natural,
}: {
  k: PageImageKey;
  img: Images;
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
      src={img[k]}
      alt={alt}
      editable={ctx.editFoto && urutan !== undefined}
      natural={natural}
      imageClassName="object-contain"
      containerClassName={className}
    />
  );
}

export function TahapHeader({ materi, step, subtitle }: { materi: string; step: number; subtitle: string }) {
  return (
    <div className="flex flex-col gap-4">
      <StepHeader materi={materi} currentStep={step} totalSteps={TOTAL_STEPS} />
      <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
        Tahap 3
      </div>
      <div className="flex items-center gap-3.5">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
      </div>
      <p className="m-0 text-sm font-semibold text-[#2563EB]">{subtitle}</p>
    </div>
  );
}

export function SectionTitle({ huruf, judul, hint }: { huruf: string; judul: string; hint?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          {huruf}
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          {judul}
        </div>
      </div>
      {hint && <p className="m-0 text-sm text-[#4B5563]">{hint}</p>}
    </div>
  );
}

export function Tip({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-3 bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl px-5 py-3.5">
      <p className="m-0 text-sm text-[#374151] leading-[1.5]">{children}</p>
    </div>
  );
}

export function Pengantar({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 flex flex-col gap-2.5">
      <span className="w-fit rounded-full bg-[#F59E0B] text-white text-xs font-bold px-4 py-1">Pengantar</span>
      {children}
    </div>
  );
}

export function LangkahList({ items }: { items: string[] }) {
  return (
    <ol className="m-0 p-0 list-none flex flex-col gap-3">
      {items.map((t, i) => (
        <li key={t} className="flex items-start gap-3">
          <span className="w-6 h-6 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
            {i + 1}
          </span>
          <span className="text-sm text-[#374151] leading-[1.5]">{t}</span>
        </li>
      ))}
    </ol>
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

export function HiddenFields({ materi, peta, step }: { materi: string; peta: string; step: number }) {
  return (
    <>
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value={String(step)} />
    </>
  );
}

const CONTOH = {
  kubus: {
    alas: "Luas alas 3 × 3 = 9 satuan²",
    hasil: ["1 lapisan = 9 kubus", "2 lapisan = 18 kubus", "3 lapisan = 27 kubus"],
    alasImg: "M6-P4-L3-2",
    tiles: ["M6-P4-L3-3", "M6-P4-L3-4", "M6-P4-L3-5"],
    keteranganGG: ["Setiap lapisan terdiri dari 9 kubus (luas alas tetap).", "Volume bertambah setiap kali ditambahkan satu lapisan."],
    keteranganAR: ["Setiap lapisan terdiri dari 9 kubus (luas alas tetap).", "Volume bertambah setiap kali tinggi ditambah 1."],
  },
  balok: {
    alas: "Luas alas 5 × 2 = 10 satuan²",
    hasil: ["1 lapisan = 10 kubus", "2 lapisan = 20 kubus", "3 lapisan = 30 kubus"],
    alasImg: "M6-P4-L3-7",
    tiles: ["M6-P4-L3-8", "M6-P4-L3-9", "M6-P4-L3-10"],
    keteranganGG: ["Setiap lapisan terdiri dari 10 kubus (luas alas tetap).", "Volume bertambah setiap kali ditambahkan satu lapisan."],
    keteranganAR: ["Setiap lapisan terdiri dari 10 kubus (luas alas tetap).", "Volume bertambah setiap kali tinggi ditambah 1."],
  },
  prisma: {
    alas: "Luas penampang segitiga (tetap) = ½ × 3 × 2 = 3 satuan²",
    hasil: ["Panjang prisma = 1", "Panjang prisma = 2", "Panjang prisma = 3"],
    alasImg: "M6-P4-L3-12",
    tiles: ["M6-P4-L3-13", "M6-P4-L3-14", "M6-P4-L3-15"],
    keteranganGG: ["Penampang segitiga tetap sama pada setiap posisi.", "Volume bertambah ketika panjang prisma bertambah."],
    keteranganAR: ["Bentuk dan luas penampang segitiga tetap pada setiap posisi.", "Volume bertambah setiap kali panjang prisma ditambah 1."],
  },
} as const satisfies Record<string, { alas: string; hasil: readonly string[]; alasImg: PageImageKey; tiles: readonly PageImageKey[]; keteranganGG: readonly string[]; keteranganAR: readonly string[] }>;

export function ContohHasil({ mode, img, ctx }: { mode: "geogebra" | "ar"; img: Images; ctx: Ctx }) {
  const asli = mode === "geogebra";
  const ctxContoh = asli ? ctx : { ...ctx, editFoto: false };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {BANGUN.map((b, bi) => {
        const c = CONTOH[b.nama];
        const u = (n: number) => (asli ? String(bi * 5 + n) : undefined);
        return (
          <div key={b.nama} className={`${cardCls} flex flex-col gap-4`}>
            <div className="flex items-center gap-3">
              <Foto
                k={b.icon}
                img={img}
                ctx={ctxContoh}
                urutan={asli ? String(bi * 5 + 1) : undefined}
                alt={b.iconAlt}
                className="relative w-14 h-14 flex-shrink-0"
              />
              <span className="text-base font-extrabold" style={{ color: b.warna }}>
                {b.judul}
              </span>
            </div>
            <div className="rounded-2xl border p-3 flex flex-col gap-2" style={{ backgroundColor: b.bg, borderColor: b.border }}>
              <span className="text-xs font-bold" style={{ color: b.warna }}>
                Alas / Penampang (tetap)
              </span>
              <Foto k={c.alasImg} img={img} ctx={ctxContoh} urutan={u(2)} alt={c.alas} className="relative w-full h-24" />
              <span className="text-xs text-[#374151] leading-[1.4]">{c.alas}</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {c.tiles.map((t, i) => (
                <div key={t} className="flex flex-col items-center gap-1.5 rounded-xl border border-[#E5E7EB] p-2">
                  <Foto k={t} img={img} ctx={ctxContoh} urutan={u(i + 3)} alt={c.hasil[i]} className="relative w-full h-14" />
                  <span className="text-[11px] font-semibold text-center leading-[1.3]" style={{ color: b.warna }}>
                    {b.nama === "prisma" ? `${c.hasil[i]}${asli ? "" : ` · ${i + 1} posisi penampang`}` : c.hasil[i]}
                  </span>
                </div>
              ))}
            </div>
            <ul className="m-0 pl-5 flex flex-col gap-1.5 text-xs text-[#374151] leading-[1.5] list-disc">
              {(asli ? c.keteranganGG : c.keteranganAR).map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export function PerhatikanKeterangan() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4">
      <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl px-5 py-4 flex flex-col gap-1.5">
        <span className="text-sm font-bold text-[#1E3A8A]">Perhatikan:</span>
        <ul className="m-0 pl-5 flex flex-col gap-1 text-sm text-[#374151] leading-[1.5] list-disc">
          <li>Pada kubus dan balok, volume diamati melalui banyak kubus satuan pada setiap lapisan.</li>
          <li>Pada prisma segitiga, volume diamati melalui penampang segitiga yang sama sepanjang panjang prisma.</li>
        </ul>
      </div>
      <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl px-5 py-4 flex flex-col gap-1.5">
        <span className="text-sm font-bold text-[#166534]">Keterangan:</span>
        <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm text-[#374151]">
          <dt className="font-bold">L</dt>
          <dd className="m-0">Luas alas/luas penampang (tetap)</dd>
          <dt className="font-bold">t</dt>
          <dd className="m-0">Tinggi (kubus/balok) atau panjang prisma</dd>
          <dt className="font-bold">V</dt>
          <dd className="m-0">Volume (banyak kubus satuan seluruh bangun)</dd>
        </dl>
      </div>
    </div>
  );
}

export function TabelData({
  prefix,
  img,
  ctx,
  dataPrisma,
  getValue,
}: {
  prefix: "gg" | "ar";
  img: Images;
  ctx: Ctx;
  dataPrisma: string;
  getValue: (key: string) => string;
}) {
  const ctxIkon = { ...ctx, editFoto: false };
  const info = {
    kubus: { alas: "Luas alas (kubus pada alas)", data: "Volume (banyak kubus satuan)" },
    balok: { alas: "Luas alas (kubus pada alas)", data: "Volume (banyak kubus satuan)" },
    prisma: { alas: "Luas penampang (segitiga)", data: dataPrisma },
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {BANGUN.map((b, i) => (
        <div key={b.nama} className={`${cardCls} flex flex-col gap-4`}>
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs font-bold">{i + 1}</span>
            <Foto k={b.icon} img={img} ctx={ctxIkon} alt={b.iconAlt} className="relative w-10 h-10 flex-shrink-0" />
            <span className="text-base font-extrabold" style={{ color: b.warna }}>
              {b.judul}
            </span>
          </div>
          <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs text-[#374151] leading-[1.4]">
            <dt className="font-bold text-[#6B7280]">Bentuk alas</dt>
            <dd className="m-0">{info[b.nama].alas}</dd>
            <dt className="font-bold text-[#6B7280]">Data diamati</dt>
            <dd className="m-0">{info[b.nama].data}</dd>
          </dl>
          <div className="rounded-2xl border p-3 flex flex-col gap-2" style={{ backgroundColor: b.bg, borderColor: b.border }}>
            <span className="text-xs font-bold" style={{ color: b.warna }}>
              Ukuran yang diubah (t)
            </span>
            <div className="grid grid-cols-2 gap-2">
              {["t = 1", "t = 2", "t = 3", "t = ..."].map((t, n) => (
                <input
                  key={t}
                  name={`answers.${prefix}_${b.nama}_t${n + 1}`}
                  defaultValue={getValue(`${prefix}_${b.nama}_t${n + 1}`)}
                  placeholder={t}
                  required={n < 3}
                  className={inputCls}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold text-[#374151]">Pola yang kamu temukan</label>
            <textarea
              name={`answers.${prefix}_${b.nama}_pola`}
              defaultValue={getValue(`${prefix}_${b.nama}_pola`)}
              rows={3}
              placeholder="Ketik jawabanmu di sini..."
              required
              className={`${inputCls} resize-y`}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold text-[#374151]">Dugaan hubungan</label>
            <textarea
              name={`answers.${prefix}_${b.nama}_dugaan`}
              defaultValue={getValue(`${prefix}_${b.nama}_dugaan`)}
              rows={3}
              placeholder="Ketik jawabanmu di sini..."
              required
              className={`${inputCls} resize-y`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
