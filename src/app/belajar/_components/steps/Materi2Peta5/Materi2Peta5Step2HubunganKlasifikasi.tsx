import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const pertanyaan = [
  { key: "persamaan", text: "Apa persamaan yang kalian temukan pada susunan bidang datar yang berhasil membentuk bangun ruang?" },
  { key: "perbedaan", text: "Apa perbedaan antara susunan bidang datar yang berhasil dan yang tidak berhasil membentuk bangun ruang?" },
  {
    key: "penentu",
    text: "Menurut kelompokmu, apa yang membuat suatu susunan bidang datar dapat membentuk jaring-jaring yang valid?",
  },
  {
    key: "jumlah_sisi",
    text: "Apakah susunan bidang datar dengan jumlah dan bentuk sisi yang sama selalu dapat membentuk bangun ruang yang sama? Jelaskan alasanmu.",
  },
];

const dasar = [
  { key: "valid", label: "Susunan yang valid sebagai jaring-jaring" },
  { key: "tidak_valid", label: "Susunan yang tidak valid sebagai jaring-jaring" },
  { key: "lebih_dari_satu", label: "Bangun ruang yang ditemukan memiliki lebih dari satu alternatif jaring-jaring" },
  { key: "satu_alternatif", label: "Bangun ruang yang baru ditemukan memiliki satu alternatif jaring-jaring" },
  { key: "cara_lain", label: "Pengelompokan lain menurut kelompokmu" },
];

const textareaClass =
  "w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y";

export default async function Materi2Peta5Step2HubunganKlasifikasi({
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
        <div className="inline-flex items-center gap-1.5 bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#92400E" strokeWidth="2.4">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="4.5" />
            <circle cx="12" cy="12" r="1" fill="#92400E" />
          </svg>
          Tahap 4 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Temukan Hubungan
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          <p className="m-0 text-sm text-[#4B5563]">
            Jawablah pertanyaan berikut berdasarkan hasil eksplorasi dan informasi yang telah kalian kelompokkan.
          </p>
          <div className="flex flex-col">
            {pertanyaan.map((q, i) => (
              <div key={q.key} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  {i < pertanyaan.length - 1 && <div className="w-0.5 flex-1 bg-[#DBEAFE] my-1" />}
                </div>
                <div className="flex-1 flex flex-col gap-2 pb-6">
                  <label htmlFor={`c-${q.key}`} className="text-sm font-semibold leading-[1.5] text-[#111827]">
                    {q.text}
                  </label>
                  <textarea
                    id={`c-${q.key}`}
                    name={`answers.hubungan_${q.key}`}
                    defaultValue={getValue(`hubungan_${q.key}`)}
                    placeholder="Tulis jawabanmu..."
                    required
                    rows={3}
                    className={textareaClass}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Susun Klasifikasi Awal
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <p className="m-0 text-sm text-[#4B5563]">
            Berdasarkan hasil pengolahan informasi, kelompokkan temuanmu sesuai dengan kategori berikut. Tuliskan contoh dan alasan yang mendukung pengelompokan tersebut.
          </p>
          <div className="flex flex-col gap-3">
            {dasar.map((d) => (
              <div key={d.key} className="grid grid-cols-1 sm:grid-cols-[1fr_1.3fr] gap-2 sm:gap-4 items-start rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                <span className="text-sm font-bold text-[#111827]">{d.label}</span>
                <textarea
                  name={`answers.klasifikasi_${d.key}`}
                  defaultValue={getValue(`klasifikasi_${d.key}`)}
                  placeholder="Tuliskan contoh dan alasannya..."
                  required
                  rows={2}
                  className={textareaClass}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/1`} />
        <NextStepButton />
      </div>
    </form>
  );
}
