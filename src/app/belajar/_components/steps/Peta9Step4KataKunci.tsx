import Link from "next/link";

const kataKunci = [
  "Bangun ruang sisi datar",
  "Bentuk sisi sebagai alas",
  "Kubus",
  "Pasangan bidang sisi sejajar",
  "Balok",
  "Jumlah sisi",
  "Prisma",
  "Jumlah rusuk",
  "Limas",
  "Jumlah titik sudut",
  "Klasifikasi",
  "Sifat-sifat lain",
];

const ingat = [
  "Suatu kumpulan bangun ruang dapat diklasifikasikan dengan lebih dari satu cara yang benar.",
  "Cara klasifikasi yang baik adalah cara yang menggunakan dasar yang jelas, diterapkan secara konsisten, dan didukung oleh alasan matematis yang logis.",
  "Kelompok bangun yang terbentuk bergantung pada dasar klasifikasi yang digunakan.",
];

export default function Peta9Step4KataKunci({ materi, peta }: { materi: string; peta: string }) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 006.5 22H20V4H6.5A2.5 2.5 0 004 6.5v13z" />
          </svg>
          RANGKUMAN 4
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M20.6 12.6l-8.66 8.66a2 2 0 01-2.83 0L2.34 14.5a2 2 0 010-2.83L11 3h9a1 1 0 011 1v8.6z" />
            <circle cx="7.5" cy="7.5" r="1.5" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Kata Kunci &amp; Catatan Penting</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
          Submateri 1 – Bangun Ruang Sisi Datar
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 bg-white border border-[#E5E7EB] rounded-[20px] p-6 flex flex-col gap-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              C
            </div>
            <h2 className="m-0 text-base font-bold text-[#2563EB]">Kata Kunci</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {kataKunci.map((k) => (
              <div
                key={k}
                className="flex items-center gap-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg py-2.5 px-3.5 hover:border-[#2563EB] transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-[#2563EB] flex-shrink-0" />
                <span className="text-sm font-semibold text-[#374151]">{k}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#FDF3C7] border border-[#F5E3A0] rounded-[20px] p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#D97706] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              D
            </div>
            <h2 className="m-0 text-base font-bold text-[#92400E]">Ingat!</h2>
          </div>
          <div className="bg-white/80 border border-[#F5E3A0] rounded-xl p-4 flex flex-col gap-3">
            {ingat.map((i, idx) => (
              <div
                key={i}
                className={`flex items-start gap-2.5 rounded-lg p-2.5 ${idx === 1 ? "bg-[#FCE9A8]" : ""}`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#D97706" className="flex-shrink-0 mt-0.5">
                  <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 21 12 17.77 5.8 21 7 14.14 2 9.27l7.1-1.01L12 2z" />
                </svg>
                <p className="m-0 text-sm leading-[1.6] text-[#374151]">{i}</p>
              </div>
            ))}
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
        <Link
          href={`/belajar/${materi}/${peta}/5`}
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
