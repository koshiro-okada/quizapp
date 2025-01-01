import { env } from "@/env";
import { routes } from "@/libs/routes";
import { callbackUrlSchema } from "@/libs/zod_schemas/callback_url";

export const extractRedirectPathFromCallbackUrl = (callbackUrl: unknown) => {
  const parsed = callbackUrlSchema.safeParse(callbackUrl);
  if (parsed.success) {
    return parsed.data.split(env.NEXT_PUBLIC_BASE_URL)[1];
  }
  return routes.signin;
};
