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

  const textElements = section.value?.children[0].children as HTMLCollection;

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
  if (sectionObserver.value)
    sectionObserver.value?.observe(section.value as HTMLElement);
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
        {{ $t("page.home.why_we_doing_that.title") }}
      </h2>
      <p class="fluid-font-size-0">
        {{ $t("page.home.why_we_doing_that.paragraph_1") }}
      </p>
      <p class="fluid-font-size-0">
        {{ $t("page.home.why_we_doing_that.paragraph_2") }}
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
    <!--    <div class="why-we-doing-that__after"></div>-->
  </section>
  <svg
    class="why-we-doing-that__wave"
    style="transform: rotate(180deg); transition: 0.3s"
    version="1.1"
    viewBox="0 0 1440 230"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
        <stop offset="0%" stop-color="rgba(0, 42, 57, 1)"></stop>
        <stop offset="100%" stop-color="rgba(81, 146, 186, 1)"></stop>
      </linearGradient>
    </defs>
    <path
      d="M0,184L48,168.7C96,153,192,123,288,126.5C384,130,480,169,576,187.8C672,207,768,207,864,203.2C960,199,1056,192,1152,172.5C1248,153,1344,123,1440,107.3C1536,92,1632,92,1728,92C1824,92,1920,92,2016,84.3C2112,77,2208,61,2304,46C2400,31,2496,15,2592,26.8C2688,38,2784,77,2880,92C2976,107,3072,100,3168,99.7C3264,100,3360,107,3456,107.3C3552,107,3648,100,3744,80.5C3840,61,3936,31,4032,15.3C4128,0,4224,0,4320,26.8C4416,54,4512,107,4608,126.5C4704,146,4800,130,4896,111.2C4992,92,5088,69,5184,72.8C5280,77,5376,107,5472,134.2C5568,161,5664,184,5760,176.3C5856,169,5952,130,6048,111.2C6144,92,6240,92,6336,80.5C6432,69,6528,46,6624,65.2C6720,84,6816,146,6864,176.3L6912,207L6912,230L6864,230C6816,230,6720,230,6624,230C6528,230,6432,230,6336,230C6240,230,6144,230,6048,230C5952,230,5856,230,5760,230C5664,230,5568,230,5472,230C5376,230,5280,230,5184,230C5088,230,4992,230,4896,230C4800,230,4704,230,4608,230C4512,230,4416,230,4320,230C4224,230,4128,230,4032,230C3936,230,3840,230,3744,230C3648,230,3552,230,3456,230C3360,230,3264,230,3168,230C3072,230,2976,230,2880,230C2784,230,2688,230,2592,230C2496,230,2400,230,2304,230C2208,230,2112,230,2016,230C1920,230,1824,230,1728,230C1632,230,1536,230,1440,230C1344,230,1248,230,1152,230C1056,230,960,230,864,230C768,230,672,230,576,230C480,230,384,230,288,230C192,230,96,230,48,230L0,230Z"
      fill="url(#sw-gradient-0)"
      style="transform: translate(0, 0px); opacity: 1"
    ></path>
  </svg>
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
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }

  &__svg-side {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;
  }

  &__wave {
    position: relative;
    top: -11px;
  }
}

.water-droplet {
  width: 100%;
  position: relative;
  z-index: 1;

  &__big-face {
    fill: transparent;
  }

  &__little-face {
    fill: transparent;
  }

  &__circle {
    transform: rotate(-90deg);
    transform-origin: center;
    z-index: 1;
  }
}

@media screen and (min-width: 1024px) {
  .why-we-doing-that {
    display: flex;
    padding-bottom: 150px;
    padding-left: 1rem;
    padding-right: 1rem;

    &__text-side {
      position: relative;
      width: 50%;
      padding-left: 2rem;
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
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
