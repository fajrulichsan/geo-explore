import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const pertanyaan = [
  { key: "pengamatan_1", label: "Apa yang terjadi ketika limas dibuka menjadi jaring-jaring?" },
  { key: "pengamatan_2", label: "Bagian manakah yang menjadi alas?" },
  { key: "pengamatan_3", label: "Bagaimana bentuk sisi-sisi tegaknya?" },
  {
    key: "pengamatan_4",
    label: "Menurutmu, informasi apa dari jaring-jaring yang diperlukan untuk mengetahui luas permukaan limas?",
  },
] as const;

const textareaClass =
  "w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y";

function LetterBadge({ letter, title }: { letter: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
        {letter}
      </div>
      <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
        {title}
      </div>
    </div>
  );
}

export default async function Materi4Peta2Step2PertanyaanPengamatan({
  materi,
  peta,
  step = "2",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const [siswaImage, hebatImage] = await Promise.all([getPageImage("M4-P2-L2-1"), getPageImage("M4-P2-L2-2")]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={6} />
        <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          Tahap 1
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengamati dan Berpikir</h1>
      </div>

      <div className="flex flex-col gap-4">
        <LetterBadge letter="B" title="Pertanyaan Pengamatan" />
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <EditablePageImage
              imageKey="M4-P2-L2-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={siswaImage}
              alt="Maskot siswa laki-laki tersenyum"
              editable={editFoto}
              imageClassName="object-contain"
              containerClassName="relative w-16 h-16 flex-shrink-0 rounded-full overflow-hidden"
            />
            <p className="m-0 text-sm font-semibold text-[#2563EB]">Jawablah berdasarkan hasil pengamatanmu.</p>
          </div>
          <ol className="m-0 p-0 list-none flex flex-col gap-5">
            {pertanyaan.map((p, i) => (
              <li key={p.key} className="flex flex-col gap-2">
                <label htmlFor={p.key} className="flex items-start gap-3 text-sm font-semibold text-[#111827]">
                  <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  {p.label}
                </label>
                <textarea
                  id={p.key}
                  name={`answers.${p.key}`}
                  defaultValue={getValue(p.key)}
                  rows={2}
                  required
                  placeholder="Jawabanmu..."
                  className={textareaClass}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
        <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-[20px] p-5 flex flex-col gap-3">
          <p className="m-0 flex items-center gap-3">
            <span className="w-[34px] h-[34px] rounded-full bg-[#EA580C] text-white flex items-center justify-center font-bold text-[15px]">
              C
            </span>
            <span className="text-base font-bold text-[#EA580C]">Catatan Penting</span>
          </p>
          <label htmlFor="catatan_penting_1" className="text-sm text-[#374151]">
            Tuliskan hal-hal penting yang kamu perhatikan dari bangun dan jaring-jaring limas di atas.
          </label>
          <textarea
            id="catatan_penting_1"
            name="answers.catatan_penting_1"
            defaultValue={getValue("catatan_penting_1")}
            rows={6}
            required
            placeholder="Catatanmu..."
            className={textareaClass}
          />
        </div>

        <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-5 flex flex-col gap-3">
          <p className="m-0 flex items-center gap-3">
            <span className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px]">
              D
            </span>
            <span className="text-base font-bold text-[#166534]">Tahukah Kamu?</span>
          </p>
          <ul className="m-0 p-0 list-none flex flex-col gap-2.5">
            {[
              "Semua sisi tegak limas bertemu pada satu titik puncak yang disebut puncak limas.",
              "Jaring-jaring membantu kita melihat seluruh sisi dalam keadaan terbuka sehingga lebih mudah diamati dan dibandingkan.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-[#374151] leading-[1.5]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" className="mt-0.5 flex-shrink-0">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-[#EFF4FF] border border-[#BFDBFE] rounded-[20px] p-4 sm:p-5">
        <EditablePageImage
          imageKey="M4-P2-L2-2"
          materi={materi}
          peta={peta}
          step={step}
          urutan="2"
          src={hebatImage}
          alt="Maskot siswa laki-laki mengacungkan jari telunjuk"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-24 h-32 flex-shrink-0 overflow-hidden"
        />
        <div className="flex flex-col gap-1">
          <p className="m-0 text-lg font-extrabold text-[#1E3A8A]">Hebat!</p>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Kamu telah mengamati berbagai limas dan jaring-jaringnya dengan teliti. Informasi ini akan sangat berguna
            untuk kegiatan selanjutnya.
          </p>
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
