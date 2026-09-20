import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";

export default async function Materi8Peta10Step2KonsepDasarDanHubungan({
  materi,
  peta,
}: StepComponentProps) {
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Halaman 1 dari 2
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
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Konsep Dasar
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <h3 className="m-0 text-sm font-extrabold text-[#1E3A8A]">Hubungan Skala dan Volume Bangun Ruang</h3>
          <div className="rounded-xl border-2 px-4 py-3 text-center text-sm text-[#111827] leading-[1.5]" style={{ backgroundColor: "#EFF4FF", borderColor: "#93C5FD" }}><strong>Bangun Ruang</strong> (sisi datar)</div>
          <div className="text-center text-[#1E3A8A] text-lg leading-none" aria-hidden="true">↓</div>
          <div className="rounded-xl border-2 px-4 py-3 text-center text-sm text-[#111827] leading-[1.5]" style={{ backgroundColor: "#F0FDF4", borderColor: "#86EFAC" }}>Perubahan Skala (<span className="italic">k</span>)</div>
          <div className="text-center text-[#1E3A8A] text-lg leading-none" aria-hidden="true">↓</div>
          <div className="rounded-xl border-2 px-4 py-3 text-center text-sm text-[#111827] leading-[1.5]" style={{ backgroundColor: "#FFFBEB", borderColor: "#FCD34D" }}>Setiap ukuran panjang yang bersesuaian (rusuk/sisi) berubah <strong><span className="italic">k</span></strong> kali</div>
          <div className="text-center text-[#1E3A8A] text-lg leading-none" aria-hidden="true">↓</div>
          <div className="rounded-xl border-2 px-4 py-3 text-center text-sm text-[#111827] leading-[1.5]" style={{ backgroundColor: "#FFF1F2", borderColor: "#FDA4AF" }}>Volume melibatkan tiga faktor ukuran panjang; masing-masing berubah dengan faktor <span className="italic">k</span></div>
          <div className="text-center text-[#1E3A8A] text-lg leading-none" aria-hidden="true">↓</div>
          <div className="rounded-xl border-2 px-4 py-3 text-center text-sm text-[#111827] leading-[1.5]" style={{ backgroundColor: "#FAF5FF", borderColor: "#D8B4FE" }}>Faktor perubahan volume<br /><strong><span className="italic">k</span> × <span className="italic">k</span> × <span className="italic">k</span> = <span className="italic">k</span><sup>3</sup></strong></div>
          <div className="text-center text-[#1E3A8A] text-lg leading-none" aria-hidden="true">↓</div>
          <div className="rounded-xl border-2 px-4 py-3 text-center text-sm text-[#111827] leading-[1.5]" style={{ backgroundColor: "#F5F3FF", borderColor: "#C4B5FD" }}>Volume berubah <strong><span className="italic">k</span><sup>3</sup></strong> kali</div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Hubungan yang Kamu Temukan
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">Tabel berikut merangkum hubungan antara faktor skala dan perubahan volume.</p>
        <div className="overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-white">
          <table className="w-full text-sm text-[#111827]">
            <thead>
              <tr className="bg-[#1E3A8A] text-white">
                <th className="py-3 px-4 font-bold">Faktor Skala (<span className="italic">k</span>)</th>
                <th className="py-3 px-4 font-bold">Volume Menjadi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#E5E7EB]"><td className="py-2.5 px-4 text-center"><sup>1</sup>⁄<sub>2</sub></td><td className="py-2.5 px-4 text-center"><sup>1</sup>⁄<sub>8</sub> kali</td></tr>
              <tr className="border-t border-[#E5E7EB]"><td className="py-2.5 px-4 text-center">1</td><td className="py-2.5 px-4 text-center">1 kali (tetap)</td></tr>
              <tr className="border-t border-[#E5E7EB]"><td className="py-2.5 px-4 text-center">2</td><td className="py-2.5 px-4 text-center">8 kali</td></tr>
              <tr className="border-t border-[#E5E7EB]"><td className="py-2.5 px-4 text-center">3</td><td className="py-2.5 px-4 text-center">27 kali</td></tr>
              <tr className="border-t border-[#E5E7EB]"><td className="py-2.5 px-4 text-center">4</td><td className="py-2.5 px-4 text-center">64 kali</td></tr>
              <tr className="border-t border-[#E5E7EB]"><td className="py-2.5 px-4 text-center">…</td><td className="py-2.5 px-4 text-center">…</td></tr>
              <tr className="border-t border-[#E5E7EB]"><td className="py-2.5 px-4 text-center"><span className="italic">k</span></td><td className="py-2.5 px-4 text-center"><strong><span className="italic">k</span><sup>3</sup></strong> kali</td></tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-start gap-2.5 bg-[#FEF9E7] border border-dashed border-[#F5E3A0] rounded-xl px-4 py-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
            <path d="M9 18h6 M10 21h4 M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
          </svg>
          <p className="m-0 text-sm text-[#92400E] leading-[1.5]">Pola ini berlaku untuk semua bangun ruang sisi datar yang sebangun.</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
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
