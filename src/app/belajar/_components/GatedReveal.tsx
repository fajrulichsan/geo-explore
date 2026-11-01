"use client";

import { useRef, useState, type ReactNode } from "react";
import { useUnlocked } from "./UnlockImagePopup";

export default function GatedReveal({
  label,
  hint,
  lockedHint,
  watch,
  children,
}: {
  label: string;
  hint: string;
  lockedHint: string;
  watch: string[];
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const unlocked = useUnlocked(ref, watch);
  const [open, setOpen] = useState(false);
  const shown = unlocked && open;

  return (
    <div ref={ref} className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[20px] p-4 flex flex-col items-center gap-1">
      <button
        type="button"
        disabled={!unlocked}
        onClick={() => setOpen((v) => !v)}
        className={`rounded-full text-white px-5 py-2 text-sm font-bold disabled:bg-[#9CA3AF] disabled:cursor-not-allowed ${shown ? "bg-[#6B7280]" : "bg-[#2563EB]"}`}
      >
        {label}
      </button>
      <span className="text-xs text-[#6B7280] text-center">{unlocked ? hint : lockedHint}</span>
      {shown && <div className="mt-4 w-full">{children}</div>}
    </div>
  );
}
