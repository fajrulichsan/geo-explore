import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const kolomBandingkan = [
  { key: "sama", label: "Sama", sub: "(Apa yang sama?)", color: "#16A34A", bg: "#ECFDF5", border: "#A7F3D0" },
  { key: "hampir_sama", label: "Hampir Sama", sub: "(Apa yang mirip?)", color: "#D97706", bg: "#FFFBEB", border: "#FDE68A" },
  { key: "berbeda", label: "Berbeda", sub: "(Apa yang berbeda?)", color: "#DC2626", bg: "#FEF2F2", border: "#FECACA" },
];

export default async function Materi4Peta7Step5KesimpulanDanBandingkan({
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
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Luas Permukaan Limas</p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            G
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Kesimpulan Umum Kelompok</h2>
        </div>
        <p className="m-0 -mt-2 text-sm text-[#4B5563]">
          Tuliskan kesimpulan umum kelompokmu tentang cara menentukan luas permukaan limas.
        </p>
        <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-xl px-4 py-2.5">
          <p className="m-0 text-sm font-semibold text-[#2563EB]">Mulai dengan kalimat berikut.</p>
        </div>
        <label htmlFor="kesimpulan_umum" className="text-sm text-[#374151]">
          Kami menyimpulkan bahwa ...
        </label>
        <textarea
          id="kesimpulan_umum"
          name="answers.kesimpulan_umum"
          defaultValue={getValue("kesimpulan_umum")}
          rows={4}
          required
          placeholder="Jawabanmu..."
          className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
        />
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            H
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Bandingkan dengan Kelompok Lain</h2>
        </div>
        <p className="m-0 -mt-2 text-sm text-[#4B5563]">
          Bandingkan kesimpulan kelompokmu dengan kelompok lain.
        </p>

        <div className="grid sm:grid-cols-3 gap-3">
          {kolomBandingkan.map((k) => (
            <div
              key={k.key}
              className="rounded-2xl p-4 flex flex-col gap-2"
              style={{ backgroundColor: k.bg, border: `1px solid ${k.border}` }}
            >
              <div>
                <p className="m-0 text-sm font-bold" style={{ color: k.color }}>
                  {k.label}
                </p>
                <p className="m-0 text-[11px] text-[#6B7280]">{k.sub}</p>
              </div>
              <textarea
                name={`answers.bandingkan_${k.key}`}
                defaultValue={getValue(`bandingkan_${k.key}`)}
                rows={4}
                required
                placeholder="Jawabanmu..."
                className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:outline-none transition-colors resize-y"
                style={{ borderColor: k.border }}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="alasan_berbeda" className="text-sm text-[#374151]">
            Jika berbeda, bagian mana yang berbeda dan apa penyebabnya?
          </label>
          <textarea
            id="alasan_berbeda"
            name="answers.alasan_berbeda"
            defaultValue={getValue("alasan_berbeda")}
            rows={3}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#7C3AED] focus:outline-none transition-colors resize-y"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
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
