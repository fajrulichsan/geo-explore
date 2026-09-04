import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi3Peta3Step5DugaanUntukDiuji({
  materi,
  peta,
  step = "5",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const ingatImage = await getPageImage("M3-P3-L2-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={6} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 items-start">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              G
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#16A34A]">
              Dugaan Kelompok untuk Diuji
            </div>
          </div>
          <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-6 flex flex-col gap-3 flex-1">
            <div className="inline-flex items-center bg-white border border-[#BBF7D0] text-[#16A34A] rounded-full py-1 px-3 text-xs font-bold w-fit">
              Langkah 2
            </div>
            <label htmlFor="dugaan_diuji" className="text-sm text-[#374151]">
              Setelah mempertimbangkan alasan setiap anggota, tuliskan satu dugaan yang disepakati
              kelompokmu untuk diuji pada tahap eksplorasi berikutnya.
            </label>
            <textarea
              id="dugaan_diuji"
              name="answers.dugaan_diuji"
              defaultValue={getValue("dugaan_diuji")}
              rows={6}
              placeholder="Ketik jawabanmu di sini..."
              required
              className="w-full flex-1 rounded-2xl border border-[#BBF7D0] bg-white p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none focus:ring-0 transition-colors resize-y"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              H
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#16A34A]">
              Alasan Dugaan
            </div>
          </div>
          <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-6 flex flex-col gap-3 flex-1">
            <div className="inline-flex items-center bg-white border border-[#BBF7D0] text-[#16A34A] rounded-full py-1 px-3 text-xs font-bold w-fit">
              Langkah 3
            </div>
            <label htmlFor="alasan_diuji" className="text-sm text-[#374151]">
              Apa alasan kelompokmu memilih dugaan tersebut?
            </label>
            <textarea
              id="alasan_diuji"
              name="answers.alasan_diuji"
              defaultValue={getValue("alasan_diuji")}
              rows={6}
              placeholder="Ketik jawabanmu di sini..."
              required
              className="w-full flex-1 rounded-2xl border border-[#BBF7D0] bg-white p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none focus:ring-0 transition-colors resize-y"
            />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[20px] bg-[#FEF9E7] border border-[#FDE68A] p-6 flex flex-col items-center text-center gap-3 h-full">
          <EditablePageImage
            imageKey="M3-P3-L2-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={ingatImage}
            alt="Maskot anak laki-laki menunjuk ke atas"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-20 h-24 flex-shrink-0"
          />
          <p className="m-0 text-sm font-bold text-[#92400E]">Kotak Ingat</p>
          <p className="m-0 text-xs leading-[1.6] text-[#78350F]">
            Belum tentu dugaanmu benar. Yang penting, dugaan tersebut memiliki alasan yang logis dan
            siap diuji melalui kegiatan eksplorasi pada tahap berikutnya.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
