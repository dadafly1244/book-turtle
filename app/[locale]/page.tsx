import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Nav from "@/components/Nav";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Nav />
      <Link href="/about">{t("about")}</Link>
    </div>
  );
}
