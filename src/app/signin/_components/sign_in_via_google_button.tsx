import { signIn } from "@/auth";

export default function SignInViaGoogleButton() {
  return (
    <button
      onClick={async () => {
        "use server";
        await signIn("google", { redirectTo: "/auth/top" });
      }}
    >
      Google でサインイン
    </button>
  );
}
