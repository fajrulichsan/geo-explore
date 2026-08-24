import Link from "next/link";
import { submitStepAction } from "@/app/belajar/actions";
import type { StepComponentProps } from "@/app/belajar/_components/stepRegistry";
import SubmitStepButton from "@/app/belajar/_components/SubmitStepButton";

const cards = [
  {
    key: "geogebra",
    accent: "#2563EB",
    accentBg: "#EFF4FF",
    title: "GeoGebra 3D",
    desc: "Amati model bangun ruang secara interaktif menggunakan GeoGebra 3D. Kamu dapat memutar dan memperbesar model sesuka hati.",
    action: "Buka GeoGebra",
    bullets: [
      "Melihat model dari berbagai arah",
      "Memutar model secara bebas",
      "Memperbesar / memperkecil model",
    ],
  },
  {
    key: "ar",
    accent: "#D97706",
    accentBg: "#FEF9E7",
    title: "Augmented Reality",
    desc: "Amati model bangun ruang virtual di lingkungan sekitarmu menggunakan teknologi Augmented Reality (AR).",
    action: "Buka Kamera AR",
    note: "Butuh cahaya terang",
    bullets: [
      "Menempatkan model di meja/lantai",
      "Berjalan mengelilingi model",
      "Melihat proporsi ukuran nyata",
    ],
  },
  {
    key: "2d",
    accent: "#374151",
    accentBg: "#F3F4F6",
    title: "Gambar (2D)",
    desc: "Amati model bangun ruang melalui gambar tampak dari beberapa arah (Depan, Samping, Atas).",
    action: null,
    bullets: [
      "Membandingkan bentuk sisi dari arah berbeda",
      "Mengamati pola proyeksi 2D dari objek 3D",
    ],
  },
];

export default function Step5PilihMedia({ materi, peta }: StepComponentProps) {
  return (
    <form action={submitStepAction} className="flex flex-col gap-8">
      <input type="hidden" name="materi" value={materi} />
      <input type="hidden" name="peta" value={peta} />
      <input type="hidden" name="step" value="5" />

      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 bg-[#1E3A8A] text-white rounded-full py-1.5 px-3.5 text-xs font-bold tracking-[0.04em] w-fit">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M4 4h16v16H4z" />
            <path d="M4 10h16M10 4v16" />
          </svg>
          LANGKAH 5 – PILIH MEDIA
        </div>
        <div className="flex items-center gap-3.5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <h1 className="m-0 text-[32px] font-extrabold text-[#111827]">
            Ayo Mengamati dan Berpikir
          </h1>
        </div>
        <p className="m-0 text-[15px] leading-[1.6] text-[#374151] max-w-2xl">
          Pilih media berikut untuk mengamati model-model bangun ruang. Gunakan imajinasimu untuk
          mengeksplorasi bentuk dan strukturnya.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards.map((card) => (
          <div
            key={card.key}
            className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                style={{ background: card.accent }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <h3 className="m-0 text-base font-bold text-[#111827]">{card.title}</h3>
            </div>
            <p className="m-0 text-sm leading-[1.6] text-[#4B5563] flex-1">{card.desc}</p>
            <div
              className="rounded-xl p-4 flex flex-col items-center justify-center gap-2 border border-[#E5E7EB] relative"
              style={{ background: card.accentBg }}
            >
              {card.note && (
                <div className="absolute top-2 right-2 flex items-center gap-1 bg-white/80 rounded px-2 py-1">
                  <span className="text-[10px] text-[#DC2626] font-semibold">{card.note}</span>
                </div>
              )}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={card.accent} strokeWidth="2">
                <rect x="4" y="4" width="16" height="16" rx="2" />
              </svg>
              <span className="text-xs text-center text-[#6B7280]">
                Pindai atau klik untuk membuka
              </span>
              {card.action && (
                <button
                  type="button"
                  className="mt-1 w-full rounded-full py-2 text-sm font-bold text-white shadow-sm"
                  style={{ background: card.accent }}
                >
                  {card.action}
                </button>
              )}
            </div>
            <div>
              <h4 className="m-0 mb-2 text-xs font-bold text-[#374151]">Kamu dapat:</h4>
              <ul className="m-0 p-0 flex flex-col gap-2 list-none">
                {card.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-[#4B5563]">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={card.accent}
                      strokeWidth="3"
                      className="mt-1 flex-shrink-0"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/belajar/${materi}/${peta}/4`}
          className="flex items-center gap-2 bg-transparent text-[#6B7280] border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer hover:text-[#374151]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M19 12H5M11 5l-7 7 7 7" />
          </svg>
          Kembali
        </Link>
        <SubmitStepButton className="flex items-center gap-2 bg-[#2563EB] text-white border-none rounded-full py-3.5 px-7 text-sm font-bold font-inherit shadow-[0_4px_10px_rgba(37,99,235,0.3)] cursor-pointer">
          LANJUTKAN
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </SubmitStepButton>
      </div>
    </form>
  );
}
