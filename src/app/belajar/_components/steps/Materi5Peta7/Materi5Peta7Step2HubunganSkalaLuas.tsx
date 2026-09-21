import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const baris = [
  { key: "k2", faktor: "2" },
  { key: "k3", faktor: "3" },
  { key: "k4", faktor: "4" },
  { key: "k_setengah", faktor: "½" },
];

export default async function Materi5Peta7Step2HubunganSkalaLuas({
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
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">
          Temukan Konsep Hubungan Skala dan Luas
        </p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              B
            </div>
            <h2 className="m-0 text-lg font-bold text-[#111827]">Hubungan Skala dengan Luas</h2>
          </div>
        <p className="m-0 -mt-2 text-sm text-[#4B5563]">
          Perhatikan kembali hasil eksplorasimu. Lengkapilah tabel berikut.
        </p>

        <div className="rounded-2xl border border-[#BFDBFE] overflow-hidden">
          <div className="grid grid-cols-2 bg-[#1E3A8A] text-white text-sm font-bold text-center">
            <div className="py-3 px-4">Faktor Skala (k)</div>
            <div className="py-3 px-4">Luas Permukaan Menjadi</div>
          </div>
          {baris.map((b) => (
            <div key={b.key} className="grid grid-cols-2 items-center border-t border-[#DBEAFE]">
              <div className="py-3 px-4 text-center text-sm font-bold text-[#1E3A8A]">{b.faktor}</div>
              <div className="p-2 border-l border-[#DBEAFE]">
                <input
                  type="text"
                  name={`answers.luas_${b.key}`}
                  defaultValue={getValue(`luas_${b.key}`)}
                  required
                  aria-label={`Luas permukaan menjadi untuk k = ${b.faktor}`}
                  placeholder="... × luas awal"
                  className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#EFF4FF] border border-[#DBEAFE] rounded-[20px] p-6 flex flex-col gap-4">
        <p className="m-0 flex items-center gap-2 text-sm font-bold text-[#1D4ED8]">
          <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs">?</span>
          Pertanyaan
        </p>
          <div className="flex flex-col gap-2">
            <label htmlFor="pola_ditemukan" className="text-sm font-semibold text-[#111827]">
              1. Pola apa yang kamu temukan?
            </label>
            <textarea
              id="pola_ditemukan"
              name="answers.pola_ditemukan"
              defaultValue={getValue("pola_ditemukan")}
              rows={3}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pola_berlaku_penskalaan" className="text-sm font-semibold text-[#111827]">
              2. Mengapa pola tersebut berlaku pada bangun hasil penskalaan?
            </label>
            <textarea
              id="pola_berlaku_penskalaan"
              name="answers.pola_berlaku_penskalaan"
              defaultValue={getValue("pola_berlaku_penskalaan")}
              rows={3}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
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
