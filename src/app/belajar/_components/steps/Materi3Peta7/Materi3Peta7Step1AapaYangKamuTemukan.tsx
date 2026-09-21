import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const bangunRuang = [
  { key: "kubus", label: "Kubus", shape: "shape-kubus" as const, accent: "#2563EB" },
  { key: "balok", label: "Balok", shape: "shape-balok" as const, accent: "#16A34A" },
  { key: "prisma", label: "Prisma", shape: "shape-prisma" as const, accent: "#D97706" },
];

const proses = ["Mengamati", "Diskusi", "Eksplorasi", "Mengolah Informasi", "Verifikasi", "Menyimpulkan"];

export default async function Materi3Peta7Step1AapaYangKamuTemukan({
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
        <StepHeader materi={materi} currentStep={1} totalSteps={4} />
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

      <div className="grid md:grid-cols-2 gap-5 items-center bg-gradient-to-br from-[#EFF4FF] to-white border border-[#DBE7FF] rounded-[20px] p-5">
        <p className="m-0 text-sm leading-[1.7] text-[#374151]">
          Kamu telah mengamati, berdiskusi, bereksplorasi, mengolah informasi, dan memverifikasi hasil
          penemuanmu. Sekarang saatnya menyusun <span className="font-bold text-[#1E3A8A]">kesimpulan</span>{" "}
          berdasarkan seluruh kegiatan yang telah kamu lakukan.
        </p>
        <EditablePageImage
          imageKey="M3-P7-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={heroImage}
          alt="Tiga siswa menyusun kesimpulan bersama"
          editable={editFoto}
          natural
          containerClassName="relative w-full rounded-2xl overflow-hidden"
        />
      </div>

      <ol className="m-0 p-0 list-none flex flex-wrap items-center gap-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl px-5 py-4">
        {proses.map((p, i) => (
          <li key={p} className="flex items-center gap-2.5">
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
          </li>
        ))}
      </ol>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            A
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Apa yang Kamu Temukan?</h2>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">Lengkapilah kalimat berikut berdasarkan hasil pembelajaran.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {bangunRuang.map((b, i) => (
            <div key={b.key} className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-4 flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <span
                  className="w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: b.accent }}
                >
                  {i + 1}
                </span>
                <label htmlFor={`luas_${b.key}`} className="text-sm font-semibold text-[#111827]">
                  Luas permukaan {b.label.toLowerCase()} diperoleh dengan cara ...
                </label>
              </div>
              <textarea
                id={`luas_${b.key}`}
                name={`answers.luas_${b.key}`}
                defaultValue={getValue(`luas_${b.key}`)}
                rows={4}
                required
                placeholder="Jawabanmu..."
                className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
              />
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
                containerClassName="relative w-24 aspect-square mx-auto"
              />
            </div>
          ))}
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
