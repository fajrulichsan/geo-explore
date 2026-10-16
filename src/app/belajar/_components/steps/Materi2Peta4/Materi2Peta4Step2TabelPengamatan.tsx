import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
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

const kolom = [
  { key: "geogebra", label: "Hasil Eksplorasi GeoGebra 3D" },
  { key: "ar", label: "Hasil Eksplorasi Augmented Reality (AR)" },
  { key: "catatan", label: "Catatan Penting (Temuan Sementara)" },
];

const inputClass =
  "w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors";

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
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 3 dari 6
        </div>
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
          Bandingkan hasil eksplorasi menggunakan GeoGebra 3D dan Augmented Reality (AR),
          kemudian isilah tabel berikut berdasarkan hasil pengamatanmu.
        </p>

        <div className="md:overflow-hidden md:rounded-[20px] md:border md:border-[#E5E7EB] md:bg-white md:shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <table className="block md:table w-full border-collapse">
            <thead className="hidden md:table-header-group">
              <tr className="bg-[#EFF4FF]">
                <th className="text-left text-xs font-bold text-[#1D4ED8] p-4 border-b border-[#E5E7EB] w-[22%]">
                  Aspek yang Diamati
                </th>
                {kolom.map((k) => (
                  <th key={k.key} className="text-left text-xs font-bold text-[#1D4ED8] p-4 border-b border-[#E5E7EB]">
                    {k.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="flex flex-col gap-4 md:table-row-group">
              {aspek.map((a) => (
                <tr
                  key={a.key}
                  className="flex flex-col gap-3 bg-white border border-[#E5E7EB] rounded-[20px] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] md:table-row md:rounded-none md:border-0 md:border-b md:border-[#F3F4F6] md:p-0 md:shadow-none md:last:border-b-0"
                >
                  <td className="text-sm font-bold md:font-semibold text-[#111827] md:p-3 md:align-middle">{a.label}</td>
                  {kolom.map((k) => (
                    <td key={k.key} className="flex flex-col gap-1 md:table-cell md:p-3 md:align-middle">
                      <span className="text-xs font-semibold text-[#1D4ED8] md:hidden">{k.label}</span>
                      <input
                        type="text"
                        name={`answers.${a.key}_${k.key}`}
                        defaultValue={getValue(`${a.key}_${k.key}`)}
                        aria-label={`${a.label} - ${k.label}`}
                        required
                        className={inputClass}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/1`} />
        <NextStepButton />
      </div>
    </form>
  );
}
