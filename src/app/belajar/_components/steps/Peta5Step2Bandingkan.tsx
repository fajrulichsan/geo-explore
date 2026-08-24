import Link from "next/link";

export default function Peta5Step2Bandingkan({ materi, peta }: { materi: string; peta: string }) {
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
            B
          </div>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Bandingkan dengan Kelompok Lain</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
          Tahap 5 dari 6 – Discovery Learning
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Sekarang saatnya melihat hasil kelompok lain. Bandingkan alasan kalian dan temukan perbedaan atau
          persamaan yang menarik!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-[#111827]">Persamaan</label>
              <p className="m-0 text-xs text-[#6B7280]">
                Apa saja alasan yang sama antara kelompokmu dan kelompok mereka?
              </p>
              <textarea
                rows={3}
                placeholder="Tuliskan persamaan di sini..."
                className="w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-[#111827]">Perbedaan</label>
              <p className="m-0 text-xs text-[#6B7280]">Di mana letak perbedaan alasan kalian?</p>
              <textarea
                rows={3}
                placeholder="Tuliskan perbedaan di sini..."
                className="w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-[#111827]">Bukti yang Lebih Kuat</label>
              <p className="m-0 text-xs text-[#6B7280]">
                Menurutmu, alasan kelompok mana yang buktinya lebih kuat? Jelaskan mengapa.
              </p>
              <textarea
                rows={4}
                placeholder="Jelaskan bukti yang lebih kuat di sini..."
                className="w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            <span className="text-sm font-bold text-[#111827] flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
                <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
              </svg>
              Referensi Diskusi
            </span>
            <div className="rounded-lg bg-[#F9FAFB] aspect-[0.66] flex items-center justify-center text-xs text-[#9CA3AF]">
              Ilustrasi
            </div>
            <p className="m-0 text-xs text-[#6B7280] text-center italic">
              Perhatikan gambar referensi di atas untuk membantu analisis.
            </p>
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
