import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";
import Line from "next-auth/providers/line";

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [
    Line({
      clientId: process.env.AUTH_LINE_ID,
      clientSecret: process.env.AUTH_LINE_SECRET,
      checks: ["state"],
    }),
  ],
});
