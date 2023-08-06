<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const smoothScroll = (targetPosition: number, duration: number): void => {
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const numFrames = Math.max(60, Math.min(240, Math.ceil(duration / 16))); // Adjust the frame rate (60 FPS minimum, 240 FPS maximum)
  let frame = 0;

  const animation = (): void => {
    frame++;
    const progress = frame / numFrames;
    const ease = easeInOutCubic(progress, startPosition, distance);
    window.scrollTo(0, ease);
    if (frame < numFrames) requestAnimationFrame(animation);
  };

  const easeInOutCubic = (t: number, b: number, c: number): number => {
    t /= 0.5;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  };

  requestAnimationFrame(animation);
};

const scrollSpeed = 100; // Adjust the speed as per your preference
const isScrolling = ref(false);
const targetPosition = ref(0);

const handleScroll = (): void => {
  if (!isScrolling.value) {
    isScrolling.value = true;

    // Determine the target position based on the current scroll position
    targetPosition.value = window.scrollY;

    // Perform the smooth scroll to the target position
    smoothScroll(targetPosition.value, scrollSpeed);

    // Reset isScrolling after a short delay to prevent excessive scroll events
    setTimeout(() => {
      isScrolling.value = false;
    }, scrollSpeed + 50);
  }
};

// Listen for scroll events when the component is mounted
onMounted(() => {
  document.addEventListener("scroll", handleScroll);
});
</script>
