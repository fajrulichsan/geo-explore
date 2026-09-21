import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";

const baris = [1, 2, 3, 4];

const hasilOpsi = [
  { value: "sesuai", label: "✓ Sesuai" },
  { value: "tidak_sesuai", label: "Tidak Sesuai" },
] as const;

export default async function Materi2Peta6Step2HasilVerifikasi({
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
        <StepHeader materi={materi} currentStep={2} totalSteps={4} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 5 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Verifikasi</h1>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] p-6 flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">B</div>
            <h2 className="m-0 text-lg font-bold text-[#111827]">Hasil Verifikasi Dugaan Kelompok</h2>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">
            Tuliskan hasil verifikasimu terhadap setiap dugaan kelompok yang telah kalian buat pada
            tahap sebelumnya.
          </p>
        </div>

        <ol className="m-0 p-0 list-none flex flex-col gap-4">
          {baris.map((n) => (
            <li key={n} className="rounded-2xl border border-[#DBEAFE] bg-[#F8FAFF] p-4 flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{n}</span>
                <span className="text-sm font-bold text-[#1E3A8A]">Dugaan Kelompok</span>
              </div>
              <textarea
                name={`answers.dugaan_${n}`}
                defaultValue={getValue(`dugaan_${n}`)}
                required
                rows={2}
                placeholder="Tuliskan dugaan kelompokmu"
                className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
              />
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-[#6B7280]">Hasil verifikasi:</span>
                {hasilOpsi.map((opt) => (
                  <label key={opt.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name={`answers.hasil_${n}`}
                      value={opt.value}
                      defaultChecked={getValue(`hasil_${n}`) === opt.value}
                      required
                      className="peer sr-only"
                    />
                    <span className="inline-block rounded-full border border-[#D1D5DB] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#4B5563] peer-checked:bg-[#2563EB] peer-checked:text-white peer-checked:border-[#2563EB] peer-focus-visible:ring-2 peer-focus-visible:ring-[#2563EB]">
                      {opt.label}
                    </span>
                  </label>
                ))}
              </div>
              <textarea
                name={`answers.alasan_${n}`}
                defaultValue={getValue(`alasan_${n}`)}
                required
                rows={2}
                placeholder="Alasan"
                className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
              />
            </li>
          ))}
        </ol>
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
