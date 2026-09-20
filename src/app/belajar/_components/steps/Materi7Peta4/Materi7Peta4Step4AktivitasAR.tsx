import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import {
  HiddenStepFields,
  SectionTitle,
  StepFooter,
  StepTitle,
  TextAreaField,
  cardClass,
  readAnswers,
} from "./Materi7Peta4Parts";

const STEP = 4;

const langkahAR = [
  "Buka aplikasi AR (scan QR atau tombol pada e-module).",
  "Pilih objek prisma dan limas yang memiliki bentuk serta luas alas yang sama dan tinggi yang sama.",
  "Gunakan tombol putar, skala, dan geser untuk mengubah “Luas Alas” atau “Tinggi”.",
  "Jalankan animasi penuangan limas ke dalam prisma.",
  "Amati dan catat berapa kali isi limas diperlukan hingga prisma penuh.",
  "Catat hasil pengamatanmu.",
];

const aktivitas = [
  {
    key: "ar_1",
    warna: "bg-[#166534]",
    judul: "Amati Model Awal",
    sub: "satu prisma + satu limas",
    poin: ["Amati bentuk, posisi, dan ukuran prisma dan limas.", "Pastikan luas alas dan tinggi keduanya sama.", "Gunakan fitur rotasi 360°."],
    tanya: "Apa yang kamu amati? Tulis pola yang kamu temukan.",
  },
  {
    key: "ar_2",
    warna: "bg-[#2563EB]",
    judul: "Ubah Luas Alas",
    sub: "tinggi tetap",
    poin: ["Ubah luas alas prisma dan limas secara bersamaan sehingga luas alas keduanya tetap sama.", "Pertahankan tinggi."],
    tanya: "Apa yang terjadi pada volume prisma dan volume satu limas? Apa yang tetap?",
  },
  {
    key: "ar_3",
    warna: "bg-[#DC2626]",
    judul: "Ubah Tinggi",
    sub: "luas alas tetap",
    poin: ["Ubah tinggi prisma dan limas secara bersamaan sehingga tinggi keduanya tetap sama.", "Pertahankan luas alas."],
    tanya: "Apa yang terjadi pada volume prisma dan volume satu limas? Apa yang tetap?",
  },
  {
    key: "ar_4",
    warna: "bg-[#7C3AED]",
    judul: "Visualisasi Penuangan",
    sub: "isi satu limas berulang",
    poin: ["Jalankan animasi penuangan satu limas ke dalam prisma.", "Amati berapa kali isi limas diperlukan hingga prisma penuh."],
    tanya: "Berapa kali isi satu limas diperlukan hingga prisma penuh? Apakah hasilnya tetap pada ukuran yang berbeda?",
  },
];

export default async function Materi7Peta4Step4AktivitasAR({
  materi,
  peta,
  editFoto,
  initialAnswers,
}: StepComponentProps) {
  const { getValue } = readAnswers(initialAnswers);
  const gambarHero = await getPageImage("M7-P4-L4-1");

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <HiddenStepFields materi={materi} peta={peta} step={STEP} />
      <StepTitle materi={materi} step={STEP} subtitle="Eksplorasi Menggunakan Augmented Reality (AR)" />

      <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] px-5 py-6 sm:px-8 sm:py-8 flex flex-col gap-5">
        <div className="absolute -right-14 -top-16 w-56 h-56 rounded-full bg-white/10" />
        <div className="relative flex flex-col gap-2">
          <h2 className="m-0 text-lg sm:text-xl font-extrabold text-white">Amati, ubah, dan selidiki hubungan volume satu limas dengan volume prisma!</h2>
          <p className="m-0 text-sm text-white/90 max-w-2xl leading-[1.6]">Gunakan Augmented Reality (AR) untuk mengamati satu prisma dan satu limas dengan bentuk serta luas alas dan tinggi yang sama.</p>
        </div>
        <div className="relative bg-white rounded-2xl p-3 sm:p-4">
          <EditablePageImage
            imageKey="M7-P4-L4-1"
            materi={materi}
            peta={peta}
            step="4"
            urutan="1"
            src={gambarHero}
            alt="Tiga siswa memegang tablet AR dengan prisma dan tiga limas di atas meja"
            editable={editFoto}
            natural
            containerClassName="relative w-full min-h-24 overflow-hidden"
          />
        </div>
        <div className="relative flex flex-wrap gap-2">
          <span className="rounded-2xl rounded-bl-sm bg-white/95 text-[#1E3A8A] text-xs sm:text-[13px] font-semibold px-3 py-2 leading-[1.4]">Saya mengamati satu prisma dan satu limas dengan bentuk yang sama.</span>
          <span className="rounded-2xl rounded-bl-sm bg-white/95 text-[#1E3A8A] text-xs sm:text-[13px] font-semibold px-3 py-2 leading-[1.4]">Saya menuangkan limas berulang ke dalam prisma untuk melihat berapa kali isi limas dibutuhkan.</span>
          <span className="rounded-2xl rounded-bl-sm bg-white/95 text-[#1E3A8A] text-xs sm:text-[13px] font-semibold px-3 py-2 leading-[1.4]">Saya mengubah ukuran keduanya dan melihat apakah hasilnya tetap sama.</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 bg-[#EFF4FF] border border-[#DBE7FF] rounded-[20px] p-5 sm:p-6">
        <h3 className="m-0 text-sm font-extrabold text-[#1E3A8A]">Pengantar</h3>
        <p className="m-0 text-sm text-[#374151] leading-[1.6]">Pada tahap ini kamu menggunakan AR untuk mengamati satu prisma dan satu limas. Putar, ubah ukuran, dan jalankan animasi untuk melihat bagaimana satu limas dapat memenuhi prisma jika dituangkan berulang. Bandingkan hasil pengamatanmu dengan GeoGebra 3D dan catat seluruh hasilnya.</p>
        <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-xl px-4 py-3 text-sm text-[#92400E] leading-[1.6]">
          <span className="font-extrabold">Fokus AR: </span>
          Amati bentuk, posisi, dan kesesuaian limas serta prisma yang memiliki luas alas dan tinggi yang sama.
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#1E3A8A]">
          {["Putar & Amati", "Ubah Luas Alas", "Ubah Tinggi", "Visualisasi Penuangan"].map((s, i) => (
            <span key={s} className="inline-flex items-center gap-2">
              <span className="rounded-full bg-white border border-[#DBE7FF] px-3 py-1.5">{s}</span>
              {i < 3 && <span aria-hidden>→</span>}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="H" title="Aktivitas di AR" />
        <div className={`${cardClass} flex flex-col gap-3`}>
          {langkahAR.map((t, i) => (
            <div key={t} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
              <p className="m-0 text-sm text-[#374151] leading-[1.6]">{t}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SectionTitle letter="I" title="Empat Aktivitas Eksplorasi AR" color="amber" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aktivitas.map((a, i) => (
            <div key={a.key} className={`${cardClass} !p-4 flex flex-col gap-3`}>
              <div className={`${a.warna} rounded-xl text-white px-4 py-2.5 text-sm font-bold`}>
                {i + 1}. {a.judul} <span className="font-medium text-white/80">({a.sub})</span>
              </div>
              <ul className="m-0 pl-5 list-disc flex flex-col gap-1 text-sm text-[#374151] leading-[1.5]">
                {a.poin.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <TextAreaField name={`${a.key}_pengamatan`} label={a.tanya} value={getValue(`${a.key}_pengamatan`)} />
            </div>
          ))}
        </div>
      </div>

      <StepFooter materi={materi} peta={peta} step={STEP} />
    </form>
  );
}
