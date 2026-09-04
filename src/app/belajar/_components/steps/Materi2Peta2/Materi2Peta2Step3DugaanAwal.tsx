import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

export default async function Materi2Peta2Step3DugaanAwal({
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
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={7} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
            <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              C
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Dugaan Awal
            </div>
          </div>
          <div className="flex-1 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] rounded-[24px] p-7 flex flex-col justify-center gap-4 text-white">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
              <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
              <circle cx="12" cy="12" r="4" />
            </svg>
            <p className="m-0 text-[15px] leading-[1.7] text-white/90">
              Berdasarkan hasil pengamatanmu, menurutmu seperti apakah ciri-ciri susunan bidang datar
              yang dapat dilipat menjadi bangun ruang?
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 relative rounded-[24px] bg-[repeating-linear-gradient(to_bottom,white_0,white_35px,#EEF2FF_36px)] border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] p-6 sm:p-8 flex flex-col">
          <label htmlFor="dugaan-awal" className="mb-2 text-sm font-bold text-[#374151]">
            Tuliskan dugaan awalmu
          </label>
          <textarea
            id="dugaan-awal"
            name="answers.dugaan_awal"
            defaultValue={getValue("dugaan_awal")}
            rows={7}
            placeholder="Ketik dugaan awalmu di sini..."
            required
            className="w-full flex-1 bg-transparent border-none p-0 text-sm text-[#374151] leading-[36px] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-0 resize-none"
          />
        </div>
      </div>

      <div className="mt-0 pt-6 border-t border-[#E5E7EB]">
        <PhotoUpload
          name="answers.foto_bukti"
          label="Unggah foto hasil kerja (opsional)"
          defaultValue={getValue("foto_bukti")}
          materi={materi}
          peta={peta}
        />
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-[#EFF4FF] py-4 px-6 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="m-0 text-sm font-bold text-[#1D4ED8] leading-[1.5]">
          Hebat! Kamu sudah mulai mengamati dan berpikir. Selanjutnya kita akan berdiskusi dan meneliti
          lebih lanjut bersama kelompokmu.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
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
