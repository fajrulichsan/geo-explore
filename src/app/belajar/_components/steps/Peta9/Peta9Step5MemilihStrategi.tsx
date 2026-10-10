import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

export default async function Peta9Step5MemilihStrategi({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={7} />
        <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-4 text-xs font-bold tracking-[0.06em] w-fit">
          SUBMATERI 1 &mdash; BANGUN RUANG SISI DATAR
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Tantangan Open-Ended</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              F
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#16A34A]">
              Tantangan 5. Memilih Strategi yang Paling Sesuai
            </div>
          </div>
          <p className="m-0 text-sm text-[#4B5563] leading-[1.7]">
            Menurutmu, cara klasifikasi manakah yang paling sesuai untuk tujuan pengelompokanmu? Tuliskan
            strategi yang kamu pilih, alasan matematis, dan bukti yang mendukung.
          </p>
          <div className="bg-white border border-[#BBF7D0] rounded-[20px] p-5 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="strategi_pilih" className="flex items-center gap-2 text-sm font-bold text-[#111827]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.2" className="flex-shrink-0">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="12" cy="12" r="1.2" />
                </svg>
                Strategi yang saya pilih:
              </label>
              <textarea
                id="strategi_pilih"
                name="answers.strategi_pilih"
                defaultValue={getValue("strategi_pilih")}
                rows={2}
                placeholder="Tuliskan strategi yang kamu pilih..."
                required
                className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm resize-y focus:border-[#16A34A] focus:outline-none focus:bg-white transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="strategi_alasan" className="flex items-center gap-2 text-sm font-bold text-[#111827]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0">
                  <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
                </svg>
                Alasan matematis:
              </label>
              <textarea
                id="strategi_alasan"
                name="answers.strategi_alasan"
                defaultValue={getValue("strategi_alasan")}
                rows={2}
                placeholder="Jelaskan alasan matematisnya..."
                required
                className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm resize-y focus:border-[#16A34A] focus:outline-none focus:bg-white transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="strategi_bukti" className="flex items-center gap-2 text-sm font-bold text-[#111827]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="flex-shrink-0">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                Bukti yang mendukung:
              </label>
              <textarea
                id="strategi_bukti"
                name="answers.strategi_bukti"
                defaultValue={getValue("strategi_bukti")}
                rows={2}
                placeholder="Tuliskan bukti yang mendukung pilihanmu..."
                required
                className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm resize-y focus:border-[#16A34A] focus:outline-none focus:bg-white transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              G
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#7C3AED]">
              Tantangan 5. Menemukan Prinsip Umum
            </div>
          </div>
          <p className="m-0 text-sm text-[#4B5563] leading-[1.7]">
            Jawablah pertanyaan berikut berdasarkan seluruh jawabanmu.
          </p>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 flex flex-col gap-4">
            {[
              { n: 1, key: "prinsip_syarat", label: "Apa syarat agar suatu cara klasifikasi dapat diterima?" },
              { n: 2, key: "prinsip_lebih_satu", label: "Mengapa satu bangun ruang dapat berada pada lebih dari satu kelompok?" },
              { n: 3, key: "prinsip_hubungan", label: "Bagaimana hubungan antara dasar klasifikasi dengan kelompok yang terbentuk?" },
            ].map((q) => (
              <div key={q.key} className="flex flex-col gap-1.5">
                <label htmlFor={q.key} className="flex items-start gap-2.5 text-sm font-bold text-[#111827] leading-[1.5]">
                  <span className="w-6 h-6 rounded-full bg-[#7C3AED] text-white flex items-center justify-center text-xs flex-shrink-0">
                    {q.n}
                  </span>
                  <span>{q.label}</span>
                </label>
                <textarea
                  id={q.key}
                  name={`answers.${q.key}`}
                  defaultValue={getValue(q.key)}
                  rows={2}
                  placeholder="Ketik jawabanmu di sini..."
                  required
                  className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm resize-y focus:border-[#7C3AED] focus:outline-none focus:bg-white transition-colors"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/4`} />
        <NextStepButton />
      </div>
    </form>
  );
}
