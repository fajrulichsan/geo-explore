import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import QuizHalaman, { type QuizSoal } from "../Peta10/QuizHalaman";

const soal: QuizSoal[] = [
  {
    soal: "Sebuah kubus tersusun dari kubus-kubus satuan dengan panjang rusuk 1 cm. Setiap lapisan terdiri atas 4 × 4 kubus satuan, dan terdapat 4 lapisan. Seorang siswa menyatakan bahwa volumenya adalah 16 cm³. Bagaimana penilaianmu?",
    pilihan: [
      "Benar, karena satu lapisan terdiri atas 16 kubus satuan.",
      "Tidak benar, karena jumlah seluruh kubus satuan adalah 4 × 4 × 4 = 64.",
      "Benar, karena volume diperoleh dari luas satu sisi kubus.",
      "Tidak benar, karena volume harus dihitung dengan menjumlahkan panjang seluruh rusuk.",
    ],
    jawaban: 1,
    gambarKey: "M6-PQ-S1",
  },
  {
    soal: "Dua balok memiliki ukuran berbeda. Balok A berukuran 6 cm × 4 cm × 3 cm, sedangkan balok B berukuran 9 cm × 4 cm × 2 cm. Rani menyatakan bahwa kedua balok memiliki volume yang sama. Mengapa pernyataan Rani benar?",
    pilihan: [
      "Karena kedua balok mempunyai luas permukaan yang sama.",
      "Karena panjang balok B lebih besar daripada balok A.",
      "Karena hasil perkalian ketiga ukuran kedua balok sama, yaitu 72 cm³.",
      "Karena kedua balok mempunyai jumlah sisi dan rusuk yang sama.",
    ],
    jawaban: 2,
  },
  {
    soal: "Sebuah prisma segitiga memiliki luas alas 18 cm² dan panjang prisma 10 cm. Dika menghitung volumenya dengan cara 18 × 10, sedangkan Nisa menghitung 18 + 10. Mengapa cara Dika lebih tepat?",
    pilihan: [
      "Karena volume prisma diperoleh dari luas alas dikalikan panjang prisma.",
      "Karena volume prisma sama dengan jumlah luas alas dan panjangnya.",
      "Karena setiap prisma mempunyai sepuluh lapisan.",
      "Karena panjang prisma selalu lebih besar daripada luas alasnya.",
    ],
    jawaban: 0,
  },
  {
    soal: "Sebuah balok berukuran panjang 8 cm, lebar 5 cm, dan tinggi 3 cm. Panjang balok diubah menjadi 12 cm, sedangkan lebar dan tingginya tetap. Seorang siswa menyatakan bahwa volume balok bertambah 50%. Mengapa pernyataan tersebut benar?",
    pilihan: [
      "Karena seluruh ukuran balok bertambah 50%.",
      "Karena jumlah sisi balok bertambah setelah panjangnya diubah.",
      "Karena tinggi balok tetap sehingga volumenya tidak berubah.",
      "Karena luas alas yang semula 40 cm² menjadi 60 cm², sedangkan jumlah lapisannya tetap.",
    ],
    jawaban: 3,
    gambarKey: "M6-PQ-S4",
  },
  {
    soal: "Sebuah prisma segitiga mempunyai alas berbentuk segitiga siku-siku dengan panjang sisi siku-siku 6 cm dan 8 cm serta panjang prisma 12 cm. Siswa A menghitung ½ × 6 × 8 × 12, sedangkan siswa B menghitung (6 + 8 + 10) × 12. Kesimpulan yang tepat adalah …",
    pilihan: [
      "Cara siswa B benar karena keliling alas dikalikan panjang prisma menghasilkan volume.",
      "Kedua cara benar karena menggunakan ukuran prisma yang sama.",
      "Cara siswa A benar karena mengalikan luas alas segitiga dengan panjang prisma.",
      "Kedua cara salah karena volume prisma harus dihitung dari luas seluruh sisinya.",
    ],
    jawaban: 2,
  },
  {
    soal: "Sebuah balok tersusun dari kubus satuan. Setiap lapisan terdiri atas 5 baris dan 3 kolom kubus satuan. Jika balok memiliki 4 lapisan, strategi manakah yang tepat untuk menentukan volumenya?",
    pilihan: [
      "Menjumlahkan 5 + 3 + 4 karena ketiganya menunjukkan ukuran balok.",
      "Mengalikan 5 × 3 untuk menentukan banyak kubus pada satu lapisan, kemudian mengalikannya dengan 4.",
      "Mengalikan 5 × 4 saja karena banyak lapisan sudah diketahui.",
      "Menjumlahkan seluruh kubus pada lapisan teratas dan terbawah saja.",
    ],
    jawaban: 1,
    gambarKey: "M6-PQ-S6",
  },
  {
    soal: "Sebuah prisma mempunyai luas alas 30 cm² dan panjang prisma 8 cm. Seorang siswa ingin membuat prisma lain dengan volume yang sama, tetapi luas alasnya menjadi 40 cm². Berapakah panjang prisma baru yang tepat beserta alasannya?",
    pilihan: [
      "6 cm, karena volume harus tetap 240 cm³ sehingga panjang prisma = 240 ÷ 40.",
      "8 cm, karena prisma yang volumenya sama harus mempunyai panjang yang sama.",
      "10 cm, karena luas alas bertambah sehingga panjang prisma juga harus bertambah.",
      "12 cm, karena perubahan luas alas harus ditambahkan pada panjang prisma.",
    ],
    jawaban: 0,
    gambarKey: "M6-PQ-S7",
  },
  {
    soal: "Dua prisma memiliki bentuk yang berbeda. Prisma A memiliki alas berbentuk persegi panjang dengan luas 24 cm², sedangkan prisma B memiliki alas berbentuk segitiga dengan luas 24 cm². Jika panjang kedua prisma sama-sama 10 cm, kesimpulan yang tepat adalah …",
    pilihan: [
      "Prisma A memiliki volume lebih besar karena alasnya persegi panjang.",
      "Prisma B memiliki volume lebih besar karena alasnya segitiga.",
      "Volume kedua prisma tidak dapat dibandingkan karena bentuk alasnya berbeda.",
      "Kedua prisma memiliki volume sama karena luas alas dan panjang prismanya sama.",
    ],
    jawaban: 3,
  },
  {
    soal: "Sebuah akuarium berbentuk balok memiliki ukuran bagian dalam 60 cm × 30 cm × 40 cm. Air akan diisi hingga ketinggian 25 cm. Rafi menghitung volume air menggunakan 60 × 30 × 40, sedangkan Sinta menggunakan 60 × 30 × 25. Mengapa cara Sinta lebih tepat?",
    pilihan: [
      "Karena volume air selalu lebih besar daripada volume akuarium.",
      "Karena tinggi air yang digunakan dalam perhitungan adalah 25 cm, bukan tinggi keseluruhan akuarium.",
      "Karena volume air cukup dihitung dari panjang dan lebar akuarium.",
      "Karena tinggi akuarium tidak memengaruhi banyak air yang dapat ditampung.",
    ],
    jawaban: 1,
    gambarKey: "M6-PQ-S9",
  },
  {
    soal: "Sebuah prisma segitiga memiliki luas alas 20 cm² dan panjang 15 cm. Seorang siswa menyatakan bahwa jika luas alas diperkecil menjadi setengahnya dan panjang prisma diperbesar menjadi dua kali semula, volume prisma tidak berubah. Bagaimana penilaianmu?",
    pilihan: [
      "Tidak benar, karena volumenya menjadi setengah dari semula.",
      "Tidak benar, karena volumenya menjadi dua kali semula.",
      "Benar, karena hasil perkalian luas alas dan panjang prisma tetap sama.",
      "Benar, karena semua prisma dengan bentuk alas sama memiliki volume sama.",
    ],
    jawaban: 2,
  },
];

export default function Materi6Peta10Quiz(props: StepComponentProps) {
  return (
    <QuizHalaman
      {...props}
      soal={soal}
      bannerKey="M6-PQ-1"
      bannerAlt="Quiz Interaktif – Submateri 6: Volume Kubus, Balok, dan Prisma"
      submateriBerikutnya={7}
    />
  );
}
