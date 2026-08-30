import Link from "next/link";
import Image from "next/image";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import { getPageImage } from "@/lib/pageImages";

export default async function Peta9Step2SatuBangunBanyakKelompok({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const gambarKubus = await getPageImage("M1-P9-L2-1");
  const gambarBangunLain = await getPageImage("M1-P9-L2-2");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={6} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">
            Satu Bangun, Banyak Kelompok
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              1
            </div>
            <p className="m-0 text-[15px] leading-[1.6] text-[#374151]">
              Apakah kubus dapat dimasukkan ke lebih dari satu kelompok? Tuliskan minimal dua
              kelompok berbeda yang dapat memuat kubus. Berikan alasan matematis.
            </p>
          </div>
          <div className="mt-auto flex items-end gap-5">
            <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-[#EFF4FF]">
              <Image src={gambarKubus} alt="Ilustrasi kubus" fill className="object-cover" />
            </div>
            <div className="flex-grow flex flex-col gap-3">
              <input
                type="text"
                name="answers.kubus_kelompok_lain"
                defaultValue={getValue("kubus_kelompok_lain")}
                placeholder="Tuliskan jawabanmu di sini..."
                required
                className="w-full bg-transparent border-0 border-b border-dashed border-[#D1D5DB] focus:ring-0 focus:border-[#2563EB] outline-none px-0 py-2 text-sm text-[#2563EB]"
              />
              <input
                type="text"
                name="answers.kubus_alasan"
                defaultValue={getValue("kubus_alasan")}
                placeholder="Tuliskan alasanmu di sini..."
                required
                className="w-full bg-transparent border-0 border-b border-dashed border-[#D1D5DB] focus:ring-0 focus:border-[#2563EB] outline-none px-0 py-2 text-sm text-[#2563EB]"
              />
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              2
            </div>
            <p className="m-0 text-[15px] leading-[1.6] text-[#374151]">
              Pilih satu bangun ruang selain kubus. Apakah bangun tersebut juga dapat termasuk ke
              lebih dari satu kelompok? Jelaskan alasannya.
            </p>
          </div>
          <div className="mt-auto flex flex-col gap-4">
            <textarea
              name="answers.bangun_lain_jawaban"
              defaultValue={getValue("bangun_lain_jawaban")}
              rows={3}
              placeholder="Ketik jawaban dan alasanmu di sini..."
              required
              className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] outline-none p-4 text-sm text-[#374151] resize-none min-h-[100px]"
            />
            <div className="flex justify-end">
              <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-[#EFF4FF]">
                <Image src={gambarBangunLain} alt="Ilustrasi bangun ruang lain" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <PhotoUpload
          name="answers.foto_bukti"
          label="Unggah foto hasil kerja (opsional)"
          defaultValue={getValue("foto_bukti")}
        />
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/1`}
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
