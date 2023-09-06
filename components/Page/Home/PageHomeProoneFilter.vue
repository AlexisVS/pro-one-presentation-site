<script lang="ts" setup></script>

<template>
  <section class="proone-filter">
    <div class="proone-filter__text-side">
      <h2 class="fluid-font-size-3">
        {{ $t("page.home.proone_filter.title") }}
      </h2>
      <p class="fluid-font-size-0">
        {{ $t("page.home.proone_filter.paragraph_1") }}
      </p>
      <p class="fluid-font-size-0">
        {{ $t("page.home.proone_filter.paragraph_2") }}
      </p>
      <p class="fluid-font-size-0">
        {{ $t("page.home.proone_filter.paragraph_3") }}
      </p>
    </div>
    <div class="proone-filter__image-side">
      <NuxtImg
        format="avif,webp"
        placeholder
        alt="Pro One stuff"
        class="proone-filter__image-side__image"
        src="/filtration/filtration_agents.png"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.proone-filter {
  padding: 5vh 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__text-side {
    order: 2;
  }

  &__image-side {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5vw;

    &__image {
      object-fit: contain;
      width: 100%;
      max-width: 570px;
    }
  }
}

@media screen and (min-width: 1024px) {
  .proone-filter {
    display: flex;
    padding: 10vh 2rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &__image-side {
      order: 2;
      margin: 0;
      width: 50%;
    }

    &__text-side {
      padding-left: 1rem;
      padding-right: 7vw;
      justify-content: flex-start;
      width: 50%;
      min-width: 450px;
      order: 1;
    }
  }
}

@media screen and (min-width: 1440px) {
  .proone-filter {
    &__image-side {
      &__image {
        max-width: 821px;
      }
    }
  }
}

@media screen and (min-width: 2560px) {
  .proone-filter {
    padding-left: 3dvw;
    padding-right: 3dvw;
  }
}
</style>