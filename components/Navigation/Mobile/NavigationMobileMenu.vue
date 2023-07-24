<script setup lang="ts">
const localePath = useLocalePath();

const navigation = useNavigation();

const props = defineProps({
  menuDisplayed: {
    type: Boolean,
    required: true,
  },
});

const onAnimationMenuItemHasFinished = (el: Element) => {
  const element = el as HTMLElement;
  element.style.opacity = "1";
};
</script>

<template>
  <div>
    <div
      class="mobile-menu"
      :class="props.menuDisplayed && 'mobile-menu--active'"
    >
      <div class="mobile-menu__header">
        <NuxtLink
          to="/"
          class="mobile-menu__header__logo"
          :class="props.menuDisplayed && 'mobile-menu__header__logo--active'"
        >
          <NavigationLogo />
        </NuxtLink>
      </div>
      <div class="mobile-menu__body">
        <nav class="mobile-menu__body__navigation">
          <template
            v-for="(item, index) in navigation"
            :key="`navigation-${item.name}`"
          >
            <transition
              name="translate-up"
              @after-enter="onAnimationMenuItemHasFinished"
            >
              <NuxtLink
                v-if="props.menuDisplayed"
                :style="`animation-delay: ${700 + 250 * index}ms`"
                :to="localePath(item.path)"
                class="mobile-menu__body__navigation__item fluid-font-size-2"
                active-class="mobile-menu__body__navigation__item--active"
              >
                {{ $t(item.name) }}
              </NuxtLink>
            </transition>
          </template>
        </nav>
      </div>
      <div class="mobile-menu__footer"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "sass:color";
@import "@/assets/scss/variables.scss";

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  display: grid;
  grid-template-areas: "header" "body" "footer";
  grid-template-rows: max-content 1fr max-content;
  height: 100dvh;
  max-height: 100dvh;
  overflow-y: scroll;
  transition: background-color 1s ease-out;
  transition-delay: 300ms;

  &--active {
    background-color: lighten($color-primary, 32%);
    transition: background-color 1100ms ease-out;
    transition-delay: 300ms;
  }

  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: max-content;
    grid-area: header;

    &__logo {
      padding: 0.5rem 0;
      opacity: 0;

      &--active {
        opacity: 1;
        transition: opacity 0.35s linear;
        transition-delay: 550ms;
      }
    }
  }

  &__body {
    grid-area: body;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__navigation {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem 0;
      gap: 1rem;
      height: max-content;
      width: 100%;

      &__item {
        width: 100%;
        text-align: center;
        text-decoration: none;
        padding: 1rem 0;
        font-weight: 800;
        color: $color-primary;
        opacity: 0;

        &--active {
          color: $color-accent;
        }
      }
    }

    &__footer {
      grid-area: footer;
    }
  }
}

.translate-up-enter-active {
  animation: translate-up 800ms;
}

@keyframes translate-up {
  from {
    opacity: 0;
    transform: translateY(60px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
