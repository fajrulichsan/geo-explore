import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const bentuk = [
  { key: "shape-kubus" as const, label: "Kubus", color: "#16A34A" },
  { key: "shape-balok" as const, label: "Balok", color: "#2563EB" },
  { key: "shape-prisma" as const, label: "Prisma", color: "#7C3AED" },
  { key: "shape-limas" as const, label: "Limas", color: "#EA580C" },
];

export default async function Materi5Peta7Step3AturanUmum({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");
  const images = await Promise.all(bentuk.map((b) => getPageImage(b.key)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={6} />
        <div className="inline-flex items-center bg-[#FDF3C7] text-[#92400E] rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          Tahap 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Menyimpulkan</h1>
        <p className="m-0 text-sm font-semibold text-[#2563EB]">
          Skala dan Luas Bangun Ruang Sisi Datar
        </p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            C
          </div>
          <h2 className="m-0 text-lg font-bold text-[#111827]">Aturan Umum</h2>
        </div>
        <p className="m-0 -mt-2 text-sm text-[#4B5563]">Lengkapilah kalimat berikut.</p>

        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl px-5 py-4 flex items-start gap-2.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#D97706" className="flex-shrink-0 mt-0.5">
            <path d="M12 2l2.6 6.5L21 9.3l-5 4.4 1.5 6.8L12 17l-5.5 3.5L8 13.7 3 9.3l6.4-.8z" />
          </svg>
          <p className="m-0 text-xs text-[#92400E] leading-[1.6]">
            Gunakan kesimpulan hasil diskusi dan verifikasi kelompokmu untuk melengkapi aturan umum
            berikut.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="m-0 text-sm text-[#374151]">Menurut kelompok kami, jika faktor skala adalah k, maka luas permukaan berubah menjadi</p>
          <textarea
            name="answers.aturan_umum_luas"
            defaultValue={getValue("aturan_umum_luas")}
            rows={2}
            required
            placeholder="Jawabanmu..."
            className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-3.5 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#7C3AED] focus:outline-none transition-colors resize-y"
          />
        </div>

        <div className="flex flex-col gap-3">
          <p className="m-0 text-sm font-semibold text-[#111827]">
            Aturan ini berlaku untuk berbagai bangun ruang sisi datar:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {bentuk.map((b, idx) => (
              <div
                key={b.key}
                className="flex flex-col items-center gap-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-3"
              >
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-white">
                  <EditablePageImage
                    imageKey={b.key}
                    materi={materi}
                    peta={peta}
                    step={step}
                    urutan={String(idx + 1)}
                    src={images[idx]}
                    alt={`Ilustrasi bangun ruang ${b.label}`}
                    editable={editFoto}
                    imageClassName="object-contain"
                    containerClassName="relative w-full h-full"
                  />
                </div>
                <p className="m-0 text-xs font-bold" style={{ color: b.color }}>
                  {b.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#EFF4FF] border border-[#BFDBFE] rounded-2xl px-5 py-4 flex items-start gap-2.5">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="flex-shrink-0 mt-0.5">
          <path d="M12 17.8a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4zM12 3a9 9 0 00-9 9c0 4.6 4 8.5 9 9 5-.5 9-4.4 9-9a9 9 0 00-9-9z" />
        </svg>
        <p className="m-0 text-xs text-[#1D4ED8] leading-[1.5]">
          <span className="font-bold">Ingat:</span> hubungan yang kamu tuliskan berasal dari hasil
          pengamatan, eksplorasi, pengolahan informasi, dan verifikasi, bukan sekadar menghafal
          rumus.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUT KE HALAMAN 2
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
