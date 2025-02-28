import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function ContactPage() {
  const c = useTranslations("Common");
  const t = useTranslations("Contact");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/">{c("homePage")}</Link>
    </div>
  );
}
