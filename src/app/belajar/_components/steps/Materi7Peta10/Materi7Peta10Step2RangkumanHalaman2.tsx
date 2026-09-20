import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage, type PageImageKey } from "@/lib/pageImages";
import {
  ArrowDown,
  FlowBox,
  Frac,
  HebatBanner,
  HiddenStepFields,
  PyramidIcon,
  SectionTitle,
  StepFooter,
  StepTitle,
  Sub,
  cardClass,
} from "./Materi7Peta10Parts";

const STEP = 2;

const openEnded = [
  "Volume limas yang sama dapat diperoleh dari berbagai pasangan luas alas dan tinggi.",
  "Bentuk limas yang berbeda dapat memiliki volume yang sama.",
  "Satu masalah dapat diselesaikan dengan lebih dari satu strategi.",
  "Setiap strategi perlu disertai alasan yang logis.",
  "Berdiskusi membantu menemukan berbagai alternatif penyelesaian.",
  "Memilih strategi yang paling efisien merupakan bagian dari berpikir matematis.",
];

const kataKunciClass =
  "rounded-2xl border border-[#BFDBFE] bg-[#F8FAFF] p-3 flex flex-col items-center gap-1.5 text-center";

function KataKunci({ judul, arti, children }: { judul: string; arti: string; children: React.ReactNode }) {
  return (
    <div className={kataKunciClass}>
      <div className="flex h-16 w-full items-center justify-center">{children}</div>
      <div className="text-sm font-extrabold text-[#2563EB]">{judul}</div>
      <p className="m-0 text-xs text-[#4B5563] leading-[1.5]">{arti}</p>
    </div>
  );
}

const rumus = (
  <>
    <em>V</em> = <Frac n="1" d="3" /> × <em>L</em>
    <Sub>alas</Sub> × <em>t</em>
  </>
);

