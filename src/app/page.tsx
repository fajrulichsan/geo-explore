import Link from "next/link";

const steps = [
  {
    step: 1,
    bg: "bg-primary",
    title: "Ayo Mengamati dan Berpikir",
    titleColor: "text-primary",
    desc: "Mengamati fenomena dan memunculkan pertanyaan.",
  },
  {
    step: 2,
    bg: "bg-green-500",
    title: "Ayo Berdiskusi",
    titleColor: "text-green-600",
    desc: "Mendiskusikan dan merumuskan masalah.",
  },
  {
    step: 3,
    bg: "bg-accent",
    title: "Ayo Berekplorasi",
    titleColor: "text-accent",
    desc: "Mengeksplorasi serta mengumpulkan data.",
  },
  {
    step: 4,
    bg: "bg-slate-800",
    title: "Ayo Mengolah Informasi",
    titleColor: "text-slate-800",
    desc: "Mengolah dan menganalisis informasi.",
  },
  {
    step: 5,
    bg: "bg-blue-400",
    title: "Ayo Verifikasi",
    titleColor: "text-blue-500",
    desc: "Memeriksa dan membuktikan temuan.",
  },
  {
    step: 6,
    bg: "bg-red-500",
    title: "Ayo Menyimpulkan",
    titleColor: "text-red-500",
    desc: "Menarik kesimpulan dan membuat generalisasi.",
  },
];

const shapes = [
  { name: "KUBUS", color: "bg-green-400", rotate: "rotate-6" },
  { name: "BALOK", color: "bg-blue-400", rotate: "-rotate-6" },
  { name: "PRISMA", color: "bg-accent", rotate: "rotate-3" },
  { name: "LIMAS", color: "bg-purple-400", rotate: "-rotate-3" },
];

