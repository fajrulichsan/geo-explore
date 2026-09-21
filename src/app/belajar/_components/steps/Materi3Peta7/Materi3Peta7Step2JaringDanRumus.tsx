import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const bangunRuang = [
  { key: "kubus", label: "Kubus", shape: "shape-kubus" as const },
  { key: "balok", label: "Balok", shape: "shape-balok" as const },
  { key: "prisma", label: "Prisma", shape: "shape-prisma" as const },
];

const textareaClass =
  "w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none";

export default async function Materi3Peta7Step2JaringDanRumus({
  materi,
  peta,
  step = "2",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const jaringImage = await getPageImage("M3-P7-L2-1");
  const shapeImages = await Promise.all(bangunRuang.map((b) => getPageImage(b.shape)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={4} />
        <div className="inline-flex items-center gap-1.5 bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#92400E" strokeWidth="2.4">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12.5l2.5 2.5L16 9" />
          </svg>
          Tahap 6 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">Temukan Konsep Luas Permukaan Bangun Ruang</p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            B
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Hubungan Jaring-Jaring dengan Luas Permukaan</h2>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Perhatikan kembali jaring-jaring bangun ruang yang telah kamu gunakan. Lengkapilah.
        </p>
        <div className="grid lg:grid-cols-2 gap-5 items-start">
          <div className="flex flex-col gap-2">
            <EditablePageImage
              imageKey="M3-P7-L2-1"
              materi={materi}
              peta={peta}
              step={step}
              urutan="1"
              src={jaringImage}
              alt="Bangun ruang menjadi jaring-jaring lalu jumlah luas seluruh sisi"
              editable={editFoto}
              natural
              containerClassName="relative w-full"
            />
            <div className="grid grid-cols-3 text-center text-[11px] font-semibold text-[#2563EB]">
              <span>Bangun Ruang</span>
              <span>Jaring-Jaring</span>
              <span>Jumlah luas seluruh sisi = luas permukaan</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="jaring_membantu" className="text-sm font-semibold text-[#111827]">
                Jaring-jaring membantu kita mengetahui ...
              </label>
              <textarea
                id="jaring_membantu"
                name="answers.jaring_membantu"
                defaultValue={getValue("jaring_membantu")}
                rows={2}
                required
                placeholder="Jawabanmu..."
                className={textareaClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="jaring_karena" className="text-sm font-semibold text-[#111827]">
                Karena ...
              </label>
              <textarea
                id="jaring_karena"
                name="answers.jaring_karena"
                defaultValue={getValue("jaring_karena")}
                rows={3}
                required
                placeholder="Jawabanmu..."
                className={textareaClass}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            C
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Rumus yang Kamu Temukan</h2>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">Tuliskan rumus yang berhasil kamu temukan.</p>
        <div className="flex flex-col divide-y divide-[#E5E7EB] border border-[#E5E7EB] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-[120px_1fr] bg-[#F9FAFB] px-4 py-2 text-xs font-bold text-[#6B7280]">
            <span>Bangun Ruang</span>
            <span>Rumus Luas Permukaan</span>
          </div>
          {bangunRuang.map((b, i) => (
            <div key={b.key} className="grid grid-cols-[120px_1fr] items-center gap-3 px-4 py-3">
              <div className="flex items-center gap-2">
                <EditablePageImage
                  imageKey={b.shape}
                  materi={materi}
                  peta={peta}
                  step={step}
                  urutan="1"
                  src={shapeImages[i]}
                  alt={b.label}
                  editable={false}
                  imageClassName="object-contain"
                  containerClassName="relative w-8 h-8 flex-shrink-0"
                />
                <span className="text-sm font-bold text-[#111827]">{b.label}</span>
              </div>
              <input
                type="text"
                name={`answers.rumus_${b.key}`}
                defaultValue={getValue(`rumus_${b.key}`)}
                required
                aria-label={`Rumus luas permukaan ${b.label.toLowerCase()}`}
                placeholder="Rumus luas permukaan..."
                className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl px-5 py-4 flex items-center gap-3">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0">
          <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3 11.2V16h6v-1.8A6 6 0 0012 3z" />
        </svg>
        <p className="m-0 text-xs leading-[1.6] text-[#374151]">
          Hasil kesimpulanmu akan digunakan untuk membandingkan dengan kelompok lain pada halaman berikutnya.
        </p>
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
