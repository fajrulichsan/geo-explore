import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const pertanyaan = [
  { n: 1, label: "Apakah satu bangun ruang hanya memiliki satu bentuk jaring-jaring? Jelaskan berdasarkan hasil eksplorasimu." },
  { n: 2, label: "Apa hubungan posisi sisi dengan hasil lipatan?" },
  { n: 3, label: "Apa yang menyebabkan suatu susunan bidang datar tidak dapat dilipat menjadi bangun ruang?" },
];

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
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              D
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Apa yang Kamu Temukan?
            </div>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">Jawablah pertanyaan berikut berdasarkan hasil eksplorasimu.</p>

          <div className="flex flex-col gap-4">
            {pertanyaan.map((q) => (
              <div
                key={q.n}
                className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] focus-within:border-[#2563EB] transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
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
                  className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-4 lg:sticky lg:top-6">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              E
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Catatan Hasil Eksplorasi
            </div>
          </div>
          <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-6 flex flex-col gap-3">
            <p className="m-0 text-sm text-[#4B5563]">
              Tuliskan informasi penting yang kelompokmu temukan selama eksplorasi.
            </p>
            <textarea
              name="answers.catatan_eksplorasi"
              defaultValue={getValue("catatan_eksplorasi")}
              rows={7}
              placeholder="Ketik catatanmu di sini..."
              required
              className="w-full rounded-2xl border border-[#F5E3A0] bg-white p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#D97706] focus:outline-none focus:ring-0 transition-colors resize-y"
            />
          </div>

          <div className="bg-[#EFF4FF] border border-[#DBEAFE] rounded-[20px] p-5 flex items-start gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="flex-shrink-0 mt-0.5">
              <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
            </svg>
            <p className="m-0 text-xs font-semibold text-[#1D4ED8] leading-[1.6]">
              Kotak Ingat: eksplorasi bertujuan mengumpulkan data, bukan langsung menentukan jawaban
              akhir. Semua hasil pengamatan akan digunakan pada tahap berikutnya untuk dianalisis
              bersama.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
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
