import Link from "next/link";
import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { getSessionUserId } from "@/lib/session";
import { getMateriProgress } from "@/lib/progress";
import { getPetaOrder, getPetaStructure, getTotalStepsInStructure } from "@/lib/learningStructure";

const MATERI = "1";

const PETA_INFO: Record<string, { icon: string; title: string; desc: string }> = {
  "1": { icon: "menu_book", title: "Pendahuluan & Pengamatan", desc: "Amati fenomena, gambar, atau video pembuka dan siapkan diri untuk berdiskusi." },
  "2": { icon: "forum", title: "Diskusi & Rumusan Masalah", desc: "Sampaikan dugaan bersama kelompok lalu rumuskan masalah yang akan diselidiki." },
  "3": { icon: "explore", title: "Eksplorasi GeoGebra & AR", desc: "Lakukan eksplorasi bangun ruang lewat GeoGebra 3D dan Augmented Reality." },
  "4": { icon: "table_chart", title: "Mengolah Data", desc: "Organisasikan data hasil eksplorasi dan temukan pola-pola yang muncul." },
  "5": { icon: "fact_check", title: "Verifikasi", desc: "Periksa kembali dugaan, strategi, dan hasil yang kamu peroleh." },
  "6": { icon: "lightbulb", title: "Kesimpulan & Generalisasi", desc: "Tarik kesimpulan berdasarkan hasil penyelidikan dan berikan alasan pendukung." },
  "7": { icon: "psychology", title: "Refleksi", desc: "Refleksikan pemahaman dan pengalaman belajarmu." },
  "8": { icon: "category", title: "Strategi Klasifikasi", desc: "Bandingkan strategi pengelompokan bangun ruang dan pilih yang paling tepat." },
  "9": { icon: "workspaces", title: "Klasifikasi Bangun Ruang", desc: "Terapkan dasar klasifikasi untuk mengelompokkan berbagai bangun ruang." },
};

