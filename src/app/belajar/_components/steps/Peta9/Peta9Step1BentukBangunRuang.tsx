import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";

const shapes = [
  {
    name: "Kubus",
    color: "#16A34A",
    bg: "#F0FDF4",
    facts: ["Seluruh sisinya berbentuk persegi.", "12 rusuk sama panjang.", "8 titik sudut."],
    note: "Kubus merupakan kasus khusus prisma segiempat.",
  },
  {
    name: "Balok",
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
    color: "#EA580C",
    bg: "#FFF7ED",
    facts: [
      "Dua sisi sejajar dan kongruen (alas dan tutup).",
      "Sisi tegak berbentuk jajargenjang, atau persegi panjang pada prisma tegak.",
      "Jumlah sisi = n + 2, rusuk = 3n, titik sudut = 2n.",
    ],
  },
  {
    name: "Limas",
    color: "#D97706",
    bg: "#FFFBEB",
    facts: [
      "Mempunyai satu alas berbentuk segi banyak.",
      "Sisi tegak berbentuk segitiga yang bertemu pada satu titik puncak.",
      "Jumlah sisi = n + 1, rusuk = 2n.",
    ],
  },
];

export default function Peta9Step1BentukBangunRuang({ materi, peta }: StepComponentProps) {
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 006.5 22H20V4H6.5A2.5 2.5 0 004 6.5v13z" />
          </svg>
          RANGKUMAN 1
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
            <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Bentuk Bangun Ruang Sisi Datar</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
          Submateri 1 – Bangun Ruang Sisi Datar
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Empat Bangun Ruang Sisi Datar
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {shapes.map((s) => (
            <div
              key={s.name}
              className="bg-white border border-[#E5E7EB] rounded-[20px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col"
            >
              <div
                className="flex items-center justify-center py-7"
                style={{ backgroundColor: s.bg }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-lg font-extrabold"
                  style={{ backgroundColor: `${s.color}22`, color: s.color, border: `2px solid ${s.color}` }}
                >
                  {s.name.slice(0, 2).toUpperCase()}
                </div>
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
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
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
