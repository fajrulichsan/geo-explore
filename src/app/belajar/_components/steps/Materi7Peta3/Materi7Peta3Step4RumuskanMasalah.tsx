import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi7Peta3Step4RumuskanMasalah({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";

  const [gambarHero, gambarMaskot] = await Promise.all([
    getPageImage("M7-P3-L4-1"),
    getPageImage("M7-P3-L2-1"),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
            <circle cx="9" cy="12" r="0.6" />
            <circle cx="12.5" cy="12" r="0.6" />
            <circle cx="16" cy="12" r="0.6" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Berdiskusi
          </h1>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] px-5 py-6 sm:px-8 sm:py-8 flex flex-col gap-5">
        <div className="absolute -right-14 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <div className="relative flex flex-col gap-2">
          <h2 className="m-0 text-lg sm:text-xl font-extrabold text-white">Sekarang, rumuskan masalah dan tentukan dugaan yang akan dibuktikan</h2>
          <p className="m-0 text-sm text-white/90 max-w-2xl leading-[1.6]">melalui GeoGebra 3D dan Augmented Reality (AR)!</p>
        </div>
        <div className="relative bg-white rounded-2xl p-3 sm:p-4">
          <EditablePageImage
              imageKey="M7-P3-L4-1"
              materi={materi}
              peta={peta}
              step="4"
              urutan="1"
              src={gambarHero}
              alt="Tiga siswa berdiskusi dengan tiga limas identik, satu prisma, dan tumpukan buku Amati, Diskusikan, Rumuskan, Buktikan"
              editable={editFoto}
              natural
              containerClassName="relative w-full min-h-24 overflow-hidden"
            />
        </div>
        <div className="relative flex flex-wrap gap-2">
          <span className="rounded-2xl rounded-bl-sm bg-white/95 text-[#1E3A8A] text-xs sm:text-[13px] font-semibold px-3 py-2 leading-[1.4]">Apa masalah yang perlu kita rumuskan dari hasil pengamatan ini?</span>
          <span className="rounded-2xl rounded-bl-sm bg-white/95 text-[#1E3A8A] text-xs sm:text-[13px] font-semibold px-3 py-2 leading-[1.4]">Menurut kalian, bagaimana hubungan volume satu limas dengan volume prisma yang luas alas dan tingginya sama?</span>
          <span className="rounded-2xl rounded-bl-sm bg-white/95 text-[#1E3A8A] text-xs sm:text-[13px] font-semibold px-3 py-2 leading-[1.4]">Dugaan kita nanti akan dibuktikan menggunakan GeoGebra 3D dan AR pada Tahap 3.</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 bg-[#EFF4FF] border border-[#DBE7FF] rounded-[20px] p-5 sm:p-6">
        <h3 className="m-0 text-sm font-extrabold text-[#1E3A8A]">Lanjutkan hasil pengamatan: pada Tahap 1, kamu telah mengamati bahwa</h3>
        <ul className="m-0 pl-5 flex flex-col gap-1 text-sm text-[#374151] leading-[1.6]">
          <li>tiga limas identik mempunyai luas alas dan tinggi yang sama dengan sebuah prisma pembanding,</li>
          <li>tiga kali isi limas dapat mengisi prisma hingga penuh.</li>
        </ul>
        <p className="m-0 text-sm text-[#374151] leading-[1.6]">Sekarang, gunakan hasil pengamatan tersebut untuk merumuskan masalah, menyusun dugaan, dan menentukan dugaan yang akan dibuktikan pada Tahap 3 dengan GeoGebra 3D dan Augmented Reality (AR).</p>
        <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-xl px-4 py-3 text-sm font-semibold text-[#92400E]">
          Dugaan awal dapat berbeda; setiap dugaan perlu didukung alasan.
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Rumuskan Masalah
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Berdasarkan hasil pengamatan pada Tahap 1 dan diskusi kelompok, tuliskan pertanyaan yang ingin kalian jawab melalui eksplorasi GeoGebra 3D dan AR.
        </p>
        <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-xl px-4 py-3 text-sm text-[#92400E] leading-[1.6]">
          <span className="font-bold">Contoh (tidak harus sama): </span>
          Bagaimana hubungan volume satu limas dengan volume satu prisma yang memiliki luas alas dan tinggi yang sama?
        </div>
        <p className="m-0 text-sm font-semibold text-[#111827]">Tuliskan hingga tiga pertanyaan kelompokmu:</p>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs flex-shrink-0">1</span>
            <input type="text" name="answers.pertanyaan_1" defaultValue={getValue("pertanyaan_1")} placeholder="Pertanyaan pertama..." required aria-label="Pertanyaan 1" className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs flex-shrink-0">2</span>
            <input type="text" name="answers.pertanyaan_2" defaultValue={getValue("pertanyaan_2")} placeholder="Pertanyaan kedua (opsional)..." aria-label="Pertanyaan 2" className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs flex-shrink-0">3</span>
            <input type="text" name="answers.pertanyaan_3" defaultValue={getValue("pertanyaan_3")} placeholder="Pertanyaan ketiga (opsional)..." aria-label="Pertanyaan 3" className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#D97706] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            G
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#D97706]">
            Dugaan / Hipotesis Kelompok
          </div>
        </div>
          <EditablePageImage
              imageKey="M7-P3-L2-1"
              materi={materi}
              peta={peta}
              step="2"
              urutan="1"
              src={gambarMaskot}
              alt="Tiga siswa maskot tersenyum"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-36 sm:w-52 aspect-[517/244] flex-shrink-0 overflow-hidden rounded-xl"
            />
        </div>
        <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-[20px] p-5 sm:p-6 flex flex-col gap-3">
          <p className="m-0 text-sm font-bold text-[#92400E] underline">Menurut kelompok kami,</p>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Volume satu limas diduga ... terhadap volume satu prisma yang memiliki luas alas dan tinggi sama, karena ...
          </p>
            <label htmlFor="hipotesis_diduga" className="sr-only">
              Volume satu limas diduga
            </label>
            <textarea id="hipotesis_diduga" name="answers.hipotesis_diduga" defaultValue={getValue("hipotesis_diduga")} rows={2} placeholder="Ketik jawabanmu di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
            <label htmlFor="hipotesis_karena" className="sr-only">
              Karena
            </label>
            <textarea id="hipotesis_karena" name="answers.hipotesis_karena" defaultValue={getValue("hipotesis_karena")} rows={3} placeholder="Ketik jawabanmu di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
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
