import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const baris = [
  { key: "banyak_sisi", label: "Banyak sisi" },
  { key: "bentuk_sisi", label: "Bentuk setiap sisi" },
  { key: "ukuran_sisi", label: "Ukuran setiap sisi" },
  { key: "luas_sisi", label: "Luas setiap sisi" },
  { key: "sisi_sama", label: "Sisi-sisi yang sama bentuk dan ukurannya" },
  { key: "hubungan_sisi", label: "Hubungan ukuran antar sisi" },
];

const kolom = [
  { key: "kubus", label: "Kubus" },
  { key: "balok", label: "Balok" },
  { key: "prisma", label: "Prisma" },
] as const;

export default async function Materi3Peta4Step5RingkasHasil({ materi, peta, step = "5", initialAnswers, editFoto }: StepComponentProps) {
  const gambarAlur = await getPageImage("M3-P4-L5-1");
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={8} />
        <div className="flex items-center gap-3.5 flex-wrap">
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Bereksplorasi</h1>
          <div className="basis-full"><span className="rounded-full bg-[#EFF4FF] text-[#2563EB] text-xs font-bold py-1 px-3">Tahap 3 dari 6</span></div>
        </div>
      </div>

      <div className="rounded-[24px] overflow-hidden border border-[#E5E7EB] bg-white">
        <EditablePageImage
          imageKey="M3-P4-L5-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={gambarAlur}
          alt="Ayo lanjutkan hasil eksplorasimu: Catatan Hasil, Lengkapi Data, Temuan Sementara, Refleksi"
          editable={editFoto}
          natural
          containerClassName="relative w-full"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            D
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#16A34A]">
            Ringkas Hasil Pengamatanmu
          </div>
        </div>
        <p className="m-0 text-sm text-[#4B5563]">Lengkapilah tabel berikut berdasarkan hasil eksplorasimu.</p>

        <div className="flex flex-col gap-4">
          {baris.map((b) => (
            <div
              key={b.key}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3"
            >
              <p className="m-0 text-sm font-extrabold text-[#166534]">{b.label}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {kolom.map((k) => (
                  <label key={k.key} className="flex flex-col gap-1.5">
                    <span className="text-xs font-bold text-[#6B7280]">{k.label}</span>
                    <input
                      type="text"
                      name={`answers.ringkas_${b.key}_${k.key}`}
                      defaultValue={getValue(`ringkas_${b.key}_${k.key}`)}
                      placeholder="..."
                      required
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#16A34A] focus:outline-none focus:bg-white transition-colors"
                    />
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#EFF4FF] rounded-xl py-3.5 px-[18px] flex items-start gap-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="mt-0.5 flex-shrink-0">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 16v-5M12 8h.01" />
          </svg>
          <p className="m-0 text-sm font-semibold text-[#1D4ED8] leading-[1.5]">
            Data yang kamu catat akan digunakan pada Tahap 4 untuk menentukan luas permukaan.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/4`} />
        <NextStepButton />
      </div>
    </form>
  );
}
