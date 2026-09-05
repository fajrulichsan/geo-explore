import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

function SisiSvg({ size }: { size: "kecil" | "besar" }) {
  const s = size === "kecil" ? 46 : 74;
  const w = s + 12;
  return (
    <svg width={w} height={w} viewBox={`0 0 ${w} ${w}`} fill="none">
      <rect x="6" y="6" width={s} height={s} rx="3" fill="#2563EB" fillOpacity="0.28" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 3" />
    </svg>
  );
}

export default async function Materi5Peta2Step2LuasSalahSatuSisi({
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
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={9} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengamati dan Berpikir</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Perhatikan Luas Salah Satu Sisi
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col items-center gap-2">
              <p className="m-0 text-sm font-bold text-[#374151]">Kubus kecil — Satu sisi</p>
              <SisiSvg size="kecil" />
              <div className="bg-[#EFF6FF] rounded-full py-1.5 px-4 text-sm font-bold text-[#2563EB]">4 × 4</div>
              <p className="m-0 text-xs text-[#9CA3AF]">(hitunglah sendiri)</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="m-0 text-sm font-bold text-[#374151]">Kubus besar — Satu sisi</p>
              <SisiSvg size="besar" />
              <div className="bg-[#EFF6FF] rounded-full py-1.5 px-4 text-sm font-bold text-[#2563EB]">8 × 8</div>
              <p className="m-0 text-xs text-[#9CA3AF]">(hitunglah sendiri)</p>
            </div>
          </div>
        </div>

        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-6 flex flex-col gap-3">
          <p className="m-0 text-sm font-bold text-[#78350F] flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
              <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
            </svg>
            Pertanyaan
          </p>
          <label htmlFor="pertanyaan_luas_sisi" className="text-sm text-[#374151]">
            Apakah perubahan luas sisi sama dengan perubahan panjang sisinya? Jelaskan dugaanmu.
          </label>
          <textarea
            id="pertanyaan_luas_sisi"
            name="answers.pertanyaan_luas_sisi"
            defaultValue={getValue("pertanyaan_luas_sisi")}
            rows={4}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-white p-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
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
