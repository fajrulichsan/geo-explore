import Link from "next/link";

export default function Peta2Step4RumusanMasalah({ materi, peta }: { materi: string; peta: string }) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
          LANGKAH D
        </div>
        <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Rumusan Masalah Kelompok</h1>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Diskusikan dengan teman kelompokmu dan lengkapi rumusan masalah di bawah ini. Pastikan jawaban
          kalian jelas dan spesifik.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:col-span-2 bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="m-0 text-base font-bold text-[#111827]">Rumusan masalah kelompok kami</h3>
              <p className="m-0 text-xs text-[#6B7280]">(pertanyaan yang ingin kami selidiki)</p>
            </div>
          </div>
          <textarea
            rows={4}
            placeholder="Contoh: Bagaimana pengaruh panjang sisi terhadap luas bangun datar ini?"
            className="w-full min-h-[140px] rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
          />
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#D97706] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              2
            </div>
            <h3 className="m-0 text-base font-bold text-[#111827]">Informasi yang perlu diselidiki</h3>
          </div>
          <textarea
            rows={5}
            placeholder="Sebutkan data atau fakta apa saja yang perlu kalian kumpulkan..."
            className="w-full min-h-[160px] flex-1 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
          />
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#059669] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="m-0 text-base font-bold text-[#111827]">Dugaan awal kelompok kami</h3>
              <p className="m-0 text-xs text-[#6B7280]">(jawaban sementara yang akan diuji)</p>
            </div>
          </div>
          <textarea
            rows={5}
            placeholder="Menurut hipotesis kami, jawabannya adalah..."
            className="w-full min-h-[160px] flex-1 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/3`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
        <Link
          href={`/belajar/${materi}/${peta}/5`}
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
