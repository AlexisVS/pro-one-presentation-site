<script lang="ts" setup>
import { PropType } from "vue";

type buttonType = "neutral" | "primary";

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  // buttonImagePath: {
  //   type: String,
  //   required: false,
  //   default: "",
  // },
  type: {
    type: String as PropType<buttonType>,
    required: false,
    default: "neutral",
  },
  center: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <NuxtLink :class="`button--${props.type}`" :to="props.to" class="button">
    <span
      class="button__text fluid-font-size--1"
      :style="props.center === true ? 'text-align: center; width: 100%;' : ''"
    >
      <slot />
    </span>
    <!--    <NuxtImg-->
    <!--      v-if="props.buttonImagePath?.length > 0"-->
    <!--      :src="props.buttonImagePath"-->
    <!--      class="button__image"-->
    <!--    />-->
  </NuxtLink>
</template>

<style lang="scss" scoped>
@use "sass:color";
@import "~/assets/scss/_variables.scss";

.button {
  border-radius: 999px;
  display: flex;
  align-items: center;
  border: 1px solid rgb(150, 150, 150);
  padding: 0.5dvw 2rem;
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
    color: $color-text;
    transition: color 350ms;
  }

  &__image {
    overflow: hidden;
    object-fit: contain;
    height: 100%;
    transform: translateX(40%);
    transition:
      height 350ms ease-in-out,
      transform 100ms ease-in-out;
    pointer-events: none;
    position: absolute;
    right: 0;
  }

  &:hover {
    transition: box-shadow 100ms;
    box-shadow: 0 0.18em 0.5em 0 rgba(0, 0, 0, 0.45);

    .button__text {
      transition: color 350ms;
      color: darken($color-accent, 3%);
    }

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
      color: initial;
    }

    &:hover {
      .button__text {
        color: darken($color-accent, 32%);
      }
    }
  }

  &--primary {
    transition:
      box-shadow 225ms,
      border-color 350ms,
      text-shadow 225ms,
      border-color 350ms;
    background-color: $color-accent;
    border-color: transparent;
    box-shadow: 0 0.25em 0.5em 0 transparentize(darken($color-accent, 25%), 0.4);

    .button__text {
      color: $color-background;
      font-weight: 680;
      text-shadow: 0 0 0 transparentize(white, 0.9);
      transition: text-shadow 225ms;
    }

    &:hover {
      box-shadow: 0 0.05em 0.6em 0
        transparentize(darken($color-accent, 5%), 0.2);
      border-color: $color-accent;
      transition:
        box-shadow 225ms,
        border-color 350ms;

      .button__text {
        color: white;
        text-shadow: 0 0 0.25em transparentize(white, 0.8);
        transition: text-shadow 225ms;
      }
    }

    &:visited {
      color: white;
    }
  }
}
</style>
