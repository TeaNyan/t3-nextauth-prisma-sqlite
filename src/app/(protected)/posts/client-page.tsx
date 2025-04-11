"use client";

import { useSession } from "next-auth/react";
import { auth } from "~/server/auth";

export const ClientPage = () => {
  const { data: session } = useSession();
  /*   const session = await auth();

  console.log(session); */

  console.log("ClientPage session", session);
  return (
    <div>
      <h1>Client Page</h1>
      <p>This is a client component.</p>

      <h1>{session?.user.name}</h1>
    </div>
  );
};
