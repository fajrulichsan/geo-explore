import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import type { PageImageKey } from "@/lib/pageImages";
import { Foto, HiddenFields, Isi, Nav, Pengantar, SectionTitle, TahapHeader, Tulis, cardCls } from "./Materi6Peta7Parts";

const bangun: {
  huruf: string;
  nama: "kubus" | "balok";
  judul: string;
  warna: string;
  bg: string;
  border: string;
  icon: PageImageKey;
  alas: string;
}[] = [
  { huruf: "A", nama: "kubus", judul: "Menyimpulkan Volume Kubus", warna: "#2563EB", bg: "#EFF4FF", border: "#BFDBFE", icon: "M6-P6-L1-2", alas: "luas alas" },
  { huruf: "B", nama: "balok", judul: "Menyimpulkan Volume Balok", warna: "#166534", bg: "#F0FDF4", border: "#BBF7D0", icon: "M6-P6-L1-3", alas: "luas alas" },
];

export default async function Materi6Peta7Step1PengantarKubusBalok({
  materi,
  peta,
  step = "1",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={1} />
      <TahapHeader materi={materi} step={1} />

      <Pengantar
        kutipan="Apakah ketiga bangun memiliki pola hubungan volume yang sama?"
        hero={
          <Foto
            k="M6-P7-L1-1"
            src={img["M6-P7-L1-1"]}
            ctx={ctx}
            urutan="1"
            natural
            alt="Tiga siswa menggunakan GeoGebra 3D, kubus, balok, dan prisma untuk menyusun rumus volume"
            className="relative w-full min-h-24 rounded-[20px] overflow-hidden"
          />
        }
      >
        <p className="m-0 text-sm leading-[1.6] text-[#374151]">
          Selamat! Dugaan yang telah kamu uji dan verifikasi pada Tahap 5 sekarang dapat digunakan untuk menyusun
          kesimpulan umum.
        </p>
        <p className="m-0 text-sm leading-[1.6] text-[#374151]">
          Gunakan hasil verifikasimu untuk menemukan dan menyusun rumus volume setiap bangun (kubus, balok, dan prisma
          segitiga). Lengkapi setiap bagian dengan menggunakan data dan kesimpulan yang telah kamu peroleh.
        </p>
      </Pengantar>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
        {bangun.map((b) => (
          <div key={b.nama} className="flex flex-col gap-4">
            <SectionTitle
              huruf={b.huruf}
              judul={b.judul}
              hint={`Tuliskan hubungan volume ${b.nama} berdasarkan hasil verifikasimu.`}
              warna={b.warna}
            />
            <div className={`${cardCls} flex flex-col gap-4`} style={{ borderColor: b.border }}>
              <label className="flex flex-col gap-2 rounded-2xl border p-3" style={{ backgroundColor: b.bg, borderColor: b.border }}>
                <span className="text-sm font-bold" style={{ color: b.warna }}>
                  Volume {b.nama} diperoleh dari
                </span>
                <Tulis name={`${b.nama}_diperoleh`} answers={initialAnswers} rows={3} label={`Volume ${b.nama} diperoleh dari`} />
              </label>
              <div className="grid grid-cols-[96px_1fr] gap-4 items-center">
                <Foto
                  k={b.icon}
                  src={img[b.icon]}
                  ctx={{ ...ctx, editFoto: false }}
                  alt={`Model ${b.nama}`}
                  className="relative w-24 h-24"
                />
                <div className="flex flex-col gap-2 rounded-2xl border p-3" style={{ backgroundColor: b.bg, borderColor: b.border }}>
                  <span className="w-fit rounded-full bg-white px-3 py-0.5 text-xs font-bold" style={{ color: b.warna }}>
                    Lengkapilah.
                  </span>
                  <p className="m-0 text-sm text-[#374151]">
                    Volume = {b.alas} × <span className="font-bold text-[#DC2626]">tinggi</span>
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold text-[#374151]">
                    <span className="whitespace-nowrap">V =</span>
                    <Isi name={`${b.nama}_v1`} answers={initialAnswers} label="Isian pertama" className="min-w-0" />
                    ×
                    <Isi name={`${b.nama}_v2`} answers={initialAnswers} label="Isian kedua" className="min-w-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Nav materi={materi} peta={peta} step={1} />
    </form>
  );
}
