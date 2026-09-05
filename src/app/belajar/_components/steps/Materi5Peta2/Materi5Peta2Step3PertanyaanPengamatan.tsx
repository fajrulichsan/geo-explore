import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const pertanyaan = [
  { n: 1, label: "Apa perbedaan utama antara kedua bangun pada setiap pasangan?" },
  { n: 2, label: "Apakah jumlah sisi kedua bangun berubah? Mengapa?" },
  { n: 3, label: "Bagaimana perubahan ukuran panjang pada setiap pasangan bangun?" },
  {
    n: 4,
    label: "Menurutmu, bagaimana perubahan luas setiap sisi ketika semua ukuran panjang diperbesar 2 kali?",
  },
];

export default async function Materi5Peta2Step3PertanyaanPengamatan({
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
        <StepHeader materi={materi} currentStep={3} totalSteps={9} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengamati dan Berpikir</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Pertanyaan Pengamatan
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {pertanyaan.map((q) => (
            <div
              key={q.n}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] focus-within:border-[#2563EB] transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-[30px] h-[30px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {q.n}
                </div>
                <label htmlFor={`pengamatan${q.n}`} className="flex-1 text-[15px] font-bold text-[#111827] pt-0.5">
                  {q.label}
                </label>
              </div>
              <textarea
                id={`pengamatan${q.n}`}
                name={`answers.pengamatan_${q.n}`}
                defaultValue={getValue(`pengamatan_${q.n}`)}
                rows={3}
                placeholder="Ketik jawabanmu di sini..."
                required
                className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
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
