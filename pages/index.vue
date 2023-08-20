<script lang="ts" setup>
defineOgImageScreenshot({
  delay: 10000,
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
    <TheHeader />
    <PageHomeSocietyWhoWeAre />
    <LazyPageHomeSocietyWhyWeDoingThat />
    <PageHomeProoneFilter />
    <PageHomeConclusion />
  </div>
</template>

<style scoped></style>
