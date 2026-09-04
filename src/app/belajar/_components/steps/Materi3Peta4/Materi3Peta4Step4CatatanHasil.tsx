import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import { getPageImage } from "@/lib/pageImages";
import Image from "next/image";

const bangunRuang = [
  { key: "kubus", label: "Kubus", imageKey: "shape-kubus" as const, iconBg: "#2563EB" },
  { key: "balok", label: "Balok", imageKey: "shape-balok" as const, iconBg: "#2563EB" },
  { key: "prisma", label: "Prisma", imageKey: "shape-prisma" as const, iconBg: "#16A34A" },
];

export default async function Materi3Peta4Step4CatatanHasil({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  const gambarBangun = await Promise.all(bangunRuang.map((b) => getPageImage(b.imageKey)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={8} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            C
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Catatan Hasil Eksplorasi
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">
          Tuliskan banyak sisi, bentuk sisi, ukuran sisi, luas sisi, sisi-sisi yang sama bentuk dan
          ukurannya, dan hubungan ukuran antar sisi untuk setiap bangun ruang.
        </p>

        <div className="flex flex-col gap-4">
          {bangunRuang.map((b, i) => (
            <div
              key={b.key}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col sm:flex-row gap-4"
            >
              <div className="flex sm:flex-col items-center gap-2 sm:w-24 flex-shrink-0">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: `${b.iconBg}1A` }}
                >
                  <Image src={gambarBangun[i]} alt={b.label} width={40} height={40} className="object-contain" />
                </div>
                <span className="text-sm font-bold text-[#111827]">{b.label}</span>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label htmlFor={`temuan_${b.key}`} className="text-xs font-bold text-[#6B7280]">
                  Yang Saya Temukan
                </label>
                <textarea
                  id={`temuan_${b.key}`}
                  name={`answers.temuan_${b.key}`}
                  defaultValue={getValue(`temuan_${b.key}`)}
                  rows={3}
                  placeholder="Tuliskan: banyak sisi, bentuk sisi, ukuran sisi, luas sisi, sisi-sisi yang sama bentuk dan ukurannya, dan hubungan ukuran antar sisi..."
                  required
                  className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#FCE9A8] rounded-xl py-3.5 px-[18px] flex items-start gap-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="mt-0.5 flex-shrink-0">
            <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
          </svg>
          <p className="m-0 text-sm font-bold text-[#1D4ED8] leading-[1.5]">
            Pastikan semua data hasil pengamatan telah dicatat dengan lengkap.
          </p>
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
