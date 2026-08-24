import { supabase } from "@/lib/supabase";
import { getPetaStructure, getTotalStepsInStructure } from "@/lib/learningStructure";

export type ProgressRow = {
  peta: string;
  step: string;
  status: "belum" | "selesai";
  answers: Record<string, unknown>;
};

export async function getMateriProgress(userId: string, materi: string): Promise<ProgressRow[]> {
  const { data } = await supabase
    .from("user_step_progress")
    .select("peta, step, status, answers")
    .eq("user_id", userId)
    .eq("materi", materi);
  return data ?? [];
}

export async function isMateriFullyComplete(userId: string, materi: string): Promise<boolean> {
  const structure = getPetaStructure();
  const total = getTotalStepsInStructure(structure);
  if (total === 0) return false;
  const rows = await getMateriProgress(userId, materi);
  const done = rows.filter((r) => r.status === "selesai").length;
  return done >= total;
}

/** Materi are unlocked in order: materi N needs materi N-1 fully completed. */
export async function isMateriUnlocked(userId: string, materi: string): Promise<boolean> {
  const materiNum = Number(materi);
  if (!Number.isFinite(materiNum) || materiNum <= 1) return true;
  return isMateriFullyComplete(userId, String(materiNum - 1));
}

/** Enforced server-side so a step can't be reached by guessing the URL. */
export async function isStepUnlocked(
  userId: string,
  materi: string,
  peta: string,
  step: string
): Promise<boolean> {
  const structure = getPetaStructure();
  const totalStepsInPeta = structure[peta];
  const stepNum = Number(step);
  const petaNum = Number(peta);

  if (!totalStepsInPeta || !Number.isFinite(stepNum) || stepNum < 1 || stepNum > totalStepsInPeta) {
    return false;
  }

  if (!(await isMateriUnlocked(userId, materi))) return false;

  if (petaNum === 1 && stepNum === 1) return true;

  const rows = await getMateriProgress(userId, materi);
  const done = new Set(rows.filter((r) => r.status === "selesai").map((r) => `${r.peta}-${r.step}`));

  if (stepNum === 1) {
    const prevPeta = String(petaNum - 1);
    const prevTotal = structure[prevPeta];
    if (!prevTotal) return false;
    for (let s = 1; s <= prevTotal; s++) {
      if (!done.has(`${prevPeta}-${s}`)) return false;
    }
    return true;
  }

  return done.has(`${peta}-${stepNum - 1}`);
}
