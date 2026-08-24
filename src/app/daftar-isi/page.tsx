import Link from "next/link";
import { selesaiPetunjukAction } from "@/app/actions";

const itemsUtama = [
  { num: 1, title: "Kata Pengantar", href: "/kata-pengantar" },
  { num: 2, title: "Petunjuk Penggunaan", href: "/petunjuk-1" },
  { num: 3, title: "Peta Aktivitas Pembelajaran", href: "/peta-belajar" },
  { num: 4, title: "Kompetensi Inti & Dasar", href: "#" },
];

const itemsMateri = [
  { num: 5, title: "Materi 1: Kubus", desc: "Sifat, luas permukaan, dan volume", href: "#" },
  { num: 6, title: "Materi 2: Balok", desc: "Sifat, luas permukaan, dan volume", href: "#" },
  { num: 7, title: "Materi 3: Prisma", desc: "Sifat, jaring-jaring, dan perhitungan", href: "#" },
  { num: 8, title: "Materi 4: Limas", desc: "Sifat, jaring-jaring, dan perhitungan", href: "#" },
];

const itemsPenutup = [
  { num: 9, title: "Uji Kompetensi", href: "#", accent: true },
  { num: 10, title: "Glosarium", href: "#" },
  { num: 11, title: "Daftar Pustaka", href: "#" },
];

