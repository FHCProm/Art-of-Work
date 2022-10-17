<template>
  <div class="row-goal flex flex-row">
    <div>{{ title }}</div>
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

<style scoped lang="scss">
.row-goal {
  font-size: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  &:hover {
    background: var(--gray-300);
  }
}
</style>
