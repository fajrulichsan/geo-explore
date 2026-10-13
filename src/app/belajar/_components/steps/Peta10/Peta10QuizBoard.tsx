"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { acak } from "@/lib/acak";
import NextStepButton from "@/app/belajar/_components/NextStepButton";

export type QuizQuestion = {
  soal: string;
  pilihan: string[];
  jawaban: number;
};

const KKM = 71;

const KATEGORI = [
  {
    min: 9,
    kategori: "Sangat Baik / Tuntas",
    color: "#16A34A",
    umpanBalik: "Hebat sekali! 🌟 Kamu sudah memahami materi dengan sangat baik. Pertahankan prestasimu!",
  },
  {
    min: 8,
    kategori: "Baik / Tuntas",
    color: "#2563EB",
    umpanBalik:
      "Bagus! 👏 Kamu sudah memahami sebagian besar materi dan berhasil mencapai nilai minimal. Terus tingkatkan kemampuanmu!",
  },
  {
    min: 6,
    kategori: "Cukup",
    color: "#D97706",
    umpanBalik:
      "Tetap semangat! 📚 Kamu sudah memahami beberapa bagian materi. Yuk, pelajari kembali bagian yang belum kamu pahami, lalu coba lagi!",
  },
  {
    min: 4,
    kategori: "Perlu Bimbingan",
    color: "#EA580C",
    umpanBalik: "Jangan menyerah! 💪 Kamu sudah berusaha. Pelajari kembali materi dengan teliti agar hasilmu semakin baik!",
  },
  {
    min: 0,
    kategori: "Perlu Belajar Kembali",
    color: "#DC2626",
    umpanBalik: "Ayo, terus belajar! ✏️ Pelajari kembali materi secara perlahan, kemudian coba kerjakan Quiz lagi.",
  },
] as const;

const HURUF = ["A", "B", "C", "D"];

