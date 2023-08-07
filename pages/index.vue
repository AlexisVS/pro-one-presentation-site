<script setup lang="ts">
import TransitionBase from "../components/Transitions/TransitionBase.vue";
</script>
<template>
  <div>
    <TheHeader />
    <HomePageSocietyWhoWeAre />
    <TransitionBase>
      <p>Lorem ipsum dolor sit amet</p>
      <!--      <img src="@/assets/images/brand/brand.png" alt="" />-->
      <!--      <img src="~/assets/images/brand/brand.png" alt="" />-->
      <!--      <img src="assets/images/brand/brand.png" alt="" />-->
      <!--      <img src="public/images/brand/brand.png" alt="" />-->
      <!--      <img src="/public/images/brand/brand.png" alt="" />-->
      <!--      <img src="/images/brand/brand.png" alt="" />-->

      <NuxtImg
        class="logo"
        src="./images/brand/brand.png"
        alt="Logo"
        height="40"
      />
      <!--      <NuxtImg-->
      <!--        class="logo"-->
      <!--        src="/public/images/brand/brand.png"-->
      <!--        alt="Logo"-->
      <!--        height="40"-->
      <!--      />-->
      <!--      <NuxtImg-->
      <!--        class="logo"-->
      <!--        src="public/images/brand/brand.png"-->
      <!--        alt="Logo"-->
      <!--        height="40"-->
      <!--      />-->
      <!--      <NuxtImg-->
      <!--        class="logo"-->
      <!--        src="/images/brand/brand.png"-->
      <!--        alt="Logo"-->
      <!--        height="40"-->
      <!--      />-->
      <!--      <NuxtImg-->
      <!--        class="logo"-->
      <!--        src="images/brand/brand.png"-->
      <!--        alt="Logo"-->
      <!--        height="40"-->
      <!--      />-->
      <!--      <img src="images/brand/brand.png" alt="" />-->
      <!--      <img src="/brand/brand.png" alt="" />-->
      <!--      <img src="brand/brand.png" alt="" />-->
    </TransitionBase>
  </div>
</template>

<style>
/* Used for the default layout !! */
.layout__content {
  height: calc(100% - 65px);
}
</style>
