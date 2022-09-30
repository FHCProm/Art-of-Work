<template>
  <div class="banner">
    <div class="goal-label mt-5">Atomic Goals</div>
    <div v-if="goalSet" class="goal-content">
      <div class="current-goal mt-4">
        Make a design draf for Art of Breaking Make a design draf for Art of
        Breaking
      </div>
      <div class="goal-set-btn">
        <rounded-button
          :goalBannerWithGoalSet="true"
          text="completed"
          class="grow"
        ></rounded-button>
        <rounded-button
          :goalBannerWithGoalSet="true"
          text="set aside"
          class="grow"
        ></rounded-button>
      </div>
    </div>
    <div v-if="!goalSet">
      <div class="goal-not-set-btn">
        <rounded-button
          text="set a goal"
          :containSVG="true"
          :goalBannerWithGoalNotSet="true"
        ></rounded-button>
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
import RoundedButton from "@/components/buttons/RoundedButton.vue";
import RowGoal from "@/components/RowGoal.vue";
import RectangleButton from "@/components/buttons/RectangleButton.vue";
import { ref } from "@vue/reactivity";

const goalSet = ref(true);
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
});
</script>

<style scoped lang="scss">
.banner {
  width: 100%;
  height: stretch;
  // border: 1px solid white;
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
  background: linear-gradient(
    0deg,
    rgb(241, 110, 3) 0%,
    rgb(249, 166, 97) 100%
  );
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
}

.goal-content {
  max-width: 300px;
  margin: 0 auto;
}
.current-goal {
  border-radius: 1rem;
  padding: 0.5rem;
  color: white;
  border: 2px dashed white;
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

  background: rgba(255, 255, 255, 0.4);
  color: white;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
}

.history-goal-container {
  height: 270px;
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
    color: white;
    border: 2px dashed white;
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