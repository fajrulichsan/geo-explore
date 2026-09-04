import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const bangunRuang = [
  { key: "kubus", label: "Kubus", shape: "shape-kubus" as const },
  { key: "balok", label: "Balok", shape: "shape-balok" as const },
  { key: "prisma", label: "Prisma", shape: "shape-prisma" as const },
];

const proses = [
  "Mengamati",
  "Diskusi",
  "Eksplorasi",
  "Mengolah Informasi",
  "Verifikasi",
  "Menyimpulkan",
];

export default async function Materi3Peta7Step1Kesimpulan({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const heroImage = await getPageImage("M3-P7-L1-1");
  const shapeImages = await Promise.all(bangunRuang.map((b) => getPageImage(b.shape)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={2} />
        <div className="inline-flex items-center gap-1.5 bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#92400E" strokeWidth="2.4">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12.5l2.5 2.5L16 9" />
          </svg>
          Tahap 6 dari 6
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-5">
        <EditablePageImage
          imageKey="M3-P7-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={heroImage}
          alt="Tiga siswa menyusun kesimpulan bersama"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-28 h-36 sm:w-32 sm:h-40 flex-shrink-0 rounded-2xl overflow-hidden bg-[#EFF4FF]"
        />
        <div className="flex-1 flex flex-col gap-3">
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Ayo Menyimpulkan
          </h1>
          <p className="m-0 text-sm font-semibold text-[#2563EB]">
            Temukan Konsep Luas Permukaan Bangun Ruang
          </p>
          <div className="relative bg-white border border-[#E5E7EB] rounded-2xl rounded-tl-sm shadow-[0_1px_2px_rgba(0,0,0,0.04)] py-3 px-4 w-fit max-w-md">
            <p className="m-0 text-sm leading-[1.5] text-[#374151]">
              Kamu telah mengamati, berdiskusi, bereksplorasi, mengolah informasi, dan
              memverifikasi hasil penemuanmu. Sekarang saatnya menyusun{" "}
              <span className="font-bold">kesimpulan</span> berdasarkan seluruh kegiatan yang
              telah kamu lakukan.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl px-5 py-4">
        {proses.map((p, i) => (
          <div key={p} className="flex items-center gap-2.5">
            <span
              className={`text-xs font-bold rounded-full px-3 py-1.5 ${
                p === "Menyimpulkan" ? "bg-[#16A34A] text-white" : "bg-white border border-[#E5E7EB] text-[#6B7280]"
              }`}
            >
              {p}
            </span>
            {i < proses.length - 1 && (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.4">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            A
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Apa yang Kamu Temukan?</h2>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Lengkapilah kalimat berikut berdasarkan hasil pembelajaran.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {bangunRuang.map((b, i) => (
            <div key={b.key} className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-4 flex flex-col gap-3">
              <label htmlFor={`luas_${b.key}`} className="text-sm font-semibold text-[#111827]">
                Luas permukaan {b.label.toLowerCase()} diperoleh dengan cara ...
              </label>
              <textarea
                id={`luas_${b.key}`}
                name={`answers.luas_${b.key}`}
                defaultValue={getValue(`luas_${b.key}`)}
                rows={3}
                required
                placeholder="Jawabanmu..."
                className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
              />
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-white border border-[#E5E7EB] max-w-[96px] mx-auto">
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
                  containerClassName="relative w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-5 items-stretch">
        <div className="lg:col-span-7 bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              B
            </div>
            <h2 className="m-0 text-lg font-bold text-[#111827]">
              Hubungan Jaring-Jaring dengan Luas Permukaan
            </h2>
          </div>
          <p className="m-0 text-sm text-[#4B5563]">
            Perhatikan kembali jaring-jaring bangun ruang yang telah kamu gunakan.
          </p>
          <div className="flex items-center justify-center gap-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl px-4 py-5">
            <div className="flex flex-col items-center gap-1.5">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="#BFDBFE" stroke="#2563EB" strokeWidth="1.5">
                <path d="M4 8l8-4 8 4v8l-8 4-8-4z" />
              </svg>
              <span className="text-[11px] font-semibold text-[#6B7280]">Bangun Ruang</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.4">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
            <div className="flex flex-col items-center gap-1.5">
              <div className="grid grid-cols-3 grid-rows-2 gap-0.5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span key={i} className="w-3 h-3 bg-[#BFDBFE] border border-[#2563EB]" />
                ))}
              </div>
              <span className="text-[11px] font-semibold text-[#6B7280]">Jaring-Jaring</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.4">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
            <div className="flex flex-col items-center gap-1.5">
              <div className="grid grid-cols-3 grid-rows-2 gap-0.5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span key={i} className="w-3 h-3 bg-[#DCFCE7] border border-[#16A34A]" />
                ))}
              </div>
              <span className="text-[11px] font-semibold text-[#16A34A]">= Luas Permukaan</span>
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
                className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
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
                rows={2}
                required
                placeholder="Jawabanmu..."
                className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-white border border-[#E5E7EB] rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col">
          <div className="flex items-center gap-3 px-6 pt-5">
            <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              C
            </div>
            <h2 className="m-0 text-lg font-bold text-[#111827]">Rumus yang Kamu Temukan</h2>
          </div>
          <p className="m-0 px-6 pt-2 text-sm text-[#4B5563]">
            Tuliskan rumus luas permukaan yang berhasil kamu temukan.
          </p>
          <div className="p-6 flex flex-col gap-3 flex-1">
            {bangunRuang.map((b) => (
              <div key={b.key} className="flex items-center gap-3">
                <span className="w-16 text-sm font-bold text-[#111827] flex-shrink-0">{b.label}</span>
                <input
                  type="text"
                  name={`answers.rumus_${b.key}`}
                  defaultValue={getValue(`rumus_${b.key}`)}
                  required
                  placeholder="Rumus luas permukaan..."
                  className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center">
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer w-full sm:w-auto justify-center">
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
