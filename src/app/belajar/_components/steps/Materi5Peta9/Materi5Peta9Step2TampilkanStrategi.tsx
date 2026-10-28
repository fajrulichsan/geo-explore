import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const fields = [
  { key: "cara", label: "Cara yang saya gunakan", rows: 2 },
  { key: "perhitungan", label: "Perhitungan", rows: 4 },
  { key: "alasan", label: "Alasan mengapa strategi ini benar", rows: 3 },
] as const;

const strategi = [
  { id: "1", prefix: "strategi_1", title: "Strategi 1", badge: "bg-[#2563EB]", card: "bg-[#EFF4FF] border-[#BFDBFE]", ring: "focus:border-[#2563EB]", required: true },
  { id: "2", prefix: "strategi_2", title: "Strategi 2", badge: "bg-[#16A34A]", card: "bg-[#F0FDF4] border-[#BBF7D0]", ring: "focus:border-[#16A34A]", required: true },
  { id: "lain", prefix: "strategi_lain", title: "Strategi Lain (Jika Ada)", badge: "bg-[#7C3AED]", card: "bg-[#F5F3FF] border-[#DDD6FE]", ring: "focus:border-[#7C3AED]", required: false },
] as const;

export default async function Materi5Peta9Step2TampilkanStrategi({
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
        <StepHeader materi={materi} currentStep={2} totalSteps={6} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Tantangan Terbuka
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Tampilkan Strategimu
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {strategi.map((s) => (
            <div key={s.id} className={`${s.card} border rounded-[20px] p-5 flex flex-col gap-3`}>
              <div className="flex items-center gap-2">
                <div className={`${s.badge} w-7 h-7 rounded-full text-white flex items-center justify-center font-bold text-xs flex-shrink-0`}>
                  {s.id === "lain" ? "+" : s.id}
                </div>
                <p className="m-0 text-sm font-bold text-[#111827]">{s.title}</p>
              </div>
              {fields.map((f) => (
                <div key={f.key} className="flex flex-col gap-1">
                  <label htmlFor={`${s.prefix}_${f.key}`} className="text-xs font-semibold text-[#374151]">
                    {f.label}:
                  </label>
                  <textarea
                    id={`${s.prefix}_${f.key}`}
                    name={`answers.${s.prefix}_${f.key}`}
                    defaultValue={getValue(`${s.prefix}_${f.key}`)}
                    rows={f.rows}
                    required={s.required}
                    placeholder={s.required ? "Jawabanmu..." : "Jawabanmu (opsional)..."}
                    className={`w-full rounded-xl border border-[#E5E7EB] bg-white p-2.5 text-xs text-[#374151] placeholder:text-[#9CA3AF] ${s.ring} focus:outline-none transition-colors resize-y`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/1`} />
        <NextStepButton />
      </div>
    </form>
  );
}
