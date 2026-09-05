import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const bagian = [
  { key: "alas", label: "Alas" },
  { key: "sisi_tegak", label: "Sisi Tegak (Semua sisi)" },
];

export default async function Materi4Peta5Step2HitungLuasSisi({
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
        <StepHeader materi={materi} currentStep={2} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Ayo Mengolah Informasi
        </h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">
          Hitung luas alas dan setiap sisi tegak, lalu isikan hasilnya.
        </p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="flex items-center gap-3 px-6 pt-5">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            B
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Hitung Luas Setiap Sisi</h2>
        </div>
        <p className="m-0 px-6 pt-2 text-sm text-[#4B5563]">Lengkapilah tabel berikut.</p>

        <div className="px-6 pt-4 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[560px]">
            <thead>
              <tr>
                <th className="bg-[#2563EB] text-white text-sm font-bold px-4 py-3 rounded-l-lg w-1/4">
                  Bagian
                </th>
                <th className="bg-[#2563EB] text-white text-sm font-bold px-4 py-3 border-l border-white/20 w-28">
                  Banyak (n)
                </th>
                <th className="bg-[#2563EB] text-white text-sm font-bold px-4 py-3 border-l border-white/20">
                  Luas Tiap Sisi (cm&sup2;)
                </th>
                <th className="bg-[#2563EB] text-white text-sm font-bold px-4 py-3 border-l border-white/20 rounded-r-lg">
                  Luas Keseluruhan (cm&sup2;)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {bagian.map((b) => (
                <tr key={b.key}>
                  <td className="px-4 py-3 text-sm font-bold text-[#111827] align-top">{b.label}</td>
                  <td className="px-4 py-3">
                    <input
                      type="number"
                      name={`answers.banyak_${b.key}`}
                      defaultValue={getValue(`banyak_${b.key}`)}
                      placeholder="0"
                      required
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      name={`answers.luas_tiap_sisi_${b.key}`}
                      defaultValue={getValue(`luas_tiap_sisi_${b.key}`)}
                      placeholder="..."
                      required
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      name={`answers.luas_keseluruhan_${b.key}`}
                      defaultValue={getValue(`luas_keseluruhan_${b.key}`)}
                      placeholder="..."
                      required
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                    />
                  </td>
                </tr>
              ))}
              <tr className="bg-[#EFFDF4]">
                <td colSpan={3} className="px-4 py-3 text-sm font-bold text-[#111827] text-right">
                  Total (Luas Permukaan)
                </td>
                <td className="px-4 py-3">
                  <input
                    type="text"
                    name="answers.total_luas_permukaan"
                    defaultValue={getValue("total_luas_permukaan")}
                    placeholder="..."
                    required
                    className="w-full rounded-lg border border-[#BBF0D3] bg-white px-3 py-2 text-sm font-bold text-[#16A34A] placeholder:text-[#9CA3AF] placeholder:font-normal focus:border-[#16A34A] focus:outline-none transition-colors"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="m-6 mt-5 bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-4 flex flex-col gap-2">
          <p className="m-0 flex items-center gap-2 text-sm font-bold text-[#2563EB]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v5M12 16.5v.01" />
            </svg>
            Pertanyaan
          </p>
          <label htmlFor="cara_hitung_sama" className="text-sm text-[#374151]">
            Apakah luas alas dan luas sisi tegak dihitung dengan cara yang sama? Mengapa?
          </label>
          <textarea
            id="cara_hitung_sama"
            name="answers.cara_hitung_sama"
            defaultValue={getValue("cara_hitung_sama")}
            rows={2}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#BFDBFE] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
          />
        </div>

        <div className="m-6 mt-0 bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl p-4 flex flex-col gap-2">
          <p className="m-0 flex items-center gap-2 text-sm font-bold text-[#D97706]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.2">
              <path d="M9 18h6M10 22h4M12 2a6 6 0 00-3.4 10.9c.6.4 1 1.1 1 1.8v.3h4.8v-.3c0-.7.4-1.4 1-1.8A6 6 0 0012 2z" />
            </svg>
            Tips
          </p>
          <ul className="m-0 pl-5 text-xs leading-[1.8] text-[#92400E] list-disc">
            <li>Pastikan satuan luas yang digunakan sama (misal cm&sup2;).</li>
            <li>Hitung semua sisi tegak yang berbeda bentuk atau ukurannya.</li>
            <li>Kolom &ldquo;Luas Tiap Sisi&rdquo; diisi untuk setiap tipe sisi yang dihitung.</li>
            <li>Jika semua sisi tegak sama, cukup isi satu nilai saja.</li>
          </ul>
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
