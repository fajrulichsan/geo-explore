import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";

const ingat = [
  "Perubahan panjang rusuk mempengaruhi volume bangun ruang.",
  "Hubungan tersebut dapat ditemukan melalui pengamatan.",
  "Volume tidak selalu berubah sebesar faktor skalanya.",
  "Rumus diperoleh dari pola yang ditemukan, bukan sekadar dihafal.",
];

const bangun = [
  {
    key: "M8-P1-L3-2" as const,
    alt: "Kubus diperbesar dengan faktor skala k = 2",
  },
  {
    key: "M8-P1-L3-3" as const,
    alt: "Balok diperbesar dengan faktor skala k = 2",
  },
  {
    key: "M8-P1-L3-4" as const,
    alt: "Prisma diperbesar dengan faktor skala k = 2",
  },
  {
    key: "M8-P1-L3-5" as const,
    alt: "Limas diperbesar dengan faktor skala k = 2",
  },
];

export default async function Materi8Peta1Step3IngatSiapEksplorasi({
  materi,
  peta,
  step = "3",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const answers = initialAnswers ?? {};
  const getValue = (key: string) =>
    typeof answers[key] === "string" ? (answers[key] as string) : "";

  const [gambarLup, ...gambarBangun] = await Promise.all([
    getPageImage("M8-P1-L3-1"),
    ...bangun.map((b) => getPageImage(b.key)),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="3" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={3} totalSteps={3} />
        <div className="flex items-center gap-3.5">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2563EB"
            strokeWidth="2.4"
          >
            <path d="M12 2l9 5v10l-9 5-9-5V7z" />
            <path d="M3 7l9 5 9-5M12 12v10" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Skala dan Volume Bangun Ruang Sisi Datar
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#DC2626]">
            Ingat!
          </div>
        </div>
        <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-6 flex items-center gap-5">
          <div className="flex flex-col gap-3 flex-1">
            {ingat.map((t) => (
              <div key={t} className="flex items-start gap-2.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D97706"
                  strokeWidth="2.6"
                  className="mt-0.5 flex-shrink-0"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="m-0 text-[15px] leading-[1.6] text-[#374151]">
                  {t}
                </p>
              </div>
            ))}
          </div>
          <EditablePageImage
            imageKey="M8-P1-L3-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={gambarLup}
            alt="Kaca pembesar menyorot sebuah kubus biru"
            editable={editFoto}
            containerClassName="relative w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden flex-shrink-0"
            imageClassName="object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            F
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Siap Mengeksplorasi?
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {bangun.map((b, i) => (
            <div
              key={b.key}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-3 sm:p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <EditablePageImage
                imageKey={b.key}
                materi={materi}
                peta={peta}
                step={step}
                urutan={String(i + 2)}
                src={gambarBangun[i]}
                alt={b.alt}
                editable={editFoto}
                containerClassName="relative w-full aspect-[16/9] overflow-hidden"
                imageClassName="object-contain"
              />
            </div>
          ))}
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3">
          <label
            htmlFor="pola_perubahan_volume"
            className="text-sm font-bold text-[#111827]"
          >
            Apa pola perubahan volume ketika setiap ukuran bangun diperbesar
            atau diperkecil dengan skala tertentu?
          </label>
          <textarea
            id="pola_perubahan_volume"
            name="answers.pola_perubahan_volume"
            defaultValue={getValue("pola_perubahan_volume")}
            rows={3}
            placeholder="Ketik dugaanmu di sini..."
            required
            className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:border-[#2563EB] focus:outline-none focus:ring-0 transition-colors resize-y"
          />
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] px-6 py-6 sm:px-9 flex flex-col gap-1.5">
        <div className="absolute -right-14 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <h2 className="relative m-0 text-lg font-extrabold text-white">
          Hebat! Kamu telah sampai di Submateri 8.
        </h2>
        <p className="relative m-0 text-sm text-white/90">
          Saatnya menemukan hubungan menarik antara skala dan volume bangun
          ruang sisi datar! Kita akan belajar melalui tahapan Discovery
          Learning yang seru.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/2`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        />
        <SubmitStepButton className="flex items-center gap-2 bg-[#16A34A] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(22,163,74,0.3)] cursor-pointer">
          SELESAI
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.6"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
