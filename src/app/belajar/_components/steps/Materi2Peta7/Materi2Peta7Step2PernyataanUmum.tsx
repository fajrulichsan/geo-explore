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

export default function Materi2Peta7Step2PernyataanUmum({
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
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={5} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Ayo Menyimpulkan (Generalisasi)
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              C
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Menentukan Pernyataan Umum
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex-1 flex flex-col gap-4">
            <p className="m-0 text-sm text-[#4B5563]">
              Berilah tanda centang (✓) pada pernyataan yang benar menurut hasil belajarmu.
              Siapkan alasan untuk pilihanmu.
            </p>
            <div className="flex flex-col gap-2.5">
              {pernyataan.map((p) => (
                <label
                  key={p.key}
                  className="flex items-start gap-2.5 text-sm font-semibold text-[#374151] cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name={`answers.${p.key}`}
                    defaultChecked={getValue(p.key) === "true"}
                    value="true"
                    data-require-group="pernyataan_umum"
                    className="mt-1 w-4 h-4 rounded border-[#D1D5DB] text-[#2563EB] focus:ring-[#2563EB] flex-shrink-0"
                  />
                  {p.label}
                </label>
              ))}
            </div>
            <div className="flex flex-col gap-1.5 pt-2 border-t border-dashed border-[#E5E7EB]">
              <label htmlFor="alasan_pernyataan" className="text-sm font-semibold text-[#111827]">
                Alasan pilihan pernyataan di atas:
              </label>
              <textarea
                id="alasan_pernyataan"
                name="answers.alasan_pernyataan"
                defaultValue={getValue("alasan_pernyataan")}
                rows={3}
                required
                placeholder="Jelaskan alasanmu..."
                className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              D
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Kesimpulan Konsep
            </div>
          </div>
          <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-6 flex-1 flex flex-col gap-3">
            <p className="m-0 text-sm text-[#374151]">Lengkapilah kesimpulan berikut.</p>
            <div className="bg-white rounded-2xl border border-[#F5E3A0] p-4 flex flex-col gap-2">
              <p className="m-0 text-sm font-bold text-[#D97706]">Kesimpulan</p>
              <p className="m-0 text-sm text-[#374151] leading-[1.6]">
                Suatu susunan bidang datar merupakan jaring-jaring bangun ruang yang valid apabila
                ...
              </p>
              <textarea
                name="answers.kesimpulan_konsep"
                defaultValue={getValue("kesimpulan_konsep")}
                rows={5}
                required
                placeholder="Tuliskan kesimpulanmu..."
                className="w-full rounded-xl border border-[#F5E3A0] bg-[#FFFBEB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#B45309] focus:border-[#D97706] focus:outline-none transition-colors resize-none"
              />
            </div>
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
