import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const pertanyaan = [
  { key: "ukuran_berubah", label: "Ukuran apa saja yang berubah ketika faktor skala diubah?" },
  { key: "bentuk_jumlah_sisi", label: "Apakah bentuk dan jumlah sisi bangun berubah?" },
  { key: "luas_setiap_skala", label: "Berapa luas permukaan yang kamu peroleh untuk setiap faktor skala?" },
  {
    key: "konsistensi_data",
    label:
      "Apakah hasil pengamatan pada GeoGebra 3D dan AR menunjukkan data yang konsisten? Jelaskan berdasarkan pengamatanmu.",
  },
];

export default async function Materi5Peta4Step5PertanyaanEksplorasi({
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
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={6} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-[#2563EB]">Pertanyaan Eksplorasi</span>
            <span className="text-xs text-[#6B7280]">
              Jawablah berdasarkan hasil pengamatan dan data pada tabel yang telah kamu isi.
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {pertanyaan.map((p, i) => (
            <div key={p.key} className="flex gap-3 pb-5 border-b border-[#F3F4F6] last:border-0 last:pb-0">
              <div className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                {i + 1}
              </div>
              <div className="flex-1 flex flex-col gap-2.5">
                <label htmlFor={p.key} className="text-sm font-semibold text-[#111827] leading-[1.5]">
                  {p.label}
                </label>
                <textarea
                  id={p.key}
                  name={`answers.${p.key}`}
                  defaultValue={getValue(p.key)}
                  rows={3}
                  required
                  placeholder="Jawabanmu..."
                  className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
                />
              </div>
            </div>
          ))}
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
