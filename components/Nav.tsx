import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import LocaleSwitcher from "./LocalesSwitcher";

const Nav = () => {
  const t = useTranslations("Nav");

  return (
    <nav>
      <Link href="/">{t("homePage")}</Link>
      <Link href="/artist-bio">{t("artistBio")}</Link>
      <Link href="/artworks">{t("artworks")}</Link>
      <Link href="/exhibitions">{t("exhibitions")}</Link>
      <Link href="/shop">{t("shop")}</Link>
      <Link href="/contact">{t("contact")}</Link>
      <Link href="/reviews">{t("reviews")}</Link>
      <LocaleSwitcher />
    </nav>
  );
};

export default Nav;

/**
 홈 (Home)
홈페이지의 첫 화면으로, 간략한 소개와 예술가의 작품 일부를 미리 보여줍니다.
슬라이드 쇼나 대표 작품을 배경으로 사용하는 것도 좋은 방법입니다.
예술가 소개 (Artist Bio)

예술가의 생애, 경력, 철학, 영감 등을 상세히 소개합니다.
예술가의 사진과 함께 중요한 이정표나 전시회 이력 등을 넣을 수 있습니다.
작품 갤러리 (Gallery)

예술가의 작품을 카테고리별로 나누어 전시합니다.
각 작품에 대한 설명, 크기, 재료, 영감 등을 추가하여 관람객이 작품을 이해할 수 있도록 돕습니다.
작품을 클릭 시 확대된 이미지와 세부 정보를 보여주는 방식으로 구성합니다.
작품 목록 (Artworks)

작품을 나열한 리스트로, 작품의 제목과 간략한 설명을 포함할 수 있습니다.
여기서 각 작품의 세부 페이지로 이동할 수 있도록 링크를 제공하는 형태입니다.
검색 기능을 추가하여 작품을 쉽게 찾을 수 있게 할 수도 있습니다.
전시회 (Exhibitions)

예술가의 과거 및 예정된 전시회, 이벤트 등을 나열합니다.
각 전시회의 날짜, 장소, 개요 등을 포함하여 방문자가 전시회에 대해 쉽게 정보를 얻을 수 있도록 합니다.
뉴스/블로그 (News/Blog)

예술가의 최근 활동, 인터뷰, 미디어 기사를 게시하는 공간입니다.
예술가의 새로운 작품 발표나 인터뷰 등도 여기에 포함할 수 있습니다.
구매 (Shop)

예술 작품의 판매 또는 리미티드 에디션 제품을 판매하는 페이지입니다.
작품을 구매하고자 하는 방문자를 위한 온라인 상점 기능을 추가할 수 있습니다.
연락처 (Contact)

예술가와 연락을 원하는 사람들을 위한 정보입니다.
이메일, 전화번호, 또는 소셜 미디어 링크 등을 제공할 수 있습니다.
미디어 (Media)

예술가의 인터뷰 영상, 전시회 현장 사진, 작품에 대한 비디오 등을 포함할 수 있는 섹션입니다.
예술가의 미디어 커버리지를 보여주는 공간으로 활용할 수 있습니다.
후기 (Reviews)

작품에 대한 관람객의 리뷰나 전문가의 평을 모아 놓은 페이지입니다.
작품에 대한 다양한 반응을 보여주는 중요한 섹션이 될 수 있습니다.

 */
