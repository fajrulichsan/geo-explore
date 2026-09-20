import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import { getPageImages } from "@/lib/pageImages";
import { Foto, Hebat, HiddenFields, Isi, Mascot, Nav, SectionTitle, TahapHeader, Tulis, cardCls } from "./Materi6Peta7Parts";

const baris = [
  { nama: "kubus", label: "Kubus" },
  { nama: "balok", label: "Balok" },
  { nama: "prisma", label: "Prisma Segitiga" },
];

export default async function Materi6Peta7Step4KesimpulanIntisari({
  materi,
  peta,
  step = "4",
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const img = await getPageImages();
  const ctx = { materi, peta, step, editFoto };

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenFields materi={materi} peta={peta} step={4} />
      <TahapHeader materi={materi} step={4} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
        <div className="flex flex-col gap-4">
          <SectionTitle huruf="H" judul="Apa yang Kamu Temukan?" warna="#B45309" />
          <div className={`${cardCls} flex flex-col gap-3`}>
            <p className="m-0 text-sm text-[#374151] leading-[1.5]">
              Apa hubungan antara luas alas atau luas penampang sejajar alas, tinggi kubus/balok atau panjang prisma, dan
              volume pada ketiga bangun tersebut?
            </p>
            <Tulis name="temuan" answers={initialAnswers} rows={5} label="Hubungan yang kamu temukan" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <SectionTitle huruf="I" judul="Kesimpulan Umum" warna="#166534" />
          <div className={`${cardCls} flex flex-col gap-3`} style={{ borderColor: "#BBF7D0" }}>
            <p className="m-0 text-sm text-[#374151] leading-[1.6]">
              Berdasarkan hasil verifikasi, rumus volume bangun ruang sisi datar secara umum dapat dituliskan sebagai:
            </p>
            <p className="m-0 rounded-2xl border border-[#FDE68A] bg-[#FEF9E7] px-4 py-3 text-center text-lg font-extrabold text-[#1E3A8A]">
              V = Luas Alas × Tinggi
            </p>
            <div className="rounded-2xl bg-[#F0FDF4] px-4 py-3 text-sm text-[#374151] leading-[1.6]">
              <strong>Keterangan:</strong> Pada prisma, tinggi bangun yang dimaksud adalah jarak antara dua bidang alas yang
              sejajar. Pada kegiatan ini, ukuran tersebut disebut panjang prisma.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle
          huruf="J"
          judul="Intisari Kesimpulan"
          hint="Tuliskan kembali rumus volume setiap bangun berdasarkan kesimpulan yang telah kamu peroleh agar menjadi rangkuman akhir submateri ini."
          warna="#1E3A8A"
        />
        <div className={`${cardCls} flex flex-col gap-4`}>
          {baris.map((b) => (
            <div key={b.nama} className="grid grid-cols-1 md:grid-cols-[150px_1fr_1fr] gap-3 items-start rounded-2xl bg-[#EFF4FF] p-3">
              <span className="text-sm font-extrabold text-[#1E3A8A] pt-2">{b.label}</span>
              <div className="flex items-center gap-2 text-sm font-bold text-[#374151]">
                Rumus: V =
                <Isi name={`intisari_${b.nama}_rumus`} answers={initialAnswers} label={`Rumus volume ${b.label}`} className="text-left" />
              </div>
              <Tulis name={`intisari_${b.nama}_ket`} answers={initialAnswers} rows={2} label={`Keterangan ${b.label}`} />
            </div>
          ))}
        </div>
      </div>

      <Hebat>
        Kamu telah menyusun rumus volume bangun ruang sisi datar berdasarkan hasil verifikasi. Teruslah berpikir kritis
        dan teliti!
      </Hebat>

      <Mascot>
        <Foto
          k="M6-P7-L4-1"
          src={img["M6-P7-L4-1"]}
          ctx={ctx}
          urutan="1"
          natural
          alt="Siswa mengepalkan tangan sambil berkata Ayo lanjut dan hadapi tantangan"
          className="relative w-44 flex-shrink-0 overflow-hidden"
        />
        <div className="flex flex-col gap-1">
          <span className="text-lg font-extrabold text-[#1E3A8A]">Lanjut ke Halaman 3</span>
          <p className="m-0 text-sm text-[#374151] leading-[1.6]">
            Pada halaman berikutnya, kita akan menguji pemahaman dan menerapkan rumus volume untuk menyelesaikan berbagai
            masalah.
          </p>
        </div>
      </Mascot>

      <Nav materi={materi} peta={peta} step={4} />
    </form>
  );
}
