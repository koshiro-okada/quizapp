import SignOutButton from "@/app/signin/_components/sign_out_button";
import { auth } from "@/auth";

export default async function TopPage() {
  const session = await auth();
  const user = session?.user;
  if (!user) return null;
  return (
    <section>
      <h1>{user.name}</h1>
      <SignOutButton />
    </section>
  );
}
