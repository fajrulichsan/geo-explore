import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const verifikasi = [
  { key: "bentuk_sisi", aspek: "Bentuk sisi" },
  { key: "susunan_sisi", aspek: "Susunan sisi" },
  { key: "pasangan_sisi", aspek: "Pasangan bidang sisi sejajar" },
  { key: "sisi_alas", aspek: "Bentuk sisi yang dipilih sebagai alas" },
  { key: "jumlah_sisi", aspek: "Jumlah sisi" },
  { key: "jumlah_rusuk", aspek: "Jumlah rusuk" },
  { key: "jumlah_titik_sudut", aspek: "Jumlah titik sudut" },
];

const ingat = [
  "Periksa kembali menggunakan data yang telah kamu kumpulkan.",
  "Bandingkan alasanmu dengan kelompok lain.",
  "Revisi hanya jika ditemukan alasan matematis yang lebih kuat.",
  "Pada tahap ini kita belum membuat kesimpulan akhir.",
];

export default async function Peta6Step1PeriksaKembali({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={6} />
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
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-3xl">
          Pada Tahap 4 kamu telah menemukan beberapa pola dan membuat klasifikasi bangun ruang. Sekarang{" "}
          <strong>periksalah kembali</strong> apakah hasil tersebut benar-benar didukung oleh data hasil
          pengamatan GeoGebra 3D, Augmented Reality (AR), dan hasil diskusi kelompok.
        </p>
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 flex gap-4 items-start">
        <div className="bg-[#D97706] text-white rounded-full p-2 flex-shrink-0 mt-0.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
          </svg>
        </div>
        <div>
          <h3 className="m-0 mb-1.5 text-sm font-bold text-[#111827]">Ingat!</h3>
          <ul className="m-0 p-0 list-none flex flex-col gap-1.5">
            {ingat.map((i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[#374151] leading-[1.5]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" className="flex-shrink-0 mt-1">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          A
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Periksa Kembali Hasil Pengolahanmu
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="bg-[#EFF4FF] border-b border-[#E5E7EB] p-5 flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
              <h2 className="m-0 text-lg font-bold text-[#2563EB]">Tabel Verifikasi</h2>
            </div>
            <p className="m-0 px-5 pt-4 text-xs text-[#6B7280]">
              Periksa kembali setiap aspek berikut berdasarkan data yang kamu miliki.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b border-[#E5E7EB]">
                    <th className="py-3 px-4 text-xs font-bold text-[#6B7280] w-1/4">Aspek / Hasil yang Diperiksa</th>
                    <th className="py-3 px-4 text-xs font-bold text-[#6B7280] w-1/4">Bukti dari Data</th>
                    <th className="py-3 px-4 text-xs font-bold text-[#6B7280] w-1/6 text-center">Sudah Sesuai?</th>
                    <th className="py-3 px-4 text-xs font-bold text-[#6B7280] w-1/3">Jika Belum, Apa yang Diperbaiki?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E7EB]">
                  {verifikasi.map((v) => (
                    <tr key={v.key}>
                      <td className="py-3 px-4 align-top text-sm font-semibold text-[#111827]">{v.aspek}</td>
                      <td className="py-3 px-4 align-top">
                        <input
                          type="text"
                          name={`answers.bukti_${v.key}`}
                          defaultValue={getValue(`bukti_${v.key}`)}
                          placeholder="Tulis bukti..."
                          required
                          className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none"
                        />
                      </td>
                      <td className="py-3 px-4 align-top">
                        <div className="flex flex-row gap-3 items-center justify-center">
                          <label className="inline-flex items-center gap-1.5 text-xs text-[#374151]">
                            <input
                              type="radio"
                              name={`answers.sesuai_${v.key}`}
                              value="ya"
                              defaultChecked={getValue(`sesuai_${v.key}`) === "ya"}
                              required
                              className="w-4 h-4 text-[#2563EB]"
                            />
                            Ya
                          </label>
                          <label className="inline-flex items-center gap-1.5 text-xs text-[#374151]">
                            <input
                              type="radio"
                              name={`answers.sesuai_${v.key}`}
                              value="belum"
                              defaultChecked={getValue(`sesuai_${v.key}`) === "belum"}
                              className="w-4 h-4 text-[#DC2626]"
                            />
                            Belum
                          </label>
                        </div>
                      </td>
                      <td className="py-3 px-4 align-top">
                        <textarea
                          rows={2}
                          name={`answers.perbaikan_${v.key}`}
                          defaultValue={getValue(`perbaikan_${v.key}`)}
                          placeholder="Catatan perbaikan..."
                          required
                          className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none resize-none"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 pt-0">
              <PhotoUpload
                name="answers.foto_bukti"
                label="Unggah foto hasil verifikasi (opsional)"
                defaultValue={getValue("foto_bukti")}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/4/8`}
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
