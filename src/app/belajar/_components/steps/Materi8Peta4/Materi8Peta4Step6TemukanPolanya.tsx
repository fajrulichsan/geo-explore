import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi8Peta4Step6TemukanPolanya({
  materi,
  peta,
  step = "6",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";

  const gambarKaca = await getPageImage("M8-P4-L6-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={7} />
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
        <div className="flex items-center gap-3 flex-wrap">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Temukan Polanya!
          </div>
        </div>

        <div className="flex items-center gap-3">
          <EditablePageImage
            imageKey="M8-P4-L6-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarKaca}
            alt="Kaca pembesar"
            editable={editFoto}
            containerClassName="relative w-14 h-14 flex-shrink-0 overflow-hidden"
            imageClassName="object-contain"
          />
          <span className="rounded-full bg-[#16A34A] text-white text-xs font-bold py-1.5 px-3.5">Ayo Menduga!</span>
        </div>
        <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
          Gunakan hasil eksplorasi dan perbandingan yang telah kamu lakukan untuk menemukan pola perubahan volume. Diskusikan bersama kelompokmu, kemudian susun dugaan matematis sementara tentang hubungan faktor skala (<span className="italic">k</span>) dan volume bangun ruang.
        </p>

        <div className="flex flex-col gap-3 bg-[#FEF9E7] border border-[#FDE68A] rounded-[20px] p-5">
          <label htmlFor="dugaan_pola" className="text-sm font-semibold text-[#78350F] leading-[1.6]">
            Berdasarkan pola yang kami temukan dari hasil eksplorasi, dugaan kelompok kami tentang hubungan antara faktor skala (<span className="italic">k</span>) dan perubahan volume bangun ruang sisi datar adalah:
          </label>
          <textarea
            id="dugaan_pola"
            name="answers.dugaan_pola"
            defaultValue={getValue("dugaan_pola")}
            rows={5}
            required
            className="w-full rounded-xl border border-[#FDE68A] bg-white p-3 text-sm text-[#374151] leading-[1.6] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
          />
          <label htmlFor="alasan_dugaan_pola" className="text-sm font-semibold text-[#78350F] leading-[1.6]">
            Alasan yang mendukung dugaan kami:
          </label>
          <textarea
            id="alasan_dugaan_pola"
            name="answers.alasan_dugaan_pola"
            defaultValue={getValue("alasan_dugaan_pola")}
            rows={3}
            required
            className="w-full rounded-xl border border-[#FDE68A] bg-white p-3 text-sm text-[#374151] leading-[1.6] focus:border-[#2563EB] focus:outline-none transition-colors resize-y"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/5`} />
        <NextStepButton />
      </div>
    </form>
  );
}
