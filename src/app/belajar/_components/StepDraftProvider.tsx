"use client";

import { createContext, useContext, type ReactNode } from "react";

const StepDraftKeyContext = createContext<string | null>(null);

export function StepDraftProvider({
  storageKey,
  children,
}: {
  storageKey: string | null;
  children: ReactNode;
}) {
  return <StepDraftKeyContext.Provider value={storageKey}>{children}</StepDraftKeyContext.Provider>;
}

export function useStepDraftKey(): string | null {
  return useContext(StepDraftKeyContext);
}
