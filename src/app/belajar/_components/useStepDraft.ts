"use client";

import { useEffect, type RefObject } from "react";
import { useStepDraftKey } from "./StepDraftProvider";

const FIELD_PREFIX = "answers.";
const SAVE_DELAY_MS = 400;

type Draft = Record<string, string[]>;
type Field = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

function isToggle(el: Field): el is HTMLInputElement {
  return el instanceof HTMLInputElement && (el.type === "radio" || el.type === "checkbox");
}

// Hidden/file inputs are driven by React state or uploads, so DOM-level restore would be wrong for them.
function getFields(form: HTMLFormElement): Field[] {
  return Array.from(form.elements).filter((el): el is Field => {
    if (!(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement || el instanceof HTMLSelectElement)) {
      return false;
    }
    if (!el.name.startsWith(FIELD_PREFIX)) return false;
    return !(el instanceof HTMLInputElement && ["hidden", "file", "submit", "button"].includes(el.type));
  });
}

function readForm(form: HTMLFormElement): Draft {
  const draft: Draft = {};
  for (const el of getFields(form)) {
    const values = (draft[el.name] ??= []);
    if (isToggle(el)) {
      if (el.checked) values.push(el.value);
    } else {
      values.push(el.value);
    }
  }
  return draft;
}

function applyDraft(form: HTMLFormElement, draft: Draft) {
  const used = new Map<string, number>();
  for (const el of getFields(form)) {
    const values = draft[el.name];
    if (!Array.isArray(values)) continue;
    if (isToggle(el)) {
      el.checked = values.includes(el.value);
    } else {
      const i = used.get(el.name) ?? 0;
      used.set(el.name, i + 1);
      el.value = typeof values[i] === "string" ? values[i] : "";
    }
  }
}

/** Keeps a step form's unsaved answers in localStorage so leaving the page doesn't lose them. */
export function useStepDraft(buttonRef: RefObject<HTMLButtonElement | null>) {
  const storageKey = useStepDraftKey();

  useEffect(() => {
    const form = buttonRef.current?.form;
    if (!form || !storageKey) return;

    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        applyDraft(form, JSON.parse(raw) as Draft);
        // Lets SubmitStepButton re-run its validity check on the restored values.
        form.dispatchEvent(new Event("input", { bubbles: true }));
      }
    } catch {}

    let dirty = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const flush = () => {
      clearTimeout(timer);
      if (!dirty) return;
      dirty = false;
      try {
        localStorage.setItem(storageKey, JSON.stringify(readForm(form)));
      } catch {}
    };
    const schedule = () => {
      dirty = true;
      clearTimeout(timer);
      timer = setTimeout(flush, SAVE_DELAY_MS);
    };

    form.addEventListener("input", schedule);
    form.addEventListener("change", schedule);
    window.addEventListener("pagehide", flush);
    return () => {
      form.removeEventListener("input", schedule);
      form.removeEventListener("change", schedule);
      window.removeEventListener("pagehide", flush);
      flush();
    };
  }, [buttonRef, storageKey]);
}
