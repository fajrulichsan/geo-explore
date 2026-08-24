import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";

const dugaanList = [
  { n: 1, judul: "Dugaan Pertama", kriteriaPlaceholder: "Contoh: Berdasarkan jumlah sisi...", bangunPlaceholder: "Contoh: Kubus, Balok..." },
  { n: 2, judul: "Dugaan Kedua", kriteriaPlaceholder: "Tulis kriteria kedua di sini...", bangunPlaceholder: "Bangun apa saja?" },
];

export default function Peta2Step6DugaanKelompokku({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
          TAHAP 2 – AYO BERDISKUSI
        </div>
        <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Dugaan Kelompokku</h1>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Berdasarkan rumusan masalah pada tahap sebelumnya, diskusikan dan tuliskan dua dugaan
          pengelompokan bangun ruang sisi datar yang disepakati oleh kelompokmu.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {dugaanList.map((d) => (
          <div key={d.n} className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                {d.n}
              </div>
              <h3 className="m-0 text-lg font-bold text-[#111827]">{d.judul}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#374151]">Dasar Pengelompokan (Kriteria)</label>
                <textarea
                  rows={3}
                  name={`answers.dugaan_${d.n}_kriteria`}
                  defaultValue={getValue(`dugaan_${d.n}_kriteria`)}
                  placeholder={d.kriteriaPlaceholder}
                  className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#374151]">Bangun yang Termasuk</label>
                <textarea
                  rows={3}
                  name={`answers.dugaan_${d.n}_bangun`}
                  defaultValue={getValue(`dugaan_${d.n}_bangun`)}
                  placeholder={d.bangunPlaceholder}
                  className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#374151]">Alasan Awal Kelompok</label>
                <textarea
                  rows={3}
                  name={`answers.dugaan_${d.n}_alasan`}
                  defaultValue={getValue(`dugaan_${d.n}_alasan`)}
                  placeholder="Mengapa dikelompokkan bersama?"
                  className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-none"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] pt-8 px-7 pb-6 mt-2">
        <div className="absolute -top-[18px] left-6 w-10 h-10 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.08)] flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
            <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
          </svg>
        </div>
        <h3 className="m-0 mb-2 text-xl font-bold text-[#92400E]">Ingat!</h3>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151]">
          Dugaan pengelompokan yang baik perlu menggunakan dasar yang jelas, diterapkan secara konsisten, dan
          didukung alasan matematis yang logis.
        </p>
      </div>

      <div className="pt-2">
        <PhotoUpload
          name="answers.foto_bukti"
          label="Unggah foto hasil kerja kelompokmu (opsional)"
          defaultValue={getValue("foto_bukti")}
        />
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/5`}
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
