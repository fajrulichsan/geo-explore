import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const alur = [
  { label: "Data dari GeoGebra 3D", ikon: <path d="M3 5h18v11H3zM8 20h8M12 16v4M9 12l3-4 3 4z" /> },
  { label: "Data dari Augmented Reality (AR)", ikon: <path d="M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM12 18h.01M9 9l3-2 3 2v4l-3 2-3-2z" /> },
  { label: "Pola yang ditemukan dan disepakati kelompok", ikon: <path d="M10.5 4a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM15.5 15.5L21 21" /> },
  { label: "Siap ke Tahap 5 – Ayo Verifikasi", ikon: <path d="M9 4h6v3H9zM6 5h12v16H6zM9 12l2 2 4-4M9 17h6" /> },
];

const selesai = [
  "Mengolah data hasil eksplorasi",
  "Menemukan pola pengelompokan",
  "Membandingkan strategi klasifikasi",
  "Menyusun hasil pengolahan sementara",
];

const ingatKembali = ["Gunakan data untuk mendukung pola dan hasil pengolahanmu.", "Diskusikan dengan teman kelompokmu."];

export default async function Peta5Step9SiapKeTahapBerikutnya({ materi, peta }: StepComponentProps) {

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="9" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={9} totalSteps={9} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" className="flex-shrink-0">
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="M15.5 15.5L21 21" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            K
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Siap ke Tahap Berikutnya
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {alur.map((a, i) => (
            <div key={a.label} className="relative bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col items-center gap-3 text-center">
              <span className="w-12 h-12 rounded-full bg-[#EFF4FF] flex items-center justify-center">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {a.ikon}
                </svg>
              </span>
              <p className="m-0 text-sm font-bold text-[#1E3A8A] leading-[1.5]">{a.label}</p>
              {i < alur.length - 1 && (
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 sm:hidden text-[#2563EB] font-bold">↓</span>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#EFF4FF] border border-[#DBE5FB] rounded-[20px] p-5 flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#2563EB" className="flex-shrink-0">
                <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z" />
              </svg>
              <p className="m-0 text-sm font-bold text-[#1E3A8A]">Kamu telah menyelesaikan:</p>
            </div>
            <ul className="m-0 p-0 list-none flex flex-col gap-2.5">
              {selesai.map((teks) => (
                <li key={teks} className="flex items-center gap-3 text-sm text-[#374151]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.2" className="flex-shrink-0">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
                    <path d="M8 12.5l3 3 5-6" />
                  </svg>
                  {teks}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#FEF9E7] border border-dashed border-[#F5C542] rounded-[20px] p-5 flex flex-col gap-3">
            <p className="m-0 text-sm font-bold text-[#92400E]">Ingat kembali:</p>
            <ul className="m-0 p-0 list-none flex flex-col gap-2.5">
              {ingatKembali.map((teks) => (
                <li key={teks} className="flex items-start gap-3 text-sm text-[#374151]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.2" className="flex-shrink-0">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
                    <path d="M8 12.5l3 3 5-6" />
                  </svg>
                  {teks}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/8`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