const stats = [
  { value: "4+", label: "Bangun Ruang" },
  { value: "6", label: "Tahap Discovery Learning" },
  { value: "3D", label: "Visualisasi GeoGebra & AR" },
];

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-surface-container flex flex-col relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-blue-100 rounded-full blur-3xl opacity-60 -z-10" />
      <div className="absolute top-1/3 -right-40 w-[26rem] h-[26rem] bg-orange-100 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-40 -z-10" />

      {/* Header */}
      <header className="p-6 md:px-16 md:pt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-glass border border-slate-100 p-1">
            <svg className="w-9 h-9 md:w-10 md:h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zm0 14l-10-5v5l10 5 10-5v-5l-10 5z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg md:text-2xl font-bold tracking-tight text-slate-900">
              UNIVERSITAS PENDIDIKAN INDONESIA
            </h1>
            <h2 className="text-[11px] md:text-sm font-semibold text-slate-600 uppercase">
              FAKULTAS PENDIDIKAN MATEMATIKA DAN ILMU PENGETAHUAN ALAM
            </h2>
            <h3 className="text-[11px] md:text-sm font-medium text-slate-500 uppercase">
              PROGRAM STUDI PENDIDIKAN MATEMATIKA
            </h3>
          </div>
        </div>

        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark transition-colors"
        >
          <i className="fa-solid fa-right-to-bracket" />
          Masuk
        </Link>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col relative z-10 px-6 md:px-16 pb-16 gap-14">
        {/* Hero */}
        <div className="flex flex-col items-center text-center relative z-20 mx-auto max-w-3xl pt-6 md:pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-100 text-primary font-bold text-sm mb-6 shadow-sm">
            <i className="fa-solid fa-shapes" />
            <span>E-MODUL GEOMETRI</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-4 tracking-tight">
            BANGUN RUANG
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-accent">
              SISI DATAR
            </span>
          </h2>
          <p className="text-base md:text-lg font-medium text-slate-600 leading-relaxed mb-8">
            Berbasis <span className="text-primary font-bold italic">Open-Ended Problem</span>
            <br />
            dalam <span className="text-primary font-bold italic">Discovery Learning</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/login"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-2xl text-base md:text-lg shadow-[0_8px_20px_-5px_rgba(0,72,186,0.4)] hover:shadow-[0_12px_25px_-5px_rgba(0,72,186,0.5)] hover:-translate-y-1 active:translate-y-0 transition-all group"
            >
              <span className="tracking-wide">MULAI BELAJAR</span>
              <i className="fa-solid fa-arrow-right-long group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              href="/registrasi"
              className="inline-flex items-center gap-2 text-primary font-bold py-4 px-6 rounded-2xl text-base hover:bg-blue-50 transition-colors"
            >
              Daftar Akun Baru
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 w-full max-w-xl">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-primary">{s.value}</span>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1 text-center">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row: 2 columns */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column: Open-Ended Problem + shapes */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="bg-white rounded-[2rem] p-8 shadow-card border border-slate-100 card-hover relative">
              <div className="absolute -top-4 -left-4 bg-accent text-white font-bold px-4 py-1.5 rounded-full shadow-md text-sm transform -rotate-3 z-10">
                OPEN-ENDED PROBLEM
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 pr-12 relative z-10 leading-snug">
                Dapatkah satu masalah bangun ruang diselesaikan dengan beberapa strategi yang
                berbeda?
              </h3>
              <p className="text-primary font-semibold italic text-sm md:text-base">
                Temukan, jelaskan, dan bandingkan strategimu.
              </p>
              <div className="absolute top-4 right-6 text-7xl font-extrabold text-slate-100 select-none pointer-events-none">
                ?
              </div>
            </div>

            {/* Shapes showcase */}
            <div className="bg-white rounded-[2rem] p-8 shadow-card border border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 text-center">
                Jelajahi Bangun Ruang
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {shapes.map((shape) => (
                  <div key={shape.name} className="flex flex-col items-center group">
                    <div
                      className={`w-16 h-16 md:w-20 md:h-20 ${shape.color} rounded-xl shadow-glass border border-white transform ${shape.rotate} flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform`}
                    >
                      <div className="absolute inset-0 border-t-2 border-white/50" />
                      <div className="absolute inset-0 border-l-2 border-white/30" />
                    </div>
                    <span className="mt-3 font-bold text-[10px] md:text-xs tracking-widest text-slate-700">
                      {shape.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Illustration: kids learning */}
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-[2rem] p-6 shadow-card border border-slate-100 flex flex-col items-center overflow-hidden">
              <svg viewBox="0 0 320 180" className="w-full max-w-xs h-auto" aria-hidden="true">
                {/* ground */}
                <ellipse cx="160" cy="168" rx="140" ry="10" fill="#e2e8f0" />
                {/* desk */}
                <rect x="60" y="120" width="200" height="12" rx="4" fill="#0048ba" />
                <rect x="72" y="132" width="10" height="30" rx="2" fill="#003380" />
                <rect x="238" y="132" width="10" height="30" rx="2" fill="#003380" />
                {/* open book */}
                <path d="M130 118 L160 110 L190 118 L190 100 L160 92 L130 100 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
                <line x1="160" y1="92" x2="160" y2="110" stroke="#cbd5e1" strokeWidth="2" />
                {/* cube on desk */}
                <g transform="translate(200,90) rotate(-8)">
                  <rect width="26" height="26" rx="3" fill="#4ade80" />
                  <rect width="26" height="8" rx="2" fill="#ffffff" opacity="0.4" />
                </g>
                {/* child 1 */}
                <circle cx="105" cy="80" r="18" fill="#fdba74" />
                <path d="M87 78 a18 14 0 0 1 36 0" fill="#334155" />
                <rect x="90" y="96" width="30" height="26" rx="10" fill="#0048ba" />
                {/* child 2 */}
                <circle cx="215" cy="78" r="18" fill="#fdba74" />
                <path d="M197 76 a18 14 0 0 1 36 0" fill="#1e293b" />
                <rect x="200" y="94" width="30" height="28" rx="10" fill="#f97316" />
                {/* speech bubble */}
                <g transform="translate(150,40)">
                  <rect width="46" height="30" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
                  <path d="M14 30 L10 40 L22 30 Z" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
                  <text x="23" y="20" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0048ba">?</text>
                </g>
              </svg>
              <p className="mt-2 text-sm font-bold text-slate-700 text-center">
                Belajar bersama, eksplorasi bangun ruang
              </p>
              <p className="text-xs text-slate-500 text-center">
                Cocok untuk pembelajaran mandiri maupun berkelompok
              </p>
            </div>
          </div>

          {/* Right column: Discovery Learning */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div className="bg-white rounded-[2rem] p-6 shadow-card border border-slate-100 relative flex-1 flex flex-col mt-2">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white font-bold px-6 py-2 rounded-full text-center whitespace-nowrap shadow-md text-sm z-10">
                BELAJAR MELALUI
                <br />
                DISCOVERY LEARNING
              </div>
              <div className="flex flex-col relative gap-2 pt-4">
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-200 -z-10" />

                {steps.map(({ step, bg, title, titleColor, desc }) => (
                  <div
                    key={step}
                    className="flex items-start gap-3 rounded-xl p-2 relative group hover:bg-slate-50 transition-colors"
                  >
                    <div
                      className={`w-8 h-8 rounded-full ${bg} text-white flex items-center justify-center font-bold text-base flex-shrink-0 shadow-sm relative z-10`}
                    >
                      {step}
                    </div>
                    <div className="pt-0.5">
                      <h4 className={`font-bold ${titleColor} text-xs md:text-sm mb-0.5`}>
                        {title}
                      </h4>
                      <p className="text-[10px] text-slate-600 leading-tight">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-white p-5 md:px-12 flex items-center justify-between mt-auto shadow-[0_-10px_30px_rgba(0,0,0,0.1)] bg-primary-dark">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
            <i className="fa-solid fa-graduation-cap text-white" />
          </div>
          <div>
            <p className="text-sm font-bold tracking-widest uppercase text-white/90">
              Untuk Siswa SMP
            </p>
            <p className="text-xs text-white/50 font-medium">Belajar • Eksplorasi • Temukan</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-white/50 font-medium uppercase tracking-wider mb-1">
            Universitas Pendidikan Indonesia
          </p>
          <p className="text-sm font-bold text-white/90">2026</p>
        </div>
      </footer>
    </div>
  );
}
