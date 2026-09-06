import Link from "next/link";
import { selesaiPetunjukAction } from "@/app/actions";
import Footer from "@/app/_components/Footer";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";

const itemsUtama = [
  { num: 1, title: "Kata Pengantar", href: "/kata-pengantar" },
  { num: 2, title: "Petunjuk Penggunaan", href: "/petunjuk-1" },
];

const itemsMateri = [
  { num: 3, title: "Klasifikasi Bangun Ruang Sisi Datar", href: "#" },
  { num: 4, title: "Jaring-Jaring Bangun Ruang Sisi Datar", href: "#" },
  { num: 5, title: "Luas Permukaan Kubus, Balok, dan Prisma", href: "#" },
  { num: 6, title: "Luas Permukaan Limas", href: "#" },
  { num: 7, title: "Skala dan Luas Bangun Ruang Sisi Datar", href: "#" },
  { num: 8, title: "Volume Kubus, Balok, dan Prisma", href: "#" },
  { num: 9, title: "Volume Limas", href: "#" },
  { num: 10, title: "Skala dan Volume Bangun Ruang Sisi Datar", href: "#" },
];

export default function DaftarIsiPage() {
  return (
    <div
      className="min-h-screen text-[#191c1e] flex flex-col"
      style={{
        backgroundColor: "#f7f9fb",
        backgroundImage: "radial-gradient(#dbe1ff 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <main className="flex-1 p-4 md:p-6 max-w-[1200px] mx-auto w-full pt-8 md:pt-12 pb-24">
        <div className="text-center mb-12 relative">
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-[#dbe1ff] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
          <div
            className="absolute -top-10 -right-10 w-24 h-24 bg-[#d2e6ef] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <h1 className="text-3xl md:text-[48px] leading-[1.2] tracking-tight font-extrabold text-[#00338a] mb-2 relative z-10">
            DAFTAR ISI
          </h1>
          <p className="text-sm md:text-lg text-[#434653] relative z-10">E-Module Bangun Ruang Sisi Datar</p>
          <div className="h-1 w-24 bg-[#fdc003] mx-auto mt-4 rounded-full relative z-10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 max-w-4xl mx-auto relative z-10">
          {itemsUtama.map((item) => (
            <Link
              key={item.num}
              className="group bg-white rounded-xl p-4 flex items-center gap-4 shadow-[0_4px_20px_rgba(0,72,186,0.06)] hover:shadow-[0_8px_30px_rgba(0,72,186,0.12)] transition-all duration-300 border border-transparent hover:border-[#dbe1ff] hover:-translate-y-1"
              href={item.href}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-[#00338a] text-white flex items-center justify-center text-base md:text-2xl font-bold shadow-md group-hover:scale-110 transition-transform">
                {item.num}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base md:text-2xl font-semibold text-[#191c1e] group-hover:text-[#00338a] transition-colors">
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
              <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-[#2b3d44] text-white flex items-center justify-center text-base md:text-2xl font-bold shadow-md group-hover:scale-110 transition-transform relative z-10">
                {item.num}
              </div>
              <div className="flex-1 min-w-0 relative z-10">
                <h3 className="text-base md:text-2xl font-semibold text-[#191c1e] group-hover:text-[#00338a] transition-colors">
                  {item.title}
                </h3>
              </div>
              <span className="material-symbols-outlined text-[#c3c6d6] group-hover:text-[#00338a] transition-colors relative z-10">
                chevron_right
              </span>
            </Link>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-10 flex flex-col-reverse sm:flex-row justify-between items-center gap-4 relative z-10">
          <BackLink
            href="/kata-pengantar"
            className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
          />
          <form action={selesaiPetunjukAction}>
            <SubmitStepButton className="w-full sm:w-auto justify-center inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-2xl text-sm md:text-lg shadow-[0_8px_20px_-5px_rgba(0,72,186,0.4)] hover:shadow-[0_12px_25px_-5px_rgba(0,72,186,0.5)] hover:-translate-y-1 active:translate-y-0 transition-all group">
              <span className="tracking-wide">SELESAI</span>
              <i className="fa-solid fa-arrow-right-long group-hover:translate-x-2 transition-transform" />
            </SubmitStepButton>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
