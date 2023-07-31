<script setup lang="ts"></script>

<template>
  <section class="who-we-are">
    <div class="who-we-are__text-side">
      <h2
        v-motion-fade-visible="{ visible: { transition: { duration: 5000 } } }"
        class="who-we-are__text-side__title"
      >
        {{ $t("home.who_we_are.title") }}
      </h2>
      <p class="who-we-are__text-side__paragraph">
        {{ $t("home.who_we_are.paragraph_1") }}
      </p>
      <p class="who-we-are__text-side__paragraph">
        {{ $t("home.who_we_are.paragraph_2") }}
      </p>
    </div>
    <div class="who-we-are__image-side"></div>
  </section>
</template>

<style scoped lang="scss">
.who-we-are {
  &__text-side {
    &__title {
    }

    &__paragraph {
    }
  }

  &__image-side {
  }
}
</style>
