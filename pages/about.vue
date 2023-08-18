<script setup lang="ts">
defineOgImageScreenshot({
  delay: 10000,
});
</script>

<template>
  <section style="padding: 8rem 1rem 2rem 1rem">
    <NuxtImg
      alt="Pro One independent"
      src="./images/proone-independant.png"
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
