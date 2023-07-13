// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["nuxt-seo-kit"],

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "localhost:3000",
      siteName: "pro one",
      siteDescription: "Welcome to my pro one website!",
      language: "fr-FR", // prefer more explicit language codes like `en-AU` over `en`
    },
  },

  devtools: { enabled: true },
  typescript: { shim: true },

  // Modules: https://nuxt.com/docs/guide/concepts/modules
  modules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxt/content",
  ],

  // I18n module configuration: https://i18n.nuxtjs.org/
  i18n: {
    vueI18n: "./modules/i18n/i18n.config.ts",
    defaultLocale: process.env.NUXT_PUBLIC_LANGUAGE || "en-US",
    defaultDirection: "ltr",
    langDir: "./modules/i18n/lang/",
    locales: [
      { code: "fr", iso: "fr-FR", file: "./fr-FR.json", dir: "ltr" },
      { code: "en", iso: "en-US", file: "./en-US.json", dir: "ltr" },
    ],
    detectBrowserLanguage: {
      alwaysRedirect: true,
      fallbackLocale: "fr",
      redirectOn: "root",
      useCookie: true,
    },
  },

  // Image module configuration: https://v1.image.nuxtjs.org/configuration
  image: {
    quality: 80,
    format: ["avif", "webp"],
    provider: "static",
    dir: "assets/images",
  },

  googleFonts: {
    overwriting: true,
    outputDir: "assets/fonts",
    fontsDir: "fonts",
    fontsPath: "~assets/fonts",
    families: {
      // Roboto: true,
      // "Josefin+Sans": true,
      // Lato: [100, 300],
      // Raleway: {
      //   wght: [100, 400],
      //   ital: [100],
      // },
    },
  },

  // Content module configuration: https://content.nuxtjs.org/configuration
  content: {},
});
