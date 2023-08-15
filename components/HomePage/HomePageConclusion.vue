<script lang="ts" setup></script>

<template>
  <section class="wrapper">
    <div class="conclusion">
      <div class="conclusion__text-side">
        <h2 class="fluid-font-size-3">{{ $t("home.conclusion.title") }}</h2>
        <p class="fluid-font-size-0">{{ $t("home.conclusion.paragraph_1") }}</p>
        <p class="fluid-font-size-0">{{ $t("home.conclusion.paragraph_2") }}</p>
        <div class="conclusion__text-side__cta">
          <ButtonPage text="Nos appareils à pression" to="/pression/" />
          <ButtonPage text="Nos appareils à gravité" to="/gravity/" />
        </div>
      </div>
      <div class="conclusion__image-side">
        <NuxtImg
          alt="Pro One stuff"
          class="conclusion__image-side__image"
          src="./images/proone_stuff.png"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.conclusion {
  padding: 0 1rem;

  &__text-side {
    &__cta {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 1rem;
    }
  }

  &__image-side {
    width: 100%;

    &__image {
      object-fit: contain;
      width: 100%;
    }
  }
}

@media screen and (min-width: 1024px) {
  .conclusion {
    display: flex;
    padding: 0 2rem;

    &__text-side {
      padding-left: 1rem;
      justify-content: flex-start;
      width: 50%;

      &__cta {
        display: flex;
        margin-top: 1rem;
        flex-direction: row;
        flex-wrap: wrap;

        & > *:first-child {
          margin-right: 1rem;
          margin-bottom: 1rem;
        }
      }
    }
  }
}
</style>
