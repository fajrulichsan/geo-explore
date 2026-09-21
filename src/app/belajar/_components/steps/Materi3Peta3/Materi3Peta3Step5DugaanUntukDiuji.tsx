import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi3Peta3Step5DugaanUntukDiuji({
  materi,
  peta,
  step = "5",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const gambarIngat = await getPageImage("M3-P3-L5-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 dari 6 &ndash; Ayo Berdiskusi
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            G
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Dugaan Kelompok untuk Diuji
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="rounded-full bg-[#16A34A] px-3 py-1 text-xs font-bold text-white flex-shrink-0">Langkah 2</span>
          <p className="m-0 text-sm leading-[1.6] text-[#4B5563]">
            Setelah mempertimbangkan alasan setiap anggota, tuliskan satu dugaan yang disepakati kelompokmu untuk diuji pada tahap eksplorasi berikutnya.
          </p>
        </div>
            <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] focus-within:border-[#2563EB] transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <label htmlFor="dugaan_diuji" className="flex-1 text-sm font-bold text-[#111827] pt-0.5">
                  Dugaan kelompok yang akan diuji
                </label>
              </div>
              <textarea
                id="dugaan_diuji"
                name="answers.dugaan_diuji"
                defaultValue={getValue("dugaan_diuji")}
                rows={4}
                placeholder="Ketik jawabanmu di sini..."
                required
                className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-3.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
              />
            </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            H
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Alasan Dugaan
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="rounded-full bg-[#16A34A] px-3 py-1 text-xs font-bold text-white flex-shrink-0">Langkah 3</span>
          <p className="m-0 text-sm leading-[1.6] text-[#4B5563]">
            Apa alasan kelompokmu memilih dugaan tersebut?
          </p>
        </div>
            <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] focus-within:border-[#2563EB] transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <label htmlFor="alasan_diuji" className="flex-1 text-sm font-bold text-[#111827] pt-0.5">
                  Alasan kelompokku memilih dugaan tersebut
                </label>
              </div>
              <textarea
                id="alasan_diuji"
                name="answers.alasan_diuji"
                defaultValue={getValue("alasan_diuji")}
                rows={4}
                placeholder="Ketik jawabanmu di sini..."
                required
                className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-3.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
              />
            </div>
      </div>

      <div className="relative overflow-hidden bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-6 flex flex-col sm:flex-row items-center gap-5">
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
              <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
            </svg>
            <p className="m-0 text-sm font-extrabold text-[#92400E]">Kotak Ingat</p>
          </div>
          <p className="m-0 text-sm leading-[1.7] text-[#374151]">
            Belum tentu dugaanmu benar. Yang terpenting, dugaan tersebut memiliki alasan yang logis dan siap diuji melalui kegiatan eksplorasi pada tahap berikutnya.
          </p>
        </div>
        <EditablePageImage
            imageKey="M3-P3-L5-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarIngat}
            alt="Siswa menunjuk ke atas dengan bintang di atas kepalanya"
            editable={editFoto}
            natural
            containerClassName="relative w-40 sm:w-44 flex-shrink-0 overflow-hidden rounded-2xl bg-white"
          />
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
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
