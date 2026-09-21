import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";

export default async function Materi3Peta2Step3DugaanAwalTahukahKamu({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const dugaan = typeof answers.dugaan_awal === "string" ? answers.dugaan_awal : "";

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={6} />
        <div className="flex flex-wrap items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengamati dan Berpikir</h1>
          <span className="rounded-full bg-[#2563EB] text-white text-xs font-bold px-3 py-1">Tahap 1 dari 6</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              C
            </div>
            <h3 className="m-0 text-lg font-bold text-[#111827]">Dugaan Awal</h3>
          </div>
          <label htmlFor="dugaan_awal" className="text-sm text-[#4B5563] leading-[1.6]">
            Tuliskan dugaan atau pendapatmu. Menurutku, luas permukaan suatu bangun ruang diperoleh dari ....
          </label>
          <textarea
            id="dugaan_awal"
            name="answers.dugaan_awal"
            defaultValue={dugaan}
            rows={6}
            required
            placeholder="Ketik jawabanmu di sini..."
            className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none resize-y"
          />
        </div>

        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              D
            </div>
            <div className="flex items-center gap-2 bg-[#2563EB] text-white rounded-full py-2 px-5 text-sm font-bold">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" stroke="#F59E0B" strokeWidth="1.5">
                <path d="M12 2l3 6.5 7 .8-5.2 4.8 1.5 7-6.3-3.6-6.3 3.6 1.5-7L2 9.3l7-.8z" />
              </svg>
              Tahukah Kamu?
            </div>
          </div>
          <p className="m-0 text-sm text-[#1E3A8A] leading-[1.8]">
            Jaring-jaring membantu kita melihat seluruh sisi bangun ruang dalam keadaan terbuka. Dengan demikian,
            kita dapat memperhatikan bentuk dan jumlah setiap sisinya.
          </p>
        </div>
      </div>

      <div className="rounded-2xl bg-[#EFF4FF] px-5 py-4 flex items-center gap-3 text-sm text-[#1E3A8A]">
        <span className="text-xl">👍</span>
        <p className="m-0">
          <span className="font-bold">Hebat!</span> Kamu telah mengamati hubungan bangun ruang dengan jaring-jaring.
          Sekarang, mari kita mengamati lebih teliti pada halaman berikutnya.
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
