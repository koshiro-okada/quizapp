"use server";

import { signIn as _signIn, auth } from "@/auth";

export const signIn = async () => {
  await _signIn("line", { redirectTo: "/auth/top" });
};
