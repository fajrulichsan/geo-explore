import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const kolom = [
  { name: "kriteria", label: "Dasar Pengelompokan (Kriteria)", placeholder: "Contoh: Bentuk alas..." },
  { name: "bangun", label: "Bangun yang Termasuk (Nama bangun ruang)", placeholder: "Contoh: Kubus, Balok..." },
  { name: "alasan", label: "Alasan Awal Kelompok (Mengapa dikelompokkan bersama?)", placeholder: "Tulis alasanmu..." },
];
const baris = [1, 2];

export default async function Peta3Step6DugaanKelompokku({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={8} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="flex-shrink-0">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
            <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Dugaan Kelompokku
          </div>
        </div>
        <p className="m-0 text-sm font-semibold text-[#374151]">
          Berdasarkan rumusan masalah pada halaman sebelumnya, tuliskan dua dugaan pengelompokan yang disepakati kelompokmu.
        </p>

        <div className="hidden md:grid grid-cols-[56px_1fr_1fr_1fr] rounded-t-2xl bg-[#1E3A8A] text-white text-sm font-bold text-center">
          <div className="py-3">No.</div>
          {kolom.map((k) => (
            <div key={k.name} className="py-3 px-3 border-l border-white/20">
              {k.label}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 md:gap-0 md:border md:border-[#E5E7EB] md:rounded-b-2xl md:overflow-hidden">
          {baris.map((n) => (
            <div
              key={n}
              className="grid grid-cols-1 md:grid-cols-[56px_1fr_1fr_1fr] bg-white border border-[#E5E7EB] md:border-0 md:border-b md:last:border-b-0 rounded-[20px] md:rounded-none p-4 md:p-0 gap-3 md:gap-0"
            >
              <div className="flex md:items-center md:justify-center">
                <span className="w-[34px] h-[34px] rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-[15px]">
                  {n}
                </span>
              </div>
              {kolom.map((k) => (
                <div key={k.name} className="md:p-3 md:border-l md:border-[#E5E7EB] flex flex-col gap-1.5">
                  <label htmlFor={`${k.name}_${n}`} className="md:hidden text-xs font-bold text-[#1E3A8A]">
                    {k.label}
                  </label>
                  <textarea
                    id={`${k.name}_${n}`}
                    name={`answers.dugaan_${k.name}_${n}`}
                    defaultValue={getValue(`dugaan_${k.name}_${n}`)}
                    rows={3}
                    placeholder={k.placeholder}
                    required
                    className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
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
