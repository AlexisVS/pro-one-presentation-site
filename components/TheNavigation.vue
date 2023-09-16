<script setup lang="ts">
import TheLocaleSwitcher from "./TheLocaleSwitcher.vue";

const state = reactive({ windowWidth: 0 });

onMounted(() => {
  state.windowWidth = window.innerWidth;
  window.addEventListener("resize", () => {
    state.windowWidth = window.innerWidth;
  });
});
</script>
<template>
  <div v-if="state.windowWidth" class="navigation">
    <NavigationLogo class="navigation__logo" />
    <TheLocaleSwitcher v-if="state.windowWidth < 1024" />

    <NavigationMobile v-if="state.windowWidth < 1024" />
    <NavigationDesktop v-if="state.windowWidth >= 1024" />
  </div>
</template>

<style scoped lang="scss">
@use "sass:color";
@import "~/assets/scss/_variables.scss";

.navigation {
  position: absolute;
  width: 100%; // 11px problem '-'
}

.navigation::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 1px;
  background: lighten($color-primary, 20%);
  backdrop-filter: blur(2px);
  opacity: 1;
  transition: opacity 0.3s ease-out;
}

.navigation__logo {
  transition: all 0.3s ease-out;
  height: 100%;

  & img {
    height: 48px;
  }
}

.navigation__logo--hidden {
  opacity: 0;
}

@media screen and (min-width: 1920px) {
  .navigation__logo {
    transition: all 0.3s ease-out;
    height: 100%;
    position: relative;
    left: 3.2dvw;
  }
}
</style>