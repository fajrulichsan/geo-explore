import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

const tints = [
  "bg-[#EFF4FF]",
  "bg-[#F0FDF4]",
  "bg-[#FEF9E7]",
  "bg-[#FDF2F8]",
  "bg-[#F5F3FF]",
];

const susunan = [
  { letter: "A", imageKey: "M2-P2-L1-1", featured: true },
  { letter: "B", imageKey: "M2-P2-L1-2" },
  { letter: "C", imageKey: "M2-P2-L1-3" },
  { letter: "D", imageKey: "M2-P2-L1-4" },
  { letter: "E", imageKey: "M2-P2-L1-5" },
  { letter: "F", imageKey: "M2-P2-L1-6" },
  { letter: "G", imageKey: "M2-P2-L1-7" },
  { letter: "H", imageKey: "M2-P2-L1-8" },
  { letter: "I", imageKey: "M2-P2-L1-9" },
  { letter: "J", imageKey: "M2-P2-L1-10" },
] satisfies { letter: string; imageKey: PageImageKey; featured?: boolean }[];

export default async function Materi2Peta2Step1Amati({ materi, peta, step = "1", editFoto }: StepComponentProps) {
  const [susunanImages, mascotImage] = await Promise.all([
    Promise.all(susunan.map((s) => getPageImage(s.imageKey))),
    getPageImage("M2-P2-L1-12"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 1 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-5">
        <EditablePageImage
          imageKey="M2-P2-L1-12"
          materi={materi}
          peta={peta}
          step={step}
          urutan="12"
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
          <div className="relative bg-white border border-[#E5E7EB] rounded-2xl rounded-tl-sm shadow-[0_1px_2px_rgba(0,0,0,0.04)] py-3 px-4 w-fit max-w-md flex items-center gap-2.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0">
              <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
            </svg>
            <p className="m-0 text-sm leading-[1.5] text-[#374151]">
              Amati berbagai susunan bidang datar di bawah ini dengan cermat!
            </p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] px-7 py-8 sm:px-10 sm:py-9">
        <div className="absolute -right-10 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <div className="absolute -right-4 bottom-[-40px] w-32 h-32 rounded-full bg-white/10" />
        <div className="relative flex items-center gap-3 mb-3">
          <div className="w-[34px] h-[34px] rounded-full bg-white text-[#2563EB] flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white/15 border border-white/25 rounded-full py-2 px-5 text-sm font-bold text-white">
            Amati Berbagai Gambar Berikut
          </div>
        </div>
        <p className="relative m-0 max-w-xl text-[15px] leading-[1.6] text-white/90">
          Berikut adalah beberapa susunan bidang datar. Perhatikan dengan teliti — apakah menurutmu
          susunan ini bisa dilipat menjadi sebuah bangun ruang?
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
        {susunan.map((s, i) => (
          <div
            key={s.letter}
            className={`relative border border-[#E5E7EB] rounded-[18px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all ${tints[i % tints.length]} ${
              s.featured ? "col-span-2" : ""
            }`}
          >
            <EditablePageImage
              imageKey={s.imageKey}
              materi={materi}
              peta={peta}
              step={step}
              urutan={String(i + 1)}
              src={susunanImages[i]}
              alt={`Susunan bidang datar ${s.letter}`}
              editable={editFoto}
              containerClassName={`relative w-full ${s.featured ? "aspect-[2/1]" : "aspect-square"}`}
            />
            <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.12)] flex items-center justify-center">
              <span className="text-sm font-extrabold text-[#2563EB]">{s.letter}</span>
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
