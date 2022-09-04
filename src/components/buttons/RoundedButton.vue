<template>
  <button class="rounded-btn px-2 py-1">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped>
.rounded-btn {
  color: white;
  border-radius: 1rem;
  margin-top: 1rem;

  border: 1px solid white;
  background: transparent;
}

.rounded-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>