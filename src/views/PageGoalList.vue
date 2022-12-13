<template>
  <layout3070 class="goal-list-layout">
    <line-container
      :tablet-border-bottom="true"
      :mobile-border-bottom="true"
      class="goal-definition relative"
    >
      <div class="goal-question">
        <div>Goal</div>
        <div class="px-2" @click="showDefinition = !showDefinition">
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
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </div>
      </div>
      <div v-if="showDefinition" class="mt-4 goal-answer">
        A goal can be anything. It can be your problem, homework, job ,etc.
        Anything that you want to remind yourself of can be a goal.
      </div>
      <div>
        <custom-button
          class="mt-2 goal-create"
          text="new goal"
          btn-padding="0.3rem 1rem"
          btn-text-color="var(--orange-900)"
          btn-background-color="var(--orange-500)"
          btn-shadow-color="var(--orange-700)"
        ></custom-button>
      </div>
    </line-container>
    <div class="current-goal">current goal</div>
    <line-container class="goal-list" :tablet-border-left="true">
      <div class="search_container">
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
      <div class="goal-list-containers">
        <row-goal v-for="goal in goals" :goal="goal" :key="goal.id"></row-goal>
      </div>
    </line-container>
  </layout3070>
</template>

<script setup>
import Layout3070 from "@/components/Layout3070.vue";
import CustomButton from "@/components/buttons/CustomButton.vue";
import RowGoal from "@/components/pages/goalList/RowGoal.vue";
import LineContainer from "@/components/LineContainer.vue";
import { ref } from "vue";

const goals = ref([
  {
    id: 232344324,
    date: 1639283173,
    tags: ["worklife", "art"],
    title: "improve art of breaking design",
  },
  {
    id: 24434434,
    date: 163918000,
    tags: ["health"],
    title: "Food that can give me more energy for everyday work",
  },
  {
    id: 24434345,
    date: 163918000,
    tags: ["sit"],
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, fuga?",
  },
  {
    id: 2443342,
    date: 163918000,
    tags: ["dolor"],
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, expedita.",
  },
  {
    id: 24434343,
    date: 163918000,
    tags: ["ipsum"],
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quaerat!",
  },
]);

const showDefinition = ref(false);
</script>

<style lang="scss" scoped>
.goal-list-layout {
}
.goal-definition {
  grid-column: 1/2;
  grid-row: 1/2;
  width: 100%;
}

.goal-question {
  @include font-title;
  display: flex;
  flex-direction: row;
}
.goal-answer {
  @include font-body;
  display: none;
}

.goal-create {
  @include font-headline;
}

.current-goal {
  display: none;
  grid-column: 1/2;
  grid-row: 2/3;
  width: 100%;
  background: green;
}

.goal-list {
  padding: 1rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: 1/2;
  grid-row: 3/4;
  width: 100%;
}

.search_container {
  display: flex;
  width: 95%;
  border-radius: var(--input-border-radius);
  box-sizing: border-box;
  border: 1px solid var(--gray-500);
  .search_input {
    @include font-body;
    flex: 1;
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
    width: 2rem;
    padding: 0 1rem;
    box-sizing: content-box;
  }

  svg {
    width: 100%;
    height: 100%;
  }
}

.search_input:focus ~ .search_svg {
  background: var(--gray-200);
}

.goal-list-containers {
  display: flex;
  flex-direction: column;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
}
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
  border: 1px solid black;
  padding: 0 1rem;
  width: min-content;
  border-radius: var(--button-border-radius);
}

@media screen and (min-width: $breakpoint-small) {
  .goal-list-layout {
    grid-template-rows: min-content 1fr;
  }
  .goal-definition {
    grid-column: 1/2;
    grid-row: 1/2;
    padding: 1rem 0 1rem 0;

    align-self: flex-start;
    display: flex;
    flex-direction: column;
  }

  .goal-question {
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
