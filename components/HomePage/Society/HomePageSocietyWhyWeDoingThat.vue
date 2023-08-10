<script lang="ts" setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section = ref<HTMLElement | null>(null);
const svg = ref<HTMLElement | null>(null);
const sectionObserver = ref<IntersectionObserver | null>(null);
const circleAnimation = ref<SVGAnimateElement | null>(null);
const hasIntersectedOnce = ref(false);

onMounted(() => {
  circleAnimation.value?.endElement();
  const tl = gsap.timeline({});
  tl.pause(0);

  const textElements = section.value?.children[0].children;

  const textFromVar = {
    opacity: 0,
    y: 100,
  };

  const textToVar = {
    opacity: 1,
    y: 0,
    duration: 0.45,
  };

  tl.fromTo(
    ".water-droplet__big-face",
    { fill: "#002a39" }, // Start color (blue)
    { fill: "#01baf2", duration: 1, delay: 1 }, // Desired color and animation duration
  )
    .fromTo(
      ".water-droplet__little-face",
      { fill: "#002a39" }, // Start color (blue)
      { fill: "#5192ba", duration: 1 }, // Desired color and animation duration
      "-=1",
    )
    .fromTo(textElements[0], textFromVar, textToVar, "-=1")
    .fromTo(textElements[1], textFromVar, textToVar, "-=0.75")
    .fromTo(textElements[2], textFromVar, textToVar, "-=0.5");

  sectionObserver.value = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        if (hasIntersectedOnce.value) return;
        tl.play();
        circleAnimation.value?.beginElement();
        hasIntersectedOnce.value = true;
      }
    },
    {
      threshold: 0.5,
    },
  );

  sectionObserver.value?.observe(section.value);
});

onUnmounted(() => {
  if (sectionObserver.value) {
    sectionObserver.value?.disconnect();
  }
});
</script>

<template>
  <NuxtImg
    alt="Water wall"
    class="image-water-wall"
    src="./images/water/water_wall.jpg"
  />
  <section ref="section" class="why-we-doing-that">
    <div class="why-we-doing-that__text-side">
      <h2 class="fluid-font-size-3">
        {{ $t("home.why_we_doing_that.title") }}
      </h2>
      <p class="fluid-font-size-0">
        {{ $t("home.why_we_doing_that.paragraph_1") }}
      </p>
      <p class="fluid-font-size-0">
        {{ $t("home.why_we_doing_that.paragraph_2") }}
      </p>
    </div>
    <div class="why-we-doing-that__svg-side">
      <svg
        ref="svg"
        class="water-droplet"
        height="512px"
        viewBox="0 0 512 512"
        width="512px"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          class="water-droplet__circle"
          cx="256"
          cy="256"
          fill="none"
          r="200"
          stroke="#28c968"
          stroke-dasharray="0 1257"
          stroke-width="20"
        >
          <animate
            ref="circleAnimation"
            attributeName="stroke-dasharray"
            begin="indefinite"
            dur="1s"
            fill="freeze"
            from="0 1257"
            to="1257 0"
          />
        </circle>
        <path
          class="water-droplet__big-face"
          d="M352.017,230.857L256,92.514l-96.017,138.343c-32.236,46.445-26.604,109.306,13.373,149.283l0,0
	c45.642,45.643,119.644,45.643,165.287,0l0,0C378.621,340.162,384.251,277.303,352.017,230.857z"
        />
        <path
          class="water-droplet__little-face"
          d="M226.585,380.14L226.585,380.14c-14.229-39.977-16.233-102.838-4.759-149.283L256,92.514
	l-96.017,138.343c-32.236,46.445-26.604,109.306,13.373,149.283l0,0c22.822,22.822,52.732,34.233,82.644,34.233
	C245.354,414.372,234.708,402.961,226.585,380.14z"
        />
      </svg>
    </div>
  </section>
  <div class="why-we-doing-that__after"></div>
</template>

<style lang="scss" scoped>
@use "sass:color";
@import "~/assets/scss/variables.scss";

.image-water-wall {
  width: 100%;
  height: 44dvw;
  object-fit: cover;
  object-position: bottom center;
  filter: brightness(93%);
}

.why-we-doing-that {
  background-color: #002a39;
  position: relative;
  top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  min-height: 512px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20px;
    background-color: #002a39;
    box-shadow: #002a39 0 0 80px 120px;
  }

  &__text-side {
    color: white;
    z-index: 2;
    position: absolute;
    top: 11%;
    left: 0;
    padding: 0 1rem;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  }

  &__svg-side {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  &__after {
    background-image: linear-gradient(
      to bottom,
      #002a39,
      #3b5662,
      #72868e,
      #adb9bd,
      #ebeff0
    );
    height: 240px;
    position: relative;
    top: -10px;
  }
}

.water-droplet {
  position: relative;
  z-index: 1;

  &__big-face {
    fill: transparent;
  }

  &__little-face {
    fill: transparent;
  }

  &__circle {
    //fill: #28c968;
    transform: rotate(-90deg);
    transform-origin: center;
    z-index: 1;
  }
}

@media screen and (min-width: 1024px) {
  .why-we-doing-that {
    display: flex;
    padding-bottom: 200px;

    &__text-side {
      position: relative;
      width: 50%;
    }

    &__svg-side {
      width: 50%;
      position: relative;

      display: flex;
      justify-content: center;
      align-items: flex-start;
    }
  }
}
</style>