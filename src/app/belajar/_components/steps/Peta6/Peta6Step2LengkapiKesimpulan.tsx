import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";

export default function Peta6Step2LengkapiKesimpulan({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          TAHAP 6 – AYO MENYIMPULKAN
        </div>
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            B
          </div>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Lengkapi Kesimpulan Awalmu</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
          Tahap 6 dari 6 – Discovery Learning
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Lengkapilah pernyataan berikut berdasarkan hasil pengamatan, pengolahan data, dan verifikasi
          yang telah kamu lakukan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex gap-4 items-start">
          <div className="w-8 h-8 rounded-full bg-[#EFF4FF] text-[#2563EB] flex items-center justify-center font-bold text-sm flex-shrink-0">
            1
          </div>
          <p className="m-0 text-sm leading-[1.8] text-[#374151]">
            Bangun ruang sisi datar dapat dikelompokkan berdasarkan{" "}
            <input
              aria-label="Jawaban 1"
              type="text"
              name="answers.dasar_pengelompokan"
              defaultValue={getValue("dasar_pengelompokan")}
              placeholder="..."
              className="border-b-2 border-[#B3C5FF] bg-transparent text-center text-[#2563EB] font-bold min-w-[120px] px-2 focus:outline-none focus:border-[#2563EB]"
            />
            .
          </p>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex gap-4 items-start">
          <div className="w-8 h-8 rounded-full bg-[#EFF4FF] text-[#2563EB] flex items-center justify-center font-bold text-sm flex-shrink-0">
            2
          </div>
          <p className="m-0 text-sm leading-[1.8] text-[#374151]">
            Satu bangun ruang dapat termasuk dalam lebih dari satu kelompok apabila{" "}
            <input
              aria-label="Jawaban 2"
              type="text"
              name="answers.alasan_lebih_dari_satu_kelompok"
              defaultValue={getValue("alasan_lebih_dari_satu_kelompok")}
              placeholder="..."
              className="border-b-2 border-[#B3C5FF] bg-transparent text-center text-[#2563EB] font-bold min-w-[120px] px-2 focus:outline-none focus:border-[#2563EB]"
            />
            .
          </p>
        </div>

        <div className="md:col-span-2 bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex gap-4 items-start">
          <div className="w-8 h-8 rounded-full bg-[#EFF4FF] text-[#2563EB] flex items-center justify-center font-bold text-sm flex-shrink-0">
            3
          </div>
          <p className="m-0 text-sm leading-[1.8] text-[#374151]">
            Suatu cara pengelompokan dapat diterima apabila menggunakan dasar yang{" "}
            <input
              aria-label="Jawaban 3a"
              type="text"
              name="answers.syarat_dasar"
              defaultValue={getValue("syarat_dasar")}
              placeholder="..."
              className="border-b-2 border-[#B3C5FF] bg-transparent text-center text-[#2563EB] font-bold w-24 px-2 focus:outline-none focus:border-[#2563EB]"
            />
            , diterapkan secara{" "}
            <input
              aria-label="Jawaban 3b"
              type="text"
              name="answers.syarat_penerapan"
              defaultValue={getValue("syarat_penerapan")}
              placeholder="..."
              className="border-b-2 border-[#B3C5FF] bg-transparent text-center text-[#2563EB] font-bold w-24 px-2 focus:outline-none focus:border-[#2563EB]"
            />
            , dan didukung oleh alasan matematis yang{" "}
            <input
              aria-label="Jawaban 3c"
              type="text"
              name="answers.syarat_alasan"
              defaultValue={getValue("syarat_alasan")}
              placeholder="..."
              className="border-b-2 border-[#B3C5FF] bg-transparent text-center text-[#2563EB] font-bold w-24 px-2 focus:outline-none focus:border-[#2563EB]"
            />
            .
          </p>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <PhotoUpload
          name="answers.foto_bukti"
          label="Unggah foto hasil kerja (opsional)"
          defaultValue={getValue("foto_bukti")}
        />
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/1`}
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
