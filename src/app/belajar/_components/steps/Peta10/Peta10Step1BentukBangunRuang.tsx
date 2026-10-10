import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const shapes = [
  {
    name: "Kubus",
    key: "M1-P10-L1-2" as const,
    color: "#16A34A",
    bg: "#F0FDF4",
    facts: ["Seluruh sisinya berbentuk persegi.", "12 rusuk sama panjang.", "8 titik sudut."],
    note: "Kubus merupakan kasus khusus prisma segiempat.",
  },
  {
    name: "Balok",
    key: "M1-P10-L1-3" as const,
    color: "#2563EB",
    bg: "#EFF6FF",
    facts: [
      "Seluruh sisi berbentuk persegi panjang.",
      "Tiga kelompok rusuk berdasarkan panjang, lebar, dan tinggi.",
      "8 titik sudut.",
    ],
    note: "Balok merupakan kasus khusus prisma segiempat.",
  },
  {
    name: "Prisma",
    key: "M1-P10-L1-4" as const,
    color: "#EA580C",
    bg: "#FFF7ED",
    facts: [
      "Dua sisi sejajar dan kongruen (alas dan tutup).",
      "Sisi tegak berbentuk jajargenjang, atau persegi panjang pada prisma tegak.",
      "Jumlah sisi = n + 2, rusuk = 3n, titik sudut = 2n.",
    ],
    example: "Contoh: prisma segitiga, prisma segiempat, prisma segilima, ..., prisma segi-n.",
  },
  {
    name: "Limas",
    key: "M1-P10-L1-1" as const,
    color: "#D97706",
    bg: "#FFFBEB",
    facts: [
      "Mempunyai satu alas berbentuk segi banyak.",
      "Sisi tegak berbentuk segitiga yang bertemu pada satu titik puncak.",
      "Jumlah sisi = n + 1, rusuk = 2n, titik sudut = n + 1.",
    ],
    example: "Contoh: limas segitiga, limas segiempat, limas segilima, ..., limas segi-n.",
  },
];

export default async function Peta10Step1BentukBangunRuang({ materi, peta, editFoto }: StepComponentProps) {
  const gambarBangun = await Promise.all(shapes.map((s) => getPageImage(s.key)));
  const banner = await getPageImage("M1-P10-L1-5");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={6} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
            <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Rangkuman</h1>
          <EditablePageImage
            imageKey="M1-P10-L1-5"
            materi={materi}
            peta={peta}
            step="1"
            urutan="5"
            src={banner}
            alt="Kelas belajar dengan papan rangkuman"
            editable={editFoto}
            imageClassName="object-cover rounded-xl"
            containerClassName="relative ml-auto hidden sm:block w-48 h-28"
          />
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
          Submateri 1 – Bangun Ruang Sisi Datar
        </div>
      </div>

      <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-[20px] p-6 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-[#1D4ED8] font-bold text-sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#FACC15" stroke="#D97706" strokeWidth="1">
            <path d="M9 21h6M12 3a6 6 0 00-3.5 10.9c.4.3.5.7.5 1.1v.5h6v-.5c0-.4.1-.8.5-1.1A6 6 0 0012 3z" />
          </svg>
          Apa yang Telah Dipelajari?
        </div>
        <p className="m-0 text-sm leading-[1.6] text-[#374151]">
          Selama enam tahap Discovery Learning dan Tantangan Open-Ended, kamu telah menemukan bahwa bangun ruang sisi
          datar dapat dikelompokkan berdasarkan berbagai sifat. Pengelompokan dapat dilakukan dengan lebih dari satu
          cara selama menggunakan dasar yang jelas, diterapkan secara konsisten, dan didukung alasan matematis.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bentuk Bangun Ruang Sisi Datar
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {shapes.map((s) => (
            <div
              key={s.name}
              className="bg-white border border-[#E5E7EB] rounded-[20px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col"
            >
              <div className="flex items-center justify-center py-4 px-3 gap-3" style={{ backgroundColor: s.bg }}>
                <EditablePageImage
                  imageKey={s.key}
                  materi={materi}
                  peta={peta}
                  step="1"
                  urutan={String(shapes.indexOf(s) + 1)}
                  src={gambarBangun[shapes.indexOf(s)]}
                  alt={`Ilustrasi ${s.name}`}
                  editable={editFoto}
                  imageClassName="object-contain"
                  containerClassName="relative w-full h-28"
                />
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="m-0 text-base font-bold text-[#111827] text-center">{s.name}</h3>
                <ul className="m-0 p-0 flex flex-col gap-2 list-none">
                  {s.facts.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px] leading-[1.5] text-[#4B5563]">
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0"
                        style={{ backgroundColor: s.color }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                {s.note && (
                  <div
                    className="mt-auto rounded-lg py-2.5 px-3 text-xs font-semibold"
                    style={{ backgroundColor: s.bg, color: s.color }}
                  >
                    {s.note}
                  </div>
                )}
                {s.example && (
                  <div
                    className="mt-auto rounded-lg py-2.5 px-3 text-xs font-semibold"
                    style={{ backgroundColor: s.bg, color: s.color }}
                  >
                    {s.example}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <NextStepButton />
      </div>
    </form>
  );
}
