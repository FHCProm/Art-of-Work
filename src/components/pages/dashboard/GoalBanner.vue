<template>
  <line-container :tablet-border-bottom="true" class="banner">
    <div class="goal-label mt-5">Current Atomic Goal</div>
    <div v-if="goalSet" class="goal-content">
      <div class="current-goal mt-4">
        Make a design draf for Art of Work Make a design draf for Art of
        Breaking Make a design draf for
      </div>
      <router-link to="/goalList" class="option">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path
            fill-rule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
            clip-rule="evenodd"
          />
        </svg>
        Change
      </router-link>
    </div>
    <div v-if="!goalSet" class="goal-not-set-content">
      <div>
        <div class="goal-not-set-content-text">You dont have a goal yet</div>
        <div class="goal-not-set-content-btn">
          <goal-create-button></goal-create-button>
        </div>
      </div>
    </div>
  </line-container>
</template>

<script setup>
import GoalCreateButton from "@/components/buttons/dashboard/GoalCreateButton.vue";
import LineContainer from "@/components/LineContainer.vue";
import { ref } from "vue";

const goalSet = ref(true);
</script>

<style scoped lang="scss">
.banner {
  width: 100%;
  height: 100%;
  min-height: 200px;
  padding: 0 0.5rem;
  border: unset;
  display: flex;
  flex-direction: column;
  align-content: center;
}

.goal-label {
  @include font-title;
  width: 100%;
  padding: 0.2rem 0;
}

.goal-content {
  @include font-body;

  display: grid;
}

.goal-not-set-content {
  display: grid;
  align-items: center;
  height: 100%;
  &-text {
    @include font-body;
  }
  &-btn {
    float: right;
    color: var(--yellow-500);
  }
}

.option {
  display: grid;
  grid-template-columns: min-content min-content;
  justify-content: flex-end;
  align-items: center;
  color: var(--yellow-500);
}

@media screen and (min-width: $breakpoint-small) {
  .banner {
    border-bottom: 1.5px solid var(--gray-300);
  }
  .goal-content {
    max-width: 300px;
    margin: 0 auto;
  }
  .current-goal {
    flex-basis: unset;
    font-family: Georgia, "Times New Roman", Times, serif;
  }
}
</style>
