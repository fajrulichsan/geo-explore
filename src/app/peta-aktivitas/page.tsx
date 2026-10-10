import { selesaiPetunjukAction } from "@/app/actions";
import Footer from "@/app/_components/Footer";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImages } from "@/lib/pageImages";

export default async function PetaAktivitasPage(
  props: PageProps<"/peta-aktivitas">,
) {
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
      <main className="max-w-[1000px] mx-auto px-4 md:px-6 py-6 md:py-8 w-full flex-1">
        <EditablePageImage
          imageKey="peta-aktivitas-infografis"
          materi="0"
          peta="0"
          step="peta-aktivitas"
          urutan="1"
          src={images["peta-aktivitas-infografis"]}
          alt="Peta aktivitas pembelajaran: pendahuluan, kegiatan inti discovery learning, dan kegiatan penutup"
          editable={editFoto}
          natural
          containerClassName="relative w-full bg-white rounded-2xl border-2 border-[#bfd0ff] overflow-hidden"
        />

        <div className="mt-6 bg-white border-2 border-[#bfd0ff] rounded-2xl p-4 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex items-center gap-3 flex-1">
            <span
              className="material-symbols-outlined text-yellow-500 text-5xl shrink-0"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              emoji_objects
            </span>
            <p className="text-sm md:text-base text-[#0b2a8a]">
              Setiap aktivitas saling berkaitan untuk membantumu menemukan dan
              memahami konsep melalui proses Discovery Learning yang bermakna.
            </p>
          </div>
          <div className="md:border-l-2 md:border-[#0b2a8a] md:pl-5 text-sm md:text-base text-[#0b2a8a] flex-1">
            <p>Sudah mengenal perjalanan belajarmu?</p>
            <p className="font-bold">Yuk, lanjutkan ke bagian berikutnya!</p>
          </div>
          <EditablePageImage
            imageKey="peta-aktivitas-buku-submateri"
            materi="0"
            peta="0"
            step="peta-aktivitas"
            urutan="5"
            src={images["peta-aktivitas-buku-submateri"]}
            alt="Buku submateri 1 dan bangun ruang"
            editable={editFoto}
            imageClassName="object-contain mix-blend-multiply"
            containerClassName="relative hidden md:block w-28 h-28 shrink-0"
          />
        </div>

        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 mt-6 mb-8">
          <BackLink
            href="/peta-konsep"
            className="w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-white text-[#374151] border border-[#c3c6d6] rounded-full py-2.5 md:py-3 px-5 md:px-6 text-sm md:text-base font-bold cursor-pointer hover:bg-[#f2f4f6]"
          />
          <form action={selesaiPetunjukAction} className="w-full sm:w-auto">
            <SubmitStepButton className="w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-2.5 md:py-3 px-5 md:px-6 rounded-full text-sm md:text-base group">
              <span>Lanjut ke Dashboard</span>
              <i className="fa-solid fa-arrow-right-long group-hover:translate-x-2 transition-transform" />
            </SubmitStepButton>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
