import Link from "next/link";
import { logoutAction } from "@/app/actions";

type NavbarProps = {
  userName: string;
};

export default function Navbar({ userName }: NavbarProps) {
  return (
    <header className="relative z-10 max-w-6xl mx-auto w-full flex items-center justify-between pt-6 px-4">
      <Link href="/dashboard" className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-lg">category</span>
        </div>
        <span className="font-bold text-slate-900 hidden sm:inline">Geo Explore</span>
      </Link>

      <div className="flex items-center gap-4">
        <span className="text-sm font-semibold text-slate-700 truncate max-w-[140px] sm:max-w-none">
          {userName}
        </span>
        <form action={logoutAction}>
          <button
            type="submit"
            className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-base">logout</span>
            <span className="hidden sm:inline">Keluar</span>
          </button>
        </form>
      </div>
    </header>
  );
}
