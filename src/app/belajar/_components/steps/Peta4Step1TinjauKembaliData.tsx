import Link from "next/link";

const bangunList = [
  { n: 1, label: "Kubus" },
  { n: 2, label: "Balok" },
  { n: 3, label: "Prisma Segitiga" },
  { n: 4, label: "Limas Segiempat" },
  { n: 5, label: "Limas Segitiga" },
];

export default function Peta4Step1TinjauKembaliData({ materi, peta }: { materi: string; peta: string }) {
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
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Tinjau Kembali Data Eksplorasi</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
          Tahap 4 dari 6 – Discovery Learning
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Tampilkan kembali data setiap bangun untuk memastikan informasimu sudah lengkap sebelum diolah
          lebih lanjut.
        </p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
        <label className="text-sm font-bold text-[#111827]">Pilih Bangun:</label>
        <select
          defaultValue=""
          className="w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors"
        >
          <option value="">-- Pilih Bangun --</option>
          <option value="kubus">Kubus</option>
          <option value="balok">Balok</option>
          <option value="prisma-segitiga">Prisma Segitiga</option>
          <option value="limas-segiempat">Limas Segiempat</option>
          <option value="limas-segitiga">Limas Segitiga</option>
        </select>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {bangunList.map((b) => (
            <button
              key={b.n}
              type="button"
              className="flex flex-col items-center justify-center p-4 bg-white border border-[#E5E7EB] rounded-2xl hover:border-[#2563EB] transition-colors gap-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F9FAFB] flex items-center justify-center text-xs text-[#9CA3AF]">
                {b.n}
              </div>
              <span className="text-sm font-semibold text-[#111827] text-center">{b.label}</span>
            </button>
          ))}
        </div>

        <div className="p-8 border-2 border-dashed border-[#E5E7EB] rounded-2xl flex flex-col items-center justify-center text-center gap-2 min-h-[160px]">
          <span className="text-sm text-[#6B7280]">
            Pilih bangun dari dropdown atau klik ikon di atas untuk melihat data eksplorasi.
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/3/10`}
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
