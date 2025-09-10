import { NextRequest, NextResponse } from "next/server";
const WHITE_LISTED_REGEX = [
  /^\/$/,
  /^\/auth\/login$/,
  /^\/project\/[^/]+(?:\/.*)?$/,
];

export default function authMiddleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("accessToken");
  const isWhiteListed = WHITE_LISTED_REGEX.some((regex) =>
    regex.test(pathname)
  );
  if (request.nextUrl.pathname.startsWith("/_next")) {
    return NextResponse.next();
  }
  if (isWhiteListed) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"], // Run middleware on all routes
};
