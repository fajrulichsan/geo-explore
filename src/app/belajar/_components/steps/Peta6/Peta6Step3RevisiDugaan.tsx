import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const bangunRuang = ["Kubus", "Balok", "Prisma Segitiga", "Limas Segiempat", "Limas Segitiga"];

export default function Peta6Step3RevisiDugaan({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={6} />
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-4 text-xs font-bold tracking-[0.06em] w-fit">
            SUBMATERI 1
          </div>
          <div className="inline-flex items-center gap-2 bg-[#EFF4FF] text-[#2563EB] border border-[#DBE5FB] rounded-full py-1.5 px-4 text-xs font-bold w-fit">
            Tahap 5 dari 6 &ndash; Discovery Learning
          </div>
        </div>
        <div className="flex items-center gap-3.5">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2563EB"
            strokeWidth="2.4"
            className="flex-shrink-0"
          >
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Revisi Dugaanmu
          </div>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Berdasarkan hasil eksplorasi pada langkah sebelumnya, tinjau kembali dugaan awalmu. Pilih bangun ruang yang ingin kamu verifikasi, lalu gunakan tabel
          di bawah ini untuk mencatat perbaikan yang diperlukan dengan menyertakan alasan dan bukti
          pendukung. Cukup isi satu baris jika hanya satu bangun yang ingin kamu verifikasi.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="m-0 text-lg font-bold text-[#111827] flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
                Tabel Revisi Dugaan
              </h2>
              <button
                type="button"
                title="Tambah Baris"
                className="text-[#2563EB] hover:bg-[#EFF4FF] p-2 rounded-full transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[720px]">
                <thead>
                  <tr className="border-b border-[#E5E7EB]">
                    <th className="py-3 px-3 text-xs font-bold text-[#6B7280] w-[16%]">Bangun Ruang</th>
                    <th className="py-3 px-3 text-xs font-bold text-[#6B7280] w-[28%]">Bagian yang Direvisi</th>
                    <th className="py-3 px-3 text-xs font-bold text-[#6B7280] w-[28%]">Alasan Revisi</th>
                    <th className="py-3 px-3 text-xs font-bold text-[#6B7280] w-[28%]">Bukti Pendukung</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E7EB]">
                  {[0, 1, 2].map((i) => (
                    <tr key={i}>
                      <td className="py-3 px-3 align-top">
                        <select
                          name={`answers.revisi_${i}_bangun`}
                          defaultValue={getValue(`revisi_${i}_bangun`)}
                          required={i === 0}
                          className="w-full rounded-lg border border-[#E5E7EB] bg-white px-2 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none"
                        >
                          <option value="">Pilih bangun</option>
                          {bangunRuang.map((b) => (
                            <option key={b}>{b}</option>
                          ))}
                        </select>
                      </td>
                      <td className="py-3 px-3 align-top">
                        <textarea
                          rows={3}
                          name={`answers.revisi_${i}_bagian`}
                          defaultValue={getValue(`revisi_${i}_bagian`)}
                          placeholder="Misal: Sudut A tidak sama dengan Sudut B..."
                          required={i === 0}
                          className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none resize-none"
                        />
                      </td>
                      <td className="py-3 px-3 align-top">
                        <textarea
                          rows={3}
                          name={`answers.revisi_${i}_alasan`}
                          defaultValue={getValue(`revisi_${i}_alasan`)}
                          placeholder="Jelaskan mengapa dugaan awal salah..."
                          required={i === 0}
                          className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none resize-none"
                        />
                      </td>
                      <td className="py-3 px-3 align-top">
                        <textarea
                          rows={3}
                          name={`answers.revisi_${i}_bukti`}
                          defaultValue={getValue(`revisi_${i}_bukti`)}
                          placeholder="Tuliskan perhitungan atau teorema yang mendukung..."
                          required={i === 0}
                          className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none resize-none"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 pt-4 border-t border-[#E5E7EB]">
              <PhotoUpload
                name="answers.foto_bukti"
                label="Unggah foto hasil kerja (opsional)"
                defaultValue={getValue("foto_bukti")}
              />
            </div>
          </div>

        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 flex items-start gap-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
          </svg>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Revisi menunjukkan bahwa kamu menggunakan bukti dan alasan matematis yang lebih kuat.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/2`} />
        <NextStepButton />
      </div>
    </form>
  );
}
