<script lang="ts" setup>
const i18n = useI18n();

useHead({
  htmlAttrs: { lang: i18n?.locale || "en" },
});
</script>

<template>
  <div>
    <SeoKit />
    <OgImageScreenshot :delay="5000" />
    <TheHead />
    <NuxtLayout>
      <LazyNuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="css">
@import "~/assets/scss/_page-transition.scss";
</style>