<template>
  <section class="banner">
    <div class="goal-label mt-5 text-xl">Atomic Goals</div>
    <div class="current-goal text-xl mt-4">
      Make a design draf for Art of Breaking
    </div>
    <div class="flex flex-row">
      <rounded-button
        text="completed"
        class="basis-1/2 ml-4 mr-2"
      ></rounded-button>
      <rounded-button
        text="abandon"
        class="basis-1/2 ml-2 mr-4"
      ></rounded-button>
    </div>
    <div class="achievement-label mt-5 text-xl">Achievements</div>
    <row-goal></row-goal>
    <row-goal></row-goal>
    <row-goal></row-goal>
    <row-goal></row-goal>
  </section>
</template>

<script>
import RoundedButton from "@/components/buttons/RoundedButton.vue";
import RowGoal from "@/components/RowGoal.vue";
export default {
  components: {
    RoundedButton,
    RowGoal,
  },
};
</script>

<style scoped>
.banner {
  width: 400px;
  min-height: 650px;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-bottom: 1rem;
}

.goal-label {
  text-align: center;
  padding-top: 0.5rem;
  font-family: Georgia, "Times New Roman", Times, serif;
  width: 100%;
  height: 55px;
  background: linear-gradient(
    0deg,
    rgb(241, 110, 3) 0%,
    rgb(249, 166, 97) 100%
  );
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
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
.achievement-label {
  text-align: center;
  padding-top: 0.5rem;
  font-family: Georgia, "Times New Roman", Times, serif;
  width: 100%;
  height: 55px;
  background: rgba(255, 255, 255, 0.4);
  color: white;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
}
</style>