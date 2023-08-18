// https://nuxt.com/docs/api/configuration/nuxt-config

const seoConfig = {
  name: "pro one",
  description: "Welcome to my pro one website!",
  image: "/images/brand/brand.png",
  url: process.env.NUXT_PUBLIC_SITE_URL,
  phone: "+33 6 00 00 00 00",
  email: "qsdqsd@gmail.com",
  vatId: "BE 0000 000 000",
  currenciesAccepted: "EUR",
};

export default defineNuxtConfig({
  site: {
    url: seoConfig.url,
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL,
    pageTransition: { name: "layout", mode: "out-in" },
    head: {
      titleTemplate: "%pageTitle %titleSeparator %siteName",
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: seoConfig.url,
      siteName: seoConfig.name,
      siteDescription: seoConfig.description,
      language: "fr-FR", // prefer more explicit language codes like `en-AU` over `en`
      seo: seoConfig,
      titleSeparator: "|",
      trailingSlash: true,
    },
  },
  ogImage: {
    delay: 3000,
    waitForTimeout: 3000,
    runtimeBrowser: true,
    defaults: {
      delay: 3000,
      waitForTimeout: 3000,
    },
    screenshot: {
      delay: 3000,
      waitForTimeout: 3000,
      options: {
        delay: 3000,
        waitForTimeout: 3000,
      },
    },
  },
  seo: {
    // Other SEO module options
    og: {
      waitForTimeout: 3000,
      delay: 3000,
      // Other OG module options
      screenshot: {
        waitForTimeout: 3000,
        delay: 3000,
        // Add Playwright options here
        options: {
          // Add the wait-for-timeout option
          waitForTimeout: 3000,
          delay: 3000,
          // You can also add other Playwright options if needed
        },
      },
    },
  },

  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@import "assets/scss/main.scss";',
  //       },
  //     },
  //   },
  // },

  devtools: {
    enabled: true,
  },
  typescript: {
    shim: true,
  },
  // Modules : https://nuxt.com/docs/guide/concepts/modules
  modules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@nuxt/content",
    "@vueuse/nuxt",
  ],

  // CSS
  css: ["~/assets/scss/main.scss"],

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
  // I18n module configuration: https://i18n.nuxtjs.org/
  i18n: {
    vueI18n: "./modules/i18n/i18n.config.ts",
    defaultLocale: process.env.NUXT_PUBLIC_LANGUAGE || "fr",
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
    ],
    detectBrowserLanguage: {
      alwaysRedirect: true,
      fallbackLocale: "fr",
      redirectOn: "root",
      useCookie: true,
      cookieKey: "i18n_redirected",
    },
  },
  extends: ["nuxt-seo-kit"],
  // Image module configuration: https://v1.image.nuxtjs.org/configuration
  image: {
    quality: 80,
    format: ["avif", "webp"],
    provider: "ipx",
  },
  // Content module configuration: https://content.nuxtjs.org/configuration
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
  target: "static",
  ssr: true,
});
