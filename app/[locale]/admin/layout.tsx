import React, { ReactNode } from "react";
import { auth } from "@/auth";
import { redirect } from "@/i18n/routing";
import { getLocale } from "next-intl/server";

import "@/styles/admin.css";
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  const locale = await getLocale();
  const userId = session?.user?.id;

  if (!userId || typeof userId !== "string") {
    redirect({ href: "/sign-in", locale: locale });
  }

  const isAdmin = await db
    .select({ isAdmin: users.role })
    .from(users)
    .where(eq(users?.id, userId))
    .limit(1)
    .then((res) => res[0]?.isAdmin === "ADMIN");

  if (!isAdmin) redirect({ href: "/", locale: locale });

  return (
    <main className="flex min-h-screen w-full flex-row">
      <Sidebar session={session} />

      <div className="admin-container">
        <Header session={session} />
        {children}
      </div>
    </main>
  );
};
export default Layout;
