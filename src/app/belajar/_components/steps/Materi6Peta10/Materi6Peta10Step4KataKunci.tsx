import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { Balok, Foto, HiddenFields, Kubus, Nav, RangkumanHeader, SectionTitle } from "./Materi6Peta10Parts";

export default async function Materi6Peta10Step4KataKunci({
  materi,
  peta,
  step = "4",
  editFoto,
}: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };
  const kartu = "rounded-2xl border border-[#BFDBFE] bg-white p-4 flex flex-col items-center gap-2 text-center";
  const judul = "text-base font-extrabold text-[#1E3A8A]";
  const isi = "m-0 text-sm text-[#374151] leading-[1.6]";

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={4} />
      <RangkumanHeader materi={materi} step={4} />

      <div className="flex flex-col gap-4">
        <SectionTitle huruf="G" judul="Kata Kunci Penting" warna="#0891B2" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className={kartu}>
            <Kubus warna="#FACC15" className="w-14 h-14" />
            <span className={judul}>Volume</span>
            <p className={isi}>Ukuran banyaknya ruang yang ditempati suatu bangun ruang.</p>
          </div>
          <div className={kartu}>
            <svg viewBox="0 0 64 64" className="w-14 h-14" role="img" aria-label="Luas alas">
              <rect x="6" y="6" width="52" height="52" fill="#DCFCE7" stroke="#111827" strokeWidth="1.6" />
              <path d="M6 23h52M6 41h52M23 6v52M41 6v52" stroke="#111827" strokeWidth="1.2" />
            </svg>
            <span className={judul}>Luas Alas</span>
            <p className={isi}>Luas bidang dasar dari bangun ruang yang menjadi alas.</p>
          </div>
          <div className={kartu}>
            <svg viewBox="0 0 24 64" className="w-8 h-14" role="img" aria-label="Tinggi">
              <path d="M12 6v52M5 13l7-7 7 7M5 51l7 7 7-7" fill="none" stroke="#1E3A8A" strokeWidth="2.4" />
            </svg>
            <span className={judul}>Tinggi (t)</span>
            <p className={isi}>
              Untuk kubus dan balok: jarak tegak lurus dari alas ke bidang sejajar di atasnya. Untuk prisma: jarak antara
              dua bidang alas sejajar (disebut panjang prisma).
            </p>
          </div>
          <div className={kartu}>
            <Kubus className="w-14 h-14" />
            <span className={judul}>Kubus</span>
            <p className={isi}>Bangun ruang sisi datar dengan 6 sisi berbentuk persegi yang sama besar.</p>
          </div>
          <div className={kartu}>
            <Balok className="w-16 h-14" />
            <span className={judul}>Balok</span>
            <p className={isi}>Bangun ruang sisi datar dengan 6 sisi berbentuk persegi atau persegi panjang.</p>
          </div>
          <div className={kartu}>
            <Foto
              k="M6-P10-L2-2"
              urutan="2"
              src={img["M6-P10-L2-2"]}
              ctx={ctx}
              editable={false}
              alt="Prisma segi-n"
              className="relative w-28"
            />
            <span className={judul}>Prisma segi-n</span>
            <p className={isi}>
              Bangun ruang yang memiliki dua alas sejajar dan kongruen berbentuk segi-n serta sisi tegak berbentuk
              persegi panjang.
            </p>
          </div>
          <div className={kartu}>
            <svg viewBox="0 0 64 64" className="w-14 h-14" role="img" aria-label="Penampang">
              <path d="M32 6l22 11v26L32 54 10 43V17z" fill="#F3F4F6" stroke="#111827" strokeWidth="1.4" />
              <path d="M10 43l22 11 22-11-22-11z" fill="#3B82F6" fillOpacity="0.7" stroke="#111827" strokeWidth="1.4" />
            </svg>
            <span className={judul}>Penampang</span>
            <p className={isi}>Bidang irisan yang sejajar dengan alas dan memiliki bentuk yang sama.</p>
          </div>
          <div className={`${kartu} bg-[#FEF9E7] border-[#F5E3A0]`}>
            <span className="rounded-xl bg-white border border-[#F5E3A0] px-3 py-1.5 font-bold italic text-[#1E3A8A]">
              V = L<sub>alas</sub> × t<sub>bangun</sub>
            </span>
            <span className={judul}>Rumus Umum Volume</span>
            <p className={isi}>
              Aturan untuk menghitung volume bangun ruang sisi datar. L<sub>alas</sub> = luas alas atau luas penampang
              sejajar alas; t<sub>bangun</sub> = tinggi kubus/balok atau panjang prisma.
            </p>
          </div>
          <div className={kartu}>
            <span className="text-3xl font-extrabold text-[#0891B2]">cm<sup className="text-xl">3</sup></span>
            <span className={judul}>Satuan Volume</span>
            <p className={isi}>Satuan yang digunakan untuk menyatakan volume, misalnya cm³, m³, dan sebagainya.</p>
          </div>
          <div className={kartu}>
            <svg viewBox="0 0 64 64" className="w-14 h-14" role="img" aria-label="Lapisan">
              <path d="M8 20l24-10 24 10-24 10z" fill="#4ADE80" stroke="#111827" strokeWidth="1.4" />
              <path d="M8 32l24-10 24 10-24 10z" fill="#4ADE80" stroke="#111827" strokeWidth="1.4" />
              <path d="M8 44l24-10 24 10-24 10z" fill="#4ADE80" stroke="#111827" strokeWidth="1.4" />
            </svg>
            <span className={judul}>Lapisan</span>
            <p className={isi}>Susunan penampang sejajar dari alas hingga membentuk volume.</p>
          </div>
        </div>
      </div>

      <Nav materi={materi} peta={peta} step={4} />
    </form>
  );
}
