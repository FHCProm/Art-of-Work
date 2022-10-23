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
  @include button-shadow("orange");
  color: var(--orange-900);
  background: var(--orange-300);
}
</style>
