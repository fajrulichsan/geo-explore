import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

export default function Peta3Step4RumusanMasalah({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={8} />
        <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Diskusikan dengan teman kelompokmu dan lengkapi rumusan masalah di bawah ini. Pastikan jawaban
          kalian jelas dan spesifik.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          D
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Rumusan Masalah Kelompok
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:col-span-2 bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="m-0 text-base font-bold text-[#111827]">Rumusan masalah kelompok kami</h3>
              <p className="m-0 text-xs text-[#6B7280]">(pertanyaan yang ingin kami selidiki)</p>
            </div>
          </div>
          <textarea
            rows={4}
            name="answers.rumusan_masalah"
            defaultValue={getValue("rumusan_masalah")}
            placeholder="Contoh: Bagaimana pengaruh panjang sisi terhadap luas bangun datar ini?"
            required
            className="w-full min-h-[140px] rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
          />
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#D97706] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              2
            </div>
            <h3 className="m-0 text-base font-bold text-[#111827]">Informasi yang perlu diselidiki</h3>
          </div>
          <textarea
            rows={5}
            name="answers.informasi_diselidiki"
            defaultValue={getValue("informasi_diselidiki")}
            placeholder="Sebutkan data atau fakta apa saja yang perlu kalian kumpulkan..."
            required
            className="w-full min-h-[160px] flex-1 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
          />
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#059669] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="m-0 text-base font-bold text-[#111827]">Dugaan awal kelompok kami</h3>
              <p className="m-0 text-xs text-[#6B7280]">(jawaban sementara yang akan diuji)</p>
            </div>
          </div>
          <textarea
            rows={5}
            name="answers.dugaan_awal"
            defaultValue={getValue("dugaan_awal")}
            placeholder="Menurut hipotesis kami, jawabannya adalah..."
            required
            className="w-full min-h-[160px] flex-1 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
          />
        </div>
      </div>

      <div className="pt-2">
        <PhotoUpload
          name="answers.foto_bukti"
          label="Unggah foto hasil kerja (opsional)"
          defaultValue={getValue("foto_bukti")}
        />
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/3`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
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
