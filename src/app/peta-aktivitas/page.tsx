import { selesaiPetunjukAction } from "@/app/actions";
import Footer from "@/app/_components/Footer";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImages, type PageImageKey } from "@/lib/pageImages";

const inti = [
  {
    num: 2,
    icon: "lightbulb",
    title: "Ayo Mengamati dan Berpikir",
    desc: "Amati fenomena, gambar, video, pertanyaan, atau visualisasi yang disajikan dan pikirkan hal-hal yang menarik perhatianmu.",
  },
  {
    num: 3,
    icon: "groups",
    title: "Ayo Berdiskusi",
    desc: "Sampaikan dugaan dan ide bersama kelompokmu, lalu rumuskan masalah yang akan diselidiki.",
  },
  {
    num: 4,
    icon: "search",
    title: "Ayo Bereksplorasi",
    desc: "Lakukan eksplorasi untuk mengumpulkan informasi dan data yang diperlukan.",
  },
  {
    num: 5,
    icon: "settings",
    title: "Ayo Mengolah Informasi",
    desc: "Olah dan analisis hasil eksplorasi untuk menemukan pola, hubungan, atau konsep yang berkaitan dengan masalah.",
  },
  {
    num: 6,
    icon: "task_alt",
    title: "Ayo Verifikasi",
    desc: "Periksa kembali dugaan, strategi, dan hasil yang kamu peroleh serta perbaiki jika perlu.",
  },
  {
    num: 7,
    icon: "bar_chart",
    title: "Ayo Menyimpulkan",
    desc: "Tarik kesimpulan berdasarkan hasil penyelidikan dan berikan alasan yang mendukung kesimpulanmu.",
  },
];

const penutup = [
  {
    num: 8,
    icon: "account_box",
    title: "REFLEKSI DIRI",
    desc: "Renungkan pengalaman belajar dan keyakinanmu setelah menyelesaikan kegiatan.",
  },
  {
    num: 9,
    icon: "edit",
    title: "TANTANGAN OPEN-ENDED",
    desc: "Selesaikan masalah terbuka dengan strategi yang kamu pilih. Jika memungkinkan, temukan dan bandingkan strategi lain.",
  },
  {
    num: 10,
    icon: "bookmark",
    title: "RANGKUMAN",
    desc: "Pelajari kembali konsep-konsep penting yang telah kamu temukan selama proses pembelajaran.",
  },
];

function SideCard({
  title,
  headColor,
  borderColor,
  children,
}: {
  title: string;
  headColor: string;
  borderColor: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`bg-white rounded-2xl border-2 ${borderColor} p-4 text-center`}>
      <span className={`inline-block ${headColor} text-white font-bold text-sm md:text-base rounded-lg px-4 py-1.5 mb-3`}>
        {title}
      </span>
      {children}
    </div>
  );
}

function Illustration({
  imageKey,
  urutan,
  src,
  alt,
  editable,
  className,
}: {
  imageKey: PageImageKey;
  urutan: string;
  src: string;
  alt: string;
  editable: boolean;
  className: string;
}) {
  return (
    <EditablePageImage
      imageKey={imageKey}
      materi="0"
      peta="0"
      step="peta-aktivitas"
      urutan={urutan}
      src={src}
      alt={alt}
      editable={editable}
      imageClassName="object-contain mix-blend-multiply"
      containerClassName={className}
    />
  );
}

