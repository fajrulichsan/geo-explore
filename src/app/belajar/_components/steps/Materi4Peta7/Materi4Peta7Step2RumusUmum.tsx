import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

export default async function Materi4Peta7Step2RumusUmum({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={9} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Luas Permukaan Limas</p>
      </div>

<div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Rumus Umum
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-5 flex flex-col gap-3">
            <p className="m-0 text-sm font-bold text-[#1E3A8A]">Rumus luas permukaan limas</p>
            <p className="m-0 w-fit bg-white border border-dashed border-[#93C5FD] rounded-xl px-5 py-2.5 text-xl font-extrabold text-[#1E3A8A]">
              LP = L<sub>a</sub> + L<sub>s</sub>
            </p>
            <p className="m-0 text-xs font-semibold text-[#374151]">dengan:</p>
            <ul className="m-0 p-0 list-none flex flex-col gap-1 text-xs text-[#374151]">
              <li>LP = luas permukaan limas</li>
              <li>L<sub>a</sub> = luas alas</li>
              <li>L<sub>s</sub> = jumlah luas seluruh sisi tegak (semua sisi yang membatasi limas)</li>
            </ul>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 flex flex-col gap-3">
            <p className="m-0 text-sm font-bold text-[#111827]">Tuliskan rumus yang kamu peroleh dari kegiatanmu di atas beserta keterangannya.</p>
            <label className="text-xs font-semibold text-[#4B5563]">Rumus:</label>
            <input
            type="text"
            name="answers.rumus"
            defaultValue={getValue("rumus")}
            required
            placeholder="Tuliskan rumusnya..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors "
          />
            <label className="text-xs font-semibold text-[#4B5563]">dengan:</label>
            <textarea
            name="answers.rumus_keterangan"
            defaultValue={getValue("rumus_keterangan")}
            rows={4}
            required
            placeholder="Tuliskan keterangan setiap huruf..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
          />
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
