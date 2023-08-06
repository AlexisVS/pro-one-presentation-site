<template>
  <footer class="footer">
    <FooterWave />
    <div class="footer__content">
      <span>Copyrighted Pro one</span>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "~/assets/scss/main.scss";

//.footer {
//  // For the wave
//  position: relative;
//  top: -5px;
//}

.footer__content {
  display: flex;
  justify-content: center;
  align-items: center;
  @include fluid-type(
    padding-top padding-bottom,
    $font-size--1,
    $font-size-0,
    $minimum-screen-width,
    $maximum-screen-width
  );
  color: $color-background;
  font-size: var(--font-size--2);
  background-color: #74a7c8; /* cold of the most opacity waves */
  font-weight: 500;
}
</style>
