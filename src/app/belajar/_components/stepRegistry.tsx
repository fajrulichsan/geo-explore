import type { ComponentType } from "react";
import Step1Amati from "./steps/Step1Amati";
import Step2Berpikir from "./steps/Step2Berpikir";
import Step3IdeAwalku from "./steps/Step3IdeAwalku";
import Step4AmatiMedia from "./steps/Step4AmatiMedia";
import Step5PilihMedia from "./steps/Step5PilihMedia";
import Step6TemukanPenuntun from "./steps/Step6TemukanPenuntun";
import Step7SiapBerdiskusi from "./steps/Step7SiapBerdiskusi";
import Peta2Step1Pengelompokan from "./steps/Peta2Step1Pengelompokan";
import Peta2Step2BandingkanDugaan from "./steps/Peta2Step2BandingkanDugaan";
import Peta2Step3PertanyaanDiskusi from "./steps/Peta2Step3PertanyaanDiskusi";
import Peta2Step4RumusanMasalah from "./steps/Peta2Step4RumusanMasalah";

export type StepComponentProps = { materi: string; peta: string };

export const stepRegistry: Record<string, ComponentType<StepComponentProps>> = {
  "1-1-1": Step1Amati,
  "1-1-2": Step2Berpikir,
  "1-1-3": Step3IdeAwalku,
  "1-1-4": Step4AmatiMedia,
  "1-1-5": Step5PilihMedia,
  "1-1-6": Step6TemukanPenuntun,
  "1-1-7": Step7SiapBerdiskusi,
  "1-2-1": Peta2Step1Pengelompokan,
  "1-2-2": Peta2Step2BandingkanDugaan,
  "1-2-3": Peta2Step3PertanyaanDiskusi,
  "1-2-4": Peta2Step4RumusanMasalah,
};

export function getStepComponent(materi: string, peta: string, step: string) {
  return stepRegistry[`${materi}-${peta}-${step}`];
}
