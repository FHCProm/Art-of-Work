<template>
  <button class="primary-btn" :style="style">{{ text }}</button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  text: {
    type: String,
  },
  borderRadius: {
    type: String,
  },
  padding: {
    type: String,
  },
});

const style = computed(() => ({
  borderRadius: props.borderRadius,
  padding: props.padding,
}));
</script>

<style lang="scss" scoped>
.primary-btn {
  border: 1px solid var(--yellow-700);
  background: var(--yellow-100);

  &:hover {
    background: var(--yellow-300);
  }
}
</style>
