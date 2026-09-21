import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";


export default async function Materi5Peta10Step5HebatDanSelanjutnya({
  materi,
  peta,
  step = "5",
  editFoto,
}: StepComponentProps) {
  const boy = await getPageImage("M5-P10-L5-1");
  const preview = await getPageImage("M5-P10-L5-2");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={5} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Rangkuman: Skala dan Luas Bangun Ruang Sisi Datar
        </h1>
      </div>

      <div className="bg-[#FDF3C7] rounded-[20px] p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6 items-center">
        <EditablePageImage
          imageKey="M5-P10-L5-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={boy}
          alt="Siswa laki-laki mengepalkan tangan tanda semangat"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-32 h-44 mx-auto flex-shrink-0 rounded-2xl overflow-hidden bg-white"
        />
        <div>
          <h2 className="m-0 mb-2 text-2xl font-extrabold text-[#92400E]">🏆 Hebat!</h2>
          <div className="flex flex-col gap-2 text-sm text-[#785900] font-medium leading-[1.6]">
            <p className="m-0">
              Kamu telah menemukan sendiri hubungan antara faktor skala dan luas permukaan bangun
              ruang sisi datar.
            </p>
            <p className="m-0">
              Perubahan ukuran tidak hanya memengaruhi panjang sisi, tetapi juga luas seluruh
              permukaan.
            </p>
            <p className="m-0">
              Teruslah menggunakan berbagai strategi, serta alasan matematis yang logis dalam
              menyelesaikan masalah geometri!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-[#BFDBFE] rounded-[20px] p-6 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🚀</span>
          <p className="m-0 text-lg font-extrabold text-[#1D4ED8]">Selanjutnya ✦</p>
        </div>
        <p className="m-0 text-sm text-[#374151] leading-[1.6]">
          Pada submateri berikutnya, kamu akan menyelidiki mengapa perubahan setiap ukuran panjang
          sebesar faktor <i>k</i> membuat volume berubah menjadi <i>k</i>³ kali volume semula. Siap
          menjelajah?
        </p>
        <EditablePageImage
          imageKey="M5-P10-L5-2"
          materi={materi}
          peta={peta}
          step={step}
          urutan="2"
          src={preview}
          alt="Siswi berpikir: kubus diskalakan k kali, luas permukaan k² kali dan volume k³ kali"
          editable={editFoto}
          natural
          containerClassName="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden"
        />
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
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
