import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import BackLink from "@/app/belajar/_components/BackLink";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const dasar = [
  {
    title: "Bentuk dan susunan sisi",
    key: "M1-P10-L2-1" as const,
    desc: "Bentuk dan susunan semua sisinya.",
    color: "#2563EB",
    bg: "#EFF6FF",
  },
  {
    title: "Bentuk sisi yang dipilih sebagai alas",
    key: "M1-P10-L2-2" as const,
    desc: "Bentuk sisi yang dipilih sebagai alas ditentukan sesuai posisi bangun yang diamati.",
    color: "#16A34A",
    bg: "#F0FDF4",
  },
  {
    title: "Pasangan bidang sisi sejajar",
    key: "M1-P10-L2-3" as const,
    desc: "Pasangan sisi yang sejajar dan kongruen.",
    color: "#0EA5E9",
    bg: "#F0F9FF",
  },
  {
    title: "Jumlah sisi",
    key: "M1-P10-L2-4" as const,
    desc: "Banyak bidang sisi yang membatasi bangun.",
    color: "#7C3AED",
    bg: "#F5F3FF",
  },
  {
    title: "Jumlah rusuk",
    key: "M1-P10-L2-5" as const,
    desc: "Banyak rusuk yang dimiliki bangun.",
    color: "#DC2626",
    bg: "#FEF2F2",
  },
  {
    title: "Jumlah titik sudut",
    key: "M1-P10-L2-6" as const,
    desc: "Banyak titik sudut yang dimiliki bangun.",
    color: "#D97706",
    bg: "#FFFBEB",
  },
  {
    title: "Sifat-sifat lain yang relevan",
    desc: "Sifat atau hal lain yang dapat membantu pengelompokan.",
    color: "#4B5563",
    bg: "#F9FAFB",
  },
];

export default async function Peta10Step2DasarKlasifikasi({ materi, peta, editFoto }: StepComponentProps) {
  const gambar = await Promise.all(dasar.map((d) => (d.key ? getPageImage(d.key) : Promise.resolve(""))));
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={6} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
            <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Rangkuman</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
          Submateri 1 – Bangun Ruang Sisi Datar
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Dasar Klasifikasi yang Dapat Digunakan
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {dasar.map((d, i) => (
            <div
              key={d.title}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 flex flex-col gap-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <div className="rounded-2xl p-2" style={{ backgroundColor: d.bg }}>
                {d.key ? (
                  <EditablePageImage
                    imageKey={d.key}
                    materi={materi}
                    peta={peta}
                    step="2"
                    urutan={String(i + 1)}
                    src={gambar[i]}
                    alt={d.title}
                    editable={editFoto}
                    imageClassName="object-contain"
                    containerClassName="relative w-full h-24"
                  />
                ) : (
                  <div className="w-full h-24 flex items-center justify-center text-3xl font-extrabold text-[#4B5563]">...</div>
                )}
              </div>
              <h3 className="m-0 text-sm font-bold" style={{ color: d.color }}>
                {d.title}
              </h3>
              <p className="m-0 text-[13px] leading-[1.5] text-[#4B5563]">{d.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-xl py-3 px-4 flex items-center gap-2.5 text-[#92400E] text-[13px] font-semibold">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#FACC15" stroke="#D97706" strokeWidth="1">
            <path d="M9 21h6M12 3a6 6 0 00-3.5 10.9c.4.3.5.7.5 1.1v.5h6v-.5c0-.4.1-.8.5-1.1A6 6 0 0012 3z" />
          </svg>
          Dasar klasifikasi dapat dipilih sesuai tujuan pengelompokan.
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/1`} />
        <NextStepButton />
      </div>
    </form>
  );
}
