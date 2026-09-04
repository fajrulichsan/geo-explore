import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

export default async function Materi3Peta5Step5RumusSementara({
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
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 4
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Ayo Mengolah Informasi
        </h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Temukan Pola Luas Permukaan</p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            E
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Rumus Sementara</h2>
        </div>
        <p className="m-0 text-sm text-[#374151]">Lengkapilah kalimat berikut.</p>
        <p className="m-0 text-xs text-[#6B7280]">
          Gunakan hasil pengelompokan dan perhitungan yang telah kamu lakukan.
        </p>

        <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-4 flex flex-col gap-2">
          <label htmlFor="rumus_sementara" className="text-sm font-semibold text-[#111827]">
            Menurut kelompok kami, luas permukaan diperoleh dengan
          </label>
          <textarea
            id="rumus_sementara"
            name="answers.rumus_sementara"
            defaultValue={getValue("rumus_sementara")}
            rows={4}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
          />
        </div>

        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl p-4 flex flex-col gap-2">
          <p className="m-0 flex items-center gap-2 text-sm font-bold text-[#2563EB]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v5M12 16.5v.01" />
            </svg>
            Pertanyaan
          </p>
          <label htmlFor="berlaku_semua_bangun" className="text-sm text-[#374151]">
            Apakah menurutmu cara tersebut berlaku untuk kubus, balok, dan berbagai prisma?
            Jelaskan.
          </label>
          <textarea
            id="berlaku_semua_bangun"
            name="answers.berlaku_semua_bangun"
            defaultValue={getValue("berlaku_semua_bangun")}
            rows={3}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#BFDBFE] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
          />
        </div>

        <div className="flex items-start gap-3 bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl px-5 py-4">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.2" className="mt-0.5 flex-shrink-0">
            <path d="M9 18h6M10 22h4M12 2a6 6 0 00-3.4 10.9c.6.4 1 1.1 1 1.8v.3h4.8v-.3c0-.7.4-1.4 1-1.8A6 6 0 0012 2z" />
          </svg>
          <p className="m-0 text-xs leading-[1.7] text-[#92400E] font-semibold">
            Tuliskan dalam bentuk kalimat terlebih dahulu sebelum menggunakan simbol matematika.
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
