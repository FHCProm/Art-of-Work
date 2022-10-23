<template>
  <button class="primary-btn" :style="style">{{ text }}</button>
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
.primary-btn {
  @include button-shadow("yellow");
  background: var(--yellow-300);
  color: var(--gray-900);
}
</style>
