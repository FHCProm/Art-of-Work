<template>
  <button class="secondary-btn" :style="style">{{ text }}</button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  text: {
    type: String,
  },
  btnBorderRadius: {
    type: String,
  },
  btnPadding: {
    type: String,
  },
  btnBorder: {
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
.secondary-btn {
  color: var(--teal-900);
  background: var(--teal-300);

  &:hover {
    background: var(--teal-700);
    color: var(--teal-100);
  }
}
</style>
