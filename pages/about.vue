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
</script>

<template>
  <section style="padding: 8rem 1rem 2rem 1rem">
    <NuxtPicture
      placeholder
      alt="Pro One independent"
      src="/proone-independant.png"
      style="margin: 0 auto; display: block"
    />
    <pre
      class="fluid-font-size-0"
      style="max-width: 700px; margin: 3rem auto 0"
    >
      {{ $t("page.about.paragraph") }}
    </pre>
  </section>
</template>

<style scoped lang="scss">
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: inherit;
}
</style>