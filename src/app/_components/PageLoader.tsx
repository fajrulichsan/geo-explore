export default function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-primary-light/30 border-t-primary animate-spin" />
        <p className="text-sm font-medium text-slate-500">Memuat…</p>
      </div>
    </div>
  );
}
