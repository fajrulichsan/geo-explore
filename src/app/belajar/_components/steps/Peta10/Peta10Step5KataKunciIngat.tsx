import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import BackLink from "@/app/belajar/_components/BackLink";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const kataKunci = [
  "Bangun ruang sisi datar",
  "Bentuk sisi yang dipilih sebagai alas",
  "Kubus",
  "Pasangan bidang sisi sejajar",
  "Balok",
  "Jumlah sisi",
  "Prisma",
  "Jumlah rusuk",
  "Limas",
  "Jumlah titik sudut",
  "Klasifikasi",
  "Sifat-sifat lain",
  "Bentuk dan susunan sisi",
  "Alasan matematis",
];


export default async function Peta10Step5KataKunciIngat({ materi, peta, editFoto }: StepComponentProps) {
  const catatan = await getPageImage("M1-P10-L5-1");
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={6} />
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

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 flex flex-col gap-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              F
            </div>
            <h2 className="m-0 text-base font-bold text-[#6D28D9]">Kata Kunci</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {kataKunci.map((k) => (
              <div
                key={k}
                className="flex items-center gap-2 bg-[#F5F3FF] border border-[#DDD6FE] rounded-lg py-2 px-3 text-[13px] font-semibold text-[#5B21B6]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] flex-shrink-0" />
                {k}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <EditablePageImage
            imageKey="M1-P10-L5-1"
            materi={materi}
            peta={peta}
            step="5"
            urutan="1"
            src={catatan}
            alt="Ingat! Cara klasifikasi yang baik menggunakan dasar yang jelas, konsisten, dan beralasan matematis"
            editable={editFoto}
            natural
            containerClassName="relative w-full rounded-[20px] overflow-hidden"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/4`} />
        <NextStepButton />
      </div>
    </form>
  );
}
