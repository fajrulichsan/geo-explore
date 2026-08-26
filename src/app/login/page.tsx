import Image from "next/image";
import Footer from "@/app/_components/Footer";
import { getPageImage } from "@/lib/pageImages";
import LoginForm from "./_components/LoginForm";

export default async function LoginPage() {
  const heroImage = await getPageImage("home-hero");

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9fb] bg-[radial-gradient(circle_at_100%_0%,rgba(219,225,255,0.4)_0%,transparent_50%),radial-gradient(circle_at_0%_100%,rgba(255,223,158,0.2)_0%,transparent_50%)] relative overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-64 bg-[#00338a]/5 rounded-b-[100px] -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#b3c5ff]/20 rounded-full blur-3xl -z-10" />

      {/* Main Container */}
      <main className="flex-1 w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10 px-4 sm:px-6 py-10 md:py-16">
        {/* Left Side: Welcome & Illustration */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-4xl md:text-[56px] font-extrabold leading-tight text-[#00338a]">
              Selamat Datang Kembali! <span className="text-[#fabd00]">✨</span>
            </h1>
            <p className="text-base md:text-lg text-[#434653] max-w-md leading-relaxed">
              Masuk untuk melanjutkan petualangan belajar geometrimu.
            </p>
          </div>

          {/* Info Card */}
          <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_-2px_rgba(0,51,138,0.06)] border border-[#dbe1ff]/50 flex gap-4 items-start relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#00338a]" />
            <div className="bg-[#0048ba] text-[#afc2ff] p-3 rounded-xl shrink-0">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified_user
              </span>
            </div>
            <div>
              <p className="text-base text-[#191c1e]">
                Masuk dengan akun yang sudah kamu daftarkan untuk melanjutkan aktivitas
                belajarmu pada e-module ini.
              </p>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-[0_8px_30px_-4px_rgba(0,51,138,0.12)] mt-4">
            <Image
              src={heroImage}
              alt="Belajar bersama, eksplorasi bangun ruang"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div>
          <LoginForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
