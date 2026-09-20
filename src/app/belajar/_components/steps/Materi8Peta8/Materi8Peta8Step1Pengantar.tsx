import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi8Peta8Step1Pengantar({
  materi,
  peta,
  step = "1",
  editFoto,
}: StepComponentProps) {
  const gambar = await Promise.all((["M8-P8-L1-1", "M8-P8-L1-2", "M8-P8-L1-3"] as const).map((k) => getPageImage(k)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Setelah Tahap 6 – Ayo Menyimpulkan
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" strokeLinejoin="round">
            <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Refleksi Diri
          </h1>
        </div>
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

      <div className="rounded-[24px] bg-gradient-to-br from-[#EFF4FF] to-[#FEF9E7] border border-[#DBEAFE] p-5 sm:p-6 flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-4 items-center">
          <EditablePageImage
          imageKey="M8-P8-L1-2"
          materi={materi}
          peta={peta}
          step={step}
          urutan="2"
          src={gambar[1]}
          alt="Siswa berpikir sambil memegang pena di depan buku"
          editable={editFoto}
          natural
          containerClassName="relative w-full max-w-[240px] mx-auto overflow-hidden"
        />
          <div className="flex flex-col gap-3">
            <p className="m-0 text-sm text-[#374151] leading-[1.7]">
              Setiap proses belajar memberikan pengalaman baru. Sekarang luangkan waktu sejenak untuk mengingat kembali bagaimana kamu menemukan hubungan antara faktor skala dan perubahan volume bangun ruang melalui kegiatan mengamati, berdiskusi, bereksplorasi, mengolah informasi, memverifikasi, dan menyimpulkan.
            </p>
            <p className="m-0 text-sm font-bold text-[#1E3A8A]">Jawablah dengan jujur sesuai pengalaman belajarmu hari ini.</p>
          </div>
        </div>
        <EditablePageImage
          imageKey="M8-P8-L1-3"
          materi={materi}
          peta={peta}
          step={step}
          urutan="3"
          src={gambar[2]}
          alt="Siswi menulis di buku dengan pena"
          editable={editFoto}
          natural
          containerClassName="relative w-full max-w-[300px] mx-auto overflow-hidden"
        />
      </div>

      <div className="flex justify-between items-center">
        <span />
        <SubmitStepButton className="flex items-center gap-2 text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit cursor-pointer bg-[#2563EB] shadow-[0_4px_10px_rgba(37,99,235,0.3)]">
          LANJUTKAN
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 12h14 M13 6l6 6-6 6" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
