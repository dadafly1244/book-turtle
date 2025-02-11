import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { auth } from "@/auth";

const intlMiddleware = createMiddleware(routing);

const publicPages = ["/auth/sign-in", "/auth/sign-up"];
const protectedPages = ["/library", "/admin", "/my-profile"];

export async function middleware(request: NextRequest) {
  const session = await auth();
  const { pathname } = request.nextUrl;

  // i18n 미들웨어를 먼저 실행
  const response = await intlMiddleware(request);

  // locale이 포함된 실제 pathname 얻기
  const pathnameWithLocale = response.headers.get("x-pathname") || pathname;
  const pathnameWithoutLocale = pathnameWithLocale.replace(/^\/(?:ko|en)/, "");

  // 1. 공개 페이지 (로그인/회원가입) 체크
  if (publicPages.some((page) => pathnameWithoutLocale.startsWith(page))) {
    if (session) {
      // 이미 로그인된 경우 홈으로
      return NextResponse.redirect(new URL("/", request.url));
    }
    return response;
  }

  // 2. 보호된 페이지 체크
  if (protectedPages.some((page) => pathnameWithoutLocale.startsWith(page))) {
    if (!session) {
      // 로그인이 필요한 경우
      const signInUrl = new URL("/auth/sign-in", request.url);
      return NextResponse.redirect(signInUrl);
    }
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
