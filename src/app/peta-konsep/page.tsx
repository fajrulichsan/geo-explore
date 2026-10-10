import { redirect } from "next/navigation";
import Footer from "@/app/_components/Footer";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImages, type PageImageKey } from "@/lib/pageImages";

type Bentuk = {
  key: PageImageKey;
  title: string;
  desc: string;
  pill: string;
  border: string;
};

const bentuk: Bentuk[] = [
  {
    key: "peta-konsep-kubus",
    title: "KUBUS",
    desc: "Memiliki enam sisi berbentuk persegi yang kongruen.",
    pill: "bg-[#2f7d1f]",
    border: "border-[#2f7d1f]",
  },
  {
    key: "peta-konsep-balok",
    title: "BALOK",
    desc: "Memiliki enam sisi berbentuk persegi panjang, dengan pasangan sisi yang berhadapan sejajar dan kongruen.",
    pill: "bg-[#2563eb]",
    border: "border-[#2563eb]",
  },
  {
    key: "peta-konsep-prisma",
    title: "PRISMA",
    desc: "Memiliki dua bidang sejajar dan kongruen (alas dan tutup), serta sisi tegak berbentuk persegi panjang.",
    pill: "bg-[#5b21b6]",
    border: "border-[#5b21b6]",
  },
  {
    key: "peta-konsep-limas",
    title: "LIMAS",
    desc: "Memiliki satu alas berbentuk poligon dan sisi tegak berbentuk segitiga.",
    pill: "bg-[#f28c28]",
    border: "border-[#f28c28]",
  },
];

type Submateri = { key: PageImageKey; icon: string; title: string; desc: string };

const submateri: Submateri[] = [
  {
    key: "peta-konsep-klasifikasi",
    icon: "account_tree",
    title: "KLASIFIKASI",
    desc: "Mengelompokkan BRSD berdasarkan sifat dan ciri-cirinya.",
  },
  {
    key: "peta-konsep-jaring-jaring",
    icon: "extension",
    title: "JARING-JARING",
    desc: "Susunan bangun datar yang jika dilipat akan membentuk BRSD.",
  },
  {
    key: "peta-konsep-luas-permukaan",
    icon: "deployed_code",
    title: "LUAS PERMUKAAN",
    desc: "Menghitung jumlah luas seluruh sisi (permukaan) BRSD.",
  },
  {
    key: "peta-konsep-volume",
    icon: "deployed_code",
    title: "VOLUME",
    desc: "Menghitung banyaknya ruang yang ditempati BRSD.",
  },
  {
    key: "peta-konsep-skala",
    icon: "balance",
    title: "HUBUNGAN SKALA TERHADAP LUAS DAN VOLUME",
    desc: "Pengaruh perubahan skala terhadap luas permukaan dan volume.",
  },
];

async function goToPetaAktivitas() {
  "use server";
  redirect("/peta-aktivitas");
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <span className="bg-[#0b2a8a] text-white font-bold text-sm md:text-xl rounded-full px-6 md:px-10 py-1.5 md:py-2 shadow-md">
        {children}
      </span>
    </div>
  );
}

function Connector() {
  return <div className="mx-auto w-[3px] h-6 md:h-8 bg-[#0b2a8a]" />;
}

