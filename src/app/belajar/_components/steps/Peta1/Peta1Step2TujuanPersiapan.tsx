import Image from "next/image";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import { getPageImage } from "@/lib/pageImages";

const tujuanPembelajaran = [
  "Mengenali unsur-unsur bangun ruang sisi datar.",
  "Mengelompokkan bangun ruang berdasarkan berbagai cara yang logis.",
  "Menjelaskan alasan matematis dari setiap hasil klasifikasi.",
  "Membandingkan berbagai alternatif pengelompokan.",
  "Semakin percaya diri dalam menyampaikan dan mempertahankan pendapat.",
];

export default async function Peta1Step2TujuanPersiapan({ materi, peta }: StepComponentProps) {
  const [gambarGeoGebra, gambarAR] = await Promise.all([
    getPageImage("M1-P1-L1-2"),
    getPageImage("M1-P1-L1-3"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={2} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Tujuan &amp; Persiapan
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Tujuan Pembelajaran
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tujuanPembelajaran.map((tujuan, i) => (
            <div
              key={tujuan}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex items-start gap-4"
            >
              <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
                {i + 1}
              </div>
              <p className="m-0 text-sm leading-[1.6] text-[#374151] pt-1">{tujuan}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Eksplorasi dengan Teknologi
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col items-center text-center gap-3">
            <div className="inline-flex items-center gap-2 bg-[#2563EB] text-white rounded-full py-1.5 px-4 text-xs font-bold w-fit">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <rect x="2" y="4" width="20" height="13" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
              GeoGebra 3D
            </div>
            <div className="relative w-full aspect-video rounded-[14px] overflow-hidden bg-[#F3F4F6]">
              <Image src={gambarGeoGebra} alt="Ilustrasi eksplorasi GeoGebra 3D" fill className="object-cover" />
            </div>
            <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
              Untuk mengeksplorasi model bangun ruang dan sifat-sifatnya secara interaktif.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col items-center text-center gap-3">
            <div className="inline-flex items-center gap-2 bg-[#2B3D44] text-white rounded-full py-1.5 px-4 text-xs font-bold w-fit">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <path d="M12 2v20M2 12h20" />
                <circle cx="12" cy="12" r="9" />
              </svg>
              Augmented Reality (AR)
            </div>
            <div className="relative w-full aspect-video rounded-[14px] overflow-hidden bg-[#F3F4F6]">
              <Image src={gambarAR} alt="Ilustrasi eksplorasi Augmented Reality" fill className="object-cover" />
            </div>
            <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
              Untuk mengamati model bangun ruang secara nyata menggunakan teknologi AR.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Ingat!
          </div>
        </div>
        <div className="bg-[#FCE9A8] rounded-2xl p-6 flex flex-col gap-3">
          <p className="m-0 text-sm font-bold text-[#1D4ED8] leading-[1.5]">
            Bangun ruang sisi datar memiliki seluruh sisi berbentuk bangun datar. Kubus, balok,
            prisma, dan limas termasuk bangun ruang sisi datar.
          </p>
          <ul className="m-0 pl-5 flex flex-col gap-1.5 text-sm text-[#374151] leading-[1.6] list-disc">
            <li>Tidak harus satu cara pengelompokan.</li>
            <li>Setiap cara yang kamu temukan bisa jadi berbeda dengan temanmu.</li>
            <li>Tidak ada satu jawaban yang paling benar — yang terpenting alasanmu logis.</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-end">
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer w-full sm:w-auto justify-center">
          MULAI BELAJAR
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
