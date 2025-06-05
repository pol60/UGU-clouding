import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translations } from './i18n/translations';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: translations.ru },
      en: { translation: translations.en },
      ua: { translation: translations.ua }
    },
    lng: 'ru',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 