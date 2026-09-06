"use client";

import { useLinkStatus } from "next/link";

export default function ContinueLearningButton({ label }: { label: string }) {
  const { pending } = useLinkStatus();

  return (
    <div className="w-full bg-primary text-white py-2.5 rounded-lg text-sm font-semibold text-center flex items-center justify-center gap-2">
      {pending && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="animate-spin">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.4" strokeOpacity="0.25" />
          <path d="M21 12a9 9 0 00-9-9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      )}
      {label}
    </div>
  );
}
