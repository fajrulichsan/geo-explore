import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

const bangunRuang = [
  {
    letter: "F",
    imageKey: "M3-P2-L4-1" as PageImageKey,
    nama: "Kubus",
    deskripsi: "Jaring-jaring kubus terdiri atas 6 persegi yang sama besar.",
    catatan: "Perhatikan ukuran sisi-sisinya. Semua sisi bertanda s (panjang rusuk kubus).",
    tint: "bg-[#F5F3FF]",
  },
  {
    letter: "G",
    imageKey: "M3-P2-L4-2" as PageImageKey,
    nama: "Balok",
    deskripsi: "Jaring-jaring balok terdiri atas 6 persegi panjang.",
    catatan: "Perhatikan ukuran sisi-sisinya. Apakah ada yang sama?",
    tint: "bg-[#EFF4FF]",
  },
  {
    letter: "H",
    imageKey: "M3-P2-L4-3" as PageImageKey,
    nama: "Prisma Segitiga",
    deskripsi: "Jaring-jaring prisma segitiga terdiri atas 5 sisi (2 segitiga dan 3 persegi panjang).",
    catatan: "Dua segitiga adalah alas dan tutup prisma yang kongruen.",
    tint: "bg-[#F0FDF4]",
  },
];

export default async function Materi3Peta2Step4UkuranSisi({
  materi,
  peta,
  step = "4",
  editFoto,
}: StepComponentProps) {
  const bangunImages = await Promise.all(bangunRuang.map((b) => getPageImage(b.imageKey)));

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={6} />
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-2xl sm:text-[32px] font-extrabold text-[#111827]">
            Lanjutkan Pengamatan!
          </h1>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-xl">
          Pada halaman sebelumnya kamu telah mengamati bentuk jaring-jaring. Sekarang, amatilah ukuran
          setiap sisi pada jaring-jaring tersebut. Perhatikan sisi-sisi yang memiliki ukuran sama.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        {bangunRuang.map((b, i) => (
          <div
            key={b.letter}
            className="flex flex-col border border-[#E5E7EB] rounded-[20px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
          >
            <div className="flex items-center gap-2.5 px-4 pt-4">
              <div className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                {b.letter}
              </div>
              <p className="m-0 text-sm font-bold text-[#111827]">{b.nama}</p>
            </div>
            <div className={`relative w-full aspect-[4/3] mt-3 ${b.tint}`}>
              <EditablePageImage
                imageKey={b.imageKey}
                materi={materi}
                peta={peta}
                step={step}
                urutan={String(i + 1)}
                src={bangunImages[i]}
                alt={`Jaring-jaring ${b.nama} dengan ukuran sisi`}
                editable={editFoto}
                imageClassName="object-contain"
                containerClassName="relative w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-2 p-4">
              <p className="m-0 text-xs leading-[1.6] text-[#374151] bg-[#F9FAFB] rounded-lg px-3 py-2">
                {b.deskripsi}
              </p>
              <p className="m-0 text-xs leading-[1.6] text-[#4B5563]">{b.catatan}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-start gap-3 bg-white border border-[#E5E7EB] rounded-2xl px-5 py-4">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" className="mt-0.5 flex-shrink-0">
          <path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z" />
        </svg>
        <p className="m-0 text-xs leading-[1.7] text-[#374151]">
          <span className="font-bold text-[#111827]">Catatan: </span>
          Alas prisma dapat berupa berbagai jenis segitiga (siku-siku, sama kaki, atau sama sisi).
          Amatilah apakah bentuk alas yang berbeda mengubah gagasan bahwa seluruh sisi bangun perlu
          diperhatikan.
        </p>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl px-5 py-4 text-xs text-[#4B5563]">
        <span className="font-bold text-[#111827]">Keterangan:</span>
        <span><span className="font-bold text-[#7C3AED]">s</span> = panjang rusuk kubus</span>
        <span><span className="font-bold text-[#2563EB]">p</span> = panjang, <span className="font-bold text-[#2563EB]">l</span> = lebar, <span className="font-bold text-[#2563EB]">t</span> = tinggi balok</span>
        <span><span className="font-bold text-[#16A34A]">a, b, c</span> = panjang sisi alas prisma, <span className="font-bold text-[#16A34A]">t</span> = tinggi prisma</span>
      </div>

      <div className="flex justify-between items-center">
        <BackLink
          href={`/belajar/${materi}/${peta}/3`}
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
