<script setup lang="ts"></script>

<template>
  <header class="header">
    <video class="header__video" autoplay muted loop>
      <source src="assets/videos/water_bamboo-pipe.webm" type="video/webm" />
    </video>
  </header>
</template>

<style scoped lang="css">
.header {
  display: block;
  position: relative;
  top: -65px;
  left: 0;
  width: 100%;
  height: 100dvh;
}

.header__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: -1;
}
</style>
