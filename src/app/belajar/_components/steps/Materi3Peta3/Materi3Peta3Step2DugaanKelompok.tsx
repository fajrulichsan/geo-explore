import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi3Peta3Step2DugaanKelompok({
  materi,
  peta,
  step = "2",
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
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={6} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 items-start">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              B
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Tuliskan Dugaan Kelompok
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3 flex-1">
            <label htmlFor="dugaan_cara" className="text-sm text-[#4B5563]">
              Lengkapilah kalimat berikut.
              <br />
              <span className="font-bold text-[#111827]">
                Menurut kelompok kami, luas permukaan bangun ruang diperoleh dengan cara ....
              </span>
            </label>
            <textarea
              id="dugaan_cara"
              name="answers.dugaan_cara"
              defaultValue={getValue("dugaan_cara")}
              rows={6}
              placeholder="Ketik jawabanmu di sini..."
              required
              className="w-full flex-1 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              C
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Alasan Dugaan
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3 flex-1">
            <label htmlFor="alasan_dugaan" className="text-sm font-bold text-[#111827]">
              Apa alasan kelompokmu?
            </label>
            <textarea
              id="alasan_dugaan"
              name="answers.alasan_dugaan"
              defaultValue={getValue("alasan_dugaan")}
              rows={6}
              placeholder="Ketik jawabanmu di sini..."
              required
              className="w-full flex-1 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
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
            Belum tentu dugaanmu benar. Yang penting, dugaan tersebut mempunyai alasan yang logis.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3 bg-white border border-[#E5E7EB] rounded-2xl px-5 py-4">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="mt-0.5 flex-shrink-0">
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="8" r="3" />
          <path d="M2 20c0-3 3-5 7-5s7 2 7 5M13 20c0-2.5 2.5-4.5 6-4.5s5 2 5 4.5" />
        </svg>
        <p className="m-0 text-xs leading-[1.7] text-[#374151]">
          Diskusikan dengan teman sekelompokmu (3&ndash;4 orang). Dengarkan pendapat semua anggota dan
          tuliskan hasil diskusi kelompokmu.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
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
