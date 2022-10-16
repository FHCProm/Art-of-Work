<template>
  <div class="dismiss-btn" :style="style">{{ text }}</div>
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
.dismiss-btn {
  color: gray;

  &:hover {
    color: black;
  }
}
</style>
