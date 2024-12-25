import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // デモ用の簡単な認証
        if (
          credentials.username === "test" &&
          credentials.password === "password"
        ) {
          return { name: "test" };
        }
        return null;
      },
    }),
  ],
});
