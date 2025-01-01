import SignInViaGoogleButton from "@/app/signin/_components/sign_in_via_google_button";
import { extractRedirectPathFromCallbackUrl } from "@/libs/extractRedirectPathFromCallbackUrl";

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const redirectPath = extractRedirectPathFromCallbackUrl(params.callbackUrl);
  return (
    <div>
      <SignInViaGoogleButton redirectTo={redirectPath} />
    </div>
  );
}
