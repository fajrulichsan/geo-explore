"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useTransition } from "react";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import { scorePeta10OpenEndedAction } from "@/app/belajar/openended-actions";
import type { OpenEndedResult } from "@/lib/openEndedScoring";
import Fireworks from "./Fireworks";

export const KKM = 71;

const KATEGORI = [
  {
    min: 90,
    kategori: "Sangat Baik",
    emoji: "🏆",
    color: "#16A34A",
    umpanBalik:
      "Hebat sekali! 🌟 Jawabanmu sudah tepat dan lengkap. Kamu juga mampu memberikan alasan matematis dengan sangat baik. Pertahankan!",
  },
  {
    min: 80,
    kategori: "Baik",
    emoji: "👏",
    color: "#2563EB",
    umpanBalik:
      "Bagus! 👏 Kamu sudah memahami permasalahan dengan baik. Coba lengkapi penjelasanmu agar jawabanmu semakin jelas.",
  },
  {
    min: KKM,
    kategori: "Cukup / Tuntas",
    emoji: "👍",
    color: "#0D9488",
    umpanBalik:
      "Kerja bagus! 👍 Jawabanmu sudah memenuhi nilai minimal. Yuk, lengkapi alasan matematisnya agar jawabanmu semakin baik!",
  },
  {
    min: 60,
    kategori: "Perlu Perbaikan / Belum Tuntas",
    emoji: "📚",
    color: "#D97706",
    umpanBalik:
      "Tetap semangat! 📚 Sebagian jawabanmu sudah benar. Coba periksa kembali bagian yang kurang tepat dan perbaiki alasan matematisnya, ya!",
  },
  {
    min: 1,
    kategori: "Perlu Bimbingan / Belum Tuntas",
    emoji: "💪",
    color: "#DC2626",
    umpanBalik:
      "Jangan menyerah! 💪 Yuk, pelajari kembali konsep yang berkaitan dengan soal ini. Perhatikan petunjuknya, lalu coba perbaiki jawabanmu!",
  },
  {
    min: 0,
    kategori: "Belum Dikerjakan",
    emoji: "✏️",
    color: "#6B7280",
    umpanBalik:
      "Yuk, mulai mengerjakan! ✏️ Bacalah soal dengan teliti, kemudian tuliskan jawaban dan alasanmu sesuai pemahamanmu.",
  },
] as const;

function kategoriFor(score: number) {
  return KATEGORI.find((k) => score >= k.min) ?? KATEGORI[KATEGORI.length - 1];
}

function gradeFor(score: number) {
  return { color: kategoriFor(score).color };
}

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(target, current + Math.max(1, Math.round(target / 40)));
      setValue(current);
      if (current >= target) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, [target, active]);
  return active ? value : 0;
}

