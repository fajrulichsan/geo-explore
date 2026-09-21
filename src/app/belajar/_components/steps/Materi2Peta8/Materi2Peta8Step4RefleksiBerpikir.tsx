import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";

const caraBelajar = [
  { key: "mengamati", label: "Mengamati gambar", icon: (<><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" /><circle cx="12" cy="12" r="3" /></>) },
  { key: "berdiskusi", label: "Berdiskusi", icon: (<><path d="M8 12a4 4 0 118 0 4 4 0 01-8 0z" /><path d="M2 20c0-3 3-5 6-5M22 20c0-3-3-5-6-5" /></>) },
  { key: "geogebra", label: "GeoGebra 3D", icon: (<><rect x="3" y="4" width="18" height="12" rx="1.5" /><path d="M8 20h8" /></>) },
  { key: "ar", label: "Augmented Reality (AR)", icon: (<><path d="M12 2l9 5v10l-9 5-9-5V7z" /><path d="M3 7l9 5 9-5M12 12v10" /></>) },
  { key: "verifikasi", label: "Verifikasi", icon: (<><circle cx="12" cy="12" r="10" /><path d="M8 12.5l2.5 2.5L16 9.5" /></>) },
  { key: "menyimpulkan", label: "Menyusun kesimpulan", icon: (<path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0012 2z" />) },
];

export default async function Materi2Peta8Step4RefleksiBerpikir({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={5} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Refleksi Diri</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#EA580C] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          D
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#C2410C]">
          Refleksi Berpikir
        </div>
      </div>

      <div className="flex flex-col gap-6 bg-[#FFF7ED] border border-[#FED7AA] rounded-[20px] p-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="p8-pengetahuan-baru" className="text-sm font-bold text-[#C2410C]">1. Apa pengetahuan baru yang kamu peroleh pada submateri ini?</label>
          <textarea id="p8-pengetahuan-baru" name="answers.pengetahuan_baru" defaultValue={getValue("pengetahuan_baru")} rows={3} placeholder="Tulis pengetahuan barumu di sini..." required className="w-full resize-none rounded-lg border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors" />
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <p className="m-0 text-sm font-bold text-[#C2410C]">2. Bagaimana cara kamu menemukan jawaban tersebut?</p>
            <p className="m-0 text-xs text-[#9A3412]">(Pilih yang paling sesuai, boleh lebih dari satu)</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
              {caraBelajar.map((c) => (
                <label
                  key={c.key}
                  className="flex flex-col items-center gap-2 bg-white border border-[#E5E7EB] rounded-xl py-3 px-1.5 cursor-pointer hover:border-[#2563EB] has-[:checked]:bg-[#EFF4FF] has-[:checked]:border-[#2563EB] transition-colors"
                >
                  <input type="checkbox" name={`answers.cara_${c.key}`} value="true" defaultChecked={getValue(`cara_${c.key}`) === "true"} className="peer sr-only" />
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2" className="peer-checked:hidden">{c.icon}</svg>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="hidden peer-checked:block">{c.icon}</svg>
                  <span className="text-[11px] font-semibold text-[#6B7280] text-center leading-tight">{c.label}</span>
                </label>
              ))}
            </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="p8-cara-alasan" className="text-sm font-bold text-[#C2410C]">Jelaskan singkat cara dan alasanya.</label>
          <textarea id="p8-cara-alasan" name="answers.cara_dan_alasan" defaultValue={getValue("cara_dan_alasan")} rows={3} placeholder="Jelaskan di sini..." required className="w-full resize-none rounded-lg border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors" />
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
