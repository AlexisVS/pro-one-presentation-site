<script lang="ts" setup>
import { PropType } from "vue";

type buttonType = "neutral" | "primary";

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  buttonImagePath: {
    type: String,
    required: false,
    default: "",
  },
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String as PropType<buttonType>,
    required: false,
    default: "neutral",
  },
});
</script>

<template>
  <NuxtLink :class="`button--${props.type}`" :to="props.to" class="button">
    <span class="button__text fluid-font-size--1">
      {{ props.text }}
    </span>
    <NuxtImg
      v-if="props.buttonImagePath?.length > 0"
      :src="props.buttonImagePath"
      class="button__image"
    />
  </NuxtLink>
</template>

<style lang="scss" scoped>
@use "sass:color";
@import "~/assets/scss/_variables.scss";

.button {
  border-radius: 999px;
  display: flex;
  align-items: center;
  border: 1px solid rgb(100, 100, 100);
  padding: 0 2rem;
  box-shadow: 0 0.15em 0.2em 0 rgba(0, 0, 0, 0.35);
  transition: box-shadow 350ms;
  height: 40px;
  overflow: hidden;
  position: relative;
  margin: 5px 9px;

  &__text {
    font-weight: 560;
    height: max-content;
    white-space: nowrap;
    pointer-events: none;
    z-index: 1;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  }

  &__image {
    overflow: hidden;
    object-fit: contain;
    height: 100%;
    transform: translateX(40%);
    transition:
      height 350ms ease-in-out,
      transform 350ms ease-in-out;
    pointer-events: none;
    position: absolute;
    right: 0;
  }

  &:hover {
    transition: box-shadow 350ms;
    box-shadow: 0 0.25em 0.3em 0 rgba(0, 0, 0, 0.45);

    .button__image {
      height: 120%;
      transform: translateX(30%);
      transition:
        height 350ms ease-out,
        transform 350ms ease-out;
    }
  }

  &--neutral {
    background-color: white;

    &:visited {
      color: $color-accent;
    }
  }

  &--primary {
    background-color: $color-accent;

    &:visited {
      color: white;
    }
  }
}
</style>