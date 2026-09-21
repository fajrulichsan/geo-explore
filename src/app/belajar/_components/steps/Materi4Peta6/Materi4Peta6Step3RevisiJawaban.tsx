import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const inputClass =
  "w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y";

const baris = [1, 2, 3, 4];

export default async function Materi4Peta6Step3RevisiJawaban({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={5} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold w-fit">
          Submateri 4 &middot; Tahap 5
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          C
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-[#2563EB]">Revisi Jawaban</span>
          <span className="text-xs text-[#6B7280]">
            Apabila setelah berdiskusi terdapat cara atau bagian yang perlu diperbaiki, tuliskan hasil revisimu berikut
            alasan revisinya.
          </span>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] overflow-hidden">
        <div className="hidden sm:grid grid-cols-2 bg-[#1E3A8A] text-white text-center">
          <div className="px-4 py-3">
            <div className="text-sm font-bold">Yang Direvisi</div>
            <div className="text-xs opacity-80">(Bagian/Jawaban)</div>
          </div>
          <div className="px-4 py-3">
            <div className="text-sm font-bold">Alasan Revisi</div>
            <div className="text-xs opacity-80">(Bukti atau Alasan Matematis)</div>
          </div>
        </div>
        <div className="p-4 sm:p-5 flex flex-col gap-3">
          {baris.map((n) => (
            <div key={n} className="grid sm:grid-cols-2 gap-3">
              <textarea
                name={`answers.revisi_${n}`}
                defaultValue={getValue(`revisi_${n}`)}
                rows={2}
                required={n === 1}
                placeholder="Yang direvisi..."
                aria-label={`Yang direvisi ${n}`}
                className={inputClass}
              />
              <textarea
                name={`answers.alasan_${n}`}
                defaultValue={getValue(`alasan_${n}`)}
                rows={2}
                required={n === 1}
                placeholder="Alasan revisi..."
                aria-label={`Alasan revisi ${n}`}
                className={inputClass}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl px-5 py-4 flex items-start gap-3">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="flex-shrink-0 mt-0.5" aria-hidden="true">
          <path d="M9 5H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-3M9 5a2 2 0 002 2h2a2 2 0 002-2 2 2 0 00-2-2h-2a2 2 0 00-2 2zM9 13l2 2 4-4" />
        </svg>
        <p className="m-0 text-sm text-[#1D4ED8] leading-[1.6]">
          <span className="font-bold">Catatan:</span> Tuliskan bagian yang berubah setelah memperoleh bukti atau alasan
          matematis yang lebih tepat.
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
