<template>
  <div class="goal-list-container">
    <div class="date">{{ goal.date }}</div>
    <div class="goal-detail">
      <div class="tag-title-wrapper">
        <div class="tag">{{ goal.tag }}</div>
        <div class="goal-title">{{ goal.title }}</div>
      </div>
      <div class="goal-options">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  goal: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped>
.goal-list-container {
  display: flex;
  width: 100%;
  align-items: center;
}
.date {
  width: 70px;
  box-sizing: content-box;
}
.goal-detail {
  display: flex;
  flex: 1;
  align-items: center;
}

.tag-title-wrapper {
  flex: 1;
}

.tag {
  padding: 0 1rem;
  width: min-content;
}
</style>
