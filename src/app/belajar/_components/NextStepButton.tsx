import type { ReactNode } from "react";
import SubmitStepButton from "./SubmitStepButton";

const VARIANTS = {
  blue: "bg-primary hover:bg-primary-dark",
  green: "bg-[#16A34A] hover:bg-[#15803D]",
} as const;

const ICONS = {
  arrow: "fa-arrow-right-long",
  check: "fa-check",
} as const;

export default function NextStepButton({
  children = "Lanjutkan",
  variant = "blue",
  icon = "arrow",
}: {
  children?: ReactNode;
  variant?: keyof typeof VARIANTS;
  icon?: keyof typeof ICONS;
}) {
  return (
    <SubmitStepButton
      className={`w-full sm:w-auto justify-center inline-flex items-center gap-2 ${VARIANTS[variant]} text-white font-bold py-2.5 md:py-3 px-5 md:px-6 rounded-full text-sm md:text-base group`}
    >
      <span>{children}</span>
      <i className={`fa-solid ${ICONS[icon]} group-hover:translate-x-2 transition-transform`} />
    </SubmitStepButton>
  );
}
