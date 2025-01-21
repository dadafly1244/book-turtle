import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const IndexPage = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("IndexPage");

  return (
    <div className="root-container">
      {t("title")}
      <BookList />
      <BookOverview />
    </div>
  );
};
export default IndexPage;
