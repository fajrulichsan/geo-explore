import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";

export default async function Materi8Peta10Step4LangkahMenyelesaikanMasalah({
  materi,
  peta,
}: StepComponentProps) {
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Halaman 2 dari 2
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 5a2 2 0 0 1 2-2h5v17H6a2 2 0 0 0-2 2z M20 5a2 2 0 0 0-2-2h-5v17h5a2 2 0 0 1 2 2z" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Rangkuman
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Langkah Menyelesaikan Masalah Skala dan Volume
          </div>
        </div>
        <ol className="m-0 p-0 list-none flex flex-col gap-3">
          <li className="flex items-start gap-3 rounded-2xl border border-[#E5E7EB] bg-white p-4">
            <span className="w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-sm flex-shrink-0" style={{ backgroundColor: "#2563EB" }}>1</span>
            <div className="flex flex-col gap-1">
              <p className="m-0 text-sm font-bold text-[#111827]">Tentukan faktor skala (<span className="italic">k</span>).</p>
              <p className="m-0 text-xs text-[#4B5563] leading-[1.5]">Perhatikan apakah diperbesar (<span className="italic">k</span> &gt; 1) atau diperkecil (0 &lt; <span className="italic">k</span> &lt; 1).</p>
            </div>
          </li>
          <li className="flex items-start gap-3 rounded-2xl border border-[#E5E7EB] bg-white p-4">
            <span className="w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-sm flex-shrink-0" style={{ backgroundColor: "#16A34A" }}>2</span>
            <div className="flex flex-col gap-1">
              <p className="m-0 text-sm font-bold text-[#111827]">Tentukan volume awal (<span className="italic">V</span><sub>awal</sub>).</p>
              <p className="m-0 text-xs text-[#4B5563] leading-[1.5]">Gunakan rumus yang sesuai dengan bangun ruang.</p>
            </div>
          </li>
          <li className="flex items-start gap-3 rounded-2xl border border-[#E5E7EB] bg-white p-4">
            <span className="w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-sm flex-shrink-0" style={{ backgroundColor: "#F97316" }}>3</span>
            <div className="flex flex-col gap-1">
              <p className="m-0 text-sm font-bold text-[#111827]">Hitung faktor perubahan volume (<span className="italic">k</span><sup>3</sup>).</p>
              <p className="m-0 text-xs text-[#4B5563] leading-[1.5]">Hitung <span className="italic">k</span><sup>3</sup> dari faktor skala <span className="italic">k</span>.</p>
            </div>
          </li>
          <li className="flex items-start gap-3 rounded-2xl border border-[#E5E7EB] bg-white p-4">
            <span className="w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-sm flex-shrink-0" style={{ backgroundColor: "#7C3AED" }}>4</span>
            <div className="flex flex-col gap-1">
              <p className="m-0 text-sm font-bold text-[#111827]">Tentukan volume hasil skala (<span className="italic">V</span><sub>hasil skala</sub>).</p>
              <p className="m-0 text-xs text-[#4B5563] leading-[1.5]">Gunakan <span className="italic">V</span><sub>hasil skala</sub> = <span className="italic">k</span><sup>3</sup> × <span className="italic">V</span><sub>awal</sub>.</p>
            </div>
          </li>
          <li className="flex items-start gap-3 rounded-2xl border border-[#E5E7EB] bg-white p-4">
            <span className="w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-sm flex-shrink-0" style={{ backgroundColor: "#2563EB" }}>5</span>
            <div className="flex flex-col gap-1">
              <p className="m-0 text-sm font-bold text-[#111827]">Periksa kembali hasil dan pastikan alasannya sudah benar.</p>
            </div>
          </li>
        </ol>
        <div className="flex items-start gap-2.5 bg-[#FEF9E7] border border-dashed border-[#F5E3A0] rounded-xl px-4 py-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
            <path d="M9 18h6 M10 21h4 M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
          </svg>
          <p className="m-0 text-sm text-[#92400E] leading-[1.5]">Ikuti langkah-langkah ini secara sistematis agar penyelesaian lebih mudah, tepat, dan logis.</p>
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
