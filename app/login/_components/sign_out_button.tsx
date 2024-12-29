"use client";

import { signOut } from "@/app/login/actions";

export default function SignOutButton() {
  return (
    <button
      color="primary"
      onClick={async () => {
        await signOut();
      }}
    >
      サインアウト
    </button>
  );
}
