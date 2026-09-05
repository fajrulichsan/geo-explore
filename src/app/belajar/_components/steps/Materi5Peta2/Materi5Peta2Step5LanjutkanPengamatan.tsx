import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import { KubusSvg, BalokSvg, PrismaSvg, LimasSvg } from "./shapes";

const bangunList = [
  { key: "kubus", label: "Kubus", color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE", Svg: KubusSvg, catatan: "Semua ukuran panjang menjadi 2 kali." },
  { key: "balok", label: "Balok", color: "#EA580C", bg: "#FFF7ED", border: "#FED7AA", Svg: BalokSvg, catatan: "Setiap ukuran (panjang, lebar, tinggi) menjadi 2 kali." },
  { key: "prisma", label: "Prisma Segitiga", color: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE", Svg: PrismaSvg, catatan: "Semua ukuran pada sisi alas, tinggi alas, dan panjang prisma menjadi 2 kali." },
  { key: "limas", label: "Limas Segiempat", color: "#16A34A", bg: "#F0FDF4", border: "#BBF7D0", Svg: LimasSvg, catatan: "Semua ukuran (sisi alas dan apotema) menjadi 2 kali." },
] as const;

export default async function Materi5Peta2Step5LanjutkanPengamatan({ materi, peta }: StepComponentProps) {
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={9} />
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengamati dan Berpikir</h1>
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-5 flex flex-col gap-1.5">
        <p className="m-0 text-sm font-bold text-[#78350F] flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
            <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
          </svg>
          Ingat!
        </p>
        <p className="m-0 text-sm text-[#78350F] leading-[1.6]">
          Faktor skala k = 2 berarti setiap ukuran panjang pada bangun hasil skala menjadi 2 kali
          ukuran semula.
        </p>
        <p className="m-0 text-sm font-bold text-[#78350F]">Ukuran baru = k × ukuran lama (k = 2)</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Lanjutkan Pengamatanmu
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">Perhatikan kembali perubahan setiap bangun di bawah ini.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {bangunList.map((b) => (
            <div key={b.key} className="rounded-[20px] p-5 flex flex-col items-center gap-3 border" style={{ backgroundColor: b.bg, borderColor: b.border }}>
              <p className="m-0 text-sm font-bold" style={{ color: b.color }}>
                {b.label}
              </p>
              <div className="flex items-center justify-center gap-3">
                <b.Svg size="kecil" color={b.color} />
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={b.color} strokeWidth="2.4" className="flex-shrink-0">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
                <b.Svg size="besar" color={b.color} />
              </div>
              <div className="w-full bg-white/70 rounded-2xl p-3 flex items-start gap-1.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={b.color} strokeWidth="2.4" className="mt-0.5 flex-shrink-0">
                  <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
                </svg>
                <p className="m-0 text-xs text-[#374151] leading-[1.4]">{b.catatan}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/4`}
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
