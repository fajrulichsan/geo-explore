import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const ingat = [
  "Kumpulkan data sebanyak mungkin sebelum mencari pola.",
  "Data yang lengkap akan membantumu menemukan hubungan yang benar pada tahap berikutnya.",
  "Jangan terburu-buru membuat rumus.",
];

export default async function Materi5Peta4Step6RefleksiData({
  materi,
  peta,
  step = "6",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const gambarBerpikir = await getPageImage("M5-P4-L4-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="6" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={6} totalSteps={6} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-6 items-start">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              E
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#DC2626]">Refleksi Data</span>
              <span className="text-xs text-[#6B7280]">Cek kembali data yang telah kamu kumpulkan.</span>
            </div>
          </div>

          <p className="m-0 text-sm font-semibold text-[#111827]">Menurut kelompokmu:</p>

          <div className="flex flex-col gap-2">
            <label htmlFor="skala_luas_terbesar" className="text-sm text-[#374151]">
              Pada faktor skala berapa luas permukaan yang kamu peroleh paling besar?
            </label>
            <textarea
              id="skala_luas_terbesar"
              name="answers.skala_luas_terbesar"
              defaultValue={getValue("skala_luas_terbesar")}
              rows={2}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#DC2626] focus:outline-none focus:bg-white transition-colors resize-y"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="skala_luas_terkecil" className="text-sm text-[#374151]">
              Pada faktor skala berapa luas permukaan yang kamu peroleh paling kecil?
            </label>
            <textarea
              id="skala_luas_terkecil"
              name="answers.skala_luas_terkecil"
              defaultValue={getValue("skala_luas_terkecil")}
              rows={2}
              required
              placeholder="Jawabanmu..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#DC2626] focus:outline-none focus:bg-white transition-colors resize-y"
            />
          </div>

          <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-4 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#D97706" stroke="none">
                <path d="M12 2l2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 16.9 6.2 20l1.1-6.5-4.8-4.6L9.1 8z" />
              </svg>
              <span className="text-sm font-bold text-[#92400E]">Ingat!</span>
            </div>
            <ul className="m-0 pl-4 flex flex-col gap-1 text-xs text-[#78350F] leading-[1.5] list-disc">
              {ingat.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-[#FFF1F2] border border-[#FECDD3] rounded-[20px] p-5 flex flex-col items-center gap-3">
          <EditablePageImage
            imageKey="M5-P4-L4-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarBerpikir}
            alt="Maskot siswa berpikir dengan tanda tanya di atas kepala"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-28 h-36 flex-shrink-0 rounded-xl overflow-hidden bg-white"
          />
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E11D48" strokeWidth="2.4">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v5M12 16.5v.01" />
            </svg>
            <span className="text-sm font-bold text-[#E11D48]">Ayo Berpikir!</span>
          </div>
          <p className="m-0 text-center text-xs text-[#9F1239] leading-[1.6]">
            Perhatikan data yang kamu kumpulkan. Nanti kita akan mengolah data ini untuk
            menemukan polanya.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/5`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUT KE TAHAP 4
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
