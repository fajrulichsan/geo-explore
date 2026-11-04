import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import GambarJawaban from "@/components/GambarJawaban";

const pertanyaan = [
  {
    n: 1,
    label: "Bentuk jaring-jaring apa saja yang kamu temukan untuk bangun ruang yang sama? Berikan beberapa contoh berdasarkan hasil eksplorasimu!",
    lampiran: true,
  },
  {
    n: 2,
    label: "Apa yang terjadi pada hasil lipatan ketika posisi salah satu bidang datar diubah? Jelaskan berdasarkan hasil eksplorasimu!",
    lampiran: false,
  },
  {
    n: 3,
    label: "Susunan bidang datar seperti apa yang tidak dapat membentuk bangun ruang yang dimaksud? Berikan contoh berdasarkan hasil eksplorasimu!",
    lampiran: true,
  },
];

const textareaClass =
  "w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y";

export default async function Materi2Peta4Step3TemuanEksplorasi({
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
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={4} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 3 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-6 items-start">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              D
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Apa yang Kamu Temukan?
            </div>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">
            Jawablah pertanyaan berikut berdasarkan hasil eksplorasimu menggunakan GeoGebra 3D. Kamu dapat melampirkan gambar untuk mendukung jawabanmu.
          </p>
          {pertanyaan.map((q) => (
            <div
              key={q.n}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] focus-within:border-[#2563EB] transition-colors"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-[30px] h-[30px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {q.n}
                </div>
                <label htmlFor={`temuan${q.n}`} className="flex-1 text-[15px] font-bold text-[#111827] pt-0.5">
                  {q.label}
                </label>
              </div>
              <textarea
                id={`temuan${q.n}`}
                name={`answers.temuan_${q.n}`}
                defaultValue={getValue(`temuan_${q.n}`)}
                rows={3}
                placeholder="Ketik jawabanmu di sini..."
                required
                className={textareaClass}
              />
              {q.lampiran && (
                <div className="mt-3 flex flex-col gap-1.5">
                  <GambarJawaban
                    name={`answers.temuan_${q.n}_gambar`}
                    materi={materi}
                    peta={peta}
                    defaultValue={getValue(`temuan_${q.n}_gambar`)}
                  />
                  <span className="text-xs text-[#6B7280]">Lampiran gambar bersifat opsional.</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 lg:sticky lg:top-6">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              E
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Catatan Hasil Eksplorasi
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] focus-within:border-[#2563EB] transition-colors">
            <label htmlFor="catatanEksplorasi" className="block text-sm font-semibold text-[#4B5563] mb-3">
              Tuliskan informasi penting yang kelompokmu temukan selama eksplorasi.
            </label>
            <textarea
              id="catatanEksplorasi"
              name="answers.catatan_eksplorasi"
              defaultValue={getValue("catatan_eksplorasi")}
              rows={10}
              placeholder="Ketik catatanmu di sini..."
              required
              className={textareaClass}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/2`} />
        <NextStepButton />
      </div>
    </form>
  );
}
