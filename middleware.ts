import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    if (
      req.nextUrl.pathname.startsWith("/admin") &&
      !req.nextUrl.pathname.startsWith("/login")
    ) {
      if (!req.nextauth.token?.isAdmin) {
        return NextResponse.redirect(new URL("/login", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        if (req.nextUrl.pathname === "/login") {
          return true;
        }

        if (req.nextUrl.pathname.startsWith("/admin")) {
          return !!token;
        }

        if (
          req.nextUrl.pathname.startsWith("/api/products") ||
          req.nextUrl.pathname.startsWith("/api/upload")
        ) {
          return !!token;
        }

        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/login", "/admin/:path*", "/api/upload"],
};
