import Link from "next/link";
import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { getSessionUserId } from "@/lib/session";
import { getMateriProgress } from "@/lib/progress";
import { getMateriMeta } from "@/lib/materiMeta";
import { getPetaOrder, getPetaStructure, getTotalStepsInStructure } from "@/lib/learningStructure";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";

const MATERI = "1";

const PETA_INFO: Record<string, { icon: string; title: string; desc: string }> = {
  "1": { icon: "menu_book", title: "Pendahuluan", desc: "Mengenal tujuan dan konteks pembelajaran sebelum memulai." },
  "2": { icon: "search", title: "Ayo Mengamati", desc: "Mengamati permasalahan atau fenomena yang diberikan." },
  "3": { icon: "forum", title: "Ayo Berdiskusi", desc: "Berdiskusi dan bertukar ide untuk memahami permasalahan." },
  "4": { icon: "explore", title: "Ayo Bereksplorasi", desc: "Mengeksplorasi konsep melalui aktivitas dan percobaan." },
  "5": { icon: "table_chart", title: "Ayo Mengolah Informasi", desc: "Mengolah informasi dan menemukan pola atau konsep." },
  "6": { icon: "fact_check", title: "Ayo Memverifikasi", desc: "Memeriksa dan menguji kebenaran hasil yang diperoleh." },
  "7": { icon: "lightbulb", title: "Ayo Menyimpulkan", desc: "Merumuskan kesimpulan berdasarkan hasil pembelajaran." },
  "8": { icon: "psychology", title: "Refleksi Diri", desc: "Merefleksikan pemahaman dan pengalaman belajar." },
  "9": { icon: "category", title: "Tantangan Open-Ended", desc: "Menyelesaikan permasalahan terbuka dengan berbagai kemungkinan strategi dan jawaban." },
  "10": { icon: "workspaces", title: "Rangkuman", desc: "Merangkum konsep dan hal penting yang telah dipelajari." },
};

