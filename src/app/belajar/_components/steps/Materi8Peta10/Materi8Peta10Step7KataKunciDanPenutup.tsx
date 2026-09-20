import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi8Peta10Step7KataKunciDanPenutup({
  materi,
  peta,
  step = "7",
  editFoto,
}: StepComponentProps) {
  const gambar = await Promise.all((["M8-P10-L7-1", "M8-P10-L7-2"] as const).map((k) => getPageImage(k)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="7" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={7} totalSteps={7} />
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
            I
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Kata Kunci
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          <div className="rounded-xl border border-[#DBEAFE] bg-[#EFF4FF] px-3 py-3 flex flex-col items-center gap-1 text-center text-xs sm:text-sm font-semibold text-[#1E3A8A]">
            <span className="text-xl" aria-hidden="true">📏</span>
            <span>Skala</span>
          </div>
          <div className="rounded-xl border border-[#DBEAFE] bg-[#EFF4FF] px-3 py-3 flex flex-col items-center gap-1 text-center text-xs sm:text-sm font-semibold text-[#1E3A8A]">
            <span className="text-xl" aria-hidden="true">↔</span>
            <span>Faktor Skala (<span className="italic">k</span>)</span>
          </div>
          <div className="rounded-xl border border-[#DBEAFE] bg-[#EFF4FF] px-3 py-3 flex flex-col items-center gap-1 text-center text-xs sm:text-sm font-semibold text-[#1E3A8A]">
            <span className="text-xl" aria-hidden="true">🧊</span>
            <span>Bangun Sebangun</span>
          </div>
          <div className="rounded-xl border border-[#DBEAFE] bg-[#EFF4FF] px-3 py-3 flex flex-col items-center gap-1 text-center text-xs sm:text-sm font-semibold text-[#1E3A8A]">
            <span className="text-xl" aria-hidden="true">📐</span>
            <span>Panjang Rusuk/Sisi</span>
          </div>
          <div className="rounded-xl border border-[#DBEAFE] bg-[#EFF4FF] px-3 py-3 flex flex-col items-center gap-1 text-center text-xs sm:text-sm font-semibold text-[#1E3A8A]">
            <span className="text-xl" aria-hidden="true">🧊</span>
            <span>Volume</span>
          </div>
          <div className="rounded-xl border border-[#DBEAFE] bg-[#EFF4FF] px-3 py-3 flex flex-col items-center gap-1 text-center text-xs sm:text-sm font-semibold text-[#1E3A8A]">
            <span className="text-xl" aria-hidden="true">⬆</span>
            <span>Perubahan Volume</span>
          </div>
          <div className="rounded-xl border border-[#DBEAFE] bg-[#EFF4FF] px-3 py-3 flex flex-col items-center gap-1 text-center text-xs sm:text-sm font-semibold text-[#1E3A8A]">
            <span className="text-xl" aria-hidden="true">³</span>
            <span>Pangkat Tiga Faktor Skala (<span className="italic">k</span><sup>3</sup>)</span>
          </div>
          <div className="rounded-xl border border-[#DBEAFE] bg-[#EFF4FF] px-3 py-3 flex flex-col items-center gap-1 text-center text-xs sm:text-sm font-semibold text-[#1E3A8A]">
            <span className="text-xl" aria-hidden="true">💡</span>
            <span>Strategi Penyelesaian</span>
          </div>
          <div className="rounded-xl border border-[#DBEAFE] bg-[#EFF4FF] px-3 py-3 flex flex-col items-center gap-1 text-center text-xs sm:text-sm font-semibold text-[#1E3A8A]">
            <span className="text-xl" aria-hidden="true">💬</span>
            <span>Alasan Matematis</span>
          </div>
          <div className="rounded-xl border border-[#DBEAFE] bg-[#EFF4FF] px-3 py-3 flex flex-col items-center gap-1 text-center text-xs sm:text-sm font-semibold text-[#1E3A8A]">
            <span className="text-xl" aria-hidden="true">🧠</span>
            <span>Penalaran Adaptif</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-[20px] p-5 grid grid-cols-[1fr_110px] gap-3 items-end">
          <div className="flex flex-col gap-2">
            <h3 className="m-0 text-base font-extrabold text-[#C2410C]">Hebat!</h3>
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">
              Kamu telah menemukan sendiri bahwa ketika setiap ukuran panjang (rusuk/sisi yang bersesuaian) diperbesar atau diperkecil dengan faktor skala <span className="italic">k</span>, volume bangun ruang berubah sebesar faktor <strong><span className="italic">k</span><sup>3</sup></strong>.
            </p>
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">Teruslah berpikir kritis, menggunakan berbagai strategi, dan memberikan alasan matematis yang tepat!</p>
          </div>
          <EditablePageImage
            imageKey="M8-P10-L7-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambar[0]}
            alt="Siswa mengepalkan tangan tanda semangat"
            editable={editFoto}
            natural
            
            containerClassName="relative w-full overflow-hidden"
          />
        </div>
        <div className="bg-[#EFF4FF] border border-[#DBEAFE] rounded-[20px] p-5 flex flex-col gap-3">
          <h3 className="m-0 text-base font-extrabold text-[#1E3A8A]">Akhir Perjalanan Belajar</h3>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Selamat! Kamu telah menyelesaikan seluruh materi Bangun Ruang Sisi Datar. Kini kamu memahami sifat-sifat bangun ruang, luas permukaan, volume, serta hubungan faktor skala terhadap luas permukaan (<span className="italic">k</span><sup>2</sup>) dan volume (<span className="italic">k</span><sup>3</sup>). Terus gunakan penalaran adaptif, berbagai strategi penyelesaian, serta alasan matematis dalam menghadapi berbagai permasalahan geometri!
          </p>
          <EditablePageImage
            imageKey="M8-P10-L7-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={gambar[1]}
            alt="Bangun ruang dengan tulisan Matematika membuatmu lebih hebat!"
            editable={editFoto}
            natural
            
            containerClassName="relative w-full max-w-[300px] mx-auto overflow-hidden rounded-xl"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/6`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l5 5L20 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
