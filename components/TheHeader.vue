<script setup lang="ts">
const state = reactive({
  pageLoaded: false,
});

onMounted(() => {
  state.pageLoaded = true;
});

const onAnimationLayerTextRendered = (el: Element) => {
  const element = el as HTMLElement;
  element.style.opacity = "1";
};
</script>

<template>
  <header class="header">
    <video class="header__video" autoplay muted loop>
      <source src="~/assets/videos/water_bamboo-pipe.webm" type="video/webm" />
    </video>
    <div class="header__layer">
      <transition
        appear
        name="translate-header-text-top"
        @after-enter="onAnimationLayerTextRendered"
      >
        <h1 v-if="state.pageLoaded" class="header__layer__title">
          {{ $t("home.header.title") }}
        </h1>
      </transition>
      <transition
        appear
        name="translate-header-text-top"
        @after-enter="onAnimationLayerTextRendered"
      >
        <span
          v-if="state.pageLoaded"
          :style="'animation-delay: 500ms'"
          class="header__layer__subtitle"
        >
          {{ $t("home.header.subtitle") }}
        </span>
      </transition>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "~/assets/scss/mixins/_fluid-typography.scss";
@import "~/assets/scss/_variables.scss";

.header {
  display: block;
  position: relative;
  width: 100%;
  height: calc(100dvh + 65px);

  &__video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: -1;
  }

  &__layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    text-shadow: 0 0 5px black;
    box-shadow: inset 0 0 0 9999999px rgba(0, 0, 0, 0.3);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.5) 200%
    );

    &__title {
      @include fluid-type(font-size, 35px, 45px, 320px, 1024px);
      width: 90%;
      font-weight: 680;
      opacity: 0;
      transform: translateY(0);
      margin: 0;
    }

    &__subtitle {
      @include fluid-type(font-size, 22px, 30px, 320px, 1024px);
      width: 90%;
      font-size: 2rem;
      font-weight: 500;
      opacity: 0;
      transform: translateY(0);
    }
  }
}

.translate-header-text-top-enter-active {
  animation: translate-header-text-top 950ms ease-out;
}

@keyframes translate-header-text-top {
  0% {
    transform: translateY(80px);
    opacity: 0;
  }

  50% {
    opacity: 0.2;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@media screen and (min-width: 1024px) {
  .header__layer {
    text-align: initial;

    &__title {
      width: 60%;
      @include fluid-type(font-size, 55px, 90px, 1024px, 3840px);
    }

    &__subtitle {
      width: 60%;
      @include fluid-type(font-size, 33px, 60px, 1024px, 3840px);
    }
  }
}
</style>
