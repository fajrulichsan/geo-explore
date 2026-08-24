import Link from "next/link";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";

const proses = [
  { n: 1, label: "Tinjau kembali hasil diskusimu." },
  { n: 2, label: "Tentukan informasi apa yang masih perlu dicari." },
  { n: 3, label: "Rumuskan dugaan kelompok yang akan diselidiki." },
  { n: 4, label: "Siapkan eksplorasi pada tahap berikutnya." },
];

export default function Peta2Step5MenyiapkanEksplorasi({ materi, peta }: StepComponentProps) {
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
          TAHAP 2 – AYO BERDISKUSI
        </div>
        <div className="flex items-start gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
          <div>
            <h1 className="m-0 mb-1 text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
            <h2 className="m-0 text-lg font-bold text-[#2563EB]">A. Menyiapkan Eksplorasi</h2>
          </div>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Pada tahap ini, ikuti langkah berikut sebelum kita mengumpulkan informasi pada tahap berikutnya.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {proses.map((p) => (
          <div
            key={p.n}
            className="relative bg-white border border-[#E5E7EB] rounded-[20px] p-6 pt-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col items-center text-center gap-3 hover:-translate-y-1 transition-transform"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm shadow-md">
              {p.n}
            </div>
            <p className="m-0 text-sm font-semibold text-[#374151]">{p.label}</p>
          </div>
        ))}
      </div>

      <div className="relative bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] pt-8 px-7 pb-6 mt-2">
        <div className="absolute -top-[18px] left-6 w-10 h-10 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.08)] flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
            <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
          </svg>
        </div>
        <h3 className="m-0 mb-2 text-xl font-bold text-[#92400E]">Ingat!</h3>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151]">
          Pada tahap ini, kita belum membuktikan dugaan. Kita sedang menentukan informasi yang perlu dicari
          pada tahap berikutnya.
        </p>
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
        <button
          type="submit"
          className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer"
        >
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </form>
  );
}
