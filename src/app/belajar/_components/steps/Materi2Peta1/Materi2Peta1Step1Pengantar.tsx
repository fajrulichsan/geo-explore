import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const tahapProses = ["1. Bangun Ruang", "2. Membuka", "3. Jaring-Jaring", "4. Melipat", "5. Bangun Ruang Kembali"];

export default async function Materi2Peta1Step1Pengantar({ materi, peta, editFoto }: StepComponentProps) {
  const [gambarSiswa, gambarProses] = await Promise.all([
    getPageImage("M2-P1-L1-1"),
    getPageImage("M2-P1-L1-2"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={2} />
        <div className="rounded-[24px] bg-gradient-to-br from-[#EFF4FF] to-white border border-[#DBE7FF] p-6 sm:p-8 flex flex-col-reverse sm:flex-row items-center gap-6">
          <div className="flex-1 flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-4 text-xs font-bold w-fit">
              SUBMATERI 2
            </div>
            <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">
              2. Jaring-Jaring Bangun Ruang Sisi Datar
            </h1>
            <div className="h-1 w-24 rounded-full bg-[#FACC15]" />
          </div>
          <EditablePageImage
            imageKey="M2-P1-L1-1"
            materi={materi}
            peta={peta}
            step="1"
            urutan="1"
            src={gambarSiswa}
            alt="Tiga siswa belajar bersama sambil menulis di buku"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[280px] sm:max-w-[320px] flex-shrink-0 rounded-[16px] overflow-hidden"
          />
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

        <div className="relative bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] pt-8 px-7 pb-6 mt-2 flex flex-col gap-4">
          <div className="absolute -top-[18px] left-6 w-10 h-10 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.08)] flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
              <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
            </svg>
          </div>
          <p className="m-0 text-[15px] leading-[1.6] text-[#374151]">
            Pernahkah kamu membuka sebuah kotak kado atau kardus hingga menjadi lembaran datar? Susunan bidang datar
            tersebut disebut <span className="text-[#2563EB] font-bold">jaring-jaring bangun ruang</span>.
          </p>
          <p className="m-0 text-[15px] leading-[1.6] text-[#374151]">
            Pada submateri ini, kamu akan mengeksplorasi hubungan antara bangun ruang dan jaring-jaringnya.
          </p>
          <div className="bg-[#FCE9A8] rounded-xl py-3.5 px-[18px]">
            <p className="m-0 text-sm font-bold text-[#1D4ED8] leading-[1.5]">
              Menurutmu, apakah satu bangun ruang hanya memiliki satu jaring-jaring?
            </p>
          </div>
          <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
            Mari kita selidiki dengan bantuan GeoGebra 3D dan Augmented Reality (AR).
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Proses Bangun Ruang Menjadi Jaring-Jaring dan Kembali
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          <ol className="m-0 p-0 list-none flex flex-wrap justify-center gap-2">
            {tahapProses.map((tahap) => (
              <li
                key={tahap}
                className="bg-white border border-[#2563EB] text-[#2563EB] px-4 py-2 rounded-full text-xs font-bold"
              >
                {tahap}
              </li>
            ))}
          </ol>

          <EditablePageImage
            imageKey="M2-P1-L1-2"
            materi={materi}
            peta={peta}
            step="1"
            urutan="2"
            src={gambarProses}
            alt="Proses kubus dibuka menjadi jaring-jaring, dilipat, dan menjadi kubus kembali"
            editable={editFoto}
            natural
            containerClassName="relative w-full rounded-[14px] overflow-hidden"
          />

          <div className="bg-[#FCE9A8] rounded-xl py-3.5 px-[18px] flex items-start gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="mt-0.5 flex-shrink-0">
              <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
            </svg>
            <p className="m-0 text-sm font-bold text-[#1D4ED8] leading-[1.5]">
              Apakah kamu dapat menemukan lebih dari satu jaring-jaring dari bangun ruang yang sama? Ayo, temukan
              berbagai kemungkinannya!
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-[#6B7280]">
            <div className="flex items-center gap-2">
              <div className="w-8 border-t-2 border-dashed border-[#2563EB]" />
              Garis putus-putus biru = garis potong
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 border-t-2 border-dashed border-[#DC2626]" />
              Garis putus-putus merah = garis lipatan
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer w-full sm:w-auto justify-center">
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
