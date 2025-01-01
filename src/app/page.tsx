import SignOutButton from "@/app/signin/_components/sign_out_button";
import { auth } from "@/auth";

export default async function TopPage() {
  const session = await auth();
  const user = session?.user;
  if (!user) return null;
  return (
    <section>
      <span>{JSON.stringify(user, null, 2)}</span>
      <SignOutButton />
    </section>
  );
}
