import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

type Bangun = {
  key: string;
  label: string;
  color: string;
  bg: string;
  border: string;
  imageKey: PageImageKey;
  urutan: string;
  alt: string;
  pertanyaan?: string;
  opsi?: { value: string; label: string }[];
  petunjuk: string;
};

const bangunList: Bangun[] = [
  {
    key: "kubus",
    label: "1. Kubus",
    color: "#16A34A",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    imageKey: "M5-P2-L1-2",
    urutan: "2",
    alt: "Kubus kecil dengan rusuk 4 cm diperbesar dengan k = 2 menjadi kubus besar dengan rusuk 8 cm",
    pertanyaan: "Apa yang berubah?",
    opsi: [
      { value: "panjang_rusuk", label: "panjang rusuk" },
      { value: "jumlah_sisi", label: "jumlah sisi" },
      { value: "bentuk_bangun", label: "bentuk bangun" },
    ],
    petunjuk: "Perhatikan dan tentukan sendiri apa yang berubah dan apa yang tetap.",
  },
  {
    key: "balok",
    label: "2. Balok",
    color: "#EA580C",
    bg: "#FFF7ED",
    border: "#FED7AA",
    imageKey: "M5-P2-L1-3",
    urutan: "3",
    alt: "Balok kecil 6 × 4 × 3 diperbesar dengan k = 2 menjadi balok besar 12 × 8 × 6",
    pertanyaan: "Ukuran mana yang berubah?",
    opsi: [
      { value: "panjang", label: "panjang" },
      { value: "lebar", label: "lebar" },
      { value: "tinggi", label: "tinggi" },
    ],
    petunjuk: "Amati semua ukuran panjang, lebar, dan tinggi.",
  },
  {
    key: "prisma",
    label: "3. Prisma Segitiga",
    color: "#7C3AED",
    bg: "#F5F3FF",
    border: "#DDD6FE",
    imageKey: "M5-P2-L1-4",
    urutan: "4",
    alt: "Prisma segitiga kecil diperbesar dengan k = 2 menjadi prisma segitiga besar",
    pertanyaan: "Ukuran mana yang berubah?",
    opsi: [
      { value: "panjang_prisma", label: "panjang prisma" },
      { value: "sisi_alas", label: "sisi alas" },
      { value: "tinggi_alas", label: "tinggi alas segitiga" },
    ],
    petunjuk: "Amati perubahan ukuran pada sisi alas, tinggi alas segitiga, dan panjang prisma.",
  },
  {
    key: "limas",
    label: "4. Limas Segiempat",
    color: "#2563EB",
    bg: "#EFF6FF",
    border: "#BFDBFE",
    imageKey: "M5-P2-L1-5",
    urutan: "5",
    alt: "Limas segiempat kecil dengan apotema 5 cm diperbesar dengan k = 2 menjadi limas besar dengan apotema 10 cm",
    petunjuk: "Amati semua ukuran (sisi alas dan apotema) setelah skala diterapkan.",
  },
];

export default async function Materi5Peta2Step1AyoMengamati({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const [heroImage, ...bangunImages] = await Promise.all([
    getPageImage("M5-P2-L1-1"),
    ...bangunList.map((b) => getPageImage(b.imageKey)),
  ]);
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

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Ayo Mengamati!
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-5 items-center bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 sm:p-6">
          <p className="m-0 text-sm leading-[1.7] text-[#374151]">
            Perhatikan setiap pasangan bangun ruang di bawah ini. Bentuknya sama, tetapi ukurannya berbeda
            karena diperbesar dengan faktor skala <span className="font-bold text-[#2563EB]">k = 2</span>. Amati
            perubahan ukuran setiap bangun, kemudian pikirkan apakah perubahan tersebut juga memengaruhi luas
            permukaannya.
          </p>
          <EditablePageImage
            imageKey="M5-P2-L1-1"
            materi={materi}
            peta={peta}
            step={step}
            urutan="1"
            src={heroImage}
            alt="Siswa laki-laki dengan kaca pembesar dan siswa perempuan memegang penggaris mengamati bangun ruang"
            editable={editFoto}
            natural
            containerClassName="relative w-full overflow-hidden rounded-2xl"
          />
        </div>

        <div className="grid grid-cols-1 gap-5">
          {bangunList.map((b, i) => (
            <div
              key={b.key}
              className="rounded-[20px] p-4 sm:p-5 flex flex-col gap-4 border"
              style={{ backgroundColor: b.bg, borderColor: b.border }}
            >
              <span
                className="inline-flex w-fit rounded-full py-1.5 px-4 text-sm font-bold text-white"
                style={{ backgroundColor: b.color }}
              >
                {b.label}
              </span>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-4 items-center">
                <div className="bg-white rounded-2xl p-3">
                  <EditablePageImage
                    imageKey={b.imageKey}
                    materi={materi}
                    peta={peta}
                    step={step}
                    urutan={b.urutan}
                    src={bangunImages[i]}
                    alt={b.alt}
                    editable={editFoto}
                    natural
                    containerClassName="relative w-full overflow-hidden"
                  />
                </div>
                {b.opsi && (
                  <fieldset className="m-0 bg-white rounded-2xl border border-[#E5E7EB] p-3.5 flex flex-col gap-2">
                    <legend className="px-1 text-xs font-bold text-[#374151]">{b.pertanyaan}</legend>
                    {b.opsi.map((o) => (
                      <label key={o.value} className="flex items-center gap-2 text-sm text-[#374151] cursor-pointer">
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
                  </fieldset>
                )}
              </div>
              <p className="m-0 flex items-center gap-2 bg-white/80 rounded-xl py-2.5 px-3.5 text-sm text-[#374151]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" className="flex-shrink-0">
                  <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z" />
                </svg>
                {b.petunjuk}
              </p>
            </div>
          ))}
        </div>
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
