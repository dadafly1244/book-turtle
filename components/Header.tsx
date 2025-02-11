"use client";
import Link from "next/link";
import React from "react";
// import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import { handleSignOut } from "@/lib/actions/auth";

const Header = ({
  locale,
  session,
}: {
  locale: "en" | "ko";
  session: Session;
}) => {
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
        <li>{session?.user?.name}</li>
        <li>
          <form action={handleSignOut} className="mb-10">
            <Button>Logout</Button>
          </form>
        </li>
      </ul>
    </header>
  );
};

export default Header;
