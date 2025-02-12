import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "./settings";
import { lngType } from "@/type";

const initI18next = async (lng: lngType, ns: string | string[]) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: lngType) => import(`./messages/${language}.json`)
      )
    )
    .init(getOptions(lng, ns));
  return i18nInstance;
};

export const useTranslation = async (
  lng: lngType,
  ns: string | string[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any
) => {
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(
      lng,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix
    ),
    i18n: i18nextInstance,
  };
};
