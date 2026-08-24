import Link from "next/link";

const catatan = [
  {
    color: "#2563EB",
    label: "Dasar pengelompokan yang kami pilih",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    color: "#059669",
    label: "Alasan sementara kami",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3" />
      </svg>
    ),
  },
  {
    color: "#D97706",
    label: "Hal yang masih perlu kami selidiki",
    sub: "(informasi apa yang perlu kami cari?)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
      </svg>
    ),
  },
];

export default function Peta2Step7CatatanHasilDiskusi({ materi, peta }: { materi: string; peta: string }) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
            <path d="M4 4h16v16H4z" />
            <path d="M8 9h8M8 13h5" />
          </svg>
          SUBMATERI 1
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
          Tahap 2 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              C
            </div>
            <div>
              <h2 className="m-0 text-lg font-bold text-[#2563EB]">Catatan Hasil Diskusi</h2>
              <p className="m-0 text-sm text-[#6B7280]">Ringkas hasil diskusi kelompokmu.</p>
            </div>
          </div>

          {catatan.map((c) => (
            <div
              key={c.label}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex gap-4"
            >
              <div
                className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center"
                style={{ backgroundColor: c.color }}
              >
                {c.icon}
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-sm font-bold" style={{ color: c.color }}>
                  {c.label}
                </label>
                {c.sub && <span className="text-xs text-[#9CA3AF]">{c.sub}</span>}
                <input
                  type="text"
                  placeholder="Tuliskan di sini..."
                  className="w-full bg-transparent border-0 border-b border-dashed border-[#E5E7EB] py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#2563EB] transition-colors"
                />
                <input
                  type="text"
                  placeholder="..."
                  className="w-full bg-transparent border-0 border-b border-dashed border-[#E5E7EB] py-2 mt-1 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#2563EB] transition-colors"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-[#EFF4FF] border border-[#DBEAFE] rounded-[20px] p-6 sticky top-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                D
              </div>
              <h3 className="m-0 text-base font-bold text-[#2563EB] flex-1">Ingat!</h3>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
                <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
              </svg>
            </div>
            <p className="m-0 mb-3 text-sm font-bold text-[#2563EB]">Dugaan pengelompokan yang baik perlu:</p>
            <ul className="m-0 p-0 flex flex-col gap-3 list-none">
              {["menggunakan dasar yang jelas;", "diterapkan secara konsisten;", "didukung alasan matematis yang logis."].map(
                (item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="3" className="mt-0.5 flex-shrink-0">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[#374151]">{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/6`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
        <Link
          href={`/belajar/${materi}/${peta}/8`}
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
