import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const pernyataan = [
  { key: "satu_jaring_saja", label: "Satu bangun ruang hanya mempunyai satu jaring-jaring." },
  { key: "lebih_dari_satu", label: "Satu bangun ruang dapat mempunyai lebih dari satu jaring-jaring." },
  { key: "semua_bisa_dilipat", label: "Semua susunan bidang datar dapat dilipat menjadi bangun ruang." },
  { key: "posisi_menentukan", label: "Posisi antar sisi menentukan keberhasilan lipatan." },
  { key: "tanpa_tumpuk", label: "Jaring-jaring harus dapat dilipat tanpa ada sisi bertumpuk." },
  { key: "seluruh_sisi", label: "Jaring-jaring harus memiliki seluruh sisi bangun ruang." },
];

export default function Materi2Peta7Step2PernyataanUmum({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const checked = (key: string) => answers[key] === "on" || answers[key] === true;

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={5} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan (Generalisasi)</h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-[#DDD6FE] rounded-[20px] p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#4338CA] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">C</div>
            <h2 className="m-0 text-lg font-bold text-[#3730A3]">Menentukan Pernyataan Umum</h2>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">
            Berilah tanda centang (✓) pada pernyataan yang benar menurut hasil belajarmu. Siapkan alasan untuk pilihanmu.
          </p>
          <div className="flex flex-col gap-2">
            {pernyataan.map((p) => (
              <label key={p.key} className="flex items-start gap-3 bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 cursor-pointer">
                <input
                  type="checkbox"
                  name={`answers.${p.key}`}
                  defaultChecked={checked(p.key)}
                  className="mt-0.5 w-4 h-4 accent-[#4338CA]"
                />
                <span className="text-sm text-[#374151]">{p.label}</span>
              </label>
            ))}
          </div>
          <label className="flex flex-col gap-2 border-t border-dashed border-[#93C5FD] pt-4">
            <span className="text-sm font-semibold text-[#1F2937]">Alasan pilihan pernyataan di atas:</span>
            <textarea
              name="answers.alasan_pernyataan"
              defaultValue={getValue("alasan_pernyataan")}
              required
              rows={3}
              className="w-full rounded-xl border border-[#E5E7EB] px-3.5 py-2.5 text-sm text-[#374151] focus:border-[#4338CA] focus:outline-none resize-y"
            />
          </label>
        </div>

        <div className="bg-white border border-[#FDE68A] rounded-[20px] p-6 flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-[#D97706] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">D</div>
            <div className="flex-1 flex flex-col gap-1">
              <h2 className="m-0 text-lg font-bold text-[#92400E]">Kesimpulan Konsep</h2>
              <p className="m-0 text-sm text-[#4B5563]">Lengkapilah kesimpulan berikut.</p>
            </div>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#FDE68A" stroke="#D97706" strokeWidth="1.6" className="flex-shrink-0" aria-hidden="true">
              <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z" />
            </svg>
          </div>
          <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-5 flex flex-col gap-3">
            <p className="m-0 text-base font-extrabold text-[#B45309]">Kesimpulan</p>
            <p className="m-0 text-sm leading-[1.6] text-[#92400E]">
              Suatu susunan bidang datar merupakan jaring-jaring bangun ruang yang valid apabila ...
            </p>
            <textarea
              name="answers.kesimpulan_konsep"
              defaultValue={getValue("kesimpulan_konsep")}
              required
              rows={5}
              className="w-full rounded-xl border border-[#F5E3A0] bg-white px-3.5 py-2.5 text-sm text-[#374151] focus:border-[#D97706] focus:outline-none resize-y"
            />
          </div>
        </div>
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
