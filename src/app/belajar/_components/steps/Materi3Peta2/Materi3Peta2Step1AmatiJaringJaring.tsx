import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

const bangun: { key: PageImageKey; urutan: string; nama: string; jaring: string; tip: string; warna: string }[] = [
  {
    key: "M3-P2-L1-2",
    urutan: "2",
    nama: "Kubus",
    jaring: "Jaring-jaring kubus terdiri atas 6 persegi yang sama besar.",
    tip: "Setiap persegi mewakili satu sisi kubus.",
    warna: "#A78BCA",
  },
  {
    key: "M3-P2-L1-3",
    urutan: "3",
    nama: "Balok",
    jaring: "Jaring-jaring balok terdiri atas 6 persegi panjang.",
    tip: "Perhatikan bentuk sisi-sisinya. Apakah ada yang sama?",
    warna: "#60A5FA",
  },
  {
    key: "M3-P2-L1-4",
    urutan: "4",
    nama: "Prisma Segitiga",
    jaring: "Jaring-jaring prisma segitiga terdiri atas 5 sisi (2 segitiga dan 3 persegi panjang).",
    tip: "Dua sisi berbentuk segitiga adalah alas dan tutup prisma.",
    warna: "#6BAA5E",
  },
];

export default async function Materi3Peta2Step1AmatiJaringJaring({ materi, peta, step = "1", editFoto }: StepComponentProps) {
  const [maskot, ...gambar] = await Promise.all([
    getPageImage("M3-P2-L1-1"),
    ...bangun.map((b) => getPageImage(b.key)),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={6} />
        <div className="flex flex-wrap items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">Ayo Mengamati dan Berpikir</h1>
          <span className="rounded-full bg-[#2563EB] text-white text-xs font-bold px-3 py-1">Tahap 1 dari 6</span>
        </div>
      </div>

      <div className="rounded-[24px] bg-[#EFF4FF] px-6 py-5 flex flex-col sm:flex-row items-center gap-6">
        <EditablePageImage
          imageKey="M3-P2-L1-1"
          materi={materi}
          peta={peta}
          step={step}
          urutan="1"
          src={maskot}
          alt="Siswa laki-laki memegang kaca pembesar"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-40 h-32 flex-shrink-0"
        />
        <div className="flex flex-col gap-3">
          <p className="m-0 text-sm sm:text-base text-[#1E3A8A] leading-[1.7]">
            Amatilah bagaimana setiap bangun ruang dapat dibuka menjadi jaring-jaringnya. Perhatikan bentuk dan
            jumlah sisi yang tampak.
          </p>
          <p className="m-0 text-sm font-bold text-[#2563EB]">Amatilah berbagai susunan bidang datar di bawah ini dengan cermat!</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            A
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Jaring-Jaring Bangun Ruang
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {bangun.map((b, i) => (
            <div
              key={b.nama}
              className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-3"
            >
              <span className="self-center rounded-full bg-[#1E3A8A] text-white text-sm font-bold px-5 py-1.5">{b.nama}</span>
              <EditablePageImage
                imageKey={b.key}
                materi={materi}
                peta={peta}
                step={step}
                urutan={b.urutan}
                src={gambar[i]}
                alt={`Bangun ruang ${b.nama} dan jaring-jaringnya`}
                editable={editFoto}
                imageClassName="object-contain"
                containerClassName="relative w-full aspect-[16/10]"
              />
              <p className="m-0 rounded-xl bg-[#EFF4FF] border border-[#DBE7FF] px-3 py-2.5 text-sm text-[#1E3A8A] text-center">
                {b.jaring}
              </p>
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-md flex-shrink-0" style={{ backgroundColor: b.warna }} />
                <p className="m-0 text-sm text-[#1E3A8A]">{b.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <NextStepButton />
      </div>
    </form>
  );
}
