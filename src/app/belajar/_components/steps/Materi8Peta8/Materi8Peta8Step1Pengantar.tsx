import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi8Peta8Step1Pengantar({
  materi,
  peta,
  step = "1",
  editFoto,
}: StepComponentProps) {
  const gambar = await Promise.all((["M8-P8-L1-1", "M8-P8-L1-2", "M8-P8-L1-3", "M8-P8-L1-4"] as const).map((k) => getPageImage(k)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={6} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" strokeLinejoin="round">
            <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Refleksi Diri
          </h1>
        </div>
      </div>

      <div className="rounded-[24px] overflow-hidden border border-[#E5E7EB]">
        <EditablePageImage
          imageKey="M8-P8-L1-4"
          materi={materi}
          peta={peta}
          step={step}
          urutan="4"
          src={gambar[3]}
          alt="Siswa merefleksikan pembelajaran skala dan volume bangun ruang"
          editable={editFoto}
          natural
          containerClassName="relative w-full"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 items-center bg-white border border-[#DBEAFE] rounded-[20px] p-4 sm:p-5">
        <h2 className="m-0 text-lg font-extrabold text-[#1E3A8A]">Apa yang Kamu Pelajari tentang Skala dan Volume Hari Ini?</h2>
        <EditablePageImage
          imageKey="M8-P8-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambar[0]}
          alt="Kaca pembesar, lampu ide, dan tiga kubus dari kecil ke besar"
          editable={editFoto}
          natural
          containerClassName="relative w-full sm:w-[300px] overflow-hidden"
        />
      </div>

      <div className="rounded-[24px] bg-gradient-to-br from-[#EFF4FF] to-[#FEF9E7] border border-[#DBEAFE] p-5 sm:p-6 grid grid-cols-1 md:grid-cols-[200px_1fr_200px] gap-4 items-center">
        <EditablePageImage
          imageKey="M8-P8-L1-2"
          materi={materi}
          peta={peta}
          step={step}
          urutan="2"
          src={gambar[1]}
          alt="Siswa laki-laki berpikir sambil menulis di buku"
          editable={editFoto}
          natural
          containerClassName="relative w-full max-w-[200px] mx-auto overflow-hidden"
        />
        <div className="flex flex-col gap-3">
          <p className="m-0 text-sm text-[#374151] leading-[1.7]">
            Setiap proses belajar memberikan pengalaman baru. Sekarang luangkan waktu sejenak untuk mengingat kembali bagaimana kamu menemukan hubungan antara faktor skala dan perubahan volume bangun ruang melalui kegiatan mengamati, berdiskusi, bereksplorasi, mengolah informasi, memverifikasi, dan menyimpulkan.
          </p>
          <p className="m-0 text-sm font-bold text-[#1E3A8A]">Jawablah dengan jujur sesuai pengalaman belajarmu hari ini.</p>
        </div>
        <EditablePageImage
          imageKey="M8-P8-L1-3"
          materi={materi}
          peta={peta}
          step={step}
          urutan="3"
          src={gambar[2]}
          alt="Siswa perempuan menulis di buku"
          editable={editFoto}
          natural
          containerClassName="relative w-full max-w-[200px] mx-auto overflow-hidden"
        />
      </div>

      <div className="flex justify-end">
        <NextStepButton />
      </div>
    </form>
  );
}
