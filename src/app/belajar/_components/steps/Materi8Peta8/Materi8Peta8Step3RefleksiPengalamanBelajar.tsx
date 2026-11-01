import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi8Peta8Step3RefleksiPengalamanBelajar({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = (initialAnswers ?? {}) as Record<string, string | undefined>;

  const gambar = await Promise.all(
    (["M8-P8-L3-1", "M8-P8-L3-2", "M8-P8-L3-3"] as const).map((k) => getPageImage(k)),
  );

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={6} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" strokeLinejoin="round">
            <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Refleksi Diri
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Refleksi Pengalaman Belajar
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col gap-5">
            <p className="m-0 text-sm text-[#4B5563]">Lengkapilah kalimat berikut.</p>
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_140px] gap-4 items-center">
              <label className="flex flex-col gap-2 text-sm font-semibold text-[#111827]">
              <span className="flex items-start gap-2.5">Hari ini saya memahami bahwa …</span>
              <textarea
                name="answers.pengalaman_memahami"
                required
                rows={3}
                defaultValue={answers.pengalaman_memahami ?? ""}
                className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#111827] outline-none focus:border-[#2563EB]"
              />
              </label>
              <EditablePageImage
                imageKey="M8-P8-L3-1"
                materi={materi}
                peta={peta}
                step={step}
                urutan="1"
                src={gambar[0]}
                alt="Ilustrasi pernyataan refleksi 1"
                editable={editFoto}
                natural
                containerClassName="relative w-full max-w-[140px] mx-auto overflow-hidden"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_140px] gap-4 items-center">
              <label className="flex flex-col gap-2 text-sm font-semibold text-[#111827]">
              <span className="flex items-start gap-2.5">Strategi yang paling membantu saya adalah …</span>
              <textarea
                name="answers.pengalaman_strategi"
                required
                rows={3}
                defaultValue={answers.pengalaman_strategi ?? ""}
                className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#111827] outline-none focus:border-[#2563EB]"
              />
              </label>
              <EditablePageImage
                imageKey="M8-P8-L3-2"
                materi={materi}
                peta={peta}
                step={step}
                urutan="2"
                src={gambar[1]}
                alt="Ilustrasi pernyataan refleksi 2"
                editable={editFoto}
                natural
                containerClassName="relative w-full max-w-[140px] mx-auto overflow-hidden"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_140px] gap-4 items-center">
              <label className="flex flex-col gap-2 text-sm font-semibold text-[#111827]">
              <span className="flex items-start gap-2.5">Hal yang masih ingin saya pelajari adalah …</span>
              <textarea
                name="answers.pengalaman_ingin_dipelajari"
                required
                rows={3}
                defaultValue={answers.pengalaman_ingin_dipelajari ?? ""}
                className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#111827] outline-none focus:border-[#2563EB]"
              />
              </label>
              <EditablePageImage
                imageKey="M8-P8-L3-3"
                materi={materi}
                peta={peta}
                step={step}
                urutan="3"
                src={gambar[2]}
                alt="Ilustrasi pernyataan refleksi 3"
                editable={editFoto}
                natural
                containerClassName="relative w-full max-w-[140px] mx-auto overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/2`} />
        <NextStepButton />
      </div>
    </form>
  );
}
