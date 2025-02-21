import { create } from "zustand";

type langType = "ko" | "en" | string;

export const useLangStore = create<{
  lang: langType;
  switchLang: (lang: langType) => void;
}>((set) => ({
  lang: "ko",
  switchLang: (newLang: langType) => set({ lang: newLang }),
}));
