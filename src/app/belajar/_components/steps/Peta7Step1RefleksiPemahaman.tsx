import Link from "next/link";

const checklist = [
  "Saya dapat menjelaskan berbagai cara mengelompokkan bangun ruang sisi datar.",
  "Saya dapat memberikan alasan matematis terhadap hasil klasifikasi yang saya buat.",
  "Saya memahami hubungan antara dasar pengelompokan dengan kelompok bangun ruang yang terbentuk.",
  "Saya dapat menjelaskan syarat agar suatu cara pengelompokan bangun ruang dapat diterima.",
  "Saya menggunakan data hasil pengamatan untuk mendukung alasan saya.",
  "Saya membandingkan strategi saya dengan strategi teman dan memilih alasan yang lebih kuat.",
  "Saya dapat menggunakan cara berpikir ini pada masalah atau situasi yang berbeda.",
];

export default function Peta7Step1RefleksiPemahaman({ materi, peta }: { materi: string; peta: string }) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
          </svg>
          REFLEKSI & EVALUASI
        </div>
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            1
          </div>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Refleksi Pemahaman</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
          Tahap Refleksi – Setelah Belajar
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Centang setiap pernyataan yang sesuai dengan pemahamanmu setelah belajar hari ini.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {checklist.map((text, i) => (
          <label
            key={i}
            className="group flex items-center gap-4 bg-white border border-[#E5E7EB] rounded-[16px] py-4 px-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] cursor-pointer hover:border-[#2563EB] transition-colors"
          >
            <input type="checkbox" className="peer sr-only" />
            <span className="w-6 h-6 rounded-md border-2 border-[#D1D5DB] flex items-center justify-center flex-shrink-0 peer-checked:bg-[#2563EB] peer-checked:border-[#2563EB] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-sm font-semibold text-[#374151] group-hover:text-[#2563EB] transition-colors">
              {text}
            </span>
          </label>
        ))}
      </div>

      <div className="relative bg-[#EFF4FF] border border-[#DBE4FF] rounded-[20px] py-5 px-6 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.08)] flex items-center justify-center flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
            <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
          </svg>
        </div>
        <p className="m-0 text-sm font-semibold text-[#1D4ED8] leading-[1.6]">
          Semakin banyak yang kamu pahami, semakin kuat kemampuan matematikmu!
        </p>
      </div>

      <div className="flex justify-end">
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
