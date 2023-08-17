<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
</script>

<template>
  <NuxtLayout name="product">
    <template #product-details-title>
      <h1 class="fluid-font-size-3">
        {{ $t("page.pressure.products.title") }}
      </h1>
    </template>

    <template #product-details-image>
      <NuxtImg
        class="product-details__image"
        alt="Gravity stuff"
        src="./images/pressure/products.png"
      />
    </template>

    <template #product-details-text>
      <TheTransitionBase transition="easeTranslateTop">
        <h2 class="fluid-font-size-1">
          {{ $t("page.pressure.products.subtitle") }}
        </h2>
      </TheTransitionBase>
      <TheTransitionBase transition="easeTranslateTop">
        <p class="fluid-font-size-0">
          {{ $t("page.pressure.products.paragraph_1") }}
        </p>
      </TheTransitionBase>
      <TheTransitionBase transition="easeTranslateTop">
        <p class="fluid-font-size-0">
          {{ $t("page.pressure.products.paragraph_2") }}
        </p>
      </TheTransitionBase>
      <TheTransitionBase :delay="300" transition="easeTranslateTop">
        <p class="fluid-font-size-0">
          {{ $t("page.pressure.products.paragraph_3") }}
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
          :to="runtimeConfig.public.siteUrl + '/shop/'"
        >
          {{ $t("component.button.visit_shop") }}
        </ButtonPage>
      </TheTransitionBase>
    </template>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.product-details__image {
  object-fit: contain;
  width: 85%;
  max-width: 570px;
}
</style>
