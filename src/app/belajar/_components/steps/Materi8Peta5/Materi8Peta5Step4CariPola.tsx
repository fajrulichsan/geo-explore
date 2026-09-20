import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";

export default async function Materi8Peta5Step4CariPola({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={9} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Mengolah Informasi
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Cari Pola
          </div>
        </div>

        <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
          Tuliskan pola hubungan yang kamu temukan berdasarkan hasil pengamatan pada tabel sebelumnya.
        </p>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 sm:p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <div className="flex flex-col gap-2 rounded-xl bg-[#F5F3FF] px-4 py-3">
            <label htmlFor="pola_1_2" className="text-sm font-extrabold text-[#5B21B6]">k = 1/2</label>
            <input id="pola_1_2" name="answers.pola_1_2" defaultValue={getValue("pola_1_2")} placeholder="Hubungan dengan faktor perubahan volume…" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
          </div>
          <div className="flex flex-col gap-2 rounded-xl bg-[#F5F3FF] px-4 py-3">
            <label htmlFor="pola_2" className="text-sm font-extrabold text-[#5B21B6]">k = 2</label>
            <input id="pola_2" name="answers.pola_2" defaultValue={getValue("pola_2")} placeholder="Hubungan dengan faktor perubahan volume…" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
          </div>
          <div className="flex flex-col gap-2 rounded-xl bg-[#F5F3FF] px-4 py-3">
            <label htmlFor="pola_3" className="text-sm font-extrabold text-[#5B21B6]">k = 3</label>
            <input id="pola_3" name="answers.pola_3" defaultValue={getValue("pola_3")} placeholder="Hubungan dengan faktor perubahan volume…" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
          </div>
        </div>
        <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-5 sm:p-6 flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-extrabold text-sm">?</div>
            <h3 className="m-0 text-sm font-extrabold text-[#166534]">Pertanyaan</h3>
          </div>
          <label htmlFor="hubungan_skala_volume" className="text-sm font-bold text-[#111827] leading-[1.5]">
            Apa hubungan antara faktor skala (k) dan faktor perubahan volume? Tuliskan dugaanmu berdasarkan pola yang kamu temukan.
          </label>
          <textarea
              id="hubungan_skala_volume"
              name="answers.hubungan_skala_volume"
              defaultValue={getValue("hubungan_skala_volume")}
              rows={3}
              placeholder="Ketik jawabanmu di sini..."
              required
              className="w-full rounded-2xl border border-[#E5E7EB] bg-white p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
            />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
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
