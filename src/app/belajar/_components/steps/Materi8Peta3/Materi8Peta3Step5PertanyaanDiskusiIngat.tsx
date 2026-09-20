import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi8Peta3Step5PertanyaanDiskusiIngat({
  materi,
  peta,
  step = "5",
  editFoto,
}: StepComponentProps) {
  const gambarIngat = await getPageImage("M8-P3-L5-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={9} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Berdiskusi
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="bg-white border border-[#DBEAFE] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <h2 className="m-0 text-base font-extrabold text-[#2563EB] flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-sm">?</span>
            Pertanyaan Diskusi
          </h2>
          <ol className="m-0 p-0 list-none flex flex-col gap-3">
            <li className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
              <span className="text-sm text-[#1E3A8A] leading-[1.6] pt-0.5">Apakah faktor perubahan volume setiap bangun sama?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
              <span className="text-sm text-[#1E3A8A] leading-[1.6] pt-0.5">Apakah semua bangun menunjukkan pola perubahan yang sama?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
              <span className="text-sm text-[#1E3A8A] leading-[1.6] pt-0.5">Bagaimana perubahan ukuran panjang dibandingkan perubahan volume?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
              <span className="text-sm text-[#1E3A8A] leading-[1.6] pt-0.5">Dugaan apa yang dapat kalian simpulkan tentang hubungan faktor skala dan volume?</span>
            </li>
          </ol>
        </div>

        <div className="relative overflow-hidden rounded-[24px] border border-[#F5E3A0] bg-[#FEF9E7] p-5 sm:p-6 grid grid-cols-[1fr_120px] sm:grid-cols-[1fr_170px] gap-4 items-center">
          <div className="flex flex-col gap-2">
            <h2 className="m-0 text-xl font-extrabold text-[#D97706]">Ingat!</h2>
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">Belum tentu dugaan kelompokmu benar.</p>
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">
              Pada tahap berikutnya kalian akan membuktikannya menggunakan GeoGebra 3D dan <span className="italic">Augmented Reality</span> (AR).
            </p>
          </div>
          <EditablePageImage
            imageKey="M8-P3-L5-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarIngat}
            alt="Siswa laki-laki mengacungkan jari dengan gelembung lampu ide"
            editable={editFoto}
            natural
            containerClassName="relative w-full overflow-hidden"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
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
