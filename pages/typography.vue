<script setup lang="ts">
const title = "Typography type scale";
const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem est exercitationem ipsa laborum modi nobis possimus sed! Illo, ipsum, sit. Asperiores deleniti, dolor doloremque enim eum nostrum pariatur quod totam.";

const fontSize = [
  "9",
  "8", // h1
  "7",
  "6", // h2
  "5",
  "4", // h3
  "3",
  "2", // h4
  "1",
  "0", // base
  "-1",
  "-2",
];
</script>

<template>
  <div>
    <h1>Fixed size</h1>
    <p
      v-for="size in fontSize"
      :key="'font-size-' + size"
      :class="`font-size-${size}`"
      :style="
        size === '0'
          ? 'text-decoration: overline underline; background-color: lightgray;'
          : ''
      "
    >
      {{ title }}
    </p>
    <br />
    <br />
    <hr />
    <h1 style="text-decoration: underline">Fluid typography</h1>
    <br />
    <p
      v-for="size in ['4', '3', '2', '1', '0', '-1']"
      :key="'fluid-font-size-' + size"
      :class="`fluid-font-size-${size}`"
      :style="
        size === '0'
          ? 'text-decoration: overline underline; background-color: lightgray;'
          : ''
      "
    >
      Fluid typography size {{ size }}
    </p>
    <p class="fluid-font-size-0">Fluid typography size base</p>
    <hr />
    <br />
    <br />
    <hr />
    <br />
    <h1>{{ title }}</h1>
    <p>{{ paragraph }}</p>
    <br />
    <h2>{{ title }}</h2>
    <p>{{ paragraph }}</p>
    <br />
    <h3>{{ title }}</h3>
    <p>{{ paragraph }}</p>
    <br />
    <h4>{{ title }}</h4>
    <p>{{ paragraph }}</p>
  </div>
</template>

<style scoped></style>