export default function Peta9ScoreCheck({
  savedScore,
  materi,
  peta,
}: {
  savedScore?: number;
  materi: string;
  peta: string;
}) {
  const [result, setResult] = useState<OpenEndedResult | null>(null);
  const [score, setScore] = useState<number | null>(savedScore ?? null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();

  const shownScore = useCountUp(result?.score ?? 0, popupOpen);
  const kategori = kategoriFor(result?.score ?? 0);

  function checkScore() {
    setError("");
    startTransition(async () => {
      const res = await scorePeta10OpenEndedAction();
      if (!res.ok) {
        setError(res.error);
        return;
      }
      setResult(res.result);
      setScore(res.result.score);
      setPopupOpen(true);
    });
  }

  return (
    <div className="flex flex-col gap-3 sm:items-end">
      <input type="hidden" name="answers.ai_score" value={score ?? ""} />

      {score === null ? (
        <CheckButton pending={pending} onClick={checkScore} label="Check Score" />
      ) : (
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3 sm:justify-end">
            <span className="text-sm font-bold text-[#374151]">
              Skormu: <span style={{ color: kategoriFor(score).color }}>{score}</span>/100 &middot;{" "}
              {kategoriFor(score).kategori}
            </span>
            {result && (
              <button
                type="button"
                onClick={() => setPopupOpen(true)}
                className="text-sm font-semibold text-[#2563EB] underline"
              >
                Lihat detail
              </button>
            )}
            <button
              type="button"
              onClick={checkScore}
              disabled={pending}
              className="text-sm font-semibold text-[#7C3AED] underline disabled:opacity-60"
            >
              {pending ? "AI sedang menilai..." : "Nilai ulang jawabanku"}
            </button>
          </div>

          {score >= KKM ? (
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-5 flex flex-col gap-3 text-left">
              <h3 className="m-0 text-lg font-extrabold text-[#15803D]">🎉 Selamat, Kamu Berhasil!</h3>
              <p className="m-0 text-sm leading-[1.7] text-[#374151]">
                Hebat! Nilai Tantangan Terbuka kamu sudah mencapai {KKM} atau lebih. Kamu telah berhasil
                menyelesaikan tantangan dengan baik.
              </p>
              <p className="m-0 text-sm leading-[1.7] text-[#374151]">
                Sekarang, menu Quiz sudah terbuka dan kamu bisa melanjutkan pembelajaran dengan memilih tombol
                Lanjut ke Quiz.
              </p>
              <p className="m-0 text-sm leading-[1.7] text-[#374151]">
                Jika ingin meningkatkan nilaimu, kamu juga bisa memilih tombol Ulangi Tantangan untuk
                memperbaiki jawabanmu.
              </p>
              <p className="m-0 text-sm font-semibold text-[#15803D]">Tetap semangat dan terus tingkatkan kemampuanmu! 🌟</p>
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <NextStepButton variant="green">Lanjut ke Quiz</NextStepButton>
                <Link
                  href={`/belajar/${materi}/${peta}/1`}
                  className="w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-white border border-[#E5E7EB] text-[#111827] font-bold py-2.5 md:py-3 px-5 md:px-6 rounded-full text-sm md:text-base"
                >
                  <i className="fa-solid fa-rotate-right" />
                  Ulangi Tantangan
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-[20px] p-5 flex flex-col gap-3 text-left">
              <h3 className="m-0 text-lg font-extrabold text-[#C2410C]">📚 Yuk, Coba Lagi!</h3>
              <p className="m-0 text-sm leading-[1.7] text-[#374151]">
                Nilai Tantangan Terbuka kamu belum mencapai {KKM}, sehingga kamu belum bisa melanjutkan ke Quiz.
              </p>
              <p className="m-0 text-sm leading-[1.7] text-[#374151]">
                Jangan menyerah! Kamu bisa memilih tombol Rangkuman untuk mempelajari kembali materi yang belum
                kamu pahami. Setelah selesai membaca rangkuman, kembali ke halaman Tantangan Terbuka, lalu klik
                Ulangi Tantangan untuk memperbaiki jawabanmu.
              </p>
              <p className="m-0 text-sm leading-[1.7] text-[#374151]">
                Jika kamu sudah merasa siap, kamu juga bisa langsung memilih Ulangi Tantangan.
              </p>
              <p className="m-0 text-sm leading-[1.7] text-[#374151]">
                Setelah mencapai nilai minimal {KKM}, kamu dapat melanjutkan ke Quiz.
              </p>
              <p className="m-0 text-sm font-semibold text-[#C2410C]">Tetap semangat! Terus belajar dan coba lagi. Kamu pasti bisa! 💪</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <Link
                  href={`/belajar/${materi}/11/1?from=tantangan-terbuka`}
                  className="bg-white border border-[#E5E7EB] rounded-2xl p-4 flex flex-col items-center gap-1 text-center hover:bg-[#F9FAFB]"
                >
                  <span className="relative block w-14 h-10">
                    <Image src="/images/materi-1/ikon-rangkuman.png" alt="" fill sizes="56px" className="object-contain" />
                  </span>
                  <span className="text-sm font-extrabold text-[#111827]">Rangkuman</span>
                  <span className="text-xs text-[#6B7280]">Pelajari kembali materi</span>
                </Link>
                <Link
                  href={`/belajar/${materi}/${peta}/1`}
                  className="bg-white border border-[#E5E7EB] rounded-2xl p-4 flex flex-col items-center gap-1 text-center hover:bg-[#F9FAFB]"
                >
                  <span className="h-10 flex items-center text-2xl text-[#4B5563]">
                    <i className="fa-solid fa-rotate-right" />
                  </span>
                  <span className="text-sm font-extrabold text-[#111827]">Ulangi Tantangan</span>
                  <span className="text-xs text-[#6B7280]">Perbaiki jawabanmu</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}

      {error && <span className="text-xs font-semibold text-[#DC2626]">{error}</span>}

      {popupOpen && result && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <Fireworks intensity={result.score >= 70 ? 1.3 : 0.8} />
          <div
            role="dialog"
            aria-modal="true"
            className="relative z-[61] w-full max-w-md max-h-[90vh] overflow-y-auto bg-white rounded-[28px] p-7 flex flex-col items-center gap-4 text-center shadow-2xl animate-[pop_0.5s_cubic-bezier(0.34,1.56,0.64,1)]"
          >
            <style>{`@keyframes pop{0%{transform:scale(.3);opacity:0}100%{transform:scale(1);opacity:1}}`}</style>
            <div className="text-5xl">{kategori.emoji}</div>
            <div className="flex items-baseline gap-1">
              <span className="text-7xl font-extrabold tabular-nums" style={{ color: kategori.color }}>
                {shownScore}
              </span>
              <span className="text-xl font-bold text-[#6B7280]">/100</span>
            </div>
            <span
              className="rounded-full px-4 py-1.5 text-sm font-extrabold text-white"
              style={{ background: kategori.color }}
            >
              Kategori: {kategori.kategori}
            </span>
            <p className="m-0 text-sm font-semibold leading-[1.7] text-[#111827]">{kategori.umpanBalik}</p>
            <p className="m-0 text-sm leading-[1.7] text-[#374151]">{result.summary}</p>

            <div className="w-full flex flex-col gap-2.5 text-left">
              {result.sections.map((sec) => (
                <div key={sec.id} className="flex flex-col gap-1">
                  <div className="flex items-center justify-between gap-3 text-xs font-bold text-[#111827]">
                    <span>{sec.label}</span>
                    <span style={{ color: gradeFor(sec.score).color }}>{sec.score}</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#E5E7EB] overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${sec.score}%`, background: gradeFor(sec.score).color }}
                    />
                  </div>
                  {sec.note && <p className="m-0 text-xs text-[#6B7280] leading-[1.5]">{sec.note}</p>}
                </div>
              ))}
            </div>

            {result.strengths.length > 0 && (
              <div className="w-full text-left bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl p-4">
                <h3 className="m-0 mb-1.5 text-sm font-bold text-[#15803D]">Yang sudah bagus</h3>
                <ul className="m-0 pl-5 text-sm text-[#374151] leading-[1.6] list-disc">
                  {result.strengths.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            )}
            {result.improvements.length > 0 && (
              <div className="w-full text-left bg-[#FFF7ED] border border-[#FED7AA] rounded-2xl p-4">
                <h3 className="m-0 mb-1.5 text-sm font-bold text-[#C2410C]">Yang bisa ditingkatkan</h3>
                <ul className="m-0 pl-5 text-sm text-[#374151] leading-[1.6] list-disc">
                  {result.improvements.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            )}

            <button
              type="button"
              onClick={() => setPopupOpen(false)}
              className="mt-2 w-full bg-[#1E3A8A] hover:bg-[#1E40AF] text-white font-bold py-3 rounded-full text-base active:scale-95 transition-transform"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function CheckButton({ pending, onClick, label }: { pending: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={pending}
      className="w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold py-2.5 md:py-3 px-5 md:px-6 rounded-full text-sm md:text-base active:scale-95 transition-transform disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {pending ? (
        <>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="animate-spin">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.4" strokeOpacity="0.25" />
            <path d="M21 12a9 9 0 00-9-9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
          AI sedang menilai...
        </>
      ) : (
        <>
          <i className="fa-solid fa-wand-magic-sparkles" />
          {label}
        </>
      )}
    </button>
  );
}
