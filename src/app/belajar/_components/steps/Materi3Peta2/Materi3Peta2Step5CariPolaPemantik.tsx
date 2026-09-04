import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";
import Image from "next/image";

const bangunRuang = [
  { imageKey: "shape-kubus" as PageImageKey, nama: "Kubus" },
  { imageKey: "shape-balok" as PageImageKey, nama: "Balok" },
  { imageKey: "shape-prisma" as PageImageKey, nama: "Prisma Segitiga" },
];

const pemantik = [
  { n: 1, label: "Mengapa semua sisi perlu diperhatikan untuk mengetahui luas permukaan?" },
  { n: 2, label: "Apakah luas permukaan cukup dihitung dari satu sisi saja? Mengapa?" },
  { n: 3, label: "Mengapa beberapa sisi memiliki ukuran yang sama?" },
  {
    n: 4,
    label: "Menurutmu, langkah-langkah apa yang perlu dilakukan untuk mengetahui luas seluruh permukaan bangun ruang?",
  },
];

export default async function Materi3Peta2Step5CariPolaPemantik({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const bangunImages = await Promise.all(bangunRuang.map((b) => getPageImage(b.imageKey)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={6} />
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

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              I
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Cari Pola!
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="bg-[#2563EB] text-white text-xs font-bold px-4 py-3 w-2/5">Bangun Ruang</th>
                  <th className="bg-[#2563EB] text-white text-xs font-bold px-4 py-3 border-l border-white/20">
                    Apa persamaan dan perbedaannya?
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {bangunRuang.map((b, i) => (
                  <tr key={b.nama} className="hover:bg-[#F9FAFB] transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="relative w-9 h-9 flex-shrink-0 rounded-lg overflow-hidden bg-[#F9FAFB]">
                          <Image src={bangunImages[i]} alt={b.nama} fill className="object-contain" />
                        </div>
                        <span className="text-sm font-semibold text-[#374151]">{b.nama}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        name={`answers.pola_${i + 1}`}
                        defaultValue={getValue(`pola_${i + 1}`)}
                        required
                        placeholder="Tuliskan jawabanmu..."
                        className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              J
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Pertanyaan Pemantik
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {pemantik.map((q) => (
              <div
                key={q.n}
                className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] focus-within:border-[#2563EB] transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-[26px] h-[26px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    {q.n}
                  </div>
                  <label htmlFor={`pemantik${q.n}`} className="flex-1 text-sm font-bold text-[#111827] pt-0.5">
                    {q.label}
                  </label>
                </div>
                <textarea
                  id={`pemantik${q.n}`}
                  name={`answers.pemantik_${q.n}`}
                  defaultValue={getValue(`pemantik_${q.n}`)}
                  rows={2}
                  placeholder="Ketik jawabanmu di sini..."
                  required
                  className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-3.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
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
