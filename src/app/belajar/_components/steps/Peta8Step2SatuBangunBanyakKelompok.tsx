import Link from "next/link";

export default function Peta8Step2SatuBangunBanyakKelompok({
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
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
          TANTANGAN 2
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">
            Satu Bangun, Banyak Kelompok
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              1
            </div>
            <p className="m-0 text-[15px] leading-[1.6] text-[#374151]">
              Apakah kubus dapat dimasukkan ke lebih dari satu kelompok? Tuliskan minimal dua
              kelompok berbeda yang dapat memuat kubus. Berikan alasan matematis.
            </p>
          </div>
          <div className="mt-auto flex items-end gap-5">
            <div className="w-24 h-24 flex-shrink-0 rounded-xl bg-[#EFF4FF] flex items-center justify-center text-xs text-[#9CA3AF]">
              Ilustrasi
            </div>
            <div className="flex-grow flex flex-col gap-3">
              <input
                type="text"
                placeholder="Tuliskan jawabanmu di sini..."
                className="w-full bg-transparent border-0 border-b border-dashed border-[#D1D5DB] focus:ring-0 focus:border-[#2563EB] outline-none px-0 py-2 text-sm text-[#2563EB]"
              />
              <input
                type="text"
                placeholder="Tuliskan alasanmu di sini..."
                className="w-full bg-transparent border-0 border-b border-dashed border-[#D1D5DB] focus:ring-0 focus:border-[#2563EB] outline-none px-0 py-2 text-sm text-[#2563EB]"
              />
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              2
            </div>
            <p className="m-0 text-[15px] leading-[1.6] text-[#374151]">
              Pilih satu bangun ruang selain kubus. Apakah bangun tersebut juga dapat termasuk ke
              lebih dari satu kelompok? Jelaskan alasannya.
            </p>
          </div>
          <div className="mt-auto flex flex-col gap-4">
            <textarea
              rows={3}
              placeholder="Ketik jawaban dan alasanmu di sini..."
              className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] outline-none p-4 text-sm text-[#374151] resize-none min-h-[100px]"
            />
            <div className="flex justify-end">
              <div className="w-20 h-20 flex-shrink-0 rounded-xl bg-[#EFF4FF] flex items-center justify-center text-xs text-[#9CA3AF]">
                Ilustrasi
              </div>
            </div>
          </div>
        </div>
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
        <Link
          href={`/belajar/${materi}/${peta}/3`}
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
