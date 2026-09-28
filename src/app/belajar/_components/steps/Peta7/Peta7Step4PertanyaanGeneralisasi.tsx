import BackLink from "@/app/belajar/_components/BackLink";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const pertanyaan = [
  {
    n: 1,
    key: "lebih_dari_satu_kelompok",
    text: "Apakah satu bangun ruang dapat termasuk ke dalam lebih dari satu kelompok? Jelaskan dengan contoh.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
        <path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z" />
      </svg>
    ),
  },
  {
    n: 2,
    key: "pengaruh_dasar_pengelompokan",
    text: "Bagaimana dasar pengelompokan yang digunakan memengaruhi kelompok bangun ruang yang terbentuk?",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
        <rect x="3" y="3" width="12" height="12" rx="1.5" />
        <rect x="9" y="9" width="12" height="12" rx="1.5" />
      </svg>
    ),
  },
  {
    n: 3,
    key: "syarat_klasifikasi_diterima",
    text: "Apa syarat agar suatu cara pengelompokan bangun ruang dapat diterima?",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
        <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
      </svg>
    ),
  },
];

export default function Peta7Step4PertanyaanGeneralisasi({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={11} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6 dari 6 – Discovery Learning
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Diskusikan bersama kelompokmu. Gunakan data dan hasil verifikasi untuk mendukung jawabanmu.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          D
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Pertanyaan Generalisasi
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pertanyaan.map((p) => (
          <div key={p.n} className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 flex flex-col gap-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-[#EFF4FF] text-[#2563EB] flex items-center justify-center font-bold text-xs flex-shrink-0">
                {p.n}
              </div>
              <p className="m-0 text-sm leading-[1.6] text-[#111827] flex-1">{p.text}</p>
              {p.icon}
            </div>
            <textarea
              name={`answers.${p.key}`}
              defaultValue={getValue(p.key)}
              rows={4}
              placeholder="Tulis jawabanmu di sini..."
              required
              className="w-full flex-1 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
