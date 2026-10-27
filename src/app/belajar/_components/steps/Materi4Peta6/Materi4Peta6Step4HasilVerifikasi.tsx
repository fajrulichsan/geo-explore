import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import { getPageImage } from "@/lib/pageImages";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import StepHeader from "@/app/belajar/_components/StepHeader";

export default async function Materi4Peta6Step4HasilVerifikasi({ materi, peta, initialAnswers, step = "4", editFoto }: StepComponentProps) {
  const gambarLimas = await getPageImage("M4-P6-L4-1");
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={5} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold w-fit">
          Tahap 5 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          D
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-[#16A34A]">Hasil Verifikasi</span>
          <span className="text-xs text-[#6B7280]">Catat hasil verifikasi kelompokmu.</span>
        </div>
      </div>

      <div className="grid sm:grid-cols-5 gap-5 items-center bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-5 sm:p-6">
        <div className="sm:col-span-3 flex flex-col gap-2 focus-within:[&_textarea]:border-[#16A34A]">
          <label htmlFor="hasil_verifikasi" className="text-sm font-bold text-[#166534] leading-[1.5]">
            Berdasarkan hasil verifikasi, hasil yang kami peroleh adalah ...
          </label>
          <textarea
            id="hasil_verifikasi"
            name="answers.hasil_verifikasi"
            defaultValue={getValue("hasil_verifikasi")}
            rows={6}
            placeholder="Tulis hasil verifikasi kelompokmu di sini..."
            required
            className="w-full rounded-2xl border border-[#BBF7D0] bg-white p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:outline-none transition-colors resize-y"
          />
        </div>
        <div className="sm:col-span-2 flex flex-col items-center gap-3">
          <EditablePageImage imageKey="M4-P6-L4-1" materi={materi} peta={peta} step={step} urutan="1" src={gambarLimas} alt="Ilustrasi limas segiempat" editable={editFoto} imageClassName="object-contain" containerClassName="relative w-36 aspect-[439/532]" />
          <p className="m-0 text-xs text-[#374151] bg-white border border-[#BBF7D0] rounded-2xl px-3 py-2 leading-[1.5]">
            Ingat hubungan antara luas alas, luas seluruh sisi tegak, dan luas permukaan limas.
          </p>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 flex flex-col gap-3 focus-within:border-[#16A34A] transition-colors">
        <label htmlFor="mengapa_dijumlahkan" className="flex items-start gap-3 text-sm font-bold text-[#111827] leading-[1.5]">
          <span className="w-6 h-6 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-xs flex-shrink-0">
            ?
          </span>
          Mengapa pada limas luas alas dihitung satu kali, sedangkan luas seluruh sisi tegaknya perlu dijumlahkan?
        </label>
        <textarea
          id="mengapa_dijumlahkan"
          name="answers.mengapa_dijumlahkan"
          defaultValue={getValue("mengapa_dijumlahkan")}
          rows={3}
          placeholder="Tulis jawabanmu di sini..."
          required
          className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none transition-colors resize-y"
        />
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/3`} />
        <NextStepButton />
      </div>
    </form>
  );
}
