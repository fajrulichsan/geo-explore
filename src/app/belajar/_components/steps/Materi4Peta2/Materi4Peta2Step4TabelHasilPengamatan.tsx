import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const kolom = [
  { key: "segitiga", label: "Limas Segitiga", color: "#16A34A" },
  { key: "segiempat", label: "Limas Segiempat", color: "#EA580C" },
  { key: "segilima", label: "Limas Segilima", color: "#2563EB" },
] as const;

const baris = [
  { key: "bentuk_alas", label: "Bentuk alas" },
  { key: "banyak_sisi_tegak", label: "Banyak sisi tegak" },
  { key: "bentuk_sisi_tegak", label: "Bentuk sisi tegak" },
  { key: "jumlah_sisi", label: "Jumlah seluruh sisi (alas + sisi tegak)" },
  { key: "bagian_luas", label: "Bagian penyusun luas permukaan" },
] as const;

export default async function Materi4Peta2Step4TabelHasilPengamatan({
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
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Ayo Mengamati dan Berpikir
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-5 items-start">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="flex items-center gap-3 px-6 pt-5">
            <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              F
            </div>
            <h2 className="m-0 text-lg font-bold text-[#111827]">Tabel Hasil Pengamatan</h2>
          </div>
          <p className="m-0 px-6 pt-2 text-sm text-[#4B5563]">
            Lengkapilah tabel berikut berdasarkan pengamatanmu.
          </p>

          <div className="px-6 pt-4 pb-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="bg-[#1E3A8A] text-white text-xs font-bold px-3 py-3 rounded-l-lg w-1/5">
                    Yang Diamati
                  </th>
                  {kolom.map((k, i) => (
                    <th
                      key={k.key}
                      className={`text-white text-xs font-bold px-3 py-3 border-l border-white/20 ${
                        i === kolom.length - 1 ? "rounded-r-lg" : ""
                      }`}
                      style={{ backgroundColor: k.color }}
                    >
                      {k.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {baris.map((b) => (
                  <tr key={b.key}>
                    <td className="px-3 py-2.5 text-xs font-bold text-[#111827] align-top">{b.label}</td>
                    {kolom.map((k) => {
                      const name = `${b.key}_${k.key}`;
                      return (
                        <td key={k.key} className="px-2 py-2">
                          <input
                            type="text"
                            name={`answers.${name}`}
                            defaultValue={getValue(name)}
                            placeholder="..."
                            required
                            className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-2.5 py-2 text-xs text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                          />
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              G
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Catatan Penting
            </div>
          </div>
          <label htmlFor="catatan_penting_2" className="text-sm text-[#374151]">
            Tuliskan hal-hal penting yang kamu perhatikan dari bangun dan jaring-jaring limas di
            atas.
          </label>
          <textarea
            id="catatan_penting_2"
            name="answers.catatan_penting_2"
            defaultValue={getValue("catatan_penting_2")}
            rows={8}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
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
