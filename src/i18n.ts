import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Chargement des fichiers JSON
  .use(LanguageDetector) // Détection automatique de la langue
  .use(initReactI18next) // Intégration avec React
  .init({
    fallbackLng: 'en', // Langue par défaut
    debug: false, // Activez `true` pour déboguer
    interpolation: {
      escapeValue: false, // React gère déjà l'échappement
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Chemin des fichiers de traduction
    },
    detection: {
      order: ['localStorage', 'cookie', 'navigator'], // Ordre de détection
      caches: ['localStorage', 'cookie'], // Sauvegarde dans le cache
    },
  });

export default i18n;
