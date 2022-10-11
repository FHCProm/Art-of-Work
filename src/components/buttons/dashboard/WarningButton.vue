<template>
  <button class="warning-btn" :style="style">{{ text }}</button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  text: {
    type: String,
  },
  btnBorder: {
    type: String,
  },
  btnBorderRadius: {
    type: String,
  },
  btnPadding: {
    type: String,
  },
});

const style = computed(() => ({
  borderRadius: props.btnBorderRadius,
  padding: props.btnPadding,
  border: props.btnBorder,
}));
</script>

<style lang="scss" scoped>
.warning-btn {
  background: var(--red-300);
  color: var(--red-900);
  &:hover {
    background: var(--red-500);
    color: var(--red-100);
  }
}
</style>
