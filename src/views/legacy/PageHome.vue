<template>
  <div class="relative flex flex-col items-center justify-center w-full h-full">
    <timer-display :time="seconds" class="mt-2"></timer-display>
    <div
      class="
        absolute
        w-full
        timer
        opacity-20
        text-center
        -z-50
        whitespace-nowrap
        overflow-hidden
        text-4xl
        lg:text-8xl
      "
    >
      {{ editedBackgroundText }}
    </div>
  </div>
  <task-creator
    :timerStarted="timerStatus"
    @startTimer="counting"
    class="mt-2"
  ></task-creator>
  <task-list></task-list>
</template>

<script>
import TimerDisplay from "@/components/TimerDisplay.vue";
import TaskCreator from "@/components/legacy/TaskCreator.vue";
import TaskList from "@/components/TaskList.vue";
export default {
  components: {
    TimerDisplay,
    TaskCreator,
    TaskList,
  },
  data() {
    return {
      seconds: 0,
      timerStatus: "off",
      restartTimer: false,
      editedBackgroundText: "",
    };
  },
  methods: {
    async counting(object) {
      this.editedBackgroundText = this.truncate(object.text, 15);
      this.seconds = object.duration;
      while (this.seconds != 0 && this.restartTimer == false) {
        await this.wait1second();
        this.timerStatus = true;
      }
      this.timerStatus = true;
    },

    wait1second() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.seconds = this.seconds - 1;
          resolve();
        }, 1000);
      });
    },
    truncate(str, num) {
      if (str.length <= num) {
        return str;
      }
      return str.slice(0, num) + "...";
    },
  },
};
</script>

<style lang="scss">
.timer {
  font-family: "Audiowide", cursive;
}
.title {
  font-family: "Dancing Script", cursive;
}
</style>