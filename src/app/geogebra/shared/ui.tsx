import type { ReactNode } from "react";

export function StageTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-base font-bold text-gray-900">{children}</h2>;
}

export function Prompt({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-sm font-medium text-sky-900">
      {children}
    </p>
  );
}

export function Hint({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
      {children}
    </p>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return <p className="text-sm text-gray-700">{children}</p>;
}

export function Btn({
  children,
  onClick,
  variant = "secondary",
  disabled,
}: {
  children: ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}) {
  const tone =
    variant === "primary"
      ? "bg-[#2563EB] text-white hover:bg-[#1D4ED8]"
      : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`rounded-lg px-3 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${tone}`}
    >
      {children}
    </button>
  );
}

export function BtnRow({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap gap-2">{children}</div>;
}
