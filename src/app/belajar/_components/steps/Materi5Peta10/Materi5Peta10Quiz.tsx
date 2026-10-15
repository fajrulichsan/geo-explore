import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import QuizHalaman, { type QuizSoal } from "../Peta10/QuizHalaman";

const soal: QuizSoal[] = [
  {
    soal: "Sebuah kubus memiliki panjang rusuk 4 cm. Setelah diperbesar dengan faktor skala 2, seorang siswa menyatakan bahwa luas permukaannya menjadi dua kali semula. Bagaimana penilaianmu terhadap pernyataan tersebut?",
    pilihan: [
      "Benar, karena panjang rusuknya menjadi dua kali semula.",
      "Benar, karena kubus memiliki enam sisi yang sama luas.",
      "Tidak benar, karena luas permukaannya menjadi empat kali semula.",
      "Tidak benar, karena luas permukaannya menjadi delapan kali semula.",
    ],
    jawaban: 2,
    gambarKey: "M5-PQ-S1",
  },
  {
    soal: "Dua balok memiliki ukuran yang berbeda. Balok A berukuran 6 cm × 4 cm × 3 cm, sedangkan balok B berukuran 12 cm × 8 cm × 6 cm. Mengapa luas permukaan balok B menjadi empat kali luas permukaan balok A?",
    pilihan: [
      "Karena setiap ukuran panjang balok B menjadi dua kali ukuran balok A, sehingga luas setiap sisinya menjadi empat kali.",
      "Karena volume balok B menjadi empat kali volume balok A.",
      "Karena jumlah sisi balok B lebih banyak daripada balok A.",
      "Karena luas permukaan selalu berubah sebanding dengan jumlah panjang seluruh rusuk.",
    ],
    jawaban: 0,
    gambarKey: "M5-PQ-S2",
  },
  {
    soal: "Sebuah prisma segitiga diperbesar dengan faktor skala 3. Rani menyatakan bahwa luas permukaannya menjadi 9 kali semula, sedangkan Dito menyatakan menjadi 27 kali semula. Kesimpulan yang tepat adalah …",
    pilihan: [
      "Dito benar karena prisma merupakan bangun ruang tiga dimensi.",
      "Rani benar karena luas permukaan berubah menurut kuadrat faktor skala.",
      "Keduanya benar karena luas dan volume berubah dengan faktor yang sama.",
      "Keduanya salah karena luas permukaan tidak dipengaruhi faktor skala.",
    ],
    jawaban: 1,
  },
  {
    soal: "Sebuah limas segiempat beraturan memiliki luas permukaan 150 cm². Limas tersebut diperkecil dengan faktor skala ½. Seorang siswa menghitung luas permukaan hasil penskalaan dengan cara 150 × ½. Mengapa cara tersebut kurang tepat?",
    pilihan: [
      "Karena luas permukaan hasil penskalaan selalu sama dengan luas semula.",
      "Karena luas permukaan seharusnya dikalikan dengan faktor skala pangkat tiga.",
      "Karena limas mempunyai empat sisi tegak sehingga luasnya harus dibagi empat.",
      "Karena luas permukaan harus dikalikan dengan kuadrat faktor skala, yaitu (½)².",
    ],
    jawaban: 3,
    gambarKey: "M5-PQ-S4",
  },
  {
    soal: "Sebuah kubus memiliki luas permukaan 96 cm². Kubus lain sebangun dengan kubus tersebut dan memiliki luas permukaan 216 cm². Berapakah faktor skala panjang rusuk dari kubus pertama ke kubus kedua?",
    pilihan: [
      "1,5 karena faktor skala merupakan akar kuadrat perbandingan luas permukaan.",
      "2,25 karena faktor skala sama dengan perbandingan luas permukaan.",
      "1,25 karena perubahan luas permukaan dibagi enam sisi.",
      "3 karena kedua kubus memiliki ukuran rusuk yang berbeda.",
    ],
    jawaban: 0,
    gambarKey: "M5-PQ-S5",
  },
  {
    soal: "Sebuah balok memiliki luas permukaan 240 cm². Jika seluruh ukuran panjangnya diperkecil dengan faktor skala ½, Dina memperoleh luas permukaan baru 60 cm², sedangkan Rafi memperoleh 120 cm². Penilaian yang tepat adalah …",
    pilihan: [
      "Rafi benar karena semua ukuran panjang diperkecil menjadi setengah.",
      "Keduanya benar karena menggunakan faktor skala yang sama.",
      "Dina benar karena luas permukaan baru adalah 240 × (½)².",
      "Keduanya salah karena luas permukaan tidak dapat dihitung tanpa ukuran balok.",
    ],
    jawaban: 2,
  },
  {
    soal: "Dua limas segiempat yang sebangun memiliki perbandingan panjang rusuk yang bersesuaian 2 : 3. Seorang siswa menyimpulkan bahwa perbandingan luas permukaannya juga 2 : 3. Bagaimana kesimpulan yang tepat?",
    pilihan: [
      "Benar, karena limas memiliki bentuk yang sama.",
      "Tidak benar, karena perbandingan luas permukaannya adalah 4 : 9.",
      "Tidak benar, karena perbandingan luas permukaannya adalah 8 : 27.",
      "Benar, karena luas permukaan hanya dipengaruhi panjang rusuk alas.",
    ],
    jawaban: 1,
    gambarKey: "M5-PQ-S7",
  },
  {
    soal: "Sebuah model atap berbentuk limas segiempat beraturan memiliki luas keempat sisi tegak 80 cm². Model tersebut diperbesar dengan faktor skala 2. Jika hanya sisi tegaknya yang akan dilapisi bahan, berapa luas bahan yang diperlukan dan mengapa?",
    pilihan: [
      "160 cm², karena faktor skala panjang langsung dikalikan dengan luas.",
      "640 cm², karena limas merupakan bangun ruang tiga dimensi.",
      "80 cm², karena jumlah sisi tegak tidak berubah.",
      "320 cm², karena luas setiap sisi tegak menjadi empat kali semula.",
    ],
    jawaban: 3,
  },
  {
    soal: "Sebuah prisma memiliki luas permukaan 180 cm². Setelah mengalami penskalaan, luas permukaannya menjadi 405 cm². Dua siswa memberikan pendapat: siswa A menyatakan faktor skalanya 2,25, sedangkan siswa B menyatakan faktor skalanya 1,5. Pendapat manakah yang tepat?",
    pilihan: [
      "Siswa A, karena faktor skala sama dengan perbandingan luas permukaan.",
      "Keduanya benar karena luas permukaan dan panjang berubah dengan perbandingan yang sama.",
      "Siswa B, karena faktor skala panjang diperoleh dari akar perbandingan luas permukaan.",
      "Keduanya salah karena faktor skala tidak dapat ditentukan dari luas permukaan.",
    ],
    jawaban: 2,
  },
  {
    soal: "Dua rancangan kotak berbentuk kubus akan dibuat dengan bahan yang sama. Kotak A memiliki panjang rusuk 10 cm, sedangkan kotak B memiliki panjang rusuk 15 cm. Seorang siswa menyatakan bahwa kotak B memerlukan bahan 1,5 kali lebih banyak daripada kotak A. Pernyataan yang tepat adalah …",
    pilihan: [
      "Benar, karena perbandingan panjang rusuk kedua kubus adalah 1 : 1,5.",
      "Tidak benar, karena kotak B memerlukan bahan 2,25 kali lebih banyak daripada kotak A.",
      "Tidak benar, karena kotak B memerlukan bahan 3,375 kali lebih banyak daripada kotak A.",
      "Benar, karena jumlah sisi kedua kubus sama.",
    ],
    jawaban: 1,
    gambarKey: "M5-PQ-S10",
  },
];

export default function Materi5Peta10Quiz(props: StepComponentProps) {
  return (
    <QuizHalaman
      {...props}
      soal={soal}
      bannerKey="M5-PQ-1"
      bannerAlt="Quiz Interaktif – Submateri 5: Skala dan Luas Permukaan Bangun Ruang Sisi Datar"
      submateriBerikutnya={6}
    />
  );
}
