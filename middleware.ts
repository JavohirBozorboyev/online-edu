import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  let token = request.cookies.get("_token")?.value;
  let refresh_token = request.cookies.get("_refresh_token")?.value;

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!token || !refresh_token) {
      return NextResponse.rewrite(new URL("/login/signin", request.url));
    }
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
