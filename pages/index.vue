<script lang="ts" setup>
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
    <TheHeader />
    <LazyPageHomeSocietyWhoWeAre />
    <LazyPageHomeSocietyWhyWeDoingThat />
    <LazyPageHomeProoneFilter />
    <LazyPageHomeConclusion />
  </div>
</template>

<style scoped></style>
