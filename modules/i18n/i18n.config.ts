/* eslint-disable camelcase */
import en_US from "./lang/en-US.json";
import fr_FR from "./lang/fr-FR.json";

export default defineI18nConfig(() => ({
  legacy: false,
  strategy: "prefix_except_default",
  fallbackLocale: process.env.NUXT_PUBLIC_LANGUAGE || "fr-FR",
  defaultLocale: process.env.NUXT_PUBLIC_LANGUAGE || "fr-FR",
  messages: {
    en: en_US,
    fr: fr_FR,
  },
}));
