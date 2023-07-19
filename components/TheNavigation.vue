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
  <div v-if="state.windowWidth">
    <NavigationLogo />
    <NavigationMobile v-if="state.windowWidth < 1024" />
    <NavigationDesktop v-if="state.windowWidth >= 1024" />
  </div>
</template>

<style scoped></style>
