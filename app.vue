<script lang="ts" setup>
defineOgImageScreenshot({
  delay: 10000,
});

const i18n = useI18n();

useHead({
  htmlAttrs: { lang: i18n?.locale || "fr" },
});
</script>

<template>
  <NuxtLayout>
    <TheHead />
    <SeoKit />
    <OgImageScreenshot :delay="3000" />
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
