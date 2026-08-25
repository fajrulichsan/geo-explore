import Link from "next/link";
import Footer from "@/app/_components/Footer";

const sebelumMemulai = [
  {
    icon: "fa-solid fa-laptop",
    title: "Pastikan perangkatmu",
    desc: "dapat menjalankan e-module dengan baik.",
  },
  {
    icon: "fa-solid fa-user",
    title: "Pastikan identitas",
    desc: "yang kamu masukkan sudah benar.",
  },
  {
    icon: "fa-solid fa-pen",
    title: "Siapkan alat tulis",
    desc: "jika diperlukan untuk mencatat atau membuat perhitungan.",
  },
  {
    icon: "fa-solid fa-book-open",
    title: "Ikuti kegiatan secara berurutan",
    desc: "dan baca setiap petunjuk dengan teliti.",
  },
];

const navigasi = [
  { icon: "fa-solid fa-house", title: "Beranda", desc: "Kembali ke menu utama." },
  { icon: "fa-solid fa-arrow-left", title: "Kembali", desc: "Kembali ke halaman sebelumnya." },
  { icon: "fa-solid fa-arrow-right", title: "Lanjut", desc: "Menuju halaman berikutnya." },
  { icon: "fa-solid fa-bars", title: "Menu", desc: "Membuka daftar bagian e-module." },
  { icon: "fa-solid fa-magnifying-glass", title: "Eksplorasi", desc: "Membuka aktivitas interaktif." },
  { icon: "fa-solid fa-floppy-disk", title: "Simpan", desc: "Menyimpan input/aktivitas." },
];

const tanda = [
  {
    icon: "fa-solid fa-star",
    color: "text-yellow-400",
    title: "Wajib dilakukan",
    desc: "Aktivitas perlu diselesaikan sebelum melanjutkan.",
  },
  {
    icon: "fa-solid fa-lightbulb",
    color: "text-yellow-500",
    title: "Petunjuk",
    desc: "Memberikan bantuan atau arahan saat kamu membutuhkannya.",
  },
  {
    icon: "fa-solid fa-pen-to-square",
    color: "text-blue-500",
    title: "Tuliskan",
    desc: "Masukkan jawaban atau hasil pemikiranmu pada kolom yang tersedia.",
  },
  {
    icon: "fa-solid fa-user",
    color: "text-purple-500",
    title: "Mandiri",
    desc: "Kerjakan terlebih dahulu aktivitas bertanda Mandiri secara individual.",
  },
  {
    icon: "fa-solid fa-users",
    color: "text-green-500",
    title: "Berdiskusi",
    desc: "Kerjakan atau diskusikan bersama kelompokmu.",
  },
];

