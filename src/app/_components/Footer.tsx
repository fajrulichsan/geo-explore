export default function Footer() {
  return (
    <footer className="text-white p-5 md:px-12 mt-auto shadow-[0_-10px_30px_rgba(0,0,0,0.1)] bg-primary-dark">
      <div className="max-w-6xl w-full mx-auto flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm shrink-0">
            <i className="fa-solid fa-graduation-cap text-white" />
          </div>
          <div>
            <p className="text-sm font-bold tracking-widest uppercase text-white/90">
              Untuk Siswa SMP
            </p>
            <p className="text-xs text-white/50 font-medium">Belajar • Eksplorasi • Temukan</p>
          </div>
        </div>
        <div className="text-center sm:text-right">
          <p className="text-xs text-white/50 font-medium uppercase tracking-wider mb-1">
            Universitas Pendidikan Indonesia
          </p>
          <p className="text-sm font-bold text-white/90">2026</p>
        </div>
      </div>
    </footer>
  );
}
