import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const baris = [
  { key: "bentuk_bangun", label: "Bentuk bangun" },
  { key: "jumlah_sisi", label: "Jumlah sisi" },
  { key: "ukuran_panjang", label: "Ukuran panjang (sisi, rusuk, tinggi, panjang prisma, apotema, dll.)" },
] as const;

export default async function Materi5Peta2Step6CariPersamaanPerbedaan({
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
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={9} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengamati dan Berpikir</h1>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="flex items-center gap-3 px-6 pt-5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            F
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Cari Persamaan dan Perbedaan</h2>
        </div>
        <p className="m-0 px-6 pt-2 text-sm text-[#4B5563]">
          Lengkapilah tabel berikut berdasarkan hasil pengamatanmu!
        </p>

        <div className="px-6 pt-4 pb-2 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="bg-[#1E3A8A] text-white text-xs font-bold px-3 py-3 rounded-l-lg w-1/3">
                  Aspek yang Diamati
                </th>
                <th className="bg-[#2563EB] text-white text-xs font-bold px-3 py-3 border-l border-white/20">
                  Persamaan (sama)
                </th>
                <th className="bg-[#7C3AED] text-white text-xs font-bold px-3 py-3 border-l border-white/20 rounded-r-lg">
                  Perbedaan (berbeda)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {baris.map((b) => (
                <tr key={b.key}>
                  <td className="px-3 py-2.5 text-xs font-bold text-[#111827] align-top">{b.label}</td>
                  {(["persamaan", "perbedaan"] as const).map((kolom) => {
                    const name = `${b.key}_${kolom}`;
                    return (
                      <td key={kolom} className="px-2 py-2 align-top">
                        <textarea
                          name={`answers.${name}`}
                          defaultValue={getValue(name)}
                          rows={2}
                          placeholder="..."
                          required
                          className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-2.5 py-2 text-xs text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
                        />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mx-6 mb-6 bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="dugaan_perubahan_luas" className="text-sm font-bold text-[#111827]">
              Dugaan perubahan luas permukaan (k = 2)
            </label>
            <input
              id="dugaan_perubahan_luas"
              type="text"
              name="answers.dugaan_perubahan_luas"
              defaultValue={getValue("dugaan_perubahan_luas")}
              placeholder="menurutmu luas permukaan menjadi ... kali luas permukaan semula"
              required
              className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="alasan_dugaan_perubahan" className="text-sm font-bold text-[#111827]">
              Alasan dugaan (bukti pengamatan)
            </label>
            <textarea
              id="alasan_dugaan_perubahan"
              name="answers.alasan_dugaan_perubahan"
              defaultValue={getValue("alasan_dugaan_perubahan")}
              rows={2}
              placeholder="Jawabanmu..."
              required
              className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </div>
        </div>

        <div className="mx-6 mb-6 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl py-3 px-4 flex items-center gap-2.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.6" className="flex-shrink-0">
            <path d="M5 13l4 4L19 7" />
          </svg>
          <p className="m-0 text-xs font-semibold text-[#166534]">
            Tips: Sebelum ke tahap berikutnya, pastikan kamu telah melengkapi tabel dengan
            pengamatanmu sendiri.
          </p>
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
