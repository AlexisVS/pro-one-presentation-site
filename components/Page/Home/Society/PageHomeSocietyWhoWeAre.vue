<script lang="ts" setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
</script>

<template>
  <section class="who-we-are">
    <NuxtImg
      alt="Our team"
      class="who-we-are__image"
      src="./images/team/team1.jpg"
    />

    <div class="who-we-are__text-side">
      <TheTransitionBase transition="easeTranslateTop">
        <h2 class="who-we-are__text-side__title">
          {{ $t("page.home.who_we_are.title") }}
        </h2>
      </TheTransitionBase>
      <TheTransitionBase :delay="300" transition="easeTranslateTop">
        <p class="who-we-are__text-side__paragraph">
          {{ $t("page.home.who_we_are.paragraph_1") }}
        </p>
      </TheTransitionBase>
      <TheTransitionBase :delay="300" transition="easeTranslateTop">
        <p class="who-we-are__text-side__paragraph">
          {{ $t("page.home.who_we_are.paragraph_2") }}
        </p>
      </TheTransitionBase>
    </div>
  </section>
</template>

<style scoped lang="scss">
.who-we-are {
  position: relative;

  &__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &__text-side {
    position: relative;
    z-index: 2;
    padding: 0 1rem;
  }
}

@media screen and (min-width: 1024px) {
  .who-we-are {
    height: 80dvh;
    padding: 0 1rem;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;

    &__image {
      width: 50%;
      height: 100%;
      object-fit: contain;
    }

    &__text-side {
      width: 50%;
      padding: 0 2rem;
    }
  }
}
</style>
