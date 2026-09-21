import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const aspek = [
  { key: "langkah", label: "Langkah-langkah penyelesaian" },
  { key: "sisi_tegak", label: "Cara menghitung luas sisi tegak" },
  { key: "permukaan", label: "Cara memperoleh luas permukaan" },
  { key: "kemudahan", label: "Kemudahan perhitungan" },
  { key: "kelebihan", label: "Kelebihan strategi" },
  { key: "kekurangan", label: "Kekurangan strategi" },
] as const;

const kolom = [
  { key: "s1", label: "Strategi 1", required: true },
  { key: "s2", label: "Strategi 2", required: true },
  { key: "catatan", label: "Catatanmu", required: false },
] as const;

export default async function Materi4Peta9Step3BandingkanStrategi({
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
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={5} />
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#1E3A8A]">Tantangan Open-Ended</h1>
          <span className="inline-flex items-center gap-1.5 bg-[#FDF3C7] text-[#92400E] rounded-full py-1 px-3 text-xs font-bold">
            Submateri 4 · Halaman 2 dari 2
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="w-[34px] h-[34px] rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">C</div>
          <div className="bg-white border border-[#DDD6FE] rounded-full py-2 px-5 text-sm font-bold text-[#6D28D9]">Bandingkan Strategimu</div>
          <p className="m-0 text-xs text-[#6B7280]">Perbandingkan kedua strategi yang kamu gunakan pada halaman sebelumnya!</p>
        </div>

        <div className="flex flex-col gap-4">
          {aspek.map((a, i) => (
            <div key={a.key} className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 sm:p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
              <p className="m-0 text-sm font-bold text-[#111827]">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F5F3FF] text-[#6D28D9] text-xs mr-2">{i + 1}</span>
                {a.label}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {kolom.map((k) => (
                  <div key={k.key} className="flex flex-col gap-1">
                    <label htmlFor={`${a.key}${k.key}`} className="text-[11px] font-bold text-[#6D28D9]">
                      {k.label}
                    </label>
                    <textarea
                      id={`${a.key}${k.key}`}
                      name={`answers.${a.key}_${k.key}`}
                      defaultValue={getValue(`${a.key}_${k.key}`)}
                      rows={3}
                      required={k.required}
                      placeholder={k.required ? "Jawabanmu..." : "Opsional..."}
                      className="w-full rounded-xl border border-[#D1D5DB] bg-white p-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-4 text-xs font-semibold text-[#78350F] leading-[1.6]">
          🔍 Bandingkan dengan cermat setiap strategi untuk menemukan cara yang paling efektif menurutmu!
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
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
