import { signIn } from "@/auth";

export default function SignInViaGoogleButton({
  redirectTo,
}: {
  redirectTo: string;
}) {
  return (
    <button
      onClick={async () => {
        "use server";
        await signIn("google", { redirectTo });
      }}
    >
      Google でサインイン
    </button>
  );
}
