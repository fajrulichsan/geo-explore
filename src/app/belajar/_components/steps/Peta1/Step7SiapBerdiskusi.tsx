import Link from "next/link";

export default function Step7SiapBerdiskusi({ materi, peta }: { materi: string; peta: string }) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
            <path d="M4 4h16v16H4z" />
            <path d="M8 9h8M8 13h5" />
          </svg>
          SUBMATERI 1
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
          Tahap 1 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Siap Berdiskusi!
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-5 flex flex-col items-center text-center gap-4">
              <div className="w-40 h-40 rounded-2xl bg-[#EFF4FF] flex items-center justify-center text-xs text-[#9CA3AF]">
                Ilustrasi
              </div>
              <div className="text-sm text-[#4B5563] leading-[1.6] text-left flex flex-col gap-3">
                <p className="m-0">
                  Kamu telah memiliki berbagai dugaan tentang cara mengelompokkan benda dan model
                  bangun ruang di atas.
                </p>
                <p className="m-0 font-bold text-[#2563EB]">
                  Pada tahap berikutnya, diskusikan ide-idemu bersama teman untuk menentukan
                  informasi apa saja yang diperlukan agar pengelompokan menjadi lebih tepat.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#F9FAFB] border border-[#E5E7EB] rounded-[18px] p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="m-0 text-base font-bold text-[#111827]">Catatan Ide Pentingku</h3>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
                  <path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <p className="m-0 mb-4 text-sm text-[#6B7280]">
                Tuliskan satu dugaan atau pertanyaan terpenting yang ingin kamu diskusikan pada
                tahap berikutnya.
              </p>
              <textarea
                rows={4}
                placeholder="Ketik jawabanmu di sini..."
                className="w-full rounded-2xl border border-[#E5E7EB] bg-white p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
              />
            </div>
          </div>
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
          href={`/belajar/${materi}/2/1`}
          className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer"
        >
          Lanjut ke Tahap 2 – Ayo Berdiskusi
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </>
  );
}
