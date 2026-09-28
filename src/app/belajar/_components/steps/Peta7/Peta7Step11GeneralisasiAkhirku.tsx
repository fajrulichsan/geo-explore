import BackLink from "@/app/belajar/_components/BackLink";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Peta7Step11GeneralisasiAkhirku({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const anakBerpikir = await getPageImage("M1-P7-L11-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="11" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={11} totalSteps={11} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6 dari 6 – Discovery Learning
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Tuliskan kesimpulan akhirmu tentang klasifikasi bangun ruang sisi datar.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          K
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Generalisasi Akhirku
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <textarea
          name="answers.generalisasi_akhir"
          defaultValue={getValue("generalisasi_akhir")}
          rows={7}
          placeholder="Tuliskan kesimpulan akhirmu di sini..."
          required
          className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        <div className="lg:col-span-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-[20px] p-4 flex items-center justify-center">
          <EditablePageImage
            imageKey="M1-P7-L11-1"
            materi={materi}
            peta={peta}
            step="11"
            urutan="1"
            src={anakBerpikir}
            alt="Anak laki-laki berpikir dengan gelembung pikiran berisi bola lampu"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-32 h-40 max-w-full mx-auto"
          />
        </div>
        <div className="lg:col-span-8 flex flex-col gap-3">
          <div className="bg-[#EFF4FF] border border-[#DBE5FB] rounded-[20px] p-5 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[#1E3A8A] font-bold text-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#FACC15" stroke="#D97706" strokeWidth="1.5">
                <path d="M12 2l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 15.5 6.6 18.5l1.2-6L3.3 8.3l6.1-.7z" />
              </svg>
              Hebat! Kamu telah menyelesaikan 6 Tahap Discovery Learning!
            </div>
            <p className="m-0 text-sm leading-[1.6] text-[#1E3A8A]">
              Kamu telah menemukan bahwa bangun ruang dapat dikelompokkan dengan berbagai cara. Yang
              penting, dasar pengelompokan jelas, digunakan secara konsisten, dan didukung alasan
              matematis yang logis.
            </p>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 flex items-center gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="flex-shrink-0">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z" />
            </svg>
            <p className="m-0 text-sm text-[#374151]">
              Selanjutnya, renungkan kembali pengalaman belajarmu pada bagian Refleksi Diri.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/10`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
