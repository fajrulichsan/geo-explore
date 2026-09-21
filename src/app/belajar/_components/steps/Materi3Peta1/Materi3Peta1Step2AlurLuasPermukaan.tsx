import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi3Peta1Step2AlurLuasPermukaan({ materi, peta, step = "2", editFoto }: StepComponentProps) {
  const gambarAlur = await getPageImage("M3-P1-L2-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={5} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M4 12h16M12 4v16" />
            <rect x="4" y="4" width="16" height="16" rx="2" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Pendahuluan: Luas Permukaan Kubus, Balok, dan Prisma
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bagaimana Luas Permukaan Diperoleh?
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          <EditablePageImage
          imageKey="M3-P1-L2-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambarAlur}
          alt="Alur: bangun ruang, dibuka, jaring-jaring, hitung luas setiap sisi, jumlah seluruh luas sisi"
          editable={editFoto}
          natural
          containerClassName="relative w-full"
        />

          <div className="bg-[#FCE9A8] rounded-xl py-3.5 px-[18px] flex items-start gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" className="mt-0.5 flex-shrink-0">
              <path d="M12 2l3 6.5 7 .8-5.2 4.8 1.5 7-6.3-3.6-6.3 3.6 1.5-7L2 9.3l7-.8z" />
            </svg>
            <p className="m-0 text-sm font-bold text-[#1D4ED8] leading-[1.6]">
              Alur ini akan kita gunakan untuk menyelidiki KUBUS, BALOK, dan PRISMA. Bukan rumus
              yang akan dicari terlebih dahulu. Kita akan menemukan sendiri bagaimana rumus luas
              permukaan terbentuk.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
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
