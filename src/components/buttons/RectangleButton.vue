<template>
  <button :class="classes" :style="styles" class="custom-button">
    {{ label }}
  </button>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  digitalTimer: {
    type: Boolean,
    default: false,
  },
  taskBanner: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
  },
  padding: {
    type: String,
  },
});

const classes = computed(() => ({
  "digital-clock-btn": props.digitalTimer,
  "task-banner-btn": props.taskBanner,
}));

const styles = computed(() => ({
  width: props.width,
  padding: props.padding,
}));
</script>






<style>
.custom-button {
  color: black;
  border-radius: 0;
  background: transparent;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

.digital-clock-btn {
  background: rgba(234, 179, 8, 1);
  background: linear-gradient(
    0deg,
    rgb(236, 167, 6) 0%,
    rgb(250, 212, 99, 1) 100%
  );
  border: none;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
}
.digital-clock-btn:hover {
  background: rgb(250, 212, 99);
  background: linear-gradient(
    0deg,
    rgba(232, 176, 46) 0%,
    rgb(242, 222, 161) 100%
  );
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    15px 15px 20px 0px rgba(0, 0, 0, 0.1), 10px 10px 5px 0px rgba(0, 0, 0, 0.1);
}

.task-banner-btn {
  border: 1px solid rgb(234, 179, 8);
  color: rgb(234, 179, 8);
}
</style>