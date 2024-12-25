import type { NextAuthConfig } from "next-auth";
import { NextResponse } from "next/server";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnLoginPage = nextUrl.pathname.startsWith("/login");
      if (isOnLoginPage && isLoggedIn) {
        return NextResponse.redirect(new URL("/auth/top", nextUrl));
      }
      return isLoggedIn;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
