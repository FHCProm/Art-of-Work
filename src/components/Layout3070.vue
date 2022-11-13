<template>
  <div class="layout3070">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.layout3070 {
  max-width: 80rem;
  margin: auto;
  grid-template-columns: 1fr;
  display: grid;
  justify-items: center;
  align-items: center;
}

@media screen and (min-width: $breakpoint-small) {
  .layout3070 {
    grid-template-columns: 30% 70%;
  }
}

@media screen and (min-width: $breakpoint-medium) {
  .layout3070 {
    grid-template-columns: 25% 75%;
  }
}
</style>
