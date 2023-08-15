<script lang="ts" setup></script>

<template>
  <NuxtLayout name="default">
    <header class="product__header">
      <slot name="header-image" />

      <div class="product__header__text">
        <slot name="header-text" />
      </div>
    </header>

    <section class="product__details">
      <div class="product__details__text-side">
        <slot name="product-details-text" />
      </div>

      <div class="product__details__image-side">
        <slot name="product-details-image" />
      </div>
    </section>

    <section class="product__additional-informations">
      <slot name="product-additional-informations" />
    </section>
  </NuxtLayout>
</template>

<style lang="scss" scoped></style>
