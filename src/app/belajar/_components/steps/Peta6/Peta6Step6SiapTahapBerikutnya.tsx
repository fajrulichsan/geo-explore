import Link from "next/link";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const alur = [
  { label: "Data Pengamatan", desc: "Mengumpulkan fakta dari lapangan" },
  { label: "Hasil Pengolahan", desc: "Menganalisis pola spasial" },
  { label: "Verifikasi", desc: "Memastikan keakuratan data" },
];

const ringkasan = [
  "Berhasil mengumpulkan dan mengelompokkan 100% data primer.",
  "Menyelesaikan pemetaan sebaran lokasi studi.",
  "Memverifikasi hipotesis awal dengan data lapangan.",
];

export default function Peta6Step6SiapTahapBerikutnya({ materi, peta }: StepComponentProps) {
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={6} />
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            F
          </div>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Siap ke Tahap Berikutnya</h1>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Luar biasa! Kamu telah menyelesaikan tahap verifikasi. Mari kita lihat alur perjalananmu sebelum
          melangkah ke tahap akhir.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-[#E5E7EB] -z-10 -translate-y-1/2 rounded-full" />
        {alur.map((a) => (
          <div
            key={a.label}
            className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col items-center text-center gap-2"
          >
            <div className="w-10 h-10 rounded-full bg-[#EFF4FF] text-[#2563EB] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
              </svg>
            </div>
            <h3 className="m-0 text-sm font-bold text-[#111827]">{a.label}</h3>
            <p className="m-0 text-xs text-[#6B7280]">{a.desc}</p>
          </div>
        ))}
        <div className="bg-[#2563EB] text-white border border-[#2563EB] rounded-2xl p-5 shadow-lg flex flex-col items-center text-center gap-2 scale-105">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
          </div>
          <h3 className="m-0 text-sm font-bold">Tahap 6: Kesimpulan</h3>
          <p className="m-0 text-xs text-white/80">Siap menyusun laporan akhir</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="w-full h-full min-h-[220px] rounded-xl bg-[#F9FAFB] flex items-center justify-center text-xs text-[#9CA3AF]">
            Ilustrasi
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <h2 className="m-0 mb-4 text-lg font-bold text-[#111827] flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                <path d="M12 15a4 4 0 004-4V5a4 4 0 00-8 0v6a4 4 0 004 4z" />
                <path d="M19 10v1a7 7 0 01-14 0v-1M12 19v3" />
              </svg>
              Ringkasan Pencapaian
            </h2>
            <ul className="m-0 p-0 list-none flex flex-col gap-2.5">
              {ringkasan.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-[#374151]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4" className="flex-shrink-0 mt-0.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#FDF3C7] border border-[#F5E3A0] rounded-[20px] p-6">
            <h2 className="m-0 mb-2 text-base font-bold text-[#111827] flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
                <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
              </svg>
              Ingat kembali!
            </h2>
            <p className="m-0 text-sm text-[#92400E] leading-[1.6]">
              Kesimpulan yang baik harus menjawab pertanyaan penelitian awal. Pastikan kamu meninjau kembali
              rumusan masalah sebelum mulai menulis di Tahap 6.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/5`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Sebelumnya
        </Link>
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          Selesai
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
