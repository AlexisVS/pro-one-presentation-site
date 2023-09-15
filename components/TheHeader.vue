<script setup lang="ts">
const state = reactive({
  pageLoaded: false,
});

const { width } = useWindowSize();

const video = ref<HTMLVideoElement | null>(null);

onMounted(() => {
  state.pageLoaded = true;

  const videoElement = video.value as HTMLVideoElement;
  window?.innerWidth >= 768
    ? (videoElement.src = "./videos/header_pc.webm")
    : (videoElement.src = "./videos/header_mobile.webm");

  videoElement.load();
});

const onAnimationLayerTextRendered = (el: Element) => {
  const element = el as HTMLElement;
  element.style.opacity = "1";
};
</script>

<template>
  <header class="header">
    <video
      ref="video"
      class="header__video"
      type="video/webm"
      autoplay
      muted
      loop
    ></video>
    <div class="header__layer">
      <transition
        appear
        name="translate-header-text-top"
        @after-enter="onAnimationLayerTextRendered"
      >
        <h1
          v-if="state.pageLoaded"
          :class="width > 1350 ? 'fluid-font-size-4' : 'fluid-font-size-3'"
          class="header__layer__title"
        >
          {{ $t("page.home.header.title") }}
        </h1>
      </transition>
      <hr style="height: 0.75rem" />
      <transition
        appear
        name="translate-header-text-top"
        @after-enter="onAnimationLayerTextRendered"
      >
        <span
          v-if="state.pageLoaded"
          :style="'animation-delay: 500ms'"
          class="header__layer__subtitle"
          :class="width > 1350 ? 'fluid-font-size-2' : 'fluid-font-size-1'"
        >
          {{ $t("page.home.header.subtitle") }}
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
  height: 100dvh;
  overflow: hidden;

  &__video {
    overflow: hidden;
    width: 100%;
    height: 100vh;
    object-position: 40% bottom;
    object-fit: cover;
    z-index: -1;
    transform: scale(1.5);
    transform-origin: 82% 90%;
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
      //@include fluid-type(font-size, 35px, 45px, 320px, 1024px);
      width: 90%;
      font-weight: 680;
      opacity: 0;
      transform: translateY(0);
      margin: 0;
      line-height: 1.175;
    }

    &__subtitle {
      //@include fluid-type(font-size, 22px, 30px, 320px, 1024px);
      width: 90%;
      font-weight: 500;
      opacity: 0;
      transform: translateY(0);
      line-height: 1.25;
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

@media screen and (min-width: 768px) {
  .header__video {
    object-position: center;
    transform-origin: center;
    transform: scale(1);
  }
}

@media screen and (min-width: 1024px) {
  .header__layer {
    text-align: initial;

    &__title {
      width: 68%;
      //@include fluid-type(font-size, 22px, 55px, 1024px, 3840px);
    }

    &__subtitle {
      width: 68%;
      //@include fluid-type(font-size, 16px, 38px, 1024px, 3840px);
    }
  }
}

@media screen and (min-width: 2200px) {
  .header__layer {
    &__title {
      width: 60%;
    }

    &__subtitle {
      width: 60%;
    }
  }
}
</style>