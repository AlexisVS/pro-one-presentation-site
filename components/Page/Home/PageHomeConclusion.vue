<script lang="ts" setup></script>

<template>
  <section class="wrapper">
    <div class="conclusion">
      <div class="conclusion__text-side">
        <h2 class="fluid-font-size-3">
          {{ $t("page.home.conclusion.title") }}
        </h2>
        <p class="fluid-font-size-0">
          {{ $t("page.home.conclusion.paragraph_1") }}
        </p>
        <p class="fluid-font-size-0">
          {{ $t("page.home.conclusion.paragraph_2") }}
        </p>
        <div class="conclusion__text-side__cta">
          <ButtonPage to="/pressure/"> Nos appareils à pression</ButtonPage>
          <ButtonPage to="/gravity/"> Nos appareils à gravité</ButtonPage>
        </div>
        <TheTransitionBase
          transition="easeTranslateTop"
          :delay="500"
          :once="false"
          :visibility="false"
        >
          <ButtonPage
            class="conclusion__text-side__shop-button"
            center
            type="primary"
            to="https://prooneusa.eu/shop"
          >
            {{ $t("component.button.visit_shop") }}
          </ButtonPage>
        </TheTransitionBase>
      </div>
      <div class="conclusion__image-side">
        <NuxtImg
          alt="Pro One stuff"
          class="conclusion__image-side__image"
          src="./images/products/proone_products.png"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.conclusion {
  padding: 5vh 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__text-side {
    order: 2;

    &__cta {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      margin-top: 1rem;

      & > * {
        flex-grow: 0.9;
        margin-bottom: 1.5rem;
      }
    }

    &__shop-button {
      margin-top: 0.35rem;
      margin-bottom: 5rem;
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
    padding: 10vh 2rem;
    flex-direction: row;

    &__image-side {
      order: 2;
    }

    &__text-side {
      padding-left: 1rem;
      justify-content: flex-start;
      width: 50%;
      min-width: 550px;
      order: 1;

      &__cta {
        display: flex;
        margin-top: 1rem;
        flex-direction: row;
        flex-wrap: wrap;
        transform: translateX(-6px);

        & > *:first-child {
          margin-bottom: 1rem;
        }

        & > * {
          flex-grow: 1;
        }
      }

      &__shop-button {
        transform: translateX(-6px);
      }
    }
  }
}

@media screen and (min-width: 2560px) {
  section {
    padding-left: 3dvw;
    padding-right: 3dvw;
  }
}
</style>
