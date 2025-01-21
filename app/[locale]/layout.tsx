import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";

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

  return (
    <div className="root-container">
      <NextIntlClientProvider messages={messages}>
        <div className="mx-auto max-w-7xl">
          <Header locale={locale as "en" | "ko"} />
          <div className="mt-20 pb-20">{children}</div>
        </div>
      </NextIntlClientProvider>
    </div>
  );
}
