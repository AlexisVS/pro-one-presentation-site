<script lang="ts" setup></script>

<template>
  <NuxtLayout>
    <TheHead />
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="css">
.layout-enter-active,
.layout-leave-active {
  transition: all 1s;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
