import Link from "next/link";
import { redirect } from "next/navigation";
import Footer from "@/app/_components/Footer";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";
import BackLink from "@/app/belajar/_components/BackLink";

const itemsUtama = [
  { num: 1, title: "Sampul", href: "/" },
  { num: 2, title: "Identitas Siswa", href: "/registrasi" },
  { num: 3, title: "Petunjuk Penggunaan E-Module", href: "/petunjuk-1" },
  { num: 4, title: "Kata Pengantar", href: "/kata-pengantar" },
];

const itemsMateri = [
  { num: 5, title: "Bab II Bangun Ruang Sisi Datar", href: "/petunjuk-3" },
  { num: 6, title: "Peta Konsep", href: "/peta-konsep" },
  { num: 7, title: "Peta Aktivitas Pembelajaran", href: "/peta-aktivitas" },
  { num: 8, title: "Klasifikasi Bangun Ruang Sisi Datar", href: "#" },
  { num: 9, title: "Jaring-Jaring Bangun Ruang Sisi Datar", href: "#" },
  { num: 10, title: "Luas Permukaan Kubus, Balok, dan Prisma", href: "#" },
  { num: 11, title: "Luas Permukaan Limas", href: "#" },
  { num: 12, title: "Skala dan Luas Bangun Ruang Sisi Datar", href: "#" },
  { num: 13, title: "Volume Kubus, Balok, dan Prisma", href: "#" },
  { num: 14, title: "Volume Limas", href: "#" },
  { num: 15, title: "Skala dan Volume Bangun Ruang Sisi Datar", href: "#" },
];

async function goToPetunjuk3() {
  "use server";
  redirect("/petunjuk-3");
}

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
          <p className="text-sm md:text-lg text-[#434653] relative z-10">
            E-Module Bangun Ruang Sisi Datar
          </p>
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
            className="w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-white text-[#374151] border border-[#c3c6d6] rounded-full py-2.5 md:py-3 px-5 md:px-6 text-sm md:text-base font-bold cursor-pointer hover:bg-[#f2f4f6]"
          />
          <form action={goToPetunjuk3}>
            <SubmitStepButton className="w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-2.5 md:py-3 px-5 md:px-6 rounded-full text-sm md:text-base group">
              <span>Lanjutkan</span>
              <i className="fa-solid fa-arrow-right-long group-hover:translate-x-2 transition-transform" />
            </SubmitStepButton>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
