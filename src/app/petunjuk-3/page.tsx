import Footer from "@/app/_components/Footer";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { redirect } from "next/navigation";
import { getPageImage } from "@/lib/pageImages";

async function goToPetaKonsep() {
  "use server";
  redirect("/peta-konsep");
}

export default async function Petunjuk3Page(props: PageProps<"/petunjuk-3">) {
  const shapesImage = await getPageImage("petunjuk3-bangun-ruang");
  const siswaImage = await getPageImage("petunjuk3-siswa");
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
      <main className="max-w-[900px] mx-auto px-4 md:px-6 py-6 md:py-8 w-full flex-1">
        <header className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 md:gap-5">
            <div className="shrink-0 w-16 h-16 md:w-24 md:h-24 bg-[#00338a] text-white rounded-2xl flex flex-col items-center justify-center leading-none shadow-md">
              <span className="text-sm md:text-lg font-bold">Bab</span>
              <span className="text-3xl md:text-5xl font-extrabold">II</span>
            </div>
            <h1 className="text-3xl md:text-[56px] leading-[1.1] tracking-tight font-extrabold text-[#00338a]">
              BANGUN RUANG
            </h1>
          </div>
          <EditablePageImage
            imageKey="petunjuk3-bangun-ruang"
            materi="0"
            peta="0"
            step="petunjuk-3"
            urutan="1"
            src={shapesImage}
            alt="Kubus, limas, dan balok"
            editable={editFoto}
            imageClassName="object-contain mix-blend-multiply"
            containerClassName="relative hidden sm:block w-40 h-28 md:w-56 md:h-40 shrink-0"
          />
        </header>

        <div className="flex items-center gap-3 mb-6">
          <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#00338a] text-white flex items-center justify-center text-xl md:text-2xl font-bold shadow-md">
            A.
          </div>
          <div className="flex-1 bg-[#dbe1ff] rounded-full px-4 md:px-8 py-2 md:py-3">
            <h2 className="text-base md:text-2xl font-bold text-[#00338a]">
              BANGUN RUANG SISI DATAR (BRSD)
            </h2>
          </div>
        </div>

        <section className="bg-white/80 backdrop-blur-[10px] border border-[#bfd0ff] rounded-2xl p-5 md:p-8 shadow-[0_4px_20px_rgba(0,51,138,0.06)] mb-6">
          <div className="flex items-start gap-4">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              className="shrink-0 hidden sm:block"
              aria-hidden="true"
            >
              <circle cx="24" cy="24" r="21" stroke="#00338a" strokeWidth="3" />
              <circle cx="24" cy="24" r="13" stroke="#00338a" strokeWidth="3" />
              <circle cx="24" cy="24" r="5" fill="#00338a" />
              <path d="M24 24 L40 8" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <div>
              <h3 className="text-lg md:text-2xl font-bold text-[#00338a] mb-3">Tujuan Pembelajaran</h3>
              <p className="text-sm md:text-base leading-7 md:leading-8 text-[#191c1e]">
                Setelah mempelajari materi Bangun Ruang Sisi Datar melalui kegiatan pembelajaran berbasis{" "}
                <em>Open-Ended Problem</em> dengan bantuan <em>GeoGebra 3D</em> dan{" "}
                <em>Augmented Reality</em> (AR), kamu diharapkan mampu memahami konsep kubus, balok, prisma,
                dan limas melalui kegiatan mengamati, mengeksplorasi, berdiskusi, menguji, dan menyimpulkan,
                mengidentifikasi sifat-sifat bangun ruang sisi datar, membuat dan menganalisis berbagai
                jaring-jaring, menentukan luas permukaan dan volume, serta menganalisis hubungan perubahan
                skala terhadap luas dan volume. Selain itu, kamu diharapkan mampu menggunakan berbagai
                strategi penyelesaian, memberikan alasan matematis yang logis, membandingkan alternatif
                solusi, serta merefleksikan proses berpikir dalam menyelesaikan permasalahan terbuka.
                Selama proses pembelajaran, kamu juga diharapkan semakin percaya diri dalam mengemukakan
                ide, berdiskusi, bekerja sama dengan teman, dan terus berusaha menghadapi berbagai
                tantangan dalam belajar matematika.
              </p>
            </div>
          </div>
        </section>

        <EditablePageImage
          imageKey="petunjuk3-siswa"
          materi="0"
          peta="0"
          step="petunjuk-3"
          urutan="2"
          src={siswaImage}
          alt="Empat siswa belajar bersama dengan GeoGebra, AR, jaring-jaring, dan buku"
          editable={editFoto}
          natural
          containerClassName="relative w-full rounded-2xl overflow-hidden mb-6"
        />

        <div className="bg-white border border-[#dbe1ff] rounded-2xl p-4 flex flex-col md:flex-row md:items-center gap-4 shadow-sm mb-6">
          <div className="flex items-center gap-3 flex-1">
            <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full shrink-0">
              <span
                className="material-symbols-outlined text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                emoji_objects
              </span>
            </div>
            <p className="text-sm text-[#00338a]">Siap menemukan konsep dan menyelesaikan tantangan seru?</p>
          </div>
          <div className="hidden md:block">
            <span className="material-symbols-outlined text-[#00338a]">arrow_forward</span>
          </div>
          <p className="text-sm text-[#00338a] flex-1">Yuk, kenali hubungan konsep yang akan kamu pelajari!</p>
        </div>

        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 mb-8">
          <BackLink
            href="/daftar-isi"
            className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
          />
          <form action={goToPetaKonsep} className="w-full sm:w-auto">
            <SubmitStepButton className="w-full sm:w-auto justify-center inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-2xl text-sm md:text-lg shadow-[0_8px_20px_-5px_rgba(0,72,186,0.4)] hover:shadow-[0_12px_25px_-5px_rgba(0,72,186,0.5)] hover:-translate-y-1 active:translate-y-0 transition-all group">
              <span className="tracking-wide">LANJUT KE PETA KONSEP</span>
              <i className="fa-solid fa-arrow-right-long group-hover:translate-x-2 transition-transform" />
            </SubmitStepButton>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
