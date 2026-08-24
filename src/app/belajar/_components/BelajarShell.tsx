import type { ReactNode } from "react";

export default function BelajarShell({ children }: { children: ReactNode }) {
  return (
    <div
      className="font-[family-name:var(--font-plus-jakarta-sans)] min-h-screen relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg,#EEF2FF 0%,#F3F4F6 340px,#F3F4F6 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          backgroundImage: "radial-gradient(#D7DEEA 1.2px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        className="absolute -top-[90px] -right-[70px] w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,#DCE6FB 0%,transparent 70%)" }}
      />
      <div
        className="absolute -bottom-[110px] -left-[90px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,#FDF0C6 0%,transparent 70%)" }}
      />

      <svg
        width="170"
        height="170"
        viewBox="0 0 100 100"
        fill="none"
        stroke="#2563EB"
        strokeWidth="1.3"
        className="absolute top-[90px] -left-10 opacity-[0.18] pointer-events-none"
        style={{ transform: "rotate(-8deg)" }}
      >
        <path d="M50 8 L86 27 L50 46 L14 27 Z" />
        <path d="M14 27 L50 46 L50 92 L14 73 Z" />
        <path d="M50 46 L86 27 L86 73 L50 92 Z" />
      </svg>
      <svg
        width="130"
        height="130"
        viewBox="0 0 100 100"
        fill="none"
        stroke="#D97706"
        strokeWidth="1.3"
        className="absolute top-[200px] right-[26px] opacity-[0.16] pointer-events-none"
        style={{ transform: "rotate(6deg)" }}
      >
        <circle cx="50" cy="50" r="38" />
        <ellipse cx="50" cy="50" rx="38" ry="13" />
        <ellipse cx="50" cy="50" rx="13" ry="38" />
      </svg>
      <svg
        width="150"
        height="150"
        viewBox="0 0 100 100"
        fill="none"
        stroke="#2563EB"
        strokeWidth="1.3"
        className="absolute bottom-[140px] left-[50px] opacity-[0.14] pointer-events-none"
        style={{ transform: "rotate(4deg)" }}
      >
        <ellipse cx="50" cy="22" rx="34" ry="10" />
        <ellipse cx="50" cy="78" rx="34" ry="10" />
        <path d="M16 22 L16 78 M84 22 L84 78" />
      </svg>
      <svg
        width="160"
        height="160"
        viewBox="0 0 100 100"
        fill="none"
        stroke="#D97706"
        strokeWidth="1.3"
        className="absolute bottom-[30px] -right-[50px] opacity-[0.18] pointer-events-none"
        style={{ transform: "rotate(-5deg)" }}
      >
        <path d="M50 8 L12 82 L88 82 Z" />
        <path d="M50 8 L50 82" />
        <path d="M12 82 L50 58 L88 82" />
      </svg>

      <div className="relative z-[1]">
        <nav className="h-[72px] bg-white border-b border-[#E5E7EB] flex items-center justify-between px-8">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-[9px] bg-[#1E3A8A] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <span className="font-extrabold text-lg text-[#111827]">Geometrika</span>
            </div>
            <div className="flex items-center gap-7 text-sm font-semibold">
              <span className="text-[#2563EB] border-b-2 border-[#2563EB] pb-6">Modul</span>
              <span className="text-[#6B7280]">Aktivitas</span>
              <span className="text-[#6B7280]">Progres</span>
              <span className="text-[#6B7280]">Bantuan</span>
            </div>
          </div>
          <div className="flex items-center gap-[18px]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2">
              <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.7 21a2 2 0 01-3.4 0" />
            </svg>
            <div className="w-8 h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm">
              S
            </div>
          </div>
        </nav>

        <div className="flex justify-center px-8 pt-10 pb-20">
          <div className="w-full max-w-[1040px] py-6 px-2 pb-12 flex flex-col gap-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
