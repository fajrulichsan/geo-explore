import BackLink from "@/app/belajar/_components/BackLink";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import FileSubmission from "@/components/FileSubmission";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
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
  const bintang = await getPageImage("M1-P7-L11-2");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="8" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={8} totalSteps={8} />
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
          D
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

      <div className="flex flex-col gap-4">
        <EditablePageImage
          imageKey="M1-P7-L11-1"
          materi={materi}
          peta={peta}
          step="11"
          urutan="1"
          src={anakBerpikir}
          alt="Siswa laki-laki bersemangat: Hebat! Kamu telah menyelesaikan 6 Tahap Discovery Learning"
          editable={editFoto}
          natural
          containerClassName="relative w-full rounded-[20px] overflow-hidden"
        />
        <div className="bg-[#EFF4FF] border border-[#DBE5FB] rounded-[20px] p-5 flex items-center gap-4">
          <p className="m-0 flex-1 text-sm leading-[1.6] text-[#1E3A8A]">
            Kamu telah menemukan bahwa bangun ruang dapat dikelompokkan dengan berbagai cara. Yang
            penting, dasar pengelompokan jelas, digunakan secara konsisten, dan didukung alasan
            matematis yang logis.
          </p>
          <EditablePageImage
            imageKey="M1-P7-L11-2"
            materi={materi}
            peta={peta}
            step="11"
            urutan="2"
            src={bintang}
            alt="Bintang"
            editable={editFoto}
            imageClassName="object-contain mix-blend-multiply"
            containerClassName="relative w-20 h-20 sm:w-28 sm:h-28 flex-shrink-0"
          />
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

      <FileSubmission
        materi={materi}
        peta={peta}
        defaultValue={typeof initialAnswers?.file_hasil_kerja === "string" ? initialAnswers.file_hasil_kerja : undefined}
      />

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/7`} />
        <NextStepButton variant="green">LANJUT KE REFLEKSI DIRI</NextStepButton>
      </div>
    </form>
  );
}
