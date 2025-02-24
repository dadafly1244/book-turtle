"use client";
import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { MouseEvent, useTransition } from "react";
import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/button";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function handleClickButton(event: MouseEvent<HTMLButtonElement>) {
    const nextLocale = (event.target as HTMLButtonElement).value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <>
      {routing.locales.map((cur) => {
        if (locale !== cur) {
          return (
            <Button
              variant="outline"
              key={cur}
              disabled={isPending}
              value={cur}
              onClick={handleClickButton}
            >
              {t(cur)}
            </Button>
          );
        }
      })}
    </>
  );
}
