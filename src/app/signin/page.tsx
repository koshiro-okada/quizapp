import SignInViaGoogleButton from "@/app/signin/_components/sign_in_via_google_button";
import { extractRedirectPathFromCallbackUrl } from "@/libs/extractRedirectPathFromCallbackUrl";
import { stringResources } from "@/libs/string_resources";
import { isStringObject } from "util/types";

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const redirectPath = extractRedirectPathFromCallbackUrl(params.callbackUrl);
  return (
    <div>
      <div className="flex flex-col items-center gap-4 rounded-md border p-4 m-4">
        <h1 className="font-bold">{stringResources.systemName}</h1>
        <span>{stringResources.signInWithGoogle}</span>
        <SignInViaGoogleButton redirectTo={redirectPath} />
      </div>
    </div>
  );
}
