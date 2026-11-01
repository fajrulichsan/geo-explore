"use client";

import { useEffect, useState, type ReactNode } from "react";

export default function FinishPopup({
  label,
  showInline,
  children,
}: {
  label: string;
  showInline?: boolean;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (showInline) return <div className="flex flex-col gap-6">{children}</div>;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold py-2.5 md:py-3 px-5 md:px-6 rounded-full text-sm md:text-base active:scale-95 transition-transform group"
      >
        <span>{label}</span>
        <i className="fa-solid fa-check" />
      </button>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={label}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-4"
        >
          <div onClick={(e) => e.stopPropagation()} className="relative my-4 flex w-full max-w-4xl flex-col gap-4 rounded-[24px] bg-white p-4 sm:p-6 shadow-xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Tutup"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg font-bold text-[#DC2626] shadow"
            >
              <i className="fa-solid fa-xmark" />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
