<template>
  <div class="create-task-btn" :style="style">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      class="h-5 w-5"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
      />
    </svg>
    <div>Add New Task</div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  btnBorder: {
    type: String,
  },
  btnBorderRadius: {
    type: String,
  },
  btnPadding: {
    type: String,
  },
  btnWidth: {
    type: String,
  },
});

const style = computed(() => ({
  borderRadius: props.btnBorderRadius,
  padding: props.btnPadding,
  border: props.btnBorder,
  width: props.btnWidth,
}));

// const emit = defineEmits(["btn-click"]);
// function isClicked() {
//   emit("btn-click");
// }
</script>

<style lang="scss" scoped>
.create-task-btn {
  @include button-shadow(--yellow-700);
  @include font-headline;
  display: flex;
  align-items: center;
  background: var(--yellow-500);
  color: var(--yellow-900);
  cursor: pointer;
}
</style>
