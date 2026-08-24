import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";

const checklist = [
  "Sesuai dengan data pengamatan atau hasil eksperimen.",
  "Menyertakan alasan yang logis dan didukung teori.",
  "Telah didiskusikan dan disetujui oleh seluruh anggota kelompok.",
];

export default function Peta5Step5HasilVerifikasi({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M20 6L9 17l-5-5" />
          </svg>
          TAHAP 5 – AYO VERIFIKASI
        </div>
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            E
          </div>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Hasil Verifikasi Kelompok</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
          Tahap 5 dari 6 – Discovery Learning
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Tulislah hasil verifikasi data yang telah kalian lakukan bersama kelompok di bawah ini.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)] h-full">
            <div className="w-full h-full min-h-[180px] rounded-xl bg-[#F9FAFB] flex items-center justify-center text-xs text-[#9CA3AF]">
              Ilustrasi
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-5">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <h2 className="m-0 mb-4 text-lg font-bold text-[#111827] flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
              Hasil Verifikasi Kelompok Kami
            </h2>
            <textarea
              rows={8}
              name="answers.hasil_verifikasi"
              defaultValue={getValue("hasil_verifikasi")}
              placeholder="Tuliskan hasil verifikasi kelompokmu di sini..."
              required
              className="w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <h3 className="m-0 mb-4 text-sm font-bold text-[#111827] flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
              Pastikan hasil verifikasimu:
            </h3>
            <div className="flex flex-col gap-3">
              {checklist.map((c, i) => (
                <label key={c} className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name={`answers.checklist_${i}`}
                    value="true"
                    defaultChecked={getValue(`checklist_${i}`) === "true"}
                    data-require-group="peta5step5"
                    className="w-4 h-4 mt-0.5 rounded border-[#E5E7EB] text-[#2563EB]"
                  />
                  <span className="text-sm text-[#374151] group-hover:text-[#111827] transition-colors">
                    {c}
                  </span>
                </label>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-[#E5E7EB]">
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
          href={`/belajar/${materi}/${peta}/4`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Sebelumnya
        </Link>
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          Simpan &amp; Lanjut
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
