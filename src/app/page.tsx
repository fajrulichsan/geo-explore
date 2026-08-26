import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/_components/Footer";
import { getPageImages } from "@/lib/pageImages";

const steps = [
  {
    step: 1,
    bg: "bg-primary",
    title: "Ayo Mengamati dan Berpikir",
    titleColor: "text-primary",
    desc: "Mengamati fenomena dan memunculkan pertanyaan.",
  },
  {
    step: 2,
    bg: "bg-green-500",
    title: "Ayo Berdiskusi",
    titleColor: "text-green-600",
    desc: "Mendiskusikan dan merumuskan masalah.",
  },
  {
    step: 3,
    bg: "bg-accent",
    title: "Ayo Berekplorasi",
    titleColor: "text-accent",
    desc: "Mengeksplorasi serta mengumpulkan data.",
  },
  {
    step: 4,
    bg: "bg-slate-800",
    title: "Ayo Mengolah Informasi",
    titleColor: "text-slate-800",
    desc: "Mengolah dan menganalisis informasi.",
  },
  {
    step: 5,
    bg: "bg-blue-400",
    title: "Ayo Verifikasi",
    titleColor: "text-blue-500",
    desc: "Memeriksa dan membuktikan temuan.",
  },
  {
    step: 6,
    bg: "bg-red-500",
    title: "Ayo Menyimpulkan",
    titleColor: "text-red-500",
    desc: "Menarik kesimpulan dan membuat generalisasi.",
  },
];

const stats = [
  { value: "4+", label: "Bangun Ruang" },
  { value: "6", label: "Tahap Discovery Learning" },
  { value: "3D", label: "Visualisasi GeoGebra & AR" },
];

