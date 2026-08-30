import Image from "next/image";
import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import { getPageImage } from "@/lib/pageImages";

export default async function Peta4Step10CatatanPribadi({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const gambarCatatan = await getPageImage("M1-P4-L10-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="10" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={10} totalSteps={10} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4l3 2" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            J
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Ayo Mengeksplorasi dengan Augmented Reality (AR)
          </div>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="bg-[#EFF4FF] border-b border-[#E5E7EB] p-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            K
          </div>
          <h2 className="m-0 text-lg font-bold text-[#2563EB]">Catatan Pribadi</h2>
        </div>

        <div className="p-6 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 items-start">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="relative w-40 h-40 rounded-2xl overflow-hidden bg-[#F9FAFB]">
              <Image src={gambarCatatan} alt="Ilustrasi catatan pribadi" fill className="object-cover" />
            </div>
            <p className="m-0 text-sm text-[#6B7280] max-w-[220px]">
              Tuliskan pemikiran dan pertanyaanmu setelah bereksplorasi dengan AR hari ini!
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="bg-[#EFF4FF] border border-[#DBEAFE] rounded-2xl p-5">
              <label htmlFor="reflection-1" className="flex items-center gap-2 text-sm font-bold text-[#2563EB] mb-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                Hal paling menarik yang saya temukan hari ini:
              </label>
              <textarea
                id="reflection-1"
                name="answers.hal_menarik"
                defaultValue={getValue("hal_menarik")}
                rows={3}
                placeholder="Tuliskan hal menarik di sini..."
                required
                className="w-full rounded-lg border border-[#DBEAFE] bg-white px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
              />
            </div>

            <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-5">
              <label htmlFor="reflection-2" className="flex items-center gap-2 text-sm font-bold text-[#92400E] mb-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
                </svg>
                Pertanyaan yang masih ingin saya ketahui:
              </label>
              <textarea
                id="reflection-2"
                name="answers.pertanyaan_masih_ingin_diketahui"
                defaultValue={getValue("pertanyaan_masih_ingin_diketahui")}
                rows={3}
                placeholder="Tuliskan pertanyaanmu di sini..."
                required
                className="w-full rounded-lg border border-[#F5E3A0] bg-white px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#D97706] focus:outline-none transition-colors resize-y"
              />
            </div>
          </div>
        </div>
        <div className="px-6 pb-6 pt-2 border-t border-[#E5E7EB]">
          <PhotoUpload
            name="answers.foto_bukti"
            label="Unggah foto catatan pribadimu (opsional)"
            defaultValue={getValue("foto_bukti")}
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/9`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
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
