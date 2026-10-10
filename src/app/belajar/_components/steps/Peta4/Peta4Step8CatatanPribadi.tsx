import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Peta4Step8CatatanPribadi({ materi, peta, initialAnswers, editFoto }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const siswa = await getPageImage("M1-P4-L8-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="8" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={8} totalSteps={8} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="flex-shrink-0">
            <rect x="7" y="2" width="10" height="20" rx="2" />
            <path d="M12 8l3 1.7v3.6L12 15l-3-1.7V9.7L12 8z" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">
            Ayo Mengeksplorasi dengan Augmented Reality (AR)
          </h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 3 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            J
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Catatan Pribadi
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 items-start">
          <EditablePageImage
            imageKey="M1-P4-L8-1"
            materi={materi}
            peta={peta}
            step="8"
            urutan="1"
            src={siswa}
            alt="Siswa laki-laki menulis di buku dengan gelembung pikiran bergambar lampu"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-32 h-40 sm:w-36 sm:h-44 flex-shrink-0 mx-auto sm:mx-0"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-4 flex flex-col gap-3">
            <label htmlFor="q1" className="flex items-center gap-3 text-sm font-bold text-[#111827]">
              <span className="w-9 h-9 rounded-full bg-[#DCFCE7] flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#166534" strokeWidth="2.2"><path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.5 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z" /></svg>
              </span>
              Hal paling menarik yang saya temukan hari ini
            </label>
            <textarea
              id="q1"
              name="answers.hal_paling_menarik"
              defaultValue={getValue("hal_paling_menarik")}
              rows={4}
              placeholder="Tuliskan hal yang paling menarik bagimu..."
              required
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
            />
          </div>
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-4 flex flex-col gap-3">
            <label htmlFor="q2" className="flex items-center gap-3 text-sm font-bold text-[#111827]">
              <span className="w-9 h-9 rounded-full bg-[#FFEDD5] flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2.6" strokeLinecap="round"><path d="M9 9a3 3 0 1 1 4.5 2.6c-1 .6-1.5 1.2-1.5 2.4M12 18h.01" /></svg>
              </span>
              Pertanyaan yang masih ingin saya ketahui
            </label>
            <textarea
              id="q2"
              name="answers.pertanyaan_ingin_diketahui"
              defaultValue={getValue("pertanyaan_ingin_diketahui")}
              rows={4}
              placeholder="Tuliskan pertanyaanmu di sini..."
              required
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
            />
          </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/7`} />
        <NextStepButton variant="green" icon="check">LANJUT KE TAHAP AYO MENGOLAH INFORMASI</NextStepButton>
      </div>
    </form>
  );
}
