import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi5Peta2Step4DugaanAwal({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const tahukahImage = await getPageImage("M5-P2-L4-1");
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={9} />
        <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          Tahap 1 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengamati dan Berpikir</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Dugaan Awal
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-2 text-sm leading-[1.9] text-[#374151]">
            <span>Berdasarkan pengamatanmu untuk</span>
            <span className="font-bold text-[#2563EB]">k = 2</span>
            <span>, menurutmu luas permukaan bangun menjadi</span>
            <input
              type="text"
              name="answers.dugaan_kelipatan"
              defaultValue={getValue("dugaan_kelipatan")}
              required
              aria-label="Kelipatan luas permukaan"
              className="w-20 rounded-lg border border-[#93C5FD] bg-[#EFF6FF] py-1 px-2 text-center text-sm font-bold text-[#1D4ED8] focus:border-[#2563EB] focus:outline-none"
            />
            <span>kali luas permukaan semula.</span>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="dugaan_alasan" className="text-sm font-bold text-[#111827]">
              Alasan:
            </label>
            <textarea
              id="dugaan_alasan"
              name="answers.dugaan_alasan"
              defaultValue={getValue("dugaan_alasan")}
              rows={4}
              required
              placeholder="Tuliskan alasanmu..."
              className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </div>
        </div>

        <div className="rounded-[24px] overflow-hidden border border-[#F5E3A0]">
          <EditablePageImage
            imageKey="M5-P2-L4-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={tahukahImage}
            alt="Tahukah Kamu? Banyak benda di sekitar kita menggunakan prinsip skala, misalnya maket rumah, miniatur gedung, model jembatan, dan lainnya"
            editable={editFoto}
            natural
            containerClassName="relative w-full"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/3`} />
        <NextStepButton />
      </div>
    </form>
  );
}
