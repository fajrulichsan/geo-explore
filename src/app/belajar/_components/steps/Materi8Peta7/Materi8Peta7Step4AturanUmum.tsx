import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi8Peta7Step4AturanUmum({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";
  const gambar = await Promise.all((["M8-P7-L4-1", "M8-P7-L4-2"] as const).map((k) => getPageImage(k)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={7} />
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
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Aturan Umum
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">Lengkapilah kalimat berikut.</p>
        <div className="flex items-start gap-2.5 bg-[#FEF9E7] border border-dashed border-[#F5E3A0] rounded-xl px-4 py-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
            <path d="M9 18h6 M10 21h4 M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
          </svg>
          <p className="m-0 text-sm text-[#92400E] leading-[1.5]">Gunakan hasil diskusi dan verifikasi kelompokmu untuk melengkapi aturan umum berikut.</p>
        </div>
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <p className="m-0 text-sm text-[#111827] leading-[1.7]">
            Menurut kelompok kami, jika setiap ukuran panjang yang bersesuaian pada suatu bangun ruang diperbesar atau diperkecil dengan faktor skala <span className="italic">k</span>, maka <strong>volume hasil skalanya</strong> menjadi
          </p>
          <textarea
            name="answers.aturan_umum"
            defaultValue={getValue("aturan_umum")}
            rows={3}
            required
            aria-label="Aturan umum volume hasil skala"
            className="w-full rounded-xl border border-[#E5E7EB] bg-white p-3 text-sm text-[#374151] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
          />
        </div>

        <div className="bg-[#EFF4FF] border border-[#DBEAFE] rounded-[20px] p-4 sm:p-6 flex flex-col gap-3">
          <h3 className="m-0 text-sm font-extrabold text-[#1E3A8A]">Ilustrasi Hubungan Volume Awal dan Volume Hasil Skala</h3>
          <EditablePageImage
            imageKey="M8-P7-L4-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambar[0]}
            alt="Kubus volume awal diskala dengan faktor k menjadi kubus volume hasil skala"
            editable={editFoto}
            natural
            containerClassName="relative w-full max-w-[520px] mx-auto overflow-hidden rounded-xl bg-white"
          />
        </div>
      </div>

      <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-[20px] p-5 grid grid-cols-[1fr_110px] sm:grid-cols-[1fr_140px] gap-3 items-center">
        <div className="flex flex-col gap-2">
          <h3 className="m-0 text-base font-extrabold text-[#C2410C]">Ingat!</h3>
          <ul className="m-0 pl-0 list-none flex flex-col gap-1.5 text-sm text-[#374151] leading-[1.5]">
            <li className="flex items-start gap-2"><span className="text-[#16A34A] font-bold">✓</span>Hubungan yang kamu tuliskan berasal dari hasil pengamatan, eksplorasi, dan verifikasi.</li>
            <li className="flex items-start gap-2"><span className="text-[#16A34A] font-bold">✓</span>Ini adalah kesimpulan, bukan sekadar menghafal rumus.</li>
          </ul>
        </div>
        <EditablePageImage
          imageKey="M8-P7-L4-2"
          materi={materi}
          peta={peta}
          step={step}
          urutan="2"
          src={gambar[1]}
          alt="Siswi menunjuk ke atas dengan lampu ide"
          editable={editFoto}
          natural
          containerClassName="relative w-full overflow-hidden"
        />
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
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
