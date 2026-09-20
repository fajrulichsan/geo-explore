import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi8Peta10Step1ApaYangTelahKamuPelajari({
  materi,
  peta,
  step = "1",
  editFoto,
}: StepComponentProps) {
  const gambar = await Promise.all((["M8-P10-L1-1", "M8-P10-L1-2"] as const).map((k) => getPageImage(k)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Halaman 1 dari 2
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 5a2 2 0 0 1 2-2h5v17H6a2 2 0 0 0-2 2z M20 5a2 2 0 0 0-2-2h-5v17h5a2 2 0 0 1 2 2z" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Rangkuman
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Apa yang Telah Kamu Pelajari?
          </div>
        </div>
        <div className="rounded-[20px] bg-[#EFF4FF] border border-[#DBEAFE] p-3 sm:p-4">
          <EditablePageImage
            imageKey="M8-P10-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambar[0]}
            alt="Bangun ruang sisi datar: limas, kubus satuan, balok, dan prisma dengan lampu ide"
            editable={editFoto}
            natural
            
            containerClassName="relative w-full max-w-[520px] mx-auto overflow-hidden rounded-xl"
          />
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3 text-sm text-[#111827] leading-[1.7]">
          <p className="m-0">
            Pada submateri ini kamu telah menemukan bahwa perubahan ukuran bangun ruang tidak hanya memengaruhi panjang rusuk, tetapi juga menyebabkan perubahan volume.
          </p>
          <p className="m-0">
            Melalui kegiatan mengamati, berdiskusi, bereksplorasi menggunakan GeoGebra 3D dan <span className="italic">Augmented Reality</span> (AR), mengolah informasi, memverifikasi, dan menyimpulkan, kamu menemukan bahwa jika setiap ukuran panjang (rusuk/sisi yang bersesuaian) diperbesar atau diperkecil dengan faktor skala <span className="italic">k</span>, maka volumenya berubah sebesar <strong><span className="italic">k</span><sup>3</sup></strong>.
          </p>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] !p-3">
          <EditablePageImage
            imageKey="M8-P10-L1-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={gambar[1]}
            alt="Tiga siswa belajar bersama dengan laptop, GeoGebra 3D, dan AR"
            editable={editFoto}
            natural
            
            containerClassName="relative w-full max-w-[440px] mx-auto overflow-hidden rounded-xl bg-white"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span />
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
