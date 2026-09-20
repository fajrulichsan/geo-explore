import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

export default async function Materi7Peta2Step2ApaYangKamuPerhatikan({
  materi,
  peta,
  step = "2",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";

  const gambarMaskot = await getPageImage("M7-P2-L2-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 1 dari 6
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Apa yang Kamu Perhatikan?
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          {[
            { key: "perhatikan_1", label: "Apa persamaan ketiga limas?" },
            { key: "perhatikan_2", label: "Apakah luas alas ketiga limas sama? Jelaskan." },
            { key: "perhatikan_3", label: "Apakah tinggi ketiga limas sama? Jelaskan." },
            { key: "perhatikan_4", label: "Bangun apa yang digunakan sebagai pembanding?" },
          ].map((q, i) => (
            <div key={q.key} className="flex flex-col gap-2">
              <label htmlFor={q.key} className="flex items-start gap-2.5 text-sm font-bold text-[#111827] leading-[1.5]">
                <span className="w-6 h-6 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs flex-shrink-0">
                  {i + 1}
                </span>
                {q.label}
              </label>
              <textarea id={q.key} name={`answers.${q.key}`} defaultValue={getValue(q.key)} rows={2} placeholder="Ketik jawabanmu di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#D97706] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#D97706]">
            Dugaan Awal
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[1fr_180px] gap-5 items-end">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">
              Menurutmu, bagaimana hubungan volume tiga limas identik dengan volume satu prisma yang
              memiliki luas alas dan tinggi yang sama? Tuliskan dugaanmu dan alasan awalmu.
            </p>
            <textarea name="answers.dugaan_awal" defaultValue={getValue("dugaan_awal")} rows={4} placeholder="Ketik dugaanmu dan alasanmu di sini..." required className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y" />
          </div>
          <EditablePageImage
            imageKey="M7-P2-L2-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarMaskot}
            alt="Maskot siswa laki-laki berpikir dengan tanda tanya di gelembung pikiran"
            editable={editFoto}
            containerClassName="relative w-32 h-40 sm:w-full sm:h-52 mx-auto"
            imageClassName="object-contain"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/1`}
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
