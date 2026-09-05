import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const bangunRuang = [
  { key: "kubus", label: "Kubus", color: "#16A34A" },
  { key: "balok", label: "Balok", color: "#2563EB" },
  { key: "prisma", label: "Prisma Segitiga", color: "#EA580C" },
  { key: "limas", label: "Limas Segiempat", color: "#7C3AED" },
];

const faktorSkala = ["1/2", "1", "2", "3"];

const checklist = [
  "Semua faktor skala (½, 1, 2, 3) telah dicoba.",
  "Semua bangun ruang (kubus, balok, prisma segitiga, limas segiempat) telah diamati.",
  "Ukuran yang diamati telah dicatat.",
  "Luas permukaan telah dicatat untuk setiap faktor skala.",
  "Data GeoGebra 3D dan AR telah dibandingkan.",
  "Tidak ada data yang terlewat.",
];

export default async function Materi5Peta4Step4CatatanKelompok({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const isChecked = (key: string) => answers[key] === "true" || answers[key] === "on";

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={6} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-6 items-start">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              C
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#2563EB]">Catatan Kelompok</span>
              <span className="text-xs text-[#6B7280]">
                Lengkapilah tabel berikut berdasarkan data dari GeoGebra 3D dan AR.
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr>
                  <th className="bg-[#2563EB] text-white text-xs font-bold px-3 py-3 rounded-l-lg">Bangun Ruang</th>
                  <th className="bg-[#2563EB] text-white text-xs font-bold px-3 py-3 border-l border-white/20">Faktor Skala (k)</th>
                  <th className="bg-[#2563EB] text-white text-xs font-bold px-3 py-3 border-l border-white/20">Ukuran (cm) / Rusuk</th>
                  <th className="bg-[#2563EB] text-white text-xs font-bold px-3 py-3 border-l border-white/20">Luas Awal (cm&sup2;) (k = 1)</th>
                  <th className="bg-[#2563EB] text-white text-xs font-bold px-3 py-3 border-l border-white/20 rounded-r-lg">Luas Baru (cm&sup2;)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {bangunRuang.map((b) =>
                  faktorSkala.map((k, i) => {
                    const kSlug = k.replace("/", "-");
                    return (
                      <tr key={`${b.key}-${k}`}>
                        {i === 0 && (
                          <td rowSpan={faktorSkala.length} className="px-3 py-2 align-middle border-r border-[#F3F4F6]">
                            <span className="text-sm font-bold" style={{ color: b.color }}>
                              {b.label}
                            </span>
                          </td>
                        )}
                        <td className="px-3 py-2 text-sm font-semibold text-[#111827] align-top">k = {k}</td>
                        <td className="px-3 py-2">
                          <input
                            type="text"
                            name={`answers.ukuran_${b.key}_${kSlug}`}
                            defaultValue={getValue(`ukuran_${b.key}_${kSlug}`)}
                            placeholder="..."
                            required
                            className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-2.5 py-1.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                          />
                        </td>
                        <td className="px-3 py-2">
                          <input
                            type="text"
                            name={`answers.luas_awal_${b.key}_${kSlug}`}
                            defaultValue={getValue(`luas_awal_${b.key}_${kSlug}`)}
                            placeholder="..."
                            required
                            className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-2.5 py-1.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                          />
                        </td>
                        <td className="px-3 py-2">
                          <input
                            type="text"
                            name={`answers.luas_baru_${b.key}_${kSlug}`}
                            defaultValue={getValue(`luas_baru_${b.key}_${kSlug}`)}
                            placeholder="..."
                            required
                            className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-2.5 py-1.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                          />
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          <div className="bg-[#FEF9E7] rounded-xl py-3.5 px-[18px] flex flex-col gap-1.5">
            <p className="m-0 text-sm font-bold text-[#92400E]">Catatan</p>
            <ul className="m-0 pl-4 flex flex-col gap-1 text-xs text-[#78350F] leading-[1.5] list-disc">
              <li>Ukuran yang diamati dapat berupa panjang rusuk, panjang-lebar-tinggi, tinggi alas, apotema, dll.</li>
              <li>Luas Awal = luas permukaan bangun sebelum perubahan skala (k = 1).</li>
              <li>Luas Baru = luas permukaan bangun setelah diperbesar atau diperkecil sesuai faktor skala (k).</li>
            </ul>
            <p className="m-0 mt-1 text-xs font-bold text-[#DC2626]">
              Isilah tabel secara berurutan mulai dari faktor skala &frac12;, kemudian 1, 2, dan 3.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="text-sm font-bold text-[#16A34A]">Pastikan Data Lengkap!</span>
            </div>
            {checklist.map((c, i) => (
              <label key={i} className="flex items-start gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  name={`answers.checklist_${i}`}
                  defaultChecked={isChecked(`checklist_${i}`)}
                  required
                  className="mt-0.5 w-[16px] h-[16px] flex-shrink-0 accent-[#16A34A]"
                />
                <span className="text-xs text-[#374151] leading-[1.5] group-has-[:checked]:text-[#111827] group-has-[:checked]:font-semibold">
                  {c}
                </span>
              </label>
            ))}
          </div>

          <div className="bg-[#FFF1F2] border border-[#FECDD3] rounded-[20px] p-5 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E11D48" strokeWidth="2.4">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v5M12 16.5v.01" />
              </svg>
              <span className="text-sm font-bold text-[#E11D48]">Ayo Berpikir!</span>
            </div>
            <p className="m-0 text-xs text-[#9F1239] leading-[1.6]">
              Perhatikan data yang kamu kumpulkan. Nanti kita akan mengolah data ini untuk
              menemukan polanya.
            </p>
          </div>
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
