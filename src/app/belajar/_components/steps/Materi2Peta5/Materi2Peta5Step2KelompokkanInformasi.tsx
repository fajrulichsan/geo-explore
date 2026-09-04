import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const kelompok = [
  { key: "banyak_alternatif", label: "Memiliki banyak alternatif jaring-jaring" },
  { key: "sedikit_alternatif", label: "Memiliki sedikit alternatif jaring-jaring" },
  { key: "sisi_tersambung", label: "Seluruh sisi tersambung dengan benar" },
  { key: "sisi_bertumpuk", label: "Ada sisi yang saling bertumpuk" },
  { key: "lainnya", label: "Lainnya (temuan unik kelompokmu)" },
];

export default async function Materi2Peta5Step2KelompokkanInformasi({
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
        <StepHeader materi={materi} currentStep={2} totalSteps={5} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Kelompokkan Informasi
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <p className="m-0 text-sm text-[#4B5563]">
            Kelompokkan seluruh hasil eksplorasi berdasarkan karakteristiknya.
          </p>
          <div className="flex flex-col gap-3">
            {kelompok.map((k) => (
              <div key={k.key} className="grid grid-cols-1 sm:grid-cols-[1fr_1.3fr] gap-2 sm:gap-4 items-start rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                <span className="text-sm font-bold text-[#111827]">{k.label}</span>
                <input
                  type="text"
                  name={`answers.kelompok_${k.key}`}
                  defaultValue={getValue(`kelompok_${k.key}`)}
                  placeholder="Contoh hasil pengamatan..."
                  required
                  className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
                />
              </div>
            ))}
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
