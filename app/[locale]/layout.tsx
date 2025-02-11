import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound, redirect } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import { auth } from "@/auth";
import { after } from "next/server";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en" | "ko")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  const session = await auth();

  if (!session) redirect("/sign-in");
  after(async () => {
    if (!session?.user?.id) return;

    const user = await db
      .select()
      .from(users)
      .where(eq(users.id, session?.user?.id))
      .limit(1);

    if (user[0].lastActivityDate === new Date().toISOString().slice(0, 10))
      return;

    await db
      .update(users)
      .set({ lastActivityDate: new Date().toISOString().slice(0, 10) })
      .where(eq(users.id, session?.user?.id));
  });
  return (
    <div className="root-container">
      <NextIntlClientProvider messages={messages}>
        <div className="mx-auto max-w-7xl">
          <Header locale={locale as "en" | "ko"} session={session} />
          <div className="mt-20 pb-20">{children}</div>
        </div>
      </NextIntlClientProvider>
    </div>
  );
}
