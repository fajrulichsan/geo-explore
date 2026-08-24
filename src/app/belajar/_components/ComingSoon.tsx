import Link from "next/link";

export default function ComingSoon({
  materi,
  peta,
  step,
}: {
  materi: string;
  peta: string;
  step: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-5 py-24">
      <div className="w-16 h-16 rounded-full bg-[#EFF4FF] flex items-center justify-center">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      </div>
      <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
        Materi {materi} · Peta {peta} · Langkah {step}
      </div>
      <h1 className="m-0 text-2xl font-extrabold text-[#111827]">Segera Hadir</h1>
      <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-md">
        Konten untuk langkah ini sedang disiapkan. Silakan kembali ke peta belajar untuk melanjutkan
        aktivitas yang sudah tersedia.
      </p>
      <Link
        href="/peta-belajar"
        className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer"
      >
        Kembali ke Peta Belajar
      </Link>
    </div>
  );
}
