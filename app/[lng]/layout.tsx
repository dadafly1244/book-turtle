import { lngType } from "@/type";
import { dir } from "i18next";
import { ReactNode } from "react";
import { languages } from "@/i18n/settings";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

interface Props {
  children: ReactNode;
  params: { lng: lngType };
}
const RootLayout = async ({ children, params }: Props) => {
  const { lng } = await params;
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
