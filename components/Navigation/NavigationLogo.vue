<script setup lang="ts"></script>

<template>
  <NuxtLink to="/">
    <NuxtImg
      class="logo"
      src="/images/brand/brand.png"
      alt="Logo"
      height="40"
    />
    <!--    <img src="~/assets/images/brand/brand.png" alt="Logo" />-->
  </NuxtLink>
</template>

<style scoped>
.logo {
  position: relative;
  top: 3px;
  user-select: none;
}
</style>
