import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const ingat = "Klasifikasi bangun ruang dapat dilakukan dengan berbagai cara sesuai dasar yang digunakan. Yang terpenting adalah alasan matematis yang jelas dan konsisten.";

export default async function Peta9Step7SiapMenujuRangkuman({ materi, peta, editFoto }: StepComponentProps) {
  const maskot = await getPageImage("M1-P9-L7-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="7" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={7} totalSteps={7} />
        <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-4 text-xs font-bold tracking-[0.06em] w-fit">
          SUBMATERI 1 &mdash; BANGUN RUANG SISI DATAR
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Tantangan Open-Ended</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            J
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#7C3AED]">
            Siap Menuju Rangkuman
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
          <div className="md:col-span-8 bg-[#EFF4FF] border border-[#DBE5FB] rounded-[20px] p-6 flex flex-col gap-3">
            <h3 className="m-0 text-base font-extrabold text-[#1E3A8A]">Hebat! 🌟</h3>
            <p className="m-0 text-sm leading-[1.7] text-[#374151]">
              Kamu telah menggunakan seluruh hasil pengamatan, pengolahan data, verifikasi, serta strategi yang
              kamu pilih dan pertahankan.
            </p>
            <p className="m-0 text-sm leading-[1.7] text-[#374151]">
              Sekarang saatnya merangkum seluruh konsep yang telah kamu pelajari.
            </p>
          </div>
          <div className="md:col-span-4 bg-white border border-[#E5E7EB] rounded-[20px] p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex items-center justify-center">
            <EditablePageImage
              imageKey="M1-P9-L7-1"
              materi={materi}
              peta={peta}
              step="7"
              urutan="1"
              src={maskot}
              alt="Maskot siswi menunjuk ke atas, siap menuju rangkuman"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-24 h-32 sm:w-32 sm:h-40 mx-auto"
            />
          </div>
        </div>

        <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-[20px] p-5 flex items-start gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#D97706" className="flex-shrink-0 mt-0.5">
            <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l7.1-1.01z" />
          </svg>
          <p className="m-0 text-sm font-semibold text-[#92400E] leading-[1.6]">
            <strong>Ingat!</strong> {ingat}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/6`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
