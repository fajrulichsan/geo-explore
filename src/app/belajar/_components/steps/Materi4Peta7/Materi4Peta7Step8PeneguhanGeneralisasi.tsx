import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi4Peta7Step8PeneguhanGeneralisasi({
  materi,
  peta,
  step = "8",
  editFoto,
}: StepComponentProps) {
  const shapes = await getPageImage("M4-P7-L8-5");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="8" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={8} totalSteps={9} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
      </div>

<div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            I
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Peneguhan Generalisasi
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">Perhatikan kembali rumus dan keterangan berikut.</p>
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,280px)_minmax(0,1fr)] gap-4">
          <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-5 flex flex-col gap-3">
            <p className="m-0 w-fit bg-white border border-dashed border-[#93C5FD] rounded-xl px-5 py-2.5 text-xl font-extrabold text-[#1E3A8A]">
              LP = L<sub>a</sub> + L<sub>s</sub>
            </p>
            <p className="m-0 text-xs font-semibold text-[#374151]">Keterangan:</p>
            <ul className="m-0 pl-5 flex flex-col gap-1 list-disc text-xs text-[#374151]">
              <li>LP = luas permukaan limas</li>
              <li>L<sub>a</sub> = luas alas (dihitung satu kali)</li>
              <li>L<sub>s</sub> = jumlah luas seluruh sisi tegak (semua sisi yang membatasi limas)</li>
            </ul>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 flex flex-col gap-4">
            <p className="m-0 text-sm font-bold text-[#111827]">Limas dapat memiliki alas berbentuk:</p>
            <EditablePageImage
              imageKey="M4-P7-L8-5"
              materi={materi}
              peta={peta}
              step={step}
              urutan="5"
              src={shapes}
              alt="Limas beralas segitiga, persegi, segilima, segienam, hingga segi-n"
              editable={editFoto}
              natural
              containerClassName="relative w-full"
            />
            <p className="m-0 text-xs text-[#1E3A8A] bg-[#EFF4FF] border border-[#BFDBFE] rounded-xl px-4 py-3 leading-[1.6]">
              <span className="font-bold">Hubungan LP = L<sub>a</sub> + L<sub>s</sub></span> berlaku untuk berbagai jenis limas, karena luas permukaan selalu diperoleh dari luas alas dan jumlah luas seluruh sisi tegaknya.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/7`} />
        <NextStepButton />
      </div>
    </form>
  );
}
