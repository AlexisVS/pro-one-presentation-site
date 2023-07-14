<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable-next-line vue/multi-word-component-names -->
<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
// inherited attrs can mess up the satori parser
defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  title: {
    required: true,
    type: String,
  },

  description: {
    required: false,
    type: String,
    // eslint-disable-next-line vue/valid-define-props
    default: runtimeConfig.public.seo.description,
  },
});
</script>

<template>
  <div
    class="w-full h-full flex text-white bg-blue-500 items-center justify-center"
    style="background-color: red"
  >
    <h1>{{ props.title }} 👋</h1>
    <p>{{ props.description }}</p>
    <p>{{ props.description }}</p>
  </div>
</template>

<style scoped>
h1 {
  font-size: 70px;
}
</style>
