<script setup lang="ts">
import TransitionBase from "../components/Transitions/TransitionBase.vue";
</script>
<template>
  <div>
    <TheHeader />
    <HomePageSocietyWhoWeAre />
    <TransitionBase>
      <p>Lorem ipsum dolor sit amet</p>
    </TransitionBase>
  </div>
</template>

<style>
/* Used for the default layout !! */
.layout__content {
  height: calc(100% - 65px);
}
</style>
