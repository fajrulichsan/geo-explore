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

        <div className="hidden md:block overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <table className="w-full border-collapse">
            <thead>
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
            <tbody>
              {aspek.map((a) => (
                <tr key={a.key} className="border-b border-[#F3F4F6] last:border-0">
                  <td className="p-3 text-sm font-semibold text-[#111827] align-middle">{a.label}</td>
                  {kolom.map((k) => (
                    <td key={k.key} className="p-3 align-middle">
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

        <div className="md:hidden flex flex-col gap-4">
          {aspek.map((a) => (
            <div key={a.key} className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
              <p className="m-0 text-sm font-bold text-[#111827]">{a.label}</p>
              {kolom.map((k) => (
                <label key={k.key} className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-[#1D4ED8]">{k.label}</span>
                  <input
                    type="text"
                    name={`answers.${a.key}_${k.key}`}
                    defaultValue={getValue(`${a.key}_${k.key}`)}
                    required
                    className={inputClass}
                  />
                </label>
              ))}
            </div>
          ))}
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
