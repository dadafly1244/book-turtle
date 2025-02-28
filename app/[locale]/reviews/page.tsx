import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function ReviewPage() {
  const c = useTranslations("Common");
  const t = useTranslations("Reviews");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/">{c("homePage")}</Link>
    </div>
  );
}