export default function Petunjuk1Page() {
  return (
    <div
      className="min-h-screen flex flex-col p-4 md:p-8 text-slate-800 antialiased font-sans"
      style={{
        backgroundColor: "#e6f0fa",
        backgroundImage:
          "radial-gradient(circle at top right, #ffffff, transparent 50%), radial-gradient(circle at bottom left, #ffffff, transparent 50%)",
      }}
    >
      <main className="max-w-6xl mx-auto w-full flex flex-col relative flex-1">
        {/* Header */}
        <header className="p-4 md:p-8 pb-10 md:pb-14 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative z-10">
          <div className="flex-1 flex items-start gap-4 md:gap-6">
            <div className="w-14 h-14 md:w-24 md:h-24 bg-primary text-white rounded-full flex items-center justify-center text-2xl md:text-4xl shadow-lg shrink-0">
              <i className="fa-solid fa-clipboard-question" />
            </div>
            <div>
              <h1 className="text-2xl md:text-5xl font-extrabold text-primary mb-1 md:mb-2 tracking-tight leading-tight">
                PETUNJUK <br />
                <span className="text-xl md:text-4xl font-bold text-slate-700">
                  PENGGUNAAN E-MODULE
                </span>
              </h1>
              <p className="text-sm md:text-lg text-slate-600 font-medium">
                Kenali cara menggunakan e-module sebelum memulai perjalanan belajarmu.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 max-w-sm shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Ilustrasi siswa belajar geometri"
              className="w-full h-auto object-contain drop-shadow-xl rounded-xl"
              src="https://is3.cloudhost.id/assets-geo/home-1.webp"
            />
          </div>
        </header>

        {/* Content Grid */}
        <section className="p-4 md:p-8 pt-4 grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-6 relative z-10">
          {/* Column A */}
          <div className="bg-blue-50 rounded-3xl p-6 pt-10 relative border border-blue-100 flex flex-col shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),0_10px_15px_-3px_rgba(0,72,186,0.1)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 bg-primary text-white py-2 px-4 rounded-full flex items-center gap-3 shadow-md">
              <div className="bg-white text-primary w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                <i className="fa-solid fa-clipboard-list" />
              </div>
              <h2 className="font-bold text-sm tracking-wide">A. SEBELUM MEMULAI</h2>
            </div>
            <ul className="space-y-6 mt-4 flex-1">
              {sebelumMemulai.map((item, i) => (
                <li key={item.title} className="flex gap-4 items-start bg-white p-3 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center text-xl shrink-0">
                    <i className={item.icon} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center font-bold">
                        {i + 1}
                      </span>
                      <h3 className="font-bold text-slate-800 text-sm">{item.title}</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 bg-yellow-50 p-4 rounded-xl flex items-start gap-3 border border-yellow-200">
              <i className="fa-solid fa-star text-yellow-400 mt-1" />
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                Mengikuti langkah-langkah di atas akan membantumu belajar lebih terarah dan menyenangkan!
              </p>
            </div>
          </div>

          {/* Column B */}
          <div className="bg-green-50 rounded-3xl p-6 pt-10 relative border border-green-100 flex flex-col shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),0_10px_15px_-3px_rgba(0,72,186,0.1)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 bg-secondary text-white py-2 px-4 rounded-full flex items-center gap-3 shadow-md">
              <div className="bg-white text-secondary w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                <i className="fa-solid fa-arrow-pointer" />
              </div>
              <h2 className="font-bold text-sm tracking-wide">B. KENALI TOMBOL NAVIGASI</h2>
            </div>
            <ul className="space-y-4 mt-4 flex-1">
              {navigasi.map((item) => (
                <li key={item.title} className="flex items-center gap-4 bg-white p-3 rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center shrink-0">
                    <i className={item.icon} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-primary text-sm">{item.title}</h3>
                  </div>
                  <p className="text-xs text-slate-600 text-right w-1/2">{item.desc}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6 bg-green-100/50 p-4 rounded-xl flex items-center justify-center gap-3 border border-green-200">
              <i className="fa-regular fa-lightbulb text-green-600 text-lg" />
              <p className="text-xs text-slate-700 text-center font-medium">
                Tombol-tombol ini akan membantumu menjelajahi e-module dengan mudah.
              </p>
            </div>
          </div>

          {/* Column C */}
          <div className="bg-orange-50 rounded-3xl p-6 pt-10 relative border border-orange-100 flex flex-col shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),0_10px_15px_-3px_rgba(0,72,186,0.1)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 bg-accent text-white py-2 px-4 rounded-full flex items-center gap-3 shadow-md">
              <div className="bg-white text-accent w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                <i className="fa-solid fa-circle-exclamation" />
              </div>
              <h2 className="font-bold text-sm tracking-wide">C. PERHATIKAN TANDA &amp; INSTRUKSI</h2>
            </div>
            <ul className="space-y-4 mt-4 flex-1">
              {tanda.map((item, i) => (
                <li
                  key={item.title}
                  className={`flex gap-4 items-start pb-3 ${
                    i < tanda.length - 1 ? "border-b border-orange-100" : ""
                  }`}
                >
                  <div className={`w-10 h-10 flex items-center justify-center text-2xl ${item.color} shrink-0 drop-shadow-md`}>
                    <i className={item.icon} />
                  </div>
                  <div>
                    <h3 className="font-bold text-accent text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-tight">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 bg-orange-100/50 p-4 rounded-xl flex items-start gap-3 border border-orange-200">
              <i className="fa-solid fa-circle-info text-accent mt-0.5" />
              <p className="text-[11px] text-slate-700 leading-relaxed font-medium">
                Perhatikan tanda dan instruksi ini agar kamu tahu bagaimana cara belajar dan beraktivitas di e-module.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="px-4 md:px-8 pb-10 mt-4 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-blue-50/80 px-6 py-4 rounded-3xl sm:rounded-full border border-blue-100 text-center sm:text-left">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
              <i className="fa-solid fa-check-circle text-2xl" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Sudah mengenal tombol dan petunjuknya?</p>
              <p className="font-bold text-primary">
                Yuk, kenali perjalanan belajarmu{" "}
                <br className="hidden sm:block" />
                pada halaman berikutnya!
              </p>
            </div>
          </div>
          <Link
            href="/petunjuk-2"
            className="w-full sm:w-auto justify-center inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-2xl text-sm md:text-lg shadow-[0_8px_20px_-5px_rgba(0,72,186,0.4)] hover:shadow-[0_12px_25px_-5px_rgba(0,72,186,0.5)] hover:-translate-y-1 active:translate-y-0 transition-all group"
          >
            <span className="tracking-wide">LANJUTKAN</span>
            <i className="fa-solid fa-arrow-right-long group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
