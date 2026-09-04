import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

const bangunRuang = [
  {
    letter: "A",
    imageKey: "M3-P2-L1-2" as PageImageKey,
    nama: "Kubus",
    deskripsi: "Jaring-jaring kubus terdiri atas 6 persegi yang sama besar.",
    catatan: "Setiap persegi mewakili satu sisi kubus.",
    tint: "bg-[#F5F3FF]",
  },
  {
    letter: "B",
    imageKey: "M3-P2-L1-3" as PageImageKey,
    nama: "Balok",
    deskripsi: "Jaring-jaring balok terdiri atas 6 persegi panjang.",
    catatan: "Perhatikan bentuk sisi-sisinya. Apakah ada yang sama?",
    tint: "bg-[#EFF4FF]",
  },
  {
    letter: "C",
    imageKey: "M3-P2-L1-4" as PageImageKey,
    nama: "Prisma Segitiga",
    deskripsi: "Jaring-jaring prisma segitiga terdiri atas 5 sisi (2 segitiga dan 3 persegi panjang).",
    catatan: "Dua sisi berbentuk segitiga adalah alas dan tutup prisma.",
    tint: "bg-[#F0FDF4]",
  },
];

export default async function Materi3Peta2Step1AmatiJaringJaring({
  materi,
  peta,
  step = "1",
  editFoto,
}: StepComponentProps) {
  const [mascotImage, ...bangunImages] = await Promise.all([
    getPageImage("M3-P2-L1-1"),
    ...bangunRuang.map((b) => getPageImage(b.imageKey)),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 1 – Ayo Mengamati dan Berpikir
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-5">
        <EditablePageImage
          imageKey="M3-P2-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={mascotImage}
          alt="Maskot mengamati dengan kaca pembesar"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-28 h-36 sm:w-32 sm:h-40 flex-shrink-0 rounded-2xl overflow-hidden bg-[#EFF4FF]"
        />
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex items-center gap-3.5">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
            <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
              Ayo Mengamati dan Berpikir
            </h1>
          </div>
          <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-xl">
            Amatilah bagaimana setiap bangun ruang dapat dibuka menjadi jaring-jaringnya. Perhatikan
            bentuk dan jumlah sisi yang tampak.
          </p>
          <div className="relative bg-white border border-[#E5E7EB] rounded-2xl rounded-tl-sm shadow-[0_1px_2px_rgba(0,0,0,0.04)] py-3 px-4 w-fit max-w-md flex items-center gap-2.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0">
              <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
            </svg>
            <p className="m-0 text-sm leading-[1.5] text-[#374151]">
              Amatilah berbagai susunan bidang datar di bawah ini dengan cermat!
            </p>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        {bangunRuang.map((b, i) => (
          <div
            key={b.letter}
            className="flex flex-col border border-[#E5E7EB] rounded-[20px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
          >
            <div className="flex items-center gap-2.5 px-4 pt-4">
              <div className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                {b.letter}
              </div>
              <p className="m-0 text-sm font-bold text-[#111827]">{b.nama}</p>
            </div>
            <div className={`relative w-full aspect-[4/3] mt-3 ${b.tint}`}>
              <EditablePageImage
                imageKey={b.imageKey}
                materi={materi}
                peta={peta}
                step={step}
                urutan={String(i + 2)}
                src={bangunImages[i]}
                alt={`Jaring-jaring ${b.nama}`}
                editable={editFoto}
                imageClassName="object-contain"
                containerClassName="relative w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-2 p-4">
              <p className="m-0 text-xs leading-[1.6] text-[#374151] bg-[#F9FAFB] rounded-lg px-3 py-2">
                {b.deskripsi}
              </p>
              <p className="m-0 text-xs leading-[1.6] text-[#4B5563]">{b.catatan}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer w-full sm:w-auto justify-center">
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
