import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi4Peta9Step1MasalahOpenEnded({
  materi,
  peta,
  step = "1",
  editFoto,
}: StepComponentProps) {
  const [heroImage, limasImage] = await Promise.all([
    getPageImage("M4-P9-L1-1"),
    getPageImage("M4-P9-L1-2"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={5} />
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#1E3A8A]">Tantangan Open-Ended</h1>
          <span className="inline-flex items-center gap-1.5 bg-[#FDF3C7] text-[#92400E] rounded-full py-1 px-3 text-xs font-bold">
            Submateri 4 · Halaman 1 dari 2
          </span>
        </div>
      </div>

      <div className="rounded-[24px] bg-gradient-to-br from-[#EFF4FF] to-[#F5F3FF] border border-[#E5E7EB] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="flex-1 flex flex-col gap-3">
          <p className="m-0 text-lg font-extrabold text-[#111827]">Tidak hanya satu cara yang benar.</p>
          <p className="m-0 text-sm leading-[1.7] text-[#374151]">
            Pada tantangan ini, kamu akan mencari <span className="font-bold text-[#2563EB]">berbagai cara (strategi)</span>{" "}
            untuk menyelesaikan masalah. Yang paling penting adalah bagaimana kamu menjelaskan{" "}
            <span className="font-bold text-[#2563EB]">alasan matematis</span> dari strategi yang digunakan.
          </p>
          <div className="flex items-center gap-2 flex-wrap text-xs font-bold text-[#166534]">
            <span className="bg-[#DCFCE7] rounded-full py-1.5 px-3">Tahap 6 · Ayo Menyimpulkan</span>
            <span>→</span>
            <span className="bg-[#BBF7D0] rounded-full py-1.5 px-3">Tantangan Open-Ended</span>
            <span>→</span>
            <span className="bg-[#DCFCE7] rounded-full py-1.5 px-3">Rangkuman Submateri 4</span>
          </div>
        </div>
        <EditablePageImage
          imageKey="M4-P9-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={heroImage}
          alt="Tiga siswa berdiskusi dengan laptop, buku, dan tablet AR"
          editable={editFoto}
          natural
          containerClassName="relative w-full sm:w-72 flex-shrink-0"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">A</div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">Masalah Open-Ended</div>
          <p className="m-0 text-xs text-[#6B7280]">Bacalah masalah berikut dengan cermat!</p>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] grid grid-cols-1 sm:grid-cols-[1fr_240px] gap-6 items-center">
          <div className="flex flex-col gap-3 bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl p-5">
            <p className="m-0 text-sm text-[#374151] leading-[1.7]">
              Sebuah limas segiempat tegak memiliki sisi alas berbentuk persegi dengan panjang sisi{" "}
              <span className="font-bold">10 cm</span>. Tinggi sisi tegaknya (apotema) adalah{" "}
              <span className="font-bold">13 cm</span>.
            </p>
            <p className="m-0 text-base font-extrabold text-[#166534]">Tentukan luas permukaan limas tersebut.</p>
          </div>
          <EditablePageImage
            imageKey="M4-P9-L1-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={limasImage}
            alt="Limas segiempat dengan sisi alas 10 cm dan apotema 13 cm"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[240px] mx-auto"
          />
        </div>
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-4 flex flex-col gap-2">
          <p className="m-0 text-xs font-semibold text-[#78350F] leading-[1.6]">
            ✏️ Gunakan minimal dua strategi <span className="font-bold text-[#DC2626]">berbeda secara matematis</span>,
            bukan hanya berbeda urutan perhitungannya.
          </p>
          <p className="m-0 text-xs font-semibold text-[#78350F] leading-[1.6]">
            💡 Boleh menggunakan gambar, jaring-jaring, GeoGebra 3D, ataupun AR.
          </p>
        </div>
      </div>

      <div className="flex justify-end items-center">
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
