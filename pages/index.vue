<script lang="ts" setup>
import { useAssetLoader } from "~/composables/useAssetLoader";

const { isLoading } = useAssetLoader();

defineOgImageScreenshot({
  delay: 5000,
});

definePageMeta({
  pageTransition: {
    name: "page",
    mode: "out-in",
  },
});
</script>

<template>
  <div>
    <TheLoader v-if="isLoading" />
    <TheHeader />
    <PageHomeSocietyWhoWeAre />
    <PageHomeSocietyWhyWeDoingThat />
    <PageHomeProoneFilter />
    <PageHomeConclusion />
  </div>
</template>

<style scoped></style>
