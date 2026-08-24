import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";

export default function Peta3Step8CatatanHasilEksplorasi({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="8" />

      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          TAHAP 3 – AYO BEREKSPLORASI
        </div>
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            C
          </div>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Catatan Hasil Eksplorasi</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
          Tahap 3 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EFF4FF] text-[#2563EB] flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
            </div>
            <label htmlFor="q1" className="text-[15px] font-bold text-[#111827] pt-1.5">
              Informasi baru apa yang kamu peroleh melalui AR?
            </label>
          </div>
          <textarea
            id="q1"
            name="answers.informasi_baru_ar"
            defaultValue={getValue("informasi_baru_ar")}
            rows={4}
            placeholder="Tuliskan temuan barumu di sini..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
          />
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FEF9E7] text-[#D97706] flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
              </svg>
            </div>
            <label htmlFor="q2" className="text-[15px] font-bold text-[#111827] pt-1.5">
              Informasi apa yang masih perlu kamu selidiki atau amati lebih lanjut?
            </label>
          </div>
          <textarea
            id="q2"
            name="answers.hal_perlu_diselidiki"
            defaultValue={getValue("hal_perlu_diselidiki")}
            rows={4}
            placeholder="Tuliskan pertanyaan atau hal yang masih membingungkan..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#D97706] focus:outline-none focus:bg-white transition-colors resize-y"
          />
          <div className="mt-2 pt-4 border-t border-[#E5E7EB]">
            <PhotoUpload
              name="answers.foto_bukti"
              label="Unggah foto catatan hasil eksplorasi (opsional)"
              defaultValue={getValue("foto_bukti")}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/7`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
        <button
          type="submit"
          className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer"
        >
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </form>
  );
}
