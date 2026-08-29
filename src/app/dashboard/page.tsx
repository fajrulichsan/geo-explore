import Link from "next/link";
import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { getSessionUserId } from "@/lib/session";
import { getMateriProgress, isMateriUnlocked } from "@/lib/progress";
import { getPetaStructure, getTotalStepsInStructure, TOTAL_MATERI } from "@/lib/learningStructure";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import QrToolCard from "@/app/dashboard/_components/QrToolCard";
import { getPageImages, type PageImageKey } from "@/lib/pageImages";
import { getAllMateriMeta } from "@/lib/materiMeta";

export default async function DashboardPage() {
  const userId = await getSessionUserId();
  if (!userId) redirect("/login");

  const [images, { data: user }, allMateriMeta] = await Promise.all([
    getPageImages(),
    supabase.from("users").select("nama_lengkap").eq("id", userId).maybeSingle(),
    getAllMateriMeta(),
  ]);

  const quickTools = [
    {
      icon: "3d_rotation",
      title: "GeoGebra 3D",
      description: "Simulator ruang",
      qrImage: images["qr-geogebra"],
      webHref: "/geogebra",
    },
    {
      icon: "view_in_ar",
      title: "AR Viewer",
      description: "Lihat di dunia nyata",
      qrImage: images["qr-ar"],
      webHref: "https://ar.geo-explore.my.id",
    },
  ];

  const structure = getPetaStructure();
  const totalStepsPerMateri = getTotalStepsInStructure(structure);

  const materiNumbers = Array.from({ length: TOTAL_MATERI }, (_, i) => String(i + 1));
  const learningPath = await Promise.all(
    materiNumbers.map(async (materi) => {
      const [rows, unlocked] = await Promise.all([
        getMateriProgress(userId, materi),
        isMateriUnlocked(userId, materi),
      ]);
      const done = rows.filter((r) => r.status === "selesai").length;
      const progress = totalStepsPerMateri ? Math.round((done / totalStepsPerMateri) * 100) : 0;
      const meta = allMateriMeta[materi] ?? { title: `Materi ${materi}`, description: "" };
      return {
        materi,
        title: meta.title,
        description: meta.description,
        progress,
        status: !unlocked ? ("locked" as const) : progress >= 100 ? ("available" as const) : ("active" as const),
        cover: images[`materi-${materi}-cover` as PageImageKey],
      };
    })
  );

  const activeItem = learningPath.find((item) => item.status === "active");
  const firstName = (user?.nama_lengkap ?? "Siswa").split(" ")[0];

  return (
    <div className="bg-surface text-slate-900 min-h-screen antialiased relative overflow-x-hidden flex flex-col">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-light rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        <div className="absolute top-40 -left-20 w-72 h-72 bg-accent-light rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      </div>

      <Navbar userName={user?.nama_lengkap ?? "Siswa"} />

      <main className="relative z-10 flex-1 max-w-6xl mx-auto w-full flex flex-col gap-8 px-4 py-6">
        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden shadow-[0_8px_30px_rgba(0,51,138,0.12)] flex flex-col justify-center min-h-[260px] sm:min-h-[300px]">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 h-full">
            <div className="flex-1 z-10">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-4 backdrop-blur-sm">
                Modul Geometri Interaktif
              </span>
              <h1 className="text-xl sm:text-3xl md:text-5xl font-extrabold mb-2 text-white leading-tight">
                Selamat Datang, {firstName}!
              </h1>
              <p className="text-sm sm:text-lg mb-6 sm:mb-8 text-white/90 max-w-md">
                Siap untuk menjelajahi dunia 3D? Yuk lanjutkan perjalanan belajarmu.
              </p>
              {activeItem && (
                <Link
                  href={`/peta-belajar/${activeItem.materi}`}
                  className="inline-flex bg-white text-primary px-6 py-3 rounded-lg text-sm font-semibold shadow-sm hover:scale-105 hover:shadow-md transition-all duration-200 items-center gap-2"
                >
                  Lanjutkan {activeItem.title}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              )}
            </div>
          </div>
        </div>

        <section className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">handyman</span>
            Alat Cepat
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {quickTools.map((tool) => (
              <QrToolCard key={tool.title} {...tool} />
            ))}
            <Link
              href="/petunjuk-1"
              className="bg-white rounded-xl p-5 border border-slate-200/60 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-lg bg-surface text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">help_outline</span>
              </div>
              <div>
                <h4 className="text-sm font-semibold">Petunjuk</h4>
                <p className="text-xs text-slate-500 mt-1">Panduan penggunaan modul</p>
              </div>
              <span className="material-symbols-outlined ml-auto text-slate-300 group-hover:text-primary transition-colors">
                chevron_right
              </span>
            </Link>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">route</span>
              Peta Belajar
            </h3>
            <Link href={`/peta-belajar/${activeItem?.materi ?? "1"}`} className="text-xs text-primary hover:underline">
              Lihat Semua
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningPath.map((item) => {
              const cardClassName = `rounded-2xl border overflow-hidden flex flex-col relative ${
                item.status === "locked"
                  ? "bg-slate-100 border-slate-300 shadow-sm"
                  : item.status === "active"
                  ? "bg-white border-primary/30 shadow-card"
                  : "bg-white border-slate-200/60 shadow-sm"
              }`;
              const cardContent = (
                <>
                {item.status === "locked" && (
                  <div className="absolute top-4 right-4 bg-slate-200 text-slate-500 px-2 py-1 rounded text-xs font-bold z-10 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">lock</span>
                    Terkunci
                  </div>
                )}
                {item.status === "available" && (
                  <div className="absolute top-4 right-4 bg-accent-light/40 text-accent px-2 py-1 rounded text-xs font-bold z-10 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    Selesai
                  </div>
                )}
                {item.status === "active" && (
                  <div className="absolute top-4 right-4 bg-primary-light/20 text-primary px-2 py-1 rounded text-xs font-bold z-10 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">play_circle</span>
                    Sedang Belajar
                  </div>
                )}

                <div className={`h-32 relative overflow-hidden flex items-center justify-center ${item.status === "locked" ? "bg-slate-200" : "bg-surface"}`}>
                  {item.status === "locked" ? (
                    <span className="material-symbols-outlined text-4xl text-slate-500">lock</span>
                  ) : (
                    <img src={item.cover} alt={item.title} className="w-full h-full object-cover" />
                  )}
                </div>

                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  <h4
                    className={`text-base sm:text-lg font-semibold mb-2 ${
                      item.status === "locked" ? "text-slate-500" : "text-slate-900"
                    }`}
                  >
                    {item.title}
                  </h4>

                  {item.description && (
                    <p className="text-xs sm:text-sm text-slate-500 mb-4 line-clamp-2">{item.description}</p>
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
                      <div className="w-full bg-primary text-white py-2.5 rounded-lg text-sm font-semibold text-center">
                        {item.status === "active" ? "Lanjut Belajar" : "Lihat Materi"}
                      </div>
                    </div>
                  )}
                </div>
                </>
              );
              return item.status === "locked" ? (
                <div key={item.materi} className={cardClassName}>
                  {cardContent}
                </div>
              ) : (
                <Link key={item.materi} href={`/peta-belajar/${item.materi}`} className={cardClassName}>
                  {cardContent}
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
