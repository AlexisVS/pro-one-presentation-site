/* eslint-disable camelcase */
import en_US from "./lang/en-US.json";
import fr_FR from "./lang/fr-FR.json";
import es_ES from "./lang/es-ES.json";

export default defineI18nConfig(() => ({
  legacy: false,
  globalInjection: true,
  locale: "en",
  fallbackLocale: process.env.NUXT_PUBLIC_LANGUAGE || "en",
  defaultLocale: process.env.NUXT_PUBLIC_LANGUAGE || "en",
  messages: {
    en: en_US,
    fr: fr_FR,
    es: es_ES,
  },
}));