export default async function Materi7Peta10Step2RangkumanHalaman2({
  materi,
  peta,
  editFoto,
}: StepComponentProps) {
  const [tigaLimas, sepertiga, kubusKuning, prisma, hero] = await Promise.all([
    getPageImage("M7-P10-L2-2"),
    getPageImage("M7-P10-L2-1"),
    getPageImage("M7-P10-L2-3"),
    getPageImage("M7-P10-L2-4"),
    getPageImage("M7-P10-L2-5"),
  ]);

  const img = (
    imageKey: PageImageKey,
    urutan: string,
    src: string,
    alt: string,
    containerClassName: string,
    natural = false,
  ) => (
    <EditablePageImage
      imageKey={imageKey}
      materi={materi}
      peta={peta}
      step="2"
      urutan={urutan}
      src={src}
      alt={alt}
      editable={editFoto}
      natural={natural}
      imageClassName="object-contain"
      containerClassName={containerClassName}
    />
  );

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="E" title="Peta Konsep Volume Limas" color="blue" />
        <div className={`${cardClass} flex flex-col items-center gap-3`}>
          <div className="rounded-xl bg-[#111C5B] px-8 py-2 text-base font-extrabold text-white">Volume Limas</div>
          <ArrowDown />
          <div className="grid w-full grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-2xl border border-[#A7F3D0] bg-[#ECFDF5] p-3 text-center text-sm text-[#065F46] flex flex-col items-center gap-2">
              <span className="font-extrabold">Luas Alas (<em>L</em><Sub>alas</Sub>)</span>
              <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden>
                <rect x="4" y="4" width="64" height="64" fill="#fff" stroke="#374151" strokeWidth="1.5" />
                <path d="M4 25h64M4 46h64M25 4v64M46 4v64" stroke="#374151" strokeWidth="1" />
                <path d="M4 25h21v21H4zM25 4h21v21H25zM46 46h22v22H46zM25 46h21v22H25z" fill="#16A34A" />
              </svg>
              Bidang dasar limas.
            </div>
            <div className="rounded-2xl border border-[#BFDBFE] bg-[#EFF4FF] p-3 text-center text-sm text-[#1E3A8A] flex flex-col items-center gap-2">
              <span className="font-extrabold">Tinggi Limas (<em>t</em>)</span>
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M14 8h44M14 64h44" strokeDasharray="4 3" strokeWidth="1.5" />
                <path d="M36 12v48M29 19l7-8 7 8M29 53l7 8 7-8" />
              </svg>
              Jarak tegak lurus dari alas ke puncak.
            </div>
            <div className="rounded-2xl border border-[#DDD6FE] bg-[#F5F3FF] p-3 text-center text-sm text-[#5B21B6] flex flex-col items-center gap-2">
              <span className="font-extrabold">Faktor <Frac n="1" d="3" /></span>
              {img("M7-P10-L2-1", "1", sepertiga, "Tiga limas sama dengan satu prisma", "relative w-full max-w-[200px]", true)}
              Volume satu limas adalah 1/3 volume prisma dengan alas dan tinggi yang sama.
            </div>
          </div>
          <ArrowDown />
          <div className="rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-8 py-3 text-center">
            <div className="text-sm font-extrabold text-[#991B1B]">Rumus Volume Limas</div>
            <div className="text-xl font-bold text-[#111827]">{rumus}</div>
          </div>
          <ArrowDown />
          <div className="grid w-full grid-cols-3 gap-2 sm:gap-3">
            <FlowBox color="yellow">Limas Segitiga</FlowBox>
            <FlowBox color="blue">Limas Persegi</FlowBox>
            <FlowBox color="green">Limas Segi-n</FlowBox>
          </div>
          {img("M7-P10-L2-2", "2", tigaLimas, "Limas segitiga, limas persegi, dan limas segi-n", "relative w-full max-w-[420px]", true)}
          <p className="m-0 w-full rounded-xl bg-[#EFF4FF] px-4 py-2.5 text-center text-sm font-semibold text-[#1E3A8A]">
            Semua limas dengan alas berbentuk segi-n mengikuti rumus yang sama.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="F" title="Apa yang Dipelajari dari Open-Ended?" color="amber" />
        <div className={`${cardClass} flex flex-col divide-y divide-[#E5E7EB] !py-2`}>
          {openEnded.map((teks) => (
            <div key={teks} className="flex items-start gap-3 py-3">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="flex-shrink-0" aria-hidden>
                <circle cx="12" cy="12" r="11" fill="#1E3A8A" />
                <path d="M7 12.5l3.5 3.5L17 9" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="m-0 text-sm text-[#374151] leading-[1.6]">{teks}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="G" title="Kata Kunci" color="green" />
        <p className="m-0 text-sm text-[#374151]">Beberapa kata kunci yang perlu kamu ingat pada Submateri 7:</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          <KataKunci judul="Volume Limas" arti="Banyaknya ruang di dalam limas.">
            {img("M7-P10-L2-3", "3", kubusKuning, "Kubus kuning", "relative h-14 aspect-[259/249]")}
          </KataKunci>
          <KataKunci judul="Luas Alas" arti="Luas bidang dasar yang menjadi alas limas.">
            <svg width="56" height="56" viewBox="0 0 72 72" aria-hidden>
              <rect x="4" y="4" width="64" height="64" fill="#fff" stroke="#374151" strokeWidth="2" />
              <path d="M4 25h64M4 46h64M25 4v64M46 4v64" stroke="#374151" strokeWidth="1" />
              <path d="M4 25h21v21H4zM25 4h21v21H25zM46 46h22v22H46zM25 46h21v22H25z" fill="#16A34A" />
            </svg>
          </KataKunci>
          <KataKunci judul="Tinggi Limas" arti="Jarak tegak lurus dari alas ke titik puncak limas.">
            <svg width="56" height="56" viewBox="0 0 72 72" fill="none" stroke="#2563EB" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M14 8h44M14 64h44" strokeDasharray="4 3" strokeWidth="1.6" />
              <path d="M36 12v48M29 19l7-8 7 8M29 53l7 8 7-8" />
            </svg>
          </KataKunci>
          <KataKunci judul="Faktor 1/3" arti="Setiap limas adalah sepertiga prisma yang bersesuaian.">
            <span className="text-3xl font-bold text-[#1E3A8A]"><Frac n="1" d="3" /></span>
          </KataKunci>
          <KataKunci judul="Prisma" arti="Bangun ruang yang menjadi pembanding untuk limas.">
            {img("M7-P10-L2-4", "4", prisma, "Prisma segi empat berwarna ungu dan hijau", "relative h-14 aspect-[199/249]")}
          </KataKunci>
          <KataKunci judul="Limas" arti="Bangun ruang yang memiliki alas dan satu titik puncak.">
            <PyramidIcon color="#F59E0B" size={52} />
          </KataKunci>
          <KataKunci judul="Rumus Volume" arti="Aturan untuk menghitung volume limas.">
            <span className="rounded-lg border border-[#BFDBFE] bg-white px-2 py-1 text-sm font-bold text-[#1E3A8A]">{rumus}</span>
          </KataKunci>
          <KataKunci judul="Satuan Volume" arti="Satuan yang digunakan untuk menyatakan volume.">
            <span className="text-2xl font-bold text-[#1E3A8A]">cm<sup>3</sup></span>
          </KataKunci>
          <KataKunci judul="Verifikasi" arti="Proses memeriksa kesesuaian suatu dugaan, konsep, hasil, berdasarkan data dan alasan.">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="#86EFAC" stroke="#16A34A" strokeWidth="1.2" strokeLinejoin="round" aria-hidden>
              <path d="M12 3 3 8l9 5 9-5zM3 12l9 5 9-5M3 16l9 5 9-5" fillOpacity="0.6" />
            </svg>
          </KataKunci>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="H" title="Pesan Akhir" color="purple" />
        <div className={`${cardClass} !p-3`}>
          {img("M7-P10-L2-5", "5", hero, "Tiga siswa dengan model limas dan GeoGebra 3D menyampaikan pesan akhir", "relative w-full overflow-hidden rounded-2xl", true)}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="I" title="Persiapan Melanjutkan Pembelajaran" color="blue" />
        <div className="rounded-[20px] border border-[#BFDBFE] bg-[#EFF4FF] px-5 py-5 flex items-center gap-5">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0" aria-hidden>
            <path d="M2 5c3-1 7-1 10 2 3-3 7-3 10-2v13c-3-1-7-1-10 2-3-3-7-3-10-2z" />
            <path d="M12 7v13" />
            <path d="M15 2l3 3M18 2v3h3" />
          </svg>
          <p className="m-0 text-sm text-[#1E3A8A] leading-[1.7]">
            Pada submateri berikutnya, kamu akan menggunakan konsep volume limas untuk menyelesaikan berbagai permasalahan yang lebih
            kompleks dan menerapkannya dalam kehidupan sehari-hari.
          </p>
        </div>
      </div>

      <HebatBanner
        nextTitle={
          <>
            Sampai jumpa pada Submateri 8: Skala dan Volume! Siapkan diri untuk tantangan baru, ya!
          </>
        }
      >
        Kamu telah berhasil merangkum konsep volume limas dengan sangat baik! Teruslah berpikir kritis dan kreatif dalam belajar
        matematika!
      </HebatBanner>

      <StepFooter materi={materi} peta={peta} step={STEP} final />
    </form>
  );
}
