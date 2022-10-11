<template>
  <div
    :class="classes"
    :style="styles"
    class="custom-button"
    @click="isClicked"
  >
    <!-- 
  .........................
  .........................
  button without svg 
  .........................
  .........................-->

    <div v-if="!containSVG" class="btn-text">{{ label }}</div>

    <!-- 
  .........................
  .........................
  button with svg 
  .........................
  .........................-->
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },

  modal: {
    type: Boolean,
  },

  cancel: {
    type: Boolean,
  },
});

const emit = defineEmits(["respond"]);

const classes = computed(() => ({
  "modal-btn": props.modal,
  "cancel-btn": props.cancel,
}));

const styles = computed(() => ({}));

function isClicked() {
  emit("respond");
}
</script>

<style lang="scss">
.custom-button {
  color: black;
  border-radius: 0;
  background: transparent;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: grid;
  justify-content: center;
}

.modal-btn {
  width: 100%;
  height: 2.5rem;
  padding: 0.5rem 0 0.5rem 0;
  box-shadow: 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba($color: rgb(21, 114, 227), $alpha: 0.3);
  }
}

.cancel-btn {
  width: 100%;
  color: gray;

  &:hover {
    color: black;
  }
}

@media screen and (min-width: $breakpoint-small) {
}
</style>
