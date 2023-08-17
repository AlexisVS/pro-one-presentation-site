<script lang="ts" setup>
const navigation = ref<Element | null>(null);

const handleScroll = (navigation: Element): any => {
  if (navigation) {
    if (window.scrollY <= 65) {
      navigation.classList.add("top");
    } else {
      navigation.classList.remove("top");
    }
  }
};

onMounted(() => {
  navigation.value = document.querySelector("#navigation");
  if (navigation.value) {
    const navigationElement = navigation.value as Element;
    window.addEventListener("scroll", handleScroll(navigationElement));
  }
});

onUnmounted(() => {
  const navigationElement = navigation.value as Element;
  window.removeEventListener("scroll", handleScroll(navigationElement));
});
</script>

<template>
  <div>
    <TheHeader />
    <PageHomeSocietyWhoWeAre />
    <PageHomeSocietyWhyWeDoingThat />
    <PageHomeProoneFilter />
    <PageHomeConclusion />
  </div>
</template>

<style lang="scss">
@use "sass:color";
@import "~/assets/scss/_variables.scss";

#navigation.top {
  /* Add your styles for the navigation when at the top */
  background: linear-gradient(
    rgba(0, 0, 0, 0.4) 60%,
    rgba(0, 0, 0, 0)
  ) !important;
}
</style>
