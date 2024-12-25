"use server";

import { signIn as _signIn, auth } from "../../auth";
import { isRedirectError } from "next/dist/client/components/redirect";

export type SignInState = {
  success?: boolean;
};
export const signIn = async (
  currentState: SignInState,
  formData: FormData
): Promise<SignInState> => {
  const username = formData.get("username");
  const password = formData.get("password");
  const redirectTo = (formData.get("callbackUrl") as string) ?? "/auth/top";

  try {
    await _signIn("credentials", {
      username,
      password,
      redirect: true,
      redirectTo: redirectTo,
    });
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { success: false };
  }

  return { success: true };
};
