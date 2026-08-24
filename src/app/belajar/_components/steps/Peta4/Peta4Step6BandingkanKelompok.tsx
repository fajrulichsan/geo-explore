import Link from "next/link";

const kolom = ["Kelompokmu", "Kelompok Lain 1", "Kelompok Lain 2"];

const baris = ["Bentuk sisi", "Susunan sisi", "Pasangan bidang sisi sejajar", "Ukuran rusuk"];

export default function Peta4Step6BandingkanKelompok({ materi, peta }: { materi: string; peta: string }) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          TAHAP 4 – AYO MENGOLAH INFORMASI
        </div>
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            A
          </div>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Bandingkan Hasil Pengamatan Kelompokmu</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
          Tahap 4 dari 6 – Discovery Learning
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Diskusikan dan bandingkan hasil pengamatan kelompokmu dengan kelompok lain untuk menemukan
          kesimpulan yang lebih komprehensif.
        </p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="bg-[#EFF4FF] border-b border-[#E5E7EB] p-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            A
          </div>
          <h2 className="m-0 text-lg font-bold text-[#2563EB]">Tabel Perbandingan</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr>
                <th className="bg-[#F9FAFB] text-[#374151] text-sm font-bold px-4 py-3 w-1/4">Hasil Pengamatan</th>
                {kolom.map((k, i) => (
                  <th
                    key={k}
                    className={`text-sm font-bold px-4 py-3 text-center border-l border-[#E5E7EB] ${
                      i === 0 ? "bg-[#EFF4FF] text-[#2563EB]" : "bg-[#F9FAFB] text-[#374151]"
                    }`}
                  >
                    {k}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {baris.map((b) => (
                <tr key={b} className="hover:bg-[#F9FAFB] transition-colors">
                  <td className="px-4 py-3 text-sm font-semibold text-[#111827] align-top">{b}</td>
                  {kolom.map((k, i) => (
                    <td key={k} className="px-4 py-3">
                      <input
                        type="text"
                        placeholder={i === 0 ? "Ketik di sini..." : "..."}
                        className={`w-full rounded-lg border px-3 py-2 text-sm text-center text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors ${
                          i === 0 ? "border-[#DBEAFE] bg-[#EFF4FF]" : "border-[#E5E7EB] bg-white"
                        }`}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
        <Link
          href={`/belajar/${materi}/${peta}/7`}
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
