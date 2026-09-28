import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const menurutmu = [
  "Apakah benda-benda pada gambar memiliki bentuk yang sama?",
  "Bagaimana kamu akan mengelompokkannya?",
  "Apakah benda-benda tersebut dapat dikelompokkan dengan lebih dari satu cara? Jelaskan alasan matematismu.",
];

export default async function Peta1Step1Pendahuluan({ materi, peta, editFoto }: StepComponentProps) {
  const gambarBenda = await getPageImage("M1-P1-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={3} />
        <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-4 text-xs font-bold tracking-[0.06em] w-fit">
          SUBMATERI 1
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">
          Klasifikasi Bangun Ruang Sisi Datar
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Sebelum Memulai
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          <div className="relative bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] pt-8 px-7 pb-6 mt-2 md:mt-0 flex flex-col gap-3">
            <div className="absolute -top-[18px] left-6 w-10 h-10 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.08)] flex items-center justify-center md:hidden">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
                <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
              </svg>
            </div>
            <p className="m-0 text-[15px] leading-[1.7] text-[#374151]">
              Di sekitar kita banyak benda yang memiliki bentuk berbeda-beda. Jika kita perhatikan, benda-benda
              tersebut dapat dikelompokkan berdasarkan{" "}
              <span className="text-[#2563EB] font-bold">
                sifat-sifat tertentu, seperti bentuk sisi, jumlah rusuk, atau jumlah titik sudutnya
              </span>
              .
            </p>
            <p className="m-0 text-[15px] leading-[1.7] text-[#374151]">
              Pada submateri ini, kamu akan mengamati, mengeksplorasi, dan berdiskusi untuk menemukan cara
              mengelompokkan bangun ruang sisi datar berdasarkan sifat-sifatnya.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <EditablePageImage
              imageKey="M1-P1-L1-1"
              materi={materi}
              peta={peta}
              step="1"
              urutan="1"
              src={gambarBenda}
              alt="Benda-benda di teras: kado, kardus, kubus rubik, tenda, akuarium, dan kotak biru"
              editable={editFoto}
              natural
              containerClassName="relative w-full rounded-[14px] overflow-hidden"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Menurutmu...
          </div>
        </div>

        <div className="bg-white border-2 border-[#F59E0B] rounded-[28px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FCE9A8] flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#92400E" strokeWidth="2">
                <path d="M12 18h.01M9.5 9a2.5 2.5 0 015 0c0 1.5-2.5 2-2.5 4" />
                <circle cx="12" cy="12" r="9" />
              </svg>
            </div>
            <h3 className="m-0 text-base font-bold text-[#111827]">Menurutmu...</h3>
          </div>
          <ul className="m-0 p-0 list-none flex flex-col gap-3">
            {menurutmu.map((q) => (
              <li key={q} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B] mt-2 flex-shrink-0" />
                <p className="m-0 text-sm leading-[1.6] text-[#374151]">{q}</p>
              </li>
            ))}
          </ul>
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
