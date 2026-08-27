import Link from "next/link";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const kelompok = [
  {
    label: "Kelompok A",
    tag: "Bentuk Alas",
    title: "Fokus pada Alas",
    desc: "Kelompok ini memisahkan bangun ruang berdasarkan bentuk bangun datar yang menjadi alasnya (misalnya: segitiga, segiempat).",
    alasan: "Alas menentukan nama spesifik bangun ruang tersebut.",
  },
  {
    label: "Kelompok B",
    tag: "Sisi Sejajar",
    title: "Kehadiran Sisi Sejajar",
    desc: "Mengelompokkan berdasarkan ada atau tidaknya sepasang sisi yang saling sejajar dan kongruen (seperti pada prisma dan tabung).",
    alasan: "Membedakan kelompok prisma/tabung dengan limas/kerucut.",
  },
  {
    label: "Kelompok C",
    tag: "Komposisi Permukaan",
    title: "Sifat Permukaan",
    desc: "Mengkategorikan bangun ruang berdasarkan jenis permukaannya: apakah tersusun dari sisi datar saja, sisi lengkung, atau kombinasi keduanya.",
    alasan: "Sifat permukaan menentukan jaring-jaring bangun tersebut.",
  },
];

export default function Peta2Step2BandingkanDugaan({ materi, peta }: StepComponentProps) {
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="2" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={2} totalSteps={8} />
        <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Ayo Berdiskusi</h1>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Amati dugaan pengelompokan dari ketiga kelompok berikut. Bandingkan persamaan, perbedaan, serta
          alasan yang mereka gunakan untuk mengkategorikan bangun ruang.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          B
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Bandingkan Dugaan Kelompok
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {kelompok.map((k) => (
          <div
            key={k.label}
            className="bg-white border border-[#E5E7EB] rounded-[20px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="h-36 w-full bg-[#EFF4FF] relative flex items-center justify-center text-xs text-[#9CA3AF]">
              Ilustrasi
              <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-lg border border-[#E5E7EB] shadow-sm">
                <span className="text-xs font-bold text-[#2563EB]">{k.label}</span>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-3 flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">{k.tag}</span>
              <h3 className="m-0 text-lg font-bold text-[#111827]">{k.title}</h3>
              <p className="m-0 text-sm leading-[1.6] text-[#6B7280] flex-1">{k.desc}</p>
              <div className="pt-3 border-t border-[#E5E7EB]">
                <p className="m-0 text-xs font-bold text-[#374151]">Alasan Utama:</p>
                <p className="m-0 mt-1 text-sm text-[#6B7280]">{k.alasan}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/1`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
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
