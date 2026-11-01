import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import BangunDaftarTabel from "@/app/belajar/_components/BangunDaftarTabel";
import {
  HiddenStepFields,
  RememberList,
  SectionTitle,
  StepFooter,
  StepTitle,
} from "./Materi7Peta4Parts";

const STEP = 5;

const kolom = [
  { key: "l", label: "Luas Alas (L) (satuan)" },
  { key: "t", label: "Tinggi (t) (satuan)" },
  { key: "vp", label: "Volume Prisma (Vₚ)" },
  { key: "vl", label: "Volume Satu Limas (Vₗ)" },
  { key: "rasio", label: "Rasio Vₗ / Vₚ" },
  { key: "banyak", label: "Banyak Penuangan hingga Penuh" },
  { key: "catatan", label: "Catatan / Pola yang Ditemukan" },
];

export default async function Materi7Peta4Step5DataAR({
  materi,
  peta,
  initialAnswers,
}: StepComponentProps) {
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Eksplorasi Menggunakan Augmented Reality (AR)" />

      <div className="flex flex-col gap-4">
        <SectionTitle letter="J" title="Contoh Hasil Pengamatan AR" />
        <p className="m-0 text-sm text-[#4B5563]">Isilah data numerik dari panel AR pada beberapa percobaan.</p>
        <BangunDaftarTabel
          answerKey="data_ar"
          initialValue={initialAnswers?.data_ar}
          selectLabel="Limas yang diamati:"
          rows={[1, 2, 3, 4, 5].map((r) => ({ key: `p${r}`, label: String(r) }))}
          columns={kolom}
          entryTitle="Data yang Sudah Ditambahkan"
          bangunList={["Limas Segiempat", "Limas Segitiga"]}
          rowHeader="Percobaan"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            "Pastikan luas alas tetap pada aktivitas perubahan tinggi.",
            "Pastikan tinggi tetap pada aktivitas perubahan luas alas.",
            "Bandingkan nilai Vₗ / Vₚ pada setiap percobaan. Apakah rasionya selalu sama?",
          ].map((t) => (
            <div key={t} className="flex items-start gap-2 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] px-3.5 py-3 text-sm text-[#166534] leading-[1.5]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.6" className="flex-shrink-0 mt-0.5">
                <path d="M5 13l4 4L19 7" />
              </svg>
              {t}
            </div>
          ))}
        </div>
      </div>

      <RememberList
        items={[
          "Ubah satu variabel saja setiap percobaan (luas alas atau tinggi).",
          "Amati nilai volume prisma dan volume satu limas pada panel AR.",
          "Catat semua hasil pengamatan pada tabel.",
          "Dugaan awal dapat berbeda-beda; semua jawaban perlu didukung alasan.",
        ]}
      />
      <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-xl px-4 py-3 text-sm text-[#991B1B] leading-[1.6]">
        <span className="font-extrabold">Belum ada rumus final di sini! </span>
        Fokus pada pengamatan dan pola dari data. Rumus umum akan dibahas dan dibuktikan pada tahap berikutnya.
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
