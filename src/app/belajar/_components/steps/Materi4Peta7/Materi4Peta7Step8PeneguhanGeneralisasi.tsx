import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
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
  const shape1 = await getPageImage("M4-P7-L8-1");
  const shape2 = await getPageImage("M4-P7-L8-2");
  const shape3 = await getPageImage("M4-P7-L8-3");
  const shape4 = await getPageImage("M4-P7-L8-4");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="8" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={8} totalSteps={9} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Luas Permukaan Limas</p>
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
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 items-end">
          <div className="flex flex-col items-center gap-2">
            <EditablePageImage
            imageKey="M4-P7-L8-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={shape1}
            alt="Limas beralas segitiga"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full aspect-[4/3]"
          />
            <p className="m-0 text-xs font-semibold text-[#374151]">Segitiga</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <EditablePageImage
            imageKey="M4-P7-L8-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={shape2}
            alt="Limas beralas persegi"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full aspect-[4/3]"
          />
            <p className="m-0 text-xs font-semibold text-[#374151]">Persegi</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <EditablePageImage
            imageKey="M4-P7-L8-3"
            materi={materi}
            peta={peta}
            step={step}
            urutan="3"
            src={shape3}
            alt="Limas beralas segilima"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full aspect-[4/3]"
          />
            <p className="m-0 text-xs font-semibold text-[#374151]">Segilima</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <EditablePageImage
            imageKey="M4-P7-L8-4"
            materi={materi}
            peta={peta}
            step={step}
            urutan="4"
            src={shape4}
            alt="Limas beralas segienam"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full aspect-[4/3]"
          />
            <p className="m-0 text-xs font-semibold text-[#374151]">Segienam</p>
          </div>
              <div className="flex flex-col items-center gap-2 col-span-2 sm:col-span-1">
                <p className="m-0 text-2xl font-extrabold text-[#2563EB] leading-none">…</p>
                <p className="m-0 text-xs font-semibold text-[#374151]">Segi-n</p>
              </div>
            </div>
            <p className="m-0 text-xs text-[#1E3A8A] bg-[#EFF4FF] border border-[#BFDBFE] rounded-xl px-4 py-3 leading-[1.6]">
              <span className="font-bold">Hubungan LP = L<sub>a</sub> + L<sub>s</sub></span> berlaku untuk berbagai jenis limas, karena luas permukaan selalu diperoleh dari luas alas dan jumlah luas seluruh sisi tegaknya.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/7`}
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
