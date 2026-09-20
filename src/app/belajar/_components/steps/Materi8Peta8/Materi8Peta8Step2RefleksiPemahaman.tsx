import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";

const pernyataan = [
  { key: "paham_faktor_skala", teks: "Saya memahami bahwa faktor skala memengaruhi volume bangun ruang." },
  { key: "paham_k_pangkat_tiga", teks: "Saya memahami bahwa faktor perubahan volume adalah k³ ketika setiap ukuran panjang yang bersesuaian diskala dengan faktor k." },
  { key: "paham_menjelaskan_hubungan", teks: "Saya dapat menjelaskan hubungan antara perubahan ukuran panjang dan perubahan volume." },
  { key: "paham_menggunakan_hubungan", teks: "Saya dapat menggunakan hubungan faktor skala dan volume hasil skala untuk menyelesaikan masalah baru." },
  { key: "paham_bukan_menghafal", teks: "Saya memahami bahwa hubungan tersebut diperoleh melalui pengamatan, eksplorasi, dan pembuktian, bukan sekadar menghafal rumus." },
];

export default async function Materi8Peta8Step2RefleksiPemahaman({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Setelah Tahap 6 – Ayo Menyimpulkan
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" strokeLinejoin="round">
            <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Refleksi Diri
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Refleksi Pemahaman
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col gap-3">
            <p className="m-0 text-sm text-[#4B5563]">Centang (✓) semua pernyataan yang sesuai.</p>
            {pernyataan.map((p) => (
              <label key={p.key} className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] px-4 py-3 text-sm text-[#374151] leading-[1.5] cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF]">
                <input type="checkbox" name={`answers.${p.key}`} value="ya" defaultChecked={answers[p.key] === "ya"} className="mt-0.5 accent-[#2563EB]" />
                {p.teks}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit cursor-pointer bg-[#2563EB] shadow-[0_4px_10px_rgba(37,99,235,0.3)]">
          LANJUTKAN
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 12h14 M13 6l6 6-6 6" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
