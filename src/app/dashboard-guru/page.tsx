import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { requireGuru } from "@/lib/auth";
import { logoutAction } from "@/app/actions";
import { getPetaStructure, getTotalStepsInStructure } from "@/lib/learningStructure";

const MATERI = "1";

export default async function DashboardGuruPage() {
  await requireGuru();

  const [{ data: siswa }, { data: progress }] = await Promise.all([
    supabase
      .from("users")
      .select("id, nama_lengkap, kelas, nama_sekolah")
      .eq("role", "siswa")
      .order("nama_lengkap"),
    supabase.from("user_step_progress").select("user_id, status").eq("materi", MATERI).eq("status", "selesai"),
  ]);

  const totalSteps = getTotalStepsInStructure(getPetaStructure());
  const doneCountByUser = new Map<string, number>();
  for (const row of progress ?? []) {
    doneCountByUser.set(row.user_id, (doneCountByUser.get(row.user_id) ?? 0) + 1);
  }

  return (
    <div className="min-h-screen bg-[#f7f9fb]" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>
      <nav className="bg-white border-b border-[#c3c6d6] sticky top-0 z-10">
        <div className="max-w-[1100px] mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-extrabold text-[#00338a]">Dashboard Guru</h1>
          <form action={logoutAction}>
            <button type="submit" className="text-sm font-semibold text-[#434653] hover:text-[#00338a]">
              Keluar
            </button>
          </form>
        </div>
      </nav>

      <main className="max-w-[1100px] mx-auto px-6 py-8">
        <p className="text-sm text-[#434653] mb-6">
          Menampilkan progres siswa pada Materi {MATERI}. Total {totalSteps} langkah.
        </p>

        <div className="bg-white rounded-2xl border border-[#e0e3e5] overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#f7f9fb] border-b border-[#e0e3e5]">
                <th className="p-4 text-xs font-bold text-[#00338a] uppercase">Nama</th>
                <th className="p-4 text-xs font-bold text-[#00338a] uppercase">Kelas</th>
                <th className="p-4 text-xs font-bold text-[#00338a] uppercase">Sekolah</th>
                <th className="p-4 text-xs font-bold text-[#00338a] uppercase">Progres</th>
                <th className="p-4 text-xs font-bold text-[#00338a] uppercase text-right">Detail</th>
              </tr>
            </thead>
            <tbody>
              {(siswa ?? []).map((s) => {
                const done = doneCountByUser.get(s.id) ?? 0;
                const percent = totalSteps ? Math.round((done / totalSteps) * 100) : 0;
                return (
                  <tr key={s.id} className="border-b border-[#e0e3e5] last:border-0">
                    <td className="p-4 font-semibold text-[#191c1e]">{s.nama_lengkap}</td>
                    <td className="p-4 text-[#434653]">{s.kelas}</td>
                    <td className="p-4 text-[#434653]">{s.nama_sekolah}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-28 bg-[#e0e3e5] rounded-full h-2 overflow-hidden">
                          <div className="bg-[#00338a] h-2 rounded-full" style={{ width: `${percent}%` }} />
                        </div>
                        <span className="text-xs font-bold text-[#434653]">
                          {done}/{totalSteps}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <Link href={`/dashboard-guru/${s.id}`} className="text-sm font-bold text-[#00338a] hover:underline">
                        Lihat
                      </Link>
                    </td>
                  </tr>
                );
              })}
              {(siswa ?? []).length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-sm text-[#737685]">
                    Belum ada siswa terdaftar.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
