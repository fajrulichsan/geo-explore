import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

export default async function Materi2Peta5Step4DugaanKelompok({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={5} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Dugaan Kelompok
          </div>
        </div>
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-6 sm:p-8 relative">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="#D97706" className="absolute top-5 left-5 opacity-70">
            <path d="M7 8c-2.2 0-4 1.8-4 4v4h4v-4H5c0-1.1.9-2 2-2V8zm10 0c-2.2 0-4 1.8-4 4v4h4v-4h-2c0-1.1.9-2 2-2V8z" />
          </svg>
          <p className="m-0 text-sm font-bold text-[#92400E] mb-3">
            Berdasarkan seluruh informasi yang telah diolah, tuliskan dugaan kelompokmu.
          </p>
          <textarea
            name="answers.dugaan_kelompok"
            defaultValue={getValue("dugaan_kelompok")}
            rows={4}
            placeholder='Menurut kelompok kami, suatu susunan bidang datar dapat disebut jaring-jaring apabila ...'
            required
            className="w-full rounded-2xl border border-[#F5E3A0] bg-white p-4 text-sm text-[#374151] placeholder:text-[#B45309]/70 placeholder:italic focus:border-[#D97706] focus:outline-none transition-colors resize-y"
          />
          <svg width="34" height="34" viewBox="0 0 24 24" fill="#D97706" className="absolute bottom-5 right-5 opacity-70 rotate-180">
            <path d="M7 8c-2.2 0-4 1.8-4 4v4h4v-4H5c0-1.1.9-2 2-2V8zm10 0c-2.2 0-4 1.8-4 4v4h4v-4h-2c0-1.1.9-2 2-2V8z" />
          </svg>
        </div>
      </div>

      <div className="bg-[#EFF4FF] border border-[#DBEAFE] rounded-[20px] p-6 flex items-start gap-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="flex-shrink-0">
          <rect x="6" y="3" width="12" height="18" rx="2" />
          <path d="M9 3V2a1 1 0 011-1h4a1 1 0 011 1v1M9 10h6M9 14h6M9 18h3" />
        </svg>
        <div>
          <p className="m-0 text-sm font-bold text-[#1D4ED8] mb-1">Kotak Ingat</p>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Hasil yang kamu peroleh masih berupa dugaan berdasarkan hasil pengolahan informasi. Pada
            tahap berikutnya, dugaan tersebut akan diperiksa dan dibandingkan kembali dengan bukti serta
            konsep yang relevan.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
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
