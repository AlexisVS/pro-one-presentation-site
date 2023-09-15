<script lang="ts" setup></script>

<template>
  <section class="pfas">
    <div class="pfas__text-side">
      <h2 class="fluid-font-size-3">
        {{ $t("page.home.pfas.title") }}
      </h2>
      <p class="fluid-font-size-0">
        {{ $t("page.home.pfas.paragraph_1") }}
      </p>
      <div class="pfas__text-side__pfas-list">
        <div class="pfas__text-side__pfas-list__left-side">
          <span
            v-for="item in ['1', '2', '3', '4', '5']"
            :key="`pfas-list-item-${item}`"
            class="fluid-font-side--1"
          >
            {{ $t(`page.home.pfas.pfas_${item}`) }}
          </span>
        </div>
        <div class="pfas__text-side__pfas-list__right-side">
          <span
            v-for="item in ['6', '7', '8', '9', '10']"
            :key="`pfas-list-item-${item}`"
            class="fluid-font-side--1"
          >
            {{ $t(`page.home.pfas.pfas_${item}`) }}
          </span>
        </div>
      </div>
      <p class="fluid-font-size-0">
        {{ $t("page.home.pfas.paragraph_2") }}
      </p>
      <p class="fluid-font-size-0">
        {{ $t("page.home.pfas.paragraph_3") }}
      </p>
    </div>
    <div class="pfas__image-side">
      <NuxtImg
        alt="Pro One stuff"
        class="pfas__image-side__image"
        format="webp"
        src="/pfas/water_droplet.png"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.pfas {
  padding: 5vh 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__text-side {
    order: 2;

    &__pfas-list {
      display: flex;
      flex-direction: column;

      &__left-side,
      &__right-side {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
      }
    }
  }

  &__image-side {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5vw;

    &__image {
      object-fit: contain;
      width: 80%;
      max-width: 570px;
      border-radius: 99999px;
    }
  }
}

@media screen and (min-width: 1024px) {
  .pfas {
    display: flex;
    padding: 10vh 2rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &__image-side {
      order: 2;
      margin: 0;
      width: 45%;

      &__image {
        position: relative;
        top: 5%;
      }
    }

    &__text-side {
      padding-left: 1rem;
      padding-right: 7vw;
      justify-content: flex-start;
      width: 55%;
      min-width: 450px;
      order: 1;

      &__pfas-list {
        flex-direction: row;
        justify-content: space-between;
        max-width: 600px;
      }
    }
  }
}

@media screen and (min-width: 1440px) {
  .pfas {
    &__image-side {
      &__image {
        max-width: 821px;
      }
    }
  }
}

@media screen and (min-width: 2560px) {
  .pfas {
    padding-left: 3dvw;
    padding-right: 3dvw;
  }
}
</style>
