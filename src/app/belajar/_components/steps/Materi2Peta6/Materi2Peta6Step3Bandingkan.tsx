import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const kotak = [
  {
    key: "persamaan",
    judul: "Persamaan",
    tanya: "Apa hasil yang sama?",
    wrap: "border-[#BBF7D0] bg-[#F3FCF6]",
    title: "text-[#166534]",
    ring: "focus:border-[#16A34A]",
    rows: 3,
  },
  {
    key: "perbedaan",
    judul: "Perbedaan",
    tanya: "Apa hasil yang berbeda?",
    wrap: "border-[#FECACA] bg-[#FFF5F5]",
    title: "text-[#B91C1C]",
    ring: "focus:border-[#DC2626]",
    rows: 3,
  },
  {
    key: "mengapa_berbeda",
    judul: "Mengapa Berbeda?",
    tanya: "Apa kemungkinan penyebab perbedaan tersebut?",
    wrap: "border-[#FDE68A] bg-[#FFFBEB]",
    title: "text-[#B45309]",
    ring: "focus:border-[#D97706]",
    rows: 4,
  },
];

export default async function Materi2Peta6Step3Bandingkan({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={4} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 5 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] p-6 flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">C</div>
            <h2 className="m-0 text-lg font-bold text-[#111827]">Bandingkan dengan Kelompok Lain</h2>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">Bandingkan hasil verifikasimu dengan kelompok lain.</p>
        </div>

        <div className="flex flex-col gap-4">
          {kotak.map((k) => (
            <div key={k.key} className={`rounded-2xl border p-4 flex flex-col gap-2 ${k.wrap}`}>
              <p className={`m-0 text-base font-extrabold ${k.title}`}>{k.judul}</p>
              <p className="m-0 text-xs font-semibold text-[#374151]">{k.tanya}</p>
              <textarea
                name={`answers.${k.key}`}
                defaultValue={getValue(k.key)}
                required
                rows={k.rows}
                className={`w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:outline-none transition-colors resize-y ${k.ring}`}
              />
            </div>
          ))}
        </div>
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
