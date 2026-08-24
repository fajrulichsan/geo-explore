"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

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
      disabled={!valid}
      className={`${className} disabled:bg-[#9CA3AF] disabled:shadow-none disabled:cursor-not-allowed disabled:opacity-70`}
    >
      {children}
    </button>
  );
}
