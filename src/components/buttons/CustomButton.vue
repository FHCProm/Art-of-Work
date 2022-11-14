<template>
  <button class="custom-btn" :style="style">{{ text }}</button>
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
  btnTextColor: {
    type: String,
  },
  btnBackgroundColor: {
    type: String,
  },
  btnShadowColor: {
    type: String,
  },
});

const style = computed(() => ({
  borderRadius: props.btnBorderRadius ?? "var(--button-border-radius)",
  padding: props.btnPadding,
  border: props.btnBorder,
  "--color": props.btnTextColor,
  "--background-color": props.btnBackgroundColor,
  "--shadow-color": props.btnShadowColor,
}));
</script>

<style lang="scss" scoped>
.custom-btn {
  @include button-shadow(--shadow-color);
  color: var(--color);
  background: var(--background-color);
}
</style>
