import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const poinPenting = [
  "Luas permukaan berasal dari jumlah luas seluruh sisi.",
  "Jaring-jaring membantu melihat seluruh sisi bangun.",
  "Rumus luas permukaan diperoleh dari pola yang ditemukan dan digeneralisasikan.",
  "Satu masalah dapat diselesaikan dengan berbagai strategi.",
  "Alasan matematis sama pentingnya dengan hasil akhir.",
];

const kataKunci = [
  "Kubus",
  "Balok",
  "Prisma",
  "Jaring-jaring",
  "Luas Permukaan",
  "Luas Alas",
  "Luas Selimut",
  "Sisi Tegak",
  "Sisi Kongruen",
  "Jumlah Luas Seluruh Sisi",
  "Rumus Luas Permukaan",
  "Strategi Penyelesaian",
  "Alasan Matematis",
];

const rumus = [
  { bangun: "Kubus", tone: "bg-[#DCFCE7] text-[#166534]", rumus: <>6s<sup>2</sup></> },
  { bangun: "Balok", tone: "bg-[#DBEAFE] text-[#1E40AF]", rumus: "2(pl + pt + lt)" },
  { bangun: "Prisma", tone: "bg-[#FFEDD5] text-[#9A3412]", rumus: <>2L<sub>a</sub> + L<sub>s</sub></> },
];

const limas = [
  { key: "M3-P10-L4-2", urutan: "2", alt: "Limas oranye" },
  { key: "M3-P10-L4-3", urutan: "3", alt: "Limas biru" },
  { key: "M3-P10-L4-4", urutan: "4", alt: "Limas segi lima hijau" },
] as const;

const sectionBadge = (letter: string, title: string, color: string) => (
  <div className="flex items-center gap-3 flex-wrap">
    <div
      className="w-[34px] h-[34px] rounded-full text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0"
      style={{ backgroundColor: color }}
    >
      {letter}
    </div>
    <div
      className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold"
      style={{ color }}
    >
      {title}
    </div>
  </div>
);

export default async function Materi3Peta10Step4PetaKonsepPoinKunci({
  materi,
  peta,
  step = "4",
  editFoto,
}: StepComponentProps) {
  const mascotImage = await getPageImage("M3-P10-L4-1");
  const limasImages = await Promise.all(limas.map((l) => getPageImage(l.key)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={4} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Rangkuman Luas Permukaan Kubus, Balok, dan Prisma
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          {sectionBadge("G", "Peta Konsep Mini", "#7C3AED")}
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col items-center gap-3 flex-1">
            <div className="rounded-xl bg-[#F3E8FF] border border-[#E9D5FF] px-6 py-2 text-sm font-extrabold text-[#6B21A8]">
              LUAS PERMUKAAN
            </div>
            <div className="w-0.5 h-3 bg-[#9CA3AF]" />
            <div className="rounded-xl bg-[#F3E8FF] border border-[#E9D5FF] px-5 py-2 text-sm font-semibold text-[#6B21A8] text-center">
              Jumlah seluruh luas sisi
            </div>
            <div className="w-0.5 h-3 bg-[#9CA3AF]" />
            <div className="grid grid-cols-3 gap-3 w-full">
              {rumus.map((r) => (
                <div key={r.bangun} className="flex flex-col items-center gap-2">
                  <div className={`w-full rounded-xl px-2 py-2 text-center text-sm font-bold ${r.tone}`}>
                    {r.bangun}
                  </div>
                  <span className="text-[#9CA3AF]">↓</span>
                  <div className="w-full rounded-xl border border-[#E5E7EB] bg-white px-2 py-2 text-center text-xs sm:text-sm font-bold text-[#111827]">
                    {r.rumus}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full rounded-xl bg-[#EFF6FF] border border-[#DBEAFE] px-4 py-3 text-xs text-[#1E3A8A] leading-[1.7]">
              <p className="m-0">
                <span className="font-extrabold">L<sub>a</sub></span> = luas alas
              </p>
              <p className="m-0">
                <span className="font-extrabold">L<sub>s</sub></span> = luas selimut (jumlah luas
                seluruh sisi tegak)
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {sectionBadge("H", "Poin Penting", "#EA580C")}
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3.5 flex-1 justify-center">
            {poinPenting.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[11px] flex-shrink-0 mt-0.5">
                  ✓
                </span>
                <p className="m-0 text-sm text-[#374151] leading-[1.5]">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {sectionBadge("I", "Kata Kunci", "#2563EB")}
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-wrap gap-2">
          {kataKunci.map((k) => (
            <span key={k} className="rounded-full bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-1.5 text-xs font-bold text-[#374151]">
              {k}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-[#FDF3C7] rounded-[20px] p-6 flex flex-col sm:flex-row items-center gap-5">
        <EditablePageImage
          imageKey="M3-P10-L4-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={mascotImage}
          alt="Maskot siswi mengacungkan jempol karena telah menyelesaikan rangkuman"
          editable={editFoto}
          imageClassName="object-contain mix-blend-multiply"
          containerClassName="relative w-40 h-36 flex-shrink-0"
        />
        <div className="text-center sm:text-left">
          <h2 className="m-0 mb-1.5 text-2xl font-extrabold text-[#DC2626]">🏆 Hebat!</h2>
          <p className="m-0 text-sm text-[#785900] font-medium leading-[1.6]">
            Kamu telah menemukan sendiri bagaimana luas permukaan kubus, balok, dan prisma
            diperoleh dari jumlah luas seluruh sisinya. Teruslah menggunakan berbagai strategi,
            memberikan alasan matematis, serta percaya pada kemampuanmu dalam menyelesaikan
            masalah matematika!
          </p>
        </div>
      </div>

      <div className="bg-[#EFF6FF] rounded-[20px] p-5 sm:p-6 flex flex-col md:flex-row items-center gap-5">
        <div className="w-12 h-12 rounded-full bg-[#2563EB] flex items-center justify-center text-2xl flex-shrink-0">
          🚀
        </div>
        <div className="flex-1">
          <p className="m-0 mb-1 text-base font-extrabold text-[#2563EB]">Selanjutnya</p>
          <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
            Bersiaplah mempelajari Submateri 4 — Luas Permukaan Limas. Temukan apakah cara
            menentukan luas permukaannya memiliki persamaan atau perbedaan dengan kubus, balok,
            dan prisma yang telah kamu pelajari.
          </p>
        </div>
        <div className="flex items-end gap-3 flex-shrink-0">
          {limas.map((l, i) => (
            <EditablePageImage
              key={l.key}
              imageKey={l.key}
              materi={materi}
              peta={peta}
              step={step}
              urutan={l.urutan}
              src={limasImages[i]}
              alt={l.alt}
              editable={editFoto}
              imageClassName="object-contain mix-blend-multiply"
              containerClassName="relative w-16 h-16 sm:w-20 sm:h-20"
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-4 px-7 text-sm font-bold shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
