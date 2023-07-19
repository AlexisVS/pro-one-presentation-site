<template>
  <div class="layout">
    <TheNavigation class="layout__navigation" />
    <div class="layout__content">
      <slot />
    </div>
    <TheFooter class="layout__footer" />
  </div>
</template>

<style lang="sass" scoped>
@import "assets/scss/main.scss"

.layout
  display: grid
  grid-template-areas: "navigation" "content" "footer"
  grid-template-rows: auto 1fr auto
  min-height: 100dvh
  background-color: $color-background

  &__navigation
    grid-area: navigation
    height: 65px
    align-items: center
    display: flex
    justify-content: space-between
    /* Value 0 for mobile version */
    padding-left: 11px
    padding-right: 0
    z-index: 10

  &__content
    grid-area: content
    background-color: $color-background

    & > div
      height: 100%

  &__footer
    grid-area: footer
    z-index: 10
</style>