export default async function PetaBelajarPage() {
  const userId = await getSessionUserId();
  if (!userId) redirect("/login");

  const [rows, materiMeta, { data: user }] = await Promise.all([
    getMateriProgress(userId, MATERI),
    getMateriMeta(MATERI),
    supabase.from("users").select("nama_lengkap").eq("id", userId).maybeSingle(),
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
    <div className="bg-[#f7f9fb] min-h-screen relative flex flex-col" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>
      <div
        className="fixed inset-0 pointer-events-none -z-10"
        style={{
          backgroundImage: "radial-gradient(#c3c6d6 2px, transparent 2px)",
          backgroundSize: "32px 32px",
        }}
      />

      <Navbar userName={user?.nama_lengkap ?? "Siswa"} />

      <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 pt-4">
        <Link
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#434653] hover:text-[#00338a] transition-colors"
          href="/dashboard"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Kembali
        </Link>
        <h1 className="text-xl sm:text-2xl font-extrabold text-[#00338a] mt-2">Peta Alur Belajar</h1>
      </div>

      <main className="flex-1 max-w-[1200px] mx-auto w-full px-4 sm:px-6 py-6 sm:py-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-lg p-5 sm:p-6 md:p-8 mb-8 border-2 border-[#dbe1ff] flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#b3c5ff] rounded-full opacity-20 blur-2xl" />
          <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-[#fabd00] rounded-full opacity-20 blur-2xl" />
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-[#00338a] mb-2">
              {materiMeta.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#434653] font-bold bg-[#dbe1ff] inline-block px-3 py-1 rounded-full text-[#00338a]">
              {materiMeta.description || "Discovery Learning"}
            </p>
          </div>
          <div className="w-full md:w-1/3 bg-[#f7f9fb] p-4 sm:p-5 rounded-2xl border border-[#c3c6d6]/50 shadow-inner relative z-10">
            <div className="flex justify-between mb-3">
              <span className="text-xs text-[#434653] font-bold uppercase tracking-wider">Progres Keseluruhan</span>
              <span className="text-lg sm:text-xl text-[#00338a] font-extrabold">{percent}%</span>
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
                  {!alignRight && <div className="hidden md:block w-1/2" />}
                  <div className="absolute left-6 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-[#e6f4ea] to-[#ceead6] rounded-full border-4 border-white flex items-center justify-center text-[#137333] shadow-lg">
                    <span className="material-symbols-outlined text-[28px]">{card.info.icon}</span>
                  </div>
                  <div className={`w-full md:w-1/2 pl-14 sm:pl-16 md:pl-0 ${alignRight ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <Link href={`/belajar/${MATERI}/${card.peta}/1`} className="block">
                      <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-4 sm:p-6 border border-[#c3c6d6]/30 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,51,138,0.1)] transition-all duration-300">
                        <div className={`flex flex-col mb-3 ${alignRight ? "md:items-end" : "items-start"}`}>
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#e6f4ea] text-[#137333] text-xs sm:text-sm mb-3 font-bold border border-[#137333]/20 shadow-sm">
                            <span className="material-symbols-outlined text-[16px] sm:text-[18px]">check_circle</span>
                            {card.doneInPeta}/{card.total} · Selesai
                          </span>
                          <h3 className="text-base sm:text-xl font-bold text-[#191c1e]">
                            {card.peta}. {card.info.title}
                          </h3>
                        </div>
                        <p className={`text-sm sm:text-base text-[#434653] leading-relaxed ${alignRight ? "text-left md:text-right" : ""}`}>
                          {card.info.desc}
                        </p>
                      </div>
                    </Link>
                  </div>
                  {alignRight && <div className="hidden md:block w-1/2" />}
                </div>
              );
            }

            if (card.active) {
              return (
                <div
                  key={card.peta}
                  className={`relative z-10 flex flex-col md:flex-row items-center w-full mb-8 group ${alignRight ? "md:justify-end" : "md:justify-start"}`}
                >
                  {!alignRight && <div className="hidden md:block w-1/2" />}
                  <div className={`w-full md:w-1/2 pl-14 sm:pl-16 md:pl-0 ${alignRight ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-white rounded-3xl shadow-[0_12px_40px_rgba(0,51,138,0.15)] p-4 sm:p-6 border-4 border-[#00338a] relative overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#b3c5ff] rounded-full opacity-30 blur-2xl -z-10" />
                      <div className={`flex flex-col mb-3 ${alignRight ? "md:items-end" : "items-start"}`}>
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#fdc003] text-[#6c5000] text-xs sm:text-sm mb-3 font-extrabold border border-[#6c5000]/20 shadow-md animate-pulse">
                          <span className="material-symbols-outlined text-[16px] sm:text-[18px]">play_circle</span>
                          {card.doneInPeta}/{card.total} · Sedang Berjalan
                        </span>
                        <h3 className="text-base sm:text-xl font-extrabold text-[#00338a]">
                          {card.peta}. {card.info.title}
                        </h3>
                      </div>
                      <p className={`text-sm sm:text-base text-[#434653] mb-6 leading-relaxed font-semibold text-left ${alignRight ? "md:text-right" : ""}`}>
                        {card.info.desc}
                      </p>
                      <div className={`flex justify-start ${alignRight ? "md:justify-end" : ""}`}>
                        <Link
                          href={`/belajar/${MATERI}/${card.peta}/${card.firstUnfinishedStep}`}
                          className="bg-gradient-to-r from-[#00338a] to-[#0048ba] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-xs sm:text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 font-extrabold uppercase tracking-wide"
                        >
                          Lanjut Mengerjakan <span className="material-symbols-outlined text-[20px] sm:text-[24px]">arrow_forward</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute left-6 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-[#fdc003] to-[#ffdf9e] rounded-full border-4 border-white flex items-center justify-center text-[#6c5000] shadow-[0_0_20px_rgba(253,192,3,0.5)] z-20 animate-bounce"
                    style={{ animationDuration: "2s" }}
                  >
                    <span className="material-symbols-outlined text-[32px]">{card.info.icon}</span>
                  </div>
                  {alignRight && <div className="hidden md:block w-1/2" />}
                </div>
              );
            }

            return (
              <div
                key={card.peta}
                className={`relative z-10 flex flex-col md:flex-row items-center w-full mb-8 opacity-70 hover:opacity-100 transition-opacity ${alignRight ? "md:justify-end" : "md:justify-start"}`}
              >
                {!alignRight && <div className="hidden md:block w-1/2" />}
                <div className="absolute left-6 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#e0e3e5] rounded-full border-4 border-white flex items-center justify-center text-[#737685] shadow-inner">
                  <span className="material-symbols-outlined">lock</span>
                </div>
                <div className={`w-full md:w-1/2 pl-14 sm:pl-16 md:pl-0 ${alignRight ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-[#eceef0] rounded-3xl p-4 sm:p-6 border-2 border-dashed border-[#c3c6d6]/50">
                    <div className={`flex flex-col mb-3 ${alignRight ? "md:items-end" : "items-start"}`}>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#e0e3e5] text-[#737685] text-xs sm:text-sm mb-3 font-bold">
                        <span className="material-symbols-outlined text-[16px] sm:text-[18px]">lock</span>
                        0/{card.total} · Terkunci
                      </span>
                      <h3 className="text-base sm:text-xl font-bold text-[#737685]">
                        {card.peta}. {card.info.title}
                      </h3>
                    </div>
                    <p className={`text-sm sm:text-base text-[#737685]/80 leading-relaxed font-medium ${alignRight ? "text-left md:text-right" : ""}`}>
                      {card.info.desc}
                    </p>
                  </div>
                </div>
                {alignRight && <div className="hidden md:block w-1/2" />}
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
