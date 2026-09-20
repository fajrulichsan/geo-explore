import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";

const kalimat = [
  { name: "faktor_panjang", awal: "Jika setiap ukuran panjang yang bersesuaian pada suatu bangun ruang diskala dengan faktor", k: true, akhir: "maka" },
  { name: "volume_hasil", awal: "Volume hasil skala bangun ruang akan menjadi", k: false, akhir: "" },
  { name: "hubungan_faktor_volume", awal: "Hubungan antara faktor skala dan volume adalah", k: false, akhir: "" },
];

export default async function Materi8Peta7Step2ApaYangKamuTemukan({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="4" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Menyimpulkan
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Apa yang Kamu Temukan?
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">Lengkapilah kalimat berikut berdasarkan hasil pembelajaran.</p>
        <div className="flex flex-col gap-0">
          {kalimat.map((k, i) => (
            <div key={k.name} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-[#EFF4FF] border border-[#DBEAFE] text-[#2563EB] flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {i + 1}
                </div>
                {i < kalimat.length - 1 && <div className="w-px flex-1 bg-[#DBEAFE]" />}
              </div>
              <div className="flex flex-col gap-2 pb-6 flex-1">
                <p className="m-0 text-sm font-semibold text-[#111827] leading-[1.6]">
                  {k.awal}
                  {k.k && <> <span className="italic">k</span>,</>} {k.akhir}
                </p>
                <textarea
                  name={`answers.${k.name}`}
                  defaultValue={getValue(k.name)}
                  rows={2}
                  required
                  aria-label={k.awal}
                  className="w-full rounded-xl border border-[#E5E7EB] bg-white p-3 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
