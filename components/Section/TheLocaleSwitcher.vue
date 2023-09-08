<script lang="ts" setup>
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();
const { locale: currentLocale, locales: availableLocales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
  <div class="local-switcher">
    <div
      v-for="(locale, index) in availableLocales"
      :key="locale.code"
      class="local-switcher__item"
    >
      <NuxtLink
        :class="
          'local-switcher__item__locale ' +
          (width < 1024 ? ' fluid-font-size-0' : 'fluid-font-size-0') +
          (locale.code === currentLocale
            ? ' local-switcher__item__locale--active '
            : '')
        "
        :to="switchLocalePath(locale.code)"
        @click.prevent.stop="$i18n.setLocale(locale.code)"
      >
        {{ locale.code.toUpperCase() }}
      </NuxtLink>
      <span
        v-if="index < availableLocales.length - 1"
        class="local-switcher__item__spacer fluid-font-size-0"
      >
        |
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";

.local-switcher {
  display: flex;

  &__item {
    display: inline-flex;
    align-items: center;
    font-weight: 660;
    text-shadow: 0 0 1px transparentize(darken($color-primary, 100%), 0);

    &__locale {
      color: darken($color-primary, 10%);
      transition: color 350ms ease-out;

      &:visited {
        color: darken($color-primary, 10%);
      }

      &:hover {
        color: lighten($color-primary, 10%);
        transition: color 350ms ease-out;
      }

      &--active {
        color: $color-accent;
        transition: color 350ms ease-out;
        pointer-events: none;

        &:visited {
          color: $color-accent;
        }
      }
    }

    &__spacer {
      margin: 0 0.5rem;
      color: $color-primary;
    }
  }
}

@media screen and (min-width: 1024px) {
  .local-switcher {
    &__item {
      font-weight: 580;
    }
  }
}
</style>