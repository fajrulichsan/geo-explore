"use server";

import { getSessionUserId } from "@/lib/session";
import { getMateriProgress } from "@/lib/progress";
import { hasAnyAnswer, scoreOpenEndedAnswers, type OpenEndedResult } from "@/lib/openEndedScoring";

export type ScoreActionResult = { ok: true; result: OpenEndedResult } | { ok: false; error: string };

/** Scores the saved open-ended answers of Materi 1 / Peta 9 (steps 1-6) with AI. */
export async function scorePeta10OpenEndedAction(): Promise<ScoreActionResult> {
  const userId = await getSessionUserId();
  if (!userId) return { ok: false, error: "Sesi berakhir, silakan login ulang." };

  const rows = await getMateriProgress(userId, "1");
  const answers: Record<string, unknown> = {};
  for (const row of rows) {
    if (row.peta === "9" && Number(row.step) <= 6) Object.assign(answers, row.answers);
  }

  if (!hasAnyAnswer(answers)) {
    return { ok: false, error: "Belum ada jawaban Tantangan Terbuka yang bisa dinilai." };
  }

  try {
    return { ok: true, result: await scoreOpenEndedAnswers(answers) };
  } catch {
    return { ok: false, error: "Penilaian AI sedang bermasalah, coba lagi sebentar." };
  }
}
