import Link from "next/link";

const baris = [
  { key: "bentuk-sisi", label: "Bentuk sisi", type: "text" as const },
  { key: "susunan-sisi", label: "Susunan sisi", type: "text" as const },
  { key: "pasangan-bidang", label: "Pasangan bidang sejajar", type: "text" as const },
  { key: "bentuk-alas", label: "Bentuk alas", type: "text" as const },
  { key: "jumlah-sisi", label: "Jumlah sisi", type: "number" as const },
  { key: "jumlah-rusuk", label: "Jumlah rusuk", type: "number" as const },
  { key: "jumlah-titik-sudut", label: "Jumlah titik sudut", type: "number" as const },
  { key: "informasi-tambahan", label: "Informasi tambahan", type: "textarea" as const },
];

export default function Peta3Step7TabelPengamatanAR({ materi, peta }: { materi: string; peta: string }) {
  return (
    <>
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
            B
          </div>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Lengkapi Data Hasil Pengamatan</h1>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Catat informasi tambahan yang kamu peroleh melalui AR. Pastikan data yang kamu catat lengkap dan
          jelas. Jangan menyimpulkan terlebih dahulu.
        </p>
      </div>

      <div className="flex justify-end">
        <div className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-full py-2 px-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <span className="text-xs font-semibold text-[#6B7280]">Model yang sedang diamati:</span>
          <select className="bg-[#EFF4FF] text-[#2563EB] text-xs font-bold rounded-full py-1 px-3 border-none focus:outline-none cursor-pointer">
            <option>Prisma Segitiga</option>
            <option>Kubus</option>
            <option>Balok</option>
          </select>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="bg-[#2563EB] text-white text-sm font-bold px-5 py-3 w-1/3">Yang Diamati</th>
                <th className="bg-[#2563EB] text-white text-sm font-bold px-5 py-3 border-l border-white/20 w-1/3">
                  Data dari GeoGebra 3D
                  <span className="block text-[11px] font-normal opacity-80">(Halaman sebelumnya)</span>
                </th>
                <th className="bg-[#059669] text-white text-sm font-bold px-5 py-3 border-l border-white/20 w-1/3">
                  Data Tambahan dari AR
                  <span className="block text-[11px] font-normal opacity-80">(Pengamatan melalui AR)</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {baris.map((b) => (
                <tr key={b.key} className="hover:bg-[#F9FAFB] transition-colors">
                  <td className="px-5 py-3 text-sm font-semibold text-[#374151] align-top">{b.label}</td>
                  <td className="px-5 py-3 border-l border-[#E5E7EB]">
                    <div className="h-9 w-full bg-[#F3F4F6] rounded-md flex items-center px-3 text-xs italic text-[#9CA3AF]">
                      Diisi dari halaman sebelumnya...
                    </div>
                  </td>
                  <td className="px-5 py-3 border-l border-[#E5E7EB]">
                    {b.type === "textarea" ? (
                      <textarea
                        rows={2}
                        placeholder="Catatan lain..."
                        className="w-full rounded-md border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
                      />
                    ) : (
                      <input
                        type={b.type}
                        placeholder={b.type === "number" ? "0" : "Ketik hasil pengamatan..."}
                        className="w-full rounded-md border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
