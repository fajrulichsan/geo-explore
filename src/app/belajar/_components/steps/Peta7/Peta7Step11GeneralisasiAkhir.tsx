import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

export default function Peta7Step11GeneralisasiAkhir({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="11" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={11} totalSteps={11} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          K
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Generalisasi Akhirku
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-7 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <div className="inline-flex items-center gap-2 bg-[#EFF4FF] text-[#2563EB] px-4 py-1.5 rounded-full mb-4 text-xs font-bold uppercase tracking-wider">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M4 4v16l8-4 8 4V4z" />
          </svg>
          Tahap Terakhir
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl mx-auto">
          Tuliskan kesimpulan akhirmu tentang klasifikasi bangun ruang sisi datar. Satukan semua
          pengetahuan yang telah kamu temukan dari tahap A hingga J.
        </p>
      </div>

      <div className="bg-white border-2 border-[#B3C5FF] rounded-[20px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <div className="bg-[#EFF4FF] px-6 py-3 border-b border-[#B3C5FF] flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
            <path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z" />
          </svg>
          <span className="text-sm font-bold text-[#2563EB]">Buku Catatan Kesimpulan</span>
        </div>
        <textarea
          name="answers.kesimpulan_akhir"
          defaultValue={getValue("kesimpulan_akhir")}
          rows={8}
          placeholder="Menurut pengamatanku, bangun ruang sisi datar dapat diklasifikasikan menjadi..."
          required
          className="w-full p-6 bg-white border-none resize-none focus:outline-none text-[15px] text-[#374151] leading-[1.8]"
        />
        <div className="px-6 pb-6">
          <PhotoUpload
            name="answers.foto_bukti"
            label="Unggah foto hasil kerja (opsional)"
            defaultValue={getValue("foto_bukti")}
          />
        </div>
      </div>

      <div className="bg-[#EFF4FF] border border-[#B3C5FF] rounded-[20px] p-6 flex items-start gap-3">
        <span className="text-xl flex-shrink-0">⭐</span>
        <p className="m-0 text-sm leading-[1.6] text-[#1E3A8A]">
          Kamu telah menemukan bahwa bangun ruang dapat dikelompokkan dengan berbagai cara. Yang penting,
          dasar pengelompokan jelas, digunakan secara konsisten, dan didukung alasan matematis yang logis.
          <br />
          Selanjutnya, renungkan kembali pengalaman belajarmu pada bagian Refleksi Diri.
        </p>
      </div>

      <div className="bg-[#FDF3C7] rounded-[20px] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-xl">
            <span>⭐</span>
            <span>✨</span>
          </div>
          <h2 className="m-0 mb-1.5 text-2xl font-extrabold text-[#92400E]">Hebat!</h2>
          <p className="m-0 text-sm text-[#785900] font-medium">
            Kamu telah menyelesaikan 6 Tahap Discovery Learning dengan sangat baik!
          </p>
        </div>
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-4 px-7 text-sm font-bold shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer flex-shrink-0">
          SELESAI
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>

      <div className="flex justify-start items-center">
        <Link
          href={`/belajar/${materi}/${peta}/10`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
      </div>
    </form>
  );
}
