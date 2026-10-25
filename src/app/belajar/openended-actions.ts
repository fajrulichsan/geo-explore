"use server";

import { getSessionUserId } from "@/lib/session";
import { getMateriProgress } from "@/lib/progress";
import { getOpenEndedConfig, hasAnyAnswer, scoreOpenEndedAnswers, type OpenEndedResult } from "@/lib/openEndedScoring";

export type ScoreActionResult = { ok: true; result: OpenEndedResult } | { ok: false; error: string };

/** Scores the saved answers of a materi's Tantangan Terbuka (peta 9) with AI. */
export async function scoreOpenEndedAction(materi: string): Promise<ScoreActionResult> {
  const userId = await getSessionUserId();
  if (!userId) return { ok: false, error: "Sesi berakhir, silakan login ulang." };

  const config = getOpenEndedConfig(materi);
  if (!config) return { ok: false, error: "Penilaian belum tersedia untuk materi ini." };

  const rows = await getMateriProgress(userId, materi);
  const answers: Record<string, unknown> = {};
  for (const row of rows) {
    if (row.peta === "9" && Number(row.step) <= config.lastAnswerStep) Object.assign(answers, row.answers);
  }

  if (!hasAnyAnswer(config, answers)) {
    return { ok: false, error: "Belum ada jawaban Tantangan Terbuka yang bisa dinilai." };
  }

  try {
    return { ok: true, result: await scoreOpenEndedAnswers(config, answers) };
  } catch {
    return { ok: false, error: "Penilaian AI sedang bermasalah, coba lagi sebentar." };
  }
}
