import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { auth } from "@/auth";

export default createMiddleware(routing);

const intlMiddleware = createMiddleware({
  locales: ["en", "ko"],
  defaultLocale: "ko",
  localePrefix: "as-needed",
});

const protectedPages = ["/library"];
const authPages = ["/sign-up", "/sign-in"];

export async function middleware(request: NextRequest) {
  const session = await auth();
  const { pathname } = request.nextUrl;

  // 보호된 페이지 접근 제어
  if (protectedPages.some((page) => pathname.startsWith(page))) {
    if (!session) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
  }

  // 인증 페이지 접근 제어
  if (authPages.some((page) => pathname.startsWith(page))) {
    if (session) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // next-intl 미들웨어 적용
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/(ko|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
