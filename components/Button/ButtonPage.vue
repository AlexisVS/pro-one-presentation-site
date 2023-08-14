<script lang="ts" setup>
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
});
</script>

<template>
  <NuxtLink :to="props.url" class="button">
    <span class="button__text">
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
.button {
  border-radius: 999px;
  display: flex;
  justify-content: center;

  &__text {
  }

  &__image {
  }
}
</style>
