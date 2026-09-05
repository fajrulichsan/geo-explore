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
        <StepHeader materi={materi} currentStep={2} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Luas Permukaan Limas</p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            C
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Rumus Umum</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 items-start">
          <div className="bg-[#F3E8FF] border border-[#DDD6FE] rounded-2xl p-5 flex flex-col gap-4">
            <p className="m-0 text-sm font-bold text-[#6D28D9]">Rumus luas permukaan limas</p>
            <div className="bg-white rounded-xl px-5 py-4 text-center">
              <p className="m-0 text-xl font-extrabold text-[#111827] tracking-wide">LP = L&#8320; + L&#8347;</p>
            </div>
            <div className="flex flex-col gap-1.5 text-xs text-[#4B5563]">
              <p className="m-0">
                <span className="font-bold text-[#6D28D9]">LP</span> = luas permukaan limas
              </p>
              <p className="m-0">
                <span className="font-bold text-[#6D28D9]">L&#8320;</span> = luas alas
              </p>
              <p className="m-0">
                <span className="font-bold text-[#6D28D9]">L&#8347;</span> = jumlah luas seluruh sisi
                tegak (semua sisi yang membatasi limas)
              </p>
            </div>
          </div>

          <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-5 flex flex-col gap-4">
            <label htmlFor="rumus_perolehan" className="text-sm font-semibold text-[#111827]">
              Tuliskan rumus yang kamu peroleh dari kegiatanmu di atas beserta keterangannya.
            </label>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-[#6B7280]">Rumus</span>
              <input
                id="rumus_perolehan"
                type="text"
                name="answers.rumus_perolehan"
                defaultValue={getValue("rumus_perolehan")}
                required
                placeholder="Tuliskan rumusmu..."
                className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#7C3AED] focus:outline-none transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-[#6B7280]">Dengan</span>
              <textarea
                name="answers.keterangan_rumus"
                defaultValue={getValue("keterangan_rumus")}
                rows={4}
                required
                placeholder="Jelaskan setiap bagian rumusmu..."
                className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#7C3AED] focus:outline-none transition-colors resize-y"
              />
            </div>
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
