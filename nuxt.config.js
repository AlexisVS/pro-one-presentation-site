// https://nuxt.com/docs/api/configuration/nuxt-config

const seoConfig = {
  name: "ProOne Water Filter ®",
  description: "Welcome to my ProOne Water Filter ® website!",
  image: "/images/brand/brand.png",
  url: process.env.NUXT_PUBLIC_SITE_URL,
  phone: "+33 6 00 00 00 00",
  email: "qsdqsd@gmail.com",
  vatId: "BE 0000 000 000",
  currenciesAccepted: "EUR",
};

export default defineNuxtConfig({
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL,
    head: {
      titleTemplate: "%pageTitle %titleSeparator %siteName",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  // Modules : https://nuxt.com/docs/guide/concepts/modules
  content: {},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  css: ["~/assets/scss/main.scss"],

  devtools: {
    enabled: true,
  },
  extends: ["nuxt-seo-kit"],

  fontMetrics: {
    fonts: ["Raleway"],
  },
  i18n: {
    vueI18n: "./modules/i18n/i18n.config.js",
    defaultLocale: process.env.NUXT_PUBLIC_LANGUAGE || "en",
    defaultDirection: "ltr",
    langDir: "./modules/i18n/lang",
    trailingSlash: undefined,
    strategy: "no_prefix",
    locales: [
      {
        code: "fr",
        iso: "fr-FR",
        file: "fr-FR.json",
        dir: "ltr",
      },
      {
        code: "en",
        iso: "en-US",
        file: "en-US.json",
        dir: "ltr",
      },
      {
        code: "es",
        iso: "es-ES",
        file: "es-ES.json",
        dir: "ltr",
      },
    ],
    detectBrowserLanguage: {
      alwaysRedirect: true,
      fallbackLocale: "en",
      redirectOn: "root",
      useCookie: true,
      cookieKey: "i18n_redirected",
    },
  },
  image: {
    quality: 90,
    format: ["webp"],
    provider: "ipx",
    dir: "assets/images",
    screens: {
      xs: 320,
    },
  },
  modules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@nuxt/content",
    "@vueuse/nuxt",
    "@nuxtjs/fontaine",
  ],

  // @nuxtjs/fontaine
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
  // ogImage: {
  //   runtimeBrowser: true,
  // },

  postcss: {
    plugins: {
      "postcss-import": {},
      "postcss-preset-env": {
        stage: 3,
        autoprefixer: {
          grid: true,
          // overrideBrowserslist: ["> 2%", "last 2 versions", "not dead"],
        },
      },
    },
  },
  // CSS
  runtimeConfig: {
    public: {
      siteUrl: seoConfig.url,
      url: seoConfig.url,
      siteName: seoConfig.name,
      siteDescription: seoConfig.description,
      language: "en-EN", // prefer more explicit language codes like `en-AU` over `en`
      seo: seoConfig,
      titleSeparator: "|",
      trailingSlash: true,
    },
  },
  site: {
    url: seoConfig.url,
  },
  seo: seoConfig,

  // I18n module configuration: https://i18n.nuxtjs.org/
  ssr: true,

  // Content module configuration : https://content.nuxtjs.org/configuration
  typescript: {
    shim: true,
  },
});
