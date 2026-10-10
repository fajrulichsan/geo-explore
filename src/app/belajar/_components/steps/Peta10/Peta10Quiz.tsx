import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import StepHeader from "@/app/belajar/_components/StepHeader";
import EditablePageImage from "@/app/belajar/_components/EditablePageImage";
import { getPageImage } from "@/lib/pageImages";
import Peta10QuizBoard, { type QuizQuestion } from "./Peta10QuizBoard";

const questions: QuizQuestion[] = [
  {
    soal: "Bangun ruang manakah yang seluruh sisinya berbentuk persegi dan sama besar?",
    pilihan: ["Kubus", "Balok", "Prisma segitiga", "Limas segiempat"],
    jawaban: 0,
    pembahasan: "Kubus memiliki enam sisi berbentuk persegi yang sama besar.",
  },
  {
    soal: "Apa ciri utama yang membedakan prisma dengan limas?",
    pilihan: [
      "Prisma selalu memiliki sisi berbentuk persegi",
      "Prisma memiliki dua alas sejajar dan kongruen, sedangkan limas memiliki satu alas dan satu titik puncak",
      "Limas selalu memiliki lebih banyak sisi daripada prisma",
      "Semua sisi prisma berbentuk segitiga",
    ],
    jawaban: 1,
    pembahasan:
      "Prisma memiliki dua alas sejajar dan kongruen, sedangkan limas memiliki satu alas dan sisi-sisi tegak yang bertemu pada satu titik puncak.",
  },
  {
    soal: "Kubus dan balok dapat dikelompokkan bersama berdasarkan ciri berikut, yaitu…",
    pilihan: [
      "Semua rusuknya sama panjang",
      "Memiliki enam sisi, dua belas rusuk, dan delapan titik sudut",
      "Semua sisinya berbentuk persegi",
      "Memiliki sisi tegak berbentuk segitiga",
    ],
    jawaban: 1,
    pembahasan: "Kubus dan balok sama-sama mempunyai 6 sisi, 12 rusuk, dan 8 titik sudut.",
  },
  {
    soal: "Bangun ruang memiliki dua sisi segitiga yang sejajar dan kongruen serta tiga sisi tegak berbentuk persegi panjang. Bangun tersebut adalah …",
    pilihan: ["Limas segitiga", "Prisma segitiga", "Kubus", "Limas segiempat"],
    jawaban: 1,
    pembahasan: "Bangun tersebut merupakan prisma segitiga karena memiliki dua alas segitiga sejajar dan kongruen.",
  },
  {
    soal: "Kelompok A mengelompokkan kubus, balok, dan prisma segitiga berdasarkan jumlah sisi yang sama. Apakah pengelompokan tersebut tepat?",
    pilihan: [
      "Tepat, karena ketiganya termasuk prisma",
      "Tepat, karena semuanya memiliki enam sisi",
      "Tidak tepat, karena prisma segitiga memiliki lima sisi",
      "Tidak tepat, karena kubus memiliki delapan sisi",
    ],
    jawaban: 2,
    pembahasan: "Kubus dan balok memiliki 6 sisi, sedangkan prisma segitiga memiliki 5 sisi. Jadi, jumlah sisinya tidak sama.",
  },
  {
    soal: "Dua kelompok menghasilkan klasifikasi bangun ruang yang berbeda. Kapan kedua klasifikasi tersebut dapat dianggap benar?",
    pilihan: [
      "Jika jumlah kelompok yang dihasilkan sama",
      "Jika semua bangun memiliki warna yang sama",
      "Jika masing-masing menggunakan pengelompokan yang jelas, tepat, dan konsisten",
      "Jika kedua kelompok menggunakan urutan bangun yang sama",
    ],
    jawaban: 2,
    pembahasan:
      "Klasifikasi yang berbeda dapat sama-sama benar apabila didasarkan pada karakteristik matematis yang tepat dan diterapkan secara konsisten.",
  },
  {
    soal: "Sebuah limas segiempat memiliki jumlah sisi, rusuk, dan titik sudut berturut-turut sebanyak …",
    pilihan: ["5, 8, dan 5", "6, 8, dan 5", "5, 6, dan 4", "4, 8, dan 5"],
    jawaban: 0,
    pembahasan: "Limas segiempat memiliki 5 sisi, 8 rusuk, dan 5 titik sudut.",
  },
  {
    soal: "Seorang siswa menyatakan bahwa setiap bangun ruang yang memiliki sisi berbentuk segitiga pasti merupakan limas. Pernyataan tersebut …",
    pilihan: [
      "Benar, karena sisi segitiga hanya terdapat pada limas",
      "Benar, karena semua prisma memiliki sisi persegi",
      "Tidak benar, karena prisma segitiga juga memiliki sisi berbentuk segitiga",
      "Tidak benar, karena limas tidak memiliki sisi segitiga",
    ],
    jawaban: 2,
    pembahasan:
      "Prisma segitiga juga memiliki sisi berbentuk segitiga. Oleh karena itu, bentuk satu sisi saja belum cukup untuk menentukan jenis bangun ruang.",
  },
  {
    soal: "Kelompok B mengelompokkan prisma segitiga dan limas segiempat karena keduanya memiliki lima sisi. Bagaimana penilaianmu?",
    pilihan: [
      "Benar, jika dasar pengelompokannya adalah jumlah sisi",
      "Salah, karena kedua bangun harus memiliki bentuk alas yang sama",
      "Salah, karena prisma segitiga memiliki enam sisi",
      "Benar, karena keduanya memiliki jumlah rusuk yang sama",
    ],
    jawaban: 0,
    pembahasan:
      "Prisma segitiga dan limas segiempat sama-sama memiliki 5 sisi, sehingga dapat dikelompokkan berdasarkan jumlah sisi meskipun bentuk dan jenis bangunnya berbeda.",
  },
  {
    soal: "Seorang siswa mengelompokkan kubus dan balok berdasarkan jumlah titik sudut, sedangkan siswa lain mengelompokkan kubus dan prisma segitiga berdasarkan jenis bangunnya sebagai prisma. Kesimpulan yang paling tepat adalah …",
    pilihan: [
      "Hanya pengelompokan pertama yang benar",
      "Hanya pengelompokan kedua yang benar",
      "Kedua pengelompokan benar karena menggunakan dasar klasifikasi yang sesuai",
      "Kedua pengelompokan salah karena menghasilkan anggota yang berbeda",
    ],
    jawaban: 2,
    pembahasan:
      "Kubus dan balok sama-sama memiliki 8 titik sudut. Kubus juga merupakan prisma segiempat khusus, sehingga kedua pengelompokan benar berdasarkan kriterianya masing-masing.",
  },
];

