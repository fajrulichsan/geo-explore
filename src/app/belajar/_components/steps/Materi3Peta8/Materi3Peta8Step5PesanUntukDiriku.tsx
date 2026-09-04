import Link from "next/link";
import Image from "next/image";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi3Peta8Step5PesanUntukDiriku({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const gambarTrofi = await getPageImage("M3-P8-L5-1");
  const gambarBintang = await getPageImage("M3-P8-L5-2");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={5} />
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
              <path d="M12 2l2.6 6.5L21 9l-5 4.4L17.4 21 12 17.3 6.6 21 8 13.4 3 9l6.4-.5z" />
            </svg>
          </div>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Refleksi Diri</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center flex-shrink-0">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="#fff">
              <path d="M12 21s-7.5-4.9-10-9.3C.4 8.4 2 5 5.4 5 7.6 5 9 6.2 12 9.2 15 6.2 16.4 5 18.6 5 22 5 23.6 8.4 22 11.7 19.5 16.1 12 21 12 21z" />
            </svg>
          </div>
          <h2 className="m-0 text-lg font-extrabold text-[#111827]">E. Pesan untuk Diriku</h2>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
        <div className="relative w-16 h-16 flex-shrink-0">
          <Image src={gambarTrofi} alt="Ilustrasi trofi penghargaan" fill className="object-contain" />
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <label className="text-sm font-bold text-[#111827]">Tuliskan satu kalimat penyemangat untuk dirimu sendiri.</label>
          <textarea
            name="answers.pesan_untuk_diri"
            defaultValue={getValue("pesan_untuk_diri")}
            rows={2}
            placeholder='"Hari ini saya berhasil..."'
            required
            className="w-full resize-none rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] placeholder-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="relative bg-gradient-to-br from-[#EFF4FF] to-[#DCE6FB] border border-[#DBE4FF] rounded-[20px] p-7 flex items-center justify-between gap-6 overflow-hidden">
        <div className="relative z-[1]">
          <div className="inline-flex items-center gap-2 bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-4 text-xs font-bold mb-3">
            Hebat!
          </div>
          <p className="m-0 text-sm leading-[1.6] text-[#4B5563] max-w-lg">
            Kamu telah menemukan sendiri bagaimana luas permukaan bangun ruang diperoleh dari jumlah
            luas seluruh sisinya. Teruslah menggunakan berbagai strategi, memberikan alasan matematis,
            dan percaya pada kemampuanmu dalam menyelesaikan masalah.
          </p>
        </div>
        <div className="relative w-[110px] h-[110px] flex-shrink-0 z-[1]">
          <Image src={gambarBintang} alt="Ilustrasi bintang penghargaan" fill className="object-contain" />
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <PhotoUpload
          name="answers.foto_bukti"
          label="Unggah foto jurnal refleksimu (opsional)"
          defaultValue={getValue("foto_bukti")}
        />
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/4`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
