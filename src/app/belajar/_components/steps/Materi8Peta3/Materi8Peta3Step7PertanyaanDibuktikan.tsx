import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";

export default async function Materi8Peta3Step7PertanyaanDibuktikan({
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
      <input type="hidden" name="step" value="7" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={7} totalSteps={9} />
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
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Pertanyaan yang Akan Dibuktikan
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
          Tuliskan pertanyaan yang akan kalian jawab melalui eksplorasi GeoGebra 3D dan Augmented Reality.
        </p>
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 sm:p-6 flex flex-col gap-3">
          <h3 className="m-0 text-sm font-extrabold text-[#1E3A8A]">Contoh pertanyaan:</h3>
          <ol className="m-0 p-0 list-none flex flex-col gap-2.5">
            <li className="flex items-start gap-3">
              <span className="text-sm font-bold text-[#1E3A8A] w-5 flex-shrink-0">1.</span>
              <span className="text-sm text-[#374151] leading-[1.6]">Jika ukuran panjang diperbesar dua kali, apakah volume selalu menjadi delapan kali?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sm font-bold text-[#1E3A8A] w-5 flex-shrink-0">2.</span>
              <span className="text-sm text-[#374151] leading-[1.6]">Bagaimana hubungan faktor skala dengan perubahan volume bangun ruang?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sm font-bold text-[#1E3A8A] w-5 flex-shrink-0">3.</span>
              <span className="text-sm text-[#374151] leading-[1.6]">Apakah pola tersebut berlaku pada kubus, balok, prisma, dan limas?</span>
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="pertanyaan_kelompok" className="text-sm font-bold text-[#2563EB]">Pertanyaan kelompok kami:</label>
          <textarea
                id="pertanyaan_kelompok"
                name="answers.pertanyaan_kelompok"
                defaultValue={getValue("pertanyaan_kelompok")}
                rows={4}
                placeholder="Ketik pertanyaan kelompokmu di sini..."
                required
                className="w-full rounded-2xl border border-[#E5E7EB] bg-white p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
              />
        </div>
        <div className="flex items-start gap-2.5 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl px-4 py-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.6" className="mt-0.5 flex-shrink-0">
            <path d="M5 13l4 4L19 7" />
          </svg>
          <p className="m-0 text-sm text-[#166534] leading-[1.5]">Pilih 1–3 pertanyaan paling penting untuk dibuktikan.</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/6`}
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
