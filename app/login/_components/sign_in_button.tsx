"use client";

import { signIn } from "@/app/login/actions";

export default function SignInViaLINEButton() {
  return (
    <button
      color="primary"
      onClick={async () => {
        await signIn();
      }}
    >
      LINE でサインイン
    </button>
  );
}
