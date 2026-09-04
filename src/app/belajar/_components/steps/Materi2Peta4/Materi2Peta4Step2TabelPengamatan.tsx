import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const aspek = [
  { key: "banyak_bentuk", label: "Banyak bentuk jaring-jaring yang ditemukan" },
  { key: "hubungan_sisi", label: "Hubungan antar sisi" },
  { key: "posisi_sisi", label: "Posisi sisi" },
  { key: "proses_lipatan", label: "Proses lipatan" },
  { key: "sisi_bertumpuk", label: "Sisi bertumpuk (Ya/Tidak)" },
  { key: "jaring_valid", label: "Jaring-jaring valid (Ya/Tidak)" },
];

export default async function Materi2Peta4Step2TabelPengamatan({
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
        <StepHeader materi={materi} currentStep={2} totalSteps={4} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Tabel Hasil Pengamatan
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Bandingkan hasil eksplorasi menggunakan GeoGebra 3D dan Augmented Reality (AR), kemudian
          isilah tabel berikut berdasarkan hasil pengamatanmu.
        </p>

        <div className="overflow-x-auto rounded-[20px] border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <table className="w-full border-collapse min-w-[720px]">
            <thead>
              <tr className="bg-[#EFF4FF]">
                <th className="text-left text-xs font-bold text-[#1D4ED8] p-4 border-b border-[#E5E7EB]">
                  Aspek yang Diamati
                </th>
                <th className="text-left text-xs font-bold text-[#1D4ED8] p-4 border-b border-[#E5E7EB]">
                  Hasil Eksplorasi GeoGebra 3D
                </th>
                <th className="text-left text-xs font-bold text-[#1D4ED8] p-4 border-b border-[#E5E7EB]">
                  Hasil Eksplorasi Augmented Reality (AR)
                </th>
                <th className="text-left text-xs font-bold text-[#1D4ED8] p-4 border-b border-[#E5E7EB]">
                  Catatan Penting (Temuan Sementara)
                </th>
              </tr>
            </thead>
            <tbody>
              {aspek.map((a) => (
                <tr key={a.key} className="bg-white even:bg-[#F9FAFB]">
                  <td className="p-4 border-b border-[#F3F4F6] text-sm font-bold text-[#111827] align-top">
                    {a.label}
                  </td>
                  {(["geogebra", "ar", "catatan"] as const).map((col) => (
                    <td key={col} className="p-4 border-b border-[#F3F4F6] align-top">
                      <input
                        type="text"
                        name={`answers.${a.key}_${col}`}
                        defaultValue={getValue(`${a.key}_${col}`)}
                        placeholder="Ketik di sini..."
                        required
                        className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
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
