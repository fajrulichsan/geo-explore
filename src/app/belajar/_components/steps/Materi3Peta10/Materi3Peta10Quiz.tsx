import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import QuizHalaman, { type QuizSoal } from "../Peta10/QuizHalaman";

const soal: QuizSoal[] = [
  {
    soal: "Sebuah kubus memiliki panjang rusuk 6 cm. Rina menghitung luas permukaannya dengan cara 6 × (6 × 6), sedangkan Budi menjumlahkan luas keenam sisinya satu per satu. Pernyataan yang tepat adalah …",
    pilihan: [
      "Hanya cara Rina yang benar karena menggunakan rumus.",
      "Hanya cara Budi yang benar karena menghitung setiap sisi.",
      "Kedua cara benar karena sama-sama menghitung luas keenam sisi kubus.",
      "Kedua cara salah karena luas permukaan harus dihitung menggunakan volume.",
    ],
    jawaban: 2,
  },
  {
    soal: "Dua balok memiliki volume yang sama, yaitu 48 cm³. Balok A berukuran 2 cm × 4 cm × 6 cm, sedangkan balok B berukuran 2 cm × 3 cm × 8 cm. Kesimpulan yang tepat adalah …",
    pilihan: [
      "Luas permukaan kedua balok sama karena volumenya sama.",
      "Luas permukaan balok B lebih besar meskipun volumenya sama.",
      "Luas permukaan balok A lebih besar karena ukuran panjangnya lebih kecil.",
      "Luas permukaan tidak dapat dibandingkan tanpa mengetahui massa balok.",
    ],
    jawaban: 1,
    gambarKey: "M3-PQ-S2",
  },
  {
    soal: "Sebuah kubus memiliki panjang rusuk 4 cm. Jika panjang rusuknya diperbesar menjadi 8 cm, bagaimana perubahan luas permukaannya?",
    pilihan: [
      "Menjadi dua kali semula karena panjang rusuk menjadi dua kali.",
      "Menjadi tiga kali semula karena kubus memiliki tiga ukuran.",
      "Menjadi empat kali semula karena luas setiap sisi menjadi empat kali.",
      "Menjadi delapan kali semula karena panjang rusuk menjadi dua kali.",
    ],
    jawaban: 2,
    gambarKey: "M3-PQ-S3",
  },
  {
    soal: "Sebuah prisma segitiga memiliki alas berbentuk segitiga siku-siku dengan sisi 3 cm, 4 cm, dan 5 cm serta panjang prisma 10 cm. Seorang siswa menghitung luas permukaannya dengan cara 2 × ½ × 3 × 4 + (3 + 4 + 5) × 10. Mengapa cara tersebut tepat?",
    pilihan: [
      "Karena menghitung luas kedua alas segitiga dan seluruh sisi tegak prisma.",
      "Karena menghitung luas satu alas dan panjang seluruh rusuk.",
      "Karena luas permukaan prisma sama dengan keliling alas dikali panjang prisma saja.",
      "Karena setiap prisma berbentuk segitiga.",
    ],
    jawaban: 0,
    gambarKey: "M3-PQ-S4",
  },
  {
    soal: "Dua kubus memiliki panjang rusuk masing-masing 5 cm dan 10 cm. Seorang siswa menyatakan bahwa luas permukaan kubus kedua dua kali luas permukaan kubus pertama. Bagaimana penilaianmu?",
    pilihan: [
      "Benar, karena panjang rusuknya menjadi dua kali.",
      "Benar, karena kedua bangun memiliki enam sisi.",
      "Tidak benar, karena luas permukaan kubus kedua menjadi delapan kali.",
      "Tidak benar, karena luas permukaan kubus kedua menjadi empat kali.",
    ],
    jawaban: 3,
  },
  {
    soal: "Sebuah balok berukuran 8 cm × 5 cm × 3 cm. Jika panjang balok ditambahkan 4 cm, sedangkan lebar dan tingginya tetap, bagian manakah yang menyebabkan luas permukaannya bertambah?",
    pilihan: [
      "Hanya dua sisi yang berbentuk persegi panjang dengan ukuran panjang × lebar.",
      "Empat sisi yang memiliki ukuran panjang sebagai salah satu dimensinya.",
      "Semua enam sisi bertambah luas dengan jumlah yang sama.",
      "Hanya dua sisi yang berbentuk lebar × tinggi.",
    ],
    jawaban: 1,
    gambarKey: "M3-PQ-S6",
  },
  {
    soal: "Sebuah prisma memiliki luas alas 24 cm², keliling alas 20 cm, dan panjang prisma 9 cm. Dina menghitung luas permukaan dengan 2 × 24 + 20 × 9, sedangkan Rafi menghitung 24 + 20 × 9. Kesimpulan yang tepat adalah …",
    pilihan: [
      "Kedua cara benar karena luas alas hanya dihitung sekali.",
      "Cara Rafi benar karena sisi tegak sudah mewakili salah satu alas.",
      "Cara Dina benar karena prisma memiliki dua alas kongruen dan seluruh sisi tegak.",
      "Kedua cara salah karena luas permukaan harus dihitung menggunakan volume.",
    ],
    jawaban: 2,
    gambarKey: "M3-PQ-S7",
  },
  {
    soal: "Dua prisma tegak memiliki bentuk dan ukuran alas yang sama. Panjang prisma A adalah 8 cm, sedangkan prisma B adalah 12 cm. Pernyataan yang tepat adalah …",
    pilihan: [
      "Luas permukaan prisma B lebih besar karena luas sisi tegaknya bertambah.",
      "Luas permukaan kedua prisma sama karena luas alasnya sama.",
      "Luas permukaan prisma A lebih besar karena panjangnya lebih pendek.",
      "Luas permukaan tidak dipengaruhi panjang prisma.",
    ],
    jawaban: 0,
  },
  {
    soal: "Sebuah kotak berbentuk balok berukuran 12 cm × 8 cm × 5 cm akan dibungkus seluruh permukaannya dengan kertas. Siswa A menghitung 2 × (12 × 8 + 12 × 5 + 8 × 5), sedangkan siswa B menghitung 12 × 8 × 5. Pernyataan yang tepat adalah …",
    pilihan: [
      "Cara siswa B benar karena menghitung seluruh ruang di dalam kotak.",
      "Kedua cara benar karena menggunakan ukuran yang sama.",
      "Cara siswa A salah karena luas permukaan tidak memerlukan ukuran tinggi.",
      "Cara siswa A benar karena menghitung luas seluruh sisi, sedangkan siswa B menghitung volume.",
    ],
    jawaban: 3,
    gambarKey: "M3-PQ-S9",
  },
  {
    soal: "Seorang siswa menyatakan bahwa setiap prisma yang memiliki luas alas sama pasti memiliki luas permukaan sama. Pernyataan yang paling tepat adalah …",
    pilihan: [
      "Benar, karena luas permukaan hanya bergantung pada luas alas.",
      "Tidak selalu benar, karena keliling alas atau panjang prisma dapat berbeda.",
      "Benar, karena semua prisma memiliki dua alas kongruen.",
      "Tidak benar, karena prisma tidak mempunyai sisi tegak.",
    ],
    jawaban: 1,
  },
];

export default function Materi3Peta10Quiz(props: StepComponentProps) {
  return (
    <QuizHalaman
      {...props}
      soal={soal}
      bannerKey="M3-PQ-1"
      bannerAlt="Quiz Interaktif – Submateri 3: Luas Permukaan Kubus, Balok, dan Prisma"
      submateriBerikutnya={4}
    />
  );
}
