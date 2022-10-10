<template>
  <div class="digital-timer-pause">
    <div class="digital-timer-pause-square"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.digital-timer-pause {
  width: 3rem;
  height: 3rem;
  display: grid;
  border-radius: 100%;
  box-shadow: $shadow;

  &-square {
    width: 1rem;
    height: 1rem;
    align-self: center;
    justify-self: center;
    background-color: rgba(234, 179, 8, 1);
  }
}
</style>
