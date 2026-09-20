import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";

export default async function Materi8Peta3Step2BandingkanHasilPengamatan({
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
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={9} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Berdiskusi
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bandingkan Hasil Pengamatan
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
          Isilah tabel berikut berdasarkan hasil perhitungan volume pada Tahap 1.
        </p>
        <div className="bg-white border border-[#DBEAFE] rounded-[20px] overflow-x-auto shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <table className="w-full min-w-[560px] border-collapse">
            <thead>
              <tr className="bg-[#2563EB] text-white text-xs sm:text-sm">
                <th className="p-3 text-left font-bold">Bangun</th>
                <th className="p-3 font-bold">Volume awal (cm³)</th>
                <th className="p-3 font-bold">Volume hasil skala (k = 2) (cm³)</th>
                <th className="p-3 font-bold">Faktor perubahan volume</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#DBEAFE]">
                <th scope="row" className="p-2 text-left align-middle">
                  <span className="flex items-center gap-2 text-sm font-bold text-[#111827]">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="1.8" strokeLinejoin="round">
                      <path d="M12 3l8 4v10l-8 4-8-4V7z M4 7l8 4 8-4 M12 11v10" />
                    </svg>
                    Kubus
                  </span>
                </th>
                <td className="p-2">
                  <textarea
                    name="answers.kubus_volume_awal"
                    defaultValue={getValue("kubus_volume_awal")}
                    rows={2}
                    required
                    aria-label="Kubus volume awal"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-2">
                  <textarea
                    name="answers.kubus_volume_skala"
                    defaultValue={getValue("kubus_volume_skala")}
                    rows={2}
                    required
                    aria-label="Kubus volume hasil skala"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-2">
                  <textarea
                    name="answers.kubus_faktor"
                    defaultValue={getValue("kubus_faktor")}
                    rows={2}
                    required
                    aria-label="Kubus faktor perubahan volume"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
              </tr>
              <tr className="border-t border-[#DBEAFE]">
                <th scope="row" className="p-2 text-left align-middle">
                  <span className="flex items-center gap-2 text-sm font-bold text-[#111827]">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.8" strokeLinejoin="round">
                      <path d="M3 9l5-4h13v9l-5 5H3z M3 9h13v10 M16 9l5-4" />
                    </svg>
                    Balok
                  </span>
                </th>
                <td className="p-2">
                  <textarea
                    name="answers.balok_volume_awal"
                    defaultValue={getValue("balok_volume_awal")}
                    rows={2}
                    required
                    aria-label="Balok volume awal"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-2">
                  <textarea
                    name="answers.balok_volume_skala"
                    defaultValue={getValue("balok_volume_skala")}
                    rows={2}
                    required
                    aria-label="Balok volume hasil skala"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-2">
                  <textarea
                    name="answers.balok_faktor"
                    defaultValue={getValue("balok_faktor")}
                    rows={2}
                    required
                    aria-label="Balok faktor perubahan volume"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
              </tr>
              <tr className="border-t border-[#DBEAFE]">
                <th scope="row" className="p-2 text-left align-middle">
                  <span className="flex items-center gap-2 text-sm font-bold text-[#111827]">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#9333EA" strokeWidth="1.8" strokeLinejoin="round">
                      <path d="M12 3L4 19h16z M12 3l3 16" />
                    </svg>
                    Prisma
                  </span>
                </th>
                <td className="p-2">
                  <textarea
                    name="answers.prisma_volume_awal"
                    defaultValue={getValue("prisma_volume_awal")}
                    rows={2}
                    required
                    aria-label="Prisma volume awal"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-2">
                  <textarea
                    name="answers.prisma_volume_skala"
                    defaultValue={getValue("prisma_volume_skala")}
                    rows={2}
                    required
                    aria-label="Prisma volume hasil skala"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-2">
                  <textarea
                    name="answers.prisma_faktor"
                    defaultValue={getValue("prisma_faktor")}
                    rows={2}
                    required
                    aria-label="Prisma faktor perubahan volume"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
              </tr>
              <tr className="border-t border-[#DBEAFE]">
                <th scope="row" className="p-2 text-left align-middle">
                  <span className="flex items-center gap-2 text-sm font-bold text-[#111827]">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" strokeLinejoin="round">
                      <path d="M12 3L3 19h18z M12 3v16" />
                    </svg>
                    Limas
                  </span>
                </th>
                <td className="p-2">
                  <textarea
                    name="answers.limas_volume_awal"
                    defaultValue={getValue("limas_volume_awal")}
                    rows={2}
                    required
                    aria-label="Limas volume awal"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-2">
                  <textarea
                    name="answers.limas_volume_skala"
                    defaultValue={getValue("limas_volume_skala")}
                    rows={2}
                    required
                    aria-label="Limas volume hasil skala"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-2">
                  <textarea
                    name="answers.limas_faktor"
                    defaultValue={getValue("limas_faktor")}
                    rows={2}
                    required
                    aria-label="Limas faktor perubahan volume"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-start gap-2.5 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl px-4 py-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.6" className="mt-0.5 flex-shrink-0">
            <path d="M5 13l4 4L19 7" />
          </svg>
          <p className="m-0 text-sm text-[#166534] leading-[1.5]">Gunakan satuan yang sama pada semua volume.</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
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
