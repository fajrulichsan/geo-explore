import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const karakteristik = [
  "Memiliki satu alas berbentuk segi-n (misal persegi, segitiga, atau segi-many).",
  "Memiliki beberapa sisi tegak berbentuk segitiga.",
];

export default async function Materi4Peta10Step2RumusLuasPermukaan({
  materi,
  peta,
}: StepComponentProps) {
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={3} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Rangkuman Luas Permukaan Limas
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Luas Permukaan Limas
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-[20px] p-6 flex flex-col gap-4">
            <p className="m-0 text-sm font-extrabold text-[#1E3A8A]">Karakteristik Limas</p>
            <ul className="m-0 pl-5 flex flex-col gap-2 text-sm text-[#374151]">
              {karakteristik.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            <p className="m-0 text-sm font-extrabold text-[#2563EB]">Rumus Umum</p>
            <div className="bg-[#DBEAFE] rounded-xl py-4 text-center">
              <p className="m-0 text-xl font-extrabold text-[#1E3A8A]">LP = Lₐ + Lₛ</p>
            </div>
            <div className="flex flex-col gap-1.5 text-xs text-[#4B5563]">
              <p className="m-0">
                <span className="font-bold">Lₐ</span> = luas alas
              </p>
              <p className="m-0">
                <span className="font-bold">Lₛ</span> = jumlah luas seluruh sisi tegak
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-5 flex flex-col gap-2">
          <p className="m-0 text-sm font-extrabold text-[#111827]">Mengapa rumus ini benar?</p>
          <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
            Jika limas dibuka menjadi jaring-jaring, semua sisinya (alas dan sisi tegak) terlihat
            dan tidak saling tumpang tindih. Luas permukaannya adalah jumlah luas alas ditambah
            jumlah luas seluruh sisi tegaknya.
          </p>
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
