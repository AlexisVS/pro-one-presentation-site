// https://nuxt.com/docs/api/configuration/nuxt-config

const seoConfig = {
  name: "pro one",
  description: "Welcome to my pro one website!",
  image: "/images/brand/proone_europe.png",
  url: process.env.NUXT_PUBLIC_SITE_URL || "localhost:3000",
  phone: "+33 6 00 00 00 00",
  email: "qsdqsd@gmail.com",
  vatId: "BE 0000 000 000",
  currenciesAccepted: "EUR",
};

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      siteUrl: seoConfig.url,
      siteName: seoConfig.name,
      siteDescription: seoConfig.description,
      language: "fr-FR", // prefer more explicit language codes like `en-AU` over `en`
      seo: seoConfig,
      motion: {
        directives: {
          "pop-bottom": {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            },
          },
          "translate-top": {
            initial: {
              opacity: 0,
              y: 100,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.2,
                duration: 0.5,
                ease: "easeOut",
              },
            },
          },
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
    "@vueuse/motion/nuxt",
  ],

  // CSS
  css: ["~/assets/scss/main.scss"],

  postcss: {
    plugins: {
      "postcss-import": {},
      "postcss-preset-env": {
        stage: 2,
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
    defaultLocale: process.env.NUXT_PUBLIC_LANGUAGE || "en-US",
    defaultDirection: "ltr",
    langDir: "./modules/i18n/lang",
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
    // detectBrowserLanguage: {
    //   alwaysRedirect: true,
    //   fallbackLocale: "fr",
    //   redirectOn: "root",
    //   useCookie: true,
    // },
  },
  extends: ["nuxt-seo-kit"],
  // Image module configuration: https://v1.image.nuxtjs.org/configuration
  image: {
    quality: 80,
    format: ["avif", "webp"],
    provider: "ipx",
    dir: "assets/images",
  },
  // Content module configuration: https://content.nuxtjs.org/configuration
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
  ssr: false,
});
