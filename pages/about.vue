<script setup lang="ts">
defineOgImageScreenshot({
  delay: 5000,
});

definePageMeta({
  pageTransition: {
    name: "page",
    mode: "out-in",
  },
});

useHead({
  title: $t("page.about.title"),
});
</script>

<template>
  <section style="padding: 8rem 1rem 2rem 1rem">
    <NuxtImg
      format="webp"
      alt="Pro One independent"
      src="/proone-independant.png"
      style="margin: 0 auto; display: block"
    />
    <pre class="fluid-font-size-0">
      {{ $t("page.about.paragraph") }}
    </pre>
  </section>
</template>

<style scoped lang="scss">
pre {
  max-width: 700px;
  margin: 3rem auto 0;
  white-space: pre-line;
  line-height: 1.2;
  word-wrap: break-word;
  font-family: inherit;
}
</style>