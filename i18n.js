import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to the Mittelstand Platform",
        cybersecurity: "Cybersecurity Tools",
        successionPlanning: "Succession Planning",
        digitalTools: "Digital Tools Adoption",
      },
    },
    de: {
      translation: {
        welcome: "Willkommen auf der Mittelstand Plattform",
        cybersecurity: "Cybersicherheitstools",
        successionPlanning: "Nachfolgeplanung",
        digitalTools: "Digitale Tools Adoption",
      },
    },
  },
  lng: "de",  // default language
  fallbackLng: "de",
});

export default i18n;
