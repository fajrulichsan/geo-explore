import type { ReactNode } from "react";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";

export default function BelajarShell({
  children,
  userName,
}: {
  children: ReactNode;
  userName: string;
}) {
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

      <div className="relative z-[1] flex flex-col min-h-screen">
        <Navbar userName={userName} />

        <div className="flex justify-center px-8 pt-10 pb-20 flex-1">
          <div className="w-full max-w-[1040px] py-6 px-2 pb-12 flex flex-col gap-8">{children}</div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
