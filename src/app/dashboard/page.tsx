const learningPath = [
  {
    status: "available" as const,
    title: "Pengenalan Bangun Ruang",
    description: "Mengenal konsep dasar titik, garis, bidang, dan ruang.",
    progress: 0,
  },
  {
    status: "active" as const,
    title: "Kubus & Balok",
    tags: ["15 Menit", "3 Kuis"],
    progress: 45,
  },
  {
    status: "locked" as const,
    title: "Prisma & Limas",
    description: "Pelajari sifat dan jaring-jaring bangun ruang prisma dan limas.",
  },
  {
    status: "locked" as const,
    title: "Bola & Tabung",
    description: "Eksplorasi volume dan luas permukaan bangun sisi lengkung.",
  },
];

const quickTools = [
  { icon: "3d_rotation", title: "GeoGebra 3D", description: "Simulator ruang" },
  { icon: "view_in_ar", title: "AR Viewer", description: "Lihat di dunia nyata" },
  { icon: "menu_book", title: "Glosarium", description: "Kamus istilah" },
];

export default function DashboardPage() {
  return (
    <div className="bg-surface text-slate-900 min-h-screen antialiased relative overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-light rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        <div className="absolute top-40 -left-20 w-72 h-72 bg-accent-light rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      </div>

      <main className="relative z-10 flex-1 max-w-6xl mx-auto w-full flex flex-col gap-8">
        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white relative overflow-hidden shadow-[0_8px_30px_rgba(0,51,138,0.12)] flex flex-col justify-center min-h-[300px]">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 h-full">
            <div className="flex-1 z-10">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-4 backdrop-blur-sm">
                Modul Geometri Interaktif
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-2 text-white">
                Selamat Datang, Alex!
              </h1>
              <p className="text-lg mb-8 text-white/90 max-w-md">
                Siap untuk menjelajahi dunia 3D? Hari ini kita akan fokus pada struktur kubus dan balok.
              </p>
              <button className="bg-white text-primary px-6 py-3 rounded-lg text-sm font-semibold shadow-sm hover:scale-105 hover:shadow-md transition-all duration-200 flex items-center gap-2">
                Mulai Belajar
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        <section className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">handyman</span>
            Alat Cepat
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickTools.map((tool) => (
              <a
                key={tool.title}
                href="#"
                className="bg-white rounded-xl p-5 border border-slate-200/60 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-surface text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">{tool.icon}</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">{tool.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">{tool.description}</p>
                </div>
                <span className="material-symbols-outlined ml-auto text-slate-300 group-hover:text-primary transition-colors">
                  chevron_right
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">route</span>
              Peta Belajar
            </h3>
            <a href="#" className="text-xs text-primary hover:underline">
              Lihat Semua
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningPath.map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl border overflow-hidden flex flex-col relative ${
                  item.status === "locked"
                    ? "bg-slate-50 border-slate-200/50 opacity-75"
                    : item.status === "active"
                    ? "bg-white border-primary/30 shadow-card"
                    : "bg-white border-slate-200/60 shadow-sm"
                }`}
              >
                {item.status === "available" && (
                  <div className="absolute top-4 right-4 bg-accent-light/40 text-accent px-2 py-1 rounded text-xs font-bold z-10 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    Tersedia
                  </div>
                )}
                {item.status === "active" && (
                  <div className="absolute top-4 right-4 bg-primary-light/20 text-primary px-2 py-1 rounded text-xs font-bold z-10 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">play_circle</span>
                    Sedang Belajar
                  </div>
                )}

                <div className="h-32 bg-surface relative overflow-hidden flex items-center justify-center">
                  {item.status === "locked" ? (
                    <span className="material-symbols-outlined text-4xl text-slate-400">lock</span>
                  ) : (
                    <span className="material-symbols-outlined text-5xl text-primary opacity-80">
                      category
                    </span>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h4
                    className={`text-lg font-semibold mb-2 ${
                      item.status === "locked" ? "text-slate-500" : "text-slate-900"
                    }`}
                  >
                    {item.title}
                  </h4>

                  {item.description && (
                    <p className="text-sm text-slate-500 mb-4 line-clamp-2">{item.description}</p>
                  )}

                  {item.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-surface text-slate-500 px-2 py-1 rounded-md text-xs flex items-center gap-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.status === "locked" ? (
                    <div className="mt-auto pt-4 border-t border-slate-200/50">
                      <button className="w-full bg-slate-200 text-slate-500 py-2.5 rounded-lg text-sm font-semibold cursor-not-allowed flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-sm">lock</span>
                        Terkunci
                      </button>
                    </div>
                  ) : (
                    <div className="mt-auto pt-4">
                      <div className="flex justify-between items-center mb-1 text-xs">
                        <span className="font-medium text-slate-500">Progress</span>
                        <span
                          className={`font-bold ${
                            item.status === "active" ? "text-primary" : "text-accent"
                          }`}
                        >
                          {item.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2.5 mb-4 overflow-hidden">
                        <div
                          className={`h-2.5 rounded-full ${
                            item.status === "active" ? "bg-primary" : "bg-accent"
                          }`}
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                      <button className="w-full bg-primary text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors shadow-sm active:scale-95">
                        {item.status === "active" ? "Lanjut Belajar" : "Mulai Belajar"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
