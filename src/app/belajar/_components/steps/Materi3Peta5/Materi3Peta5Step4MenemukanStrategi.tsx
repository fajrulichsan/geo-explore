import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const cara = [
  { key: "cara1", label: "Cara 1 – Penjumlahan luas seluruh sisi" },
  { key: "cara2", label: "Cara 2 – Kelompok sisi yang sama bentuk dan ukurannya" },
];

const rencana = ["Susun strategi.", "Bandingkan cara.", "Buat rumus sementara.", "Refleksikan hasil kelompokmu."];

export default async function Materi3Peta5Step4MenemukanStrategi({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Ayo Mengolah Informasi
        </h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Temukan Pola Luas Permukaan</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-6">
        <div className="flex flex-col gap-2">
          <p className="m-0 text-base font-bold text-[#1E3A8A]">Ayo lanjutkan pengolahan informasimu!</p>
          <p className="m-0 text-sm leading-[1.7] text-[#374151]">
            Sekarang gunakan hasil pengamatan dan pola yang telah kamu temukan untuk menyusun strategi
            serta membuat rumus sementara sebelum memeriksanya pada tahap berikutnya.
          </p>
        </div>
        <ul className="m-0 p-0 list-none flex flex-col gap-2 sm:border-l sm:border-dashed sm:border-[#93C5FD] sm:pl-5 justify-center">
          {rencana.map((r) => (
            <li key={r} className="flex items-center gap-2 text-sm font-semibold text-[#111827]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                <circle cx="12" cy="12" r="10" fill="#16A34A" />
                <path d="M7.5 12.5l3 3 6-6.5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {r}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#14532D] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            D
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Menemukan Strategi</h2>
        </div>
        <div className="flex flex-col gap-1">
          <p className="m-0 text-sm font-bold text-[#111827]">Tuliskan dua cara menentukan luas permukaan.</p>
          <p className="m-0 text-xs italic text-[#6B7280]">
            Misalnya: berdasarkan penjumlahan luas seluruh sisi atau berdasarkan kelompok sisi yang sama.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {cara.map((c) => (
            <div key={c.key} className="flex flex-col gap-2 bg-[#EFFDF4] border border-[#BBF0D3] rounded-2xl p-4">
              <label htmlFor={c.key} className="text-sm font-bold text-[#14532D]">
                {c.label}
              </label>
              <textarea
                id={c.key}
                name={`answers.${c.key}`}
                defaultValue={getValue(c.key)}
                rows={4}
                required
                placeholder="Jelaskan caramu..."
                className="w-full rounded-xl border border-[#BBF0D3] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors resize-y"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-4">
          <p className="m-0 flex items-center gap-2 text-sm font-bold text-[#111827]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#14532D" strokeWidth="2">
              <path d="M12 3v18M6 21h12M5 7h14M5 7l-3 7a3 3 0 006 0zM19 7l-3 7a3 3 0 006 0z" />
            </svg>
            Bandingkan
          </p>
          <label htmlFor="strategi_efisien" className="text-sm text-[#374151]">
            Strategi mana yang paling efisien menurut kelompokmu? Jelaskan alasannya.
          </label>
          <textarea
            id="strategi_efisien"
            name="answers.strategi_efisien"
            defaultValue={getValue("strategi_efisien")}
            rows={3}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors resize-y"
          />
        </div>
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
