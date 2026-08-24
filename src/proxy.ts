import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SESSION_COOKIE } from "@/lib/session";

const GEOGEBRA_HOST = "geogebra.geo-explore.my.id";
const PROTECTED_PATHS = ["/dashboard", "/petunjuk-1", "/petunjuk-2"];

export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host") ?? "";
  const pathname = request.nextUrl.pathname;

  // Requests arriving at the geogebra subdomain are served from /geogebra/*
  // internally, so the subdomain never has to know about the app's route layout.
  if (hostname === GEOGEBRA_HOST) {
    if (!pathname.startsWith("/geogebra")) {
      const url = request.nextUrl.clone();
      url.pathname = `/geogebra${pathname === "/" ? "" : pathname}`;
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  const isProtected = PROTECTED_PATHS.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );
  if (isProtected) {
    const uid = request.cookies.get(SESSION_COOKIE)?.value;
    if (!uid) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/petunjuk-1",
    "/petunjuk-2",
    "/((?!_next|api|favicon.ico).*)",
  ],
};
