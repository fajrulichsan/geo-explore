import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

type Bangun = {
  label: string;
  color: string;
  imageKey: PageImageKey;
  urutan: string;
  alt: string;
  catatan: string;
};

const bangunList: Bangun[] = [
  {
    label: "Kubus",
    color: "#16A34A",
    imageKey: "M5-P2-L1-2",
    urutan: "2",
    alt: "Kubus kecil dengan rusuk 4 cm dan kubus besar dengan rusuk 8 cm (k = 2)",
    catatan: "Perhatikan: semua ukuran panjang menjadi 2 kali.",
  },
  {
    label: "Balok",
    color: "#EA580C",
    imageKey: "M5-P2-L1-3",
    urutan: "3",
    alt: "Balok kecil 6 × 4 × 3 dan balok besar 12 × 8 × 6 (k = 2)",
    catatan: "Perhatikan: setiap ukuran (panjang, lebar, tinggi) menjadi 2 kali.",
  },
  {
    label: "Prisma Segitiga",
    color: "#7C3AED",
    imageKey: "M5-P2-L1-4",
    urutan: "4",
    alt: "Prisma segitiga kecil dan prisma segitiga besar (k = 2)",
    catatan: "Perhatikan: semua ukuran pada sisi alas, tinggi alas, dan panjang prisma menjadi 2 kali.",
  },
  {
    label: "Limas Segiempat",
    color: "#2563EB",
    imageKey: "M5-P2-L1-5",
    urutan: "5",
    alt: "Limas segiempat kecil dengan apotema 5 cm dan limas besar dengan apotema 10 cm (k = 2)",
    catatan: "Perhatikan: semua ukuran (sisi alas dan apotema) menjadi 2 kali.",
  },
];

export default async function Materi5Peta2Step5LanjutkanPengamatan({
  materi,
  peta,
  step = "5",
  editFoto,
}: StepComponentProps) {
  const [bannerImage, lampuImage, ...images] = await Promise.all([
    getPageImage("M5-P2-L5-1"),
    getPageImage("M5-P2-L5-2"),
    ...bangunList.map((b) => getPageImage(b.imageKey)),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={5} totalSteps={9} />
        <div className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.02em] w-fit">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          Tahap 1 dari 6
        </div>
        <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengamati dan Berpikir</h1>
      </div>

      <div className="rounded-[24px] overflow-hidden border border-[#E5E7EB]">
        <EditablePageImage
          imageKey="M5-P2-L5-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={bannerImage}
          alt="Siswa-siswa di kelas mengamati bangun ruang sebelum dan sesudah diperbesar"
          editable={editFoto}
          natural
          containerClassName="relative w-full"
        />
      </div>

      <div className="bg-[#FEF9E7] border border-[#F5E3A0] rounded-[20px] p-5 sm:p-6 flex flex-col gap-2">
        <p className="m-0 text-sm font-bold text-[#78350F]">Ingat!</p>
        <p className="m-0 text-sm leading-[1.6] text-[#374151]">
          Faktor skala <span className="font-bold text-[#2563EB]">k = 2</span> berarti setiap ukuran panjang pada
          bangun hasil skala menjadi 2 kali ukuran semula.
        </p>
        <p className="m-0 text-sm font-bold text-[#2563EB]">Ukuran baru = k × ukuran lama (k = 2)</p>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {bangunList.map((b, i) => (
            <div key={b.label} className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 flex flex-col gap-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <span
                className="inline-flex w-fit rounded-full py-1.5 px-4 text-sm font-bold text-white"
                style={{ backgroundColor: b.color }}
              >
                {b.label}
              </span>
              <EditablePageImage
                imageKey={b.imageKey}
                materi={materi}
                peta={peta}
                step={step}
                urutan={b.urutan}
                src={images[i]}
                alt={b.alt}
                natural
                containerClassName="relative w-full overflow-hidden"
              />
              <div className="flex items-center gap-3 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl py-2.5 px-3.5">
                <EditablePageImage
                  imageKey="M5-P2-L5-2"
                  materi={materi}
                  peta={peta}
                  step={step}
                  urutan="2"
                  src={lampuImage}
                  alt="Lampu ide"
                  editable={editFoto && i === 0}
                  imageClassName="object-contain"
                  containerClassName="relative w-9 h-9 flex-shrink-0"
                />
                <p className="m-0 text-sm text-[#374151]">{b.catatan}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <BackLink href={`/belajar/${materi}/${peta}/4`} />
        <NextStepButton />
      </div>
    </form>
  );
}
