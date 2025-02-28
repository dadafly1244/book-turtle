import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function HomePage() {
  const c = useTranslations("Common");
  const t = useTranslations("ArtistBio");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/">{c("homePage")}</Link>
    </div>
  );
}
