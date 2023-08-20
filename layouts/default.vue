<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const navigationDefault = ref<Element | null>(null);

const navigationIsAtTop = ref<boolean>(true);

const handleScroll = (): any => {
  window?.scrollY >= 1
    ? (navigationIsAtTop.value = false)
    : (navigationIsAtTop.value = true);
};
onMounted(() => {
  if (navigationDefault.value !== null) {
    window.addEventListener("scroll", handleScroll);
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="layout">
    <TheNavigation
      id="navigation"
      ref="navigationDefault"
      class="layout__navigation"
      :class="navigationIsAtTop ? '' : 'absolute'"
    />
    <div class="layout__content">
      <TheSmoothScroll>
        <slot />
      </TheSmoothScroll>
    </div>
    <TheFooter class="layout__footer" />
  </div>
</template>

<style lang="scss" scoped>
@use "sass:color";
@import "~/assets/scss/_variables.scss";

.layout {
  display: grid;
  grid-template-areas: "navigation" "content" "footer";
  grid-template-rows: auto 1fr auto;
  min-height: 100dvh;
  background-color: $color-background;

  &__navigation {
    grid-area: navigation;
    height: 65px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    /* Value 0 for mobile version */
    padding-left: 11px;
    padding-right: 0;
    z-index: 10;

    &:after {
      opacity: 0;
      transition: opacity 0.3s ease-out;
    }
  }

  &__content {
    grid-area: content;
    background-color: $color-background;
  }

  & > div > div {
    height: 100%;
  }

  &__footer {
    grid-area: footer;
    z-index: 10;
  }
}

@media screen and (min-width: 1024px) {
  .layout {
    &__navigation {
      transform: translateY(25px);
      backdrop-filter: blur(0px);
      width: 100dvw;
      transition:
        backdrop-filter 0s,
        background-color 0.7s ease-out,
        transform 0.3s ease-out 1.2s;

      &.absolute {
        background: transparentize(lighten($color-primary, 50%), 0.5);
        backdrop-filter: blur(2px);
        position: fixed;
        height: 65px;
        top: 0;
        left: 0;
        width: 100dvw;
        z-index: 100;
        padding-right: 0;
        transform: translateY(0);
        transition:
          transform 0.3s ease-out 1s,
          background-color 0.3s ease-out 2s,
          backdrop-filter 650ms;
      }
    }
  }
}
</style>
