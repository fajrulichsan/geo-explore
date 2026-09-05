import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const contoh = ["Maket rumah", "Miniatur gedung", "Model jembatan", "dan lainnya"];

export default async function Materi5Peta2Step4DugaanAwal({
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
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={9} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengamati dan Berpikir</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-5 items-start">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              D
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Dugaan Awal
            </div>
          </div>
          <p className="m-0 text-sm text-[#374151]">
            Berdasarkan pengamatanmu untuk k = 2, menurutmu luas permukaan bangun menjadi
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <input
              type="text"
              name="answers.dugaan_kelipatan"
              defaultValue={getValue("dugaan_kelipatan")}
              placeholder="..."
              required
              className="w-24 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm font-bold text-center text-[#2563EB] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
            />
            <span className="text-sm text-[#374151]">kali luas permukaan semula.</span>
          </div>
          <label htmlFor="dugaan_alasan" className="text-sm font-bold text-[#111827]">
            Alasan:
          </label>
          <textarea
            id="dugaan_alasan"
            name="answers.dugaan_alasan"
            defaultValue={getValue("dugaan_alasan")}
            rows={4}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
          />
        </div>

        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-6 flex flex-col gap-3">
          <p className="m-0 text-sm font-bold text-[#78350F] flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
              <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
            </svg>
            Tahukah Kamu?
          </p>
          <p className="m-0 text-sm text-[#78350F] leading-[1.6]">
            Banyak benda di sekitar kita menggunakan prinsip skala, misalnya:
          </p>
          <ul className="m-0 pl-5 flex flex-col gap-1.5">
            {contoh.map((c) => (
              <li key={c} className="text-sm text-[#78350F]">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
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
