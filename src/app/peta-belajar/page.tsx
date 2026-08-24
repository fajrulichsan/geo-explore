import Link from "next/link";

const doneSteps = [
  { num: 1, icon: "menu_book", title: "Pendahuluan", desc: "Kenali topik, tujuan pembelajaran, dan manfaat materi yang akan kamu pelajari." },
  { num: 2, icon: "visibility", title: "Ayo Mengamati", desc: "Amati fenomena, gambar, video, pertanyaan, atau visualisasi yang disajikan." },
  { num: 3, icon: "forum", title: "Ayo Berdiskusi", desc: "Sampaikan dugaan dan ide bersama kelompokmu, lalu rumuskan masalah." },
  { num: 4, icon: "explore", title: "Ayo Bereksplorasi", desc: "Lakukan eksplorasi untuk mengumpulkan informasi dan data yang diperlukan." },
];

const lockedSteps = [
  { num: 6, icon: "fact_check", title: "Ayo Verifikasi", desc: "Periksa kembali dugaan, strategi, dan hasil yang kamu peroleh." },
  { num: 7, icon: "lightbulb", title: "Ayo Menyimpulkan", desc: "Tarik kesimpulan berdasarkan hasil penyelidikan dan berikan alasan pendukung." },
];

export default function PetaBelajarPage() {
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
            <h2 className="text-3xl md:text-[32px] font-bold text-[#00338a] mb-2">Kubus &amp; Balok</h2>
            <p className="text-sm text-[#434653] font-bold bg-[#dbe1ff] inline-block px-3 py-1 rounded-full text-[#00338a]">
              Discovery Learning • Kegiatan Inti
            </p>
          </div>
          <div className="w-full md:w-1/3 bg-[#f7f9fb] p-5 rounded-2xl border border-[#c3c6d6]/50 shadow-inner relative z-10">
            <div className="flex justify-between mb-3">
              <span className="text-xs text-[#434653] font-bold uppercase tracking-wider">Progres Keseluruhan</span>
              <span className="text-xl text-[#00338a] font-extrabold">45%</span>
            </div>
            <div className="w-full bg-[#e0e3e5] rounded-full h-4 mb-3 overflow-hidden shadow-inner">
              <div className="bg-gradient-to-r from-[#00338a] to-[#0048ba] h-4 rounded-full" style={{ width: "45%" }} />
            </div>
            <p className="text-xs text-[#434653] text-center font-bold">4 dari 10 langkah selesai</p>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto py-6">
          <div
            className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-6 bottom-0 w-1.5 rounded-full opacity-80"
            style={{ background: "linear-gradient(to bottom, #00338a 0%, #0048ba 50%, #dbe1ff 100%)" }}
          />

          {doneSteps.map((step, i) => {
            const alignRight = i % 2 === 0;
            return (
              <div
                key={step.num}
                className={`relative z-10 flex flex-col md:flex-row items-center w-full mb-8 ${
                  alignRight ? "md:justify-end" : "md:justify-start"
                }`}
              >
                {!alignRight && <div className="hidden md:block w-5/12" />}
                <div
                  className={`absolute left-0 md:left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-[#e6f4ea] to-[#ceead6] rounded-full border-4 border-white flex items-center justify-center text-[#137333] shadow-lg ${
                    !alignRight ? "" : ""
                  }`}
                >
                  <span className="material-symbols-outlined text-[28px]">{step.icon}</span>
                </div>
                <div className={`w-full md:w-5/12 pl-16 md:pl-0 ${alignRight ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-6 border border-[#c3c6d6]/30 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,51,138,0.1)] transition-all duration-300">
                    <div className={`flex flex-col mb-3 ${alignRight ? "md:items-end" : "items-start"}`}>
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#e6f4ea] text-[#137333] text-sm mb-3 font-bold border border-[#137333]/20 shadow-sm">
                        <span className="material-symbols-outlined text-[18px]">check_circle</span> Selesai
                      </span>
                      <h3 className="text-xl font-bold text-[#191c1e]">
                        {step.num}. {step.title}
                      </h3>
                    </div>
                    <p className={`text-[#434653] leading-relaxed ${alignRight ? "text-left md:text-right" : ""}`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
                {alignRight && <div className="hidden md:block w-5/12" />}
              </div>
            );
          })}

          {/* Step 5: Active */}
          <div className="relative z-10 flex flex-col md:flex-row items-center md:justify-end w-full mb-8 group">
            <div className="w-full md:w-5/12 pl-16 md:pl-0 md:pr-12 md:text-right">
              <div className="bg-white rounded-3xl shadow-[0_12px_40px_rgba(0,51,138,0.15)] p-6 border-4 border-[#00338a] relative overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#b3c5ff] rounded-full opacity-30 blur-2xl -z-10" />
                <div className="flex flex-col md:items-end mb-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#fdc003] text-[#6c5000] text-sm mb-3 font-extrabold border border-[#6c5000]/20 shadow-md animate-pulse">
                    <span className="material-symbols-outlined text-[18px]">play_circle</span> Sedang Berjalan
                  </span>
                  <h3 className="text-xl font-extrabold text-[#00338a]">5. Ayo Mengolah Informasi</h3>
                </div>
                <p className="text-[#434653] mb-6 text-left md:text-right leading-relaxed font-semibold">
                  Olah dan analisis hasil eksplorasi untuk menemukan pola, hubungan, atau konsep.
                </p>
                <div className="flex justify-start md:justify-end">
                  <button className="bg-gradient-to-r from-[#00338a] to-[#0048ba] text-white px-8 py-4 rounded-2xl text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 font-extrabold uppercase tracking-wide">
                    Lanjut Mengerjakan <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#fdc003] to-[#ffdf9e] rounded-full border-4 border-white flex items-center justify-center text-[#6c5000] shadow-[0_0_20px_rgba(253,192,3,0.5)] z-20 animate-bounce" style={{ animationDuration: "2s" }}>
              <span className="material-symbols-outlined text-[32px]">psychology</span>
            </div>
            <div className="hidden md:block w-5/12" />
          </div>

          {lockedSteps.map((step, i) => {
            const alignRight = i % 2 === 1;
            return (
              <div
                key={step.num}
                className={`relative z-10 flex flex-col md:flex-row items-center w-full mb-8 opacity-70 hover:opacity-100 transition-opacity ${
                  alignRight ? "md:justify-end" : "md:justify-start"
                }`}
              >
                {!alignRight && <div className="hidden md:block w-5/12" />}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-[#e0e3e5] rounded-full border-4 border-white flex items-center justify-center text-[#737685] shadow-inner">
                  <span className="material-symbols-outlined">lock</span>
                </div>
                <div className={`w-full md:w-5/12 pl-16 md:pl-0 ${alignRight ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-[#eceef0] rounded-3xl p-6 border-2 border-dashed border-[#c3c6d6]/50">
                    <div className={`flex flex-col mb-3 ${alignRight ? "md:items-end" : "items-start"}`}>
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#e0e3e5] text-[#737685] text-sm mb-3 font-bold">
                        <span className="material-symbols-outlined text-[18px]">lock</span> Terkunci
                      </span>
                      <h3 className="text-xl font-bold text-[#737685]">
                        {step.num}. {step.title}
                      </h3>
                    </div>
                    <p className={`text-[#737685]/80 leading-relaxed font-medium ${alignRight ? "text-left md:text-right" : ""}`}>
                      {step.desc}
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
