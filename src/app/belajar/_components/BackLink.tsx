"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

const DEFAULT_CLASS =
  "w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-white text-[#374151] border border-[#c3c6d6] rounded-full py-2.5 md:py-3 px-5 md:px-6 text-sm md:text-base font-bold cursor-pointer hover:bg-[#f2f4f6]";

export default function BackLink({ href, className = DEFAULT_CLASS }: { href: string; className?: string }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() => startTransition(() => router.push(href))}
      className={`${className} active:scale-95 disabled:opacity-60 disabled:cursor-wait transition-transform`}
    >
      {isPending ? (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="animate-spin">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.4" strokeOpacity="0.25" />
          <path d="M21 12a9 9 0 00-9-9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
          <path d="M19 12H5M11 5l-7 7 7 7" />
        </svg>
      )}
      {isPending ? "Memuat..." : "Kembali"}
    </button>
  );
}
