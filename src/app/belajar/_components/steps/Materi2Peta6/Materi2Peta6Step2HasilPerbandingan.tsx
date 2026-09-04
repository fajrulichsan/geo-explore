import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const dugaanRows = [1, 2, 3, 4];

export default async function Materi2Peta6Step2HasilPerbandingan({
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
        <StepHeader materi={materi} currentStep={2} totalSteps={3} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Hasil Verifikasi Dugaan Kelompok
          </div>
        </div>
        <p className="m-0 -mt-2 text-sm text-[#4B5563]">
          Tuliskan hasil verifikasimu terhadap setiap dugaan kelompok yang telah kalian buat pada tahap sebelumnya.
        </p>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse">
            <thead>
              <tr className="text-left text-xs font-bold text-[#6B7280]">
                <th className="p-2 w-10">No.</th>
                <th className="p-2">Dugaan Kelompok</th>
                <th className="p-2 w-40 text-center">Hasil Verifikasi</th>
                <th className="p-2">Alasan</th>
              </tr>
            </thead>
            <tbody>
              {dugaanRows.map((n) => (
                <tr key={n} className="border-t border-[#F3F4F6]">
                  <td className="p-2 align-top">
                    <div className="w-7 h-7 rounded-full bg-[#EFF4FF] text-[#2563EB] flex items-center justify-center font-bold text-xs">
                      {n}
                    </div>
                  </td>
                  <td className="p-2 align-top">
                    <input
                      type="text"
                      name={`answers.dugaan_${n}`}
                      defaultValue={getValue(`dugaan_${n}`)}
                      placeholder="Dugaan kelompok..."
                      required
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
                    />
                  </td>
                  <td className="p-2 align-top">
                    <div className="flex items-center justify-center gap-3">
                      {(["sesuai", "tidak_sesuai"] as const).map((opt) => (
                        <label key={opt} className="flex flex-col items-center gap-1 cursor-pointer">
                          <input
                            type="radio"
                            name={`answers.hasil_${n}`}
                            value={opt}
                            defaultChecked={getValue(`hasil_${n}`) === opt}
                            required
                            className="accent-[#2563EB]"
                          />
                          <span className="text-[10px] font-semibold text-[#6B7280]">
                            {opt === "sesuai" ? "Sesuai" : "Tidak Sesuai"}
                          </span>
                        </label>
                      ))}
                    </div>
                  </td>
                  <td className="p-2 align-top">
                    <input
                      type="text"
                      name={`answers.alasan_${n}`}
                      defaultValue={getValue(`alasan_${n}`)}
                      placeholder="Alasan..."
                      required
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bandingkan dengan Kelompok Lain
          </div>
        </div>
        <p className="m-0 -mt-2 text-sm text-[#4B5563]">Bandingkan hasil verifikasimu dengan kelompok lain.</p>

        <div className="flex flex-col gap-4">
          <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-2xl p-5 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
                <circle cx="9" cy="8" r="3" />
                <path d="M2 20c0-3.3 3-6 7-6s7 2.7 7 6M17 8a3 3 0 100-6M23 20c0-2.8-2-5-5-5.7" />
              </svg>
              <p className="m-0 text-sm font-bold text-[#047857]">Persamaan</p>
            </div>
            <p className="m-0 text-xs text-[#4B5563] mb-1">Apa hasil yang sama?</p>
            <textarea
              name="answers.persamaan"
              defaultValue={getValue("persamaan")}
              rows={2}
              required
              placeholder="Tuliskan persamaannya..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#059669] focus:outline-none transition-colors resize-none"
            />
          </div>

          <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-2xl p-5 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2">
                <circle cx="9" cy="8" r="3" />
                <path d="M2 20c0-3.3 3-6 7-6s7 2.7 7 6M17 8a3 3 0 100-6M23 20c0-2.8-2-5-5-5.7" />
              </svg>
              <p className="m-0 text-sm font-bold text-[#B91C1C]">Perbedaan</p>
            </div>
            <p className="m-0 text-xs text-[#4B5563] mb-1">Apa hasil yang berbeda?</p>
            <textarea
              name="answers.perbedaan"
              defaultValue={getValue("perbedaan")}
              rows={2}
              required
              placeholder="Tuliskan perbedaannya..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#DC2626] focus:outline-none transition-colors resize-none"
            />
          </div>

          <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-5 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.4">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 16v.01M12 8a2.5 2.5 0 012.5 2.5c0 1.5-2.5 1.8-2.5 3.5" />
              </svg>
              <p className="m-0 text-sm font-bold text-[#92400E]">Mengapa Berbeda?</p>
            </div>
            <p className="m-0 text-xs text-[#4B5563] mb-1">Apa kemungkinan penyebab perbedaan tersebut?</p>
            <textarea
              name="answers.penyebab_perbedaan"
              defaultValue={getValue("penyebab_perbedaan")}
              rows={2}
              required
              placeholder="Tuliskan kemungkinan penyebabnya..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#D97706] focus:outline-none transition-colors resize-none"
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
