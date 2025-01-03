import { stringResources } from "@/libs/string_resources";
import { auth } from "@/auth";
import SigninMenu from "./signin_menu";

export default async function Header() {
  const session = await auth();
  const user = session?.user;
  return (
    <header className="h-16 p-4 flex justify-between items-center bg-slate-100 border-b">
      <span className="font-bold">{stringResources.systemName}</span>
      <SigninMenu user={user} />
    </header>
  );
}
