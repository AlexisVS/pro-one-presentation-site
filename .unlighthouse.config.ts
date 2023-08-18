/// <reference types="unlighthouse" />
import { defineConfig } from "unlighthouse";

export default defineConfig({
  site: "alexisvs.github.io/pro-one-presentation-site/",
  scanner: {
    exclude: ["/private-zone/*"],
  },
  debug: true,
});
