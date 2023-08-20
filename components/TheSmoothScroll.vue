<template>
  <div class="the-smooth-scroll">
    <slot />
    <!-- Render the content inside the component -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import Lenis from "@studio-freight/lenis";

// Create a lenis instance
const lenis = ref<Lenis | null>(null);

// Request animation frame to continuously update the scroll position
const raf = (time: any) => {
  lenis.value?.raf(time);
  requestAnimationFrame(raf);
};

// Start the animation loop
onMounted(() => {
  if (window) {
    lenis.value = new Lenis({
      lerp: 1,
      duration: 1.3,
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 0.5,
      normalizeWheel: true,
      // easing: (x: number) => cubicBezier(x, 0.45, 0.45, 0.28, 1),
    });

    requestAnimationFrame(raf);
    // Attach the scroll event handler to the lenis instance
    // lenis.value?.on("scroll", handleScroll);
  }
});

// Destroy the lenis instance when the component is unmounted
onUnmounted(() => {
  lenis.value?.destroy();
});
</script>

<style lang="css">
/* Recommended CSS for smooth scrolling */

/* Ensure HTML element's height is auto */
.the-smooth-scroll,
html.lenis {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto;
}

/* Apply scroll behavior settings */
.the-smooth-scroll .lenis.lenis-smooth,
.lenis.lenis-smooth {
  scroll-behavior: auto;
}

/* Apply settings for nested scroll elements */
.the-smooth-scroll .lenis.lenis-smooth [data-lenis-prevent],
.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

/* Hide overflow when lenis is stopped */
.the-smooth-scroll .lenis.lenis-stopped,
.lenis.lenis-stopped {
  overflow: hidden;
}

/* Disable pointer events on iframes during scrolling */
.the-smooth-scroll .lenis.lenis-scrolling iframe,
.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
</style>
