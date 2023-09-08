<script setup lang="ts">
import TheLocaleSwitcher from "../Section/TheLocaleSwitcher.vue";

const localePath = useLocalePath();
const navigation = useNavigation();
const { width } = useWindowSize();
</script>

<template>
  <div class="navigation-desktop">
    <nav class="navigation-desktop__menu">
      <NuxtLink
        v-for="item in navigation"
        :key="`navigation-${item.name}`"
        :to="
          item.name != 'shop'
            ? localePath(item.path)
            : 'https://prooneusa.eu/shop'
        "
        class="navigation-desktop__menu__item"
        :class="width <= 1920 ? 'fluid-font-size--1' : 'fluid-font-size--2'"
        active-class="navigation-desktop__menu__item--active"
      >
        {{ $t(`navigation.${item.name}`) }}
      </NuxtLink>
    </nav>
    <TheLocaleSwitcher />
  </div>
</template>

<style scoped lang="scss">
@use "sass:color";
@import "~/assets/scss/_variables.scss";

.navigation-desktop {
  width: 100%;
  border-color: transparent;
  display: inline-flex;
  padding-right: 1rem;

  &__menu {
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    &__item {
      color: darken($color-primary, 8%);
      padding: 5px 1rem;
      font-weight: 580;
      text-shadow: 0 0 1px transparentize(darken($color-primary, 28%), 0.3);
      transition: color 650ms ease-in;

      &:hover {
        color: darken($color-primary, 20%);
        transition: color 350ms ease-out;
      }

      &--active {
        color: $color-accent;
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

@media screen and (min-width: 1920px) {
  .navigation-desktop__menu__item {
    padding: 5px 0.9dvw;
  }
}
</style>