import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { requireGuru } from "@/lib/auth";

function isImageUrl(value: unknown): value is string {
  return typeof value === "string" && /^https?:\/\//.test(value) && (/\.(png|jpe?g|gif|webp)(\?|$)/i.test(value) || value.includes("/uploads/"));
}

export default async function DashboardGuruDetailPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  await requireGuru();
  const { userId } = await params;

  const [{ data: siswa }, { data: rows }] = await Promise.all([
    supabase.from("users").select("nama_lengkap, kelas, nama_sekolah, email").eq("id", userId).maybeSingle(),
    supabase
      .from("user_step_progress")
      .select("materi, peta, step, status, answers, completed_at")
      .eq("user_id", userId),
  ]);

  const sorted = [...(rows ?? [])].sort((a, b) => {
    if (a.materi !== b.materi) return Number(a.materi) - Number(b.materi);
    if (a.peta !== b.peta) return Number(a.peta) - Number(b.peta);
    return Number(a.step) - Number(b.step);
  });

  return (
    <div className="min-h-screen bg-[#f7f9fb]" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>
      <nav className="bg-white border-b border-[#c3c6d6] sticky top-0 z-10">
        <div className="max-w-[900px] mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/dashboard-guru" className="text-[#434653] hover:text-[#00338a]">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <div>
            <h1 className="text-lg font-extrabold text-[#00338a]">{siswa?.nama_lengkap ?? "Siswa"}</h1>
            <p className="text-xs text-[#737685]">
              {siswa?.kelas} · {siswa?.nama_sekolah} · {siswa?.email}
            </p>
          </div>
        </div>
      </nav>

      <main className="max-w-[900px] mx-auto px-6 py-8 flex flex-col gap-4">
        {sorted.length === 0 && (
          <p className="text-sm text-[#737685] text-center py-12">Belum ada jawaban yang tersimpan.</p>
        )}

        {sorted.map((row) => (
          <div key={`${row.materi}-${row.peta}-${row.step}`} className="bg-white rounded-2xl border border-[#e0e3e5] p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#00338a] bg-[#dbe1ff] px-3 py-1 rounded-full">
                Materi {row.materi} · Peta {row.peta} · Langkah {row.step}
              </span>
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full ${
                  row.status === "selesai" ? "bg-[#e6f4ea] text-[#137333]" : "bg-[#e0e3e5] text-[#737685]"
                }`}
              >
                {row.status === "selesai" ? "Selesai" : "Belum"}
              </span>
            </div>

            <dl className="flex flex-col gap-3">
              {Object.entries(row.answers ?? {}).map(([field, value]) => (
                <div key={field}>
                  <dt className="text-xs font-bold text-[#737685] uppercase mb-1">{field.replace(/_/g, " ")}</dt>
                  <dd className="text-sm text-[#191c1e]">
                    {isImageUrl(value) ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={value} alt={field} className="max-w-xs rounded-xl border border-[#e0e3e5]" />
                    ) : (
                      String(value)
                    )}
                  </dd>
                </div>
              ))}
              {Object.keys(row.answers ?? {}).length === 0 && (
                <span className="text-sm text-[#737685]">Tidak ada isian.</span>
              )}
            </dl>
          </div>
        ))}
      </main>
    </div>
  );
}
