<script setup lang="ts">
const state = reactive({
  menuDisplayed: false,
});

const menu = document.querySelector(
  ".navigation-mobile__menu",
) as HTMLButtonElement;
const toggleMenu = () => {
  state.menuDisplayed = !state.menuDisplayed;

  state.menuDisplayed &&
    menu.classList.toggle("navigation-mobile__menu--active");
};
</script>

<template>
  <div class="navigation-mobile">
    <NavigationMobileButton
      :toggle-menu="toggleMenu"
      :menu-displayed="state.menuDisplayed"
      class="navigation-mobile__button"
    />
    <NavigationMobileMenu
      ref="menu"
      class="navigation-mobile__menu"
      :class="state.menuDisplayed && 'navigation-mobile__menu--active'"
    />
  </div>
</template>

<style scoped>
.navigation-mobile__menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1;
  overflow-y: scroll;
}

.navigation-mobile__menu--active {
  transform: translateX(0);
}
</style>
