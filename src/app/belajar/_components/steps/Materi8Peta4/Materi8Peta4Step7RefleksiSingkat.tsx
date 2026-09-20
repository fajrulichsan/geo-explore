import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const REFLEKSI = [
  { key: "refleksi_diskusi", text: "Saya aktif berdiskusi dengan kelompok." },
  { key: "refleksi_geogebra", text: "Saya menggunakan GeoGebra 3D dengan baik." },
  { key: "refleksi_ar", text: "Saya menggunakan Augmented Reality (AR) dengan baik." },
  { key: "refleksi_data", text: "Saya dapat mengolah dan mencatat data pengamatan dengan teliti." },
  { key: "refleksi_pola", text: "Saya mulai menemukan pola hubungan faktor skala dan perubahan volume." },
  { key: "refleksi_lanjut", text: "Saya tertarik untuk mempelajari bangun ruang lebih lanjut." },
] as const;

export default async function Materi8Peta4Step7RefleksiSingkat({
  materi,
  peta,
  step = "7",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const isChecked = (key: string) => answers[key] === "ya";
  const gambar1 = await getPageImage("M8-P4-L7-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="7" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={7} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 3 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Bereksplorasi
          </h1>
        </div>
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

        <div className="grid grid-cols-1 sm:grid-cols-[1fr_150px] gap-5 items-end bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col gap-3">
            <p className="m-0 text-sm text-[#4B5563]">Centang (✓) sesuai dengan pengalamanmu selama kegiatan ini.</p>
            {REFLEKSI.map((r) => (
              <label
                key={r.key}
                className="flex items-center gap-3 rounded-xl border border-[#E5E7EB] px-4 py-3 text-sm text-[#374151] leading-[1.5] cursor-pointer has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF4FF]"
              >
                <input type="checkbox" name={`answers.${r.key}`} value="ya" defaultChecked={isChecked(r.key)} className="accent-[#2563EB]" />
                {r.text}
              </label>
            ))}
          </div>
          <EditablePageImage
            imageKey="M8-P4-L7-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambar1}
            alt="Siswi mengepalkan tangan dengan gelembung ucapan: Kerja bagus! Terus bereksplorasi!"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[150px] justify-self-center overflow-hidden rounded-2xl bg-white"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/6`}
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
