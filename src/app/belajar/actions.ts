"use server";

import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { getSessionUserId } from "@/lib/session";
import { getPetaStructure } from "@/lib/learningStructure";
import { isStepUnlocked } from "@/lib/progress";

/** Reads every `answers.<field>` entry a step form submitted into one JSON object. */
function collectAnswers(formData: FormData): Record<string, unknown> {
  const answers: Record<string, unknown> = {};
  for (const [key, value] of formData.entries()) {
    if (!key.startsWith("answers.") || typeof value !== "string") continue;
    const field = key.slice("answers.".length);
    if (field in answers) {
      const existing = answers[field];
      answers[field] = Array.isArray(existing) ? [...existing, value] : [existing, value];
    } else {
      answers[field] = value;
    }
  }
  return answers;
}

function getNextStepUrl(materi: string, peta: string, step: string): string {
  const structure = getPetaStructure(materi);
  const stepNum = Number(step);
  const totalInPeta = structure[peta] ?? 0;

  if (stepNum < totalInPeta) {
    return `/belajar/${materi}/${peta}/${stepNum + 1}`;
  }

  return `/peta-belajar/${materi}`;
}

export async function submitStepAction(formData: FormData) {
  const materi = String(formData.get("materi") ?? "");
  const peta = String(formData.get("peta") ?? "");
  const step = String(formData.get("step") ?? "");

  const userId = await getSessionUserId();
  if (!userId) redirect("/login");

  if (!(await isStepUnlocked(userId, materi, peta, step))) {
    redirect(`/peta-belajar/${materi}`);
  }

  const answers = collectAnswers(formData);
  const now = new Date().toISOString();

  await supabase.from("user_step_progress").upsert(
    {
      user_id: userId,
      materi,
      peta,
      step,
      status: "selesai",
      answers,
      completed_at: now,
      updated_at: now,
    },
    { onConflict: "user_id,materi,peta,step" }
  );

  redirect(getNextStepUrl(materi, peta, step));
}
