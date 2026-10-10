import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import FileSubmission from "@/components/FileSubmission";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Peta2Step7SiapBerdiskusi({
  materi,
  peta,
  step = "7",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const catatan = typeof answers.catatan_ide_penting === "string" ? answers.catatan_ide_penting : "";
  const maskot = await getPageImage("M1-P2-L7-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="7" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={7} totalSteps={7} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" className="flex-shrink-0">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 1 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            J
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Siap Berdiskusi!
          </div>
        </div>

        <div className="bg-[#EFF4FF] border border-[#DBE5FB] rounded-[20px] p-6 flex items-center gap-5">
          <EditablePageImage
            imageKey="M1-P2-L7-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={maskot}
            alt="Siswa laki-laki menunjuk ke atas dengan bersemangat"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-24 h-28 sm:w-32 sm:h-36 flex-shrink-0 bg-white rounded-2xl"
          />
          <div className="flex flex-col gap-3 text-[15px] leading-[1.7] text-[#374151]">
            <p className="m-0">
              Kamu telah memiliki berbagai dugaan tentang cara mengelompokkan benda dan model bangun ruang di atas.
            </p>
            <p className="m-0 font-bold text-[#1D4ED8]">
              Pada tahap berikutnya, diskusikan ide-idemu bersama teman untuk menentukan informasi apa saja yang
              diperlukan agar pengelompokan menjadi lebih tepat.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] focus-within:border-[#2563EB] transition-colors flex flex-col gap-3">
        <div className="flex items-center gap-2.5">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
            <path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
          </svg>
          <label htmlFor="catatan_ide_penting" className="text-lg font-bold text-[#1E3A8A]">
            Catatan Ide Pentingku
          </label>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Tuliskan satu dugaan atau pertanyaan terpenting yang ingin kamu diskusikan pada tahap berikutnya.
        </p>
        <textarea
          id="catatan_ide_penting"
          name="answers.catatan_ide_penting"
          defaultValue={catatan}
          rows={4}
          placeholder="Ketik ide pentingmu di sini..."
          required
          className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
        />
      </div>

      <FileSubmission
        materi={materi}
        peta={peta}
        defaultValue={typeof initialAnswers?.file_hasil_kerja === "string" ? initialAnswers.file_hasil_kerja : undefined}
      />

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/6`} />
        <NextStepButton variant="green">LANJUT KE TAHAP AYO BERDISKUSI</NextStepButton>
      </div>
    </form>
  );
}
