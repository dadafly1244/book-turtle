import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import LocaleSwitcher from "./LocalesSwitcher";

const Nav = () => {
  const t = useTranslations("Nav");

  return (
    <nav>
      <Link href="/">{t("homePage")}</Link>
      <Link href="/about">{t("about")}</Link>
      <Link href="/about">{t("about")}</Link>
      <Link href="/about">{t("about")}</Link>
      <LocaleSwitcher />
    </nav>
  );
};

export default Nav;
