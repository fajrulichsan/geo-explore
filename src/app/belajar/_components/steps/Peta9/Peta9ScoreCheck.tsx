"use client";

import { useEffect, useState, useTransition } from "react";
import NextStepButton from "@/app/belajar/_components/NextStepButton";
import { scorePeta10OpenEndedAction } from "@/app/belajar/openended-actions";
import type { OpenEndedResult } from "@/lib/openEndedScoring";
import Fireworks from "./Fireworks";

function gradeFor(score: number) {
  if (score >= 85) return { title: "Luar Biasa!", emoji: "🏆", color: "#16A34A" };
  if (score >= 70) return { title: "Bagus Sekali!", emoji: "🎉", color: "#2563EB" };
  if (score >= 50) return { title: "Cukup Baik!", emoji: "👍", color: "#D97706" };
  return { title: "Terus Berlatih!", emoji: "💪", color: "#DC2626" };
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

export default function Peta9ScoreCheck({ savedScore }: { savedScore?: number }) {
  const [result, setResult] = useState<OpenEndedResult | null>(null);
  const [score, setScore] = useState<number | null>(savedScore ?? null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();

  const shownScore = useCountUp(result?.score ?? 0, popupOpen);
  const grade = gradeFor(result?.score ?? 0);

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
        <button
          type="button"
          onClick={checkScore}
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
              Check Score
            </>
          )}
        </button>
      ) : (
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <span className="text-sm font-bold text-[#374151]">
            Skormu: <span style={{ color: gradeFor(score).color }}>{score}</span>/100
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
          <NextStepButton variant="green">LANJUT KE RANGKUMAN</NextStepButton>
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
            <div className="text-5xl">{grade.emoji}</div>
            <h2 className="m-0 text-2xl font-extrabold" style={{ color: grade.color }}>
              {grade.title}
            </h2>
            <div className="flex items-baseline gap-1">
              <span className="text-7xl font-extrabold tabular-nums" style={{ color: grade.color }}>
                {shownScore}
              </span>
              <span className="text-xl font-bold text-[#6B7280]">/100</span>
            </div>
            <p className="m-0 text-sm leading-[1.7] text-[#374151]">{result.summary}</p>

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
