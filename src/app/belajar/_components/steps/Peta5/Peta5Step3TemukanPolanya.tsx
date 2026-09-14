import Link from "next/link";
import PhotoUpload from "@/components/PhotoUpload";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";

const pola = [
  { n: 1, judul: "Berdasarkan bentuk dan susunan sisi" },
  { n: 2, judul: "Berdasarkan pasangan bidang sisi sejajar" },
  { n: 3, judul: "Pola lain yang kami temukan" },
];

export default function Peta5Step3TemukanPolanya({ materi, peta, initialAnswers }: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={7} />
        <div className="inline-flex items-center gap-1.5 bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#92400E" strokeWidth="2.4">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="4.5" />
            <circle cx="12" cy="12" r="1" fill="#92400E" />
          </svg>
          Tahap 4 dari 6 – Discovery Learning
        </div>
        <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">Ayo Mengolah Informasi</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          C
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          Temukan Polanya
        </div>
      </div>
      <p className="m-0 -mt-6 text-sm text-[#4B5563]">Tuliskan pola yang kamu temukan dari data di atas.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {pola.map((p) => (
          <div
            key={p.n}
            className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4"
          >
            <div className="flex items-center gap-3 pb-3 border-b border-[#E5E7EB]">
              <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                {p.n}
              </div>
              <h2 className="m-0 text-base font-bold text-[#2563EB]">
                Pola {p.n} – {p.judul}
              </h2>
            </div>
            {p.n === 3 && (
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-[#111827]">Dasar pola yang digunakan:</label>
                <input
                  type="text"
                  name="answers.pola_3_dasar"
                  defaultValue={getValue("pola_3_dasar")}
                  required
                  placeholder="Tuliskan dasar pola yang kamu gunakan..."
                  className="w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
                />
              </div>
            )}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-[#111827]">Bangun yang memiliki kemiripan:</label>
              <input
                type="text"
                name={`answers.bangun_mirip_${p.n}`}
                defaultValue={getValue(`bangun_mirip_${p.n}`)}
                required
                placeholder="Contoh: Kubus, Balok..."
                className="w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-[#111827]">Pola yang kami temukan:</label>
              <input
                type="text"
                name={`answers.pola_${p.n}_ditemukan`}
                defaultValue={getValue(`pola_${p.n}_ditemukan`)}
                required
                placeholder="Tuliskan pola yang ditemukan..."
                className="w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none transition-colors"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <PhotoUpload
          name="answers.foto_bukti"
          label="Unggah foto hasil temuan pola (opsional)"
          defaultValue={getValue("foto_bukti")}
        />
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/2`}
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
