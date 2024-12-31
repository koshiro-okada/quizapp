import { signOut } from "@/auth";

export default function SignOutButton() {
  return (
    <button
      onClick={async () => {
        "use server";
        await signOut({ redirectTo: "/signin" });
      }}
    >
      サインアウト
    </button>
  );
}