export default async function PetaAktivitasPage(props: PageProps<"/peta-aktivitas">) {
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
        <header className="flex items-center gap-3 md:gap-5 mb-6">
          <Illustration
            imageKey="peta-aktivitas-papan"
            urutan="1"
            src={images["peta-aktivitas-papan"]}
            alt="Papan catatan dan pensil"
            editable={editFoto}
            className="relative hidden sm:block w-24 h-20 md:w-36 md:h-28 shrink-0"
          />
          <h1 className="flex-1 text-center bg-[#0b2a8a] text-white font-extrabold text-xl md:text-5xl rounded-full py-3 md:py-5 px-4 shadow-md">
            PETA AKTIVITAS PEMBELAJARAN
          </h1>
          <Illustration
            imageKey="peta-aktivitas-bangun-ruang"
            urutan="2"
            src={images["peta-aktivitas-bangun-ruang"]}
            alt="Kubus, limas, dan balok"
            editable={editFoto}
            className="relative hidden sm:block w-20 h-16 md:w-32 md:h-24 shrink-0"
          />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-4">
          <aside className="flex flex-col gap-4 order-2 lg:order-1">
            <SideCard title="KEGIATAN AWAL" headColor="bg-[#0b2a8a]" borderColor="border-[#bfd0ff]">
              <Illustration
                imageKey="peta-aktivitas-buku-awal"
                urutan="3"
                src={images["peta-aktivitas-buku-awal"]}
                alt="Buku terbuka"
                editable={editFoto}
                className="relative w-full h-20 mb-2"
              />
              <p className="text-sm">Mempersiapkan diri untuk belajar.</p>
            </SideCard>

            <SideCard title="PENDEKATAN & TEKNOLOGI" headColor="bg-[#1e6b1e]" borderColor="border-[#b9d8b0]">
              <div className="text-left text-sm space-y-3">
                <p className="font-bold">Pendekatan:</p>
                <div className="flex items-center gap-3">
                  <span className="shrink-0 w-11 h-11 rounded-full bg-[#2f7d1f] text-white flex items-center justify-center">
                    <span className="material-symbols-outlined">extension</span>
                  </span>
                  Open-Ended Problem
                </div>
                <div className="border-t border-dashed border-[#2f7d1f]" />
                <p className="font-bold">Teknologi Eksplorasi:</p>
                <div className="flex items-center gap-3">
                  <span className="shrink-0 w-11 h-11 rounded-xl bg-[#0b2a8a] text-white flex items-center justify-center">
                    <span className="material-symbols-outlined">hub</span>
                  </span>
                  GeoGebra 3D
                </div>
                <div className="flex items-center gap-3">
                  <span className="shrink-0 w-11 h-11 rounded-xl bg-[#f28c28] text-white flex items-center justify-center">
                    <span className="material-symbols-outlined">view_in_ar</span>
                  </span>
                  Augmented Reality (AR)
                </div>
                <div className="flex items-start gap-2 bg-[#f1f8ee] border border-[#b9d8b0] rounded-xl p-3 text-xs">
                  <span className="material-symbols-outlined text-[#2f7d1f] text-lg">check_circle</span>
                  Gunakan teknologi ini untuk membantumu mengeksplorasi dan memahami konsep.
                </div>
              </div>
            </SideCard>

            <SideCard title="KEGIATAN PENUTUP" headColor="bg-[#f28c28]" borderColor="border-[#f6c79a]">
              <Illustration
                imageKey="peta-aktivitas-buku-penutup"
                urutan="4"
                src={images["peta-aktivitas-buku-penutup"]}
                alt="Buku catatan dan pensil"
                editable={editFoto}
                className="relative w-full h-24 mb-2"
              />
              <p className="text-sm">Menguatkan pemahaman dan menutup pembelajaran.</p>
            </SideCard>
          </aside>

          <div className="flex flex-col gap-4 order-1 lg:order-2">
            <section className="bg-white rounded-2xl border-2 border-[#bfd0ff] p-4 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-3 sm:contents">
<span className="shrink-0 w-16 h-16 rounded-full bg-[#1d4ed8] text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl">menu_book</span>
              </span>
              <span className="shrink-0 w-10 h-10 rounded-lg bg-[#1d4ed8] text-white flex items-center justify-center text-2xl font-bold">
                1
              </span>
              <h2 className="text-xl md:text-3xl font-extrabold text-[#1d4ed8] sm:w-56">PENDAHULUAN</h2>
              </div>
              <p className="sm:border-l-2 sm:border-[#0b2a8a] sm:pl-5 text-sm md:text-lg">
                Kenali topik, tujuan pembelajaran, dan manfaat materi yang akan kamu pelajari.
              </p>
            </section>

            <section className="rounded-2xl border-2 border-[#b9d8b0] bg-white overflow-hidden">
              <h2 className="bg-[#2f7d1f] text-white text-center font-bold text-sm md:text-xl py-2 px-4">
                KEGIATAN INTI • DISCOVERY LEARNING
              </h2>
              <ol className="divide-y divide-[#b9d8b0]">
                {inti.map((s) => (
                  <li key={s.num} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-3 md:p-4">
                    <div className="flex items-center gap-3 sm:contents">
                      <span className="shrink-0 w-14 h-14 rounded-full bg-[#1e5a1e] text-white flex items-center justify-center">
                        <span className="material-symbols-outlined text-3xl">{s.icon}</span>
                      </span>
                      <span className="shrink-0 w-9 h-9 rounded-lg bg-[#2f7d1f] text-white flex items-center justify-center text-xl font-bold">
                        {s.num}
                      </span>
                      <h3 className="text-lg md:text-2xl font-extrabold text-[#2f7d1f] leading-tight sm:w-52 md:w-60">
                        {s.title}
                      </h3>
                    </div>
                    <p className="sm:border-l-2 sm:border-[#2f7d1f] sm:pl-5 text-sm md:text-base flex-1">{s.desc}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="rounded-2xl border-2 border-[#f6c79a] bg-[#fffaf5] overflow-hidden">
              <ol className="divide-y divide-[#f6c79a]">
                {penutup.map((s) => (
                  <li key={s.num} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-3 md:p-4">
                    <div className="flex items-center gap-3 sm:contents">
                      <span className="shrink-0 w-11 h-11 rounded-full bg-[#f28c28] text-white flex items-center justify-center">
                        <span className="material-symbols-outlined text-2xl">{s.icon}</span>
                      </span>
                      <span className="shrink-0 w-9 h-9 rounded-lg bg-[#f28c28] text-white flex items-center justify-center text-xl font-bold">
                        {s.num}
                      </span>
                      <h3 className="text-sm md:text-lg font-extrabold text-[#e8731a] leading-tight sm:w-52 md:w-60">
                        {s.title}
                      </h3>
                    </div>
                    <p className="sm:border-l-2 sm:border-[#f28c28] sm:pl-5 text-sm md:text-base flex-1">{s.desc}</p>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>

        <div className="mt-6 bg-white border-2 border-[#bfd0ff] rounded-2xl p-4 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex items-center gap-3 flex-1">
            <span
              className="material-symbols-outlined text-yellow-500 text-5xl shrink-0"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              emoji_objects
            </span>
            <p className="text-sm md:text-base text-[#0b2a8a]">
              Setiap aktivitas saling berkaitan untuk membantumu menemukan dan memahami konsep melalui proses
              Discovery Learning yang bermakna.
            </p>
          </div>
          <div className="md:border-l-2 md:border-[#0b2a8a] md:pl-5 text-sm md:text-base text-[#0b2a8a] flex-1">
            <p>Sudah mengenal perjalanan belajarmu?</p>
            <p className="font-bold">Yuk, lanjutkan ke bagian berikutnya!</p>
          </div>
          <Illustration
            imageKey="peta-aktivitas-buku-submateri"
            urutan="5"
            src={images["peta-aktivitas-buku-submateri"]}
            alt="Buku submateri 1 dan bangun ruang"
            editable={editFoto}
            className="relative hidden md:block w-28 h-28 shrink-0"
          />
        </div>

        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 mt-6 mb-8">
          <BackLink
            href="/peta-konsep"
            className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
          />
          <form action={selesaiPetunjukAction} className="w-full sm:w-auto">
            <SubmitStepButton className="w-full sm:w-auto justify-center inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-2xl text-sm md:text-lg shadow-[0_8px_20px_-5px_rgba(0,72,186,0.4)] hover:shadow-[0_12px_25px_-5px_rgba(0,72,186,0.5)] hover:-translate-y-1 active:translate-y-0 transition-all group">
              <span className="tracking-wide">LANJUT KE SUBMATERI 1</span>
              <i className="fa-solid fa-arrow-right-long group-hover:translate-x-2 transition-transform" />
            </SubmitStepButton>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
