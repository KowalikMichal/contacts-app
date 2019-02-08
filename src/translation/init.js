import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";

import translationEN from './translationEN';
import translationPL from './translationPL';

// the translations
const initializeTranslation = () => {
  // the translations
  const resources = {
    en: {
      translation: translationEN
    },
    pl: {
      translation: translationPL
    }
  };

  i18n
    // load translation using xhr -> see /public/locales
    // learn more: https://github.com/i18next/i18next-xhr-backend
    //
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    .use(Backend)
    // pass the i18n instance to the react-i18next components.
    // Alternative use the I18nextProvider: https://react.i18next.com/components/i18nextprovider
    .use(reactI18nextModule)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
      resources,
      fallbackLng: "en", // use en if detected lng is not available
      debug: false,

      interpolation: {
        escapeValue: false // not needed for react as it escapes by default
      },

      // special options for react-i18next
      // learn more: https://react.i18next.com/components/i18next-instance
      react: {
        wait: true
      }
    });
};

export default initializeTranslation;