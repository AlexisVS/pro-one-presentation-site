import { DefineComponent } from "vue";
import { VueI18n } from "vue-i18n";

declare module "@vue/runtime-core" {
  // Provide the types for this.$t and this.$i18n properties
  interface ComponentCustomProperties {
    $t: VueI18n["t"];
    $i18n: VueI18n;
  }
}
