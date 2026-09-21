import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const baris = [
  { key: "alas", label: "Alas", sub: "" },
  { key: "tegak", label: "Sisi Tegak", sub: "(Semua sisi)" },
] as const;

const tips = [
  "Pastikan satuan luas yang digunakan sama (misal cm²).",
  "Hitung semua sisi tegak yang berbeda bentuk atau ukurannya.",
  "Kolom “Luas Tiap Sisi” diisi untuk setiap tipe sisi yang dihitung. Jika semua sisi tegak sama, cukup isi satu nilai saja.",
];

const inputClass =
  "w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors";

export default async function Materi4Peta5Step2HitungLuasSisi({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold w-fit">
          Submateri 4 &middot; Tahap 4 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          B
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-[#16A34A]">Hitung Luas Setiap Sisi</span>
          <span className="text-xs text-[#6B7280]">Hitung luas alas dan setiap sisi tegak, lalu isikan hasilnya.</span>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 sm:p-6 overflow-x-auto">
        <table className="w-full min-w-[620px] border-separate border-spacing-2">
          <thead>
            <tr className="text-xs font-bold text-white">
              <th className="bg-[#14532D] rounded-xl p-3 text-left">Bagian</th>
              <th className="bg-[#14532D] rounded-xl p-3">Banyak (n)</th>
              <th className="bg-[#14532D] rounded-xl p-3">Luas Tiap Sisi (cm²)</th>
              <th className="bg-[#14532D] rounded-xl p-3">Luas Keseluruhan (cm²)</th>
            </tr>
          </thead>
          <tbody>
            {baris.map((b) => (
              <tr key={b.key}>
                <td className="p-2 align-middle">
                  <span className="block text-sm font-bold text-[#111827]">{b.label}</span>
                  {b.sub && <span className="block text-xs text-[#6B7280]">{b.sub}</span>}
                </td>
                {(["banyak", "luas_tiap", "luas_total"] as const).map((kolom) => (
                  <td key={kolom} className="align-middle">
                    <input
                      name={`answers.${b.key}_${kolom}`}
                      defaultValue={getValue(`${b.key}_${kolom}`)}
                      required
                      inputMode="decimal"
                      aria-label={`${b.label} ${kolom.replace("_", " ")}`}
                      className={inputClass}
                    />
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td colSpan={3} className="p-2 text-sm font-bold text-[#14532D] bg-[#F0FDF4] rounded-xl">
                Total (Luas Permukaan)
              </td>
              <td className="align-middle">
                <input
                  name="answers.total_luas_permukaan"
                  defaultValue={getValue("total_luas_permukaan")}
                  required
                  inputMode="decimal"
                  aria-label="Total luas permukaan"
                  className={inputClass}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-5 sm:p-6 flex flex-col gap-3 focus-within:border-[#16A34A] transition-colors">
        <label htmlFor="cara_sama" className="flex items-start gap-3 text-sm font-bold text-[#14532D] leading-[1.5]">
          <span className="w-6 h-6 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-xs flex-shrink-0">
            ?
          </span>
          Apakah luas alas dan luas sisi tegak dihitung dengan cara yang sama? Mengapa?
        </label>
        <textarea
          id="cara_sama"
          name="answers.cara_sama"
          defaultValue={getValue("cara_sama")}
          rows={3}
          placeholder="Tulis jawabanmu di sini..."
          required
          className="w-full rounded-2xl border border-[#BBF7D0] bg-white p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors resize-y"
        />
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 flex flex-col gap-2">
        <span className="text-base font-extrabold text-[#D97706]">Tips</span>
        <ul className="m-0 pl-5 flex flex-col gap-1.5 text-sm text-[#78350F] leading-[1.6]">
          {tips.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
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
