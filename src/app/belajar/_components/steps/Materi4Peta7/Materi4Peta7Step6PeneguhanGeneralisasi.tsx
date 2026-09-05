import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi4Peta7Step6PeneguhanGeneralisasi({
  materi,
  peta,
  step = "6",
  editFoto,
}: StepComponentProps) {
  const shapesImage = await getPageImage("M4-P7-L6-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Luas Permukaan Limas</p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            I
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Peneguhan Generalisasi</h2>
        </div>
        <p className="m-0 -mt-2 text-sm text-[#4B5563]">
          Perhatikan kembali rumus dan keterangan berikut.
        </p>

        <div className="bg-[#F3E8FF] border border-[#DDD6FE] rounded-2xl p-5 flex flex-col gap-3">
          <div className="bg-white rounded-xl px-5 py-4 text-center w-fit mx-auto">
            <p className="m-0 text-xl font-extrabold text-[#111827] tracking-wide">LP = L&#8320; + L&#8347;</p>
          </div>
          <div className="flex flex-col gap-1 text-xs text-[#4B5563]">
            <p className="m-0 font-bold text-[#6D28D9]">Keterangan:</p>
            <p className="m-0">
              <span className="font-bold">LP</span> = luas permukaan limas
            </p>
            <p className="m-0">
              <span className="font-bold">L&#8320;</span> = luas alas (dihitung satu kali)
            </p>
            <p className="m-0">
              <span className="font-bold">L&#8347;</span> = jumlah luas seluruh sisi tegak (semua sisi
              yang membatasi limas)
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="m-0 text-sm font-semibold text-[#111827]">
            Limas dapat memiliki alas berbentuk:
          </p>
          <div className="relative w-full h-28 sm:h-32 rounded-2xl overflow-hidden bg-[#EFF4FF]">
            <EditablePageImage
              imageKey="M4-P7-L6-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={shapesImage}
              alt="Barisan limas dengan alas segitiga, persegi, segilima, segienam, dan segi-n"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-full h-full"
            />
          </div>
        </div>

        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl px-5 py-4">
          <p className="m-0 text-xs text-[#1D4ED8] leading-[1.6]">
            <span className="font-bold">Hubungan LP = L&#8320; + L&#8347;</span> berlaku untuk
            berbagai jenis limas, karena luas permukaan selalu diperoleh dari luas alas dan jumlah
            luas seluruh sisi tegaknya.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
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
