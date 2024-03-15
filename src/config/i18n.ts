import * as i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationSP from '../locales/es.json';
import translationENG from '../locales/en.json';
import translationFR from '../locales/fr.json';
import { EnFlag, FrFlag, SpFlag } from '../assets/imgs/shared/flagsLanguage';

// the translations
export const resources: i18n.Resource = {
  sp: {
    translation: translationSP,
    flag: SpFlag,
  },
  en: {
    translation: translationENG,
    flag: EnFlag,
  },
  fr: {
    translation: translationFR,
    flag: FrFlag,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: false,
    resources,
    lng: localStorage.getItem('i18nextLng') || 'en',
    fallbackLng: 'en', // use en if detected lng is not available
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