export default function Peta10QuizBoard({
  questions,
  initialAnswers,
  rangkumanHref,
  urutanAwal,
}: {
  questions: QuizQuestion[];
  initialAnswers: Record<string, number>;
  rangkumanHref: string;
  urutanAwal: number[];
}) {
  const [current, setCurrent] = useState(0);
  const [urutan, setUrutan] = useState<number[]>(urutanAwal);
  const [jawab, setJawab] = useState<Record<string, number>>(initialAnswers);
  const [selesai, setSelesai] = useState(Object.keys(initialAnswers).length === questions.length);

  const answeredCount = Object.keys(jawab).length;
  const benarCount = questions.reduce((n, q, i) => n + (jawab[String(i)] === q.jawaban ? 1 : 0), 0);
  const skor = Math.round((benarCount / questions.length) * 100);
  const lulus = skor >= KKM;
  const kategori = KATEGORI.find((k) => benarCount >= k.min) ?? KATEGORI[KATEGORI.length - 1];
  const idxSoal = urutan[current];
  const q = questions[idxSoal];
  const dijawab = jawab[String(idxSoal)];

  function ulangi() {
    setJawab({});
    setSelesai(false);
    setCurrent(0);
    setUrutan(acak(questions.length));
  }

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
        value={selesai ? String(skor) : ""}
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
            const sudah = jawab[String(urutan[i])] !== undefined;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`h-9 rounded-lg text-sm font-bold border transition-colors ${
                  i === current
                    ? "bg-[#2563EB] text-white border-[#2563EB]"
                    : sudah
                      ? "bg-[#DCFCE7] text-[#15803D] border-[#86EFAC]"
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
        <ul className="m-0 p-0 list-none flex flex-col gap-2 pt-2 border-t border-[#E5E7EB] text-xs text-[#374151]">
          <li className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-[#2563EB] flex-shrink-0" />
            Soal yang sedang dikerjakan
          </li>
          <li className="flex items-center gap-2">
            <span className="w-4 h-4 rounded border border-[#E5E7EB] bg-white flex-shrink-0" />
            Soal yang belum dijawab
          </li>
          <li className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-[#DCFCE7] border border-[#86EFAC] flex-shrink-0" />
            Soal yang sudah dijawab
          </li>
        </ul>
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
            return (
              <label
                key={idx}
                className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-sm cursor-pointer transition-colors ${
                  dipilih
                    ? "border-[#2563EB] bg-[#EFF4FF]"
                    : "border-[#E5E7EB] bg-white hover:bg-[#F9FAFB]"
                }`}
              >
                <input
                  type="radio"
                  value={HURUF[idx]}
                  checked={dipilih}
                  disabled={selesai}
                  onChange={() => setJawab((prev) => ({ ...prev, [String(idxSoal)]: idx }))}
                  className="mt-1 accent-[#2563EB]"
                />
                <span className="font-bold text-[#1E3A8A]">{HURUF[idx]}.</span>
                <span className="text-[#374151]">{p}</span>
              </label>
            );
          })}
        </div>

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

        {!selesai && answeredCount === questions.length && (
          <button
            type="button"
            onClick={() => setSelesai(true)}
            className="rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] px-5 py-3 text-sm font-bold text-white"
          >
            Lihat Hasil Quiz
          </button>
        )}
      </section>

      {selesai && (
        <section className="lg:col-span-2 bg-white border border-[#E5E7EB] rounded-[20px] p-6 flex flex-col gap-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex items-center justify-between gap-3">
            <h3 className="m-0 text-lg font-extrabold text-[#111827]">Hasil Quiz</h3>
            <span
              className="rounded-full px-3 py-1 text-xs font-extrabold"
              style={{
                background: lulus ? "#DCFCE7" : "#FEE2E2",
                color: lulus ? "#15803D" : "#B91C1C",
              }}
            >
              {lulus ? "Tuntas" : "Belum Tuntas"}
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="text-6xl font-extrabold tabular-nums" style={{ color: kategori.color }}>
              {skor}
            </span>
            <span className="text-sm font-bold text-[#6B7280]">/ 100</span>
            <span className="text-base font-extrabold text-[#111827]">{kategori.kategori}</span>
            <span className="text-sm text-[#6B7280]">
              {benarCount} dari {questions.length} jawaban benar
            </span>
          </div>
          <div className="h-3 rounded-full bg-[#F3F4F6] overflow-hidden">
            <div className="h-full rounded-full" style={{ width: `${skor}%`, background: kategori.color }} />
          </div>
          <p className="m-0 text-sm leading-[1.7] text-[#374151] text-center">{kategori.umpanBalik}</p>

          {lulus ? (
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-5 flex flex-col gap-3">
              <h4 className="m-0 text-lg font-extrabold text-[#15803D]">🎉 Selamat, Kamu Berhasil!</h4>
              <p className="m-0 text-sm leading-[1.7] text-[#374151]">
                Hebat! Kamu sudah mencapai nilai minimal {KKM} dan berhasil menyelesaikan Quiz dengan baik.
              </p>
              <p className="m-0 text-sm leading-[1.7] text-[#374151]">
                Sekarang, Submateri 2 sudah terbuka dan kamu bisa melanjutkan pembelajaran.
              </p>
              <p className="m-0 text-sm leading-[1.7] text-[#374151]">
                Jika ingin meningkatkan nilaimu, kamu juga bisa mengerjakan Quiz kembali dengan memilih tombol
                Ulangi Quiz.
              </p>
              <p className="m-0 text-sm font-semibold text-[#15803D]">Tetap semangat dan terus tingkatkan kemampuanmu! 🌟</p>
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <NextStepButton variant="green">Lanjut ke Submateri 2</NextStepButton>
                <button
                  type="button"
                  onClick={ulangi}
                  className="w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-white border border-[#E5E7EB] text-[#111827] font-bold py-2.5 md:py-3 px-5 md:px-6 rounded-full text-sm md:text-base"
                >
                  <i className="fa-solid fa-rotate-right" />
                  Ulangi Quiz
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-[20px] p-5 flex flex-col gap-3">
              <h4 className="m-0 text-lg font-extrabold text-[#C2410C]">📚 Yuk, Coba Lagi!</h4>
              <p className="m-0 text-sm leading-[1.7] text-[#374151]">
                Nilai Quiz kamu belum mencapai {KKM}, sehingga kamu belum bisa melanjutkan ke Submateri 2.
              </p>
              <p className="m-0 text-sm leading-[1.7] text-[#374151]">
                Jangan menyerah! Kamu bisa memilih tombol Rangkuman untuk mempelajari kembali materi yang belum
                kamu pahami. Setelah selesai, kembali ke halaman Quiz, lalu klik Ulangi Quiz untuk mengerjakan
                soal kembali.
              </p>
              <p className="m-0 text-sm leading-[1.7] text-[#374151]">
                Jika kamu sudah merasa siap, kamu juga bisa langsung memilih Ulangi Quiz.
              </p>
              <p className="m-0 text-sm leading-[1.7] text-[#374151]">
                Setelah mencapai nilai minimal {KKM}, kamu dapat melanjutkan ke Submateri 2.
              </p>
              <p className="m-0 text-sm font-semibold text-[#C2410C]">Tetap semangat! Kamu pasti bisa! 💪</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <Link
                  href={rangkumanHref}
                  className="bg-white border border-[#E5E7EB] rounded-2xl p-4 flex flex-col items-center gap-1 text-center hover:bg-[#F9FAFB]"
                >
                  <span className="relative block w-16 h-12">
                    <Image src="/images/materi-1/ikon-rangkuman.png" alt="" fill sizes="64px" className="object-contain" />
                  </span>
                  <span className="text-sm font-extrabold text-[#111827]">Rangkuman</span>
                  <span className="text-xs text-[#6B7280]">Pelajari kembali materi</span>
                </Link>
                <button
                  type="button"
                  onClick={ulangi}
                  className="bg-white border border-[#E5E7EB] rounded-2xl p-4 flex flex-col items-center gap-1 text-center hover:bg-[#F9FAFB]"
                >
                  <span className="relative block w-16 h-12">
                    <Image src="/images/materi-1/ikon-ulangi-quiz.png" alt="" fill sizes="64px" className="object-contain" />
                  </span>
                  <span className="text-sm font-extrabold text-[#111827]">Ulangi Quiz</span>
                  <span className="text-xs text-[#6B7280]">Kerjakan kembali soal</span>
                </button>
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
