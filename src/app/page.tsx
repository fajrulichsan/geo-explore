export default function Home() {
  return (
    <div className="w-full min-h-screen bg-surface-container flex flex-col relative">
      {/* Header */}
      <header className="p-8 md:px-16 md:pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-glass border border-slate-100 p-1">
            <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zm0 14l-10-5v5l10 5 10-5v-5l-10 5z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
              UNIVERSITAS PENDIDIKAN INDONESIA
            </h1>
            <h2 className="text-xs md:text-sm font-semibold text-slate-600 uppercase">
              FAKULTAS PENDIDIKAN MATEMATIKA DAN ILMU PENGETAHUAN ALAM
            </h2>
            <h3 className="text-xs md:text-sm font-medium text-slate-500 uppercase">
              PROGRAM STUDI PENDIDIKAN MATEMATIKA
            </h3>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col relative z-10 px-8 md:px-16 pb-12 gap-10">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />

        {/* Top row: centered title */}
        <div className="flex flex-col items-center text-center relative z-20 mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-100 text-primary font-bold text-sm mb-6 shadow-sm">
            <i className="fa-solid fa-shapes" />
            <span>E-MODUL GEOMETRI</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-4 tracking-tight">
            BANGUN RUANG
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              SISI DATAR
            </span>
          </h2>
          <p className="text-base md:text-lg font-medium text-slate-600 leading-relaxed mb-2">
            Berbasis <span className="text-primary font-bold italic">Open-Ended Problem</span>
            <br />
            dalam <span className="text-primary font-bold italic">Discovery Learning</span>
          </p>
        </div>

        {/* Row: 2 columns, 1 row */}
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

            {/* Cube illustration */}
            <div className="flex justify-center items-center">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-green-400 rounded-xl shadow-glass border border-white transform rotate-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 border-t-2 border-white/50" />
                  <div className="absolute inset-0 border-l-2 border-white/30" />
                </div>
                <span className="mt-4 font-bold text-xs tracking-widest text-slate-700">
                  KUBUS
                </span>
              </div>
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
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-100 -z-10" />

                {[
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
                ].map(({ step, bg, title, titleColor, desc }) => (
                  <div
                    key={step}
                    className="flex items-start gap-3 bg-white rounded-xl p-2 relative group hover:bg-slate-50 transition-colors"
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

            {/* CTA */}
            <div className="relative self-stretch mt-4">
              <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-5 px-8 rounded-2xl text-lg shadow-[0_8px_20px_-5px_rgba(0,72,186,0.4)] hover:shadow-[0_12px_25px_-5px_rgba(0,72,186,0.5)] hover:-translate-y-1 active:translate-y-1 transition-all flex items-center justify-center gap-4 group">
                <span className="text-2xl font-extrabold tracking-wider">MULAI</span>
                <i className="fa-solid fa-arrow-right-long text-xl group-hover:translate-x-2 transition-transform" />
              </button>
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
