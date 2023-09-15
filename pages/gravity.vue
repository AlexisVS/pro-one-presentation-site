<script setup lang="ts">
defineOgImageScreenshot({
  delay: 5000,
});

definePageMeta({
  pageTransition: {
    name: "page",
    mode: "out-in",
  },
});

useHead({
  title: $t("page.gravity.title"),
});
</script>

<template>
  <SectionProduct>
    <template #product-details-title>
      <h1 class="fluid-font-size-3">{{ $t("page.gravity.products.title") }}</h1>
    </template>

    <template #product-details-image>
      <NuxtImg
        format="webp"
        class="product-details__image"
        alt="Gravity stuff"
        src="/gravity/products.png"
      />
    </template>

    <template #product-details-text>
      <TheTransitionBase transition="easeTranslateTop">
        <h2 class="fluid-font-size-1">
          {{ $t("page.gravity.products.subtitle") }}
        </h2>
      </TheTransitionBase>
      <TheTransitionBase transition="easeTranslateTop">
        <p class="fluid-font-size-0">
          {{ $t("page.gravity.products.paragraph_1") }}
        </p>
      </TheTransitionBase>
      <TheTransitionBase transition="easeTranslateTop">
        <p class="fluid-font-size-0">
          {{ $t("page.gravity.products.paragraph_2") }}
        </p>
      </TheTransitionBase>
      <TheTransitionBase
        transition="easeTranslateTop"
        :delay="500"
        :once="false"
        :visibility="false"
      >
        <ButtonPage
          style="margin-top: 2rem"
          center
          type="primary"
          to="https://prooneusa.eu/shop"
        >
          {{ $t("component.button.visit_shop") }}
        </ButtonPage>
      </TheTransitionBase>
    </template>

    <template #product-additional-informations>
      <div class="product-additional-informations">
        <div class="product-additional-informations__text-side">
          <TheTransitionBase transition="easeTranslateTop">
            <h2 class="fluid-font-size-1">
              {{ $t("page.gravity.additional-informations.paragraph_1") }}
            </h2>
          </TheTransitionBase>
          <TheTransitionBase transition="easeTranslateTop">
            <p class="fluid-font-size-0" style="text-align: justify-all">
              {{ $t("page.gravity.additional-informations.paragraph_2") }}
            </p>
          </TheTransitionBase>
        </div>
        <div class="product-additional-informations__image-side">
          <NuxtImg
            format="webp"
            class="product-additional-informations__image-side__image"
            alt="Filter Pro One G2.0"
            src="/gravity/schema.png"
            width="547px"
          />
        </div>
      </div>
    </template>
  </SectionProduct>
</template>

<style scoped lang="scss">
.product-details__image {
  object-fit: contain;
  width: 85%;
  max-width: 570px;
}

.product-additional-informations {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 10dvh;

  &__text-side {
    margin-bottom: 3rem;
  }

  &__image-side {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;

    & > img {
      object-fit: contain;
      width: 85%;
      max-width: 547px;
    }
  }
}

@media screen and (min-width: 1024px) {
  .product-additional-informations {
    flex-direction: row;
    align-items: center;
    padding-top: 20dvh;

    &__text-side {
      max-width: 40dvw;
      margin-bottom: 0;
    }

    &__image-side {
      max-width: 60dvw;
    }
  }
}
</style>