export default async function PetaBelajarPage() {
  const userId = await getSessionUserId();
  if (!userId) redirect("/login");

  const [rows, { data: materiMeta }] = await Promise.all([
    getMateriProgress(userId, MATERI),
    supabase.from("materi_meta").select("judul, deskripsi").eq("materi", MATERI).maybeSingle(),
  ]);

  const structure = getPetaStructure();
  const petaOrder = getPetaOrder(structure);
  const done = new Set(rows.filter((r) => r.status === "selesai").map((r) => `${r.peta}-${r.step}`));

  const totalAll = getTotalStepsInStructure(structure);
  const doneAll = rows.filter((r) => r.status === "selesai").length;
  const percent = totalAll ? Math.round((doneAll / totalAll) * 100) : 0;

  const completions = petaOrder.map((peta) => {
    const total = structure[peta];
    const doneInPeta = Array.from({ length: total }, (_, i) => i + 1).filter((s) => done.has(`${peta}-${s}`)).length;
    return { peta, total, doneInPeta, complete: doneInPeta === total };
  });

  const cards = completions.map((c, i) => {
    const { peta, total, doneInPeta, complete } = c;
    const unlocked = completions.slice(0, i).every((prev) => prev.complete);
    const firstUnfinishedStep = Array.from({ length: total }, (_, i2) => i2 + 1).find((s) => !done.has(`${peta}-${s}`)) ?? 1;
    return {
      peta,
      total,
      doneInPeta,
      complete,
      unlocked,
      active: unlocked && !complete,
      firstUnfinishedStep,
      info: PETA_INFO[peta] ?? { icon: "map", title: `Peta ${peta}`, desc: "" },
    };
  });

  return (
    <div className="bg-[#f7f9fb] min-h-screen pb-16 relative" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>
      <div
        className="fixed inset-0 pointer-events-none -z-10"
        style={{
          backgroundImage: "radial-gradient(#c3c6d6 2px, transparent 2px)",
          backgroundSize: "32px 32px",
        }}
      />

      <nav className="bg-[#f7f9fb]/90 backdrop-blur-md border-b border-[#c3c6d6] shadow-sm sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-[1200px] mx-auto">
          <div className="flex items-center gap-4">
            <Link
              className="text-[#434653] hover:text-[#00338a] transition-colors flex items-center justify-center p-2 rounded-full hover:bg-[#eceef0]"
              href="/dashboard"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <h1 className="text-2xl font-extrabold text-[#00338a]">Peta Alur Belajar</h1>
          </div>
          <div className="hidden md:flex gap-6 items-center text-sm font-semibold">
            <a className="text-[#434653] hover:text-[#00338a] transition-colors" href="#">Modul</a>
            <a className="text-[#00338a] font-bold border-b-2 border-[#00338a] pb-1" href="#">Aktivitas</a>
            <a className="text-[#434653] hover:text-[#00338a] transition-colors" href="#">Progres</a>
            <a className="text-[#434653] hover:text-[#00338a] transition-colors" href="#">Bantuan</a>
          </div>
        </div>
      </nav>

      <main className="max-w-[1200px] mx-auto px-6 py-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 mb-8 border-2 border-[#dbe1ff] flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#b3c5ff] rounded-full opacity-20 blur-2xl" />
          <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-[#fabd00] rounded-full opacity-20 blur-2xl" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-[32px] font-bold text-[#00338a] mb-2">
              {materiMeta?.judul ?? "Materi"}
            </h2>
            <p className="text-sm text-[#434653] font-bold bg-[#dbe1ff] inline-block px-3 py-1 rounded-full text-[#00338a]">
              {materiMeta?.deskripsi ?? "Discovery Learning"}
            </p>
          </div>
          <div className="w-full md:w-1/3 bg-[#f7f9fb] p-5 rounded-2xl border border-[#c3c6d6]/50 shadow-inner relative z-10">
            <div className="flex justify-between mb-3">
              <span className="text-xs text-[#434653] font-bold uppercase tracking-wider">Progres Keseluruhan</span>
              <span className="text-xl text-[#00338a] font-extrabold">{percent}%</span>
            </div>
            <div className="w-full bg-[#e0e3e5] rounded-full h-4 mb-3 overflow-hidden shadow-inner">
              <div className="bg-gradient-to-r from-[#00338a] to-[#0048ba] h-4 rounded-full" style={{ width: `${percent}%` }} />
            </div>
            <p className="text-xs text-[#434653] text-center font-bold">
              {doneAll} dari {totalAll} langkah selesai
            </p>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto py-6">
          <div
            className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-6 bottom-0 w-1.5 rounded-full opacity-80"
            style={{ background: "linear-gradient(to bottom, #00338a 0%, #0048ba 50%, #dbe1ff 100%)" }}
          />

          {cards.map((card, i) => {
            const alignRight = i % 2 === 0;

            if (card.complete) {
              return (
                <div
                  key={card.peta}
                  className={`relative z-10 flex flex-col md:flex-row items-center w-full mb-8 ${alignRight ? "md:justify-end" : "md:justify-start"}`}
                >
                  {!alignRight && <div className="hidden md:block w-5/12" />}
                  <div className="absolute left-0 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-[#e6f4ea] to-[#ceead6] rounded-full border-4 border-white flex items-center justify-center text-[#137333] shadow-lg">
                    <span className="material-symbols-outlined text-[28px]">{card.info.icon}</span>
                  </div>
                  <div className={`w-full md:w-5/12 pl-16 md:pl-0 ${alignRight ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <Link href={`/belajar/${MATERI}/${card.peta}/1`} className="block">
                      <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-6 border border-[#c3c6d6]/30 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,51,138,0.1)] transition-all duration-300">
                        <div className={`flex flex-col mb-3 ${alignRight ? "md:items-end" : "items-start"}`}>
                          <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#e6f4ea] text-[#137333] text-sm mb-3 font-bold border border-[#137333]/20 shadow-sm">
                            <span className="material-symbols-outlined text-[18px]">check_circle</span>
                            {card.doneInPeta}/{card.total} · Selesai
                          </span>
                          <h3 className="text-xl font-bold text-[#191c1e]">
                            {card.peta}. {card.info.title}
                          </h3>
                        </div>
                        <p className={`text-[#434653] leading-relaxed ${alignRight ? "text-left md:text-right" : ""}`}>
                          {card.info.desc}
                        </p>
                      </div>
                    </Link>
                  </div>
                  {alignRight && <div className="hidden md:block w-5/12" />}
                </div>
              );
            }

            if (card.active) {
              return (
                <div key={card.peta} className="relative z-10 flex flex-col md:flex-row items-center md:justify-end w-full mb-8 group">
                  <div className="w-full md:w-5/12 pl-16 md:pl-0 md:pr-12 md:text-right">
                    <div className="bg-white rounded-3xl shadow-[0_12px_40px_rgba(0,51,138,0.15)] p-6 border-4 border-[#00338a] relative overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#b3c5ff] rounded-full opacity-30 blur-2xl -z-10" />
                      <div className="flex flex-col md:items-end mb-3">
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#fdc003] text-[#6c5000] text-sm mb-3 font-extrabold border border-[#6c5000]/20 shadow-md animate-pulse">
                          <span className="material-symbols-outlined text-[18px]">play_circle</span>
                          {card.doneInPeta}/{card.total} · Sedang Berjalan
                        </span>
                        <h3 className="text-xl font-extrabold text-[#00338a]">
                          {card.peta}. {card.info.title}
                        </h3>
                      </div>
                      <p className="text-[#434653] mb-6 text-left md:text-right leading-relaxed font-semibold">
                        {card.info.desc}
                      </p>
                      <div className="flex justify-start md:justify-end">
                        <Link
                          href={`/belajar/${MATERI}/${card.peta}/${card.firstUnfinishedStep}`}
                          className="bg-gradient-to-r from-[#00338a] to-[#0048ba] text-white px-8 py-4 rounded-2xl text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 font-extrabold uppercase tracking-wide"
                        >
                          Lanjut Mengerjakan <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute left-0 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-[#fdc003] to-[#ffdf9e] rounded-full border-4 border-white flex items-center justify-center text-[#6c5000] shadow-[0_0_20px_rgba(253,192,3,0.5)] z-20 animate-bounce"
                    style={{ animationDuration: "2s" }}
                  >
                    <span className="material-symbols-outlined text-[32px]">{card.info.icon}</span>
                  </div>
                  <div className="hidden md:block w-5/12" />
                </div>
              );
            }

            return (
              <div
                key={card.peta}
                className={`relative z-10 flex flex-col md:flex-row items-center w-full mb-8 opacity-70 hover:opacity-100 transition-opacity ${alignRight ? "md:justify-end" : "md:justify-start"}`}
              >
                {!alignRight && <div className="hidden md:block w-5/12" />}
                <div className="absolute left-0 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#e0e3e5] rounded-full border-4 border-white flex items-center justify-center text-[#737685] shadow-inner">
                  <span className="material-symbols-outlined">lock</span>
                </div>
                <div className={`w-full md:w-5/12 pl-16 md:pl-0 ${alignRight ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-[#eceef0] rounded-3xl p-6 border-2 border-dashed border-[#c3c6d6]/50">
                    <div className={`flex flex-col mb-3 ${alignRight ? "md:items-end" : "items-start"}`}>
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#e0e3e5] text-[#737685] text-sm mb-3 font-bold">
                        <span className="material-symbols-outlined text-[18px]">lock</span>
                        0/{card.total} · Terkunci
                      </span>
                      <h3 className="text-xl font-bold text-[#737685]">
                        {card.peta}. {card.info.title}
                      </h3>
                    </div>
                    <p className={`text-[#737685]/80 leading-relaxed font-medium ${alignRight ? "text-left md:text-right" : ""}`}>
                      {card.info.desc}
                    </p>
                  </div>
                </div>
                {alignRight && <div className="hidden md:block w-5/12" />}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
