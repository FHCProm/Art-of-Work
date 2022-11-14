<template>
  <layout3070 class="goal-list-layout">
    <div class="goal-definition">
      <div class="goal-question">What is a goal?</div>
      <div class="mt-4 goal-answer">
        A goal can be anything. It can be your problem, homework, job ,etc.
        Anything that you want to remind yourself of can be a goal.
      </div>
      <div>
        <custom-button
          class="mt-2 goal-create"
          text="new goal"
          btn-padding="0.3rem 3rem"
          btn-text-color="var(--orange-900)"
          btn-background-color="var(--orange-500)"
          btn-shadow-color="var(--orange-700)"
        ></custom-button>
      </div>
    </div>
    <div class="current-goal">current goal</div>
    <div class="goal-list">
      <div class="input_decorator">
        <input
          class="search_input"
          type="text"
          placeholder="the goal that you want to"
        />
        <div class="search_svg">
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
    </div>
  </layout3070>
</template>

<script setup>
import Layout3070 from "@/components/Layout3070.vue";
import CustomButton from "@/components/buttons/CustomButton.vue";
</script>

<style lang="scss" scoped>
.goal-definition {
  grid-column: 1/2;
  grid-row: 1/2;
  width: 100%;
}

.goal-question {
  @include font-title;
  display: none;
}
.goal-answer {
  @include font-body;
  display: none;
}

.goal-create {
  @include font-headline;
}

.current-goal {
  grid-column: 1/2;
  grid-row: 2/3;
  width: 100%;
  background: green;
}

.goal-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: 1/2;
  grid-row: 3/4;
  width: 100%;
}

.input_decorator {
  display: flex;

  width: 95%;
  border-radius: var(--input-border-radius);
  box-sizing: border-box;
  border: 1px solid var(--gray-500);
  .search_input {
    flex-grow: 2;
    padding: 1rem;
    border-radius: inherit;
    outline: none;
    &:focus,
    &:focus ~ .search_svg {
      background: var(--gray-100);
    }
  }
  .search_svg {
    border-radius: inherit;
    box-sizing: content-box;
    padding: 0 2rem;
    width: 2rem;
  }

  svg {
    width: 100%;
    height: 100%;
  }
}

.search_input:focus ~ .search_svg {
  background: var(--gray-200);
}

@media screen and (min-width: $breakpoint-small) {
  .goal-list-layout {
    grid-template-rows: min-content 1fr;
  }
  .goal-definition {
    grid-column: 1/2;
    grid-row: 1/2;
    height: 200px;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
  }

  .goal-question {
    display: unset;
  }
  .goal-answer {
    display: unset;
  }

  .goal-create {
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
  }

  .current-goal {
    align-self: flex-start;
    grid-column: 1/2;
    grid-row: 2/3;
    height: 400px;
  }

  .goal-list {
    grid-column: 2/3;
    grid-row: 1/3;
    height: 700px;
    align-self: flex-start;
  }
}
</style>
