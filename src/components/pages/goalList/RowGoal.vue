<template>
  <div class="goal-container">
    <div class="date-container">
      <div class="date">{{ goalDate }}</div>
      <div class="time">{{ goalTime }}</div>
    </div>
    <div class="goal-detail">
      <div class="tag-title-wrapper">
        <div class="tags">
          <div class="tag" v-for="tag in goal.tags" :key="tag">#{{ tag }}</div>
        </div>
        <div class="goal-title">{{ goal.title }}</div>
      </div>
      <div class="goal-options">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-7 h-7"
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
import moment from "moment";
const props = defineProps({
  goal: {
    type: Object,
  },
});
const goalDate = moment.unix(props.goal.date).format("D-M-YYYY");
const goalTime = moment.unix(props.goal.date).format("h:mm a");
</script>

<style lang="scss" scoped>
.goal-container {
  display: flex;
  width: 100%;
  margin: 1rem 0 0 0;
  padding: 0.3rem 0.5rem 1rem 0.5rem;
  box-shadow: $container-shadow;

  align-items: center;
}
.date-container {
  @include font-label;
  width: 80px;
  display: flex;
  flex-direction: column;
}
.date {
  box-sizing: content-box;
}
.goal-detail {
  display: flex;
  flex: 1;
  align-items: center;
}

.tag-title-wrapper {
  @include font-body;
  flex: 1;
}

.tags {
  display: flex;
}

.tag {
  padding: 0 0.5rem 0 0;
  width: min-content;
}

.goal-title {
  @include font-headline;
}

.goal-options {
  color: var(--gray-500);
  &:hover {
    color: var(--gray-900);
  }
}

@media screen and (min-width: $breakpoint-small) {
  .date-container {
    width: 120px;
    display: flex;
    flex-direction: column;
  }
}

@media screen and (min-width: $breakpoint-large) {
  .date-container {
    width: 160px;
    display: flex;
    flex-direction: column;
  }
}
</style>
