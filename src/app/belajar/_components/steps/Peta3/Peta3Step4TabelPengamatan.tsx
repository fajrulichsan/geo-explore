import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const baris = [
  { key: "bentuk-sisi", label: "Bentuk sisi", type: "text" as const },
  { key: "susunan-sisi", label: "Susunan sisi", type: "text" as const },
  { key: "pasangan-bidang", label: "Pasangan bidang sejajar", type: "text" as const },
  { key: "bentuk-alas", label: "Bentuk alas", type: "text" as const },
  { key: "jumlah-sisi", label: "Jumlah sisi", type: "number" as const },
  { key: "jumlah-rusuk", label: "Jumlah rusuk", type: "number" as const },
  { key: "jumlah-titik-sudut", label: "Jumlah titik sudut", type: "number" as const },
  { key: "catatan-lain", label: "Catatan lain", type: "textarea" as const },
];

export default function Peta3Step4TabelPengamatan({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={10} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4l3 2" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Tabel Hasil Pengamatan
          </div>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Catat hasil pengamatanmu dari gambar referensi ke dalam tabel di bawah ini dengan teliti.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sticky top-6">
            <h3 className="m-0 mb-3 flex items-center gap-2 text-base font-bold text-[#2563EB]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              Gambar Referensi
            </h3>
            <div className="w-full aspect-square rounded-2xl bg-[#EFF4FF] flex items-center justify-center text-xs text-[#9CA3AF]">
              Ilustrasi
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="bg-[#2563EB] text-white text-sm font-bold px-5 py-3 w-2/5">
                      Yang Diamati
                    </th>
                    <th className="bg-[#2563EB] text-white text-sm font-bold px-5 py-3 border-l border-white/20">
                      Hasil Pengamatan
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E7EB]">
                  {baris.map((b) => (
                    <tr key={b.key} className="hover:bg-[#F9FAFB] transition-colors">
                      <td className="px-5 py-3 text-sm font-semibold text-[#2563EB] align-top">
                        {b.label}
                      </td>
                      <td className="px-5 py-3">
                        {b.type === "textarea" ? (
                          <textarea
                            name={`answers.${b.key.replace(/-/g, "_")}`}
                            defaultValue={getValue(b.key.replace(/-/g, "_"))}
                            rows={2}
                            placeholder="Tambahkan catatan tambahan..."
                            required
                            className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
                          />
                        ) : (
                          <input
                            type={b.type}
                            name={`answers.${b.key.replace(/-/g, "_")}`}
                            defaultValue={getValue(b.key.replace(/-/g, "_"))}
                            placeholder={b.type === "number" ? "0" : "Ketik di sini..."}
                            required
                            className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 pt-6 mx-5 mb-5 border-t border-[#E5E7EB]">
              <PhotoUpload
                name="answers.foto_bukti"
                label="Unggah foto hasil kerja (opsional)"
                defaultValue={getValue("foto_bukti")}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/3`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
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
