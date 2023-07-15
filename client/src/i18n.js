import i18n from "i18next";
import HttpApi from 'i18next-http-backend'
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationEN from "../src/translationEN.json";
import translationDE from "../src/translationHI.json";

const resources = {
  en: {
    translation: translationEN,
  },
  hi: {
    translation: translationDE,
  },
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: ['en', 'hi',],
    fallbackLng: 'en',
    debug: false,
    // Options for language detector
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    react:{useSuspence: false}
  });

export default i18n;
