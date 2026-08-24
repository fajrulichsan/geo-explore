import type { ComponentType } from "react";
import Step1Amati from "./steps/Step1Amati";
import Step2Berpikir from "./steps/Step2Berpikir";
import Step3IdeAwalku from "./steps/Step3IdeAwalku";

export type StepComponentProps = { materi: string; peta: string };

export const stepRegistry: Record<string, ComponentType<StepComponentProps>> = {
  "1-1-1": Step1Amati,
  "1-1-2": Step2Berpikir,
  "1-1-3": Step3IdeAwalku,
};

export function getStepComponent(materi: string, peta: string, step: string) {
  return stepRegistry[`${materi}-${peta}-${step}`];
}
