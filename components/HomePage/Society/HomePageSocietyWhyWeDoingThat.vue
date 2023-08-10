<script lang="ts" setup></script>

<template>
  <NuxtImg
    alt="Water wall"
    class="image-water-wall"
    src="./images/water/water_wall.jpg"
  />
  <section class="why-we-doing-that"></section>
  <div class="why-we-doing-that__after"></div>
</template>

<style lang="scss" scoped>
@use "sass:color";
@import "@/assets/scss/variables.scss";

.image-water-wall {
  width: 100%;
  height: 44dvw;
  object-fit: cover;
  object-position: bottom center;
  filter: brightness(93%);
}

.why-we-doing-that {
  height: 70dvh;
  background-color: #002a39;
  position: relative;
  top: -10px;

  &::before {
    content: "";
    position: absolute;
    top: -15px;
    left: 0;
    width: 100%;
    height: 20px;
    background-color: #002a39;
    box-shadow: #002a39 0 0 50px 50px;
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
    height: 480px;
    position: relative;
    top: -480px;
  }
}
</style>
