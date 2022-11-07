<template>
  <div class="banner">
    <div class="goal-label mt-5">Current Atomic Goals</div>
    <div v-if="goalSet" class="goal-content">
      <div class="current-goal mt-4">
        Make a design draf for Art of Breaking Make a design draf for Art of
        Breaking Make a design draf for
      </div>
      <div class="option">
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
      </div>
    </div>
    <div v-if="!goalSet">
      <div class="goal-not-set-btn">
        <goal-create-button></goal-create-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import GoalCreateButton from "@/components/buttons/dashboard/GoalCreateButton.vue";
import { ref } from "vue";

const goalSet = ref(true);
</script>

<style scoped lang="scss">
.banner {
  width: 100%;
  padding: 0 0.5rem;

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

.goal-not-set-btn {
  display: grid;
  align-content: center;
  justify-content: center;
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
    display: block;
  }
  .current-goal {
    flex-basis: unset;
    font-family: Georgia, "Times New Roman", Times, serif;
  }
}
</style>
