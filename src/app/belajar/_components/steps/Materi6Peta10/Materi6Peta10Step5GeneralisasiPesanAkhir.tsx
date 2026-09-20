import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { Foto, HiddenFields, Nav, RangkumanHeader, Rumus, SectionTitle, cardCls } from "./Materi6Peta10Parts";

export default async function Materi6Peta10Step5GeneralisasiPesanAkhir({
  materi,
  peta,
  step = "5",
  editFoto,
}: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={5} />
      <RangkumanHeader materi={materi} step={5} />

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="H" judul="Generalisasi Volume Prisma segi-n" warna="#7C3AED" />
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-5 items-start">
          <Foto
            k="M6-P10-L5-1"
            urutan="1"
            src={img["M6-P10-L5-1"]}
            ctx={ctx}
            alt="Prisma segitiga, segiempat, segilima, segienam, hingga segi-n semuanya memiliki rumus volume V = L alas × p"
            className="relative w-full overflow-hidden rounded-2xl bg-white border border-[#E5E7EB]"
          />
          <div className="flex flex-col gap-4">
            <div className={`${cardCls} flex flex-col gap-2`}>
              <span className="text-lg font-extrabold text-[#1E3A8A]">Kesimpulan</span>
              <p className="m-0 text-sm text-[#374151] leading-[1.7]">
                Volume setiap prisma, apa pun bentuk alasnya (segitiga, segiempat, segilima, atau segi-n), diperoleh
                dengan mengalikan luas alas dengan panjang prisma.
              </p>
              <Rumus>
                V = L<sub>alas</sub> × p
              </Rumus>
            </div>
            <div className="rounded-2xl bg-[#EFF4FF] border border-[#BFDBFE] px-4 py-3 text-sm text-[#1D4ED8] leading-[1.7]">
              <b>Keterangan:</b>
              <ul className="m-0 mt-1 pl-5">
                <li>L<sub>alas</sub> = luas alas (segi-n)</li>
                <li>p = panjang prisma (jarak antara dua bidang alas sejajar)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="I" judul="Pesan Akhir" warna="#EA580C" />
        <Foto
          k="M6-P10-L5-2"
          urutan="2"
          src={img["M6-P10-L5-2"]}
          ctx={ctx}
          alt="Rumus volume bukan untuk dihafal, tetapi untuk dipahami, digunakan, dan diterapkan dalam berbagai situasi nyata. Teruslah berpikir kritis, eksplorasi, dan jangan takut mencoba!"
          className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-2xl bg-white border border-[#E5E7EB]"
        />
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="J" judul="Persiapan Melanjutkan Pembelajaran" warna="#0891B2" />
        <div className={`${cardCls} flex items-start gap-4`}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.7" className="flex-shrink-0">
            <path d="M12 6c-2-1.3-4.5-2-8-2v14c3.5 0 6 .7 8 2 2-1.3 4.5-2 8-2V4c-3.5 0-6 .7-8 2zM12 6v14" />
          </svg>
          <p className="m-0 text-sm text-[#374151] leading-[1.7]">
            Pada submateri berikutnya, kamu akan menggunakan konsep-konsep yang telah dipelajari untuk memahami hubungan
            volume pada bangun ruang sisi datar secara lebih luas melalui berbagai permasalahan kontekstual.
          </p>
        </div>
      </div>

      <Nav materi={materi} peta={peta} step={5} last />
    </form>
  );
}
