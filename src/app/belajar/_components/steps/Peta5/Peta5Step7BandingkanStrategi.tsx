import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const rows = [
  { key: "dasar", label: "Dasar pengelompokan" },
  { key: "kelompok_terbentuk", label: "Kelompok yang terbentuk" },
  { key: "kelebihan", label: "Kelebihan cara ini" },
  { key: "perlu_diperbaiki", label: "Hal yang masih perlu diperbaiki" },
];

const cara = [
  { key: "cara1", label: "Cara 1", warna: "bg-[#15803D]" },
  { key: "cara2", label: "Cara 2", warna: "bg-[#1D4ED8]" },
];

export default async function Peta5Step7BandingkanStrategi({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="7" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={7} totalSteps={9} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" className="flex-shrink-0">
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="M15.5 15.5L21 21" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            H
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bandingkan Strategimu
          </div>
        </div>
        <p className="m-0 text-sm font-semibold text-[#374151]">
          Bandingkan dua cara klasifikasimu. Cara mana yang menurutmu paling sistematis dan efektif? Mengapa?
        </p>

        <div className="overflow-x-auto rounded-[20px] border border-[#E5E7EB] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <table className="w-full min-w-[560px] border-collapse">
            <thead>
              <tr className="bg-[#1E3A8A] text-white">
                <th className="text-left text-sm font-bold py-3 px-4 w-[200px]">Hal yang Dibandingkan</th>
                {cara.map((c) => (
                  <th key={c.key} className={`text-sm font-bold py-3 px-2 ${c.warna}`}>{c.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.key} className="border-t border-[#E5E7EB] align-top">
                  <th scope="row" className="text-left text-[13px] font-bold text-[#1E3A8A] py-3 px-4">{r.label}</th>
                  {cara.map((c) => (
                    <td key={c.key} className="py-2 px-2">
                      <textarea
                        name={`answers.h_${r.key}_${c.key}`}
                        defaultValue={getValue(`h_${r.key}_${c.key}`)}
                        rows={2}
                        required
                        aria-label={`${r.label} ${c.label}`}
                        placeholder="Ketik di sini..."
                        className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-[#EFF4FF] border border-[#DBE5FB] rounded-[20px] p-5 flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="flex-shrink-0">
              <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
              <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <label htmlFor="h_cara_terbaik" className="text-sm leading-[1.6] font-bold text-[#1E3A8A] cursor-pointer">
              Menurutmu, cara mana yang lebih sesuai untuk tujuan pengelompokanmu? Jelaskan berdasarkan data.
            </label>
          </div>
          <textarea
            id="h_cara_terbaik"
            name="answers.h_cara_terbaik"
            defaultValue={getValue("h_cara_terbaik")}
            rows={4}
            placeholder="Ketik jawabanmu di sini..."
            required
            className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/6`}
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
