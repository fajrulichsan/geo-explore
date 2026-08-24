import Link from "next/link";

export default function Peta9Step5BekalMotivasi({ materi, peta }: { materi: string; peta: string }) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 006.5 22H20V4H6.5A2.5 2.5 0 004 6.5v13z" />
          </svg>
          RANGKUMAN 5
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M12 2l2.6 6.9L22 10l-5.7 4.9L18 22l-6-3.6L6 22l1.7-7.1L2 10l7.4-1.1L12 2z" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Bekal &amp; Pesan Motivasi</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
          Submateri 1 – Bangun Ruang Sisi Datar
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 flex flex-col gap-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              E
            </div>
            <h2 className="m-0 text-base font-bold text-[#2563EB]">Bekal untuk Submateri Berikutnya</h2>
          </div>
          <div className="bg-[#EFF4FF] rounded-xl p-5 flex flex-col gap-3">
            <p className="m-0 text-sm leading-[1.6] text-[#374151]">
              <span className="text-[#2563EB] font-bold block mb-1">
                Setelah memahami cara mengklasifikasikan bangun ruang sisi datar,
              </span>
              kamu siap mempelajari jaring-jaring bangun ruang sisi datar.
            </p>
            <div className="w-10 h-0.5 bg-[#C7D2FE] rounded-full" />
            <p className="m-0 text-sm leading-[1.6] text-[#374151]">
              Pada submateri berikutnya, kamu akan menyelidiki bagaimana bangun ruang dapat dibentuk dari susunan
              sisi-sisinya.
            </p>
          </div>
        </div>

        <div className="bg-[#FEE2E2] border border-[#FECACA] rounded-[20px] p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              F
            </div>
            <h2 className="m-0 text-base font-bold text-[#B91C1C]">Pesan Motivasi</h2>
          </div>
          <div className="bg-white/80 border border-white rounded-xl p-4 flex flex-col gap-3">
            <p className="m-0 text-sm leading-[1.6] text-[#374151]">
              <span className="font-bold text-[#B91C1C]">Selamat!</span> Kamu telah menemukan sendiri bahwa satu
              konsep matematika dapat dipahami melalui proses mengamati, berdiskusi, mencoba berbagai strategi,
              memberikan alasan, dan menarik kesimpulan.
            </p>
            <p className="m-0 pl-3 border-l-4 border-[#FCA5A5] text-sm leading-[1.6] text-[#374151]">
              Teruslah berpikir kritis, terbuka terhadap berbagai strategi, dan percaya diri dalam memberikan alasan
              matematis.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[#2563EB] font-extrabold text-lg">
            Kamu hebat!
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#D97706">
              <path d="M12 2l2.6 6.9L22 10l-5.7 4.9L18 22l-6-3.6L6 22l1.7-7.1L2 10l7.4-1.1L12 2z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/4`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
        <Link
          href="/peta-belajar"
          className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer"
        >
          Lanjut ke Submateri 2
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </>
  );
}
