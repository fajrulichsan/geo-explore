export default function PageLoader() {
  return (
    <div className="page-loader-fade-in min-h-screen flex items-center justify-center bg-surface/70 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-sm">
        <div className="w-10 h-10 rounded-full border-4 border-primary-light/30 border-t-primary animate-spin" />
        <p className="text-sm font-medium text-slate-500">Memuat…</p>
      </div>
    </div>
  );
}
