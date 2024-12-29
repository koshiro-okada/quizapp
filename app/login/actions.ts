"use server";

import { signIn as _signIn, signOut as _signOut, auth } from "@/auth";

export const signIn = async () => {
  await _signIn("line", { redirectTo: "/auth/top" });
};

export const signOut = async () => {
  await _signOut();
};
