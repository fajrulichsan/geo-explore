import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi8Peta6Step1Pengantar({
  materi,
  peta,
  step = "1",
  editFoto,
}: StepComponentProps) {
  const gambar = await getPageImage("M8-P6-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 5 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12.5l3 3 5-6" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Verifikasi
          </h1>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-[1fr_320px] gap-5 items-center">
        <div className="absolute -right-14 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <div className="relative flex flex-col gap-2">
          <h2 className="m-0 text-lg font-extrabold text-white">Pengantar</h2>
          <p className="m-0 text-sm text-white/90 leading-[1.65]">
            Kamu telah menemukan dugaan tentang hubungan antara faktor skala dan perubahan volume bangun ruang. Sekarang saatnya memeriksa apakah dugaan tersebut benar berdasarkan data hasil eksplorasi.
          </p>
          <p className="m-0 text-sm text-white/90 leading-[1.65]">
            Gunakan kembali GeoGebra 3D, <span className="italic">Augmented Reality</span> (AR), serta hasil pengamatan kelompokmu untuk memastikan bahwa hubungan yang kamu temukan sesuai dengan data.
          </p>
        </div>
        <EditablePageImage
          imageKey="M8-P6-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambar}
          alt="Tiga siswa berdiskusi dengan tablet yang menampilkan kubus GeoGebra dan AR"
          editable={editFoto}
          natural
          containerClassName="relative w-full overflow-hidden rounded-2xl bg-white"
        />
      </div>

      <div className="bg-white border border-[#F5E3A0] rounded-[20px] p-3 sm:p-6 flex flex-col gap-4">
        <h3 className="m-0 text-sm font-extrabold text-[#92400E] text-center">Alur Verifikasi</h3>
        <div className="flex items-center justify-between gap-1 sm:gap-2">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#EFF4FF] flex items-center justify-center">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="12" rx="1.5" /><path d="M2 20h20 M9 16v4 M15 16v4" />
                </svg>
              </div>
              <span className="text-[11px] sm:text-sm font-bold text-[#1E3A8A]">GeoGebra & AR</span>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.6" className="flex-shrink-0 -mt-5 w-3.5 h-3.5 sm:w-5 sm:h-5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#EFF4FF] flex items-center justify-center">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4h6v3H9z M8 15l3-3 2 2 3-4" />
                </svg>
              </div>
              <span className="text-[11px] sm:text-sm font-bold text-[#1E3A8A]">Periksa Data</span>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.6" className="flex-shrink-0 -mt-5 w-3.5 h-3.5 sm:w-5 sm:h-5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#EFF4FF] flex items-center justify-center">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 20V10 M10 20V4 M16 20v-7 M22 20H2" />
                </svg>
              </div>
              <span className="text-[11px] sm:text-sm font-bold text-[#1E3A8A]">Bandingkan</span>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.6" className="flex-shrink-0 -mt-5 w-3.5 h-3.5 sm:w-5 sm:h-5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#EFF4FF] flex items-center justify-center">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 12a8 8 0 0 1-14 5.3 M4 12a8 8 0 0 1 14-5.3 M18 3v4h-4 M6 21v-4h4" />
                </svg>
              </div>
              <span className="text-[11px] sm:text-sm font-bold text-[#1E3A8A]">Perbaiki</span>
            </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/peta-belajar/${materi}`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
