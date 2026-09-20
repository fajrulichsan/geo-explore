import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";

export default async function Materi8Peta6Step4UjiHubunganFaktorSkalaVolume({
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
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 5 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12.5l3 3 5-6" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Verifikasi
          </h1>
        </div>
      </div>

      <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-[20px] p-5 sm:p-6 flex flex-col gap-2">
        <h2 className="m-0 text-base font-extrabold text-[#C2410C]">Pengantar</h2>
        <p className="m-0 text-sm text-[#374151] leading-[1.65]">
          Sekarang lakukan pemeriksaan terakhir terhadap hubungan yang telah kamu temukan. Pastikan hubungan tersebut benar berdasarkan seluruh bukti yang telah dikumpulkan.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Uji Hubungan Faktor Skala dan Volume
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">Lengkapilah tabel berikut.</p>
        <div className="flex items-start gap-2.5 bg-[#FEF9E7] border border-[#F5E3A0] rounded-xl px-4 py-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
            <path d="M9 18h6 M10 21h4 M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
          </svg>
          <p className="m-0 text-sm text-[#92400E] leading-[1.5]">Gunakan hasil verifikasi GeoGebra dan AR untuk memeriksa apakah hubungan tersebut selalu berlaku.</p>
        </div>
        <div className="bg-white border border-[#BBF7D0] rounded-[20px] overflow-x-auto shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <table className="w-full min-w-[620px] border-collapse">
            <thead>
              <tr className="bg-[#16A34A] text-white text-xs sm:text-sm">
                <th className="p-3 font-bold">Faktor Skala (k)</th>
                <th className="p-3 font-bold">Volume Awal (cm³)</th>
                <th className="p-3 font-bold">Volume Baru (cm³)</th>
                <th className="p-3 font-bold">Apakah V<sub>baru</sub> = k³ × V<sub>awal</sub> sesuai dengan hasil verifikasi?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#BBF7D0]">
                <th scope="row" className="p-3 text-center text-base font-bold text-[#111827] whitespace-nowrap">½</th>
                <td className="p-2">
                  <textarea
                    name="answers.volume_awal_half"
                    defaultValue={getValue("volume_awal_half")}
                    rows={2}
                    required
                    aria-label="Volume awal k = ½"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-2">
                  <textarea
                    name="answers.volume_baru_half"
                    defaultValue={getValue("volume_baru_half")}
                    rows={2}
                    required
                    aria-label="Volume baru k = ½"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-2">
                  <div role="radiogroup" aria-label="Apakah rumus sesuai hasil verifikasi k = ½" className="flex flex-wrap justify-center gap-2">
                    <label className="cursor-pointer">
                      <input type="radio" name="answers.berlaku_half" value="ya" defaultChecked={getValue("berlaku_half") === "ya"} required className="peer sr-only" />
                      <span className="inline-block rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1.5 text-sm font-semibold text-[#374151] peer-checked:border-[#2563EB] peer-checked:bg-[#2563EB] peer-checked:text-white">Ya</span>
                    </label>
                    <label className="cursor-pointer">
                      <input type="radio" name="answers.berlaku_half" value="tidak" defaultChecked={getValue("berlaku_half") === "tidak"} required className="peer sr-only" />
                      <span className="inline-block rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1.5 text-sm font-semibold text-[#374151] peer-checked:border-[#2563EB] peer-checked:bg-[#2563EB] peer-checked:text-white">Tidak</span>
                    </label>
                  </div>
                </td>
              </tr>
              <tr className="border-t border-[#BBF7D0]">
                <th scope="row" className="p-3 text-center text-base font-bold text-[#111827] whitespace-nowrap"><span className="flex flex-col items-center leading-tight">1<span className="text-[11px] font-normal text-[#6B7280]">(kondisi awal)</span></span></th>
                <td className="p-2">
                  <textarea
                    name="answers.volume_awal_satu"
                    defaultValue={getValue("volume_awal_satu")}
                    rows={2}
                    required
                    aria-label="Volume awal k = 1"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-2">
                  <textarea
                    name="answers.volume_baru_satu"
                    defaultValue={getValue("volume_baru_satu")}
                    rows={2}
                    required
                    aria-label="Volume baru k = 1"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-2">
                  <div role="radiogroup" aria-label="Apakah rumus sesuai hasil verifikasi k = 1" className="flex flex-wrap justify-center gap-2">
                    <label className="cursor-pointer">
                      <input type="radio" name="answers.berlaku_satu" value="ya" defaultChecked={getValue("berlaku_satu") === "ya"} required className="peer sr-only" />
                      <span className="inline-block rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1.5 text-sm font-semibold text-[#374151] peer-checked:border-[#2563EB] peer-checked:bg-[#2563EB] peer-checked:text-white">Ya</span>
                    </label>
                    <label className="cursor-pointer">
                      <input type="radio" name="answers.berlaku_satu" value="tidak" defaultChecked={getValue("berlaku_satu") === "tidak"} required className="peer sr-only" />
                      <span className="inline-block rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1.5 text-sm font-semibold text-[#374151] peer-checked:border-[#2563EB] peer-checked:bg-[#2563EB] peer-checked:text-white">Tidak</span>
                    </label>
                  </div>
                </td>
              </tr>
              <tr className="border-t border-[#BBF7D0]">
                <th scope="row" className="p-3 text-center text-base font-bold text-[#111827] whitespace-nowrap">2</th>
                <td className="p-2">
                  <textarea
                    name="answers.volume_awal_dua"
                    defaultValue={getValue("volume_awal_dua")}
                    rows={2}
                    required
                    aria-label="Volume awal k = 2"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-2">
                  <textarea
                    name="answers.volume_baru_dua"
                    defaultValue={getValue("volume_baru_dua")}
                    rows={2}
                    required
                    aria-label="Volume baru k = 2"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-2">
                  <div role="radiogroup" aria-label="Apakah rumus sesuai hasil verifikasi k = 2" className="flex flex-wrap justify-center gap-2">
                    <label className="cursor-pointer">
                      <input type="radio" name="answers.berlaku_dua" value="ya" defaultChecked={getValue("berlaku_dua") === "ya"} required className="peer sr-only" />
                      <span className="inline-block rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1.5 text-sm font-semibold text-[#374151] peer-checked:border-[#2563EB] peer-checked:bg-[#2563EB] peer-checked:text-white">Ya</span>
                    </label>
                    <label className="cursor-pointer">
                      <input type="radio" name="answers.berlaku_dua" value="tidak" defaultChecked={getValue("berlaku_dua") === "tidak"} required className="peer sr-only" />
                      <span className="inline-block rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1.5 text-sm font-semibold text-[#374151] peer-checked:border-[#2563EB] peer-checked:bg-[#2563EB] peer-checked:text-white">Tidak</span>
                    </label>
                  </div>
                </td>
              </tr>
              <tr className="border-t border-[#BBF7D0]">
                <th scope="row" className="p-3 text-center text-base font-bold text-[#111827] whitespace-nowrap">3</th>
                <td className="p-2">
                  <textarea
                    name="answers.volume_awal_tiga"
                    defaultValue={getValue("volume_awal_tiga")}
                    rows={2}
                    required
                    aria-label="Volume awal k = 3"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-2">
                  <textarea
                    name="answers.volume_baru_tiga"
                    defaultValue={getValue("volume_baru_tiga")}
                    rows={2}
                    required
                    aria-label="Volume baru k = 3"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-2">
                  <div role="radiogroup" aria-label="Apakah rumus sesuai hasil verifikasi k = 3" className="flex flex-wrap justify-center gap-2">
                    <label className="cursor-pointer">
                      <input type="radio" name="answers.berlaku_tiga" value="ya" defaultChecked={getValue("berlaku_tiga") === "ya"} required className="peer sr-only" />
                      <span className="inline-block rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1.5 text-sm font-semibold text-[#374151] peer-checked:border-[#2563EB] peer-checked:bg-[#2563EB] peer-checked:text-white">Ya</span>
                    </label>
                    <label className="cursor-pointer">
                      <input type="radio" name="answers.berlaku_tiga" value="tidak" defaultChecked={getValue("berlaku_tiga") === "tidak"} required className="peer sr-only" />
                      <span className="inline-block rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1.5 text-sm font-semibold text-[#374151] peer-checked:border-[#2563EB] peer-checked:bg-[#2563EB] peer-checked:text-white">Tidak</span>
                    </label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <h3 className="m-0 flex items-center gap-2 text-sm font-extrabold text-[#166534]">
            <span className="w-6 h-6 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-xs">?</span>
            Pertanyaan
          </h3>
          <p className="m-0 text-sm font-semibold text-[#111827] leading-[1.5]">Apa yang kamu temukan setelah melakukan pemeriksaan ini?</p>
          <textarea
            name="answers.temuan_pemeriksaan"
            defaultValue={getValue("temuan_pemeriksaan")}
            rows={3} required
            aria-label="Temuan setelah pemeriksaan"
            className="w-full rounded-xl border border-[#E5E7EB] bg-white p-3 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
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
