import Link from "next/link";

const panduan = [
  "Bandingkan dugaan awalmu (Tahap 2) dengan temuan eksperimen.",
  "Identifikasi bagian mana yang kurang tepat atau perlu diperjelas.",
  "Gunakan konsep geometri yang relevan sebagai bukti pendukung utama.",
];

export default function Peta5Step3RevisiDugaan({ materi, peta }: { materi: string; peta: string }) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M20 6L9 17l-5-5" />
          </svg>
          TAHAP 5 – AYO VERIFIKASI
        </div>
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            C
          </div>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Revisi Dugaanmu</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
          Tahap 5 dari 6 – Discovery Learning
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Berdasarkan hasil eksplorasi pada langkah sebelumnya, tinjau kembali dugaan awalmu. Gunakan tabel
          di bawah ini untuk mencatat perbaikan yang diperlukan dengan menyertakan alasan dan bukti
          pendukung.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="m-0 text-lg font-bold text-[#111827] flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
                Tabel Revisi Dugaan
              </h2>
              <button
                type="button"
                title="Tambah Baris"
                className="text-[#2563EB] hover:bg-[#EFF4FF] p-2 rounded-full transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b border-[#E5E7EB]">
                    <th className="py-3 px-3 text-xs font-bold text-[#6B7280] w-1/3">Bagian yang Direvisi</th>
                    <th className="py-3 px-3 text-xs font-bold text-[#6B7280] w-1/3">Alasan Revisi</th>
                    <th className="py-3 px-3 text-xs font-bold text-[#6B7280] w-1/3">Bukti Pendukung</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E7EB]">
                  {[0, 1].map((i) => (
                    <tr key={i}>
                      <td className="py-3 px-3 align-top">
                        <textarea
                          rows={3}
                          placeholder="Misal: Sudut A tidak sama dengan Sudut B..."
                          className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none resize-none"
                        />
                      </td>
                      <td className="py-3 px-3 align-top">
                        <textarea
                          rows={3}
                          placeholder="Jelaskan mengapa dugaan awal salah..."
                          className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none resize-none"
                        />
                      </td>
                      <td className="py-3 px-3 align-top">
                        <textarea
                          rows={3}
                          placeholder="Tuliskan perhitungan atau teorema yang mendukung..."
                          className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none resize-none"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#EFF4FF] border border-[#DBEAFE] rounded-[20px] p-5 flex gap-4 items-start">
            <div className="bg-[#2563EB] text-white rounded-full p-2 flex-shrink-0 mt-0.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
              </svg>
            </div>
            <div>
              <h3 className="m-0 mb-1.5 text-sm font-bold text-[#111827]">Ingat!</h3>
              <p className="m-0 text-sm text-[#374151] leading-[1.6]">
                Pastikan setiap revisi didasarkan pada <strong>bukti yang valid</strong> dan{" "}
                <strong>alasan matematis yang logis</strong> dari hasil eksplorasimu, bukan sekadar tebakan
                baru.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <h3 className="m-0 mb-4 text-sm font-bold text-[#111827] flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 17v.01M12 14a2 2 0 10-2-2" />
              </svg>
              Panduan Mengisi Tabel
            </h3>
            <ul className="m-0 p-0 list-none flex flex-col gap-3">
              {panduan.map((p, i) => (
                <li key={p} className="flex gap-3 items-start">
                  <span className="bg-[#D2E6EF] text-[#0B1E24] font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm mt-0.5">
                    {i + 1}
                  </span>
                  <p className="m-0 text-sm text-[#374151] leading-[1.5]">{p}</p>
                </li>
              ))}
            </ul>
          </div>
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
          Sebelumnya
        </Link>
        <Link
          href={`/belajar/${materi}/${peta}/4`}
          className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer"
        >
          Selanjutnya
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </>
  );
}
