import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import QuizHalaman, { type QuizSoal } from "../Peta10/QuizHalaman";

const soal: QuizSoal[] = [
  {
    soal: "Sebuah limas segiempat memiliki alas berbentuk persegi dengan panjang sisi 6 cm dan tinggi limas 9 cm. Seorang siswa menyatakan bahwa volumenya adalah 324 cm³ karena menghitung 6 × 6 × 9. Bagaimana penilaianmu terhadap pernyataan tersebut?",
    pilihan: [
      "Benar, karena volume limas diperoleh dari luas alas dikalikan tinggi.",
      "Tidak benar, karena volume limas adalah 108 cm³, yaitu sepertiga dari hasil perkalian luas alas dan tinggi.",
      "Benar, karena limas memiliki empat sisi tegak.",
      "Tidak benar, karena volume limas harus dihitung menggunakan tinggi sisi tegak.",
    ],
    jawaban: 1,
  },
  {
    soal: "Sebuah prisma segitiga dan limas segitiga memiliki luas alas yang sama, yaitu 24 cm², serta tinggi yang sama, yaitu 12 cm. Mengapa volume limas hanya sepertiga volume prisma?",
    pilihan: [
      "Karena limas mempunyai lebih sedikit sisi daripada prisma.",
      "Karena tinggi limas harus dibagi tiga sebelum menentukan luas alas.",
      "Karena tiga limas dengan volume yang sama dapat memiliki volume total sebesar volume prisma yang luas alas dan tingginya sama.",
      "Karena alas limas berbentuk segitiga, sedangkan alas prisma selalu berbentuk segiempat.",
    ],
    jawaban: 2,
    gambarKey: "M7-PQ-S2",
  },
  {
    soal: "Sebuah limas segitiga memiliki luas alas 48 cm² dan tinggi 15 cm. Rani menghitung volumenya dengan cara (48 × 15) ÷ 3, sedangkan Dito menghitungnya dengan cara 48 × (15 ÷ 3). Pernyataan yang tepat adalah …",
    pilihan: [
      "Hanya cara Rani yang benar karena pembagian harus dilakukan paling akhir.",
      "Hanya cara Dito yang benar karena tinggi limas harus dibagi terlebih dahulu.",
      "Kedua cara salah karena luas alas harus dibagi tiga sebelum dikalikan tinggi.",
      "Kedua cara benar karena menghasilkan volume yang sama, yaitu 240 cm³.",
    ],
    jawaban: 3,
  },
  {
    soal: "Dua limas segiempat mempunyai luas alas yang sama, yaitu 60 cm². Tinggi limas A adalah 9 cm, sedangkan tinggi limas B adalah 15 cm. Kesimpulan manakah yang tepat?",
    pilihan: [
      "Volume limas B lebih besar karena dengan luas alas yang sama, volume bertambah sebanding dengan tingginya.",
      "Volume kedua limas sama karena alasnya sama.",
      "Volume limas A lebih besar karena tingginya lebih kecil.",
      "Volume limas B tiga kali volume limas A karena rumus volume limas memuat faktor sepertiga.",
    ],
    jawaban: 0,
    gambarKey: "M7-PQ-S4",
  },
  {
    soal: "Sebuah limas segilima memiliki luas alas 75 cm² dan volume 300 cm³. Seorang siswa ingin menentukan tinggi limas tersebut. Strategi manakah yang paling tepat?",
    pilihan: [
      "Membagi volume dengan luas alas sehingga diperoleh tinggi 4 cm.",
      "Mengalikan volume dengan luas alas sehingga diperoleh tinggi 22.500 cm.",
      "Mengalikan volume dengan tiga, kemudian membaginya dengan luas alas sehingga diperoleh tinggi 12 cm.",
      "Membagi luas alas dengan tiga, kemudian mengalikannya dengan volume.",
    ],
    jawaban: 2,
  },
  {
    soal: "Sebuah limas segitiga memiliki alas berbentuk segitiga dengan panjang alas 10 cm dan tinggi segitiga alas 6 cm. Tinggi limas adalah 12 cm. Seorang siswa menghitung volumenya dengan cara ⅓ × 10 × 6 × 12. Mengapa cara tersebut kurang tepat?",
    pilihan: [
      "Karena tinggi limas seharusnya diganti dengan tinggi sisi tegak.",
      "Karena luas alas segitiga harus dihitung menggunakan ½ × 10 × 6 sebelum dikalikan dengan sepertiga tinggi limas.",
      "Karena volume limas segitiga selalu sama dengan volume prisma segitiga.",
      "Karena limas segitiga tidak dapat dihitung volumenya menggunakan luas alas.",
    ],
    jawaban: 1,
  },
  {
    soal: "Sebuah prisma memiliki luas alas 54 cm² dan tinggi 10 cm. Seorang siswa ingin membuat limas dengan luas alas yang sama dan volume yang sama seperti prisma tersebut. Berapakah tinggi limas yang diperlukan beserta alasannya?",
    pilihan: [
      "10 cm, karena luas alas kedua bangun sama.",
      "20 cm, karena limas memiliki sisi tegak yang bertemu pada satu titik.",
      "30 cm, karena volume limas adalah sepertiga hasil perkalian luas alas dan tingginya.",
      "5 cm, karena limas mempunyai volume lebih kecil daripada prisma.",
    ],
    jawaban: 2,
  },
  {
    soal: "Dua limas memiliki bentuk alas yang berbeda. Limas A memiliki alas berbentuk persegi dengan luas 36 cm², sedangkan limas B memiliki alas berbentuk segitiga dengan luas 36 cm². Jika tinggi kedua limas sama-sama 9 cm, kesimpulan yang tepat adalah …",
    pilihan: [
      "Limas A memiliki volume lebih besar karena alasnya persegi.",
      "Limas B memiliki volume lebih besar karena alasnya segitiga.",
      "Volume kedua limas tidak dapat dibandingkan karena bentuk alasnya berbeda.",
      "Kedua limas memiliki volume yang sama karena luas alas dan tingginya sama.",
    ],
    jawaban: 3,
    gambarKey: "M7-PQ-S8",
  },
  {
    soal: "Sebuah wadah berbentuk limas segiempat memiliki alas persegi dengan panjang sisi 12 cm dan tinggi 15 cm. Wadah tersebut akan diisi pasir hingga penuh. Rafi menghitung kebutuhan pasir dengan cara 12 × 12 × 15, sedangkan Sinta menggunakan ⅓ × 12 × 12 × 15. Mengapa cara Sinta lebih tepat?",
    pilihan: [
      "Karena volume limas hanya sepertiga volume prisma yang memiliki luas alas dan tinggi yang sama.",
      "Karena pasir hanya mengisi sepertiga tinggi limas.",
      "Karena panjang sisi alas limas harus selalu dibagi tiga.",
      "Karena volume limas ditentukan oleh jumlah sisi tegaknya.",
    ],
    jawaban: 0,
  },
  {
    soal: "Sebuah bangun gabungan terdiri atas balok berukuran 12 cm × 10 cm × 8 cm dan atap berbentuk limas segiempat dengan alas berukuran 12 cm × 10 cm serta tinggi 6 cm. Alas limas menempel tepat pada sisi atas balok. Strategi manakah yang tepat untuk menentukan volume keseluruhan bangun?",
    pilihan: [
      "Menjumlahkan volume balok dan volume limas, kemudian mengurangi luas bidang yang saling menempel.",
      "Mengalikan volume balok dengan volume limas karena kedua bangun saling menempel.",
      "Menghitung volume balok saja karena alas limas berada di atas balok.",
      "Menjumlahkan 12 × 10 × 8 dan ⅓ × 12 × 10 × 6 karena kedua bangun memiliki ruang yang berbeda dan tidak saling tumpang tindih.",
    ],
    jawaban: 3,
    gambarKey: "M7-PQ-S10",
  },
];

export default function Materi7Peta10Quiz(props: StepComponentProps) {
  return (
    <QuizHalaman
      {...props}
      soal={soal}
      bannerKey="M7-PQ-1"
      bannerAlt="Quiz Interaktif – Submateri 7: Volume Limas"
      submateriBerikutnya={8}
    />
  );
}
