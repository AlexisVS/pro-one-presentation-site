<script setup lang="ts">
const toggleButtonAnimation = (event: Event) => {
  const element = event.target as HTMLButtonElement;
  element.classList.toggle("active");
  element.classList.toggle("not-active");
};
</script>

<template>
  <button ref="btn" class="btn not-active" @click="toggleButtonAnimation">
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<style lang="scss" scoped>
@use "sass:color";
@import "assets/scss/_variables.scss";

.btn {
  width: 70px;
  cursor: pointer;
  scale: 55%;
  border: none;
  background-color: transparent;
}

.btn > * {
  cursor: pointer;
}

.btn:hover {
  background: transparent;
}

span {
  display: block;
  width: 100%;
  box-shadow: 0 2px 10px 0 opacify(lighten($color-primary, 0.5), 0.5);
  border-radius: 3px;
  height: 8px;
  background: $color-primary;
  transition: all 0.3s;
  position: relative;
}

span + span {
  margin-top: 14px;
}

.active span:nth-child(1) {
  animation: ease 0.7s top forwards;
}

.not-active span:nth-child(1) {
  animation: ease 0.7s top-2 forwards;
}

.active span:nth-child(2) {
  animation: ease 0.7s scaled forwards;
}

.not-active span:nth-child(2) {
  animation: ease 0.7s scaled-2 forwards;
}

.active span:nth-child(3) {
  animation: ease 0.7s bottom forwards;
}

.not-active span:nth-child(3) {
  animation: ease 0.7s bottom-2 forwards;
}

@keyframes top {
  0% {
    top: 0;
    transform: rotate(0);
  }
  50% {
    top: 22px;
    transform: rotate(0);
  }
  100% {
    top: 22px;
    transform: rotate(45deg);
  }
}

@keyframes top-2 {
  0% {
    top: 22px;
    transform: rotate(45deg);
  }
  50% {
    top: 22px;
    transform: rotate(0deg);
  }
  100% {
    top: 0;
    transform: rotate(0deg);
  }
}

@keyframes bottom {
  0% {
    bottom: 0;
    transform: rotate(0);
  }
  50% {
    bottom: 22px;
    transform: rotate(0);
  }
  100% {
    bottom: 22px;
    transform: rotate(135deg);
  }
}

@keyframes bottom-2 {
  0% {
    bottom: 22px;
    transform: rotate(135deg);
  }
  50% {
    bottom: 22px;
    transform: rotate(0);
  }
  100% {
    bottom: 0;
    transform: rotate(0);
  }
}

@keyframes scaled {
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
}

@keyframes scaled-2 {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
