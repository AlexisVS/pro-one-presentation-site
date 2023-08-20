<template>
  <div class="loader">
    <NuxtImg
      class="loader__image"
      src="./images/brand/brand.png"
      alt="Brand logo"
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
    max-width: 500px;
    animation: rotate 2s ease-out infinite;
    animation-delay: 600ms;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
</style>
