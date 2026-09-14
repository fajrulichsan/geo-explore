import Link from "next/link";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

const bangun = [
  { n: 1, label: "Kubus", desc: "6 sisi persegi identik", imageKey: "M1-P4-L2-1" },
  { n: 2, label: "Balok", desc: "Sisi berhadapan sama luas", imageKey: "M1-P4-L2-2" },
  { n: 3, label: "Prisma Segitiga", desc: "Dua alas segitiga sejajar dan kongruen", imageKey: "M1-P4-L2-3" },
  { n: 4, label: "Limas Segiempat", desc: "Alas berbentuk persegi", imageKey: "M1-P4-L2-4" },
  { n: 5, label: "Limas Segitiga", desc: "Alas berbentuk segitiga", imageKey: "M1-P4-L2-5" },
] satisfies { n: number; label: string; desc: string; imageKey: PageImageKey }[];

export default async function Peta4Step2PilihBangunRuang({ materi, peta, step = "2", editFoto }: StepComponentProps) {
  const bangunImages = await Promise.all(bangun.map((b) => getPageImage(b.imageKey)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={10} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4l3 2" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Ayo Mengeksplorasi dengan GeoGebra 3D</h1>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Pilih bangun yang perlu kamu amati sesuai dugaan kelompokmu. Ulangi pengamatan pada bangun
          lain jika diperlukan.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {bangun.map((b, i) => (
          <div
            key={b.n}
            className="bg-white border border-[#E5E7EB] rounded-2xl p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col items-center text-center gap-2 relative"
          >
            <div className="absolute top-2 left-2 w-5 h-5 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[10px] font-bold text-[#6B7280] z-10">
              {b.n}
            </div>
            <EditablePageImage
              imageKey={b.imageKey}
              materi={materi}
              peta={peta}
              step={step}
              urutan={String(i + 1)}
              src={bangunImages[i]}
              alt={b.label}
              editable={editFoto}
              containerClassName="relative w-full aspect-square rounded-xl overflow-hidden bg-[#F9FAFB]"
            />
            <h3 className="m-0 text-xs font-bold text-[#111827]">{b.label}</h3>
            <p className="m-0 text-[11px] text-[#6B7280] leading-[1.3]">{b.desc}</p>
          </div>
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
