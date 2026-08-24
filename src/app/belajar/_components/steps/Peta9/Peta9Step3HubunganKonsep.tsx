import Link from "next/link";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";

const alur = [
  { label: "Mengamati", desc: "Mengamati bangun ruang sisi datar dan sifat-sifatnya.", color: "#2563EB", bg: "#EFF6FF" },
  {
    label: "Menemukan Sifat",
    desc: "Mencatat sifat seperti bentuk sisi, pasangan bidang sejajar, jumlah sisi, rusuk, dan titik sudut.",
    color: "#16A34A",
    bg: "#F0FDF4",
  },
  { label: "Mengelompokkan", desc: "Membuat beberapa klasifikasi berdasarkan dasar yang dipilih.", color: "#EA580C", bg: "#FFF7ED" },
  {
    label: "Membandingkan",
    desc: "Membandingkan hasil klasifikasi yang berbeda dan memilih strategi yang paling sesuai.",
    color: "#4F46E5",
    bg: "#EEF2FF",
  },
  { label: "Memberi Alasan", desc: "Memberikan alasan matematis untuk mendukung klasifikasi yang dibuat.", color: "#059669", bg: "#ECFDF5" },
  {
    label: "Menarik Kesimpulan",
    desc: "Menemukan prinsip umum tentang cara mengklasifikasikan bangun ruang sisi datar.",
    color: "#E11D48",
    bg: "#FFF1F2",
  },
];

const kemampuan = [
  "Memilih dasar klasifikasi yang sesuai tujuan.",
  "Membandingkan beberapa hasil klasifikasi.",
  "Memberikan alasan matematis yang logis.",
  "Mengevaluasi kelebihan dan kekurangan setiap strategi.",
  "Memperbaiki strategi jika diperlukan.",
  "Menarik kesimpulan dari berbagai strategi yang telah digunakan.",
];

export default function Peta9Step3HubunganKonsep({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 006.5 22H20V4H6.5A2.5 2.5 0 004 6.5v13z" />
          </svg>
          RANGKUMAN 3
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4l3 2" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Hubungan Antar Konsep &amp; Cara Berpikir</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
          Submateri 1 – Bangun Ruang Sisi Datar
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 flex flex-col gap-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              A
            </div>
            <h2 className="m-0 text-base font-bold text-[#2563EB]">Hubungan Antar Konsep</h2>
          </div>
          <div className="flex flex-col gap-3">
            {alur.map((a, i) => (
              <div key={a.label} className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: a.bg, color: a.color, border: `2px solid ${a.color}44` }}
                >
                  {i + 1}
                </div>
                <div className="flex-1 rounded-lg py-2.5 px-3.5" style={{ backgroundColor: a.bg }}>
                  <h3 className="m-0 mb-0.5 text-[13px] font-bold" style={{ color: a.color }}>
                    {a.label}
                  </h3>
                  <p className="m-0 text-xs leading-[1.5] text-[#4B5563]">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 flex flex-col gap-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              B
            </div>
            <h2 className="m-0 text-base font-bold text-[#15803D]">Cara Berpikir yang Telah Dipelajari</h2>
          </div>
          <p className="m-0 text-sm text-[#374151] font-semibold">
            Setelah melalui Tahap 1–6 dan Tantangan Open-Ended, saya mampu:
          </p>
          <div className="flex flex-col gap-2.5">
            {kemampuan.map((k, i) => (
              <label
                key={k}
                className="flex items-center gap-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg py-3 px-3.5 cursor-pointer hover:border-[#16A34A] transition-colors"
              >
                <input
                  type="checkbox"
                  name={`answers.kemampuan_${i}`}
                  value="true"
                  defaultChecked={getValue(`kemampuan_${i}`) === "true"}
                  data-require-group="peta9step3"
                  className="w-4 h-4 rounded border-[#D1D5DB] text-[#16A34A] flex-shrink-0"
                />
                <span className="text-sm text-[#374151] font-medium">{k}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/2`}
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
