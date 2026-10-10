import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const poin = [
  "Setiap kelompok mungkin mempunyai cara pengelompokan yang berbeda.",
  "Belum tentu hanya ada satu jawaban yang benar.",
  "Diskusikan alasan setiap kelompok sebelum menentukan pendapatmu.",
];

export default async function Peta3Step1AyoBerdiskusi({ materi, peta, editFoto }: StepComponentProps) {
  const diskusi = await getPageImage("M1-P3-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={8} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="flex-shrink-0">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
            <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Ayo Berdiskusi
          </div>
        </div>

        <div className="bg-[#EFF4FF] border border-[#DBE5FB] rounded-[20px] p-6 flex flex-col gap-5">
          <div className="relative rounded-2xl bg-white border border-[#DBE5FB] py-3 px-4 text-sm font-bold text-[#1E3A8A] w-fit max-w-full">
            Menurutmu, apa alasan matematis dari cara pengelompokkanmu?
          </div>
          <EditablePageImage
            imageKey="M1-P3-L1-1"
            materi={materi}
            peta={peta}
            step="1"
            urutan="1"
            src={diskusi}
            alt="Tiga siswa berdiskusi di meja sambil menulis di buku"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[420px] mx-auto rounded-2xl overflow-hidden bg-white"
          />
          <ul className="m-0 p-0 list-none flex flex-col gap-3">
            {poin.map((teks) => (
              <li key={teks} className="flex items-start gap-3 text-[15px] leading-[1.6] text-[#1E3A8A]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="flex-shrink-0 mt-1">
                  <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.5 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z" />
                </svg>
                {teks}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-end items-center">
        <NextStepButton />
      </div>
    </form>
  );
}
