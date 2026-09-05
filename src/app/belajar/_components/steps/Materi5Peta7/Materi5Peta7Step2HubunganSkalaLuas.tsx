import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const baris = ["2", "3", "4", "1/2"];

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
          Tahap 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">
          Skala dan Luas Bangun Ruang Sisi Datar
        </p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="flex items-center gap-3 px-6 pt-5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            B
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Hubungan Skala dengan Luas</h2>
        </div>
        <p className="m-0 px-6 pt-2 text-sm text-[#4B5563]">
          Perhatikan kembali hasil eksplorasimu. Lengkapilah tabel berikut.
        </p>

        <div className="px-6 pt-4 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[420px]">
            <thead>
              <tr>
                <th className="bg-[#2563EB] text-white text-sm font-bold px-4 py-3 rounded-l-lg w-40">
                  Faktor Skala (k)
                </th>
                <th className="bg-[#2563EB] text-white text-sm font-bold px-4 py-3 border-l border-white/20 rounded-r-lg">
                  Luas Permukaan Menjadi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {baris.map((k) => (
                <tr key={k}>
                  <td className="px-4 py-3 text-sm font-bold text-[#111827] align-middle">{k}</td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      name={`answers.luas_permukaan_k_${k.replace("/", "-")}`}
                      defaultValue={getValue(`luas_permukaan_k_${k.replace("/", "-")}`)}
                      placeholder="..."
                      required
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="m-6 mt-5 bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-4 flex flex-col gap-4">
          <p className="m-0 flex items-center gap-2 text-sm font-bold text-[#1D4ED8]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="2.2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v5M12 16.5v.01" />
            </svg>
            Pertanyaan
          </p>
          <div className="flex flex-col gap-2">
            <label htmlFor="pola_ditemukan" className="text-sm text-[#374151]">
              1. Pola apa yang kamu temukan?
            </label>
            <textarea
              id="pola_ditemukan"
              name="answers.pola_ditemukan"
              defaultValue={getValue("pola_ditemukan")}
              rows={2}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#BFDBFE] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="alasan_pola_berlaku" className="text-sm text-[#374151]">
              2. Mengapa pola tersebut berlaku pada bangun hasil penskalaan?
            </label>
            <textarea
              id="alasan_pola_berlaku"
              name="answers.alasan_pola_berlaku"
              defaultValue={getValue("alasan_pola_berlaku")}
              rows={2}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#BFDBFE] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
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
