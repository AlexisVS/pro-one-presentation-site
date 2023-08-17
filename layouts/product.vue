<script lang="ts" setup>
const props = defineProps({
  header: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <div class="product">
    <header v-if="props.header === true" class="product__header">
      <slot class="product-header-image" name="header-image" />

      <div class="product__header__text">
        <slot name="header-text" />
      </div>
    </header>

    <section class="product__details--wrapper">
      <slot name="product-details-title" />
      <div class="product__details">
        <div class="product__details__text-side">
          <slot name="product-details-text" />
        </div>

        <div class="product__details__image-side">
          <slot name="product-details-image" />
        </div>
      </div>
    </section>

    <section class="product__additional-informations">
      <slot name="product-additional-informations" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.product {
  padding-top: 165px;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100dvw;
  box-sizing: border-box;

  &__header {
    position: relative;

    &__image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100dvh;
      object-fit: cover;
    }

    &__text {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100dvh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  &__details {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    &__text-side {
    }

    &__image-side {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      object-fit: contain;
    }
  }
}

@media screen and (min-width: 1024px) {
  .product {
    padding-left: 3rem;
    padding-right: 2rem;
    padding-bottom: 160px;
    &__details {
      flex-direction: row;
      align-items: center;

      &__text-side {
      }
    }
  }
}
</style>
