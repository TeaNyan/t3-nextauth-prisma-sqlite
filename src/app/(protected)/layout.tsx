import { auth } from "~/server/auth";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();

  if (!session?.user) {
    redirect("api/auth/signin");
  }

  return <>{children}</>;
}
