import Link from "next/link";

const bangun = [
  { n: 1, label: "Kubus" },
  { n: 2, label: "Balok" },
  { n: 3, label: "Prisma Segitiga" },
  { n: 4, label: "Prisma Segi Lima" },
  { n: 5, label: "Limas Segitiga" },
  { n: 6, label: "Limas Segiempat" },
];

const baris = [1, 2, 3];

export default function Peta8Step1MengelompokkanBangunRuang({
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
          TANTANGAN 1
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">
            Mengelompokkan Bangun Ruang
          </h1>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Perhatikan keenam bangun berikut. Kelompokkan bangun-bangun tersebut menggunakan minimal
          tiga dasar klasifikasi yang berbeda. Lengkapilah tabel berikut.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Amati Bangun Ruang
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
            {bangun.map((b) => (
              <div key={b.n} className="flex flex-col items-center gap-2">
                <div className="w-full aspect-square rounded-2xl bg-[#EFF4FF] flex items-center justify-center text-xs text-[#9CA3AF]">
                  Ilustrasi
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-[18px] h-[18px] rounded-full bg-[#2563EB] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                    {b.n}
                  </div>
                  <span className="text-xs font-semibold text-[#374151]">{b.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="border border-[#E5E7EB] rounded-2xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                  <th className="p-3 text-xs font-bold text-[#2563EB] text-center w-12 border-r border-[#E5E7EB]">
                    No.
                  </th>
                  <th className="p-3 text-xs font-bold text-[#2563EB] text-center w-1/3 border-r border-[#E5E7EB]">
                    Dasar Klasifikasi
                  </th>
                  <th className="p-3 text-xs font-bold text-[#2563EB] text-center w-1/3 border-r border-[#E5E7EB]">
                    Kelompok yang Terbentuk
                  </th>
                  <th className="p-3 text-xs font-bold text-[#2563EB] text-center w-1/3">
                    Alasan Matematis
                  </th>
                </tr>
              </thead>
              <tbody>
                {baris.map((n, i) => (
                  <tr
                    key={n}
                    className={i !== baris.length - 1 ? "border-b border-[#E5E7EB]" : ""}
                  >
                    <td className="p-3 border-r border-[#E5E7EB] text-center">
                      <div className="w-6 h-6 rounded-full bg-[#2563EB] text-white text-xs font-bold mx-auto flex items-center justify-center">
                        {n}
                      </div>
                    </td>
                    <td className="p-3 border-r border-[#E5E7EB]">
                      <input
                        type="text"
                        placeholder="Ketik di sini..."
                        className="w-full bg-transparent border-none focus:ring-0 outline-none p-1 text-sm text-[#374151] placeholder:text-[#9CA3AF]"
                      />
                    </td>
                    <td className="p-3 border-r border-[#E5E7EB]">
                      <input
                        type="text"
                        placeholder="Ketik di sini..."
                        className="w-full bg-transparent border-none focus:ring-0 outline-none p-1 text-sm text-[#374151] placeholder:text-[#9CA3AF]"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        type="text"
                        placeholder="Ketik di sini..."
                        className="w-full bg-transparent border-none focus:ring-0 outline-none p-1 text-sm text-[#374151] placeholder:text-[#9CA3AF]"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-start gap-3 mt-4 p-4 bg-[#FEF9E7] border border-[#F5E3A0] rounded-xl">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
              <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
            </svg>
            <p className="m-0 text-sm leading-[1.6] text-[#374151]">
              <span className="font-bold text-[#111827]">Catatan:</span> Pastikan dasar
              klasifikasi yang kamu gunakan diterapkan secara konsisten pada semua bangun.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/7/1`}
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
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </>
  );
}
