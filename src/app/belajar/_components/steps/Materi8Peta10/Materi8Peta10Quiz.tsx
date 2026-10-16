import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import QuizHalaman, { type QuizSoal } from "../Peta10/QuizHalaman";

const soal: QuizSoal[] = [
  {
    soal: "Sebuah kubus memiliki panjang rusuk 3 cm. Setelah diperbesar dengan faktor skala 2, seorang siswa menyatakan bahwa volumenya menjadi dua kali semula. Bagaimana penilaianmu terhadap pernyataan tersebut?",
    pilihan: [
      "Benar, karena panjang rusuk kubus menjadi dua kali semula.",
      "Tidak benar, karena volumenya menjadi empat kali semula.",
      "Tidak benar, karena volumenya menjadi delapan kali semula.",
      "Benar, karena jumlah sisi kubus tidak berubah setelah diperbesar.",
    ],
    jawaban: 2,
  },
  {
    soal: "Balok A memiliki ukuran 4 cm × 3 cm × 2 cm, sedangkan balok B berukuran 12 cm × 9 cm × 6 cm. Mengapa volume balok B menjadi 27 kali volume balok A?",
    pilihan: [
      "Karena setiap ukuran panjang balok B menjadi tiga kali ukuran balok A, sehingga volumenya menjadi 3³ kali.",
      "Karena jumlah sisi balok B menjadi tiga kali jumlah sisi balok A.",
      "Karena volume berubah sebesar 3² kali ketika seluruh panjang diperbesar tiga kali.",
      "Karena jumlah ketiga ukuran balok B menjadi 27 kali jumlah ukuran balok A.",
    ],
    jawaban: 0,
    gambarKey: "M8-PQ-S2",
  },
  {
    soal: "Sebuah prisma segitiga memiliki volume 160 cm³. Seluruh ukuran panjang prisma tersebut diperkecil dengan faktor skala ½. Rani menghitung volume barunya dengan cara 160 × ½, sedangkan Dito menggunakan 160 × (½)³. Mengapa cara Dito lebih tepat?",
    pilihan: [
      "Karena volume prisma selalu setengah dari volume semula.",
      "Karena prisma segitiga memiliki tiga sisi tegak.",
      "Karena luas alas prisma tidak berubah ketika ukurannya diperkecil.",
      "Karena penskalaan memengaruhi dua ukuran pada alas dan satu ukuran panjang prisma, sehingga volume dikalikan dengan (½)³.",
    ],
    jawaban: 3,
  },
  {
    soal: "Sebuah limas segiempat memiliki volume 81 cm³. Jika seluruh ukuran panjang limas diperbesar dengan faktor skala 3, seorang siswa menghitung volume barunya dengan cara 81 × 3². Mengapa cara tersebut kurang tepat?",
    pilihan: [
      "Karena volume limas tidak berubah ketika bentuknya tetap sebangun.",
      "Karena volume seharusnya dikalikan dengan 3³, sehingga volume barunya 2.187 cm³.",
      "Karena limas mempunyai empat sisi tegak sehingga faktor skalanya harus dipangkatkan empat.",
      "Karena volume limas selalu diperoleh dengan membagi volume awal dengan tiga.",
    ],
    jawaban: 1,
  },
  {
    soal: "Dua kubus sebangun memiliki volume masing-masing 64 cm³ dan 216 cm³. Seorang siswa menyatakan bahwa faktor skala panjang rusuk dari kubus pertama ke kubus kedua adalah 216 ÷ 64. Bagaimana penilaianmu?",
    pilihan: [
      "Benar, karena faktor skala panjang selalu sama dengan perbandingan volume.",
      "Tidak benar, karena faktor skalanya adalah akar kuadrat dari 216 ÷ 64.",
      "Tidak benar, karena faktor skalanya adalah akar pangkat tiga dari 216 ÷ 64, yaitu 1,5.",
      "Benar, karena kedua kubus memiliki jumlah sisi yang sama.",
    ],
    jawaban: 2,
    gambarKey: "M8-PQ-S5",
  },
  {
    soal: "Sebuah balok berukuran 6 cm × 4 cm × 3 cm. Panjang, lebar, dan tingginya masing-masing diubah menjadi dua kali ukuran semula. Seorang siswa menghitung volume baru dengan mengalikan volume awal dengan 2 + 2 + 2. Strategi manakah yang tepat?",
    pilihan: [
      "Menjumlahkan ketiga faktor skala karena balok mempunyai tiga ukuran panjang.",
      "Mengalikan volume awal dengan 2² karena alas balok mempunyai dua ukuran.",
      "Menambahkan volume awal dengan dua kali volume semula.",
      "Mengalikan volume awal dengan 2 × 2 × 2 karena ketiga ukuran panjang masing-masing menjadi dua kali semula.",
    ],
    jawaban: 3,
  },
  {
    soal: "Dua limas segiempat yang sebangun memiliki perbandingan panjang rusuk yang bersesuaian 2 : 3. Seorang siswa menyimpulkan bahwa perbandingan volumenya adalah 4 : 9. Kesimpulan yang tepat adalah …",
    pilihan: [
      "Benar, karena volume berubah mengikuti kuadrat faktor skala.",
      "Tidak benar, karena perbandingan volumenya adalah 8 : 27.",
      "Benar, karena kedua limas mempunyai bentuk yang sama.",
      "Tidak benar, karena perbandingan volumenya selalu sama dengan perbandingan panjang rusuk.",
    ],
    jawaban: 1,
    gambarKey: "M8-PQ-S7",
  },
  {
    soal: "Prisma A memiliki alas berbentuk segitiga, sedangkan prisma B memiliki alas berbentuk segiempat. Kedua prisma masing-masing diperbesar dengan faktor skala 2 pada seluruh ukuran panjangnya. Pernyataan yang tepat adalah …",
    pilihan: [
      "Volume kedua prisma masing-masing menjadi delapan kali semula meskipun bentuk alasnya berbeda.",
      "Volume prisma A menjadi empat kali, sedangkan volume prisma B menjadi delapan kali.",
      "Volume kedua prisma menjadi dua kali semula karena panjangnya diperbesar dua kali.",
      "Perubahan volume tidak dapat ditentukan karena bentuk alas kedua prisma berbeda.",
    ],
    jawaban: 0,
  },
  {
    soal: "Sebuah wadah berbentuk limas segiempat memiliki kapasitas 1.000 cm³. Akan dibuat wadah lain yang sebangun dengan seluruh ukuran panjang menjadi ½ kali ukuran wadah pertama. Seorang siswa menyatakan bahwa wadah baru dapat menampung 500 cm³. Mengapa pernyataan tersebut kurang tepat?",
    pilihan: [
      "Karena kapasitas wadah baru tetap 1.000 cm³ selama bentuknya sama.",
      "Karena kapasitas wadah baru menjadi 250 cm³ akibat perubahan luas alas.",
      "Karena kapasitas wadah baru menjadi 125 cm³, yaitu 1.000 × (½)³.",
      "Karena kapasitas wadah baru menjadi 2.000 cm³ setelah diperkecil.",
    ],
    jawaban: 2,
  },
  {
    soal: "Sebuah model lampu terdiri atas badan berbentuk balok dan atap berbentuk limas segiempat. Volume badan balok 800 cm³ dan volume atap limas 200 cm³. Seluruh ukuran panjang model diperbesar dengan faktor skala 2. Strategi manakah yang tepat untuk menentukan volume keseluruhan model baru?",
    pilihan: [
      "Mengalikan jumlah volume awal dengan 2 sehingga diperoleh 2.000 cm³.",
      "Mengalikan volume balok dengan 2³, tetapi volume limas dengan 2² karena bentuknya berbeda.",
      "Mengalikan jumlah volume awal dengan 2² sehingga diperoleh 4.000 cm³.",
      "Mengalikan volume masing-masing bagian dengan 2³, kemudian menjumlahkannya sehingga diperoleh 8.000 cm³.",
    ],
    jawaban: 3,
    gambarKey: "M8-PQ-S10",
  },
];

export default function Materi8Peta10Quiz(props: StepComponentProps) {
  return (
    <QuizHalaman
      {...props}
      soal={soal}
      bannerKey="M8-PQ-1"
      bannerAlt="Quiz Interaktif – Submateri 8: Skala dan Volume Bangun Ruang Sisi Datar"
      submateriBerikutnya={null}
    />
  );
}
