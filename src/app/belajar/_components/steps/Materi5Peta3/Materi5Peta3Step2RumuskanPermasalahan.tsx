import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const pertanyaan = [
  { key: "faktor_skala_luas", label: "Bagaimana faktor skala memengaruhi luas permukaan bangun ruang?" },
  { key: "perubahan_sama_panjang", label: "Apakah perubahan luas permukaan mengikuti faktor yang sama dengan perubahan ukuran panjang?" },
  { key: "pola_sama_semua_bangun", label: "Apakah pola perubahan luas permukaan sama untuk kubus, balok, prisma segitiga, dan limas segiempat?" },
];

export default async function Materi5Peta3Step2RumuskanPermasalahan({
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
        <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M21 11.5a8.4 8.4 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.4 8.4 0 01-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.4 8.4 0 013.8-.9h.5a8.5 8.5 0 018 8z" />
          </svg>
          Tahap 2
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
      </div>

      <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          B
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Rumuskan Permasalahan
        </div>
      </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Centang (&#10003;) satu atau lebih pertanyaan yang menurut kelompokmu perlu diselidiki lebih lanjut.
        </p>
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 flex flex-col gap-3">
          {pertanyaan.map((p) => (
            <label
              key={p.key}
              className="flex items-start gap-3 rounded-xl border border-[#F5E3A0] bg-white p-3.5 cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF] transition-colors"
            >
              <input
                type="checkbox"
                name={`answers.${p.key}`}
                value="ya"
                defaultChecked={getValue(p.key) === "ya"}
                data-require-group="rumuskan_permasalahan"
                className="mt-0.5 w-4 h-4 accent-[#2563EB] flex-shrink-0"
              />
              <span className="text-sm text-[#374151] leading-[1.5]">{p.label}</span>
            </label>
          ))}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="pertanyaan_lain" className="text-sm font-semibold text-[#78350F]">
              Pertanyaan lain:
            </label>
            <textarea
              id="pertanyaan_lain"
              name="answers.pertanyaan_lain"
              rows={2}
              defaultValue={getValue("pertanyaan_lain")}
              placeholder="Tuliskan pertanyaan tambahan (opsional)..."
              className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
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
