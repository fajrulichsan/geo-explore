import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

const model = [
  { imageKey: "M1-P2-L4-1", label: "Kubus", note: null },
  { imageKey: "M1-P2-L4-2", label: "Balok", note: null },
  { imageKey: "M1-P2-L4-3", label: "Prisma Segitiga", note: "dua alas segitiga sejajar dan kongruen" },
  { imageKey: "M1-P2-L4-4", label: "Limas Segiempat", note: "alas berbentuk persegi" },
  { imageKey: "M1-P2-L4-5", label: "Limas Segitiga", note: "alas berbentuk segitiga" },
] satisfies { imageKey: PageImageKey; label: string; note: string | null }[];

export default async function Peta2Step4AmatiModel({ materi, peta, step = "4", editFoto }: StepComponentProps) {
  const images = await Promise.all(model.map((m) => getPageImage(m.imageKey)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={7} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 1 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Amati Model Bangun Ruang
          </div>
        </div>
        <p className="m-0 text-[15px] leading-[1.7] text-[#374151]">
          Perhatikan bentuk sisi dan bentuk keseluruhan dari model bangun ruang berikut.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {model.map((m, i) => (
          <div
            key={m.imageKey}
            className="bg-white border border-[#DBE5FB] rounded-[18px] p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col items-center gap-3"
          >
            <EditablePageImage
              imageKey={m.imageKey}
              materi={materi}
              peta={peta}
              step={step}
              urutan={String(i + 1)}
              src={images[i]}
              alt={m.label}
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-full aspect-[4/3]"
            />
            <div className="flex items-start gap-2 w-full">
              <span className="w-6 h-6 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                {i + 1}
              </span>
              <div className="flex flex-col pt-0.5">
                <span className="text-[13px] font-bold leading-tight text-[#1E3A8A]">{m.label}</span>
                {m.note && <span className="text-[11px] leading-tight text-[#6B7280] mt-1">({m.note})</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl py-3.5 px-5 flex items-center gap-3">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0">
          <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
        </svg>
        <p className="m-0 text-sm leading-[1.6] text-[#374151]">
          Gunakan imajinasimu! Pada tahap ini, fokuslah pada bentuk umum, belum menghitung banyak sisi, rusuk, atau
          titik sudut.
        </p>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/3`} />
        <NextStepButton />
      </div>
    </form>
  );
}
