<script lang="ts" setup>
defineOgImageScreenshot({
  delay: 5000,
});

const i18n = useI18n();

useHead({
  htmlAttrs: { lang: i18n?.locale || "fr" },
});
</script>

<template>
  <div>
    <!--    <ClientOnly>-->
    <!--      <NuxtLoadingIndicator>-->
    <!--        <TheLoader />-->
    <!--      </NuxtLoadingIndicator>-->
    <!--    </ClientOnly>-->
    <TheHead />
    <SeoKit />
    <OgImageScreenshot :delay="5000" />
    <NuxtLayout>
      <LazyNuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="css">
@import "~/assets/scss/_page-transition.scss";
</style>
