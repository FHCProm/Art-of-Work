<template>
  <div class="banner">
    <div class="goal-label mt-5">Atomic Goals</div>
    <div v-if="goalSet" class="goal-content">
      <div class="current-goal mt-4">
        Make a design draf for Art of Breaking Make a design draf for Art of
        Breaking
      </div>
      <div class="goal-set-btn">
        <secondary-button
          class="grow mt-4"
          text="completed"
          btnBorderRadius="0.5rem"
          btnPadding="0.25rem 0.5rem 0.25rem 0.5rem"
        ></secondary-button>

        <warning-button
          class="grow mt-4"
          text="set aside"
          btnBorderRadius="0.5rem"
          btnPadding="0.25rem 0.5rem 0.25rem 0.5rem"
        ></warning-button>
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

import SecondaryButton from "@/components/buttons/dashboard/SecondaryButton.vue";
import WarningButton from "@/components/buttons/dashboard/WarningButton.vue";
import GoalCreateButton from "@/components/buttons/dashboard/GoalCreateButton.vue";
import { ref } from "vue";

const goalSet = ref(false);
const goalHistory = ref({
  123: {
    title: "Learn Reactivity",
    startedAt: 1662547612,
    duration: 7200,
  },
  455: {
    title: "Improve the responsiveness of Art of Breaking",
    startedAt: 1662547612,
    duration: 7200,
  },
  666: {
    title: "Learn Responsive Design",
    startedAt: 1662547612,
    duration: 7200,
  },
  777: {
    title: "Learn PHP",
    startedAt: 1662547612,
    duration: 7200,
  },
  888: {
    title: "Learn Laravel",
    startedAt: 1662547612,
    duration: 7200,
  },
  999: {
    title: "Learn Advanced CSS",
    startedAt: 1662547612,
    duration: 7200,
  },
  995: {
    title: "Learn Responsive Design",
    startedAt: 1662547612,
    duration: 7200,
  },
  456: {
    title: "Learn PHP",
    startedAt: 1662547612,
    duration: 7200,
  },
  789: {
    title: "Learn Laravel",
    startedAt: 1662547612,
    duration: 7200,
  },
  698: {
    title: "Learn Advanced CSS",
    startedAt: 1662547612,
    duration: 7200,
  },
});
</script>

<style scoped lang="scss">
.banner {
  width: 100%;
  height: 535px;
  background: var(--gray-200);
  box-shadow: $container-shadow;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-bottom: 1rem;
}

.goal-label {
  display: grid;
  align-content: center;
  justify-content: center;
  font-family: Georgia, "Times New Roman", Times, serif;
  width: 100%;
  padding: 0.2rem 0;
  color: var(--orange-900);
  background: var(--orange-300);
}

.goal-content {
  max-width: 300px;
  margin: 0 auto;
}
.current-goal {
  border-radius: 1rem;
  padding: 0.5rem;
  border: 2px solid var(--gray-500);
  background: var(--gray-300);
  margin-left: 1rem;
  margin-right: 1rem;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.goal-set-btn {
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
  flex-wrap: wrap;
}

.goal-not-set-btn {
  display: grid;
  align-content: center;
  justify-content: center;
}

.achievement-label {
  text-align: center;
  padding: 0.2rem 0;
  font-family: Georgia, "Times New Roman", Times, serif;
  width: 100%;

  background: var(--gray-400);
}

.history-goal-container {
  height: 100%;
  overflow-y: scroll;
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
    border-radius: 1rem;
    padding: 0.5rem;
    margin-left: 1rem;
    margin-right: 1rem;
    font-family: Georgia, "Times New Roman", Times, serif;
  }

  .goal-set-btn {
    flex-basis: unset;
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: 0 auto;
    flex-wrap: wrap;
  }
}
</style>
