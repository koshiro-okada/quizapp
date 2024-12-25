"use client";

import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useActionState, useEffect } from "react";
import { signIn } from "../actions";
import { useSearchParams } from "next/navigation";

export default function SignInForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/auth/top";
  const [formState, formAction] = useActionState(signIn, undefined);
  return (
    <form action={formAction} className="flex flex-col p-4 gap-4">
      <Input name="username" label="username" type="text"></Input>
      <Input name="password" label="password" type="password"></Input>
      <input name="callbackUrl" type="hidden" value={callbackUrl} />
      <Button type="submit" color="primary">
        Sign In
      </Button>
    </form>
  );
}
