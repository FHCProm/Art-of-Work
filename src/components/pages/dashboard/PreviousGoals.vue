<template>
  <line-container :tablet-border-bottom="true" class="previous-goals">
    <div class="achievement-label mt-5">Achievements</div>
    <div class="history-goal-container">
      <row-goal
        v-for="history in goalHistory"
        :key="history.title"
        v-bind="history"
      ></row-goal>
    </div>
  </line-container>
</template>

<script setup>
import RowGoal from "@/components/pages/dashboard/RowGoal.vue";
import LineContainer from "@/components/LineContainer.vue";
import { ref } from "vue";
const goalHistory = ref(fetchLatest3HistoryGoals());
function fetchLatest3HistoryGoals() {
  return {
    123: {
      title: "Learn Reactivity",
      startedAt: 1662547612,
      durationInUnix: 10800,
    },
    698: {
      title: "Learn Advanced CSS",
      startedAt: 1662547612,
      durationInUnix: 7250,
    },
    999: {
      title: "Learn how to standardize font design",
      startedAt: 1662547612,
      durationInUnix: 60570,
    },
  };
}
</script>

<style lang="scss" scoped>
.achievement-label {
  @include font-title;
  padding: 0.2rem 0;
  width: 100%;
}

.previous-goals {
  width: 100%;
}
</style>
