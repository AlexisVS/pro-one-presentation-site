<script setup lang="ts">
const navigation = useNavigation();
</script>

<template>
  <div class="navigation-desktop">
    <nav class="navigation-desktop__menu">
      <NuxtLink
        v-for="item in navigation"
        :key="`navigation-${item.name}`"
        :to="item.path"
        class="navigation-desktop__menu__item fluid-font-size--1"
        active-class="navigation-desktop__menu__item--active"
      >
        {{ $t(`navigation.${item.name}`) }}
      </NuxtLink>
    </nav>
  </div>
</template>

<style scoped lang="scss">
@use "sass:color";
@import "~/assets/scss/_variables.scss";

.navigation-desktop {
  width: 100%;

  &__menu {
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    &__item {
      color: darken($color-primary, 15%);
      padding: 5px 1rem;
      font-weight: 580;
      text-shadow: 0 0 1px transparentize(darken($color-primary, 28%), 0.3);
      transition: color 650ms ease-in;

      &:hover {
        color: darken($color-primary, 10%);
        transition: color 350ms ease-out;
      }

      &--active {
        color: darken($color-accent, 15%);
        text-shadow: 0 0 1px transparentize(darken($color-accent, 55%), 0.3);

        &:hover {
          color: darken($color-accent, 15%);
        }
      }
    }

    &:visited {
      color: $color-text;
    }
  }
}
</style>
