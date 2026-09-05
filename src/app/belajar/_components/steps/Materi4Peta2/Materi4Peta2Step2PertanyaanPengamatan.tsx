import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pertanyaan = [
  { key: "buka_jaring", label: "Apa yang terjadi ketika limas dibuka menjadi jaring-jaring?" },
  { key: "bagian_alas", label: "Bagian manakah yang menjadi alas?" },
  { key: "bentuk_sisi_tegak", label: "Bagaimana bentuk sisi-sisi tegaknya?" },
  {
    key: "info_luas",
    label: "Menurutmu, informasi apa dari jaring-jaring yang diperlukan untuk mengetahui luas permukaan limas?",
  },
] as const;

export default async function Materi4Peta2Step2PertanyaanPengamatan({
  materi,
  peta,
  step = "2",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const maskotImage = await getPageImage("M4-P2-L2-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={6} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
          Ayo Mengamati dan Berpikir
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              B
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Pertanyaan Pengamatan
            </div>
          </div>
          <p className="m-0 text-xs text-[#6B7280] -mt-2">Jawablah berdasarkan hasil pengamatanmu.</p>

          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
            {pertanyaan.map((p, i) => (
              <div key={p.key} className="flex flex-col gap-2">
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#DBEAFE] text-[#1D4ED8] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <label htmlFor={p.key} className="text-sm font-semibold text-[#374151] leading-[1.5]">
                    {p.label}
                  </label>
                </div>
                <textarea
                  id={p.key}
                  name={`answers.${p.key}`}
                  defaultValue={getValue(p.key)}
                  rows={2}
                  required
                  placeholder="Jawabanmu..."
                  className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
                />
              </div>
            ))}
          </div>

          <div className="bg-[#EFFDF4] border border-[#BBF0D3] rounded-2xl p-4 flex items-start gap-3">
            <EditablePageImage
              imageKey="M4-P2-L2-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={maskotImage}
              alt="Maskot siswa memberi jempol setelah mengamati limas"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-14 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-white"
            />
            <div className="flex flex-col gap-1">
              <p className="m-0 text-sm font-bold text-[#16A34A]">Hebat!</p>
              <p className="m-0 text-xs font-semibold text-[#15803D] leading-[1.5]">
                Kamu telah mengamati berbagai limas dan jaring-jaringnya dengan teliti. Informasi
                ini akan sangat berguna untuk kegiatan selanjutnya.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              C
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
              Catatan Penting
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <label htmlFor="catatan_penting_1" className="text-sm text-[#374151]">
              Tuliskan hal-hal penting yang kamu perhatikan dari bangun dan jaring-jaring limas di
              atas.
            </label>
            <textarea
              id="catatan_penting_1"
              name="answers.catatan_penting_1"
              defaultValue={getValue("catatan_penting_1")}
              rows={5}
              required
              placeholder="Jawabanmu..."
              className="mt-3 w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
                <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
              </svg>
            </div>
            <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#16A34A]">
              Tahukah Kamu?
            </div>
          </div>
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
            {[
              "Semua sisi tegak limas bertemu pada satu titik puncak yang disebut puncak limas.",
              "Jaring-jaring membantu kita melihat seluruh sisi dalam keadaan terbuka sehingga lebih mudah diamati dan dibandingkan.",
            ].map((poin) => (
              <div key={poin} className="flex items-start gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" className="mt-0.5 flex-shrink-0">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[#374151] leading-[1.5]">{poin}</span>
              </div>
            ))}
          </div>
        </div>
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
