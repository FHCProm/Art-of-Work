<template>
  <Dialog :open="isOpen" @close="setIsOpen" class="relative z-50">
    <div class="fixed inset-0 flex items-center justify-center p-4">
      <!--
        .............................
        .............................
         Dialog for creating new task 
         .............................
         .............................-->
      <DialogPanel
        v-if="taskDialog == true"
        :class="classes"
        class="w-full rounded bg-white"
      >
        <div class="task-dialog-image"></div>

        <DialogDescription class="task-dialog-content z-20">
          <div class="task-dialog-table-layout">
            <div class="goal-text">Make a design draf for Art of Breaking</div>
            <textarea
              class="task-input"
              rows="3"
              placeholder="New Task for this Goal"
            ></textarea>
          </div>
          <div class="task-dialog-btn">
            <dismiss-button
              text="cancel"
              btn-padding="0.3rem 3rem"
              @click="setIsOpen(false)"
            ></dismiss-button>

            <custom-button
              text="Add"
              btn-padding="0.3rem 3rem"
              btn-text-color="var(--yellow-900)"
              btn-background-color="var(--yellow-500)"
              btn-shadow-color="var(--yellow-700)"
              @click="setIsOpen(false)"
            ></custom-button>
          </div>
        </DialogDescription>

        <div class="task-dialog-accessories z-10"></div>
      </DialogPanel>

      <!--
        .............................
        .............................
         Dialog for creating new goal
         .............................
         .............................-->

      <DialogPanel
        v-if="goalDialog == true"
        :class="classes"
        class="w-full rounded bg-white"
      >
        <div class="goal-dialog-image"></div>

        <DialogDescription class="goal-dialog-content z-20">
          <div class="goal-dialog-table-layout">
            <div class="text-2xl">Your One and Only Goal</div>
            <div>...for now</div>
            <input class="goal-input" type="text" placeholder="goal" />
          </div>
          <div class="goal-dialog-btn">
            <dismiss-button
              text="cancel"
              btn-padding="0.3rem 2rem"
              @click="setIsOpen(false)"
            ></dismiss-button>

            <custom-button
              text="Confirm"
              btn-padding="0.3rem 2rem"
              btn-text-color="var(--yellow-900)"
              btn-background-color="var(--yellow-500)"
              btn-shadow-color="var(--yellow-700)"
              @click="setIsOpen(false)"
            ></custom-button>
          </div>
        </DialogDescription>

        <div class="goal-dialog-accessories z-10"></div>
      </DialogPanel>
    </div>
  </Dialog>
</template>

<script setup>
import CustomButton from "@/components/buttons/CustomButton.vue";

import DismissButton from "@/components/buttons/dashboard/DismissButton.vue";
import { ref, computed } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";

const props = defineProps({
  taskDialog: {
    type: Boolean,
  },
  goalDialog: {
    type: Boolean,
  },
});

const classes = computed(() => ({
  "task-dialog": props.taskDialog,
  "goal-dialog": props.goalDialog,
}));

const isOpen = ref(false);
function setIsOpen(value) {
  isOpen.value = value;
}

defineExpose({
  isOpen,
});
</script>

<style lang="scss" scoped>
.task-dialog {
  display: grid;
  align-items: center;
  max-width: 50rem;
  padding: 1.2rem;
  position: relative;

  &-accessories {
    position: absolute;
    margin: 1rem;
    border: 1px solid black;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }

  &-image {
    grid-column: 1/2;
    min-width: 10rem;
    min-height: 10rem;
    height: 100%;

    background: url("../../assets/Modals/papers.jpg");
  }

  &-content {
    grid-column: 2/3;
    padding: 0 1rem 0 1rem;
    margin: 2rem 0 2rem 0;
  }
  &-btn {
    width: 70%;
    float: right;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    padding: 1rem;
    column-gap: 1rem;
  }
}

.goal-dialog {
  display: grid;
  align-items: center;
  max-width: 50rem;
  padding: 1.2rem;
  position: relative;
  grid-template-columns: 1fr 1fr;

  &-accessories {
    position: absolute;
    margin: 1rem;
    border: 1px solid black;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }

  &-image {
    grid-column: 1/2;
    min-width: 100%;
    min-height: 10rem;
    height: 100%;
    background: url("../../assets/Modals/goal.png");
    background-repeat: no-repeat;
    background-position-x: 50%;
  }

  &-content {
    grid-column: 2/3;
    padding: 0 1rem 0 1rem;
    margin: 2rem 0 2rem 0;
  }

  &-btn {
    display: grid;
    float: right;
    grid-template-columns: 120px 120px;
    align-items: center;
    justify-items: end;
    padding: 1rem 0px;
    column-gap: 0.5rem;
  }
}

.task-dialog-table-layout {
  display: flex;
  flex-direction: column;
  padding: 1rem;

  .goal-text {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }

  .task-input {
    width: 100%;
    margin-top: 1.5rem;
    padding: 0.5rem;
    min-width: 10rem;
    box-shadow: 2px 2px 8px rgba(black, 0.3);
  }

  .task-input:focus {
    border: none;
    outline: none;
  }
}

.goal-dialog-table-layout {
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 1rem;
  gap: 1rem;
  text-align: center;
  .goal-input {
    border-bottom: 2px solid gray;
    width: 100%;
  }

  .goal-input:focus {
    border-bottom: 2px solid black;
    outline: none;
  }
}
</style>
