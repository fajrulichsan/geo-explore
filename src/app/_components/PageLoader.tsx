export default function PageLoader() {
  return (
    <div className="page-loader-fade-in fixed inset-0 z-50 flex items-center justify-center bg-white/50">
      <div className="flex flex-col items-center gap-4 bg-white/60 px-8 py-6 rounded-2xl shadow-sm">
        <div className="w-10 h-10 rounded-full border-4 border-primary-light/30 border-t-primary animate-spin" />
        <p className="text-sm font-medium text-slate-500">Memuat…</p>
      </div>
    </div>
  );
}
