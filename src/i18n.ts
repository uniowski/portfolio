import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(HttpApi).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'en', supportedLngs: ['pl', 'en'], backend: {
      // Ścieżka do plików JSON (Vite domyślnie serwuje folder public z głównego adresu "/")
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    interpolation: {
      escapeValue: false, // React sam dba o bezpieczeństwo XSS
    },

    // Opcjonalne: ułatwia debugowanie w konsoli przeglądarki podczas developmentu
    debug: import.meta.env.DEV,
  });

export default i18n;