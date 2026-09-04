import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const refleksi = [
  { key: "pola_eksplorasi", label: "Saya menemukan pola dari hasil eksplorasi." },
  { key: "alasan_kelompok", label: "Saya yakin dapat menjelaskan alasan kelompok tentang jaring-jaring yang valid dan yang tidak." },
  { key: "hubungan_posisi", label: "Saya mulai memahami hubungan posisi sisi dengan hasil lipatan." },
  { key: "kelompokkan_informasi", label: "Saya dapat mengelompokkan informasi dengan tepat." },
  { key: "pertanyaan_lanjut", label: "Saya masih memiliki pertanyaan yang ingin saya selidiki lebih lanjut." },
];

export default async function Materi2Peta5Step5RefleksiSingkat({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getBool = (key: string) => answers[key] === "on" || answers[key] === true;

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={5} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Refleksi Singkat
          </div>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <p className="m-0 text-sm text-[#4B5563]">Berilah tanda centang (✓) pada pernyataan yang sesuai denganmu.</p>
          {refleksi.map((r) => (
            <label
              key={r.key}
              className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-3.5 cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF] transition-colors"
            >
              <input
                type="checkbox"
                name={`answers.refleksi_${r.key}`}
                defaultChecked={getBool(`refleksi_${r.key}`)}
                data-require-group="refleksi-singkat"
                className="mt-0.5 accent-[#2563EB]"
              />
              <span className="text-sm font-semibold text-[#374151]">{r.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] px-7 py-8 sm:px-10 sm:py-9">
        <div className="absolute -right-10 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <div className="absolute -right-4 bottom-[-40px] w-32 h-32 rounded-full bg-white/10" />
        <div className="relative flex items-center gap-3 mb-3">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" className="flex-shrink-0">
            <path d="M8 21h8M12 17v4M12 3a5 5 0 015 5c0 2.5-1.5 3.5-2 5-.3.8-.5 1.5-.5 2.5h-5c0-1-.2-1.7-.5-2.5-.5-1.5-2-2.5-2-5a5 5 0 015-5z" />
          </svg>
          <div className="bg-white/15 border border-white/25 rounded-full py-2 px-5 text-sm font-bold text-white">
            Kotak Motivasi
          </div>
        </div>
        <p className="relative m-0 max-w-xl text-[15px] leading-[1.6] text-white/90">
          Tidak semua kelompok harus memperoleh klasifikasi yang sama. Yang terpenting adalah alasan
          matematis yang kalian gunakan dapat dijelaskan dengan logis!
        </p>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
