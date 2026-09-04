import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const bangunRuang = [
  {
    huruf: "B",
    judul: "Luas Permukaan Kubus",
    warna: "#16A34A",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    ciri: ["Keenam sisinya berbentuk persegi yang kongruen.", "Semua sisi sama bentuk dan ukurannya."],
    label: "Jaring-jaring Kubus",
    rumus: "LP = 6s²",
    mengapa: "Karena terdapat enam persegi kongruen (semua sisi sama bentuk dan ukurannya).",
  },
  {
    huruf: "C",
    judul: "Luas Permukaan Balok",
    warna: "#1E3A8A",
    bg: "#EFF6FF",
    border: "#BFDBFE",
    ciri: ["Memiliki tiga pasang sisi yang kongruen.", "Sisi yang berhadapan sama bentuk dan ukurannya."],
    label: "Jaring-jaring Balok",
    rumus: "LP = 2(pl + pt + lt)",
    mengapa: "Karena terdapat tiga pasang sisi yang kongruen (sisi yang berhadapan sama bentuk dan ukurannya).",
  },
  {
    huruf: "D",
    judul: "Luas Permukaan Prisma",
    warna: "#EA580C",
    bg: "#FFF7ED",
    border: "#FED7AA",
    ciri: ["Untuk setiap prisma, luas permukaan diperoleh dari:", "2 × luas alas, ditambah luas selimut (jumlah luas seluruh sisi tegak)."],
    label: "Jaring-jaring Prisma (contoh)",
    rumus: "LP = 2Lₐ + Lₛ",
    mengapa: "Karena luas permukaan merupakan gabungan dua luas alas dan luas seluruh sisi tegaknya.",
  },
];

export default async function Materi3Peta10Step2RumusLuasPermukaan({
  materi,
  peta,
}: StepComponentProps) {
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={4} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Rangkuman Luas Permukaan Kubus, Balok, dan Prisma
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {bangunRuang.map((b) => (
          <div
            key={b.huruf}
            className="flex flex-col gap-4 rounded-[20px] border p-5"
            style={{ backgroundColor: b.bg, borderColor: b.border }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-[30px] h-[30px] rounded-full text-white flex items-center justify-center font-bold text-sm flex-shrink-0"
                style={{ backgroundColor: b.warna }}
              >
                {b.huruf}
              </div>
              <p className="m-0 text-sm font-extrabold" style={{ color: b.warna }}>
                {b.judul}
              </p>
            </div>

            <ul className="m-0 pl-5 flex flex-col gap-1.5 text-xs text-[#4B5563]">
              {b.ciri.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            <div className="flex flex-col items-center gap-2 py-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.4">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
              <p className="m-0 text-[11px] font-semibold text-[#6B7280]">{b.label}</p>
            </div>

            <div className="bg-white rounded-xl py-3 px-4 text-center border" style={{ borderColor: b.border }}>
              <p className="m-0 text-base font-extrabold" style={{ color: b.warna }}>
                {b.rumus}
              </p>
            </div>

            <div className="bg-white/70 border border-dashed rounded-xl p-3 flex items-start gap-2" style={{ borderColor: b.border }}>
              <span className="flex-shrink-0">💡</span>
              <p className="m-0 text-xs text-[#4B5563] leading-[1.5]">
                <span className="font-bold">Mengapa? </span>
                {b.mengapa}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
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
