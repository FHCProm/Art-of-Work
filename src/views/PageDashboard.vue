<template>
  <div class="page-layout pt-4" ref="refDashboard">
    <digital-timer
      class="digital-timer z-10"
      @VisibleSectionUpdate="changeSection"
      :mediumScreenOrAbove="mediumScreenOrAbove"
    ></digital-timer>

    <goal-banner
      v-if="visibleSection == 'goalBanner' || mediumScreenOrAbove"
      class="goal-banner animatePartialLayout"
    ></goal-banner>

    <task-banner
      :mediumScreenOrAbove="mediumScreenOrAbove"
      v-if="visibleSection == 'taskBanner' || mediumScreenOrAbove"
      class="task-banner animatePartialLayout"
    ></task-banner>
  </div>
</template>

<script setup>
import DigitalTimer from "@/components/DigitalTimer.vue";
import GoalBanner from "@/components/GoalBanner.vue";
import TaskBanner from "@/components/TaskBanner.vue";

import { ref } from "vue";
import { onMounted } from "vue";

let visibleSection = ref("taskBanner");
let refDashboard = ref(null);
let mediumScreenOrAbove = ref(false);

function changeSection(section) {
  visibleSection.value = section == "Go to Task" ? "taskBanner" : "goalBanner";
}

// the changing variable is called viewport or "innerwidth"
onMounted(() => {
  mediumScreenOrAbove.value = window.innerWidth > 640 ? true : false;
  window.visualViewport.addEventListener("resize", updatedashboardWidth);
});
function updatedashboardWidth() {
  if (window.innerWidth > 640) {
    mediumScreenOrAbove.value = true;
  }
  if (window.innerWidth < 640) {
    mediumScreenOrAbove.value = false;
  }
}
</script>

<style scoped lang="scss">
.page-layout {
  grid-template-columns: 1fr;
  grid-template-rows: 5rem 1fr;
  display: grid;
  justify-items: center;
  align-items: center;

  .digital-timer {
    grid-column: 1/2;
    grid-row: 1/2;
  }

  .goal-banner {
    grid-column: 1/2;
    grid-row: 2/3;
  }

  .task-banner {
    grid-column: 1/2;
    grid-row: 3/4;
  }
}

// .fadeUp-enter-active,
// .fadeUp-leave-active {
//   transition: all 0.5s ease;
// }

// .fadeUp-enter-from,
// .fadeUp-leave-to {
//   opacity: 0;

//   transform: translateY(20px) scale(0.7);
// }
.animatePartialLayout {
  animation: fadeUp 0.5s linear forwards;
}
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.7);
  }
  100% {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
}

@media screen and (min-width: $breakpoint-small) {
  .page-layout {
    grid-template-columns: 30% 70%;
    grid-template-rows: 30% 70%;
    // 25% 75%;
    .digital-timer {
      grid-column: 1/2;
      grid-row: 1/2;
      align-self: flex-start;
    }
    .goal-banner {
      align-self: flex-start;
      justify-self: center;
      grid-column: 1/2;
      grid-row: 2/3;
    }
    .task-banner {
      align-self: flex-start;
      grid-column: 2/3;
      grid-row: 1/3;
    }
  }

  .animatePartialLayout {
    animation: unset;
  }
}

@media screen and (min-width: $breakpoint-medium) {
  .page-layout {
    grid-template-columns: 25% 75%;
    grid-template-rows: 30% 70%;
  }
}
</style>
