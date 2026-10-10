import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";


export default async function Peta5Step4TemukanPolanya({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={9} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" className="flex-shrink-0">
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="M15.5 15.5L21 21" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-start">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Temukan Polanya
          </div>
        </div>
          <p className="m-0 text-sm font-semibold text-[#374151]">Tuliskan pola yang kamu temukan dari data di atas.</p>
          <div className="flex flex-col gap-4">
            <div className="rounded-[20px] border p-5 flex flex-col gap-3 border-[#BBF7D0] bg-[#F0FDF4]">
              <div className="flex items-center gap-2.5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0">
                  <circle cx="10.5" cy="10.5" r="6.5" />
                  <path d="M15.5 15.5L21 21" />
                </svg>
                <p className="m-0 text-sm font-bold text-[#1E3A8A]">Pola 1 – Berdasarkan bentuk dan susunan sisi</p>
              </div>
              <div className="flex flex-col gap-1.5">
                    <label htmlFor="d_p1_bangun" className="text-[13px] font-semibold text-[#374151] cursor-pointer">Bangun yang memiliki kemiripan</label>
                    <input
                      id="d_p1_bangun"
                      name="answers.d_p1_bangun"
                      defaultValue={getValue("d_p1_bangun")}
                      type="text"
                      required
                      placeholder="Ketik di sini..."
                      className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors"
                    />
                  </div>
              <div className="flex flex-col gap-1.5">
                    <label htmlFor="d_p1_pola" className="text-[13px] font-semibold text-[#374151] cursor-pointer">Pola yang kami temukan</label>
                    <input
                      id="d_p1_pola"
                      name="answers.d_p1_pola"
                      defaultValue={getValue("d_p1_pola")}
                      type="text"
                      required
                      placeholder="Ketik di sini..."
                      className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors"
                    />
                  </div>
            </div>
            <div className="rounded-[20px] border p-5 flex flex-col gap-3 border-[#DBE5FB] bg-[#EFF4FF]">
              <div className="flex items-center gap-2.5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0">
                  <circle cx="10.5" cy="10.5" r="6.5" />
                  <path d="M15.5 15.5L21 21" />
                </svg>
                <p className="m-0 text-sm font-bold text-[#1E3A8A]">Pola 2 – Berdasarkan pasangan bidang sisi sejajar</p>
              </div>
              <div className="flex flex-col gap-1.5">
                    <label htmlFor="d_p2_bangun" className="text-[13px] font-semibold text-[#374151] cursor-pointer">Bangun yang memiliki kemiripan</label>
                    <input
                      id="d_p2_bangun"
                      name="answers.d_p2_bangun"
                      defaultValue={getValue("d_p2_bangun")}
                      type="text"
                      required
                      placeholder="Ketik di sini..."
                      className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors"
                    />
                  </div>
              <div className="flex flex-col gap-1.5">
                    <label htmlFor="d_p2_pola" className="text-[13px] font-semibold text-[#374151] cursor-pointer">Pola yang kami temukan</label>
                    <input
                      id="d_p2_pola"
                      name="answers.d_p2_pola"
                      defaultValue={getValue("d_p2_pola")}
                      type="text"
                      required
                      placeholder="Ketik di sini..."
                      className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors"
                    />
                  </div>
            </div>
            <div className="rounded-[20px] border p-5 flex flex-col gap-3 border-[#DDD6FE] bg-[#F5F3FF]">
              <div className="flex items-center gap-2.5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0">
                  <circle cx="10.5" cy="10.5" r="6.5" />
                  <path d="M15.5 15.5L21 21" />
                </svg>
                <p className="m-0 text-sm font-bold text-[#1E3A8A]">Pola 3 – Pola lain yang kami temukan</p>
              </div>
              <div className="flex flex-col gap-1.5">
                    <label htmlFor="d_p3_dasar" className="text-[13px] font-semibold text-[#374151] cursor-pointer">Dasar pola yang digunakan</label>
                    <input
                      id="d_p3_dasar"
                      name="answers.d_p3_dasar"
                      defaultValue={getValue("d_p3_dasar")}
                      type="text"
                      required
                      placeholder="Ketik di sini..."
                      className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors"
                    />
                  </div>
              <div className="flex flex-col gap-1.5">
                    <label htmlFor="d_p3_bangun" className="text-[13px] font-semibold text-[#374151] cursor-pointer">Bangun yang memiliki kemiripan</label>
                    <input
                      id="d_p3_bangun"
                      name="answers.d_p3_bangun"
                      defaultValue={getValue("d_p3_bangun")}
                      type="text"
                      required
                      placeholder="Ketik di sini..."
                      className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors"
                    />
                  </div>
              <div className="flex flex-col gap-1.5">
                    <label htmlFor="d_p3_pola" className="text-[13px] font-semibold text-[#374151] cursor-pointer">Pola yang kami temukan</label>
                    <input
                      id="d_p3_pola"
                      name="answers.d_p3_pola"
                      defaultValue={getValue("d_p3_pola")}
                      type="text"
                      required
                      placeholder="Ketik di sini..."
                      className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors"
                    />
                  </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Siap Membuat Klasifikasi?
          </div>
        </div>
          <div className="bg-[#FEF9E7] border border-dashed border-[#F5C542] rounded-[20px] p-5 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="1.8" className="flex-shrink-0">
                <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
              </svg>
              <label htmlFor="e_dasar_klasifikasi" className="text-sm leading-[1.6] font-bold text-[#374151] cursor-pointer">
                Dari pola yang telah kamu temukan, manakah yang menurutmu dapat digunakan sebagai dasar pengelompokan? Berikan alasanmu.
              </label>
            </div>
            <textarea
              id="e_dasar_klasifikasi"
              name="answers.e_dasar_klasifikasi"
              defaultValue={getValue("e_dasar_klasifikasi")}
              rows={7}
              placeholder="Ketik jawabanmu di sini..."
              required
              className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/3`} />
        <NextStepButton />
      </div>
    </form>
  );
}
