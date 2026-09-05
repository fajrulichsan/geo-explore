import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import { KubusSvg, BalokSvg, PrismaSvg, LimasSvg } from "./shapes";

const bangunList = [
  {
    key: "kubus",
    label: "1. Kubus",
    color: "#2563EB",
    bg: "#EFF6FF",
    border: "#BFDBFE",
    Svg: KubusSvg,
    kecil: "Rusuk = 4 cm",
    besar: "Rusuk = 8 cm",
    opsi: [
      { value: "panjang_rusuk", label: "panjang rusuk" },
      { value: "jumlah_sisi", label: "jumlah sisi" },
      { value: "bentuk_bangun", label: "bentuk bangun" },
    ],
  },
  {
    key: "balok",
    label: "2. Balok",
    color: "#EA580C",
    bg: "#FFF7ED",
    border: "#FED7AA",
    Svg: BalokSvg,
    kecil: "(p × l × t) 6 × 4 × 3",
    besar: "(p × l × t) 12 × 8 × 6",
    opsi: [
      { value: "panjang", label: "panjang" },
      { value: "lebar", label: "lebar" },
      { value: "tinggi", label: "tinggi" },
    ],
  },
  {
    key: "prisma",
    label: "3. Prisma Segitiga",
    color: "#7C3AED",
    bg: "#F5F3FF",
    border: "#DDD6FE",
    Svg: PrismaSvg,
    kecil: "Tinggi alas = 3 cm, Sisi alas = 4 cm, Panjang prisma = 6 cm",
    besar: "Tinggi alas = 6 cm, Sisi alas = 8 cm, Panjang prisma = 12 cm",
    opsi: [
      { value: "panjang_prisma", label: "panjang prisma" },
      { value: "sisi_alas", label: "sisi alas" },
      { value: "tinggi_alas", label: "tinggi alas segitiga" },
    ],
  },
  {
    key: "limas",
    label: "4. Limas Segiempat",
    color: "#16A34A",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    Svg: LimasSvg,
    kecil: "Apotema = 5 cm, Sisi alas = 3 cm",
    besar: "Apotema = 10 cm, Sisi alas = 6 cm",
    opsi: [
      { value: "sisi_alas", label: "sisi alas" },
      { value: "apotema", label: "apotema" },
      { value: "bentuk_bangun", label: "bentuk bangun" },
    ],
  },
] as const;

export default async function Materi5Peta2Step1AyoMengamati({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const heroImage = await getPageImage("M5-P2-L1-1");
  const answers = initialAnswers ?? {};
  const getValue = (key: string) => (typeof answers[key] === "string" ? (answers[key] as string) : "");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={9} />
        <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          Tahap 1
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengamati dan Berpikir</h1>
      </div>

      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#EFF4FF] to-[#F5F3FF] border border-[#E5E7EB] p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex-1 flex flex-col gap-3">
            <p className="m-0 text-sm font-bold text-[#2563EB] flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
              Ayo Mengamati!
            </p>
            <p className="m-0 text-sm leading-[1.6] text-[#374151]">
              Perhatikan setiap pasangan bangun ruang di bawah ini. Bentuknya sama, tetapi
              ukurannya berbeda karena diperbesar dengan faktor skala <span className="font-bold text-[#111827]">k = 2</span>.
              Amati perubahan ukuran setiap bangun, kemudian pikirkan apakah perubahan tersebut
              juga memengaruhi luas permukaannya.
            </p>
          </div>
          <EditablePageImage
            imageKey="M5-P2-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={heroImage}
            alt="Siswa laki-laki dengan kaca pembesar dan siswa perempuan memegang penggaris mengamati bangun ruang"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-full sm:w-64 h-40 flex-shrink-0 rounded-2xl overflow-hidden bg-white/60"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {bangunList.map((b) => (
          <div key={b.key} className="rounded-[20px] p-5 flex flex-col gap-4 border" style={{ backgroundColor: b.bg, borderColor: b.border }}>
            <p className="m-0 text-sm font-bold" style={{ color: b.color }}>
              {b.label}
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="flex flex-col items-center gap-1.5">
                <span className="text-xs font-semibold text-[#6B7280]">Kecil</span>
                <b.Svg size="kecil" color={b.color} />
                <span className="text-[11px] text-[#374151] text-center">{b.kecil}</span>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={b.color} strokeWidth="2.4" className="flex-shrink-0">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
              <div className="flex flex-col items-center gap-1.5">
                <span className="text-xs font-semibold text-[#6B7280]">Besar (k = 2)</span>
                <b.Svg size="besar" color={b.color} />
                <span className="text-[11px] text-[#374151] text-center">{b.besar}</span>
              </div>
            </div>

            <div className="bg-white/70 rounded-2xl p-3.5 flex flex-col gap-2">
              <p className="m-0 text-xs font-bold text-[#374151]">Apa yang berubah?</p>
              {b.opsi.map((o) => (
                <label key={o.value} className="flex items-center gap-2 text-xs text-[#374151] cursor-pointer">
                  <input
                    type="radio"
                    name={`answers.${b.key}_berubah`}
                    value={o.value}
                    defaultChecked={getValue(`${b.key}_berubah`) === o.value}
                    required
                    className="accent-[#2563EB]"
                  />
                  {o.label}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-2xl p-4 flex items-center gap-2.5">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0">
          <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
        </svg>
        <p className="m-0 text-sm font-semibold text-[#78350F]">
          Perhatikan dan tentukan sendiri apa yang berubah dan apa yang tetap.
        </p>
      </div>

      <div className="flex justify-end">
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer w-full sm:w-auto justify-center">
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
