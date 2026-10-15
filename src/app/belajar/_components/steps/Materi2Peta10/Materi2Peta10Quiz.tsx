import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import QuizHalaman, { type QuizSoal } from "../Peta10/QuizHalaman";

const soal: QuizSoal[] = [
  {
    soal: "Jaring-jaring bangun ruang adalah …",
    pilihan: [
      "Susunan bidang datar yang dilipat menjadi bangun ruang tertutup",
      "Gambar bangun ruang yang dilihat dari depan",
      "Kumpulan bidang datar yang selalu berbentuk persegi",
      "Susunan rusuk yang tidak memiliki sisi",
    ],
    jawaban: 0,
  },
  {
    soal: "Susunan bidang datar manakah yang dapat menjadi jaring-jaring kubus?",
    pilihan: [
      "Enam persegi sama besar yang disusun berjajar lurus",
      "Enam persegi sama besar yang disusun dalam bentuk salib dengan empat persegi berjajar dan dua persegi menempel di atas serta di bawah persegi kedua",
      "Lima persegi dan satu segitiga",
      "Enam persegi sama besar yang disusun menjadi persegi panjang",
    ],
    jawaban: 1,
  },
  {
    soal: "Sebuah balok memiliki panjang 8 cm, lebar 5 cm, dan tinggi 3 cm. Bidang-bidang yang diperlukan untuk membuat jaring-jaring balok tersebut adalah …",
    pilihan: [
      "Enam persegi berukuran 8 cm × 8 cm",
      "Dua persegi panjang 8 × 5 cm, dua persegi panjang 8 × 3 cm, dan dua persegi panjang 5 × 3 cm",
      "Empat persegi panjang dan dua segitiga",
      "Enam persegi panjang yang semuanya berukuran 8 × 5 cm",
    ],
    jawaban: 1,
  },
  {
    soal: "Jaring-jaring prisma segitiga terdiri atas …",
    pilihan: [
      "Dua segitiga kongruen dan tiga persegi panjang",
      "Satu segitiga dan empat persegi panjang",
      "Dua persegi dan tiga segitiga",
      "Empat segitiga dan satu persegi panjang",
    ],
    jawaban: 0,
  },
  {
    soal: "Rani membuat jaring-jaring limas segiempat dengan satu persegi sebagai alas dan empat segitiga yang sesuai sebagai sisi tegak. Apa yang perlu diperiksa agar susunan tersebut dapat membentuk limas?",
    pilihan: [
      "Apakah semua bidang memiliki warna yang sama",
      "Apakah semua segitiga berukuran lebih kecil daripada persegi",
      "Apakah bidang-bidangnya dapat dilipat hingga bertemu dengan tepat tanpa saling bertumpuk",
      "Apakah jumlah bidangnya sama dengan jumlah rusuk limas",
    ],
    jawaban: 2,
  },
  {
    soal: "Dua siswa membuat jaring-jaring kubus dengan susunan persegi yang berbeda. Keduanya berhasil membuat kubus setelah dilipat. Kesimpulan yang tepat adalah …",
    pilihan: [
      "Hanya satu susunan yang benar",
      "Jaring-jaring kubus dapat memiliki lebih dari satu susunan yang benar",
      "Semua susunan enam persegi pasti benar",
      "Susunan yang lebih panjang selalu lebih tepat",
    ],
    jawaban: 1,
  },
  {
    soal: "Enam persegi sama besar disusun membentuk persegi panjang yang terdiri atas dua baris dan tiga kolom. Mengapa susunan tersebut tidak dapat menjadi jaring-jaring kubus?",
    pilihan: [
      "Karena jumlah perseginya terlalu banyak",
      "Karena semua perseginya sama besar",
      "Karena ketika dilipat, beberapa bidang saling bertumpuk dan tidak membentuk kubus tertutup",
      "Karena kubus hanya mempunyai lima sisi",
    ],
    jawaban: 2,
  },
  {
    soal: "Pada jaring-jaring prisma segitiga tegak, dua bidang segitiga yang kongruen akan menjadi …",
    pilihan: [
      "Dua sisi tegak yang saling berpotongan",
      "Alas dan tutup yang sejajar setelah dilipat",
      "Dua bidang yang harus saling bertumpuk",
      "Bidang yang membentuk satu sisi persegi panjang",
    ],
    jawaban: 1,
  },
  {
    soal: "Kelompok A dan B membuat jaring-jaring limas segiempat yang berbeda susunannya. Setelah diuji, keduanya dapat dilipat menjadi limas yang sama. Bagaimana penilaianmu?",
    pilihan: [
      "Keduanya benar karena menghasilkan bangun ruang yang sama tanpa celah atau tumpang tindih",
      "Kelompok A pasti lebih benar karena membuat susunan pertama",
      "Salah satu harus salah karena jaring-jaring limas hanya ada satu",
      "Keduanya salah karena jaring-jaring harus memiliki bentuk susunan yang sama",
    ],
    jawaban: 0,
  },
  {
    soal: "Doni membuat susunan bidang datar dengan jumlah dan bentuk sisi yang sesuai untuk sebuah bangun ruang. Namun, saat dilipat, dua sisi saling bertumpuk dan ada bagian yang tidak tertutup. Apakah kesimpulan yang paling tepat?",
    pilihan: [
      "Susunan tersebut benar karena jumlah sisinya sesuai",
      "Susunan tersebut benar jika semua bidang diberi warna berbeda",
      "Susunan tersebut belum tepat dan posisi sambungan bidang perlu diperbaiki",
      "Susunan tersebut cukup diperbesar tanpa mengubah susunannya",
    ],
    jawaban: 2,
  },
];

export default function Materi2Peta10Quiz(props: StepComponentProps) {
  return (
    <QuizHalaman
      {...props}
      soal={soal}
      bannerKey="M2-PQ-1"
      bannerAlt="Quiz Interaktif – Submateri 2: Jaring-Jaring Bangun Ruang Sisi Datar"
      submateriBerikutnya={3}
    />
  );
}
