import Link from "next/link";

export default function KataPengantarPage() {
  return (
    <div
      className="min-h-screen text-[#191c1e] antialiased overflow-x-hidden relative flex flex-col"
      style={{
        backgroundColor: "#f7f9fb",
        backgroundImage: "radial-gradient(#dbe1ff 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-[#00338a]/10 rounded-full blur-[80px] animate-pulse" />
        <div className="absolute bottom-[15%] right-[5%] w-80 h-80 bg-[#fdc003]/10 rounded-full blur-[100px]" />
        <div
          className="absolute top-[40%] right-[10%] w-48 h-48 bg-[#0048ba]/10 rounded-full blur-[60px] animate-bounce"
          style={{ animationDuration: "8s" }}
        />
        <div className="absolute top-20 left-[15%] opacity-20 rotate-12">
          <span className="material-symbols-outlined text-[80px] text-[#00338a]">deployed_code</span>
        </div>
        <div className="absolute bottom-40 left-[10%] opacity-10 -rotate-12">
          <span className="material-symbols-outlined text-[120px] text-[#785900]">category</span>
        </div>
        <div className="absolute top-1/4 right-[15%] opacity-15 rotate-45">
          <span className="material-symbols-outlined text-[60px] text-[#0048ba]">pentagon</span>
        </div>
        <div className="absolute bottom-20 right-[20%] opacity-20 -rotate-6">
          <span className="material-symbols-outlined text-[100px] text-[#00338a]">polyline</span>
        </div>
      </div>

      <nav className="bg-[#f7f9fb]/80 backdrop-blur-md border-b border-[#c3c6d6] shadow-sm sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-[1200px] mx-auto">
          <div className="font-extrabold text-2xl text-[#00338a] flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              extension
            </span>
            E-Module Geometri
          </div>
          <div className="hidden md:flex gap-8 items-center text-sm font-semibold">
            <a className="text-[#00338a] font-bold border-b-2 border-[#00338a] pb-1" href="#">
              Modul
            </a>
            <a className="text-[#434653] hover:text-[#00338a] transition-colors px-3 py-2 rounded-lg" href="#">
              Aktivitas
            </a>
            <a className="text-[#434653] hover:text-[#00338a] transition-colors px-3 py-2 rounded-lg" href="#">
              Progres
            </a>
            <a className="text-[#434653] hover:text-[#00338a] transition-colors px-3 py-2 rounded-lg" href="#">
              Bantuan
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-grow w-full max-w-[1200px] mx-auto px-6 py-8 lg:py-16 flex flex-col md:flex-row gap-8 lg:gap-12 items-stretch relative z-10">
        <div className="w-full md:w-5/12 lg:w-1/2 flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-[500px]">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#ffdf9e] rounded-full opacity-50 mix-blend-multiply blur-xl animate-pulse" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#dbe1ff] rounded-full opacity-60 mix-blend-multiply blur-xl" />
            <div className="bg-white/95 backdrop-blur-[10px] border border-white/20 shadow-[0_10px_30px_-10px_rgba(0,51,138,0.08)] w-full h-full rounded-2xl overflow-hidden relative z-10 border-4 border-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[160px] text-[#00338a] opacity-30">
                school
              </span>
            </div>
            <div
              className="absolute bottom-12 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-[#dbe1ff] z-20 flex items-center gap-3 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <div className="w-10 h-10 rounded-full bg-[#dbe1ff] flex items-center justify-center text-[#00338a]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  architecture
                </span>
              </div>
              <div>
                <p className="text-xs text-[#434653] uppercase tracking-wider">E-Module</p>
                <p className="text-sm text-[#191c1e] font-semibold">Discovery Learning</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col justify-center">
          <div className="bg-white/95 backdrop-blur-[10px] border border-white/20 shadow-[0_10px_30px_-10px_rgba(0,51,138,0.08)] p-8 lg:p-12 rounded-[32px] h-full flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-[120px] pointer-events-none">
              <span className="material-symbols-outlined text-[120px]">format_quote</span>
            </div>
            <div className="mb-8 border-b border-[#e6e8ea] pb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-[#ffdf9e] text-[#261a00] text-xs font-semibold rounded-full tracking-wide">
                  PENGANTAR
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#00338a] mb-2 tracking-tight">
                Kata Pengantar
              </h1>
              <p className="text-[#434653]">Modul Pembelajaran Geometri Berbasis Discovery Learning</p>
            </div>

            <div className="text-[#191c1e] leading-relaxed flex-grow overflow-y-auto pr-4">
              <p className="mb-4">
                Puji syukur kehadirat Tuhan Yang Maha Esa atas segala rahmat dan karunia-Nya sehingga
                E-Module Geometri berbasis <em>Discovery Learning</em> ini dapat diselesaikan dengan
                baik.
              </p>
              <p className="mb-4">
                E-module ini dikembangkan secara khusus untuk memfasilitasi siswa dalam mempelajari
                materi Bangun Ruang Sisi Datar (Kubus, Balok, Prisma, dan Limas). Dengan menggunakan
                pendekatan <em>Discovery Learning</em>, e-module ini dirancang tidak hanya untuk
                menyajikan informasi, tetapi juga untuk membimbing siswa menemukan konsep-konsep
                geometri secara mandiri melalui serangkaian aktivitas yang terstruktur dan interaktif.
              </p>
              <p className="mb-4">
                Di dalam e-module ini, siswa akan diajak untuk mengamati, menanya, mengumpulkan data,
                mengasosiasi, dan mengkomunikasikan hasil penemuan mereka. Harapannya, pendekatan ini
                dapat meningkatkan kemampuan pemahaman konsep matematis, berpikir kritis, serta
                kemandirian belajar siswa.
              </p>
              <p className="mb-6">
                Kami menyadari bahwa e-module ini masih jauh dari kata sempurna. Oleh karena itu,
                kritik dan saran yang membangun sangat kami harapkan untuk perbaikan di masa
                mendatang. Akhir kata, semoga e-module ini dapat memberikan manfaat yang nyata dan
                pengalaman belajar yang menyenangkan bagi siswa sekalian. Selamat belajar dan
                bereksplorasi!
              </p>
              <div className="text-right mt-8">
                <p className="text-[#434653]">Penyusun,</p>
                <p className="text-sm font-semibold text-[#00338a] mt-1">Tim Pengembang E-Module</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#e6e8ea] flex justify-end">
              <Link
                href="/daftar-isi"
                className="bg-[#00338a] hover:bg-[#003fa5] text-white text-sm font-semibold px-8 py-4 rounded-xl shadow-lg shadow-[#00338a]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-[#00338a]/40 flex items-center gap-3 group"
              >
                Lanjutkan ke Daftar Isi
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
