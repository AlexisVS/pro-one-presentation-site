<template>
  <NuxtLink class="logo" to="/">
    <img alt="Brand" src="~/assets/svg/brand.svg" />
  </NuxtLink>
</template>

<style lang="scss" scoped>
.logo {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    height: 65%;
    width: auto;
  }
}
</style>