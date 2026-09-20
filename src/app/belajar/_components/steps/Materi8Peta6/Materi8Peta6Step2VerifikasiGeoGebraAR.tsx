import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";

export default async function Materi8Peta6Step2VerifikasiGeoGebraAR({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";
  const isChecked = (key: string) => answers[key] === "ya";

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={7} />
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

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Verifikasi Menggunakan GeoGebra dan AR
          </div>
        </div>
        <div className="bg-[#EFF4FF] border border-[#DBEAFE] rounded-[20px] p-5 sm:p-6 flex flex-col gap-3">
          <h3 className="m-0 text-sm font-extrabold text-[#1E3A8A]">Petunjuk: lakukan kegiatan berikut.</h3>
          <label className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] leading-[1.5] cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF]">
            <input type="checkbox" name="answers.langkah_1" value="ya" defaultChecked={isChecked("langkah_1")} className="mt-0.5 accent-[#2563EB]" />
            Buka kembali model bangun ruang pada GeoGebra 3D.
          </label>
          <label className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] leading-[1.5] cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF]">
            <input type="checkbox" name="answers.langkah_2" value="ya" defaultChecked={isChecked("langkah_2")} className="mt-0.5 accent-[#2563EB]" />
            Gunakan k = 1 sebagai kondisi awal (volume awal), kemudian ubah faktor skala menjadi k = 1/2, 2, dan 3.
          </label>
          <label className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] leading-[1.5] cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF]">
            <input type="checkbox" name="answers.langkah_3" value="ya" defaultChecked={isChecked("langkah_3")} className="mt-0.5 accent-[#2563EB]" />
            Periksa kembali volume yang diperoleh.
          </label>
          <label className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] leading-[1.5] cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF]">
            <input type="checkbox" name="answers.langkah_4" value="ya" defaultChecked={isChecked("langkah_4")} className="mt-0.5 accent-[#2563EB]" />
            Bandingkan dengan hubungan yang telah kamu temukan.
          </label>
          <label className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] leading-[1.5] cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF]">
            <input type="checkbox" name="answers.langkah_5" value="ya" defaultChecked={isChecked("langkah_5")} className="mt-0.5 accent-[#2563EB]" />
            Pastikan semua data telah dihitung dengan benar.
          </label>
        </div>

        <h3 className="m-0 text-sm font-extrabold text-[#2563EB]">Tabel Verifikasi</h3>
        <div className="bg-white border border-[#DBEAFE] rounded-[20px] overflow-x-auto shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <table className="w-full min-w-[620px] border-collapse">
            <thead>
              <tr className="bg-[#2563EB] text-white text-xs sm:text-sm">
                <th className="p-3 font-bold">Faktor Skala (k)</th>
                <th className="p-3 font-bold">Dugaan Faktor Perubahan Volume</th>
                <th className="p-3 font-bold bg-[#16A34A]">Faktor Perubahan Volume Hasil GeoGebra/AR</th>
                <th className="p-3 font-bold">Sesuai Dugaan? (✓ / ✗)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#DBEAFE]">
                <th scope="row" className="p-3 text-center text-base font-bold text-[#111827] whitespace-nowrap">½</th>
                <td className="p-2">
                  <textarea
                    name="answers.dugaan_half"
                    defaultValue={getValue("dugaan_half")}
                    rows={2}
                    required
                    aria-label="Dugaan faktor perubahan volume k = ½"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-2">
                  <textarea
                    name="answers.hasil_half"
                    defaultValue={getValue("hasil_half")}
                    rows={2}
                    required
                    aria-label="Faktor perubahan volume hasil GeoGebra/AR k = ½"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-2">
                  <div role="radiogroup" aria-label="Sesuai dugaan k = ½" className="flex flex-wrap justify-center gap-2">
                    <label className="cursor-pointer">
                      <input type="radio" name="answers.sesuai_half" value="ya" defaultChecked={getValue("sesuai_half") === "ya"} required className="peer sr-only" />
                      <span className="inline-block rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1.5 text-sm font-semibold text-[#374151] peer-checked:border-[#2563EB] peer-checked:bg-[#2563EB] peer-checked:text-white">✓</span>
                    </label>
                    <label className="cursor-pointer">
                      <input type="radio" name="answers.sesuai_half" value="tidak" defaultChecked={getValue("sesuai_half") === "tidak"} required className="peer sr-only" />
                      <span className="inline-block rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1.5 text-sm font-semibold text-[#374151] peer-checked:border-[#2563EB] peer-checked:bg-[#2563EB] peer-checked:text-white">✗</span>
                    </label>
                  </div>
                </td>
              </tr>
              <tr className="border-t border-[#DBEAFE]">
                <th scope="row" className="p-3 text-center text-base font-bold text-[#111827] whitespace-nowrap"><span className="flex flex-col items-center leading-tight">1<span className="text-[11px] font-normal text-[#6B7280]">(kondisi awal)</span></span></th>
                <td className="p-2">
                  <textarea
                    name="answers.dugaan_satu"
                    defaultValue={getValue("dugaan_satu")}
                    rows={2}
                    required
                    aria-label="Dugaan faktor perubahan volume k = 1"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-2">
                  <textarea
                    name="answers.hasil_satu"
                    defaultValue={getValue("hasil_satu")}
                    rows={2}
                    required
                    aria-label="Faktor perubahan volume hasil GeoGebra/AR k = 1"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-2">
                  <div role="radiogroup" aria-label="Sesuai dugaan k = 1" className="flex flex-wrap justify-center gap-2">
                    <label className="cursor-pointer">
                      <input type="radio" name="answers.sesuai_satu" value="ya" defaultChecked={getValue("sesuai_satu") === "ya"} required className="peer sr-only" />
                      <span className="inline-block rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1.5 text-sm font-semibold text-[#374151] peer-checked:border-[#2563EB] peer-checked:bg-[#2563EB] peer-checked:text-white">✓</span>
                    </label>
                    <label className="cursor-pointer">
                      <input type="radio" name="answers.sesuai_satu" value="tidak" defaultChecked={getValue("sesuai_satu") === "tidak"} required className="peer sr-only" />
                      <span className="inline-block rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1.5 text-sm font-semibold text-[#374151] peer-checked:border-[#2563EB] peer-checked:bg-[#2563EB] peer-checked:text-white">✗</span>
                    </label>
                  </div>
                </td>
              </tr>
              <tr className="border-t border-[#DBEAFE]">
                <th scope="row" className="p-3 text-center text-base font-bold text-[#111827] whitespace-nowrap">2</th>
                <td className="p-2">
                  <textarea
                    name="answers.dugaan_dua"
                    defaultValue={getValue("dugaan_dua")}
                    rows={2}
                    required
                    aria-label="Dugaan faktor perubahan volume k = 2"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-2">
                  <textarea
                    name="answers.hasil_dua"
                    defaultValue={getValue("hasil_dua")}
                    rows={2}
                    required
                    aria-label="Faktor perubahan volume hasil GeoGebra/AR k = 2"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-2">
                  <div role="radiogroup" aria-label="Sesuai dugaan k = 2" className="flex flex-wrap justify-center gap-2">
                    <label className="cursor-pointer">
                      <input type="radio" name="answers.sesuai_dua" value="ya" defaultChecked={getValue("sesuai_dua") === "ya"} required className="peer sr-only" />
                      <span className="inline-block rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1.5 text-sm font-semibold text-[#374151] peer-checked:border-[#2563EB] peer-checked:bg-[#2563EB] peer-checked:text-white">✓</span>
                    </label>
                    <label className="cursor-pointer">
                      <input type="radio" name="answers.sesuai_dua" value="tidak" defaultChecked={getValue("sesuai_dua") === "tidak"} required className="peer sr-only" />
                      <span className="inline-block rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1.5 text-sm font-semibold text-[#374151] peer-checked:border-[#2563EB] peer-checked:bg-[#2563EB] peer-checked:text-white">✗</span>
                    </label>
                  </div>
                </td>
              </tr>
              <tr className="border-t border-[#DBEAFE]">
                <th scope="row" className="p-3 text-center text-base font-bold text-[#111827] whitespace-nowrap">3</th>
                <td className="p-2">
                  <textarea
                    name="answers.dugaan_tiga"
                    defaultValue={getValue("dugaan_tiga")}
                    rows={2}
                    required
                    aria-label="Dugaan faktor perubahan volume k = 3"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-2">
                  <textarea
                    name="answers.hasil_tiga"
                    defaultValue={getValue("hasil_tiga")}
                    rows={2}
                    required
                    aria-label="Faktor perubahan volume hasil GeoGebra/AR k = 3"
                    className="w-full min-w-[110px] rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                  />
                </td>
                <td className="p-2">
                  <div role="radiogroup" aria-label="Sesuai dugaan k = 3" className="flex flex-wrap justify-center gap-2">
                    <label className="cursor-pointer">
                      <input type="radio" name="answers.sesuai_tiga" value="ya" defaultChecked={getValue("sesuai_tiga") === "ya"} required className="peer sr-only" />
                      <span className="inline-block rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1.5 text-sm font-semibold text-[#374151] peer-checked:border-[#2563EB] peer-checked:bg-[#2563EB] peer-checked:text-white">✓</span>
                    </label>
                    <label className="cursor-pointer">
                      <input type="radio" name="answers.sesuai_tiga" value="tidak" defaultChecked={getValue("sesuai_tiga") === "tidak"} required className="peer sr-only" />
                      <span className="inline-block rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1.5 text-sm font-semibold text-[#374151] peer-checked:border-[#2563EB] peer-checked:bg-[#2563EB] peer-checked:text-white">✗</span>
                    </label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <h3 className="m-0 flex items-center gap-2 text-sm font-extrabold text-[#2563EB]">
            <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs">?</span>
            Pertanyaan
          </h3>
          <div className="flex flex-col gap-2">
            <p className="m-0 text-sm font-semibold text-[#111827] leading-[1.5]">1. Apakah hasil GeoGebra dan AR sesuai dengan dugaan kelompokmu?</p>
            <textarea
            name="answers.hasil_sesuai_dugaan"
            defaultValue={getValue("hasil_sesuai_dugaan")}
            rows={3} required
            aria-label="Apakah hasil GeoGebra dan AR sesuai dengan dugaan kelompokmu"
            className="w-full rounded-xl border border-[#E5E7EB] bg-white p-3 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
          />
          </div>
          <div className="flex flex-col gap-2">
            <p className="m-0 text-sm font-semibold text-[#111827] leading-[1.5]">2. Jika belum sesuai, bagian mana yang harus diperbaiki?</p>
            <textarea
            name="answers.bagian_diperbaiki"
            defaultValue={getValue("bagian_diperbaiki")}
            rows={3} required
            aria-label="Bagian yang harus diperbaiki"
            className="w-full rounded-xl border border-[#E5E7EB] bg-white p-3 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
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
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
