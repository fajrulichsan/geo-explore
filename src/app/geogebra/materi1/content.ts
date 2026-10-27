export type AspectId =
  | "bentuk-sisi"
  | "susunan-sisi"
  | "bidang-sejajar"
  | "alas"
  | "jumlah-sisi"
  | "jumlah-rusuk"
  | "jumlah-titik"
  | "pola-lain";

type AspectInfo = {
  id: AspectId;
  label: string;
  prompt: string;
  support: string;
};

export const ASPECTS: AspectInfo[] = [
  {
    id: "bentuk-sisi",
    label: "Bentuk sisi",
    prompt:
      "Putar model dan amati sisi-sisinya dari berbagai arah. Bentuk apa saja yang kamu temukan pada sisi bangun tersebut?",
    support: "Putar model dan klik sebuah sisi untuk memberi sorotan sementara.",
  },
  {
    id: "susunan-sisi",
    label: "Susunan sisi",
    prompt:
      "Amati bagaimana sisi-sisi bangun tersusun dan saling berhubungan. Apa yang kamu temukan dari susunan sisi tersebut?",
    support:
      "Putar model dan sorot beberapa sisi secara bergantian. Klik lagi untuk melepas sorotan.",
  },
  {
    id: "bidang-sejajar",
    label: "Pasangan bidang sisi sejajar",
    prompt:
      "Putar model dan amati bidang-bidang sisinya. Adakah dua bidang sisi yang sejajar?",
    support: "Klik sebuah sisi. Sisi akan menyala sementara — cari sisi lain yang sejajar dengannya.",
  },
  {
    id: "alas",
    label: "Bentuk sisi yang dipilih sebagai alas",
    prompt:
      "Pilih salah satu sisi yang akan kamu amati sebagai alas. Amati bentuk sisi tersebut. Berbentuk apakah sisi yang kamu pilih?",
    support: "Klik satu bidang sehingga bidang tersebut disorot sebagai alas. Memilih sisi lain memindahkan alasnya.",
  },
  {
    id: "jumlah-sisi",
    label: "Jumlah sisi",
    prompt:
      "Putar model dari berbagai arah dan telusuri seluruh sisinya. Berapa banyak sisi yang dapat kamu temukan?",
    support: "Klik setiap sisi yang sudah kamu hitung. Sisi berubah warna agar tidak terhitung dua kali.",
  },
  {
    id: "jumlah-rusuk",
    label: "Jumlah rusuk",
    prompt:
      "Amati model dari berbagai arah. Telusuri rusuk-rusuknya dan tentukan jumlahnya.",
    support: "Klik setiap rusuk yang sudah kamu hitung. Rusuk berubah hijau agar tidak terhitung dua kali.",
  },
  {
    id: "jumlah-titik",
    label: "Jumlah titik sudut",
    prompt:
      "Amati seluruh titik sudut pada model. Telusuri satu per satu dan tentukan berapa banyak titik sudut yang kamu temukan.",
    support: "Klik titik sudut yang sudah kamu hitung; titik diberi penanda merah. Gunakan tombol untuk menampilkan titik sudut.",
  },
  {
    id: "pola-lain",
    label: "Sifat/pola lainnya",
    prompt:
      "Amati kembali model secara keseluruhan. Adakah sifat atau pola lain yang menurutmu penting untuk membantu menyelidiki dugaan kelompokmu?",
    support: "Bebas memutar, memperbesar, menyorot sisi atau rusuk, atau mengubah sudut pandang.",
  },
];

export const aspectInfo = (id: AspectId) =>
  ASPECTS.find((a) => a.id === id) ?? ASPECTS[0];
