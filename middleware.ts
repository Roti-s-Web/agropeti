import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // Check if user is admin for admin routes
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
        // Allow access to login page without token
        if (req.nextUrl.pathname === "/login") {
          return true;
        }

        // For admin routes, require token
        if (req.nextUrl.pathname.startsWith("/admin")) {
          return !!token;
        }

        // For API routes that require auth
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
  matcher: ["/login", "/admin/:path*", "/api/products/:path*", "/api/upload"],
};
