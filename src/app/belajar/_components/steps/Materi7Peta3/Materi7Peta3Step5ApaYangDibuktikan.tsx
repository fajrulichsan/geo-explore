import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";

export default async function Materi7Peta3Step5ApaYangDibuktikan({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";
  const getChecked = (key: string) => Boolean(answers[key]);


  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 2 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
            <circle cx="9" cy="12" r="0.6" />
            <circle cx="12.5" cy="12" r="0.6" />
            <circle cx="16" cy="12" r="0.6" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Berdiskusi
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            H
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Apa yang Akan Dibuktikan?
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Pilih dugaan yang akan dibuktikan melalui eksplorasi GeoGebra 3D dan AR. Kamu dapat memilih lebih dari satu.
        </p>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          {[
            { key: "bukti_1", label: "Tiga kali isi satu limas dapat memenuhi tepat satu prisma." },
            { key: "bukti_2", label: "Volume satu limas mempunyai hubungan tertentu dengan volume satu prisma yang memiliki luas alas dan tinggi yang sama." },
            { key: "bukti_3", label: "Volume limas dipengaruhi oleh luas alas." },
            { key: "bukti_4", label: "Volume limas dipengaruhi oleh tinggi limas." },
            { key: "bukti_5", label: "Jika luas alas atau tinggi limas berubah, maka volume limas juga berubah." },
          ].map((r, i) => (
            <label key={r.key} className="flex items-start gap-2.5 cursor-pointer">
              <input type="checkbox" name={`answers.${r.key}`} defaultChecked={getChecked(r.key)} className="mt-0.5 w-4 h-4 flex-shrink-0 accent-[#2563EB]" />
              <span className="text-sm text-[#374151] leading-[1.5]">
                <span className="font-bold text-[#2563EB]">{i + 1}.</span> {r.label}
              </span>
            </label>
          ))}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="bukti_lain" className="text-sm text-[#374151]">
              <span className="font-bold text-[#2563EB]">6.</span> Dugaan lain:
            </label>
            <input id="bukti_lain" type="text" name="answers.bukti_lain" defaultValue={getValue("bukti_lain")} placeholder="Tuliskan dugaan lain (opsional)..." className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
          </div>
        </div>
        <div className="flex items-start gap-3 bg-[#FEF2F2] border border-[#FECACA] rounded-[20px] p-4 sm:p-5">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.2" className="flex-shrink-0 mt-0.5">
            <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.4 1 2.5h6c0-1.1.3-1.8 1-2.5A6 6 0 0 0 12 3z" />
          </svg>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            <span className="font-extrabold text-[#111827]">Ingat! </span>
            Utamakan memilih dugaan <span className="font-bold text-[#DC2626]">yang paling berkaitan</span> dengan masalah utama, yaitu hubungan volume satu limas dengan volume prisma yang memiliki luas alas dan tinggi yang sama. Kamu tetap boleh memilih lebih dari satu dugaan jika relevan.
          </p>
        </div>
      </div>

      <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-5 sm:p-6 flex flex-col gap-3">
        <h3 className="m-0 text-sm font-extrabold text-[#166534]">Mengapa dugaan ini penting?</h3>
        <p className="m-0 text-sm text-[#374151] leading-[1.6]">
          Tuliskan alasan mengapa dugaan yang kamu pilih perlu dibuktikan terlebih dahulu melalui GeoGebra 3D dan AR.
        </p>
            <label htmlFor="alasan_penting" className="sr-only">
              Alasan dugaan ini penting untuk dibuktikan
            </label>
            <textarea id="alasan_penting" name="answers.alasan_penting" defaultValue={getValue("alasan_penting")} rows={4} placeholder="Ketik jawabanmu di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
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
