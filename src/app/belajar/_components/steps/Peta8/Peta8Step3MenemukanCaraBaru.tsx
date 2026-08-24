import Link from "next/link";

export default function Peta8Step3MenemukanCaraBaru({
  materi,
  peta,
}: {
  materi: string;
  peta: string;
}) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
            <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
          </svg>
          TANTANGAN 3
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Menemukan Cara Baru</h1>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Buatlah satu dasar klasifikasi baru yang belum kamu gunakan pada Tantangan 1. Kemudian,
          kelompokkan keenam bangun tersebut, tuliskan hasil pengelompokannya, dan jelaskan alasan
          matematisnya.
        </p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-[#111827]">Dasar Klasifikasi Baru</label>
          <textarea
            rows={2}
            placeholder="Tuliskan dasar klasifikasimu di sini..."
            className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] outline-none p-4 text-sm text-[#374151] resize-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-[#111827]">
            Hasil Pengelompokan &amp; Alasan Matematis
          </label>
          <textarea
            rows={4}
            placeholder="Jelaskan kelompok yang terbentuk dan alasan matematisnya..."
            className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] outline-none p-4 text-sm text-[#374151] resize-none"
          />
        </div>

        <div className="flex items-start gap-3 p-4 bg-[#FEF9E7] border border-[#F5E3A0] rounded-xl">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
          </svg>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            <span className="font-bold text-[#111827]">Catatan:</span> Cara klasifikasimu tidak
            harus sama dengan temanmu selama logis dan diterapkan secara konsisten.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/2`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
        <Link
          href={`/belajar/${materi}/${peta}/4`}
          className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer"
        >
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </>
  );
}
