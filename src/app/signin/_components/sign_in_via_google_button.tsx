import { signIn } from "@/auth";
import Image from "next/image";

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
      <Image
        src="/assets/google.svg"
        height={40}
        width={183}
        alt="google-signin-button"
      />
    </button>
  );
}
