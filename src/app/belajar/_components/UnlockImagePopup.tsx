"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import Image from "next/image";

const COLORS = {
  blue: "bg-primary hover:bg-primary-dark",
  green: "bg-[#16A34A] hover:bg-[#15803D]",
  amber: "bg-[#D97706] hover:bg-[#B45309]",
} as const;

function isFilled(form: HTMLFormElement, name: string) {
  const fields = Array.from(form.querySelectorAll<HTMLInputElement>(`[name="${name}"]`));
  return fields.some((el) =>
    el.type === "checkbox" || el.type === "radio" ? el.checked : el.value.trim() !== "",
  );
}

export function useUnlocked(ref: RefObject<HTMLElement | null>, watch: string[]) {
  const [unlocked, setUnlocked] = useState(false);
  const watchKey = watch.join("|");

  useEffect(() => {
    const form = ref.current?.closest("form");
    if (!form) return;
    const names = watchKey.split("|");
    const update = () => setUnlocked(names.every((name) => isFilled(form, name)));
    update();
    form.addEventListener("input", update);
    form.addEventListener("change", update);
    return () => {
      form.removeEventListener("input", update);
      form.removeEventListener("change", update);
    };
  }, [ref, watchKey]);

  return unlocked;
}

export function UnlockImagePanel({
  letter,
  title,
  lockedTitle,
  lockedText,
  src,
  alt,
  watch,
}: {
  letter: string;
  title: string;
  lockedTitle: string;
  lockedText: string;
  src: string;
  alt: string;
  watch: string[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const unlocked = useUnlocked(ref, watch);

  return (
    <div ref={ref} className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0">
          {letter}
        </div>
        <div className="bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]">
          {title}
        </div>
      </div>
      {unlocked ? (
        <Image src={src} alt={alt} width={1227} height={1282} unoptimized className="h-auto w-full rounded-[24px] border border-[#DBEAFE]" />
      ) : (
        <div className="flex flex-col items-center gap-2 rounded-[24px] border border-dashed border-[#FCA5A5] bg-[#FEF2F2] px-6 py-8 text-center">
          <i className="fa-solid fa-lock text-4xl text-[#D97706]" />
          <p className="m-0 text-base font-extrabold text-[#1E3A8A]">{lockedTitle}</p>
          <p className="m-0 text-sm text-[#4B5563] leading-[1.6]">{lockedText}</p>
          <p className="m-0 mt-2 rounded-xl border border-[#FECACA] bg-white px-4 py-2 text-xs text-[#9F1239]">
            Setelah semua panel di atas terisi, panel ini akan terbuka secara otomatis.
          </p>
        </div>
      )}
    </div>
  );
}

export default function UnlockImagePopup({
  label,
  src,
  alt,
  watch,
  hint,
  color = "blue",
}: {
  label: string;
  src: string;
  alt: string;
  watch: string[];
  hint: string;
  color?: keyof typeof COLORS;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const unlocked = useUnlocked(wrapRef, watch);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div ref={wrapRef} className="flex flex-col items-start gap-2">
      <button
        type="button"
        disabled={!unlocked}
        onClick={() => setOpen(true)}
        className={`w-full sm:w-auto justify-center inline-flex items-center gap-2 ${COLORS[color]} text-white font-bold py-2.5 px-5 rounded-full text-sm active:scale-95 transition-transform disabled:bg-[#9CA3AF] disabled:cursor-not-allowed disabled:opacity-70`}
      >
        <i className={`fa-solid ${unlocked ? "fa-lock-open" : "fa-lock"}`} />
        {label}
      </button>
      {!unlocked && (
        <p className="m-0 flex items-center gap-2 rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-3 py-2 text-xs text-[#9F1239]">
          <i className="fa-solid fa-circle-exclamation" />
          {hint}
        </p>
      )}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={label}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-4"
        >
          <div onClick={(e) => e.stopPropagation()} className="relative my-4 w-full max-w-3xl rounded-[24px] bg-white p-2 shadow-xl">
            <Image
              src={src}
              alt={alt}
              width={1227}
              height={1282}
              unoptimized
              className="h-auto w-full rounded-[20px]"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Tutup"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg font-bold text-[#DC2626] shadow"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
