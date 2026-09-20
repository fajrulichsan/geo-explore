import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";

export default async function Materi7Peta2Step4HasilPengamatan({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";


  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 1 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Hasil Pengamatan
          </div>
        </div>

        <p className="m-0 text-sm text-[#4B5563]">Lengkapilah tabel berikut berdasarkan hasil pengamatanmu.</p>
        <div className="bg-white border border-[#DBE7FF] rounded-[20px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 bg-[#1E3A8A] text-white text-sm font-bold">
            <div className="px-5 py-3">Yang Diamati</div>
            <div className="px-5 py-3 hidden sm:block">Hasil Pengamatanmu</div>
          </div>
          {[
            { key: "luas_alas_limas", label: "Luas alas setiap limas" },
            { key: "tinggi_limas", label: "Tinggi setiap limas" },
            { key: "luas_alas_prisma", label: "Luas alas prisma pembanding" },
            { key: "tinggi_prisma", label: "Tinggi prisma pembanding" },
            { key: "banyak_penuangan", label: "Banyak penuangan isi satu limas yang diperlukan agar prisma penuh" },
          ].map((r) => (
            <div key={r.key} className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-0 sm:items-center border-t border-[#E5E7EB] first:border-t-0">
              <label htmlFor={r.key} className="px-5 pt-3 sm:py-3 text-sm font-semibold text-[#111827] leading-[1.5]">
                {r.label}
              </label>
              <div className="px-5 pb-3 sm:py-3">
                <input id={r.key} name={`answers.${r.key}`} defaultValue={getValue(r.key)} placeholder="Ketik jawaban di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 sm:p-6 flex flex-col gap-3">
        <h3 className="m-0 text-base font-extrabold text-[#B45309]">Fokuskan perhatianmu!</h3>
        <ul className="m-0 p-0 list-none flex flex-col gap-2">
          {[
            "Pastikan limas dan prisma memiliki luas alas yang sama.",
            "Pastikan limas dan prisma memiliki tinggi yang sama.",
            "Perhatikan perubahan tinggi isi prisma setiap kali satu limas dituangkan.",
            "Catat berapa kali penuangan isi limas diperlukan agar prisma penuh.",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2.5 text-sm text-[#374151] leading-[1.5]">
              <span className="w-5 h-5 rounded-full bg-[#16A34A] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
