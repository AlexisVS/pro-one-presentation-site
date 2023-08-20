<script setup lang="ts">
const state = reactive({
  menuDisplayed: false,
});

const toggleMenu = () => {
  state.menuDisplayed = !state.menuDisplayed;

  document
    .querySelector(".navigation__logo")
    ?.classList.toggle("navigation__logo--hidden", state.menuDisplayed);

  state.menuDisplayed
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "auto");
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
      class="navigation-mobile__menu"
      :class="state.menuDisplayed && 'navigation-mobile__menu--active'"
      :menu-displayed="state.menuDisplayed"
      :toggle-menu="toggleMenu"
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
  overflow-y: hidden;
}

.navigation-mobile__menu--active {
  transform: translateX(0);
}
</style>