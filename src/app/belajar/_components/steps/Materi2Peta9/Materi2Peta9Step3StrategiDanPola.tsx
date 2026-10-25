import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi2Peta9Step3StrategiDanPola({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const brainImage = await getPageImage("M2-P9-L3-1");
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={5} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Tantangan Terbuka
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              C
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#16A34A]">
              Strategi dan Cara Berpikir
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex-1 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <EditablePageImage
                imageKey="M2-P9-L3-1"
                materi={materi}
                peta={peta}
                step={step}
                urutan="1"
                src={brainImage}
                alt="Otak dengan bola lampu menyala"
                editable={editFoto}
                imageClassName="object-contain"
                containerClassName="relative w-12 h-10 flex-shrink-0"
              />
              <p className="m-0 text-sm text-[#374151] leading-[1.6]">
                Tuliskan berbagai cara atau strategi yang kamu gunakan untuk menemukan
                jaring-jaring kubus.
              </p>
            </div>
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#EFFDF4] text-[#16A34A] flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {n}
                </span>
                <input
                  type="text"
                  name={`answers.strategi_${n}`}
                  defaultValue={getValue(`strategi_${n}`)}
                  required={n <= 2}
                  placeholder={n <= 2 ? "Strategimu..." : "Strategimu (opsional)..."}
                  className="flex-1 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              D
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Pola yang Kamu Temukan
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex-1 flex flex-col gap-4">
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">
              Apakah kamu menemukan pola tertentu dari jaring-jaring kubus yang kamu buat? Jika
              ya, tuliskan pola tersebut.
            </p>
            <div className="flex-1 flex flex-col gap-1.5">
              <label htmlFor="pola" className="text-sm font-semibold text-[#111827]">
                Pola yang saya temukan:
              </label>
              <textarea
                id="pola"
                name="answers.pola_ditemukan"
                defaultValue={getValue("pola_ditemukan")}
                rows={7}
                required
                placeholder="Tuliskan pola yang kamu temukan..."
                className="w-full flex-1 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
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
