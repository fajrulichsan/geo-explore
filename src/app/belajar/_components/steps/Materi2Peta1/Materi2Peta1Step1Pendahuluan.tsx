import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const tujuanPembelajaran = [
  "Menjelaskan hubungan antara bangun ruang sisi datar dan jaring-jaringnya.",
  "Menentukan jaring-jaring yang valid dan tidak valid.",
  "Menemukan lebih dari satu bentuk jaring-jaring dari bangun ruang yang sama.",
  "Membandingkan berbagai jaring-jaring bangun ruang.",
];

export default function Materi2Peta1Step1Pendahuluan({ materi, peta }: StepComponentProps) {
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={1} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M3 7l9-4 9 4-9 4-9-4z" />
            <path d="M3 12l9 4 9-4M3 17l9 4 9-4" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Jaring-Jaring Bangun Ruang Sisi Datar
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Tahukah Kamu?
          </div>
        </div>

        <div className="relative bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] pt-8 px-7 pb-6 mt-2">
          <div className="absolute -top-[18px] left-6 w-10 h-10 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.08)] flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
              <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
            </svg>
          </div>
          <p className="m-0 mb-3 text-[15px] leading-[1.6] text-[#374151]">
            Pernahkah kamu membuka sebuah kotak kado atau kardus hingga menjadi lembaran datar? Susunan
            bidang datar tersebut disebut{" "}
            <span className="text-[#2563EB] font-bold">jaring-jaring bangun ruang</span>.
          </p>
          <div className="mt-4 bg-[#FCE9A8] rounded-xl py-3.5 px-[18px]">
            <p className="m-0 text-sm font-bold text-[#1D4ED8] leading-[1.5]">
              Menurutmu, apakah setiap bangun ruang hanya punya satu bentuk jaring-jaring?
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
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
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Ingat!
          </div>
        </div>
        <div className="bg-[#FCE9A8] rounded-2xl p-6 flex flex-col gap-3">
          <p className="m-0 text-sm font-bold text-[#1D4ED8] leading-[1.5]">
            Saat mengamati jaring-jaring, perhatikan hal-hal berikut:
          </p>
          <ul className="m-0 pl-5 flex flex-col gap-1.5 text-sm text-[#374151] leading-[1.6] list-disc">
            <li>Amati susunan sisi yang membentuk jaring-jaring.</li>
            <li>Hitung dengan cermat jumlah sisi pada bangun datar.</li>
            <li>Identifikasi bagian yang perlu dipotong atau dilipat untuk membentuk bangun ruang.</li>
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
