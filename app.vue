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
    <NuxtLoadingIndicator>
      <TheLoader />
    </NuxtLoadingIndicator>
    <TheHead />
    <SeoKit />
    <OgImageScreenshot :delay="10000" />
    <LazyNuxtPage />
  </NuxtLayout>
</template>

<style lang="css">
@import "~/assets/scss/_page-transition.scss";
</style>
