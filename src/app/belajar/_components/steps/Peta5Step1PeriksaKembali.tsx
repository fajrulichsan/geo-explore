import Link from "next/link";

const verifikasi = [
  { key: "bentuk_sisi", aspek: "Bentuk sisi" },
  { key: "susunan_sisi", aspek: "Susunan sisi" },
  { key: "pasangan_sisi", aspek: "Pasangan bidang sisi sejajar" },
];

export default function Peta5Step1PeriksaKembali({ materi, peta }: { materi: string; peta: string }) {
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
            A
          </div>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Periksa Kembali</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
          Tahap 5 dari 6 – Discovery Learning
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Verifikasi hasil penemuan jaring-jaring balok yang telah kamu buat. Pastikan semua elemen sesuai
          dengan karakteristik balok.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] h-full flex flex-col gap-3">
            <span className="text-sm font-bold text-[#111827]">Referensi Model</span>
            <div className="flex-1 min-h-[160px] rounded-xl bg-[#F9FAFB] flex items-center justify-center text-xs text-[#9CA3AF]">
              Ilustrasi Balok
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="bg-[#EFF4FF] border-b border-[#E5E7EB] p-5 flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
              <h2 className="m-0 text-lg font-bold text-[#2563EB]">Tabel Verifikasi Jaring-jaring Balok</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b border-[#E5E7EB]">
                    <th className="py-3 px-4 text-xs font-bold text-[#6B7280] w-1/4">Aspek</th>
                    <th className="py-3 px-4 text-xs font-bold text-[#6B7280] w-1/4">Bukti dari Data</th>
                    <th className="py-3 px-4 text-xs font-bold text-[#6B7280] w-1/6 text-center">Sesuai?</th>
                    <th className="py-3 px-4 text-xs font-bold text-[#6B7280] w-1/3">Perbaikan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E7EB]">
                  {verifikasi.map((v) => (
                    <tr key={v.key}>
                      <td className="py-3 px-4 align-top text-sm font-semibold text-[#111827]">{v.aspek}</td>
                      <td className="py-3 px-4 align-top">
                        <input
                          type="text"
                          placeholder="Tulis bukti..."
                          className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none"
                        />
                      </td>
                      <td className="py-3 px-4 align-top">
                        <div className="flex flex-col gap-1.5 items-center">
                          <label className="inline-flex items-center gap-1.5 text-xs text-[#374151]">
                            <input type="radio" name={v.key} className="w-4 h-4 text-[#2563EB]" />
                            Ya
                          </label>
                          <label className="inline-flex items-center gap-1.5 text-xs text-[#374151]">
                            <input type="radio" name={v.key} className="w-4 h-4 text-[#DC2626]" />
                            Belum
                          </label>
                        </div>
                      </td>
                      <td className="py-3 px-4 align-top">
                        <textarea
                          rows={2}
                          placeholder="Catatan perbaikan..."
                          className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none resize-none"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/4/8`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
        <Link
          href={`/belajar/${materi}/${peta}/2`}
          className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer"
        >
          Simpan &amp; Lanjutkan
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </>
  );
}
