<template>
  <button class="warning-btn" :style="style">{{ text }}</button>
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
.warning-btn {
  border: 1px solid var(--red-700);
  background: var(--red-100);
  &:hover {
    background: var(--red-300);
  }
}
</style>
