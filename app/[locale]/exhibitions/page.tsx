import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function ExhibitionsPage() {
  const c = useTranslations("Common");
  const t = useTranslations("Exhibition");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/">{c("homePage")}</Link>
    </div>
  );
}
