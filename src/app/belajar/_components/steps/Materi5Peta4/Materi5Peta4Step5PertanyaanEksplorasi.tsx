import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const pertanyaan = [
  { key: "ukuran_berubah", text: "Ukuran panjang apa saja yang berubah ketika faktor skala diubah? Berikan contoh berdasarkan hasil eksplorasimu!", rows: 3 },
  { key: "bentuk_sisi", text: "Apa yang kamu amati pada ukuran panjang dan luas permukaan bangun ketika faktor skala diperbesar atau diperkecil?", rows: 3 },
  { key: "luas_tiap_skala", text: "Bagaimana perbedaan luas permukaan bangun pada faktor skala k = 1/2, k = 1, k = 2, dan k = 3? Jelaskan berdasarkan data yang kamu peroleh!", rows: 3 },
  {
    key: "konsistensi",
    text: "Apakah hasil pengamatan menggunakan GeoGebra 3D dan AR menunjukkan ukuran serta luas permukaan yang sama untuk bangun dan faktor skala yang sama? Jelaskan berdasarkan hasil pengamatanmu!",
    rows: 4,
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

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-[#2563EB]">Pertanyaan Eksplorasi</span>
            <span className="text-xs text-[#6B7280]">
              Jawablah pertanyaan berikut berdasarkan hasil eksplorasi menggunakan GeoGebra 3D dan Augmented Reality (AR), serta data yang telah kamu catat pada Panel C.
            </span>
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col">
          {pertanyaan.map((q, i) => (
            <div key={q.key} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {i + 1}
                </div>
                {i < pertanyaan.length - 1 && <div className="w-px flex-1 bg-[#BFDBFE] my-1" />}
              </div>
              <label className={`flex flex-col gap-2 flex-1 ${i < pertanyaan.length - 1 ? "pb-6" : ""}`}>
                <span className="text-sm font-semibold text-[#111827] leading-[1.5]">{q.text}</span>
                <textarea
                  name={`answers.${q.key}`}
                  defaultValue={getValue(q.key)}
                  required
                  rows={q.rows}
                  placeholder="Tuliskan jawabanmu di sini..."
                  className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
                />
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/4`} />
        <NextStepButton />
      </div>
    </form>
  );
}
