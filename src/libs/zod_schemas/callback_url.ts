import { env } from "@/env";
import { z } from "zod";

export const callbackUrlSchema = z
  .string()
  .startsWith(env.NEXT_PUBLIC_BASE_URL);
