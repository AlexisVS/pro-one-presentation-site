<template>
  <div class="loader">
    <NuxtImg
      format="webp"
      class="loader__image"
      src="/brand/brand.png"
      alt="Brand logo"
      width="305"
    />
  </div>
</template>

<script setup lang="ts">
// const nuxtApp = useNuxtApp();
// const loading = ref(false);
// nuxtApp.hook("page:start", () => {
//   loading.value = true;
// });
// nuxtApp.hook("page:finish", () => {
//   loading.value = false;
// });
</script>

<style scoped lang="scss">
@import "~/assets/scss/_variables.scss";

.loader {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100dvw;
  height: 100dvh;
  background-color: $color-background;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: opacity 350ms ease-in-out;

  &__image {
    width: 90dvw;
    max-width: 305px;
    animation: translate-wave 4s infinite;
    animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
}

@keyframes translate-wave {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8vh);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
