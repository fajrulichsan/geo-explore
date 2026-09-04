import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const pertanyaan = [
  {
    n: 1,
    label: "Mengapa beberapa susunan dapat dilipat menjadi bangun ruang, tetapi yang lain tidak?",
  },
  {
    n: 2,
    label: "Apakah posisi suatu bidang datar mempengaruhi hasil lipatan?",
  },
  {
    n: 3,
    label:
      "Menurut dugaanmu, apakah hubungan antarbidang atau jumlah bidang lebih berpengaruh terhadap kemungkinan terbentuknya jaring-jaring? Jelaskan alasan sementaramu.",
  },
];

const pernyataan = [
  { n: 1, label: "Saya menemukan persamaan dan perbedaan pada beberapa susunan bidang datar." },
  { n: 2, label: "Saya memiliki dugaan tentang susunan yang mungkin dapat dilipat menjadi bangun ruang." },
  { n: 3, label: "Saya masih ingin mengetahui apakah dugaan saya benar." },
  { n: 4, label: "Saya siap membandingkan dugaan saya dengan teman pada tahap berikutnya." },
];

const opsi = [
  { value: "ya", label: "Ya" },
  { value: "ragu", label: "Ragu-ragu" },
  { value: "belum", label: "Belum" },
];

export default async function Materi2Peta2Step6PemantikRefleksi({
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
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={7} />
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

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            G
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Pertanyaan Pemantik
          </div>
        </div>

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
                <label htmlFor={`pemantik${q.n}`} className="flex-1 text-[15px] font-bold text-[#111827] pt-0.5">
                  {q.label}
                </label>
              </div>
              <textarea
                id={`pemantik${q.n}`}
                name={`answers.pemantik_${q.n}`}
                defaultValue={getValue(`pemantik_${q.n}`)}
                rows={3}
                placeholder="Ketik jawabanmu di sini..."
                required
                className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            H
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Refleksi Singkat
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          <p className="m-0 text-sm text-[#4B5563]">
            Pilih pernyataan yang sesuai dengan pemahamanmu saat ini.
          </p>
          {pernyataan.map((p) => (
            <div key={p.n} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 border-b border-[#F3F4F6] last:border-0 pb-4 last:pb-0">
              <p className="m-0 flex-1 text-sm font-semibold text-[#374151]">{p.label}</p>
              <div className="flex gap-2 flex-shrink-0">
                {opsi.map((o) => (
                  <label
                    key={o.value}
                    className="flex items-center gap-1.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full py-1.5 px-3.5 text-xs font-semibold text-[#374151] cursor-pointer has-[:checked]:bg-[#EFF4FF] has-[:checked]:border-[#2563EB] has-[:checked]:text-[#2563EB] transition-colors"
                  >
                    <input
                      type="radio"
                      name={`answers.refleksi_${p.n}`}
                      value={o.value}
                      defaultChecked={getValue(`refleksi_${p.n}`) === o.value}
                      required
                      className="accent-[#2563EB]"
                    />
                    {o.label}
                  </label>
                ))}
              </div>
            </div>
          ))}
          <div className="flex items-start gap-2.5 bg-[#EFF4FF] rounded-xl py-3 px-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="mt-0.5 flex-shrink-0">
              <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
            </svg>
            <p className="m-0 text-xs font-semibold text-[#1D4ED8] leading-[1.6]">
              Tidak apa-apa jika masih ragu. Teruslah mengamati dan berpikir! Kita akan mencari tahu
              jawabannya bersama pada tahap berikutnya.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
