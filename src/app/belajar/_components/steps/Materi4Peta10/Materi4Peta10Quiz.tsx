import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import QuizHalaman, { type QuizSoal } from "../Peta10/QuizHalaman";

const soal: QuizSoal[] = [
  {
    soal: "Sebuah limas segiempat beraturan memiliki alas berbentuk persegi dengan panjang sisi 8 cm dan tinggi sisi tegak 5 cm. Seorang siswa menyatakan bahwa luas permukaannya adalah 104 cm². Bagaimana penilaianmu terhadap pernyataan tersebut?",
    pilihan: [
      "Benar, karena 64 cm² merupakan luas alas dan 40 cm² merupakan luas seluruh sisi tegak.",
      "Benar, karena luas permukaan diperoleh dari luas alas ditambah luas dua sisi tegak.",
      "Tidak benar, karena luas seluruh sisi tegaknya 80 cm² sehingga luas permukaannya 144 cm².",
      "Tidak benar, karena luas permukaan limas harus dihitung menggunakan tinggi limas.",
    ],
    jawaban: 2,
    gambarKey: "M4-PQ-S1",
  },
  {
    soal: "Sebuah limas segitiga memiliki alas seluas 24 cm². Luas ketiga sisi tegaknya berturut-turut 15 cm², 18 cm², dan 21 cm². Rani menjumlahkan keempat luas tersebut, sedangkan Dito mengalikan luas alas dengan empat. Mengapa cara Rani lebih tepat?",
    pilihan: [
      "Karena setiap limas mempunyai empat sisi tegak yang sama luas.",
      "Karena luas permukaan diperoleh dengan menjumlahkan luas alas dan ketiga sisi tegak yang membatasi limas.",
      "Karena luas alas selalu lebih kecil daripada luas setiap sisi tegak.",
      "Karena luas permukaan cukup dihitung dari jumlah sisi dikalikan luas alas.",
    ],
    jawaban: 1,
  },
  {
    soal: "Sebuah limas segilima beraturan memiliki panjang setiap sisi alas 6 cm dan tinggi setiap sisi tegak 8 cm. Seorang siswa menghitung luas seluruh sisi tegak dengan cara 5 × ½ × 6 × 8. Mengapa cara tersebut tepat?",
    pilihan: [
      "Karena limas segilima mempunyai lima alas yang berbentuk segitiga.",
      "Karena luas seluruh sisi tegak sama dengan lima kali luas alas segilima.",
      "Karena setiap sisi tegak berbentuk persegi panjang dengan ukuran 6 cm × 8 cm.",
      "Karena limas memiliki lima sisi tegak berbentuk segitiga yang kongruen.",
    ],
    jawaban: 3,
  },
  {
    soal: "Sebuah limas segiempat memiliki luas alas 36 cm². Luas keempat sisi tegaknya berturut-turut 20 cm², 20 cm², 24 cm², dan 24 cm². Siswa A menjumlahkan luas semua sisinya, sedangkan siswa B menggunakan 36 + 4 × 20. Kesimpulan yang paling tepat adalah …",
    pilihan: [
      "Kedua cara benar karena semua limas memiliki empat sisi tegak.",
      "Cara siswa B benar karena tinggi sisi tegak tidak diperlukan.",
      "Cara siswa A benar karena memperhitungkan luas keempat sisi tegak yang ukurannya tidak semuanya sama.",
      "Kedua cara salah karena luas permukaan harus dihitung menggunakan volume.",
    ],
    jawaban: 2,
  },
  {
    soal: "Dua limas segiempat beraturan memiliki tinggi sisi tegak yang sama, yaitu 8 cm. Panjang sisi alas limas A adalah 6 cm, sedangkan limas B adalah 9 cm. Pernyataan yang benar adalah …",
    pilihan: [
      "Keduanya memiliki luas permukaan sama karena tinggi sisi tegaknya sama.",
      "Limas A memiliki luas permukaan lebih besar karena alasnya lebih kecil.",
      "Limas B memiliki luas permukaan lebih besar karena luas alas dan luas seluruh sisi tegaknya lebih besar.",
      "Luas permukaan tidak dapat ditentukan tanpa mengetahui tinggi tegak limas.",
    ],
    jawaban: 2,
    gambarKey: "M4-PQ-S5",
  },
  {
    soal: "Seorang siswa ingin menentukan luas permukaan limas segiempat beraturan. Ia mengetahui panjang sisi alas dan tinggi limas, tetapi belum mengetahui tinggi sisi tegaknya. Langkah yang paling tepat adalah …",
    pilihan: [
      "Langsung menggunakan tinggi limas sebagai tinggi segitiga sisi tegak.",
      "Mengalikan luas alas dengan tinggi limas.",
      "Menghitung volume terlebih dahulu, lalu mengubahnya menjadi luas.",
      "Menentukan tinggi sisi tegak menggunakan hubungan segitiga siku-siku, kemudian menghitung luas alas dan sisi tegaknya.",
    ],
    jawaban: 3,
    gambarKey: "M4-PQ-S6",
  },
  {
    soal: "Sebuah atap berbentuk limas segiempat beraturan memiliki panjang sisi alas 6 m dan tinggi sisi tegak 4 m. Jika hanya keempat sisi tegaknya yang akan dilapisi bahan, seorang siswa memperoleh hasil 60 m². Bagaimana penilaianmu?",
    pilihan: [
      "Tidak tepat, karena 60 m² mencakup luas alas; bahan yang diperlukan hanya 48 m².",
      "Tepat, karena seluruh permukaan limas harus dihitung.",
      "Tidak tepat, karena bahan yang diperlukan adalah 24 m².",
      "Tepat, karena luas sisi tegak dan luas alas harus selalu dijumlahkan.",
    ],
    jawaban: 0,
    gambarKey: "M4-PQ-S7",
  },
  {
    soal: "Sebuah limas segilima beraturan mempunyai luas alas 60 cm², keliling alas 30 cm, dan tinggi sisi tegak 7 cm. Siswa A menghitung luas permukaan dengan 60 + ½ × 30 × 7, sedangkan siswa B menghitung 60 + 30 × 7. Kesimpulan yang paling tepat adalah …",
    pilihan: [
      "Cara siswa A benar karena luas seluruh sisi tegak merupakan jumlah luas lima segitiga, masing-masing menggunakan faktor ½.",
      "Cara siswa B benar karena semua sisi tegak berbentuk persegi panjang.",
      "Kedua cara benar karena menghasilkan luas alas yang sama.",
      "Kedua cara salah karena luas permukaan limas hanya bergantung pada tinggi tegaknya.",
    ],
    jawaban: 0,
  },
];

export default function Materi4Peta10Quiz(props: StepComponentProps) {
  return (
    <QuizHalaman
      {...props}
      soal={soal}
      bannerKey="M4-PQ-1"
      bannerAlt="Quiz Interaktif – Submateri 4: Luas Permukaan Limas"
      submateriBerikutnya={5}
    />
  );
}
