import Link from "next/link";
import Image from "next/image";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import { getPageImage } from "@/lib/pageImages";

const verifikasi = [
  { key: "bentuk_sisi", aspek: "Bentuk sisi" },
  { key: "susunan_sisi", aspek: "Susunan sisi" },
  { key: "pasangan_sisi", aspek: "Pasangan bidang sisi sejajar" },
];

export default async function Peta6Step1PeriksaKembali({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const gambarBalok = await getPageImage("M1-P6-L1-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={6} />
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            A
          </div>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Periksa Kembali</h1>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Verifikasi hasil penemuan jaring-jaring balok yang telah kamu buat. Pastikan semua elemen sesuai
          dengan karakteristik balok.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] h-full flex flex-col gap-3">
            <span className="text-sm font-bold text-[#111827]">Referensi Model</span>
            <div className="relative flex-1 min-h-[160px] rounded-xl bg-[#F9FAFB] overflow-hidden">
              <Image src={gambarBalok} alt="Referensi model balok" fill className="object-cover" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="bg-[#EFF4FF] border-b border-[#E5E7EB] p-5 flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
              <h2 className="m-0 text-lg font-bold text-[#2563EB]">Tabel Verifikasi Jaring-jaring Balok</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b border-[#E5E7EB]">
                    <th className="py-3 px-4 text-xs font-bold text-[#6B7280] w-1/4">Aspek</th>
                    <th className="py-3 px-4 text-xs font-bold text-[#6B7280] w-1/4">Bukti dari Data</th>
                    <th className="py-3 px-4 text-xs font-bold text-[#6B7280] w-1/6 text-center">Sesuai?</th>
                    <th className="py-3 px-4 text-xs font-bold text-[#6B7280] w-1/3">Perbaikan</th>
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
                        <div className="flex flex-col gap-1.5 items-center">
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
        <Link
          href={`/belajar/${materi}/4/8`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          Simpan &amp; Lanjutkan
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
