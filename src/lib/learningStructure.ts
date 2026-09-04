import { stepRegistry } from "@/app/belajar/_components/stepRegistry";

export const TOTAL_MATERI = 8;

/**
 * Materi generally share the same peta/step layout, but a materi may define fewer (or more)
 * steps for a given peta than the others — e.g. a peta with genuinely different content. When
 * `materi` is given, its own step count wins for any peta it defines; petas it hasn't built yet
 * fall back to the global (cross-materi) count so the roadmap can still show them as locked.
 */
export function getPetaStructure(materi?: string): Record<string, number> {
  const global: Record<string, number> = {};
  const perMateri: Record<string, Record<string, number>> = {};
  for (const key of Object.keys(stepRegistry)) {
    const [m, peta, step] = key.split("-");
    const stepNum = Number(step);
    global[peta] = Math.max(global[peta] ?? 0, stepNum);
    (perMateri[m] ??= {})[peta] = Math.max(perMateri[m][peta] ?? 0, stepNum);
  }

  if (!materi) return global;

  const structure: Record<string, number> = {};
  for (const peta of Object.keys(global)) {
    structure[peta] = perMateri[materi]?.[peta] ?? global[peta];
  }
  return structure;
}

export function getPetaOrder(structure: Record<string, number>): string[] {
  return Object.keys(structure).sort((a, b) => Number(a) - Number(b));
}

export function getTotalStepsInStructure(structure: Record<string, number>): number {
  return Object.values(structure).reduce((sum, n) => sum + n, 0);
}
