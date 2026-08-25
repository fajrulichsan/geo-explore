import { Fragment } from "react";
import Link from "next/link";
import Footer from "@/app/_components/Footer";

const glass =
  "bg-white/80 backdrop-blur-[10px] border border-white/50 shadow-[0_4px_20px_rgba(0,51,138,0.06)]";

const discoverySteps = [
  {
    num: 1,
    numBg: "bg-[#00338a]",
    numColor: "text-white",
    iconColor: "text-[#00338a]",
    titleColor: "text-[#00338a]",
    icon: "search",
    title: "Ayo Mengamati dan Berpikir",
    desc: "Amati fenomena atau masalah dan pikirkan hal-hal yang menarik perhatianmu.",
  },
  {
    num: 2,
    numBg: "bg-green-600",
    numColor: "text-white",
    iconColor: "text-green-600",
    titleColor: "text-green-600",
    icon: "groups",
    title: "Ayo Berdiskusi",
    desc: "Sampaikan ide, dengarkan pendapat teman, lalu bandingkan strategi yang digunakan.",
  },
  {
    num: 3,
    numBg: "bg-orange-500",
    numColor: "text-white",
    iconColor: "text-orange-500",
    titleColor: "text-orange-500",
    icon: "travel_explore",
    title: "Ayo Bereksplorasi",
    desc: "Gunakan GeoGebra 3D dan/atau AR untuk melakukan eksplorasi dan mengumpulkan informasi.",
  },
  {
    num: 4,
    numBg: "bg-teal-600",
    numColor: "text-white",
    iconColor: "text-teal-600",
    titleColor: "text-teal-600",
    icon: "bar_chart",
    title: "Ayo Mengolah Informasi",
    desc: "Olah hasil pengamatan dan eksplorasi untuk menemukan pola atau hubungan.",
  },
  {
    num: 5,
    numBg: "bg-purple-600",
    numColor: "text-white",
    iconColor: "text-purple-600",
    titleColor: "text-purple-600",
    icon: "fact_check",
    title: "Ayo Verifikasi",
    desc: "Periksa kembali dugaan, strategi, dan hasil yang telah kamu peroleh serta perbaiki jika perlu.",
  },
  {
    num: 6,
    numBg: "bg-[#00338a]",
    numColor: "text-white",
    iconColor: "text-[#00338a]",
    titleColor: "text-[#00338a]",
    icon: "lightbulb",
    title: "Ayo Menyimpulkan",
    desc: "Tarik kesimpulan berdasarkan hasil penyelidikan dan berikan alasan yang mendukungnya.",
  },
];

const geogebraSteps = [
  { icon: "mouse", label: "Klik tombol GeoGebra" },
  { icon: "touch_app", label: "Ikuti petunjuk eksplorasi" },
  { icon: "visibility", label: "Amati perubahan" },
  { icon: "edit_document", label: "Catat hasil pengamatan" },
];

const arSteps = [
  { icon: "qr_code_scanner", label: "Buka / scan AR" },
  { icon: "screen_rotation", label: "Arahkan perangkat" },
  { icon: "visibility", label: "Amati objek 3D" },
  { icon: "edit_document", label: "Catat hasil pengamatan" },
];

const caraBelajar = [
  {
    bg: "bg-blue-100",
    color: "text-blue-700",
    icon: "person",
    title: "Kerja Mandiri",
    desc: "Kerjakan terlebih dahulu aktivitas bertanda Mandiri menggunakan pemikiran dan strategimu sendiri.",
  },
  {
    bg: "bg-green-100",
    color: "text-green-700",
    icon: "groups",
    title: "Kerja Kelompok",
    desc: "Sampaikan ide, dengarkan pendapat teman, lalu bandingkan strategi yang digunakan.",
  },
  {
    bg: "bg-orange-100",
    color: "text-orange-700",
    icon: "record_voice_over",
    title: "Bersama Guru",
    desc: "Ikuti arahan dan penguatan guru pada bagian yang memerlukan pembahasan bersama.",
  },
];

const caraMenjawab = [
  { icon: "edit_square", title: "Tuliskan", desc: "Jawab aktivitas pada kolom yang tersedia." },
  { icon: "search", title: "Periksa", desc: "Periksa kembali jawaban sebelum melanjutkan." },
  { icon: "save", title: "Simpan", desc: "Gunakan tombol Simpan jika tersedia pada aktivitas." },
  {
    icon: "sync",
    title: "Perbaiki",
    desc: "Perbaiki jawaban atau strategimu jika hasil eksplorasi menunjukkan bahwa dugaan awal perlu diperbaiki.",
  },
];

const setelahTahap = [
  {
    bg: "bg-purple-50",
    border: "border-purple-100",
    titleColor: "text-purple-800",
    iconColor: "text-purple-600",
    icon: "account_circle",
    title: "Refleksi Diri",
    desc: "Renungkan pengalaman dan keyakinanmu setelah menyelesaikan kegiatan pembelajaran.",
  },
  {
    bg: "bg-green-50",
    border: "border-green-100",
    titleColor: "text-green-800",
    iconColor: "text-green-600",
    icon: "extension",
    title: "Tantangan Open-Ended",
    desc: "Selesaikan masalah menggunakan strategi yang kamu pilih. Jika mungkin, temukan dan bandingkan lebih dari satu strategi.",
  },
  {
    bg: "bg-orange-50",
    border: "border-orange-100",
    titleColor: "text-orange-800",
    iconColor: "text-orange-600",
    icon: "menu_book",
    title: "Rangkuman",
    desc: "Pelajari kembali konsep-konsep penting yang telah kamu temukan.",
  },
];

