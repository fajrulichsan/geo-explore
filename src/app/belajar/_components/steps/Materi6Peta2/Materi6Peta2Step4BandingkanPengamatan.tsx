import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const bangun = [
  {
    key: "kubus",
    nama: "Kubus",
    banyak: "3 lapisan",
    warna: "#2563EB",
    bg: "#EFF4FF",
    border: "#BFDBFE",
    gambar: { key: "M6-P2-L4-1" as const, urutan: "1", alt: "Kubus biru" },
    satu: { key: "M6-P2-L4-2" as const, urutan: "2", alt: "Satu lapisan kubus" },
  },
  {
    key: "balok",
    nama: "Balok",
    banyak: "3 lapisan",
    warna: "#16A34A",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    gambar: { key: "M6-P2-L4-3" as const, urutan: "3", alt: "Balok hijau" },
    satu: { key: "M6-P2-L4-4" as const, urutan: "4", alt: "Satu lapisan balok" },
  },
  {
    key: "prisma",
    nama: "Prisma (segitiga)",
    banyak: "3 posisi penampang sejajar alas",
    warna: "#EA580C",
    bg: "#FFF7ED",
    border: "#FED7AA",
    gambar: { key: "M6-P2-L4-5" as const, urutan: "5", alt: "Prisma segitiga" },
    satu: { key: "M6-P2-L4-6" as const, urutan: "6", alt: "Penampang prisma pada beberapa posisi" },
  },
];

export default async function Materi6Peta2Step4BandingkanPengamatan({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const gambar = await Promise.all(
    bangun.flatMap((b) => [getPageImage(b.gambar.key), getPageImage(b.satu.key)])
  );

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={7} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 1
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
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Bandingkan Hasil Pengamatanmu
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">
          Perhatikan kembali hasil pengamatanmu pada langkah sebelumnya. Bandingkan hasil pengamatan
          antara kubus, balok, dan prisma. Tuliskan persamaan dan perbedaan yang kamu temukan.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {bangun.map((b, i) => (
            <div
              key={b.key}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4"
            >
              <div
                className="rounded-2xl px-4 py-3 border flex flex-col gap-0.5"
                style={{ backgroundColor: b.bg, borderColor: b.border }}
              >
                <span className="text-base font-extrabold" style={{ color: b.warna }}>
                  {b.nama}
                </span>
                <span className="text-xs font-semibold text-[#6B7280]">Banyak lapisan / posisi: {b.banyak}</span>
              </div>
              <div className="grid grid-cols-2 gap-3 items-center">
                <div className="flex flex-col gap-1.5">
                  <EditablePageImage
                    imageKey={b.gambar.key}
                    materi={materi}
                    peta={peta}
                    step={step}
                    urutan={b.gambar.urutan}
                    src={gambar[i * 2]}
                    alt={b.gambar.alt}
                    editable={editFoto}
                    natural
                    containerClassName="relative w-full min-h-12 overflow-hidden"
                  />
                  <span className="text-[11px] font-semibold text-[#6B7280] text-center">Bangun</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <EditablePageImage
                    imageKey={b.satu.key}
                    materi={materi}
                    peta={peta}
                    step={step}
                    urutan={b.satu.urutan}
                    src={gambar[i * 2 + 1]}
                    alt={b.satu.alt}
                    editable={editFoto}
                    natural
                    containerClassName="relative w-full min-h-12 overflow-hidden"
                  />
                  <span className="text-[11px] font-semibold text-[#6B7280] text-center">
                    {b.key === "prisma" ? "Penampang sejajar alas" : "Satu lapisan"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#16A34A]">Persamaan</label>
                <textarea
                  name={`answers.persamaan_${b.key}`}
                  defaultValue={getValue(`persamaan_${b.key}`)}
                  rows={2}
                  placeholder="Ketik di sini..."
                  required
                  className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#DC2626]">Perbedaan</label>
                <textarea
                  name={`answers.perbedaan_${b.key}`}
                  defaultValue={getValue(`perbedaan_${b.key}`)}
                  rows={2}
                  placeholder="Ketik di sini..."
                  required
                  className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 sm:p-6 flex flex-col gap-3">
          <label className="flex items-start gap-2.5 text-sm font-bold text-[#111827] leading-[1.5]">
            <span className="w-6 h-6 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs flex-shrink-0">
              ?
            </span>
            Apa persamaan dan perbedaan yang kamu temukan dari ketiga bangun di atas?
          </label>
          <textarea
            name="answers.persamaan_perbedaan_umum"
            defaultValue={getValue("persamaan_perbedaan_umum")}
            rows={4}
            placeholder="Ketik jawabanmu di sini..."
            required
            className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
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
