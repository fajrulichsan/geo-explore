import Link from "next/link";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const prisma = ["Segitiga", "Segiempat", "Segilima", "Segi-n"];
const limas = ["Segitiga", "Segiempat", "Segilima", "Segi-n"];

export default async function Peta10Step3PetaKonsep({ materi, peta, editFoto }: StepComponentProps) {
  const prismaMiring = await getPageImage("M1-P10-L3-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={6} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
            <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Rangkuman: Bangun Ruang Sisi Datar</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
          Submateri 1 – Bangun Ruang Sisi Datar
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 flex flex-col gap-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              C
            </div>
            <h2 className="m-0 text-base font-bold text-[#2563EB]">Peta Konsep</h2>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="bg-[#1E3A8A] text-white rounded-full py-2 px-5 text-xs font-bold tracking-wide">
              BANGUN RUANG SISI DATAR
            </div>
            <div className="w-px h-4 bg-[#CBD5E1]" />
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] rounded-full py-1.5 px-4 text-[11px] font-bold">
              KLASIFIKASI BANGUN RUANG
            </div>
            <div className="w-px h-4 bg-[#CBD5E1]" />

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="bg-[#FEE2E2] border border-[#FECACA] text-[#B91C1C] rounded-full py-1.5 px-4 text-[11px] font-bold">
                  PRISMA
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="bg-white border border-[#E5E7EB] rounded-lg py-1.5 px-3 text-[11px] font-semibold text-[#4B5563]">
                    Kubus
                  </span>
                  <span className="bg-white border border-[#E5E7EB] rounded-lg py-1.5 px-3 text-[11px] font-semibold text-[#4B5563]">
                    Balok
                  </span>
                  {prisma.map((p) => (
                    <span
                      key={p}
                      className="bg-white border border-[#E5E7EB] rounded-lg py-1.5 px-3 text-[11px] font-semibold text-[#4B5563]"
                    >
                      Prisma {p}
                    </span>
                  ))}
                </div>
                <div className="mt-1 bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg py-1.5 px-3 text-[10px] font-bold text-[#166534]">
                  Kasus khusus: Kubus &amp; Balok
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-[10px] font-bold text-[#4B5563]">Jenis Prisma:</span>
                  <span className="bg-white border border-[#E5E7EB] rounded-lg py-1 px-2.5 text-[10px] font-semibold text-[#4B5563]">
                    Prisma Tegak
                  </span>
                  <div className="relative w-8 h-8 flex-shrink-0">
                    <EditablePageImage
                      imageKey="M1-P10-L3-1"
                      materi={materi}
                      peta={peta}
                      step="3"
                      urutan="1"
                      src={prismaMiring}
                      alt="Ilustrasi prisma miring"
                      editable={editFoto}
                      imageClassName="object-contain"
                      containerClassName="relative w-8 h-8"
                    />
                  </div>
                  <span className="bg-white border border-[#E5E7EB] rounded-lg py-1 px-2.5 text-[10px] font-semibold text-[#4B5563]">
                    Prisma Miring
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] rounded-full py-1.5 px-4 text-[11px] font-bold">
                  LIMAS
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {limas.map((l) => (
                    <span
                      key={l}
                      className="bg-white border border-[#E5E7EB] rounded-lg py-1.5 px-3 text-[11px] font-semibold text-[#4B5563]"
                    >
                      Limas {l}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-[20px] p-6 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-[#92400E] font-bold text-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#92400E" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
            Catatan Penting
          </div>
          <p className="m-0 text-sm leading-[1.6] text-[#78350F]">
            Cara pengelompokan yang kamu pilih pada Tantangan Open-Ended adalah contoh penerapan berbagai dasar
            klasifikasi di atas.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/2`}
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
