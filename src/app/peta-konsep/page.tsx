import { redirect } from "next/navigation";
import Footer from "@/app/_components/Footer";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImages } from "@/lib/pageImages";

async function goToPetaAktivitas() {
  "use server";
  redirect("/peta-aktivitas");
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
        <EditablePageImage
          imageKey="peta-konsep-judul"
          materi="0"
          peta="0"
          step="peta-konsep"
          urutan="1"
          src={images["peta-konsep-judul"]}
          alt="Peta Konsep"
          editable={editFoto}
          imageClassName="object-contain object-left mix-blend-multiply"
          containerClassName="relative w-56 h-20 md:w-80 md:h-28 mb-4"
        />

        <EditablePageImage
          imageKey="peta-konsep-diagram"
          materi="0"
          peta="0"
          step="peta-konsep"
          urutan="2"
          src={images["peta-konsep-diagram"]}
          alt="Peta konsep Bangun Ruang Sisi Datar berdasarkan bentuk dan submateri pembelajaran"
          editable={editFoto}
          natural
          containerClassName="relative w-full bg-white rounded-2xl border-2 border-[#bfd0ff] overflow-hidden"
        />

        <div className="mt-6 bg-white border-2 border-[#bfd0ff] rounded-2xl p-4 flex items-center gap-4">
          <EditablePageImage
            imageKey="peta-konsep-target"
            materi="0"
            peta="0"
            step="peta-konsep"
            urutan="3"
            src={images["peta-konsep-target"]}
            alt="Target"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative w-14 h-14 shrink-0"
          />
          <p className="text-sm md:text-lg text-[#0b2a8a]">
            Peta konsep ini menunjukkan hubungan antar submateri Bangun Ruang
            Sisi Datar. Gunakan sebagai panduan awal sebelum mempelajari setiap
            submateri secara lebih mendalam.
          </p>
        </div>

        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 mt-8 mb-8">
          <BackLink
            href="/petunjuk-3"
            className="w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-white text-[#374151] border border-[#c3c6d6] rounded-full py-2.5 md:py-3 px-5 md:px-6 text-sm md:text-base font-bold cursor-pointer hover:bg-[#f2f4f6]"
          />
          <form action={goToPetaAktivitas} className="w-full sm:w-auto">
            <SubmitStepButton className="w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-2.5 md:py-3 px-5 md:px-6 rounded-full text-sm md:text-base group">
              <span>Lanjutkan</span>
              <i className="fa-solid fa-arrow-right-long group-hover:translate-x-2 transition-transform" />
            </SubmitStepButton>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
