<template>
  <div>
    <pre v-if="error">
      {{ error }}
    </pre>
    <button @click="handleError">Clear errors</button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: {
    type: Object as PropType<Error>,
    default: null,
  },
});

const handleError = () => clearError({ redirect: "/" });
</script>
