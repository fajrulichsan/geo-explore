import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const lanjutkanChecklist = [
  "Rangkum hasil pengamatanmu.",
  "Amati keterkaitan awal dari data yang kamu peroleh.",
  "Susun dugaanmu tentang cara menentukan luas permukaan limas.",
  "Refleksikan proses eksplorasimu sebelum melanjutkan ke Tahap 4.",
];

const alurLanjutan = [
  { n: 1, label: "Catatan Hasil" },
  { n: 2, label: "Temukan Keterkaitan Awal" },
  { n: 3, label: "Dugaan Baru" },
  { n: 4, label: "Refleksi" },
];

const baris = [
  { key: "bentuk_alas", label: "Bentuk alas" },
  { key: "bentuk_sisi_tegak", label: "Bentuk setiap sisi tegak" },
  { key: "banyak_sisi_tegak", label: "Banyak sisi tegak" },
  { key: "ukuran_alas", label: "Ukuran alas" },
  { key: "ukuran_sisi_tegak", label: "Ukuran yang diperlukan pada sisi tegak" },
  { key: "luas_alas", label: "Luas alas" },
  { key: "luas_seluruh_sisi_tegak", label: "Luas seluruh sisi tegak" },
  { key: "luas_alas_dan_tiap_sisi", label: "Luas alas dan tiap sisi tegak" },
  { key: "luas_tiap_sisi", label: "Luas tiap sisi" },
];

export default async function Materi4Peta4Step4RingkasPengamatan({
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
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
        <div className="flex items-start gap-3">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="flex-shrink-0 mt-0.5">
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
          </svg>
          <p className="m-0 text-sm sm:text-[15px] font-bold text-[#111827]">Ayo lanjutkan hasil eksplorasimu!</p>
        </div>
        <ul className="m-0 pl-5 flex flex-col gap-1.5 text-sm text-[#4B5563] leading-[1.6] list-disc">
          {lanjutkanChecklist.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          {alurLanjutan.map((a, i) => (
            <div key={a.n} className="flex items-center gap-2">
              <div className="flex flex-col items-center gap-1.5 min-w-[100px] max-w-[130px]">
                <div className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {a.n}
                </div>
                <p className="m-0 text-center text-xs font-semibold text-[#374151] leading-[1.4]">{a.label}</p>
              </div>
              {i < alurLanjutan.length - 1 && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.4" className="flex-shrink-0">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#16A34A]">
            Ringkas Hasil Pengamatanmu
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">Lengkapilah tabel berikut berdasarkan hasil eksplorasimu.</p>

        <div className="overflow-x-auto rounded-[20px] border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <table className="w-full border-collapse min-w-[480px]">
            <thead>
              <tr className="bg-[#F0FDF4]">
                <th className="text-left text-xs font-bold text-[#166534] p-4 border-b border-[#E5E7EB]">
                  Bagian yang Diamati
                </th>
                <th className="text-left text-xs font-bold text-[#166534] p-4 border-b border-[#E5E7EB]">
                  Hasil Pengamatan
                </th>
              </tr>
            </thead>
            <tbody>
              {baris.map((b) => (
                <tr key={b.key} className="bg-white even:bg-[#F9FAFB]">
                  <td className="p-4 border-b border-[#F3F4F6] text-sm font-bold text-[#111827] align-top w-1/3">
                    {b.label}
                  </td>
                  <td className="p-4 border-b border-[#F3F4F6] align-top">
                    <input
                      type="text"
                      name={`answers.ringkas_${b.key}`}
                      defaultValue={getValue(`ringkas_${b.key}`)}
                      placeholder="..."
                      required
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none focus:bg-white transition-colors"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-[#EFF4FF] rounded-xl py-3.5 px-[18px] flex items-start gap-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="mt-0.5 flex-shrink-0">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 16v-5M12 8h.01" />
          </svg>
          <p className="m-0 text-sm font-semibold text-[#1D4ED8] leading-[1.5]">
            Data yang kamu catat akan digunakan untuk menemukan keterkaitan dan menyusun dugaan
            baru tentang luas permukaan limas.
          </p>
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
