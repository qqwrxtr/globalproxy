import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEng from './../language/en/translation.json';
import translationsInRussian from './../language/ru/translation.json';

const browserLanguage = navigator.language || navigator.userLanguage;
const lng = browserLanguage.split("-")[0];

const resources = {
  en: {
    translation: translationsInEng
  },
  ru: {
    translation: translationsInRussian
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: lng,
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    ns: "translation",
    defaultNS: "translation"
  });

export default i18n;
