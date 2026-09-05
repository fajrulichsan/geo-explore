import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const tabelSkala = [
  { k: "1/2", luas: "1/4 kali" },
  { k: "2", luas: "4 kali" },
  { k: "3", luas: "9 kali" },
  { k: "4", luas: "16 kali" },
  { k: "…", luas: "…" },
  { k: "k", luas: "k² kali" },
];

export default async function Materi5Peta10Step2HubunganMengapa({
  materi,
  peta,
}: StepComponentProps) {
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={4} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Rangkuman Skala dan Luas Bangun Ruang Sisi Datar
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-5">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              C
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Hubungan yang Kamu Temukan
            </div>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-2 shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-x-auto flex-1">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#1E3A8A] text-white">
                  <th className="rounded-tl-xl py-2.5 px-4 text-center font-bold">
                    Faktor Skala (k)
                  </th>
                  <th className="rounded-tr-xl py-2.5 px-4 text-center font-bold">
                    Luas Permukaan Menjadi
                  </th>
                </tr>
              </thead>
              <tbody>
                {tabelSkala.map((row, i) => (
                  <tr key={row.k} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}>
                    <td className="py-2.5 px-4 text-center font-semibold text-[#111827] border-b border-[#F3F4F6]">
                      {row.k}
                    </td>
                    <td className="py-2.5 px-4 text-center font-semibold text-[#111827] border-b border-[#F3F4F6]">
                      {row.luas}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#FEF9E7] border border-[#F5E6A8] rounded-2xl px-5 py-3.5 flex items-center gap-3">
            <span className="text-lg flex-shrink-0">💡</span>
            <p className="m-0 text-sm text-[#785900]">
              <span className="font-extrabold">Catatan:</span> hubungan ini berlaku untuk semua
              nilai k &gt; 0, baik 0 &lt; k &lt; 1 (pengecilan) maupun k &gt; 1 (pembesaran).
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              D
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Mengapa Demikian?
            </div>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4 flex-1">
            <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
              Setiap sisi bangun ruang merupakan bangun datar. Ketika semua ukuran panjang pada
              suatu bangun diskalakan dengan faktor k, setiap ukuran panjang pada sisi-sisinya
              juga menjadi k kali ukuran semula. Karena luas adalah besaran dua dimensi, maka luas
              setiap sisi menjadi k × k = k² kali luas semula. Oleh karena itu, jumlah luas
              seluruh sisi atau luas permukaan juga menjadi k² kali luas permukaan semula.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 bg-[#F9FAFB] rounded-2xl p-4">
              <div className="flex flex-col items-center gap-2">
                <p className="m-0 text-xs font-bold text-[#2563EB]">Sisi sebelum diskalakan</p>
                <div className="w-16 h-16 rounded-md bg-[#2563EB]" style={{
                  backgroundImage:
                    "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                  backgroundSize: "25% 25%",
                }} />
                <p className="m-0 text-[11px] text-[#6B7280]">a = 3, Luas = a² = 3²</p>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.4" className="flex-shrink-0">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
              <div className="flex flex-col items-center gap-2">
                <p className="m-0 text-xs font-bold text-[#2563EB]">Sisi sesudah diskalakan (×k)</p>
                <div className="w-24 h-24 rounded-md bg-[#2563EB]" style={{
                  backgroundImage:
                    "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                  backgroundSize: "16.66% 16.66%",
                }} />
                <p className="m-0 text-[11px] text-[#6B7280]">k·a = 6, Luas = (k·a)² = k²a²</p>
              </div>
            </div>

            <div className="bg-[#EFF6FF] rounded-xl py-3 px-4 text-center">
              <p className="m-0 text-base font-extrabold text-[#1D4ED8]">
                L&apos; = (k · a)² = k²a² = k²L
              </p>
            </div>

            <div className="bg-white/70 border border-dashed border-[#E5E7EB] rounded-xl p-3 flex items-start gap-2">
              <span className="flex-shrink-0">💡</span>
              <p className="m-0 text-xs text-[#4B5563] leading-[1.5]">
                Prinsip yang sama berlaku pada setiap sisi yang mengalami penskalaan seragam.
                Karena luas diperoleh dari hasil perkalian dua ukuran panjang, faktor skala pada
                luas selalu menjadi k².
              </p>
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
