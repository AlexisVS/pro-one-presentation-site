<script setup lang="ts">
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
    <NavigationMobile v-if="state.windowWidth < 1024" />
    <NavigationDesktop v-if="state.windowWidth >= 1024" />
  </div>
</template>

<style scoped lang="scss">
@use "sass:color";
@import "~/assets/scss/variables.scss";

.navigation {
  position: relative;
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
}

.navigation__logo--hidden {
  opacity: 0;
}
</style>
