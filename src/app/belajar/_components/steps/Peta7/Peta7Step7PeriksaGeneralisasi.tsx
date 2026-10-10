import BackLink from "@/app/belajar/_components/BackLink";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const aspek = [
  { key: "dasar_pengelompokan", label: "Dasar pengelompokan yang dapat digunakan." },
  { key: "alasan_lebih_dari_satu_kelompok", label: "Alasan mengapa satu bangun dapat masuk lebih dari satu kelompok." },
  { key: "syarat_klasifikasi_diterima", label: "Syarat agar klasifikasi dapat diterima." },
  { key: "kesesuaian_verifikasi", label: "Kesesuaian kesimpulan dengan hasil verifikasi." },
];

export default function Peta7Step7PeriksaGeneralisasi({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const pilihan = (key: string) => getValue(`periksa_${key}`);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="7" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={7} totalSteps={8} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Periksa Generalisasi Kelompokmu
          </div>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Diskusikan bersama kelompokmu. Gunakan data, hasil verifikasi, dan kesepakatan kelompok untuk
          memeriksa kualitas generalisasi yang telah dirumuskan.
        </p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr>
              <th className="bg-[#6D28D9] text-white text-sm font-bold py-3 px-4 w-14">No.</th>
              <th className="bg-[#6D28D9] text-white text-sm font-bold py-3 px-4">Aspek yang Diperiksa</th>
              <th className="bg-[#15803D] text-white text-sm font-bold py-3 px-4 text-center w-20">Ya</th>
              <th className="bg-[#FDE68A] text-[#92400E] text-sm font-bold py-3 px-4 text-center w-36">Perlu Diperbaiki</th>
              <th className="bg-[#1D4ED8] text-white text-sm font-bold py-3 px-4 w-1/3">Catatan</th>
            </tr>
          </thead>
          <tbody>
            {aspek.map((a, i) => (
              <tr key={a.key} className="border-t border-[#E5E7EB]">
                <td className="py-3 px-4 text-base font-extrabold text-[#2563EB]">{i + 1}</td>
                <td className="py-3 px-4 text-sm text-[#374151]">{a.label}</td>
                <td className="py-3 px-4 text-center">
                  <input
                    type="radio"
                    name={`answers.periksa_${a.key}`}
                    value="ya"
                    defaultChecked={pilihan(a.key) === "ya"}
                    required
                    aria-label={`${a.label} Ya`}
                    className="w-5 h-5 accent-[#15803D]"
                  />
                </td>
                <td className="py-3 px-4 text-center">
                  <input
                    type="radio"
                    name={`answers.periksa_${a.key}`}
                    value="perlu_diperbaiki"
                    defaultChecked={pilihan(a.key) === "perlu_diperbaiki"}
                    aria-label={`${a.label} Perlu diperbaiki`}
                    className="w-5 h-5 accent-[#D97706]"
                  />
                </td>
                <td className="py-3 px-4">
                  <input
                    type="text"
                    name={`answers.periksa_${a.key}_catatan`}
                    defaultValue={getValue(`periksa_${a.key}_catatan`)}
                    placeholder="Catatan..."
                    className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-[#EFF4FF] border border-[#DBE5FB] rounded-[20px] p-4 flex items-start gap-3 text-sm text-[#1E3A8A]">
        <b>Catatan:</b> Jika ada bagian yang perlu diperbaiki, diskusikan kembali dengan kelompokmu.
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/6`} />
        <NextStepButton />
      </div>
    </form>
  );
}
