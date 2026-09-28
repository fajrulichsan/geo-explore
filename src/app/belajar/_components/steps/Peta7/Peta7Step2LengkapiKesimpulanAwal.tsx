import BackLink from "@/app/belajar/_components/BackLink";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const pernyataan = [
  {
    n: 1,
    key: "dasar_pengelompokan",
    text: "Bangun ruang sisi datar dapat dikelompokkan berdasarkan ....",
  },
  {
    n: 2,
    key: "syarat_lebih_dari_satu_kelompok",
    text: "Satu bangun ruang dapat termasuk dalam lebih dari satu kelompok apabila ....",
  },
  {
    n: 3,
    key: "syarat_klasifikasi_diterima",
    text: "Suatu cara pengelompokan dapat diterima apabila menggunakan dasar yang ...., diterapkan secara ...., dan didukung oleh alasan matematis yang ....",
  },
];

export default function Peta7Step2LengkapiKesimpulanAwal({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={11} />
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
          Lengkapilah pernyataan berikut berdasarkan hasil pengamatan, pengolahan data, dan verifikasi
          yang telah kamu lakukan.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          B
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Lengkapi Kesimpulan Awalmu
        </div>
      </div>

      <div className="flex flex-col gap-5">
        {pernyataan.map((p) => (
          <div key={p.n} className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 flex flex-col gap-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#EFF4FF] text-[#2563EB] flex items-center justify-center font-bold text-sm flex-shrink-0">
                {p.n}
              </div>
              <p className="m-0 text-[15px] leading-[1.6] text-[#111827] font-medium">{p.text}</p>
            </div>
            <textarea
              name={`answers.${p.key}`}
              defaultValue={getValue(p.key)}
              rows={3}
              placeholder="Lengkapi pernyataan di sini..."
              required
              className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
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