export default async function Peta10Quiz({ materi, peta, initialAnswers, editFoto }: StepComponentProps) {
  const [banner, siswa, siswi, petunjuk] = await Promise.all([
    getPageImage("M1-PQ-1"),
    getPageImage("M1-PQ-2"),
    getPageImage("M1-PQ-3"),
    getPageImage("M1-PQ-4"),
  ]);
  const answers = initialAnswers ?? {};
  const tersimpan: Record<string, number> = {};
  questions.forEach((_, i) => {
    const v = answers[`quiz_${i + 1}`];
    const idx = typeof v === "string" ? ["A", "B", "C", "D"].indexOf(v) : -1;
    if (idx >= 0) tersimpan[String(i)] = idx;
  });

  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="1" />

      <div className="flex flex-col gap-4">
        <StepHeader materi={materi} currentStep={1} totalSteps={1} />
        <div className="flex items-center justify-between gap-3">
          <EditablePageImage
            imageKey="M1-PQ-2"
            materi={materi}
            peta={peta}
            step="1"
            urutan="2"
            src={siswa}
            alt="Siswa membawa buku dengan kubus dan balok"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative hidden sm:block w-40 h-28 flex-shrink-0"
          />
          <EditablePageImage
            imageKey="M1-PQ-1"
            materi={materi}
            peta={peta}
            step="1"
            urutan="1"
            src={banner}
            alt="Quiz Interaktif – Submateri 1: Klasifikasi Bangun Ruang Sisi Datar"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative flex-1 h-24"
          />
          <EditablePageImage
            imageKey="M1-PQ-3"
            materi={materi}
            peta={peta}
            step="1"
            urutan="3"
            src={siswi}
            alt="Siswi membawa tablet dengan limas"
            editable={editFoto}
            imageClassName="object-contain"
            containerClassName="relative hidden sm:block w-40 h-28 flex-shrink-0"
          />
        </div>
      </div>

      <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-[20px] p-4 flex flex-col sm:flex-row sm:items-center gap-3">
        <EditablePageImage
          imageKey="M1-PQ-4"
          materi={materi}
          peta={peta}
          step="1"
          urutan="4"
          src={petunjuk}
          alt="Petunjuk"
          editable={editFoto}
          imageClassName="object-contain"
          containerClassName="relative w-40 h-12 flex-shrink-0"
        />
        <ol className="m-0 pl-5 text-sm text-[#78350F] leading-[1.7]">
          <li>Baca setiap soal dengan teliti.</li>
          <li>Klik salah satu jawaban (A, B, C, atau D) yang menurutmu paling tepat.</li>
          <li>Setelah semua soal terjawab, kamu dapat melanjutkan ke Tantangan Open-Ended.</li>
        </ol>
      </div>

      <Peta10QuizBoard questions={questions} initialAnswers={tersimpan} />

      <div className="flex justify-end items-center">
        <NextStepButton>LANJUT KE TANTANGAN OPEN-ENDED</NextStepButton>
      </div>
    </form>
  );
}
