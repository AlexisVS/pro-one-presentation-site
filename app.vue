<script lang="ts" setup>
import { defineOgImageScreenshot } from ".nuxt/imports";
defineOgImageScreenshot({
  delay: 3000,
});

const i18n = useI18n();

useHead({
  htmlAttrs: { lang: i18n?.locale || "fr" },
});
</script>

<template>
  <NuxtLayout>
    <TheHead />
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="css">
.layout-enter-active,
.layout-leave-active {
  transition: all 1s;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
