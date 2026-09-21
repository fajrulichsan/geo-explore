import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi4Peta1Step1TahukahKamu({ materi, peta, step = "1", editFoto }: StepComponentProps) {
  const gambarSiswa = await getPageImage("M4-P1-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={3} />
        <div className="inline-flex items-center bg-[#DBEAFE] text-[#1D4ED8] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Submateri 4
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M12 3L3 20h18zM12 3v17" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Luas Permukaan Limas</h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Tahukah Kamu?
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] px-6 py-7 sm:px-9 sm:py-8">
          <div className="absolute -right-14 -top-16 w-56 h-56 rounded-full bg-white/10" />
          <p className="relative m-0 text-lg sm:text-xl font-extrabold text-white max-w-xl leading-snug">
            Mari mengeksplorasi cara menentukan luas permukaan limas!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-5 items-center">
          <div className="flex flex-col gap-4">
            <div className="relative bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] pt-8 px-7 pb-6">
              <div className="absolute -top-[18px] left-6 w-10 h-10 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.08)] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
                  <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
                </svg>
              </div>
              <p className="m-0 mb-3 text-[15px] leading-[1.6] text-[#374151]">
                Pernahkah kamu melihat atap rumah, tenda, atau piramida? Bentuk-bentuk tersebut
                menyerupai limas. Jika seluruh permukaan limas akan ditutup dengan kertas atau dicat,
                bagaimana cara menentukan{" "}
                <span className="text-[#2563EB] font-bold">luas bahan yang dibutuhkan</span>?
              </p>
              <p className="m-0 text-[15px] leading-[1.6] text-[#374151]">
                Pada submateri ini, kamu akan mengeksplorasi hubungan antara jaring-jaring limas dan
                luas permukaannya menggunakan GeoGebra 3D dan <em>Augmented Reality</em> (AR).
              </p>
            </div>
            <div className="flex items-start gap-3 bg-[#EFF4FF] border border-[#BFDBFE] rounded-xl py-3.5 px-[18px]">
              <div className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                ?
              </div>
              <p className="m-0 text-sm font-bold text-[#1D4ED8] leading-[1.5]">
                Menurutmu, apakah cara menentukan luas permukaan limas sama seperti kubus, balok, dan
                prisma? Mari kita selidiki!
              </p>
            </div>
          </div>
          <EditablePageImage
            imageKey="M4-P1-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarSiswa}
            alt="Tiga siswa berpikir tentang bentuk atap rumah, tenda, dan piramida"
            editable={editFoto}
            natural
            containerClassName="relative w-full rounded-[20px] overflow-hidden bg-white border border-[#E5E7EB]"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
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
