import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi8Peta10Step6PetaKonsepDanPoinPenting({
  materi,
  peta,
  step = "6",
  editFoto,
}: StepComponentProps) {
  const gambar = await Promise.all((["M8-P10-L6-1"] as const).map((k) => getPageImage(k)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={7} />
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
            G
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Peta Konsep Mini
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <div className="rounded-xl border-2 px-4 py-3 text-center text-sm text-[#111827] leading-[1.5]" style={{ backgroundColor: "#EFF4FF", borderColor: "#93C5FD" }}><strong>SKALA</strong> (penskalaan seragam)</div>
          <div className="text-center text-[#1E3A8A] text-lg leading-none" aria-hidden="true">↓</div>
          <div className="rounded-xl border-2 px-4 py-3 text-center text-sm text-[#111827] leading-[1.5]" style={{ backgroundColor: "#F0FDF4", borderColor: "#86EFAC" }}>Faktor Skala (<span className="italic">k</span>)</div>
          <div className="text-center text-[#1E3A8A] text-lg leading-none" aria-hidden="true">↓</div>
          <div className="rounded-xl border-2 px-4 py-3 text-center text-sm text-[#111827] leading-[1.5]" style={{ backgroundColor: "#FFFBEB", borderColor: "#FCD34D" }}>Setiap ukuran panjang yang bersesuaian (rusuk/sisi) berubah <strong><span className="italic">k</span></strong> kali</div>
          <div className="text-center text-[#1E3A8A] text-lg leading-none" aria-hidden="true">↓</div>
          <div className="rounded-xl border-2 px-4 py-3 text-center text-sm text-[#111827] leading-[1.5]" style={{ backgroundColor: "#FFF1F2", borderColor: "#FDA4AF" }}>Volume melibatkan tiga dimensi ukuran panjang</div>
          <div className="text-center text-[#1E3A8A] text-lg leading-none" aria-hidden="true">↓</div>
          <div className="rounded-xl border-2 px-4 py-3 text-center text-sm text-[#111827] leading-[1.5]" style={{ backgroundColor: "#FAF5FF", borderColor: "#D8B4FE" }}>Volume berubah <strong><span className="italic">k</span><sup>3</sup></strong> kali</div>
        </div>
        <div className="flex items-start gap-2.5 bg-[#FEF9E7] border border-dashed border-[#F5E3A0] rounded-xl px-4 py-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
            <path d="M9 18h6 M10 21h4 M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
          </svg>
          <p className="m-0 text-sm text-[#92400E] leading-[1.5]">Peta konsep ini berlaku untuk semua bangun ruang sisi datar yang sebangun, seperti kubus, balok, prisma, dan limas.</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            H
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Poin Penting
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] grid grid-cols-1 sm:grid-cols-[1fr_180px] gap-4 items-center">
          <ul className="m-0 pl-0 list-none flex flex-col gap-2 text-sm text-[#374151] leading-[1.5]">
          <li className="flex items-start gap-2"><span className="text-[#16A34A] font-bold">✓</span>Skala mengubah semua ukuran panjang (rusuk/sisi yang bersesuaian).</li>
          <li className="flex items-start gap-2"><span className="text-[#16A34A] font-bold">✓</span>Volume berubah sebesar kubik faktor skala (<strong><span className="italic">k</span><sup>3</sup></strong>).</li>
          <li className="flex items-start gap-2"><span className="text-[#16A34A] font-bold">✓</span>Hubungan ini berlaku untuk semua bangun ruang sisi datar yang sebangun.</li>
          <li className="flex items-start gap-2"><span className="text-[#16A34A] font-bold">✓</span>Masalah skala dan volume dapat diselesaikan dengan berbagai strategi.</li>
          <li className="flex items-start gap-2"><span className="text-[#16A34A] font-bold">✓</span>Jawaban harus disertai alasan matematis yang logis.</li>
          <li className="flex items-start gap-2"><span className="text-[#16A34A] font-bold">✓</span>Visualisasi dengan teknologi (GeoGebra 3D/AR) dapat membantu memahami konsep.</li>
          </ul>
          <EditablePageImage
            imageKey="M8-P10-L6-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambar[0]}
            alt="Papan target dengan panah: Pahami konsepnya, gunakan strateginya, latih penalaranmu!"
            editable={editFoto}
            natural
            
            containerClassName="relative w-full max-w-[220px] mx-auto overflow-hidden rounded-xl"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
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
