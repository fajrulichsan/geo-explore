import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Peta9Step2SatuBangunBanyakKelompok({ materi, peta, editFoto, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const kubus = await getPageImage("M1-P9-L2-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={7} />
        <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-4 text-xs font-bold tracking-[0.06em] w-fit">
          SUBMATERI 1 &mdash; BANGUN RUANG SISI DATAR
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Tantangan Open-Ended</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#16A34A]">
            Tantangan 2. Satu Bangun, Banyak Kelompok
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
              <p className="m-0 text-sm font-bold text-[#111827] leading-[1.5]">
                Apakah kubus dapat dimasukkan ke lebih dari satu kelompok? Tuliskan minimal dua kelompok berbeda
                yang dapat memuat kubus. Berikan alasan matematis.
              </p>
            </div>
            <EditablePageImage
              imageKey="M1-P9-L2-1"
              materi={materi}
              peta={peta}
              step="2"
              urutan="1"
              src={kubus}
              alt="Ilustrasi kubus"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-16 h-16 mx-auto bg-[#EFF4FF] rounded-xl"
            />
            <textarea
              name="answers.kubus_kelompok"
              defaultValue={getValue("kubus_kelompok")}
              rows={4}
              placeholder="Tuliskan minimal dua kelompok dan alasannya..."
              required
              className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm resize-y focus:border-[#16A34A] focus:outline-none focus:bg-white transition-colors"
            />
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
              <p className="m-0 text-sm font-bold text-[#111827] leading-[1.5]">
                Pilih satu bangun ruang selain kubus. Apakah bangun tersebut juga dapat termasuk ke lebih dari
                satu kelompok? Jelaskan alasannya.
              </p>
            </div>
            <input
              type="text"
              name="answers.bangun_pilihan"
              defaultValue={getValue("bangun_pilihan")}
              placeholder="Bangun ruang yang kamu pilih..."
              required
              className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm focus:border-[#16A34A] focus:outline-none focus:bg-white transition-colors"
            />
            <textarea
              name="answers.bangun_pilihan_alasan"
              defaultValue={getValue("bangun_pilihan_alasan")}
              rows={3}
              placeholder="Jelaskan alasannya..."
              required
              className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm resize-y focus:border-[#16A34A] focus:outline-none focus:bg-white transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/1`} />
        <NextStepButton />
      </div>
    </form>
  );
}
