import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";

export default async function Materi8Peta3Step3RumuskanPermasalahan({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";
  const isChecked = (key: string) => answers[key] === "ya";

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={9} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Berdiskusi
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Rumuskan Permasalahan
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
          Centang (✓) pertanyaan yang menurut kelompokmu perlu dibuktikan melalui eksplorasi.
        </p>
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 sm:p-6 flex flex-col gap-3">
          <h3 className="m-0 text-sm font-extrabold text-[#1E3A8A]">Contoh pertanyaan:</h3>
          <label key="faktor_sama" className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] leading-[1.5] cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF]">
            <input type="checkbox" name="answers.pertanyaan_faktor_sama" value="ya" defaultChecked={isChecked("pertanyaan_faktor_sama")} className="mt-0.5 accent-[#2563EB]" />
            Apakah faktor perubahan volume setiap bangun sama?
          </label>
          <label key="hubungan_skala" className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] leading-[1.5] cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF]">
            <input type="checkbox" name="answers.pertanyaan_hubungan_skala" value="ya" defaultChecked={isChecked("pertanyaan_hubungan_skala")} className="mt-0.5 accent-[#2563EB]" />
            Bagaimana hubungan faktor skala dengan perubahan volume bangun ruang?
          </label>
          <label key="pola_sama" className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] leading-[1.5] cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF]">
            <input type="checkbox" name="answers.pertanyaan_pola_sama" value="ya" defaultChecked={isChecked("pertanyaan_pola_sama")} className="mt-0.5 accent-[#2563EB]" />
            Apakah kubus, balok, prisma, dan limas memiliki pola perubahan volume yang sama?
          </label>
          <label key="lebih_cepat" className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] leading-[1.5] cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF]">
            <input type="checkbox" name="answers.pertanyaan_lebih_cepat" value="ya" defaultChecked={isChecked("pertanyaan_lebih_cepat")} className="mt-0.5 accent-[#2563EB]" />
            Mengapa volume bertambah lebih cepat daripada ukuran panjang?
          </label>
          <div className="flex flex-col gap-2 rounded-xl border border-[#E5E7EB] bg-white px-4 py-3">
            <label className="flex items-center gap-3 text-sm text-[#374151]">
              <input type="checkbox" name="answers.pertanyaan_lain_dipilih" value="ya" defaultChecked={isChecked("pertanyaan_lain_dipilih")} className="accent-[#2563EB]" />
              Pertanyaan lain:
            </label>
            <textarea
              name="answers.pertanyaan_lain"
              defaultValue={getValue("pertanyaan_lain")}
              rows={2}
              aria-label="Pertanyaan lain"
              className="w-full rounded-lg border border-[#E5E7EB] bg-white p-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
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
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
