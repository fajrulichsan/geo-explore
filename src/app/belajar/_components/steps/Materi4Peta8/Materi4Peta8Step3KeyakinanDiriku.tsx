import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const pernyataan = [
  { n: 1, label: "Saya yakin dapat memahami konsep luas permukaan limas." },
  { n: 2, label: "Saya yakin dapat menyelesaikan soal luas permukaan limas dengan benar." },
  { n: 3, label: "Saya yakin dapat menjelaskan cara memperoleh rumus LP = La + Ls." },
  { n: 4, label: "Saya yakin dapat menerapkan konsep luas permukaan limas pada soal yang berbeda." },
  { n: 5, label: "Saya yakin dapat menggunakan pengalaman belajar ini untuk mempelajari materi bangun ruang berikutnya." },
];

const opsi = [
  { value: "sangat_yakin", label: "Sangat Yakin" },
  { value: "yakin", label: "Yakin" },
  { value: "cukup_yakin", label: "Cukup Yakin" },
  { value: "belum_yakin", label: "Belum Yakin" },
];

export default async function Materi4Peta8Step3KeyakinanDiriku({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={4} />
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
              <path d="M12 2l2.6 6.5L21 9l-5 4.4L17.4 21 12 17.3 6.6 21 8 13.4 3 9l6.4-.5z" />
            </svg>
          </div>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Refleksi Diri</h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#7C3AED] text-white flex items-center justify-center flex-shrink-0">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
            </svg>
          </div>
          <h2 className="m-0 text-lg font-extrabold text-[#111827]">C. Keyakinan Diriku (Self-Efficacy)</h2>
        </div>
        <p className="m-0 text-sm text-[#6B7280]">
          Berilah tanda pada pilihan yang sesuai dengan keyakinanmu.
        </p>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          {pernyataan.map((p) => (
            <div key={p.n} className="flex flex-col gap-3 border-b border-[#F3F4F6] last:border-0 pb-5 last:pb-0">
              <p className="m-0 text-sm font-semibold text-[#374151]">
                <span className="text-[#9CA3AF] font-bold mr-1.5">{p.n}.</span>
                {p.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {opsi.map((o) => (
                  <label
                    key={o.value}
                    className="flex items-center gap-1.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full py-1.5 px-3.5 text-xs font-semibold text-[#374151] cursor-pointer has-[:checked]:bg-[#F3E8FF] has-[:checked]:border-[#7C3AED] has-[:checked]:text-[#7C3AED] transition-colors"
                  >
                    <input
                      type="radio"
                      name={`answers.keyakinan_${p.n}`}
                      value={o.value}
                      defaultChecked={getValue(`keyakinan_${p.n}`) === o.value}
                      required
                      className="accent-[#7C3AED]"
                    />
                    {o.label}
                  </label>
                ))}
              </div>
            </div>
          ))}
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
