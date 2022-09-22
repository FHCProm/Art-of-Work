<template>
  <div class="row-goal flex flex-row">
    <div class="flex flex-col basis-3/4 items-start">
      <div>{{ title }}</div>
      <div>by 23/8/2021</div>
    </div>
    <div class="flex flex-col basis-1/4 items-start justify-center">
      <div>1 hr</div>
      <div>23 min</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    required: true,
    type: String,
  },
  startedAt: {
    required: true,
    type: Number,
  },
  duration: {
    required: true,
    type: Number,
  },
});
</script>

<style scoped>
.row-goal {
  border: 1px solid white;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: white;
}
</style>