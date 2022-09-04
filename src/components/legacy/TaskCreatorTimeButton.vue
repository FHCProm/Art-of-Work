<template>
  <div v-if="time && unit">
    <button
      @click="timeSelected"
      :class="{ 'bg-gray-500': selected, 'text-white': selected }"
      class="
        btn-time
        rounded-md
        px-2
        py-0.5
        border border-gray-600
        mx-0.5
        hover:bg-gray-500 hover:text-white
      "
      type="button"
      ref="timeButton"
    >
      {{ time }}{{ unit }}
    </button>
  </div>
</template>

<script>
export default {
  props: ["time", "unit", "selected"],

  methods: {
    timeSelected() {
      //   if (this.unit == "min") {
      //     seconds = this.time * 60;
      //   }
      //   if (this.unit == "hour") {
      //     seconds = this.time * 60 * 60;
      //   }
      this.$emit("setTimeSelected", { time: this.time, unit: this.unit });
    },
  },
};
</script>

<style lang="scss">
.btn-time {
  @include transition-ease(0.4s);
}
</style>