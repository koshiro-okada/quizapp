"use client";

import { signIn } from "@/app/login/actions";

export default function SignInButton() {
  return (
    <button
      color="primary"
      onClick={async () => {
        await signIn();
      }}
    >
      サインイン
    </button>
  );
}
