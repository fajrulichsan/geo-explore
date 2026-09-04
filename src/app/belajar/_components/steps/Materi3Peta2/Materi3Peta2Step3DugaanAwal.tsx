import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

export default async function Materi3Peta2Step3DugaanAwal({
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
        <StepHeader materi={materi} currentStep={3} totalSteps={6} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              E
            </div>
            <h3 className="m-0 text-lg font-bold text-[#111827]">Dugaan Awal</h3>
          </div>
          <label htmlFor="dugaan_awal" className="text-sm text-[#4B5563]">
            Tuliskan dugaan atau pendapatmu.
          </label>
          <textarea
            id="dugaan_awal"
            name="answers.dugaan_awal"
            defaultValue={getValue("dugaan_awal")}
            rows={5}
            placeholder="Menurutku, luas permukaan suatu bangun ruang diperoleh dari ...."
            required
            className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
          />
        </div>

        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-6 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#F59E0B" className="flex-shrink-0">
              <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
            </svg>
            <h3 className="m-0 text-lg font-bold text-[#92400E]">Tahukah Kamu?</h3>
          </div>
          <p className="m-0 text-sm leading-[1.6] text-[#374151]">
            Jaring-jaring membantu kita melihat seluruh sisi bangun ruang dalam keadaan terbuka. Dengan
            demikian, kita dapat memperhatikan bentuk dan jumlah setiap sisinya.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] px-6 py-5 sm:px-8 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M7 10v6M12 6v10M17 3v13M4 21h16" />
          </svg>
        </div>
        <p className="relative m-0 text-sm leading-[1.6] text-white/90">
          Hebat! Kamu telah mengamati hubungan bangun ruang dengan jaring-jaring. Sekarang, mari kita
          mengamati lebih teliti pada halaman berikutnya.
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
