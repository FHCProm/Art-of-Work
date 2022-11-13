<template>
  <layout3070 class="goal-list-layout">
    <div class="goal-definition">what is goal?</div>
    <div class="current-goal">current goal</div>
    <div class="goal-list">goal list</div>
  </layout3070>
</template>

<script setup>
import Layout3070 from "@/components/Layout3070.vue";
</script>

<style lang="scss" scoped>
.goal-definition {
  grid-column: 1/2;
  grid-row: 1/2;
  width: 100%;
  background: red;
}
.current-goal {
  grid-column: 1/2;
  grid-row: 2/3;
  width: 100%;
  background: green;
}

.goal-list {
  grid-column: 1/2;
  grid-row: 3/4;
  width: 100%;
  background: yellow;
}

@media screen and (min-width: $breakpoint-small) {
  .goal-list-layout {
    grid-template-rows: min-content 1fr;
  }
  .goal-definition {
    grid-column: 1/2;
    grid-row: 1/2;
    height: 200px;
    align-self: flex-start;
  }

  .current-goal {
    align-self: flex-start;
    grid-column: 1/2;
    grid-row: 2/3;
    height: 400px;
  }

  .goal-list {
    grid-column: 2/3;
    grid-row: 1/3;
    height: 700px;
    align-self: flex-start;
  }
}
</style>
