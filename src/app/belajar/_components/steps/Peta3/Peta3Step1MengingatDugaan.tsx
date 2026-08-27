import Link from "next/link";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const pertanyaan = [
  "Apa informasi penting yang ingin kalian cari mengenai bangun ruang tersebut?",
  "Mengapa kelompok kalian memilih dugaan tersebut?",
  "Data apa saja yang sekiranya dibutuhkan untuk membuktikan dugaan itu?",
];

export default function Peta3Step1MengingatDugaan({ materi, peta }: StepComponentProps) {
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={10} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4l3 2" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              A
            </div>
            <h2 className="m-0 text-lg font-bold text-[#2563EB]">Mengingat Dugaan Kelompok</h2>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            <p className="m-0 text-[15px] leading-[1.6] text-[#374151]">
              Pada tahap sebelumnya, kalian telah membuat dugaan bersama kelompok. Mari kita ingat
              kembali fokus utama dari dugaan tersebut.
            </p>
            <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
                <h3 className="m-0 text-sm font-bold text-[#111827]">Informasi yang Dicari:</h3>
              </div>
              <ul className="m-0 p-0 flex flex-col gap-3 list-none">
                {pertanyaan.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 flex-shrink-0" />
                    <span className="text-sm leading-[1.6] text-[#374151]">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3 px-6 text-sm font-bold cursor-pointer shadow-[0_4px_10px_rgba(37,99,235,0.3)]"
              >
                Tulis Catatan
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                  <path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] h-full flex flex-col items-center justify-center gap-3">
            <div className="w-full aspect-square rounded-2xl bg-[#EFF4FF] flex items-center justify-center text-xs text-[#9CA3AF]">
              Ilustrasi
            </div>
            <span className="inline-block bg-[#FDC003]/30 text-[#785900] px-3 py-1 rounded-full text-xs font-bold">
              Referensi Visual
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/2/8`}
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