export default function Petunjuk2Page() {
  return (
    <div
      className="bg-[#f7f9fb] text-[#191c1e] min-h-screen flex flex-col"
      style={{
        backgroundImage: "radial-gradient(#dbe1ff 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <main className="max-w-[1200px] mx-auto px-4 md:px-6 py-6 md:py-8 w-full flex-1">
        {/* Header */}
        <header className="flex items-center mb-8 gap-3 md:gap-4">
          <div className="bg-[#0048ba] text-white p-3 md:p-4 rounded-full shrink-0">
            <span
              className="material-symbols-outlined text-2xl md:text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              assignment
            </span>
          </div>
          <div>
            <h1 className="text-2xl md:text-[48px] leading-[1.2] tracking-tight font-extrabold text-[#00338a] mb-1 md:mb-2">
              PETUNJUK PENGGUNAAN E-MODULE
            </h1>
            <p className="text-sm md:text-lg text-[#434653]">Kenali perjalanan belajarmu dengan e-module ini.</p>
          </div>
        </header>

        {/* Section A: Discovery Learning */}
        <div className="grid grid-cols-1 gap-4 mb-8">
          <section className={`${glass} rounded-xl p-6 relative`}>
            <div className="absolute -top-4 left-4 right-4 sm:left-6 sm:right-auto sm:w-auto bg-[#00338a] text-white font-bold text-base sm:text-2xl px-4 sm:px-6 py-2 rounded-2xl sm:rounded-full shadow-md flex items-center gap-2">
              <span className="material-symbols-outlined shrink-0">layers</span>
              A. IKUTI 6 TAHAP DISCOVERY LEARNING
            </div>
            <div className="mt-14 sm:mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {discoverySteps.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center relative">
                  {step.num > 1 && (
                    <div className="hidden lg:block absolute top-5 left-[-50%] w-full h-[2px] bg-[#00338a]/20 -z-10" />
                  )}
                  <div
                    className={`w-10 h-10 rounded-full ${step.numBg} ${step.numColor} flex items-center justify-center font-bold mb-3 z-10 relative`}
                  >
                    {step.num}
                  </div>
                  <span
                    className={`material-symbols-outlined ${step.iconColor} text-4xl mb-2`}
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {step.icon}
                  </span>
                  <h3 className={`font-semibold text-sm ${step.titleColor} mb-2`}>{step.title}</h3>
                  <p className="text-xs text-[#434653]">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Section B: Eksplorasi */}
        <div className="grid grid-cols-1 gap-4 mb-8">
          <section className={`${glass} rounded-xl p-6 relative`}>
            <div className="absolute -top-4 left-4 right-4 sm:left-6 sm:right-auto sm:w-auto bg-[#00338a] text-white font-bold text-base sm:text-2xl px-4 sm:px-6 py-2 rounded-2xl sm:rounded-full shadow-md flex items-center gap-2">
              <span className="material-symbols-outlined shrink-0">view_in_ar</span>
              B. EKSPLORASI DENGAN GEOGEBRA 3D &amp; AR
            </div>
            <div className="mt-14 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* GeoGebra 3D */}
              <div className="bg-[#f7f9fb] rounded-xl border border-[#dbe1ff] p-6 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-[#00338a] text-center mb-4">GeoGebra 3D</h3>
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                  <div className="w-full sm:w-1/2 rounded-lg bg-[#eceef0] flex items-center justify-center h-32">
                    <span className="material-symbols-outlined text-6xl text-[#00338a] opacity-50">
                      laptop_mac
                    </span>
                  </div>
                  <p className="text-base text-[#434653] w-full sm:w-1/2">
                    Gunakan GeoGebra 3D untuk memutar, mengamati, dan memanipulasi model bangun ruang sesuai
                    petunjuk pada kegiatan eksplorasi.
                  </p>
                </div>
                <div className="flex justify-between items-start mt-auto relative">
                  <div className="hidden sm:block absolute top-6 left-10 right-10 h-[2px] bg-[#c3c6d6] -z-10" />
                  {geogebraSteps.map((s) => (
                    <div key={s.label} className="flex flex-col items-center text-center w-1/4">
                      <div className="bg-[#f7f9fb] border border-[#c3c6d6] rounded-lg p-2 mb-2 z-10">
                        <span className="material-symbols-outlined text-[#00338a]">{s.icon}</span>
                      </div>
                      <span className="text-xs text-[#191c1e] font-medium">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AR */}
              <div className="bg-[#f7f9fb] rounded-xl border border-[#dbe1ff] p-6 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-[#00338a] text-center mb-4">
                  Augmented Reality (AR)
                </h3>
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                  <div className="w-full sm:w-1/2 rounded-lg bg-[#eceef0] flex items-center justify-center h-32 relative">
                    <span className="material-symbols-outlined text-6xl text-[#00338a] opacity-50">
                      smartphone
                    </span>
                  </div>
                  <p className="text-base text-[#434653] w-full sm:w-1/2">
                    Gunakan AR untuk mengamati model bangun ruang tiga dimensi dari berbagai arah sesuai
                    petunjuk yang tersedia.
                  </p>
                </div>
                <div className="flex justify-between items-start mt-auto relative">
                  <div className="hidden sm:block absolute top-6 left-10 right-10 h-[2px] bg-[#c3c6d6] -z-10" />
                  {arSteps.map((s) => (
                    <div key={s.label} className="flex flex-col items-center text-center w-1/4">
                      <div className="bg-[#f7f9fb] border border-[#c3c6d6] rounded-lg p-2 mb-2 z-10">
                        <span className="material-symbols-outlined text-[#00338a]">{s.icon}</span>
                      </div>
                      <span className="text-xs text-[#191c1e] font-medium">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sections C + D */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8">
          <section className={`lg:col-span-5 ${glass} rounded-xl p-6 relative flex flex-col`}>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00338a] text-white font-bold text-sm sm:text-2xl px-4 sm:px-6 py-2 rounded-full shadow-md whitespace-nowrap">
              C. KENALI CARA BELAJARMU
            </div>
            <div className="mt-8 flex flex-col gap-4 flex-grow justify-center">
              {caraBelajar.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className={`${item.bg} ${item.color} p-2 rounded-full flex-shrink-0`}>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className={`font-semibold text-sm ${item.color}`}>{item.title}</h4>
                    <p className="text-xs text-[#434653]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={`lg:col-span-7 ${glass} rounded-xl p-6 relative`}>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00338a] text-white font-bold text-sm sm:text-2xl px-4 sm:px-6 py-2 rounded-full shadow-md whitespace-nowrap">
              D. CARA MENJAWAB AKTIVITAS
            </div>
            <div className="mt-8 grid grid-cols-2 sm:flex gap-y-6 sm:gap-y-0 sm:justify-between items-start h-full">
              {caraMenjawab.map((item, i) => (
                <Fragment key={item.title}>
                  <div className="flex flex-col items-center text-center sm:w-1/4 relative">
                    <div className="bg-white border-2 border-[#00338a] text-[#00338a] rounded-xl p-3 mb-3 z-10">
                      <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                    </div>
                    <h4 className="font-semibold text-sm text-[#00338a] mb-1">{item.title}</h4>
                    <p className="text-xs text-[#434653]">{item.desc}</p>
                  </div>
                  {i < caraMenjawab.length - 1 && (
                    <div className="hidden sm:flex flex-col justify-center items-center h-16 w-8">
                      <span className="material-symbols-outlined text-[#c3c6d6]">arrow_forward</span>
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </section>
        </div>

        {/* Section E */}
        <section className={`${glass} rounded-xl p-6 relative mb-8`}>
          <div className="absolute -top-4 left-4 right-4 sm:left-auto sm:right-6 bg-[#00338a] text-white font-bold text-sm sm:text-2xl px-4 sm:px-6 py-2 rounded-2xl sm:rounded-full shadow-md text-center sm:whitespace-nowrap">
            E. SETELAH 6 TAHAP, LANJUTKAN KE:
          </div>
          <div className="mt-14 sm:mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {setelahTahap.map((item) => (
              <div
                key={item.title}
                className={`${item.bg} rounded-xl p-6 text-center border ${item.border} flex flex-col items-center`}
              >
                <h4 className={`font-semibold text-sm ${item.titleColor} mb-4`}>{item.title}</h4>
                <span className={`material-symbols-outlined text-5xl ${item.iconColor} mb-4`}>
                  {item.icon}
                </span>
                <p className="text-xs text-[#434653]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="bg-[#f7f9fb] border border-[#dbe1ff] rounded-xl p-4 flex items-center gap-4 flex-grow shadow-sm">
            <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full flex-shrink-0">
              <span
                className="material-symbols-outlined text-2xl md:text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                emoji_objects
              </span>
            </div>
            <div>
              <span className="text-lg md:text-2xl text-[#00338a] font-bold mr-2">INGAT!</span>
              <span className="text-sm md:text-base text-[#434653]">
                Jangan terburu-buru mencari jawaban akhir. Amati, coba berbagai strategi, jelaskan
                alasanmu, bandingkan hasilnya, dan perbaiki pemikiranmu jika diperlukan.
              </span>
            </div>
          </div>
          <Link
            href="/kata-pengantar"
            className="w-full sm:w-auto justify-center inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-2xl text-sm md:text-lg shadow-[0_8px_20px_-5px_rgba(0,72,186,0.4)] hover:shadow-[0_12px_25px_-5px_rgba(0,72,186,0.5)] hover:-translate-y-1 active:translate-y-0 transition-all group flex-shrink-0"
          >
            <span className="tracking-wide">LANJUTKAN</span>
            <i className="fa-solid fa-arrow-right-long group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
