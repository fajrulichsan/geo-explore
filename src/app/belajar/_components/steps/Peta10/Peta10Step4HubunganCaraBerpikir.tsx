import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import BackLink from "@/app/belajar/_components/BackLink";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const alur = [
  { label: "Mengamati", key: "M1-P10-L4-1" as const, color: "#0EA5E9", bg: "#F0F9FF", desc: "Mengamati bangun ruang sisi datar dan sifat-sifatnya." },
  {
    label: "Menemukan Sifat",
    key: "M1-P10-L4-2" as const,
    color: "#16A34A",
    bg: "#F0FDF4",
    desc: "Mencatat berbagai sifat seperti bentuk sisi, pasangan bidang sisi sejajar, jumlah sisi, rusuk, titik sudut, dan lainnya.",
  },
  {
    label: "Mengelompokkan",
    key: "M1-P10-L4-3" as const,
    color: "#D97706",
    bg: "#FFFBEB",
    desc: "Membuat beberapa klasifikasi berdasarkan dasar yang dipilih.",
  },
  {
    label: "Membandingkan",
    key: "M1-P10-L4-4" as const,
    color: "#2563EB",
    bg: "#EFF6FF",
    desc: "Membandingkan hasil klasifikasi yang berbeda dan memilih strategi yang paling sesuai.",
  },
  {
    label: "Memberi Alasan",
    key: "M1-P10-L4-5" as const,
    color: "#16A34A",
    bg: "#F0FDF4",
    desc: "Memberikan alasan matematis untuk mendukung klasifikasi yang dibuat.",
  },
  {
    label: "Menarik Kesimpulan",
    key: "M1-P10-L4-6" as const,
    color: "#DC2626",
    bg: "#FEF2F2",
    desc: "Menemukan prinsip umum tentang cara mengklasifikasikan bangun ruang sisi datar.",
  },
];

const caraBerpikir = [
  { teks: "memilih dasar klasifikasi yang sesuai tujuan.", key: "M1-P10-L4-7" as const },
  { teks: "membandingkan beberapa hasil klasifikasi.", key: "M1-P10-L4-8" as const },
  { teks: "memberikan alasan matematis yang logis.", key: "M1-P10-L4-9" as const },
  { teks: "mengevaluasi kelebihan dan kekurangan setiap strategi.", key: "M1-P10-L4-10" as const },
  { teks: "memperbaiki strategi jika diperlukan.", key: "M1-P10-L4-11" as const },
  { teks: "menarik kesimpulan dari berbagai strategi yang telah digunakan.", key: "M1-P10-L4-12" as const },
];

export default async function Peta10Step4HubunganCaraBerpikir({ materi, peta, editFoto }: StepComponentProps) {
  const ikonAlur = await Promise.all(alur.map((a) => getPageImage(a.key)));
  const ikonCara = await Promise.all(caraBerpikir.map((c) => getPageImage(c.key)));
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={6} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
            <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Rangkuman</h1>
        </div>
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-[7px] px-[18px] text-[13px] font-semibold w-fit">
          Submateri 1 – Bangun Ruang Sisi Datar
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 flex flex-col gap-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              D
            </div>
            <h2 className="m-0 text-base font-bold text-[#2563EB]">Hubungan Antar Konsep</h2>
          </div>

          <div className="flex flex-col">
            {alur.map((a, i) => (
              <div key={a.label} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-xl p-1 flex-shrink-0"
                    style={{ backgroundColor: a.bg, border: `1.5px solid ${a.color}` }}
                  >
                    <EditablePageImage
                      imageKey={a.key}
                      materi={materi}
                      peta={peta}
                      step="4"
                      urutan={String(i + 1)}
                      src={ikonAlur[i]}
                      alt={a.label}
                      editable={editFoto}
                      imageClassName="object-contain"
                      containerClassName="relative w-full h-full"
                    />
                  </div>
                  {i < alur.length - 1 && <div className="w-px flex-1 bg-[#E5E7EB] my-1" />}
                </div>
                <div className="pb-4">
                  <div className="text-sm font-bold" style={{ color: a.color }}>
                    {a.label}
                  </div>
                  <p className="m-0 mt-1 text-[13px] leading-[1.5] text-[#4B5563]">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
              E
            </div>
            <h2 className="m-0 text-base font-bold text-[#15803D]">Cara Berpikir yang Telah Dipelajari</h2>
          </div>
          <p className="m-0 text-sm leading-[1.6] text-[#166534]">
            Setelah melalui Tahap 1–6, quiz dan tantangan open-ended, saya mampu:
          </p>
          <ul className="m-0 p-0 flex flex-col gap-2.5 list-none">
            {caraBerpikir.map((c, i) => (
              <li key={c.key} className="flex items-center gap-3 text-sm text-[#374151]">
                <EditablePageImage
                  imageKey={c.key}
                  materi={materi}
                  peta={peta}
                  step="4"
                  urutan={String(i + 7)}
                  src={ikonCara[i]}
                  alt=""
                  editable={editFoto}
                  imageClassName="object-contain"
                  containerClassName="relative w-9 h-9 flex-shrink-0"
                />
                {c.teks}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/3`} />
        <NextStepButton />
      </div>
    </form>
  );
}
