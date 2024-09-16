import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// eslint-disable-next-line no-undef
const isDev = process.env.NODE_ENV === "development";

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "en",
    supportedLngs: ["en", "ru"],
    interpolation: {
      escapeValue: false,
    },
    ns: "translation",
    defaultNS: "translation",
    detection: {
      cookieDomain: isDev ? "localhost" : "globalproxy.org",
      caches: ["cookie"],
    },
  });

export default i18n;
