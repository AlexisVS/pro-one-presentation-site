<script setup lang="ts"></script>

<template>
  <section class="who-we-are">
    <div class="who-we-are__text-side">
      <h2 class="who-we-are__text-side__title">
        {{ $t("home.who-we-are.title") }}
      </h2>
      <p class="who-we-are__text-side__subtitle">
        {{ $t("home.who-we-are.subtitle") }}
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

    &__subtitle {
    }
  }

  &__image-side {
  }
}
</style>
