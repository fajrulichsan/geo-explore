import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

export default function Peta4Step7PolaKlasifikasiStrategi({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="7" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={7} totalSteps={8} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4l3 2" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Pola Klasifikasi &amp; Bandingkan Strategi</h1>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Ayo kita amati pola dan bandingkan strategi penyelesaian masalah.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              H
            </div>
            <h2 className="m-0 text-lg font-bold text-[#2563EB]">Pola Klasifikasi</h2>
          </div>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Kelompokkan bangun-bangun berikut berdasarkan pola yang kamu temukan.
          </p>
          <div className="w-full h-40 rounded-2xl bg-[#F9FAFB] flex items-center justify-center text-xs text-[#9CA3AF]">
            Ilustrasi
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="pola-input" className="text-sm font-bold text-[#2563EB]">
              Pola yang kami temukan:
            </label>
            <textarea
              id="pola-input"
              rows={3}
              name="answers.pola_ditemukan"
              defaultValue={getValue("pola_ditemukan")}
              required
              placeholder="Tuliskan pola yang kamu temukan di sini..."
              className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
            />
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              I
            </div>
            <h2 className="m-0 text-lg font-bold text-[#2563EB]">Bandingkan Strategi</h2>
          </div>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Bandingkan dua cara penyelesaian berikut. Mana yang lebih efektif menurutmu?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-4 flex flex-col gap-2">
              <h3 className="m-0 text-sm font-bold text-[#2563EB]">Cara 1</h3>
              <p className="m-0 text-sm text-[#374151]">
                Menghitung luas tiap sisi secara terpisah lalu menjumlahkannya.
              </p>
              <ul className="m-0 p-0 pl-4 text-sm text-[#6B7280] list-disc">
                <li>Detail tiap sisi</li>
                <li>Langkah lebih panjang</li>
              </ul>
            </div>
            <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-4 flex flex-col gap-2">
              <h3 className="m-0 text-sm font-bold text-[#2563EB]">Cara 2</h3>
              <p className="m-0 text-sm text-[#374151]">
                Menggunakan rumus langsung jika bangun ruangnya beraturan.
              </p>
              <ul className="m-0 p-0 pl-4 text-sm text-[#6B7280] list-disc">
                <li>Lebih cepat</li>
                <li>Membutuhkan hafalan rumus</li>
              </ul>
            </div>
          </div>
          <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-4 flex gap-3 items-start">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
            </svg>
            <div>
              <h4 className="m-0 text-sm font-bold text-[#92400E]">Ingat!</h4>
              <p className="m-0 mt-1 text-sm text-[#92400E]">
                Setiap strategi memiliki kelebihan masing-masing. Pilihlah yang paling sesuai dengan jenis
                masalah yang dihadapi.
              </p>
            </div>
          </div>
          <div className="mt-2 pt-4 border-t border-[#E5E7EB]">
            <PhotoUpload
              name="answers.foto_bukti"
              label="Unggah foto hasil kerja (opsional)"
              defaultValue={getValue("foto_bukti")}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/6`}
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
