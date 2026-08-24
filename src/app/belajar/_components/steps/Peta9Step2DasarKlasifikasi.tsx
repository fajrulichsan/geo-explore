import Link from "next/link";

const dasar = [
  { label: "Bentuk dan susunan sisi", desc: "Bentuk dan susunan semua sisinya." },
  { label: "Bentuk sisi sebagai alas", desc: "Ditentukan sesuai posisi bangun yang diamati." },
  { label: "Pasangan bidang sisi sejajar", desc: "Pasangan sisi yang sejajar dan kongruen." },
  { label: "Jumlah sisi", desc: "Banyak bidang sisi yang membatasi bangun." },
  { label: "Jumlah rusuk", desc: "Banyak rusuk yang dimiliki bangun." },
  { label: "Jumlah titik sudut", desc: "Banyak titik sudut yang dimiliki bangun." },
  { label: "Sifat-sifat lain", desc: "Sifat atau hal lain yang dapat membantu pengelompokan." },
];

const prismaChildren = ["Kubus", "Balok", "Prisma Segitiga", "Prisma Segiempat", "Prisma Segilima", "..."];
const limasChildren = ["Limas Segitiga", "Limas Segiempat", "Limas Segilima", "..."];

export default function Peta9Step2DasarKlasifikasi({ materi, peta }: { materi: string; peta: string }) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 006.5 22H20V4H6.5A2.5 2.5 0 004 6.5v13z" />
          </svg>
          RANGKUMAN 2
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Dasar Klasifikasi &amp; Peta Konsep</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
          Submateri 1 – Bangun Ruang Sisi Datar
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Dasar Klasifikasi yang Dapat Digunakan
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dasar.map((d, i) => (
            <div
              key={d.label}
              className="bg-white border border-[#E5E7EB] rounded-[16px] p-4 flex flex-col items-center text-center gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <div className="w-9 h-9 rounded-full bg-[#EFF4FF] text-[#2563EB] flex items-center justify-center font-bold text-xs">
                {i + 1}
              </div>
              <h3 className="m-0 text-[13px] font-bold text-[#111827] leading-[1.4]">{d.label}</h3>
              <p className="m-0 text-xs text-[#6B7280] leading-[1.5]">{d.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-xl p-4 flex items-start gap-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
          </svg>
          <p className="m-0 text-sm text-[#92400E] font-semibold">
            Dasar klasifikasi dapat dipilih sesuai tujuan pengelompokan.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Peta Konsep
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-x-auto">
          <div className="min-w-[640px] flex flex-col items-center gap-6">
            <div className="bg-[#1E3A8A] text-white rounded-xl py-3 px-6 text-center">
              <div className="text-sm font-bold tracking-wide">Bangun Ruang Sisi Datar</div>
              <div className="text-[11px] text-[#C7D2FE]">Klasifikasi Bangun Ruang</div>
            </div>

            <div className="w-px h-6 bg-[#D1D5DB]" />

            <div className="w-full grid grid-cols-2 gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white border-2 border-[#FCA5A5] text-[#DC2626] rounded-full py-1.5 px-6 text-sm font-bold">
                  PRISMA
                </div>
                <div className="w-full border-t-2 border-dashed border-[#FCA5A5] pt-4 flex flex-wrap justify-center gap-3">
                  {prismaChildren.map((c) => (
                    <div
                      key={c}
                      className="bg-[#FEF2F2] border border-[#FCA5A5] rounded-lg py-1.5 px-3 text-xs font-semibold text-[#991B1B] text-center"
                    >
                      {c}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="bg-white border-2 border-[#93C5FD] text-[#2563EB] rounded-full py-1.5 px-6 text-sm font-bold">
                  LIMAS
                </div>
                <div className="w-full border-t-2 border-dashed border-[#93C5FD] pt-4 flex flex-wrap justify-center gap-3">
                  {limasChildren.map((c) => (
                    <div
                      key={c}
                      className="bg-[#EFF6FF] border border-[#93C5FD] rounded-lg py-1.5 px-3 text-xs font-semibold text-[#1D4ED8] text-center"
                    >
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#FDF3C7] border border-[#F5E3A0] rounded-xl p-4 flex items-start gap-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#92400E" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
          <p className="m-0 text-sm text-[#92400E]">
            Cara pengelompokan yang kamu pilih pada Tantangan Open-Ended adalah contoh penerapan berbagai dasar
            klasifikasi di atas.
          </p>
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
