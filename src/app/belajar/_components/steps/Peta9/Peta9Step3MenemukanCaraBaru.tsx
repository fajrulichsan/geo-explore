import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const bekal = [
  "Sudah menggunakan lebih dari satu dasar klasifikasi.",
  "Sudah memberikan alasan matematis.",
  "Sudah menerapkan dasar klasifikasi secara konsisten.",
  "Siap membandingkan strategi pada halaman berikutnya.",
];

export default async function Peta9Step3MenemukanCaraBaru({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={7} />
        <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-4 text-xs font-bold tracking-[0.06em] w-fit">
          SUBMATERI 1 &mdash; BANGUN RUANG SISI DATAR
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Tantangan Open-Ended</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#EA580C] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#EA580C]">
            Tantangan 3 &ndash; Menemukan Cara Baru
          </div>
        </div>

        <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-[20px] p-6 flex flex-col gap-4">
          <p className="m-0 text-sm leading-[1.7] text-[#374151]">
            Buatlah satu dasar klasifikasi baru yang belum kamu gunakan pada Tantangan 1. Kemudian, kelompokkan
            keenam bangun tersebut, tuliskan hasil pengelompokannya, dan jelaskan alasan matematisnya.
          </p>
          <textarea
            name="answers.cara_baru"
            defaultValue={getValue("cara_baru")}
            rows={5}
            placeholder="Dasar klasifikasi baru, kelompok yang terbentuk, dan alasan matematisnya..."
            required
            className="w-full rounded-lg border border-[#FED7AA] bg-white px-4 py-3 text-sm resize-y focus:border-[#EA580C] focus:outline-none transition-colors"
          />
          <div className="flex items-start gap-2.5 bg-white border border-[#FED7AA] rounded-xl px-4 py-3 text-sm font-semibold text-[#9A3412] leading-[1.6]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#EA580C" className="flex-shrink-0 mt-0.5">
              <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l7.1-1.01z" />
            </svg>
            Catatan: Cara klasifikasimu tidak harus sama dengan temanmu, selama logis dan diterapkan secara
            konsisten.
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bekal ke Halaman Berikutnya
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563] leading-[1.7]">Sebelum melanjutkan, periksa kembali dirimu.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {bekal.map((b) => (
            <div key={b} className="bg-[#EFF4FF] border border-[#DBE5FB] rounded-[16px] p-4 flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="text-sm font-semibold text-[#1E3A8A] leading-[1.4]">{b}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
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