export default async function PetaKonsepPage(props: PageProps<"/peta-konsep">) {
  const images = await getPageImages();
  const searchParams = await props.searchParams;
  const editFoto = searchParams?.["edit-foto"] === "true";

  return (
    <div
      className="bg-[#f7f9fb] text-[#191c1e] min-h-screen flex flex-col"
      style={{
        backgroundImage: "radial-gradient(#dbe1ff 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <main className="max-w-[1200px] mx-auto px-4 md:px-6 py-6 md:py-8 w-full flex-1">
        <div className="relative">
          <div className="lg:absolute lg:left-0 lg:top-0 inline-flex items-center gap-3 bg-white border border-[#bfd0ff] rounded-full pl-3 pr-6 py-2 shadow-sm mb-4 lg:mb-0">
            <span
              className="material-symbols-outlined text-[#2563eb] text-4xl md:text-5xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              map
            </span>
            <span className="text-xl md:text-3xl font-extrabold text-[#0b2a8a]">PETA KONSEP</span>
          </div>

          <div className="max-w-[640px] mx-auto bg-white border-2 border-[#0b2a8a] rounded-2xl overflow-hidden shadow-md">
            <h1 className="bg-[#0b2a8a] text-white text-center font-extrabold text-xl md:text-4xl leading-tight py-3 px-4">
              BANGUN RUANG SISI DATAR (BRSD)
            </h1>
            <p className="text-center text-sm md:text-xl text-[#191c1e] px-4 py-3 md:py-4">
              Bangun ruang yang semua sisinya berbentuk bangun datar (poligon).
            </p>
          </div>
        </div>

        <Connector />
        <Pill>Berdasarkan Bentuk</Pill>
        <Connector />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 mt-2">
          {bentuk.map((b) => (
            <div key={b.title} className={`relative bg-white rounded-2xl border-2 ${b.border} pt-6 pb-4 px-4`}>
              <span
                className={`absolute -top-4 left-1/2 -translate-x-1/2 ${b.pill} text-white font-bold text-sm md:text-lg rounded-full px-8 py-1 shadow`}
              >
                {b.title}
              </span>
              <div className="flex items-center gap-3">
                <EditablePageImage
                  imageKey={b.key}
                  materi="0"
                  peta="0"
                  step="peta-konsep"
                  urutan={String(bentuk.indexOf(b) + 1)}
                  src={images[b.key]}
                  alt={`Bangun ruang ${b.title.toLowerCase()}`}
                  editable={editFoto}
                  imageClassName="object-contain mix-blend-multiply"
                  containerClassName="relative w-24 h-28 shrink-0"
                />
                <p className="text-sm md:text-base leading-6 text-[#191c1e]">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Connector />
        <Pill>Submateri Pembelajaran</Pill>
        <Connector />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-2">
          {submateri.map((s, i) => (
            <div key={s.title} className="bg-white rounded-2xl border-2 border-[#bfd0ff] p-4 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <span className="shrink-0 w-11 h-11 rounded-full bg-[#0b2a8a] text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">{s.icon}</span>
                </span>
                <h3 className="text-sm font-extrabold text-[#0b2a8a] leading-tight">{s.title}</h3>
              </div>
              <div className="h-[2px] bg-[#bfd0ff] mb-3" />
              <div className="flex items-center gap-3">
                <EditablePageImage
                  imageKey={s.key}
                  materi="0"
                  peta="0"
                  step="peta-konsep"
                  urutan={String(bentuk.length + i + 1)}
                  src={images[s.key]}
                  alt={s.title}
                  editable={editFoto}
                  imageClassName="object-contain mix-blend-multiply"
                  containerClassName="relative w-16 h-20 shrink-0"
                />
                <p className="text-xs md:text-sm leading-5 text-[#191c1e]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-white border-2 border-[#bfd0ff] rounded-2xl p-4 flex items-center gap-4">
          <svg width="56" height="56" viewBox="0 0 48 48" fill="none" className="shrink-0" aria-hidden="true">
            <circle cx="24" cy="24" r="21" stroke="#0b2a8a" strokeWidth="3" />
            <circle cx="24" cy="24" r="13" stroke="#0b2a8a" strokeWidth="3" />
            <circle cx="24" cy="24" r="5" fill="#0b2a8a" />
            <path d="M24 24 L40 8" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <p className="text-sm md:text-lg text-[#0b2a8a]">
            Peta konsep ini menunjukkan hubungan antar submateri Bangun Ruang Sisi Datar. Gunakan sebagai
            panduan awal sebelum mempelajari setiap submateri secara lebih mendalam.
          </p>
        </div>

        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 mt-8 mb-8">
          <BackLink
            href="/petunjuk-3"
            className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
          />
          <form action={goToPetaAktivitas} className="w-full sm:w-auto">
            <SubmitStepButton className="w-full sm:w-auto justify-center inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-2xl text-sm md:text-lg shadow-[0_8px_20px_-5px_rgba(0,72,186,0.4)] hover:shadow-[0_12px_25px_-5px_rgba(0,72,186,0.5)] hover:-translate-y-1 active:translate-y-0 transition-all group">
              <span className="tracking-wide">LANJUTKAN</span>
              <i className="fa-solid fa-arrow-right-long group-hover:translate-x-2 transition-transform" />
            </SubmitStepButton>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