export default async function Home() {
  const images = await getPageImages();
  const shapes = [
    { name: "KUBUS", image: images["shape-kubus"], scale: 1.15 },
    { name: "BALOK", image: images["shape-balok"], scale: 0.65 },
    { name: "PRISMA", image: images["shape-prisma"], scale: 1 },
    { name: "LIMAS", image: images["shape-limas"], scale: 1.3 },
  ];

  return (
    <div className="w-full min-h-screen bg-surface-container flex flex-col relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-blue-100 rounded-full blur-3xl opacity-60 -z-10" />
      <div className="absolute top-1/3 -right-40 w-[26rem] h-[26rem] bg-orange-100 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-40 -z-10" />

      {/* Header */}
      <header className="p-6 md:px-16 md:pt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10 max-w-6xl w-full mx-auto">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-glass border border-slate-100 p-1 relative overflow-hidden">
            <Image
              src={images["logo-kampus"]}
              alt="Logo Universitas Pendidikan Indonesia"
              fill
              sizes="64px"
              className="object-contain p-1.5"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg md:text-2xl font-bold tracking-tight text-slate-900">
              UNIVERSITAS PENDIDIKAN INDONESIA
            </h1>
            <h2 className="text-[11px] md:text-sm font-semibold text-slate-600 uppercase">
              FAKULTAS PENDIDIKAN MATEMATIKA DAN ILMU PENGETAHUAN ALAM
            </h2>
            <h3 className="text-[11px] md:text-sm font-medium text-slate-500 uppercase">
              PROGRAM STUDI PENDIDIKAN MATEMATIKA
            </h3>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col relative z-10 px-6 md:px-16 pb-16 gap-14 max-w-6xl w-full mx-auto">
        {/* Hero */}
        <div className="flex flex-col items-center text-center relative z-20 mx-auto max-w-3xl pt-6 md:pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-100 text-primary font-bold text-sm mb-6 shadow-sm">
            <i className="fa-solid fa-shapes" />
            <span>E-MODUL GEOMETRI</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-4 tracking-tight">
            BANGUN RUANG
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-accent">
              SISI DATAR
            </span>
          </h2>
          <p className="text-base md:text-lg font-medium text-slate-600 leading-relaxed mb-8">
            Berbasis <span className="text-primary font-bold italic">Open-Ended Problem</span>
            <br />
            dalam <span className="text-primary font-bold italic">Discovery Learning</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/login"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-2xl text-base md:text-lg shadow-[0_8px_20px_-5px_rgba(0,72,186,0.4)] hover:shadow-[0_12px_25px_-5px_rgba(0,72,186,0.5)] hover:-translate-y-1 active:translate-y-0 transition-all group"
            >
              <span className="tracking-wide">MULAI BELAJAR</span>
              <i className="fa-solid fa-arrow-right-long group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              href="/registrasi"
              className="inline-flex items-center gap-2 text-primary font-bold py-4 px-6 rounded-2xl text-base hover:bg-blue-50 transition-colors"
            >
              Daftar Akun Baru
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 w-full max-w-xl">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-primary">{s.value}</span>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1 text-center">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row: 2 columns */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column: Open-Ended Problem + shapes */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="bg-white rounded-[2rem] p-8 shadow-card border border-slate-100 card-hover relative">
              <div className="absolute -top-4 -left-4 bg-accent text-white font-bold px-4 py-1.5 rounded-full shadow-md text-sm transform -rotate-3 z-10">
                OPEN-ENDED PROBLEM
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 pr-12 relative z-10 leading-snug">
                Dapatkah satu masalah bangun ruang diselesaikan dengan beberapa strategi yang
                berbeda?
              </h3>
              <p className="text-primary font-semibold italic text-sm md:text-base">
                Temukan, jelaskan, dan bandingkan strategimu.
              </p>
              <div className="absolute top-4 right-6 text-7xl font-extrabold text-slate-100 select-none pointer-events-none">
                ?
              </div>
            </div>

            {/* Shapes showcase */}
            <div className="bg-white rounded-[2rem] p-5 shadow-card border border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 text-center">
                Jelajahi Bangun Ruang
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {shapes.map((shape) => (
                  <div key={shape.name} className="flex flex-col items-center group">
                    <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center relative overflow-visible group-hover:-translate-y-1 transition-all duration-300">
                      <Image
                        src={shape.image}
                        alt={shape.name}
                        width={128}
                        height={128}
                        sizes="160px"
                        style={{ transform: `scale(${shape.scale})` }}
                        className="w-full h-full object-contain drop-shadow-md transition-transform duration-300 group-hover:!scale-[1.15]"
                      />
                    </div>
                    <span className="mt-0.5 font-bold text-[10px] md:text-xs tracking-widest text-slate-700 group-hover:text-primary transition-colors">
                      {shape.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Illustration: kids learning */}
            <div className="relative w-full aspect-[16/9] rounded-[2rem] shadow-card border border-slate-100 overflow-hidden">
              <Image
                src={images["home-hero"]}
                alt="Belajar bersama, eksplorasi bangun ruang"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right column: Discovery Learning */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div className="bg-white rounded-[2rem] p-6 shadow-card border border-slate-100 relative flex-1 flex flex-col mt-2">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white font-bold px-6 py-2 rounded-full text-center whitespace-nowrap shadow-md text-sm z-10">
                BELAJAR MELALUI
                <br />
                DISCOVERY LEARNING
              </div>
              <div className="flex flex-col flex-1 relative gap-2 pt-4">
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-200 -z-10" />

                {steps.map(({ step, bg, title, titleColor, desc }) => (
                  <div
                    key={step}
                    className="flex items-start gap-3 rounded-xl p-3 relative group hover:bg-slate-50 transition-colors"
                  >
                    <div
                      className={`w-9 h-9 rounded-full ${bg} text-white flex items-center justify-center font-bold text-base flex-shrink-0 shadow-sm relative z-10 group-hover:scale-110 transition-transform`}
                    >
                      {step}
                    </div>
                    <div className="pt-1">
                      <h4 className={`font-bold ${titleColor} text-sm md:text-base mb-0.5`}>
                        {title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6">
                <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-5 flex items-center justify-between gap-4 border border-slate-100">
                  <div>
                    <p className="text-sm font-bold text-slate-800">Siap memulai eksplorasimu?</p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Ikuti keenam tahap secara berurutan.
                    </p>
                  </div>
                  <Link
                    href="/login"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-2.5 px-5 rounded-xl text-sm shadow-sm hover:-translate-y-0.5 transition-all flex-shrink-0"
                  >
                    Mulai
                    <i className="fa-solid fa-arrow-right-long" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
