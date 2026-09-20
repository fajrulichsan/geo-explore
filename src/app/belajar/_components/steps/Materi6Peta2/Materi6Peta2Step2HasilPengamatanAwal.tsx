import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";

const baris = [
  { key: "kubus", nama: "Kubus", jumlah: "3 lapis", warna: "#2563EB", bg: "#EFF4FF", border: "#BFDBFE" },
  { key: "balok", nama: "Balok", jumlah: "3 lapis", warna: "#16A34A", bg: "#F0FDF4", border: "#BBF7D0" },
  {
    key: "prisma",
    nama: "Prisma (segitiga)",
    jumlah: "3 posisi penampang (sejajar alas)",
    warna: "#EA580C",
    bg: "#FFF7ED",
    border: "#FED7AA",
  },
];

export default async function Materi6Peta2Step2HasilPengamatanAwal({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={7} />
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
            B
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Hasil Pengamatan Awal
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Tuliskan hasil pengamatanmu tentang lapisan pada kubus dan balok, serta penampang yang
          sejajar alas pada prisma.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {baris.map((b) => (
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
                <span className="text-xs font-semibold text-[#6B7280]">
                  Banyak lapisan / posisi yang diamati: {b.jumlah}
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#374151]">
                  Apa yang kamu amati pada satu lapisan / penampang?
                </label>
                <textarea
                  name={`answers.amati_${b.key}`}
                  defaultValue={getValue(`amati_${b.key}`)}
                  rows={4}
                  placeholder="Contoh: bentuk, ukuran, tampak yang sama atau berbeda, dll."
                  required
                  className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#374151]">
                  Perkiraan ukuran satu lapisan / penampang
                </label>
                <textarea
                  name={`answers.ukuran_${b.key}`}
                  defaultValue={getValue(`ukuran_${b.key}`)}
                  rows={2}
                  placeholder="Contoh: jumlah kubus satuan atau ukuran alas penampang, dll."
                  required
                  className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:bg-white transition-colors resize-y"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl px-5 py-3.5">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#F59E0B" className="flex-shrink-0">
            <path d="M9 21h6v-1H9zM12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z" />
          </svg>
          <p className="m-0 text-sm font-bold text-[#1D4ED8]">
            Tuliskan dengan kalimatmu sendiri berdasarkan hasil pengamatanmu.
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
