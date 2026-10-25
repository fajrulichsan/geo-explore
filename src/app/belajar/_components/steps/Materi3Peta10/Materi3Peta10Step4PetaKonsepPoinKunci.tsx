import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
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

const limas = [
  { key: "M3-P10-L4-2", urutan: "2", alt: "Limas segitiga" },
  { key: "M3-P10-L4-3", urutan: "3", alt: "Limas segiempat" },
  { key: "M3-P10-L4-4", urutan: "4", alt: "Limas segilima" },
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
  const [mascotImage, siswaImage, petaKonsepImage] = await Promise.all([
    getPageImage("M3-P10-L4-1"),
    getPageImage("M3-P10-L4-5"),
    getPageImage("M3-P10-L4-6"),
  ]);
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
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center flex-1">
            <EditablePageImage
              imageKey="M3-P10-L4-6"
              materi={materi}
              peta={peta}
              step={step}
              urutan="6"
              src={petaKonsepImage}
              alt="Peta konsep mini: luas permukaan adalah jumlah seluruh luas sisi kubus, balok, dan prisma"
              editable={editFoto}
              natural
              containerClassName="relative w-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {sectionBadge("H", "Poin Penting", "#EA580C")}
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3.5 flex-1 justify-center">
            {poinPenting.map((p, i) => (
              <div key={p} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
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
        <div className="text-center sm:text-left flex-1">
          <h2 className="m-0 mb-1.5 text-2xl font-extrabold text-[#DC2626]">🏆 Hebat!</h2>
          <p className="m-0 text-sm text-[#785900] font-medium leading-[1.6]">
            Kamu telah menemukan sendiri bagaimana luas permukaan kubus, balok, dan prisma
            diperoleh dari jumlah luas seluruh sisinya. Teruslah menggunakan berbagai strategi,
            memberikan alasan matematis, serta percaya pada kemampuanmu dalam menyelesaikan
            masalah matematika!
          </p>
        </div>
        <div className="flex items-end gap-3 flex-shrink-0">
          <EditablePageImage
            imageKey="M3-P10-L4-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={mascotImage}
            alt="Siswi mengacungkan jempol karena telah menyelesaikan rangkuman"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-28 h-40"
          />
          <EditablePageImage
            imageKey="M3-P10-L4-5"
            materi={materi}
            peta={peta}
            step={step}
            urutan="5"
            src={siswaImage}
            alt="Siswa mengepalkan tangan semangat karena telah menyelesaikan rangkuman"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-28 h-40"
          />
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

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/3`} />
        <NextStepButton variant="green" icon="check">Lanjutkan ke Submateri 4</NextStepButton>
      </div>
    </form>
  );
}
