import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

type Bangun = {
  letter: string;
  title: string;
  accent: string;
  soft: string;
  imageKey: PageImageKey;
  urutan: string;
  imageAlt: string;
  points: string[];
  rumus: React.ReactNode;
  alasan: React.ReactNode;
};

const bangun: Bangun[] = [
  {
    letter: "B",
    title: "Luas Permukaan Kubus",
    accent: "#2563EB",
    soft: "#EFF6FF",
    imageKey: "M3-P10-L2-1",
    urutan: "1",
    imageAlt: "Kubus dan jaring-jaring kubus",
    points: ["Keenam sisinya berbentuk persegi yang kongruen.", "Semua sisi sama bentuk dan ukurannya."],
    rumus: (
      <>
        LP = 6s<sup>2</sup>
      </>
    ),
    alasan: "Karena terdapat enam persegi kongruen (semua sisi sama bentuk dan ukurannya).",
  },
  {
    letter: "C",
    title: "Luas Permukaan Balok",
    accent: "#166534",
    soft: "#F0FDF4",
    imageKey: "M3-P10-L2-2",
    urutan: "2",
    imageAlt: "Balok dan jaring-jaring balok",
    points: [
      "Memiliki tiga pasang sisi yang kongruen.",
      "Sisi yang berhadapan sama bentuk dan ukurannya.",
    ],
    rumus: "LP = 2(pl + pt + lt)",
    alasan:
      "Karena terdapat tiga pasang sisi yang kongruen (sisi yang berhadapan sama bentuk dan ukurannya).",
  },
  {
    letter: "D",
    title: "Luas Permukaan Prisma",
    accent: "#EA580C",
    soft: "#FFF7ED",
    imageKey: "M3-P10-L2-3",
    urutan: "3",
    imageAlt: "Prisma segitiga dan jaring-jaring prisma",
    points: ["Untuk setiap prisma, luas permukaan diperoleh dari:", "2 × luas alas + luas selimut (jumlah luas seluruh sisi tegak)"],
    rumus: (
      <>
        LP = 2L<sub>a</sub> + L<sub>s</sub>
      </>
    ),
    alasan: "Karena luas permukaan merupakan gabungan dua luas alas dan luas seluruh sisi tegaknya.",
  },
];

export default async function Materi3Peta10Step2LuasKubusBalokPrisma({
  materi,
  peta,
  step = "2",
  editFoto,
}: StepComponentProps) {
  const images = await Promise.all(bangun.map((b) => getPageImage(b.imageKey)));

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
        {bangun.map((b, i) => (
          <div
            key={b.letter}
            className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-[34px] h-[34px] rounded-full text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0"
                style={{ backgroundColor: b.accent }}
              >
                {b.letter}
              </div>
              <p className="m-0 text-sm font-extrabold" style={{ color: b.accent }}>
                {b.title}
              </p>
            </div>

            <ul className="m-0 pl-5 flex flex-col gap-1.5 text-sm text-[#374151] leading-[1.5]">
              {b.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>

            <EditablePageImage
              imageKey={b.imageKey}
              materi={materi}
              peta={peta}
              step={step}
              urutan={b.urutan}
              src={images[i]}
              alt={b.imageAlt}
              editable={editFoto}
              imageClassName="object-contain mix-blend-multiply"
              containerClassName="relative mx-auto w-36 h-56"
            />

            <p className="m-0 text-center text-xs font-semibold text-[#6B7280]">
              Jaring-jaring {b.title.replace("Luas Permukaan ", "")}
            </p>

            <div className="mt-auto flex flex-col gap-4">
            <div
              className="rounded-2xl border-2 py-3 px-4 text-center text-lg font-extrabold"
              style={{ borderColor: b.accent, color: b.accent, backgroundColor: b.soft }}
            >
              {b.rumus}
            </div>

            <div className="rounded-2xl p-3.5 flex gap-2.5" style={{ backgroundColor: b.soft }}>
              <span className="text-lg flex-shrink-0">💡</span>
              <p className="m-0 text-xs text-[#374151] leading-[1.55]">
                <span className="font-extrabold" style={{ color: b.accent }}>
                  Mengapa?
                </span>{" "}
                {b.alasan}
              </p>
            </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E6A8] rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
        <span className="text-3xl flex-shrink-0">⭐</span>
        <div className="flex flex-col gap-1">
          <p className="m-0 text-base font-extrabold text-[#DC2626]">Ingat!</p>
          <p className="m-0 text-sm font-semibold text-[#1E3A8A]">
            Semua rumus berasal dari penjumlahan luas seluruh sisi. Pahami asal-usulnya, bukan
            sekadar menghafalnya.
          </p>
        </div>
        <p className="m-0 text-sm text-[#2563EB] font-medium sm:ml-auto sm:max-w-xs">
          📢 Rangkuman ini membantumu mengingat kembali konsep yang telah kamu temukan selama
          proses pembelajaran.
        </p>
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
