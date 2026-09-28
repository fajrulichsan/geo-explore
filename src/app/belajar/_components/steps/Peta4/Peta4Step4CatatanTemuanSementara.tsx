import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";

export default function Peta4Step4CatatanTemuanSementara({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={8} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="flex-shrink-0">
            <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2zM12 11l8-4.5M12 11v9M12 11L4 6.5" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] leading-tight font-extrabold text-[#111827]">
            Ayo Mengeksplorasi dengan GeoGebra 3D
          </h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 3 dari 6 – Discovery Learning
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 items-start">
        <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Catatan Temuan Sementara
          </div>
        </div>
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-4 flex flex-col gap-3">
            <label htmlFor="q1" className="flex items-center gap-3 text-sm font-bold text-[#111827]">
              <span className="w-9 h-9 rounded-full bg-[#DCFCE7] flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#166534" strokeWidth="2.4"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
              </span>
              Informasi baru apa yang kamu temukan?
            </label>
            <textarea
              id="q1"
              name="answers.informasi_baru_geogebra"
              defaultValue={getValue("informasi_baru_geogebra")}
              rows={3}
              placeholder="Tuliskan temuan barumu di sini..."
              required
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
            />
          </div>
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-4 flex flex-col gap-3">
            <label htmlFor="q2" className="flex items-center gap-3 text-sm font-bold text-[#111827]">
              <span className="w-9 h-9 rounded-full bg-[#FFEDD5] flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C2410C" strokeWidth="2.6" strokeLinecap="round"><path d="M9 9a3 3 0 1 1 4.5 2.6c-1 .6-1.5 1.2-1.5 2.4M12 18h.01" /></svg>
              </span>
              Bagian mana yang masih belum jelas?
            </label>
            <textarea
              id="q2"
              name="answers.bagian_belum_jelas"
              defaultValue={getValue("bagian_belum_jelas")}
              rows={3}
              placeholder="Tuliskan bagian yang belum jelas..."
              required
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Persiapan Eksplorasi AR
          </div>
        </div>
          <div className="bg-[#EFF4FF] border border-[#DBE5FB] rounded-[20px] p-5 flex items-center gap-5">
            <svg width="72" height="96" viewBox="0 0 48 64" fill="none" className="flex-shrink-0">
              <rect x="4" y="2" width="40" height="60" rx="6" fill="#111827" />
              <rect x="8" y="8" width="32" height="46" rx="3" fill="#fff" />
              <path d="M24 20l7 4v8l-7 4-7-4v-8l7-4zM17 24l7 4 7-4M24 28v8" stroke="#2563EB" strokeWidth="1.6" strokeLinejoin="round" />
              <rect x="26" y="46" width="20" height="14" rx="7" fill="#1E3A8A" />
              <text x="36" y="56" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff">AR</text>
            </svg>
            <div className="flex flex-col gap-2 text-sm leading-[1.6] text-[#1E3A8A]">
              <p className="m-0 font-semibold">Masih ada bagian yang belum terlihat jelas atau belum dapat diamati dengan baik?</p>
              <p className="m-0 font-semibold text-[#2563EB]">
                Gunakan Augmented Reality (AR) pada halaman berikutnya untuk melengkapi hasil pengamatanmu.
              </p>
            </div>
          </div>
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
