import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi5Peta7Step3AturanUmum({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const bentukImage = await getPageImage("M5-P7-L3-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">
          Temukan Konsep Hubungan Skala dan Luas
        </p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              C
            </div>
            <h2 className="m-0 text-lg font-bold text-[#111827]">Aturan Umum</h2>
          </div>
        <p className="m-0 -mt-2 text-sm text-[#4B5563]">Lengkapilah kalimat berikut.</p>

        <div className="flex items-start gap-3 bg-[#FEF9E7] border border-[#F5E3A0] rounded-xl p-4">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#D97706" className="flex-shrink-0 mt-0.5">
            <path d="M9 21h6v-1H9v1zm3-19a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z" />
          </svg>
          <p className="m-0 text-xs leading-[1.6] text-[#92400E]">
            Gunakan kesimpulan hasil diskusi dan verifikasi kelompokmu untuk melengkapi aturan umum
            berikut.
          </p>
        </div>

        <div className="flex flex-col gap-1 text-sm text-[#374151]">
          <p className="m-0">Menurut kelompok kami,</p>
          <p className="m-0">jika faktor skala adalah k,</p>
          <label htmlFor="aturan_umum" className="m-0 font-semibold">
            maka luas permukaan berubah menjadi
          </label>
        </div>
        <textarea
          id="aturan_umum"
          name="answers.aturan_umum"
          defaultValue={getValue("aturan_umum")}
          rows={3}
          required
          placeholder="Jawabanmu..."
          className="w-full rounded-xl border border-[#BFDBFE] bg-[#EFF4FF] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#7C3AED] focus:outline-none transition-colors resize-y"
        />

        <div className="relative w-full mt-2">
            <EditablePageImage
              imageKey="M5-P7-L3-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={bentukImage}
              alt="Kubus, balok, limas, dan prisma sebagai contoh bangun ruang sisi datar"
              editable={editFoto}
              natural
              containerClassName="relative w-full"
            />
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#FDF3C7] to-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-5 flex items-start gap-3">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#DC2626" className="flex-shrink-0">
          <path d="M14 2l8 8-2 2-1-1-4 4 .5 4.5-1.5 1.5-4-4L4 22l-1-1 5.5-6.5-4-4 1.5-1.5L10.5 9l4-4-1-1z" />
        </svg>
        <div className="flex flex-col gap-1">
          <p className="m-0 text-sm font-bold text-[#92400E]">Ingat!</p>
          <p className="m-0 text-sm leading-[1.6] text-[#92400E]">
            Hubungan yang kamu tuliskan berasal dari hasil pengamatan, eksplorasi, pengolahan
            informasi, dan verifikasi, bukan sekadar menghafal rumus.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
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
