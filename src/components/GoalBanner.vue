<template>
  <div class="banner">
    <div class="goal-label mt-5">Current Atomic Goals</div>
    <div v-if="goalSet" class="goal-content">
      <div class="current-goal mt-4">
        Make a design draf for Art of Breaking Make a design draf for Art of
        Breaking Make a design draf for
      </div>
      <div class="goal-set-btn">
        <custom-button
          class="grow mt-4 z-20"
          text="completed"
          btnPadding="0.25rem 0.5rem 0.25rem 0.5rem"
          btnTextColor="var(--gray-900)"
          btnBackgroundColor="var(--gray-300)"
          btnShadowColor="var(--gray-700)"
        ></custom-button>

        <custom-button
          class="grow mt-4 z-10"
          text="set aside"
          btnPadding="0.25rem 0.5rem 0.25rem 0.5rem"
          btnTextColor="var(--gray-900)"
          btnBackgroundColor="var(--gray-300)"
          btnShadowColor="var(--gray-700)"
        ></custom-button>
      </div>
    </div>
    <div v-if="!goalSet">
      <div class="goal-not-set-btn">
        <goal-create-button></goal-create-button>
      </div>
    </div>
    <div class="achievement-label mt-5">Achievements</div>
    <div class="history-goal-container">
      <row-goal
        v-for="history in goalHistory"
        :key="history.title"
        v-bind="history"
      ></row-goal>
    </div>
  </div>
</template>

<script setup>
import RowGoal from "@/components/RowGoal.vue";
import CustomButton from "@/components/buttons/dashboard/CustomButton.vue";
import GoalCreateButton from "@/components/buttons/dashboard/GoalCreateButton.vue";
import { ref } from "vue";

const goalSet = ref(true);
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

<style scoped lang="scss">
.banner {
  width: 100%;
  padding: 0 0.5rem;
  background: var(--gray-200);
  box-shadow: $container-shadow;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-bottom: 1rem;
}

.goal-label {
  @include font-title;
  display: grid;
  align-content: center;
  justify-content: center;
  width: 100%;
  padding: 0.2rem 0;
}

.goal-content {
  max-width: 300px;
  margin: 0 auto;
}
.current-goal {
  @include font-body;
  border-radius: 1rem;
  padding: 0.5rem;
  border: 2px solid var(--gray-500);
  background: var(--gray-300);
  margin-left: 1rem;
  margin-right: 1rem;
}

.goal-set-btn {
  @include font-headline;
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;
}

.goal-not-set-btn {
  display: grid;
  align-content: center;
  justify-content: center;
}

.achievement-label {
  @include font-headline;
  text-align: center;
  padding: 0.2rem 0;
  width: 100%;
}

.history-goal-container {
}

@media screen and (min-width: $breakpoint-small) {
  .banner {
    width: 95%;
  }

  .goal-content {
    max-width: 300px;
    margin: 0 auto;
    display: block;
  }
  .current-goal {
    flex-basis: unset;
    font-family: Georgia, "Times New Roman", Times, serif;
  }
}
</style>