export default function DaftarIsiPage() {
  return (
    <div
      className="min-h-screen text-[#191c1e] flex flex-col"
      style={{
        backgroundColor: "#f7f9fb",
        backgroundImage:
          "radial-gradient(#dbe1ff 1px, transparent 1px), radial-gradient(#dbe1ff 1px, transparent 1px)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 10px 10px",
      }}
    >
      <header className="bg-white/80 backdrop-blur-md text-[#00338a] font-extrabold text-2xl border-b border-[#c3c6d6] shadow-sm sticky top-0 z-30">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-[1200px] mx-auto">
          <span className="font-extrabold text-2xl text-[#00338a]">E-Module Geometri</span>
          <div className="flex gap-4 text-sm font-semibold">
            <button className="text-[#00338a] bg-[#dbe1ff] px-4 py-2 rounded-full hover:bg-[#b3c5ff] transition-colors">
              Masuk
            </button>
            <button className="text-white bg-[#00338a] px-4 py-2 rounded-full hover:bg-[#00338a]/90 transition-colors">
              Daftar
            </button>
          </div>
        </div>
        <div className="flex justify-around items-center px-6 pb-2 overflow-x-auto gap-4 text-sm font-semibold">
          <a className="text-[#00338a] font-bold border-b-2 border-[#00338a] pb-1 whitespace-nowrap" href="#">
            Modul
          </a>
          <a className="text-[#434653] hover:text-[#00338a] transition-colors whitespace-nowrap" href="#">
            Aktivitas
          </a>
          <a className="text-[#434653] hover:text-[#00338a] transition-colors whitespace-nowrap" href="#">
            Progres
          </a>
          <a className="text-[#434653] hover:text-[#00338a] transition-colors whitespace-nowrap" href="#">
            Bantuan
          </a>
        </div>
      </header>

      <main className="flex-1 p-6 max-w-[1200px] mx-auto w-full pt-8 md:pt-12 pb-24">
        <div className="text-center mb-12 relative">
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-[#dbe1ff] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
          <div
            className="absolute -top-10 -right-10 w-24 h-24 bg-[#d2e6ef] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <h1 className="text-[48px] leading-[1.2] tracking-tight font-extrabold text-[#00338a] mb-2 relative z-10">
            DAFTAR ISI
          </h1>
          <p className="text-lg text-[#434653] relative z-10">E-Module Bangun Ruang Sisi Datar</p>
          <div className="h-1 w-24 bg-[#fdc003] mx-auto mt-4 rounded-full relative z-10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 max-w-4xl mx-auto relative z-10">
          {itemsUtama.map((item) => (
            <Link
              key={item.num}
              className="group bg-white rounded-xl p-4 flex items-center gap-4 shadow-[0_4px_20px_rgba(0,72,186,0.06)] hover:shadow-[0_8px_30px_rgba(0,72,186,0.12)] transition-all duration-300 border border-transparent hover:border-[#dbe1ff] hover:-translate-y-1"
              href={item.href}
            >
              <div className="w-12 h-12 rounded-full bg-[#00338a] text-white flex items-center justify-center text-2xl font-bold shadow-md group-hover:scale-110 transition-transform">
                {item.num}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-[#191c1e] group-hover:text-[#00338a] transition-colors">
                  {item.title}
                </h3>
              </div>
              <span className="material-symbols-outlined text-[#c3c6d6] group-hover:text-[#00338a] transition-colors">
                chevron_right
              </span>
            </Link>
          ))}

          <div className="md:col-span-2 py-4 flex items-center">
            <div className="flex-grow border-t border-[#c3c6d6]" />
            <span className="px-4 text-sm font-semibold text-[#434653] uppercase tracking-widest">
              Materi Pembelajaran
            </span>
            <div className="flex-grow border-t border-[#c3c6d6]" />
          </div>

          {itemsMateri.map((item) => (
            <Link
              key={item.num}
              className="group bg-white rounded-xl p-4 flex items-center gap-4 shadow-[0_4px_20px_rgba(0,72,186,0.06)] hover:shadow-[0_8px_30px_rgba(0,72,186,0.12)] transition-all duration-300 border border-transparent hover:border-[#dbe1ff] hover:-translate-y-1 relative overflow-hidden"
              href={item.href}
            >
              <div className="absolute right-0 bottom-0 opacity-5 group-hover:opacity-10 transition-opacity w-24 h-24 bg-[#00338a] rounded-tl-full" />
              <div className="w-12 h-12 rounded-full bg-[#2b3d44] text-white flex items-center justify-center text-2xl font-bold shadow-md group-hover:scale-110 transition-transform relative z-10">
                {item.num}
              </div>
              <div className="flex-1 relative z-10">
                <h3 className="text-2xl font-semibold text-[#191c1e] group-hover:text-[#00338a] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#434653] mt-1">{item.desc}</p>
              </div>
              <span className="material-symbols-outlined text-[#c3c6d6] group-hover:text-[#00338a] transition-colors relative z-10">
                chevron_right
              </span>
            </Link>
          ))}

          <div className="md:col-span-2 py-4 flex items-center">
            <div className="flex-grow border-t border-[#c3c6d6]" />
            <span className="px-4 text-sm font-semibold text-[#434653] uppercase tracking-widest">
              Penutup
            </span>
            <div className="flex-grow border-t border-[#c3c6d6]" />
          </div>

          {itemsPenutup.map((item) => (
            <Link
              key={item.num}
              className="group bg-white rounded-xl p-4 flex items-center gap-4 shadow-[0_4px_20px_rgba(0,72,186,0.06)] hover:shadow-[0_8px_30px_rgba(0,72,186,0.12)] transition-all duration-300 border border-transparent hover:border-[#dbe1ff] hover:-translate-y-1"
              href={item.href}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold shadow-md group-hover:scale-110 transition-transform ${
                  item.accent ? "bg-[#fdc003] text-[#6c5000]" : "bg-[#e6e8ea] text-[#191c1e]"
                }`}
              >
                {item.num}
              </div>
              <div className="flex-1">
                <h3
                  className={`text-2xl font-semibold text-[#191c1e] transition-colors ${
                    item.accent ? "group-hover:text-[#785900]" : "group-hover:text-[#00338a]"
                  }`}
                >
                  {item.title}
                </h3>
              </div>
              <span
                className={`material-symbols-outlined text-[#c3c6d6] transition-colors ${
                  item.accent ? "group-hover:text-[#785900]" : "group-hover:text-[#00338a]"
                }`}
              >
                chevron_right
              </span>
            </Link>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-10 flex justify-center relative z-10">
          <form action={selesaiPetunjukAction}>
            <button
              type="submit"
              className="bg-[#00338a] text-white hover:bg-[#0048ba] transition-all duration-200 shadow-md rounded-full px-10 py-4 flex items-center gap-3 group"
            >
              <span className="text-xl font-bold">SELESAI</span>
              <span className="material-symbols-outlined bg-white text-[#00338a] rounded-full p-1 group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </form>
        </div>
      </main>

      <footer className="mt-auto bg-[#00338a] text-white py-4 px-6 flex flex-col md:flex-row justify-between items-center z-20">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            menu_book
          </span>
          <div>
            <p className="text-sm font-bold">E-MODULE GEOMETRI</p>
            <p className="text-xs text-white/80">BANGUN RUANG SISI DATAR</p>
          </div>
        </div>
        <div className="flex gap-1 mt-3 md:mt-0 opacity-50">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-white" />
          ))}
        </div>
      </footer>
    </div>
  );
}
