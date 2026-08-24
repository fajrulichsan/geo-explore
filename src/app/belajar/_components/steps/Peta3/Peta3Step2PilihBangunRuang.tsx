import Link from "next/link";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";

const bangun = [
  { n: 1, label: "Kubus", desc: "6 sisi persegi identik", color: "#4ADE80" },
  { n: 2, label: "Balok", desc: "Sisi berhadapan sama luas", color: "#60A5FA" },
  { n: 3, label: "Prisma Segitiga", desc: "Alas & atap segitiga", color: "#FB923C" },
  { n: 4, label: "Limas Segiempat", desc: "Satu titik puncak", color: "#3B82F6" },
  { n: 5, label: "Limas Segitiga", desc: "Empat sisi segitiga", color: "#FACC15" },
];

export default function Peta3Step2PilihBangunRuang({ materi, peta }: StepComponentProps) {
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
          </svg>
          LANGKAH 1 – PILIH BANGUN RUANG
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4l3 2" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Bangun ruang apa yang ingin kamu amati hari ini? Pilih salah satu untuk memulai eksplorasi
          interaktif.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {bangun.map((b) => (
          <button
            key={b.n}
            type="button"
            className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col items-center text-center gap-3 relative hover:border-[#2563EB] transition-colors cursor-pointer"
          >
            <div className="absolute top-4 left-4 w-7 h-7 rounded-full bg-[#F3F4F6] flex items-center justify-center text-xs font-bold text-[#6B7280]">
              {b.n}
            </div>
            <div className="w-full aspect-square rounded-2xl bg-[#F9FAFB] flex items-center justify-center">
              <div
                className="w-16 h-16 rounded-md opacity-80"
                style={{ backgroundColor: b.color }}
              />
            </div>
            <h3 className="m-0 text-base font-bold text-[#111827]">{b.label}</h3>
            <p className="m-0 text-sm text-[#6B7280]">{b.desc}</p>
            <div className="w-full mt-1 rounded-full py-2.5 text-sm font-bold text-white bg-[#2563EB]">
              Mulai Belajar
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/1`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
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
