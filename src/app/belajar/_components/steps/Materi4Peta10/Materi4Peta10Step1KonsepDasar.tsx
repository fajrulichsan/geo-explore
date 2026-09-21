import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi4Peta10Step1KonsepDasar({
  materi,
  peta,
  step = "1",
  editFoto,
}: StepComponentProps) {
  const [heroImage, alurImage] = await Promise.all([
    getPageImage("M4-P10-L1-1"),
    getPageImage("M4-P10-L1-2"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={3} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Rangkuman Luas Permukaan Limas
        </h1>
      </div>

      <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-6 grid grid-cols-1 md:grid-cols-[1fr_320px] gap-5 items-center">
        <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10" />
        <div className="relative flex flex-col gap-3">
          <p className="m-0 text-sm sm:text-[15px] leading-[1.7] text-white/95 font-medium">
            Pada submateri ini kamu telah menemukan bahwa{" "}
            <span className="font-extrabold text-[#FDE68A]">
              luas permukaan limas diperoleh dengan menjumlahkan luas alas dan luas seluruh sisi
              tegaknya.
            </span>
          </p>
          <p className="m-0 text-sm sm:text-[15px] leading-[1.7] text-white/90 font-medium">
            Melalui kegiatan mengamati, berdiskusi, mengeksplorasi dengan GeoGebra 3D dan AR,
            mengolah informasi, memverifikasi, serta menyimpulkan, kamu telah memahami konsep ini
            dengan lebih mendalam.
          </p>
        </div>
        <EditablePageImage
          imageKey="M4-P10-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={heroImage}
          alt="Tiga siswa belajar luas permukaan limas dengan laptop, buku, dan AR"
          editable={editFoto}
          natural
          containerClassName="relative w-full"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Konsep Dasar
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <EditablePageImage
            imageKey="M4-P10-L1-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={alurImage}
            alt="Alur: limas dibuka menjadi jaring-jaring, hitung luas alas dan seluruh sisi tegak, jumlahkan menjadi luas permukaan limas"
            editable={editFoto}
            natural
            containerClassName="relative w-full"
          />
        </div>

        <div className="bg-[#FEF9E7] border border-[#F5E6A8] rounded-2xl px-5 py-4 flex items-start gap-3">
          <span className="text-lg flex-shrink-0">⭐</span>
          <p className="m-0 text-sm text-[#785900] leading-[1.6]">
            <span className="font-extrabold">Konsep utamanya:</span> Luas permukaan limas diperoleh
            dengan menjumlahkan luas alas dan luas seluruh sisi tegaknya.
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
