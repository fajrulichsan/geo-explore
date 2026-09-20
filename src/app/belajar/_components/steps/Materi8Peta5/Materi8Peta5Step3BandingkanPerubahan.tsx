import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";

export default async function Materi8Peta5Step3BandingkanPerubahan({
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
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={9} />
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
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bandingkan Perubahan
          </div>
        </div>

        <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
          Lengkapilah tabel berikut untuk setiap nilai faktor skala (k). Gunakan data pada tabel kamu di Panel A.
        </p>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 sm:p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-2.5">
          <div className="grid grid-cols-[48px_1fr_1fr] gap-3 text-xs font-bold text-[#2563EB] leading-tight">
            <span>Faktor Skala (k)</span><span>Faktor Perubahan Ukuran (panjang) (kali)</span><span>Faktor Perubahan Volume (kali)</span>
          </div>
          <div className="grid grid-cols-[48px_1fr_1fr] gap-3 items-center rounded-xl bg-[#EFF6FF] px-3 py-3">
            <span className="text-base font-extrabold text-[#1E3A8A]">1/2</span>
            <input name="answers.ubah_1_2_panjang" defaultValue={getValue("ubah_1_2_panjang")} aria-label="k = 1/2, faktor perubahan ukuran panjang" placeholder="… kali" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
            <input name="answers.ubah_1_2_volume" defaultValue={getValue("ubah_1_2_volume")} aria-label="k = 1/2, faktor perubahan volume" placeholder="… kali" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
          </div>
          <div className="grid grid-cols-[48px_1fr_1fr] gap-3 items-center rounded-xl bg-[#EFF6FF] px-3 py-3">
            <span className="text-base font-extrabold text-[#1E3A8A]">2</span>
            <input name="answers.ubah_2_panjang" defaultValue={getValue("ubah_2_panjang")} aria-label="k = 2, faktor perubahan ukuran panjang" placeholder="… kali" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
            <input name="answers.ubah_2_volume" defaultValue={getValue("ubah_2_volume")} aria-label="k = 2, faktor perubahan volume" placeholder="… kali" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
          </div>
          <div className="grid grid-cols-[48px_1fr_1fr] gap-3 items-center rounded-xl bg-[#EFF6FF] px-3 py-3">
            <span className="text-base font-extrabold text-[#1E3A8A]">3</span>
            <input name="answers.ubah_3_panjang" defaultValue={getValue("ubah_3_panjang")} aria-label="k = 3, faktor perubahan ukuran panjang" placeholder="… kali" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
            <input name="answers.ubah_3_volume" defaultValue={getValue("ubah_3_volume")} aria-label="k = 3, faktor perubahan volume" placeholder="… kali" required className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors" />
          </div>
        </div>
        <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-5 sm:p-6 flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-extrabold text-sm">?</div>
            <h3 className="m-0 text-sm font-extrabold text-[#166534]">Pertanyaan</h3>
          </div>
          <label htmlFor="perbandingan_ukuran_volume" className="text-sm font-bold text-[#111827] leading-[1.5]">
            Apakah faktor perubahan ukuran selalu sama dengan faktor perubahan volume? Jelaskan berdasarkan data yang kamu peroleh.
          </label>
          <textarea
              id="perbandingan_ukuran_volume"
              name="answers.perbandingan_ukuran_volume"
              defaultValue={getValue("perbandingan_ukuran_volume")}
              rows={3}
              placeholder="Ketik jawabanmu di sini..."
              required
              className="w-full rounded-2xl border border-[#E5E7EB] bg-white p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
            />
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
