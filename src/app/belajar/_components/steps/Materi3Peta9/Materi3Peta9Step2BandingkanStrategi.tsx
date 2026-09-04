import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const baris = [
  { key: "langkah", label: "Langkah penyelesaian" },
  { key: "rumus", label: "Rumus yang digunakan" },
  { key: "efisiensi", label: "Keefisienan perhitungan (jumlah langkah/operasi)" },
  { key: "kelebihan", label: "Kelebihan" },
  { key: "kekurangan", label: "Kekurangan" },
] as const;

export default function Materi3Peta9Step2BandingkanStrategi({
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
        <StepHeader materi={materi} currentStep={2} totalSteps={4} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Tantangan Open-Ended
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bandingkan Strategimu
          </div>
          <p className="m-0 text-xs text-[#6B7280]">Lengkapi tabel berikut.</p>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[560px]">
              <thead>
                <tr>
                  <th className="text-left text-xs font-bold text-[#374151] bg-[#F3F0FF] rounded-l-xl py-2.5 px-3.5 w-[30%]">
                    Hal yang Dibandingkan
                  </th>
                  <th className="text-left text-xs font-bold text-[#2563EB] bg-[#F3F0FF] py-2.5 px-3.5">
                    Strategi 1
                  </th>
                  <th className="text-left text-xs font-bold text-[#2563EB] bg-[#F3F0FF] rounded-r-xl py-2.5 px-3.5">
                    Strategi 2
                  </th>
                </tr>
              </thead>
              <tbody>
                {baris.map((b) => (
                  <tr key={b.key} className="border-b border-[#F3F4F6] last:border-none">
                    <td className="py-3 px-3.5 text-xs font-semibold text-[#374151] align-top">
                      {b.label}
                    </td>
                    <td className="py-3 px-3.5 align-top">
                      <textarea
                        name={`answers.bandingkan_${b.key}_1`}
                        defaultValue={getValue(`bandingkan_${b.key}_1`)}
                        rows={2}
                        required
                        placeholder="Jawabanmu..."
                        className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-2.5 py-2 text-xs text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                      />
                    </td>
                    <td className="py-3 px-3.5 align-top">
                      <textarea
                        name={`answers.bandingkan_${b.key}_2`}
                        defaultValue={getValue(`bandingkan_${b.key}_2`)}
                        rows={2}
                        required
                        placeholder="Jawabanmu..."
                        className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-2.5 py-2 text-xs text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-[#F5F3FF] border border-[#DDD6FE] rounded-2xl p-5 flex items-start gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <path d="M12 2a5 5 0 00-3 9v2a1 1 0 001 1h4a1 1 0 001-1v-2a5 5 0 00-3-9z" />
            <path d="M9 21h6" />
          </svg>
          <p className="m-0 text-xs font-semibold text-[#5B21B6] leading-[1.6]">
            Bandingkan dengan cermat setiap strategi untuk menemukan cara yang paling efektif
            menurutmu!
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
