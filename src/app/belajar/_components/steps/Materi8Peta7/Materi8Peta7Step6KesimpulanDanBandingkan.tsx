import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pilihan = [
  { value: "sama", label: "Sama" },
  { value: "hampir_sama", label: "Hampir sama" },
  { value: "berbeda", label: "Berbeda" },
];

export default async function Materi8Peta7Step6KesimpulanDanBandingkan({
  materi,
  peta,
  step = "6",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";
  const gambar = await Promise.all((["M8-P7-L6-1", "M8-P7-L6-2"] as const).map((k) => getPageImage(k)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={7} />
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
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Kesimpulan Kelompok
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_130px] gap-4 items-center bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col gap-3">
            <p className="m-0 text-sm text-[#4B5563]">Tuliskan kesimpulan akhir kelompokmu.</p>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[#111827]">Kami menyimpulkan bahwa</span>
              <textarea
                name="answers.kesimpulan_kelompok"
                defaultValue={getValue("kesimpulan_kelompok")}
                rows={5}
                required
                className="w-full rounded-xl border border-[#E5E7EB] bg-white p-3 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
              />
            </label>
          </div>
          <EditablePageImage
            imageKey="M8-P7-L6-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambar[0]}
            alt="Siswa menunjuk ke atas dengan lampu ide"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[130px] mx-auto overflow-hidden"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bandingkan Kesimpulan
          </div>
        </div>
        <div className="bg-[#EFF4FF] border border-[#DBEAFE] rounded-[20px] p-5 sm:p-6 flex flex-col gap-4">
          <p className="m-0 text-sm font-semibold text-[#111827]">Apakah kesimpulan kelompokmu sama dengan kelompok lain?</p>
          <div role="radiogroup" aria-label="Kesimpulan dibandingkan kelompok lain" className="flex flex-wrap gap-2">
            {pilihan.map((p) => (
              <label key={p.value} className="cursor-pointer">
                <input
                  type="radio"
                  name="answers.bandingkan_kelompok"
                  value={p.value}
                  defaultChecked={getValue("bandingkan_kelompok") === p.value}
                  required
                  className="peer sr-only"
                />
                <span className="inline-block rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#374151] peer-checked:border-[#2563EB] peer-checked:bg-[#2563EB] peer-checked:text-white">
                  {p.label}
                </span>
              </label>
            ))}
          </div>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-[#111827]">Jika berbeda, apa penyebabnya?</span>
            <textarea
              name="answers.penyebab_berbeda"
              defaultValue={getValue("penyebab_berbeda")}
              rows={3}
              className="w-full rounded-xl border border-[#E5E7EB] bg-white p-3 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
            />
          </label>
          <EditablePageImage
            imageKey="M8-P7-L6-2"
            materi={materi}
            peta={peta}
            step={step}
            urutan="2"
            src={gambar[1]}
            alt="Tiga siswa saling membandingkan kesimpulan"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[420px] mx-auto overflow-hidden rounded-xl"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
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
