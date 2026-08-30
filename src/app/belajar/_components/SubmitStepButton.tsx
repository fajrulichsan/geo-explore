"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useFormStatus } from "react-dom";

function isFormValid(form: HTMLFormElement): boolean {
  if (!form.checkValidity()) return false;
  const groups = new Map<string, boolean>();
  form.querySelectorAll<HTMLInputElement>("[data-require-group]").forEach((el) => {
    const key = el.dataset.requireGroup!;
    groups.set(key, (groups.get(key) ?? false) || el.checked);
  });
  return Array.from(groups.values()).every(Boolean);
}

export default function SubmitStepButton({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [valid, setValid] = useState(false);
  const { pending } = useFormStatus();

  useEffect(() => {
    const form = buttonRef.current?.form;
    if (!form) return;
    const update = () => setValid(isFormValid(form));
    update();
    form.addEventListener("input", update);
    form.addEventListener("change", update);
    return () => {
      form.removeEventListener("input", update);
      form.removeEventListener("change", update);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      type="submit"
      disabled={!valid || pending}
      className={`${className} active:scale-95 transition-transform disabled:bg-[#9CA3AF] disabled:shadow-none disabled:cursor-not-allowed disabled:opacity-70`}
    >
      {pending ? (
        <>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="animate-spin">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.4" strokeOpacity="0.25" />
            <path d="M21 12a9 9 0 00-9-9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
          Memproses...
        </>
      ) : (
        children
      )}
    </button>
  );
}
