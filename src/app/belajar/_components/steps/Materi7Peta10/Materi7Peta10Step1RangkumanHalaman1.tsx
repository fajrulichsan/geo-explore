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

const STEP = 1;

const rumus = (
  <>
    <em>V</em> = <Frac n="1" d="3" /> × <em>L</em>
    <Sub>alas</Sub> × <em>t</em>
  </>
);

export default async function Materi7Peta10Step1RangkumanHalaman1({
  materi,
  peta,
  editFoto,
}: StepComponentProps) {
  const [hero, segitiga, persegi, segilima, tigaLimas, segiN] = await Promise.all([
    getPageImage("M7-P10-L1-1"),
    getPageImage("M7-P10-L1-2"),
    getPageImage("M7-P10-L1-3"),
    getPageImage("M7-P10-L1-4"),
    getPageImage("M7-P10-L1-6"),
    getPageImage("M7-P10-L1-5"),
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
      step="1"
      urutan={urutan}
      src={src}
      alt={alt}
      editable={editFoto}
      natural={natural}
      imageClassName="object-contain"
      containerClassName={containerClassName}
    />
  );

  const bentukAlas = [
    { limas: "#8B5CF6", nama: "Limas Segitiga", src: segitiga, key: "M7-P10-L1-2" as const, urutan: "2", cls: "w-16 aspect-[540/240]", alt: "Alas segitiga", ciri: "Segitiga (3 sisi)" },
    { limas: "#F59E0B", nama: "Limas Persegi", src: persegi, key: "M7-P10-L1-3" as const, urutan: "3", cls: "w-10 aspect-[192/186]", alt: "Alas persegi", ciri: "Persegi (4 sisi)" },
    { limas: "#3B82F6", nama: "Limas Segilima", src: segilima, key: "M7-P10-L1-4" as const, urutan: "4", cls: "w-11 aspect-[247/226]", alt: "Alas segilima", ciri: "Segilima (5 sisi)" },
  ];

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} />

      {img("M7-P10-L1-1", "1", hero, "Tiga siswa merangkum konsep volume limas dengan GeoGebra 3D, AR, dan model limas", "relative w-full overflow-hidden rounded-[20px]", true)}

      <div className={`${cardClass} flex flex-col gap-3`}>
        <h2 className="m-0 text-base font-extrabold text-[#1E3A8A]">Pengantar</h2>
        <p className="m-0 text-sm text-[#374151] leading-[1.7]">
          Kamu telah mempelajari rumus volume limas dan berbagai cara menyelesaikan masalah. Sekarang saatnya kamu menggunakan
          pengetahuan tersebut untuk merangkum konsep penting yang telah kamu temukan dengan <strong className="text-[#2563EB]">lebih sistematis</strong>.
        </p>
        <p className="m-0 text-sm text-[#374151] leading-[1.7]">
          Perhatikan rangkuman berikut sebagai bekal untuk melanjutkan pembelajaran selanjutnya.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="A" title="Apa yang Telah Kamu Pelajari?" color="blue" />
        <div className={`${cardClass} flex flex-col gap-3`}>
          <p className="m-0 text-sm text-[#374151] leading-[1.7]">
            Pada Submateri 7, kamu telah mengamati hubungan limas dan prisma, berdiskusi, mengeksplorasi menggunakan GeoGebra dan
            Augmented Reality, memverifikasi bahwa <strong>tiga kali isi satu limas dapat memenuhi satu prisma</strong> yang memiliki
            luas alas dan tinggi yang sama, menyimpulkan rumus volume limas, serta menyelesaikan Tantangan Open-Ended.
          </p>
          <p className="m-0 text-sm font-semibold text-[#92400E] bg-[#FEF9E7] border border-[#FDE68A] rounded-xl px-4 py-3">
            Sekarang rangkum kembali konsep-konsep penting yang telah kamu temukan.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="B" title="Hubungan Luas Alas, Tinggi, dan Volume" color="amber" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={`${cardClass} flex flex-col gap-2`}>
            <div className="grid grid-cols-2 gap-3">
              <FlowBox color="yellow">
                Luas Alas
                <span className="block text-xs font-medium">(<em>L</em><Sub>alas</Sub>)</span>
              </FlowBox>
              <FlowBox color="green">
                Tinggi Limas
                <span className="block text-xs font-medium">(<em>t</em>)</span>
              </FlowBox>
            </div>
            <ArrowDown />
            <FlowBox color="blue">
              Volume Prisma
              <span className="block text-xs font-medium">(dengan alas dan tinggi yang sama)</span>
              <span className="block"><em>V</em><Sub>prisma</Sub> = <em>L</em><Sub>alas</Sub> × <em>t</em></span>
            </FlowBox>
            <ArrowDown />
            <FlowBox color="purple">
              Diambil Sepertiga
              <span className="block text-xs font-medium"><Frac n="1" d="3" /> × dari volume prisma</span>
            </FlowBox>
            <ArrowDown />
            <FlowBox color="red">
              Volume Limas
              <span className="block">{rumus}</span>
            </FlowBox>
          </div>

          <div className="flex flex-col gap-3">
            <div className="rounded-[20px] border border-[#BFDBFE] bg-[#EFF4FF] px-5 py-4">
              <h3 className="m-0 mb-1 text-base font-extrabold text-[#2563EB]">Kesimpulan Umum</h3>
              <p className="m-0 text-sm text-[#1E3A8A] leading-[1.6]">
                Volume limas diperoleh dari sepertiga hasil perkalian luas alas dan tinggi limas.
              </p>
            </div>
            <div className="rounded-[20px] border-2 border-[#2563EB] bg-white px-5 py-4 text-center">
              <h3 className="m-0 mb-1 text-base font-extrabold text-[#2563EB] text-left">Rumus Umum</h3>
              <div className="text-2xl font-bold text-[#111827]">{rumus}</div>
            </div>
            <div className="rounded-[20px] border border-[#FDE68A] bg-[#FEF9E7] px-5 py-4 text-sm text-[#92400E] leading-[1.7]">
              <h3 className="m-0 mb-1 text-base font-extrabold">Keterangan:</h3>
              <div><em>L</em><Sub>alas</Sub> = luas alas</div>
              <div><em>t</em> = tinggi limas</div>
              <div><em>V</em> = volume limas</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="C" title="Ringkasan Rumus Volume" color="green" />
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_240px] gap-4 items-start">
          <div className={`${cardClass} !p-3 sm:!p-4 overflow-x-auto`}>
            <table className="w-full min-w-[560px] border-separate border-spacing-y-1.5 text-sm">
              <thead>
                <tr className="text-xs font-bold text-white">
                  <th className="bg-[#1E3A8A] rounded-l-xl px-3 py-2.5 text-left">Bangun</th>
                  <th className="bg-[#1E3A8A] px-3 py-2.5 text-center">Ilustrasi Alas</th>
                  <th className="bg-[#1E3A8A] px-3 py-2.5 text-center">Ciri Alas</th>
                  <th className="bg-[#1E3A8A] rounded-r-xl px-3 py-2.5 text-center">Rumus Volume</th>
                </tr>
              </thead>
              <tbody>
                {bentukAlas.map((b) => (
                  <tr key={b.nama} className="bg-[#F8FAFF]">
                    <td className="rounded-l-xl px-3 py-2">
                      <span className="flex items-center gap-2 font-semibold text-[#374151]">
                        <PyramidIcon color={b.limas} size={28} />
                        {b.nama}
                      </span>
                    </td>
                    <td className="px-3 py-2">
                      <div className="flex justify-center">
                        {img(b.key, b.urutan, b.src, b.alt, `relative ${b.cls}`)}
                      </div>
                    </td>
                    <td className="px-3 py-2 text-center text-[#374151]">{b.ciri}</td>
                    <td className="rounded-r-xl px-3 py-2 text-center text-[#111827]">{rumus}</td>
                  </tr>
                ))}
                <tr className="bg-[#FEF9E7]">
                  <td className="rounded-l-xl px-3 py-2 font-bold text-[#92400E]">
                    Generalisasi: Semua Limas (Segi-n)
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex justify-center">
                      {img("M7-P10-L1-5", "5", segiN, "Limas dengan alas segi-n", "relative w-16 aspect-[718/592]")}
                    </div>
                  </td>
                  <td className="px-3 py-2 text-center text-[#374151]">Segi-n (n sisi)</td>
                  <td className="rounded-r-xl px-3 py-2 text-center text-[#111827]">{rumus}</td>
                </tr>
              </tbody>
            </table>
            <p className="mx-1 mt-2 mb-0 rounded-xl bg-[#FEF9E7] px-3 py-2 text-center text-xs font-semibold text-[#92400E]">
              Semua limas dengan alas berbentuk segi-n mengikuti rumus yang sama.
            </p>
          </div>

          <div className="rounded-[20px] border border-[#FDE68A] bg-[#FEF9E7] px-5 py-4 shadow-[0_4px_10px_rgba(217,119,6,0.12)]">
            <h3 className="m-0 mb-1 text-lg font-extrabold text-[#DC2626]">Catatan Penting</h3>
            <p className="m-0 text-sm text-[#92400E] leading-[1.6]">
              Bentuk alas boleh berbeda-beda, tetapi rumus volume limasnya sama, selama luas alas dan tingginya sama.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="D" title="Hubungan Tiga Kali Isi Satu Limas dengan Satu Prisma" color="purple" />
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-4">
          <div className={`${cardClass} flex flex-col gap-2 justify-center`}>
            <FlowBox color="blue">
              Prisma
              <span className="block text-xs font-medium">(luas alas dan tinggi sama)</span>
            </FlowBox>
            <ArrowDown />
            <FlowBox color="green">Diisi tepat oleh tiga kali isi satu limas</FlowBox>
            <ArrowDown />
            <FlowBox color="purple">
              Volume satu limas = <Frac n="1" d="3" /> × volume prisma
            </FlowBox>
          </div>
          <div className="rounded-[20px] border border-[#FDE68A] bg-[#FEF9E7] px-5 py-4 flex flex-col gap-2">
            <h3 className="m-0 text-base font-extrabold text-[#2563EB]">Kesimpulan</h3>
            <p className="m-0 text-sm text-[#92400E] leading-[1.6]">
              Tiga kali isi satu limas dengan luas alas dan tinggi yang sama dapat memenuhi tepat satu prisma tersebut.
            </p>
            <div className="text-center text-xl font-bold text-[#111827]">
              <em>V</em><Sub>limas</Sub> = <Frac n="1" d="3" /> × <em>V</em><Sub>prisma</Sub>
            </div>
          </div>
        </div>
        <div className={`${cardClass} flex flex-col gap-3 items-center`}>
          {img("M7-P10-L1-6", "6", tigaLimas, "Tiga limas ditambahkan hingga memenuhi satu prisma", "relative w-full max-w-[640px]", true)}
          <p className="m-0 text-center text-sm text-[#374151] leading-[1.6]">
            Tiga kali isi satu limas (dengan luas alas dan tinggi yang sama) dapat memenuhi tepat satu prisma.
          </p>
        </div>
      </div>

      <HebatBanner
        nextTitle={
          <>
            Lanjutkan ke Halaman 2 untuk melihat peta konsep, hasil pembelajaran, dan persiapan menuju submateri berikutnya.
          </>
        }
      >
        Kamu telah berhasil menemukan sendiri rumus volume limas melalui pengamatan, eksplorasi, verifikasi, diskusi, dan penalaran
        matematis.
      </HebatBanner>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
