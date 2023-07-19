<script setup lang="ts">
const navigation = useNavigation();
</script>

<template>
  <div class="mobile-menu">
    <div class="mobile-menu__header">
      <NuxtLink to="/" class="mobile-menu__header__logo">
        <NavigationLogo />
      </NuxtLink>
    </div>
    <div class="mobile-menu__body">
      <nav class="mobile-menu__body__navigation">
        <NuxtLink
          v-for="item in navigation"
          :key="`navigation-${item.name}`"
          :to="localePath(item.path)"
          class="mobile-menu__body__navigation__item"
          active-class="mobile-menu__body__navigation__item--active"
        >
          {{ $t(item.name) }}
        </NuxtLink>
      </nav>
    </div>
    <div class="mobile-menu__footer"></div>
  </div>
</template>

<style scoped></style>
