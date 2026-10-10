"use client";

import { useState } from "react";

export type QuizQuestion = {
  soal: string;
  pilihan: string[];
  jawaban: number;
  pembahasan: string;
};

const HURUF = ["A", "B", "C", "D"];

export default function Peta10QuizBoard({
  questions,
  initialAnswers,
}: {
  questions: QuizQuestion[];
  initialAnswers: Record<string, number>;
}) {
  const [current, setCurrent] = useState(0);
  const [jawab, setJawab] = useState<Record<string, number>>(initialAnswers);

  const answeredCount = Object.keys(jawab).length;
  const skor = questions.reduce((n, q, i) => n + (jawab[String(i)] === q.jawaban ? 1 : 0), 0);
  const q = questions[current];
  const dijawab = jawab[String(current)];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-5">
      {questions.map((_, i) =>
        jawab[String(i)] !== undefined ? (
          <input key={i} type="hidden" name={`answers.quiz_${i + 1}`} value={HURUF[jawab[String(i)]]} />
        ) : null
      )}
      <input
        type="text"
        name="answers.quiz_skor"
        value={answeredCount === questions.length ? String(skor) : ""}
        onChange={() => {}}
        required
        tabIndex={-1}
        aria-hidden="true"
        className="sr-only"
      />

      <aside className="bg-white border border-[#E5E7EB] rounded-[20px] p-4 flex flex-col gap-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)] h-fit">
        <h3 className="m-0 text-sm font-extrabold text-[#1E3A8A]">Daftar Soal</h3>
        <div className="grid grid-cols-5 lg:grid-cols-3 gap-2">
          {questions.map((_, i) => {
            const sudah = jawab[String(i)] !== undefined;
            const benar = sudah && jawab[String(i)] === questions[i].jawaban;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`h-9 rounded-lg text-sm font-bold border transition-colors ${
                  i === current
                    ? "bg-[#2563EB] text-white border-[#2563EB]"
                    : sudah
                      ? benar
                        ? "bg-[#DCFCE7] text-[#15803D] border-[#86EFAC]"
                        : "bg-[#FEE2E2] text-[#B91C1C] border-[#FCA5A5]"
                      : "bg-white text-[#374151] border-[#E5E7EB]"
                }`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
        <p className="m-0 text-xs text-[#6B7280]">
          Terjawab {answeredCount} dari {questions.length}
        </p>
      </aside>

      <section className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 flex flex-col gap-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <div className="flex items-center justify-between text-xs font-bold text-[#6B7280]">
          <span>Pilihan Ganda</span>
          <span>
            Soal {current + 1} dari {questions.length}
          </span>
        </div>
        <div className="h-2 rounded-full bg-[#E5E7EB] overflow-hidden">
          <div
            className="h-full bg-[#2563EB] transition-all"
            style={{ width: `${((current + 1) / questions.length) * 100}%` }}
          />
        </div>

        <p className="m-0 text-base font-bold text-[#111827] leading-[1.6]">{q.soal}</p>

        <div className="flex flex-col gap-2.5">
          {q.pilihan.map((p, idx) => {
            const dipilih = dijawab === idx;
            const benar = dijawab !== undefined && idx === q.jawaban;
            const salah = dipilih && idx !== q.jawaban;
            return (
              <label
                key={idx}
                className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-sm cursor-pointer transition-colors ${
                  benar
                    ? "border-[#86EFAC] bg-[#F0FDF4]"
                    : salah
                      ? "border-[#FCA5A5] bg-[#FEF2F2]"
                      : dipilih
                        ? "border-[#2563EB] bg-[#EFF4FF]"
                        : "border-[#E5E7EB] bg-white hover:bg-[#F9FAFB]"
                }`}
              >
                <input
                  type="radio"
                  value={HURUF[idx]}
                  checked={dipilih}
                  onChange={() => {
                    if (dijawab === undefined) setJawab((prev) => ({ ...prev, [String(current)]: idx }));
                  }}
                  className="mt-1 accent-[#2563EB]"
                />
                <span className="font-bold text-[#1E3A8A]">{HURUF[idx]}.</span>
                <span className="text-[#374151]">{p}</span>
              </label>
            );
          })}
        </div>

        {dijawab !== undefined && (
          <div
            className={`rounded-xl border p-4 text-sm leading-[1.6] ${
              dijawab === q.jawaban
                ? "border-[#86EFAC] bg-[#F0FDF4] text-[#166534]"
                : "border-[#FCA5A5] bg-[#FEF2F2] text-[#991B1B]"
            }`}
          >
            <p className="m-0 font-extrabold">
              {dijawab === q.jawaban ? "Jawabanmu benar!" : `Jawaban benar: ${HURUF[q.jawaban]}`}
            </p>
            <p className="m-0 mt-1">{q.pembahasan}</p>
          </div>
        )}

        <div className="flex items-center justify-between pt-1">
          <button
            type="button"
            disabled={current === 0}
            onClick={() => setCurrent((c) => c - 1)}
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-[#6B7280] disabled:opacity-40"
          >
            Sebelumnya
          </button>
          <button
            type="button"
            disabled={current === questions.length - 1}
            onClick={() => setCurrent((c) => c + 1)}
            className="rounded-full bg-[#FDE68A] px-5 py-2.5 text-sm font-bold text-[#92400E] disabled:opacity-40"
          >
            Selanjutnya
          </button>
        </div>

        {answeredCount === questions.length && (
          <div className="rounded-xl bg-[#EFF4FF] border border-[#DBE5FB] p-4 text-sm text-[#1E3A8A] font-semibold">
            Kamu telah menjawab semua soal. Skormu: {skor} dari {questions.length}.
          </div>
        )}
      </section>
    </div>
  );
}
