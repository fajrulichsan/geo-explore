import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";

const bangun: { key: PageImageKey; urutan: string; nama: string; jaring: string; tip: string; warna: string }[] = [
  {
    key: "M3-P2-L4-2",
    urutan: "2",
    nama: "Kubus",
    jaring: "Jaring-jaring kubus terdiri atas 6 persegi yang sama besar.",
    tip: "Setiap persegi mewakili satu sisi kubus.",
    warna: "#A78BCA",
  },
  {
    key: "M3-P2-L4-3",
    urutan: "3",
    nama: "Balok",
    jaring: "Jaring-jaring balok terdiri atas 6 persegi panjang.",
    tip: "Perhatikan ukuran sisi-sisinya. Apakah ada yang sama?",
    warna: "#60A5FA",
  },
  {
    key: "M3-P2-L4-4",
    urutan: "4",
    nama: "Prisma Segitiga",
    jaring: "Jaring-jaring prisma segitiga terdiri atas 5 sisi (2 segitiga dan 3 persegi panjang).",
    tip: "Dua segitiga adalah alas dan tutup prisma yang kongruen.",
    warna: "#6BAA5E",
  },
];

const keterangan = [
  { warna: "#A78BCA", teks: "s = panjang rusuk kubus" },
  { warna: "#3B82F6", teks: "p = panjang, l = lebar, t = tinggi balok" },
  { warna: "#6BAA5E", teks: "a, b, c = panjang sisi alas prisma; t = tinggi prisma" },
];

export default async function Materi3Peta2Step4LanjutkanPengamatan({ materi, peta, step = "4", editFoto }: StepComponentProps) {
  const [maskot, ...gambar] = await Promise.all([
    getPageImage("M3-P2-L4-1"),
    ...bangun.map((b) => getPageImage(b.key)),
  ]);

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="4" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={4} totalSteps={6} />
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
          imageKey="M3-P2-L4-1"
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
        <div className="flex flex-col gap-2">
          <h2 className="m-0 text-xl font-extrabold text-[#1E3A8A]">Lanjutkan Pengamatan!</h2>
          <p className="m-0 text-sm text-[#1E3A8A] leading-[1.7]">
            Pada halaman sebelumnya kamu telah mengamati bentuk jaring-jaring. Sekarang, amatilah ukuran setiap sisi
            pada jaring-jaring tersebut. Perhatikan sisi-sisi yang memiliki ukuran sama.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
            E
          </div>
          <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
            Ukuran Sisi pada Jaring-Jaring
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
                alt={`Jaring-jaring ${b.nama} dengan ukuran sisi`}
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

        <div className="rounded-2xl bg-[#FEF9E7] border border-[#F5E3A0] px-5 py-4 text-sm text-[#1E3A8A] leading-[1.7]">
          <span className="font-bold">Catatan: </span>
          Alas prisma dapat berupa berbagai jenis segitiga (siku-siku, sama kaki, atau sama sisi). Amatilah apakah
          bentuk alas yang berbeda mengubah gagasan bahwa seluruh sisi bangun ruang perlu diperhatikan.
        </div>

        <div className="rounded-2xl bg-white border border-[#E5E7EB] px-5 py-4 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 text-xs text-[#374151]">
          <span className="font-bold text-[#111827]">Keterangan:</span>
          {keterangan.map((k) => (
            <span key={k.teks} className="flex items-center gap-2">
              <span className="w-4 h-4 rounded flex-shrink-0" style={{ backgroundColor: k.warna }} />
              {k.teks}
            </span>
          ))}
        </div>
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
