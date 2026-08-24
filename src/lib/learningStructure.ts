import { stepRegistry } from "@/app/belajar/_components/stepRegistry";

export const TOTAL_MATERI = 8;

/** Every materi shares the same peta/step layout — only the content differs. */
export function getPetaStructure(): Record<string, number> {
  const structure: Record<string, number> = {};
  for (const key of Object.keys(stepRegistry)) {
    const [, peta, step] = key.split("-");
    const stepNum = Number(step);
    structure[peta] = Math.max(structure[peta] ?? 0, stepNum);
  }
  return structure;
}

export function getPetaOrder(structure: Record<string, number>): string[] {
  return Object.keys(structure).sort((a, b) => Number(a) - Number(b));
}

export function getTotalStepsInStructure(structure: Record<string, number>): number {
  return Object.values(structure).reduce((sum, n) => sum + n, 0);
}
