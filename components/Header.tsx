"use client";
import Link from "next/link";
import React from "react";
// import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = ({ locale }: { locale: "en" | "ko" }) => {
  const pathname = usePathname();
  const t = useTranslations("Header");
  console.log(pathname);
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href={`/${locale}`}>
        <Image
          src={"/logo.png"}
          alt="logo"
          width="0"
          height="0"
          sizes="40px"
          className="w-full h-auto"
        />
        <span className="hidden">{t("logo")}</span>
      </Link>
      <ul className="flex flex-row items-center gap-8">
        <Link href={`/${locale}/library`}>{t("library")}</Link>
      </ul>
    </header>
  );
};

export default Header;
