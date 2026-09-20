import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";

const baris = [
  { key: "setengah", label: "½" },
  { key: "satu", label: "1" },
  { key: "dua", label: "2" },
  { key: "tiga", label: "3" },
];

const inputClass =
  "w-full min-w-[80px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] text-center focus:border-[#2563EB] focus:outline-none transition-colors";

export default async function Materi8Peta7Step3FaktorPerubahanVolume({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="4" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Menyimpulkan
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Faktor Perubahan Volume
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
          Perhatikan kembali hasil eksplorasimu. Lengkapilah tabel berikut.
        </p>
        <div className="bg-white border border-[#DBEAFE] rounded-[20px] overflow-x-auto shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <table className="w-full min-w-[460px] border-collapse">
            <thead>
              <tr className="bg-[#2563EB] text-white text-xs sm:text-sm">
                <th className="p-3 font-bold">Faktor Skala (k)</th>
                <th className="p-3 font-bold">Volume Hasil Skala = … × Volume Awal</th>
                <th className="p-3 font-bold">Faktor Perubahan Volume</th>
              </tr>
            </thead>
            <tbody>
              {baris.map((b) => (
                <tr key={b.key} className="border-t border-[#DBEAFE]">
                  <th scope="row" className="p-3 text-center text-base font-bold text-[#111827]">{b.label}</th>
                  <td className="p-2">
                    <div className="flex items-center gap-2 text-sm text-[#374151]">
                      <input
                        type="text"
                        name={`answers.pengali_${b.key}`}
                        defaultValue={getValue(`pengali_${b.key}`)}
                        required
                        aria-label={`Pengali volume awal k = ${b.label}`}
                        className={inputClass}
                      />
                      <span className="whitespace-nowrap">× volume awal</span>
                    </div>
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      name={`answers.faktor_volume_${b.key}`}
                      defaultValue={getValue(`faktor_volume_${b.key}`)}
                      required
                      aria-label={`Faktor perubahan volume k = ${b.label}`}
                      className={inputClass}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-[#EFF4FF] border border-[#DBEAFE] rounded-[20px] p-5 sm:p-6 flex flex-col gap-4">
          <h3 className="m-0 flex items-center gap-2 text-sm font-extrabold text-[#1E3A8A]">
            <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs">?</span>
            Pertanyaan
          </h3>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-[#111827]">1. Pola apa yang kamu temukan?</span>
            <textarea
              name="answers.pola_ditemukan"
              defaultValue={getValue("pola_ditemukan")}
              rows={3}
              required
              className="w-full rounded-xl border border-[#E5E7EB] bg-white p-3 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-[#111827]">2. Mengapa pola tersebut selalu muncul?</span>
            <textarea
              name="answers.alasan_pola"
              defaultValue={getValue("alasan_pola")}
              rows={3}
              required
              className="w-full rounded-xl border border-[#E5E7EB] bg-white p-3 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </label>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
