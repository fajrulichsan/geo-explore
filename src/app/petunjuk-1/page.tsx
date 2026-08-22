import Link from "next/link";

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
      <main className="max-w-7xl mx-auto bg-surface-container rounded-8xl overflow-hidden shadow-2xl border-4 border-white flex flex-col relative w-full">
        <div
          className="absolute top-0 right-0 w-full h-64 bg-blue-50/50 -z-10"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 80%)" }}
        />

        {/* Header */}
        <header className="p-8 md:p-12 pb-16 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="flex-1 flex items-start gap-6">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-primary text-white rounded-full flex items-center justify-center text-4xl shadow-lg shrink-0">
              <i className="fa-solid fa-clipboard-question" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-2 tracking-tight leading-tight">
                PETUNJUK <br />
                <span className="text-3xl md:text-4xl font-bold text-slate-700">
                  PENGGUNAAN E-MODULE
                </span>
              </h1>
              <p className="text-lg text-slate-600 font-medium">
                Kenali cara menggunakan e-module sebelum memulai perjalanan belajarmu.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 max-w-sm shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Ilustrasi siswa belajar geometri"
              className="w-full h-auto object-contain drop-shadow-xl rounded-xl"
              src="https://lh3.googleusercontent.com/aida/AP1WRLv09-We-drNRshQ9MzRZEda17qTvtyZckpDUDoMjFgJ_riXEdMJF9AB-HxAs49fHPkip_xM5SuP-qpYNKYXofyi4kY4F9XY8dHb_6wsG7ZDPVTLp3LdHHSMmMQS1ETqOmgovnh9mxZTcahiJuRnBWRhFBFZeU1aUOUWLQvKzB5INdSiCn8Fqnkj63YZ8bKxiMlqc5BVirZOldU45AFXrSTb_k9Nt9d6315Ht2fkp2k5phyYSphlxHEeM6gM"
            />
          </div>
          <div className="absolute top-8 right-8 bg-primary text-white p-4 rounded-2xl text-center shadow-lg transform rotate-3">
            <p className="text-xs font-bold uppercase tracking-wider mb-1">Halaman</p>
            <p className="text-3xl font-extrabold leading-none mb-1">1</p>
            <p className="text-xs">dari 2</p>
          </div>
        </header>

        {/* Content Grid */}
        <section className="p-6 md:p-10 pt-0 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-6 relative z-10">
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
        <div className="px-6 md:px-10 pb-6 mt-4 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-xl bg-white z-20 relative md:-mr-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida/AP1WRLv09-We-drNRshQ9MzRZEda17qTvtyZckpDUDoMjFgJ_riXEdMJF9AB-HxAs49fHPkip_xM5SuP-qpYNKYXofyi4kY4F9XY8dHb_6wsG7ZDPVTLp3LdHHSMmMQS1ETqOmgovnh9mxZTcahiJuRnBWRhFBFZeU1aUOUWLQvKzB5INdSiCn8Fqnkj63YZ8bKxiMlqc5BVirZOldU45AFXrSTb_k9Nt9d6315Ht2fkp2k5phyYSphlxHEeM6gM"
              alt="Student Character"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center gap-4 bg-blue-50/80 px-6 py-4 rounded-full border border-blue-100 pl-10">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
              <i className="fa-solid fa-check-circle text-2xl" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Sudah mengenal tombol dan petunjuknya?</p>
              <p className="font-bold text-primary">
                Yuk, kenali perjalanan belajarmu
                <br />
                pada halaman berikutnya!
              </p>
            </div>
          </div>
          <Link
            href="/petunjuk-2"
            className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-full text-xl shadow-[0_8px_0_#003380] active:shadow-[0_0px_0_#003380] active:translate-y-2 transition-all flex items-center gap-4 group"
          >
            LANJUTKAN
            <i className="fa-solid fa-circle-arrow-right text-2xl group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Footer */}
        <footer className="bg-primary text-white p-4 md:px-10 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
              <i className="fa-solid fa-book text-sm" />
            </div>
            <p className="text-sm font-semibold tracking-wider uppercase">
              E-Module Geometri <span className="mx-2 opacity-50">•</span> Bangun Ruang Sisi Datar
            </p>
          </div>
          <div className="flex gap-1 opacity-50">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
            ))}
          </div>
        </footer>
      </main>
    </div>
  );
}
